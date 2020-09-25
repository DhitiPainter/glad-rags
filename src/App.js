import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

import { auth, createUserProfileDocuement } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";

import HomePage from "./pages/hompage/homepage.component";
import ShopPage from "./pages/shop/shop.component.jsx";
import SignInAndSignUp from "./pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component.jsx";
import Header from "./components/header/header.component.jsx";

import "./App.css";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocuement(userAuth);
        userRef.onSnapshot((snap) => {
          setCurrentUser(
            {
              id: snap.id,
              ...snap.data(),
            },
            () => {}
          );
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
