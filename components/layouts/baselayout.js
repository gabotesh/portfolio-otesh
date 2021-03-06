 import React from 'react';
 import Header from '../shared/header';
 import Head from 'next/head'
 
 
 const Baselayout=(props)=>{

    const{className, children, isAuthenticated,user}=props;
    const headerType=props.headerType || 'default';
     
    return(
        <React.Fragment>
        <Head>
        <title> Otesh Tech</title>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous"></link>

        </Head>
        <div className="layout-container">
        <Header className={`port-nav-${headerType}`} isAuthenticated={isAuthenticated} user={user}/>

        <main className={`cover ${className}`}>
        <div className="wrapper">
        {children}

        </div>

        </main>
        </div>
        </React.Fragment>

    )

 }
 export default Baselayout;