import React from 'react';
import Baselayout from '../components/layouts/baselayout';
import Basepage from '../components/basepage';
import withAuth from '../components/HOC/withAuth';
import PortfolioCreateForm from '../components/portfolio/portfolioCreateForm';
import {Row, Col} from 'reactstrap';
import {updatePortfolio,getPortfolioById} from '../action';
import {Router} from '../routes';




class PortfolioEdit extends React.Component{

    static async getInitialProps({query}){
        let portfolio={};
        try{

         portfolio=  await getPortfolioById(query.id)

        }catch(error){
          console.error(err);
        }
        return{portfolio};
    }

  constructor(props){
    super();

    this.state={
      error:undefined
    }

   this.portfolioUpdate=this.portfolioUpdate.bind(this);

  }

  portfolioUpdate(portfolioData,{setSubmitting}){
     setSubmitting(true);

    updatePortfolio(portfolioData).then((portfolio)=>{
      setSubmitting(false);
        this.setState({error: undefined});
        Router.pushRoute('/portfolio');
    }).catch((err)=>{
      const error=err.message || 'Server Error!!!';
      setSubmitting(false);
      this.setState({error});
    })
  } 

render(){
  const {error}=this.state;
  const {portfolio}=this.props;
    return(
      <Baselayout {...this.props.auth}>
      <Basepage className="portfolio-create-page" title="Update Portfolio">
      <Row>
       <Col md="6">
      <PortfolioCreateForm initialValues={portfolio}
                           error={error} 
                           onSubmit={this.portfolioUpdate}/>
      </Col>
      </Row>
       
      </Basepage>
      </Baselayout>

    )
}


}
export default withAuth('siteOwner')(PortfolioEdit);