
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, FormGroup, Label} from 'reactstrap';
import portfolioInput from '../form/portfolioInput';
import portfolioDate from '../form/portfolioDate';



const validateInputs=(values)=>{
    let errors = {};

    Object.keys(values).forEach((key)=>{

        if(!values[key]){

            errors[key]=`Field ${key} is required!!!`
        }

    })

    
    return errors;

}

const Initial_vaues={title:'',company:'',location:'',position:'',description:'',startDate:'',endDate:''};

const PortfolioCreateForm = () => (
  <div>
    <Formik
      initialValues={Initial_vaues}
      validate={validateInputs}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
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
                  component={portfolioInput} />
          <Field  className="form-control"
                  label="End Date"
                  name="endDate" 
                  component={portfolioInput} />
         
          

          <Button type="submit" disabled={isSubmitting}>
            Create Portfolio
          </Button>
        </Form>
      )}
    </Formik>
  </div>
);

export default PortfolioCreateForm;







/* import React from 'react';
import { Formik } from 'formik';

const PortfolioCreateForm = () => (
  <div>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        let errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
         //and other goodies 
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default PortfolioCreateForm;
 */






















/* import React from 'react';

export default class PortfolioCreateForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {title: '',description:'',language:''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

    }
  
    handleChange(event) {
        const field=event.target.name;
      this.setState({[field]: event.target.value});
    }
   
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.title + ' ' +this.state.description +' '+this.state.language);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input name="title" type="text" value={this.state.title} onChange={this.handleChange} />
          </label>
          <label>
          Description:
          <textarea name="description" value={this.state.description} onChange={this.handleChange} />
        </label>
        <label>
          Pick your favorite language:
          <select name="language" value={this.state.language} onChange={this.handleChange}>
            <option value="Javascript">Javascript</option>
            <option value="java">Java</option>
            <option value="C#">C#</option>
            <option value="C++">C++</option>
          </select>
        </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
   */