import {Container} from 'reactstrap';

const Basepage=(props)=>{

    const {className, title}=props;
    //const className= props.className || '';

    return(
        <div className={`base-page ${className}`}>
        <Container>
        {title && <div className="page-header"><h1 className="page-header-title">{title}</h1></div>}


            {props.children}

        </Container>

        </div>

    )
}
Basepage.defaultProps={
    className:''
}

export default Basepage;