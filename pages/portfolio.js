import React from 'react';
import Baselayout from '../components/layouts/baselayout';
import axios from 'axios';
import {Link} from '../routes'
import Basepage from '../components/basepage';
import {Col, Row, Card, CardHeader, CardBody,CardText, CardTitle} from 'reactstrap';






class portfolio extends React.Component{
    static  async getInitialProps(){
        let getPortfolio=[];
        try{
          const response=await axios.get('https://jsonplaceholder.typicode.com/posts');
          //console.log(response.data);
          getPortfolio=response.data;
        }catch(err){
          console.error(err);
        }
       
        return{getPortfolio};
      }

     renderPosts(getPortfolio){
          return getPortfolio.map((post, index)=>{
              return(
                <Col md="4">
                <React.Fragment key={index}>
                  <span>
                    <Card className="portfolio-card">
                      <CardHeader className="portfolio-card-header">Some Position {index}</CardHeader>
                      <CardBody>
                        <p className="portfolio-card-city"> Some Location {index} </p>
                        <CardTitle className="portfolio-card-title">Some Company {index}</CardTitle>
                        <CardText className="portfolio-card-text">Some Description {index}</CardText>
                        <div className="readMore"> </div>
                      </CardBody>
                    </Card>
                  </span>
                </React.Fragment>
              </Col>
              
              )


          })

     }


    render(){
        const {getPortfolio}=this.props;
        return(
            <Baselayout {...this.props.auth}>
            <Basepage className="portfolio-page" title="I am portfolio page">
            <Row>

               {this.renderPosts(getPortfolio)}

            </Row>
            </Basepage>
            </Baselayout>
        )
    }
}

export default portfolio;