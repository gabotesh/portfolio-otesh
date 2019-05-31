import React from 'react';
import Baselayout from '../components/layouts/baselayout';
import Basepage from '../components/basepage';
import {getBlogBySlug} from '../action'
import {Row, Col} from 'reactstrap'




class blogDetails extends React.Component{

    static async getInitialProps({query}){
        let blogs={};
        const slug=query.slug;
        try{
            blogs= await getBlogBySlug(slug);

        }catch(err){
            console.error(err)
        }

        return {blogs};
         
    }

render(){
    const {blogs}=this.props;
    return(
      <Baselayout {...this.props.auth}>
      <Basepage className="blog-Detail-page" >
        <Row>
            <Col md={{size:8, offset:2}}>
               <div dangerouslySetInnerHTML={{__html: blogs.story}}></div>
            </Col>            
        </Row>        
      </Basepage>
      </Baselayout>

    )
}


}
export default blogDetails;