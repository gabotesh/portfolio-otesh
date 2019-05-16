import React from 'react';
import Typed from 'react-typed';
import Baselayout from '../components/layouts/baselayout';
import { Col, Row, Container } from 'reactstrap';


 class Index extends React.Component{ 
   

constructor(props){
  super(props);  
  this.roles=['I am web fullstack developer','Tech lover','Team player','React.js and node.js'];
}

    render(){
   const{isAuthenticated,user}=this.props.auth;

      return(
        <Baselayout className="cover" {...this.props.auth} headerType="index">
  <div className="main-section">
    <div className="background-image">
      <img className="image" src="/static/images/background.png" />
    </div>

    <Container>
      <Row>
        <Col md="6">
          <div className="hero-section">
            <div className={`flipper`}>
              <div className="back">
                <div className="hero-section-content">
                  <h2> Full Stack Web Developer </h2>
                  <div className="hero-section-content-intro">
                    Have a look at my portfolio and job history.
                  </div>
                </div>
                <img className="image" src="/static/images/section-1.png"/>
                <div className="shadow-custom">
                  <div className="shadow-inner"> </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col md="6" className="hero-welcome-wrapper">
          <div className="hero-welcome-text">
            <h1>

              {isAuthenticated && <b><span>{user.name} </span></b>}
              Welcome to the portfolio website of Otesh technologies.
              Get informed, collaborate and discover projects I was working on through the years!
            </h1>
          </div>

          <Typed
            loop
            typeSpeed={70}
            backSpeed={70}
            strings={this.roles}
            backDelay={1000}
            loopCount={0}
            showCursor
            className="self-typed"
            cursorChar="|"
              />     



          <div className="hero-welcome-bio">
            <h1>
              Let's take a look on my work.
            </h1>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
</Baselayout>


      )

    }
  } 

  export default Index; 