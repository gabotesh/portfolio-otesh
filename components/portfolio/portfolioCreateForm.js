
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from 'reactstrap';
import portfolioInput from '../form/portfolioInput';
import portfolioDate from '../form/portfolioDate';



const validateInputs=(values)=>{
    let errors = {};

    Object.keys(values).forEach((key)=>{

        if(!values[key] && (values[key] === 'startDate' || values[key ]=== 'endDate')){

            errors[key]=`Field ${key} is required!!!`
        }

    })
      
    const startDate=values.startDate;
    const endDate=values.endDate;
    if(startDate && endDate && endDate.isBefore(startDate)){

      errors.endDate='End Date cannot be before start date!!!';

    }

    
    return errors;

}

const Initial_vaues={title:'',company:'',location:'',position:'',description:'',startDate:'',endDate:''};

const PortfolioCreateForm = (props) => (
  <div>
    <Formik
      initialValues={Initial_vaues}
      validate={validateInputs}
      onSubmit={props.onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
        
          <Field  className="form-control"
                  label="Title"
                  type="text" 
                  name="title" 
                  component={portfolioInput} />
          <Field  className="form-control"
                  label="Company"
                  type="text" 
                  name="company" 
                  component={portfolioInput} />
          <Field  className="form-control"
                  label="Location"
                  type="text" 
                  name="location" 
                  component={portfolioInput} />
          <Field  className="form-control"
                  label="Position"
                  type="text" 
                  name="position" 
                  component={portfolioInput} />        
         <Field  className="form-control"
                  label="Description"
                  type="textarea" 
                  name="description" 
                  component={portfolioInput} />
          <Field  className="form-control"
                  label="Start Date"
                  name="startDate" 
                  component={portfolioDate} />
          <Field  className="form-control"
                  label="End Date"
                  canBeDisable={true}
                  name="endDate" 
                  component={portfolioDate} />         
          

          <Button color="success" size="lg" type="submit" disabled={isSubmitting}>
            Create Portfolio
          </Button>
        </Form>
      )}
    </Formik>
  </div>
);

export default PortfolioCreateForm;






















