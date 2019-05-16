import React from 'react';
import Baselayout from '../components/layouts/baselayout';
import Basepage from '../components/basepage';
import withAuth from '../components/HOC/withAuth';




class cv extends React.Component{

    render(){
        return(
            <Baselayout {...this.props.auth}>
            <Basepage>
            <h1>am page cv</h1>
            </Basepage>
            </Baselayout>
        )

    }
    
}
export default withAuth()(cv);