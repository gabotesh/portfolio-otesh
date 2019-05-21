import React from 'react';
import Baselayout from '../components/layouts/baselayout';
import Basepage from '../components/basepage';
import withAuth from '../components/HOC/withAuth';
import PortfolioCreateForm from '../components/portfolio/portfolioCreateForm';
import {Row, Col} from 'reactstrap';




class PortfolioNew extends React.Component{

  constructor(props){
    super();
    this.savePortfolio=this.savePortfolio.bind(this);

  }

  savePortfolio(portfolioData){
    alert(JSON.stringify(portfolioData, null, 2));
  }

render(){
    return(
      <Baselayout {...this.props.auth}>
      <Basepage className="portfolio-create-page" title="Create New Portfolio">
      <Row>
       <Col md="6">
      <PortfolioCreateForm  onSubmit={this.savePortfolio}/>
      </Col>
      </Row>
       
      </Basepage>
      </Baselayout>

    )
}


}
export default withAuth('siteOwner')(PortfolioNew);