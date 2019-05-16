import { Button, FormGroup, Label, Input} from 'reactstrap';



const portfolioInput = ({
    label,
    type,
    field, // { name, value, onChange, onBlur }
    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    ...props
  }) => (
    <FormGroup>
    <Label>{label}</Label>
      <Input type={type} {...field} {...props} />
      {touched[field.name] &&
        errors[field.name] && <div className="error">{errors[field.name]}</div>}
    </FormGroup>
  );

  export default portfolioInput;