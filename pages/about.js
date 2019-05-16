import React from 'react';
import Baselayout from '../components/layouts/baselayout';
import Basepage from '../components/basepage';




class about extends React.Component{

render(){
    return(
      <Baselayout {...this.props.auth}>
      <Basepage className="about-page" title="I am about page">
        <div>
        <h1>I am about page</h1>
        
      </div>
      </Basepage>
      </Baselayout>

    )
}


}
export default about;