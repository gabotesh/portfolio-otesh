import {Container} from 'reactstrap';
import Head from 'next/head';

const Basepage=(props)=>{

    const {className, title, containerClass}=props;
    //const className= props.className || '';

    return(
                   
        <div className={`base-page ${className}`}>
        <Container className={containerClass}>
        {title && <div className="page-header"><h1 className="page-header-title">{title}</h1></div>}


            {props.children}

        </Container>

        </div>
        
       


    )
}
Basepage.defaultProps={
    className:'',
    containerClass: ''
}

export default Basepage;