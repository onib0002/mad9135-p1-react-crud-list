import React, { useState, Fragment, useEffect, Component } from "react";
import {BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar"
import NewItem from "./components/NewItem"
import ListView from "./components/ListView"
import data from "./mock-data.json";

if(!(JSON.parse(localStorage.getItem('onibile')))) {
  localStorage.setItem('onibile', JSON.stringify(data));
}


export default function App(){
  return(
    <div className="App">
      <main>
        <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route path = "/" exact>
            <ListView/>
          </Route>
          <Route path = "/addList" >
            <NewItem />
          </Route>
        </Switch> 
        </BrowserRouter>
        </main>  
    </div>
  );
}
