import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button,Alert } from 'reactstrap';
import portfolioInput from '../form/portfolioInput';
import portfolioDate from '../form/portfolioDate';
//import moment = require('moment')



const validateInputs=(values)=>{
    let errors = {};

    Object.keys(values).forEach((key)=>{

        if(!values[key] && key !== 'endDate'){

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


const PortfolioCreateForm = ({initialValues,onSubmit,error}) => (
  <div>
    <Formik
      initialValues={initialValues}
      validate={validateInputs}
      onSubmit={onSubmit}
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
                  initialDate={initialValues.startDate}
                  component={portfolioDate} />
          <Field  className="form-control"
                  label="End Date"
                  canBeDisable={true}
                  initialDate={initialValues.endDate}
                  name="endDate" 
                  component={portfolioDate} />  


                  {error &&
                  <Alert color="danger">
                  {error}
                  </Alert>
                  }       
          

          <Button color="success" size="lg" type="submit" disabled={isSubmitting}>
            Create Portfolio
          </Button>
        </Form>
      )}
    </Formik>
  </div>
);

export default PortfolioCreateForm;






















