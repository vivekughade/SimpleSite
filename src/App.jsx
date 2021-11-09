import React from 'react';
import {Switch,Route} from "react-router-dom"
import Main from './Main';
import Products from './Products';
import Products2 from './Products2';
import Features from './Features';
import Accordian from './Accordian';
import Contact from './Contact';
import ToDoList from './ToDoList';
import "./style.css"
const App = () => {
    return (
        <>

        
        
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route  path="/products" component={ Products}/>
            <Route  path="/products2" component={Products2}/>
            <Route  path="/features" component={Features}/>
            <Route  path="/accordian" component={Accordian}/>
            <Route  path="/todolist" component={ ToDoList}/>
            <Route  path="/contact" component={ Contact}/>
        </Switch>
            
        </>
    );
};

export default App;