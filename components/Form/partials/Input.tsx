import {useFormContext} from 'react-hook-form';

import { InputProps } from '../Form.types';

import styles from '../Form.module.scss';

const Input: React.FC<InputProps> = ({type, name, index, placeholder}) => {
  
  //get the register function, formState (errors) and getValues from the context
  const {register, formState, getValues} = useFormContext();

  const {errors} = formState;
  
  //setup required validation dependant of input type
  const required = type !== 'email' ? 
    //if the input is not an email, then it is just required
    {
      required: `${name.charAt(0).toUpperCase()+name.slice(1)} is required`
    } 
    : 
    //else if the input is an email, it is required, it must be valid & should be unique
    { 
      required: `${name.charAt(0).toUpperCase()+name.slice(1)} is required`,
      //use regex pattern to check if the email is valid
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 
        message: 'Not a valid email address'
      },
      validate: {
        //check for email address that already exists in the form
        unique: (v:string) => {
          const values = getValues();
          const emails = values.beneficiaries.map((b:any) => b.email);
          const amount = emails.filter((e:string) => e === v).length;
          return amount >= 2 ? 'Email already exists' : true;
        }
      }
    };

    //check if field is valid
    const invalid = errors.beneficiaries && errors.beneficiaries[index] && errors.beneficiaries[index][name] ? true : false;

  return (
    <>
      <input  type={type} {...register(`beneficiaries.${index}.${name}`, required)} placeholder={placeholder} title={placeholder} aria-invalid={invalid} />
      {invalid && (
        <span className={styles.error}>{errors.beneficiaries[index][name].message}</span>
      )}
    </>
  )
}

export default Input