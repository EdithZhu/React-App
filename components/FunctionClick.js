import React, { Component } from 'react'

function FunctionClick(){
    function clickHandler(){
        console.log("Button Clicked")
    }

    return(
        <button onClick={clickHandler}>click</button>
    )
}


export default FunctionClick;