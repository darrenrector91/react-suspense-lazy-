import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navigation from "./components/Navbar";
import Banner from "./components/Banner";
import Spinner from "./components/Spinner";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./App.css";
import { Button } from "reactstrap";
import { relative } from "path";

const UserTable = lazy(() => import("./components/UserTable"));
const EmpCards = lazy(() => import("./components/Cards"));

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Banner />
        <div className="btnWrapper">
          <Link to="/usertable">
            <Button className="btnRight" color="warning" size="lg">
              View Table
            </Button>
          </Link>
          <Link to="/cards">
            <Button className="btnRight" color="info" size="lg">
              View Cards
            </Button>
          </Link>
          <Suspense
            fallback={
              <div>
                <Spinner
                  style={{ position: "relative", top: "20px" }}
                  // className="spinner"
                />
              </div>
            }
          >
            <Route exact path="/cards" component={EmpCards} />
            <Route path="/usertable" component={UserTable} />
          </Suspense>
        </div>
      </Router>
    </div>
  );
}

export default App;
