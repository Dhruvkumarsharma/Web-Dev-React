
import React, { useContext, useState } from "react";
import { firebaseDB, firebaseStorage } from "../config/firebase";
import { AuthContext } from "../context/AuthProvider";
import { TextField, Grid, Button, Paper, Card, CardContent, CardActions, Container, CardMedia, Typography, makeStyles } from "@material-ui/core";
import logo from "../logo.png";
import { AddAPhoto } from "@material-ui/icons";
import { Link } from "react-router-dom";


const Signup = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [message, setMessage] = useState("");
  const { signup } = useContext(AuthContext);

  const handleFileSubmit = (event) => {
    let fileObject = event.target.files[0];
    setProfileImage(fileObject);
  };

  const handleSignUp = async () => {
    try {
      let response = await signup(email, password);
      let uid = response.user.uid;
      const uploadPhotoObject = firebaseStorage
        .ref(`/profilePhotos/${uid}/image.jpg`)
        .put(profileImage);
      uploadPhotoObject.on("state_changed", fun1, fun2, fun3);
      //on process
      function fun1(snapshot) {
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
      }
      //on error
      function fun2(error) {
        console.log(error);
      }
      //on sucess
      async function fun3() {
        let profileImageUrl =
          await uploadPhotoObject.snapshot.ref.getDownloadURL();
        firebaseDB.collection("users").doc(uid).set({
          email: email,
          userId: uid,
          username: username,
          profileImageUrl: profileImageUrl,
          postsCreated: []
        });
        props.history.push("/");
      }
    } catch (err) {
      setMessage(err.message);
    }
  };
  let useStyles = makeStyles({
    centerDivs: {
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      width: "100vw",
    },
    carousal: { height: "10rem", backgroundColor: "lightgray" },
    fullWidth: {
      width: "100%",
    },
    centerElements: {
      display: "flex",
      flexDirection: "column",
    },
    mb: {
      marginBottom: "1rem",
    },
    padding: {
      paddingTop: "1rem",
      paddingBottom: "1rem",
    },
    fl: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    alignCenter: {
      justifyContent: "center",
    },
  });
  let classes = useStyles();

  return (
    <>
      <Container>
        <Grid container className={classes.fl}>
          <Grid item sm={3}>
            <Card variant="outlined">
              <CardMedia image={logo} style={{ height: "5rem", backgroundSize: "contain" }}></CardMedia>
              <Typography variant="p" style={{ color: "red", display: "flex", justifyContent: "center", alignItems: "center" }}>{message}</Typography>
              <CardContent className={classes.centerElements}>
                <TextField className={classes.mb} label="Username" type="username" variant="outlined" value={username} onChange={(e) => setUsername(e.target.value)} size="small"></TextField>
                <TextField className={classes.mb} label="Email" type="email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} size="small"></TextField>
                <TextField className={classes.mb} label="Password" type="password" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)} size="small"></TextField>
                <Button
                  variant="outlined"
                  color="secondary"
                  component="label"
                  startIcon={<AddAPhoto></AddAPhoto>}
                  onChange={(e) => {
                    handleFileSubmit(e);
                  }}
                >
                  Upload File
                  <input
                    type="file"
                    hidden
                  />
                </Button>

              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSignUp}
                  className={classes.fullWidth}
                >
                  Signup
                </Button>
              </CardActions>
              <Card variant="outlined" className={classes.padding}>
                <Typography style={{textAlign:"center"}}>
                  Already have an account ?
                  <Link to="/login">
                    login
                  </Link>
                </Typography>
              </Card>

            </Card>
          </Grid>
        </Grid>
      </Container>
      {/* <h1>Signup Page</h1>
      <div>
        <div>
          Username
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>
        <div>
          Email
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          Password
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          Profile Image
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              handleFileSubmit(e);
            }}
          ></input>
        </div>
      </div>
      <button onClick={handleSignUp}>SignUp</button>
      <h2 style={{ color: "red" }}>{message}</h2>{" "} */}
    </>
  );
};

export default Signup;