import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super();

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
//if/else
    // if(this.state.isLoggedIn){
    //     return (
    //         <div>
    //             Welcome John
    //         </div>
    //     )
    // }
    // else{
    //     return (
    //         <div>
    //             Welcome Guest
    //         </div>
    //     )
    // }

//element variable
    // let message
    // if (this.state.isLoggedIn) {
    //     message = <div>Welcome Yue</div>
    // } else {
    //     message = <div>Welcome Guest</div>
    // }
    // return <div>{message}</div>

//ternary operator
    return(
        this.state.isLoggedIn ?
        <div>Welcome Yue</div> :
        <div>Welcome Guest</div>

    )

//short circuit operator???
    // return (
    //   <div>
    //     {this.state.isLoggedIn && <div>welcome YUE</div>}
    //     {!this.state.isLoggedIn && <div> Welcome Guest</div>}
    //   </div>
    // );
  }
}

export default UserGreeting;