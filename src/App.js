import "./App.css";
import React from "react";
import Navigation from "./components/navbar/Navigation";
import Home from "./components/Home";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import { Route, Routes } from "react-router-dom";
import Janneth from "./components/Janneth";
import Sinergix from "./components/Sinergix";
import Error404 from "./components/Error404";

function App() {
  return (
    <div className="App" id= "app">
      <Navigation/>
        <Routes>
              <Route exact path="/" element={
                <Home />
              }>
              </Route>
              <Route path="/services" element={
                <Services />
              }>
              </Route>
              <Route path="/work" element={
                <Work />
              }>
              </Route>
              <Route path="/contact" element={
                <Contact />
              }>
              </Route>
              <Route path="/janneth" element={
                <Janneth />
              }>
              </Route>
              <Route path="/sinergix" element={
                <Sinergix />
              }>
              </Route>
              <Route path="*" element={
                <Error404/>
              }>
              </Route>
        </Routes>
      </div>
  );
}

export default App;
