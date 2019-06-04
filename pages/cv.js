import React from 'react';
import Baselayout from '../components/layouts/baselayout';
import Basepage from '../components/basepage';
import withAuth from '../components/HOC/withAuth';
import {Row, Col} from 'reactstrap';




class cv extends React.Component{

    render(){
        return(
            <Baselayout {...this.props.auth}>
            <Basepage title="Preview of My CV">
                <Row>
                    <Col md={{size: 10, offset:2}}>
                        <div className="cv-title">
                            <a download="DesignPrinciple.pdf" className="btn btn-success" href="/static/DesignPrinciple.pdf">
                                Download
                            </a>
                        </div>
                        <iframe style={{width:'100%', height: '800px'}} src="/static/DesignPrinciple.pdf">

                        </iframe>
                    </Col>
                </Row>
            </Basepage>
            </Baselayout>
        )

    }
    
}
export default cv;