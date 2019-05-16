import React from 'react';
import Baselayout from '../components/layouts/baselayout';
import Basepage from '../components/basepage';





class blogs extends React.Component{

    render(){
        return(
            <Baselayout {...this.props.auth}>
            <Basepage title="I am Blog page">
            <h1>Am blog page</h1>
            </Basepage>
            </Baselayout>
        )
    }
}

export default blogs;