import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
        super()
    
        this.state = {
             parentName : 'Parent'
        }
        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName){
        //alert('Hello ' + this.state.parentName);
        alert(`Hello ${this.state.parentName} from ${childName}`)//back quotes ``
    }
    
    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent} />
            </div>
        )
    }
}

export default ParentComponent