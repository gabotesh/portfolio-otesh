import {Container} from 'reactstrap';
import Head from 'next/head';

const Basepage=(props)=>{

    const {className, title}=props;
    //const className= props.className || '';

    return(
        <React.Fragment>
            <Head>
                <title>OTESH-TECH</title>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous"></link>
            </Head>
           
        <div className={`base-page ${className}`}>
        <Container>
        {title && <div className="page-header"><h1 className="page-header-title">{title}</h1></div>}


            {props.children}

        </Container>

        </div>
        
       
        </React.Fragment>


    )
}
Basepage.defaultProps={
    className:''
}

export default Basepage;