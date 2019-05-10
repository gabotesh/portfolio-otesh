import {Container} from 'reactstrap';

const Basepage=(props)=>{

    const {className}=props;
    //const className= props.className || '';

    return(
        <div className={`base-page ${className}`}>
        <Container>

            {props.children}

        </Container>

        </div>

    )
}
Basepage.defaultProps={
    className:''
}

export default Basepage;