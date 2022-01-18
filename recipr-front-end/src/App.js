import "./App.css";
import ShowSearchbar from "./components/searchbar/searchbar";
import Homepage from "./pages/Home/index";
import AppContext, { MyContext } from "./context";
import ShowNav from "./components/Navbar/navbar";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Error from "./pages/Error/Error";
import React, { useContext, useEffect } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import axios from "./Axios";
import Favorites from "./pages/Favorites/Favorites";
import MyRecipes from "./pages/Myrecipes/myrecipes";
import AddRecipes from "./pages/AddRecipes/addrecipes";

function App() {
  const { user, setUser } = useContext(MyContext);
  useEffect(() => {
    axios.post("/auto-login").then(({ data }) => setUser(data));
  }, []);
  return (
    <Router>
      <ShowNav />
      <Switch>
        <Route exact path="/">
          <ShowSearchbar />
          <Homepage />
        </Route>
        {!user && (
          <>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
          </>
        )}
        {user && (
          <Route exact path="/my-favorites">
            <Favorites />
          </Route>
        )}
        {user && (
        <Route exact path="/add_recipe">
          <AddRecipes />
        </Route>)}
        {user && (
        <Route exact path="/my_recipes">
          <MyRecipes />
        </Route>)}
      </Switch>
    </Router>
  );
}

export default App;



//TEST