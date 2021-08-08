import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';
import Button from "@material-ui/core/Button";
import PhotoCamera from "@material-ui/icons/PhotoCamera"
import { firebaseDB, firebaseStorage } from '../config/firebase';
import { uuid } from "uuidv4";
import VideoPost from './VideoPost';


const Feeds = (props) => {
    const { signout } = useContext(AuthContext);
    const [videoFile, setVideoFile] = useState(null);
    const [posts, setPosts] = useState([]);
    const { currentUser } = useContext(AuthContext);
    const handleInputFile = (e) => {
        let file = e.target.files[0];
        setVideoFile(file);
    }
    const handleSignout = async () => {
        await signout();
        props.history.push("/login");
    }
    const handleUploadFile = async () => {
        try {
            let uid = currentUser.uid;
            const uploadVideoFile = firebaseStorage.ref(`/profilePhotos/${uid}/${Date.now()}.mp4`).put(videoFile);
            uploadVideoFile.on('state_changed', fun1, fun2, fun3);
            function fun1(snapshot) {
                let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log(progress);
            }

            function fun2(err) {
                console.log(err);
            }
            async function fun3() {
                let videoUrl = await uploadVideoFile.snapshot.ref.getDownloadURL();
                console.log(videoUrl);
                let pid = uuid();
                await firebaseDB.collection("posts").doc(pid).set({
                    pid: pid,
                    uid: uid,
                    comments: [],
                    likes: [],
                    videoLink: videoUrl
                });
                let doc = await firebaseDB.collection("users").doc(uid).get();
                let document = doc.data();
                console.log(document);
                document.postsCreated.push(pid);
                await firebaseDB.collection("users").doc(uid).set(document);
            }
        } catch (err) {

        }
    }

    let conditionObject = {
        root: null, //observe from whole page
        threshold: "0.8", //80%
      };
    
      function cb(entries) {
        console.log(entries);
        entries.forEach((entry) => {
          let child = entry.target.children[0];
          // play(); => async
          // pause(); => sync
    
          child.play().then(function () {
            if (entry.isIntersecting == false) {
              child.pause();
            }
          });
        });
      }
    
      useEffect(() => {
        // code which will run when the component loads
        let observerObject = new IntersectionObserver(cb, conditionObject);
        let elements = document.querySelectorAll(".video-container");
    
        elements.forEach((el) => {
          observerObject.observe(el); //Intersection Observer starts observing each video element
        });
      }, [posts]);
    useEffect(() => {
        firebaseDB.collection("posts").get().then((snapshot) => {
            let allPosts = snapshot.docs.map((doc) => {
                return doc.data();
            });
            setPosts(allPosts);
        })
    }, [])


    return (
        <>
            <h1>Feeds</h1>
            <button onClick={handleSignout}>Signout</button>


            <div className="upload-video">
                <div>
                    
                    <label>
                        <Button variant="outlined" color="secondary" onClick={handleUploadFile} startIcon={<PhotoCamera></PhotoCamera>}>
                        <input type="file" hidden onChange={handleInputFile}></input>
                            Upload
                        </Button>
                    </label>
                </div>
                <div className="feeds-video-list">
                    {posts.map((postObj) => {
                        return <VideoPost key={postObj.pid} postObj={postObj}></VideoPost>;
                    })}
                </div>
            </div>
        </>
    );
}

export default Feeds;