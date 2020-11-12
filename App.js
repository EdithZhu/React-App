import React , {Component} from 'react';
import './App.css';
import Greet from './components/first'
import Hello from './components/Hello';
import Welcome from './components/Welcome';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import ChildComponent from './components/ChildComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css';
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import FragmentDemo from './components/FragmentDemo';
import ParentComp from './components/ParentComp';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import HookCounter from './components/HookCounter';
class App extends Component{
  render(){
  return (
    <div className = "App">
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/* <Hello name="YUE" heroName="Marvel"/>
      <p>data set</p>
      <Hello name="ZHU" heroName="Batman"/>
      <Hello name="HUIZE" heroName="Superman"/>
      <Hello name="HUANG" heroName="Ironman"/> */}
      {/* <Welcome name="YUE"/> */}
      {/* <Counter></Counter> */}
      {/* <FunctionClick></FunctionClick> */}
      {/* <ClassClick></ClassClick> */}
      {/* <EventBind></EventBind> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting></UserGreeting> */}
      {/* <NameList></NameList> */}
      {/* <Stylesheet prim={true}></Stylesheet> */}
      {/* <Inline></Inline> */}
      {/* <Form></Form> */}
      {/* <LifeCycleA></LifeCycleA> */}
      {/* <FragmentDemo></FragmentDemo> */}
      {/* <ParentComp></ParentComp> */}
      <ClickCounter></ClickCounter>
      <HoverCounter></HoverCounter>
      <HookCounter></HookCounter>
    </div>
  )
  }
}

export default App;
