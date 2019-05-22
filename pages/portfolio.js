import React from 'react';
import Baselayout from '../components/layouts/baselayout';
import Basepage from '../components/basepage';
import {Col, Row, Card, CardHeader, CardBody,CardText, CardTitle, Button} from 'reactstrap';
import {getPortfolio,deletePortfolio} from '../action'
import {Router} from '../routes';



class portfolio extends React.Component{
    static  async getInitialProps(){
        
        let portfolios=[];
        try{
          portfolios= await getPortfolio();

        }catch(err){
          console.error(err);
        }
        return {portfolios};
      }

  dispayDeleteWarning(portfolioId){
         const isConfrm=confirm('Are you sure you want to delete this portfolio???');
         if(isConfrm){
           this.deletePortfolio1(portfolioId);
         }

      }


  deletePortfolio1(portfolioId){
    deletePortfolio(portfolioId)
    .then(()=>{  
      
      Router.pushRoute('/portfolio');

    })
    .catch(err=>console.error(err))


      }

  renderPortfolio(portfolios){
         const {isAuthenticated, isSiteOwner}=this.props.auth;
          return portfolios.map((portfolio, index)=>{
              return(
                <Col key={index} md="4">
                <React.Fragment >
                  <span>
                    <Card className="portfolio-card">
                      <CardHeader className="portfolio-card-header">{portfolio.position}</CardHeader>
                      <CardBody>
                        <p className="portfolio-card-city"> {portfolio.location} </p>
                        <CardTitle className="portfolio-card-title">{portfolio.title}</CardTitle>
                        <CardText className="portfolio-card-text">{portfolio.description}</CardText>
                        <div className="readMore">

                        {isAuthenticated && isSiteOwner &&
                        <React.Fragment>
                          <Button onClick={()=>Router.pushRoute(`/portfolio/${portfolio._id}/edit`)} color="warning">Edit </Button>{' '}
                          <Button onClick={()=>this.dispayDeleteWarning(portfolio._id)} color="danger">Delete</Button>
                        </React.Fragment>
                        }
                         </div>
                      </CardBody>
                       </Card>
                  </span>
                </React.Fragment>
              </Col>
              
              )


          })

     }


    render(){
      const {isAuthenticated, isSiteOwner}=this.props.auth;
      const {portfolios}=this.props;
        return(
            <Baselayout {...this.props.auth}>
            <Basepage className="portfolio-page" title="I am portfolio page">
            { isAuthenticated && isSiteOwner &&
            <Button onClick={()=>Router.pushRoute('/portfolioNew')} 
                    color="success" 
                    className="create-port-btn">Create portfolio
                     </Button>
            }
            <Row>

               {this.renderPortfolio(portfolios)}

            </Row>
            </Basepage>
            </Baselayout>
        )
    }
}

export default portfolio;