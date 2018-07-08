import React from "react";
import { Route } from "react-router-dom";
import bookList from "../Components/bookList";
import bookSearch from "../Components/bookSearch";
import postBook from "../Components/postBook";
import Header from "../Header";

const ReactRouter =()=>{
    return (
        <React.Fragment>
            <Header />
            <Route exact path="/" component={bookList} />
            <Route  path="/bookSearch" component={bookSearch} />
            <Route  path="/postBook" component={postBook} />
        </React.Fragment>
    );}

export default ReactRouter;