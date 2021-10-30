import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Context/AuthProvider";
import AddOffer from "./Pages/AddOffer/AddOffer";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";
import ManageTours from "./Pages/ManageTours/ManageTours";
import MyTourPlans from "./Pages/MyTourPlans/MyTourPlans";
import NotFound from "./Pages/NotFound/NotFound";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import Header from "./Pages/Shared/Header/Header";

function App() {
  return (
    <AuthProvider>
      <div>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/placeorder/:id">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route path="/mytourplans">
              <MyTourPlans></MyTourPlans>
            </Route>
            <Route path="/managetours">
              <ManageTours></ManageTours>
            </Route>
            <Route path="/addoffer">
              <AddOffer></AddOffer>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
