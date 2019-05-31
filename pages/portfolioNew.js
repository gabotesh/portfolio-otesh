import React from 'react';
import Baselayout from '../components/layouts/baselayout';
import Basepage from '../components/basepage';
import withAuth from '../components/HOC/withAuth';
import PortfolioCreateForm from '../components/portfolio/portfolioCreateForm';
import {Row, Col} from 'reactstrap';
import {createPortfolio} from '../action';
import {Router} from '../routes';
import moment from 'moment';


const Initial_vaues={title:'',company:'',location:'',position:'',description:'',startDate:moment(),endDate:moment()};


class PortfolioNew extends React.Component{

  constructor(props){
    super();

    this.state={
      error:undefined
    }

    this.savePortfolio=this.savePortfolio.bind(this);

  }

  savePortfolio(portfolioData,{setSubmitting}){
     setSubmitting(true);

    createPortfolio(portfolioData).then((portfolio)=>{
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
    return(
      <Baselayout {...this.props.auth}>
      <Basepage className="portfolio-create-page" title="Create New Portfolio">
      <Row>
       <Col md="6">
      <PortfolioCreateForm initialValues={Initial_vaues} 
                            error={error} 
                            onSubmit={this.savePortfolio}/>
      </Col>
      </Row>
       
      </Basepage>
      </Baselayout>

    )
}


}
export default withAuth('siteOwner')(PortfolioNew);