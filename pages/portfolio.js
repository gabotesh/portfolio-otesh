import React from 'react';
import Baselayout from '../components/layouts/baselayout';
import Basepage from '../components/basepage';
import {Col, Row, Button} from 'reactstrap';
import {getPortfolio,deletePortfolio} from '../action'
import {Router} from '../routes';
import PortfolioCard from '../components/portfolio/portfolioCard';



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

  dispayDeleteWarning(portfolioId, e){
         e.stopPropagation();
         const isConfrm=confirm('Are you sure you want to delete this portfolio???');
         if(isConfrm){
           this.deletePortfolio1(portfolioId);
         }

      }

  navigateToEdit(portfolioId, e){
    e.stopPropagation();
     Router.pushRoute(`/portfolio/${portfolioId}/edit`)

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
                <PortfolioCard portfolio={portfolio}>
                {isAuthenticated && isSiteOwner &&
                    <React.Fragment>
                      <Button onClick={(e)=>this.navigateToEdit(portfolio._id, e)} color="warning">Edit </Button>{' '}
                      <Button onClick={(e)=>this.dispayDeleteWarning(portfolio._id, e)} color="danger">Delete</Button>
                    </React.Fragment>
                 }

                  </PortfolioCard>
               
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