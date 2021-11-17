import React from "react";
import { Route } from "react-router-dom";
import { Header } from "./Components/imports";
import { Home, Cart } from "./pages";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/cart" component={Cart} />
        </div>
      </div>
    </div>
  );
}

export default App;
