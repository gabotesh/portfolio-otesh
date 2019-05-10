import React from 'react';
import Header from '../components/shared/header';
import Baselayout from '../components/layouts/baselayout';
import Supercomponents from '../components/supercomponents';
import axios from 'axios';




 class Index extends Supercomponents{
  
   

  static  async getInitialProps(){
    let userData={};
    try{
      const response=await axios.get('https://jsonplaceholder.typicode.com/todos/1');
      //console.log(response.data);
      userData=response.data;
    }catch(err){
      console.error(err);
    }
   
    return{initialData:[1,2,3,4], userData:userData};
  }

constructor(props){
  super(props);
  console.log('constructor');
  this.state={
    title:'i am index page'

  }

}

componentDidMount(){
  console.log('componentDidMount');


}


componentDidUpdate(){
  console.log('componentDidUpdate');


}
componentWillUnmount(){
  console.log('componentWillUnmount');

}

updateTitle=()=>{
  
  this.setState({title:'i am updated index page'});

}



    render(){
      debugger;
    const title=this.state.title;
    const {userData,initialData}=this.props;


      return(
        <Baselayout>
        <div>
        <h1>I am index page from class component, and i was updated</h1>
        <h2>{title}</h2>
        <h2>{userData.title}</h2>

        <button onClick={this.updateTitle}>Change title</button>
                </div>
         </Baselayout>

      )

    }
  } 

  export default Index; 