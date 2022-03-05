import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import PostItem from "./components/PostItem/PostItem";
import { auth, db } from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Button, Input } from "@material-ui/core";
import { CenterFocusStrong } from "@mui/icons-material";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
function App() {
  const [posts, setPosts] = useState([]);
  const [openModal, setOpenModal] = useState(false); // Check open modal
  const [openSignInModal, setOpenSignInModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  //useEffect -> Runs a piece of code based on a specific condition.
  useEffect(() => {
    // this is where the code runs
    getData();
  }, []);

  useEffect(() => {
    const unSubcribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user has logged in...
        setUser(authUser);
        setUsername(authUser.displayName);
      } else {
        // user has logged out...
        setUser(null);
      }
    });
    return () => {
      // Perform some cleanup actions
      unSubcribe();
    };
  }, [user, username]);

  const getData = async () => {
    const postsCol = collection(db, "posts");
    const snapshot = await getDocs(postsCol);
    setPosts(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        post: doc.data(),
      }))
    );
  };

  const handleClickSignUp = (childData) => {
    setOpenModal(childData);
  };

  const handleClickSignIn = (childData) => {
    setOpenSignInModal(childData);
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        return authUser.user.updateProfile({
          displayName: username,
        });
      })
      .catch((error) => alert(error.message));
    setOpenModal(false);
  };

  const handleSignIn = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((authUser) => {
        return setUsername(authUser.user.displayName);
      })
      .catch((error) => alert(error.message));
    setOpenSignInModal(false);
  };

  const handleClickLogOut = (childData) => {
    if (childData === true) {
      auth.signOut();
    }
  };

  return (
    <div className="App">
      {/* Header */}
      <Header
        takeMessSignUp={handleClickSignUp}
        takeMessLogOut={handleClickLogOut}
        takeMessLogIn={handleClickSignIn}
        user={user}
      />
      {/* Posts */}
      <div className="Post_list">
        {posts.map(({ id, post }) => (
          <PostItem key={id} postId={id} user={user} data={post} />
        ))}
      </div>
      {/* Modal sign up */}
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <div style={modalStyle} className={classes.paper}>
          <form className="form_signup">
            <img
              className="form_logo"
              src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
              alt="Logo"
            />
            <div className="form_group">
              <label>User name:</label>
              <Input
                className="form_field"
                placeholder="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form_group">
              <label>Email:</label>
              <Input
                className="form_field"
                placeholder="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form_group">
              <label>Password:</label>
              <Input
                className="form_field"
                placeholder="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="btn-signup" onClick={handleSignUp}>
              Sign up
            </button>
          </form>
        </div>
      </Modal>
      {/* Modal sign in */}
      <Modal open={openSignInModal} onClose={() => setOpenSignInModal(false)}>
        <div style={modalStyle} className={classes.paper}>
          <form className="form_signup">
            <img
              className="form_logo"
              src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
              alt="Logo"
            />
            <div className="form_group">
              <label style={{ display: "block" }}>Email:</label>
              <Input
                className="form_field"
                placeholder="Email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form_group">
              <label style={{ display: "block" }}>Password:</label>
              <Input
                className="form_field"
                placeholder="Password"
                type="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="btn-signup" onClick={handleSignIn}>
              Sign In
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default App;
