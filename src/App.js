import { Component } from 'react';
import './App.css';
import {MyHome} from './templates/home/home'
import {MyGenrs} from './templates/genrs/genrs'

class App extends Component{

  state = {
      books: []
    }

  componentDidMount(){
    
  }

render(){
  
  return (<div>
    
    <MyHome/>
    <MyGenrs/>
    
    
  </div>)
}
}

export default App;
