import React from 'react';
import Baselayout from '../components/layouts/baselayout';
import Basepage from '../components/basepage';
import withAuth from '../components/HOC/withAuth';




class Owner extends React.Component{

    render(){
        return(
            <Baselayout {...this.props.auth}>
            <Basepage>
            <h1>This is owner page </h1>
            </Basepage>
            </Baselayout>
        )

    }
    
}
export default withAuth('siteOwner')(Owner);