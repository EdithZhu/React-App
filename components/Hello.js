import React, { Component } from 'react'

// const Hello = (props) =>{
//     return(
//         <div>
//             <h1>Hello, {props.name} a.k.a. </h1>
//             {props.heroName}
//         </div>
//     )
// }

class Hello extends Component{
    render(){
        //props are immutable
        return(
                    <div>
                        <h1>Hello, {this.props.name} a.k.a. </h1>
                        {this.props.heroName}
                    </div>
                ) 
    }
} 


export default Hello;