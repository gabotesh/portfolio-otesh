import React from 'react';
import Baselayout from '../layouts/baselayout';
import Basepage from '../basepage'

const namespace='http://localhost:3000/';


export default function(role){

    return function(Component){
        return class withAuth extends React.Component{
     
         static async getInitialProps(args){
     
             const pageProps= await Component.getInitialProps && await Component.getInitialProps(args);
             return{...pageProps};
     
         }
             renderProtectedPage(){
                 const { isAuthenticated, user}=this.props.auth;
                 const userRole=user && user[`${namespace}role`];
                 let isAuthorized=false;
     
                 if(role){
     
                     if(userRole && userRole === role){
                         isAuthorized=true;
                     }
                 }else{
                     isAuthorized=true;
                 }
     
                 if(!isAuthenticated){
                     return(
                         <Baselayout {...this.props.auth}>
                         <Basepage>
                         <h1> You are not Authenticated. Please login to access this page</h1>
                         </Basepage>
                         </Baselayout>
             
                         )  
     
                 }else if (!isAuthorized){
                     return(
                         <Baselayout {...this.props.auth}>
                         <Basepage>
                         <h1>You are not Authorized. You dont have permission to access this page</h1>
                         </Basepage>
                         </Baselayout>
             
                         )  
     
                 }else{
     
                     return(<Component {...this.props}/>)
     
                 }
     
             }  
     
             render(){
                return this.renderProtectedPage()
     
             }
         }
     
     } 

}
 