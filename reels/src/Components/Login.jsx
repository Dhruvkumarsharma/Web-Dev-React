import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import Img1 from "../Assets/img1.jpg";
import Img2 from "../Assets/img2.jpg";
import Img3 from "../Assets/img3.jpg";
import Img4 from "../Assets/img4.jpg";
import Img5 from "../Assets/img5.jpg";
import Insta from "../Assets/insta.png";
import Alert from '@material-ui/lab/Alert';
import { CarouselProvider, Slider, Slide, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import "./Login.css";
import {
  TextField,
  Grid,
  Button,
  Paper,
  Card,
  CardContent,
  CardActions,
  Container,
  CardMedia,
  Typography,
  makeStyles,
} from "@material-ui/core";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  let { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    //   email , password
    try {
      setLoading(true);
      await login(email, password);
      setLoading(false);
      props.history.push("/"); //navigate to /
    } catch (err) {
      setMessage(err.message);
      setEmail("");
      setPassword("");
      setLoading(false)
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
    alignCenter: {
      justifyContent: "center",
    },
  });
  let classes = useStyles();

  return (
    <div>

      {(loading == true) ? (<h1>Please wait while loding...</h1>):
      (<div className='login-container'>
        <div className='imgcar' style={{ backgroundImage: `url(` + Insta + `)`, backgroundSize: 'cover' }}>
          <div className='caro'>
            <CarouselProvider
              visibleSlides={1}
              totalSlides={5}
              step={3}
              naturalSlideWidth={238}
              naturalSlideHeight={423}
              hasMasterSpinner
              isPlaying={true}
              infinite={true}
              dragEnabled={false}
              touchEnabled={false}
            >
              <Slider>
                <Slide index={0}>
                  <Image src={Img1} />
                </Slide>
                <Slide index={1}>
                  <Image src={Img2} />
                </Slide>
                <Slide index={2}>
                  <Image src={Img3} />
                </Slide>
                <Slide index={3}>
                  <Image src={Img4} />
                </Slide>
                <Slide index={4}>
                  <Image src={Img5} />
                </Slide>
              </Slider>
  
            </CarouselProvider>
          </div>
        </div>
        <div className='login-form'>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <div className="insta-head">
                <img src={logo} />
              </div>
              {message && <Alert severity="error">{message}</Alert>}
              <TextField InputLabelProps={{ style: { width: '-webkit-fill-available' } }} className={classes.email} margin='dense'
                onChange={(e) => { setEmail(e.target.value) }} id="outlined-basic" label="Enter Email" variant="outlined" fullWidth={true} size='small' />
              <TextField InputLabelProps={{ style: { width: '-webkit-fill-available' } }} className={classes.password} margin='dense'
                onChange={(e) => { setPassword(e.target.value) }} id="outlined-basic" label="Password" variant="outlined" fullWidth={true} size='small' />
              <Typography variant='subtitle1'>
                <Link className={classes.link} variant="inherit" underline='none' href="#" >
                  Forget Password ?
                </Link>
              </Typography>
            </CardContent>
  
            <CardActions>
              <Button disabled={loading} onClick={handleLogin} className={classes.buton} fullWidth={true} variant="contained" color="primary">
                Log In
              </Button>
            </CardActions>
          </Card>
  
          <Card className={classes.root2} variant="outlined">
            <CardContent>
              <Typography className={classes.typo} variant='subtitle1'>
                Don't have an account? <Link className={classes.link2} variant="inherit" underline='none' to="/signup" >
                  Sign up
                </Link>
              </Typography>
            </CardContent>
          </Card>
        </div>
  
      </div>)
}</div>
  );
};

export default Login;