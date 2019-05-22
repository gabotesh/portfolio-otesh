import React from "react";
import DatePicker from "react-datepicker";
import moment from 'moment'
import {FormGroup, Label,Button} from 'reactstrap';



import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default  class portfolioDate extends React.Component {
  constructor(props) {
    super(props);
     
    const dateValue=props.initialDate ? moment(props.initialDate): moment();

    this.state = { 
      dateValue,
      isHidden:false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    const{setFieldValue, setFieldTouched}=this.props.form;
    const {name}=this.props.field;

    this.setState({
        dateValue: date
    });
    setFieldValue(name, date, true);
    setFieldTouched(name, true,true);
  }

  toggleDate(date){
    const{setFieldValue, setFieldTouched}=this.props.form;
    const {name}=this.props.field;
    this.setState({
      isHidden: !this.state.isHidden
    });
    setFieldValue(name, date, true);
    setFieldTouched(name, true,true);
  }

  render() {
     const {canBeDisable,label,field}= this.props;
     const {touched,errors}=this.props.form;
     const {isHidden, dateValue}=this.state;
    return (
      <FormGroup>
        <Label>{label}</Label>
        <div className="input-group">
      {!isHidden &&
      <DatePicker
        selected={dateValue}
        onChange={this.handleChange}
        peekNextMonth
        showMonthDropdown
        showYearDropdown
        maxDate={moment()}
        dropdownMode="select"
      />}

      </div>
      {canBeDisable && !isHidden &&  <Button onClick={()=>{this.toggleDate(null)}}>Still Working Here...</Button>}
      
      {canBeDisable && isHidden &&
       <React.Fragment>
         <span>Still Working Here...</span>
         <Button onClick={()=>{this.toggleDate(dateValue)}}>Set End Date</Button>
        </React.Fragment>
      }
      
      {touched[field.name] &&
        errors[field.name] && <div className="error">{errors[field.name]}</div>}

      </FormGroup>
    );
  }
}