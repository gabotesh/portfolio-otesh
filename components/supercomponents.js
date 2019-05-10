import React from 'react';
import Baselayout from '../components/layouts/baselayout';




class Supercomponents extends React.Component{

    constructor(props){
        super(props);
        this.someVariable='just some variables';
    }

    alertName(title){
     alert(title);
    }

    render(){
        return(
            <Baselayout>
            <h1>Am blog page</h1>
            </Baselayout>
        )
    }
}

export default Supercomponents;