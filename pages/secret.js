import React from 'react';
import Baselayout from '../components/layouts/baselayout';
import Basepage from '../components/basepage';
import withAuth from '../components/HOC/withAuth';
import axios from 'axios';
import {getSecretData} from '../action';



class secret extends React.Component{

    static async getInitialProps({req}){

        const anotherSecretData=  await getSecretData(req);

        return {anotherSecretData};
    }

    
  async  componentDidMount(){
      const secretData= await getSecretData();
      this.setState({
          secretData
         });

    }

    constructor(props){
        super();
        this.state={
            secretData:[]
        }

    }

    displaySecretData(){
        const {secretData}=this.state;
        if(secretData && secretData.length > 0){
            return secretData.map((data, index)=>{
                return(
                    <div key={index}>
                    <p>{data.title}</p>
                    <p>{data.description}</p>
                    </div>
                )

            })

        }
        return null;
    }
    
    render(){
        const {superSecretValue}=this.props;
        return(
            <Baselayout {...this.props.auth}>
            <Basepage>
            <h1>I am page secret</h1>
            {this.displaySecretData()}
            </Basepage>
            </Baselayout>
        )        

    }
    
}
export default withAuth()(secret);