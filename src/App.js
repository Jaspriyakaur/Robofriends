import React,{Component} from "react";
import CardList from "../src/Components/CardList";
import Scroll from '../src/Components/Scroll';
import Searchbox from '../src/Components/Searchbox';
import './App.css';
class App extends Component{
  constructor(){
    super()
    this.state={
      robots:[],
      searchfield:'',
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({robots:users}));
  }
  onSearchChange=(event)=>{
    this.setState({searchfield:event.target.value})
     const FilteredRobots=this.state.robots.filter(robot=>{
    return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase)
     })
   console.log(FilteredRobots);
     
  }


  render(){
    return(
  <div className="tc">
  <h1 className="f1">ROBOFRIENDS</h1>
  <Searchbox SearchChange={this.onSearchChange}/>
  <Scroll>
  <CardList robots={this.state.robots}/>
  </Scroll>
  </div>
  );
  }
}
export default App;

