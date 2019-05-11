import React from 'react';
import Baselayout from '../components/layouts/baselayout';
import Basepage from '../components/basepage';
import auth0Client from '../Services/auth0';
import {withRouter} from 'next/router';





class Callback extends React.Component{

   async componentDidMount(){
      await auth0Client.handleAuthentication();
      this.props.router.push('/callback');

    }

    render(){
        return(
            <Baselayout {...this.props.auth}>
            <Basepage>
            <h1>You have been loggedin</h1>
            </Basepage>
            </Baselayout>
        )
    }
}

export default withRouter(Callback);