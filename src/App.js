import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { About, Homepage, Product, ProductDetails } from "./pages";
import NotFound from "./pages/NotFound/NotFound";

const App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Homepage />
                </Route>
                <Route path="/product">
                    <Product />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route exact path="/:slug">
                    <ProductDetails />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
};

export default App;
