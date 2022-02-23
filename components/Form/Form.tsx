import {useForm, FormProvider, useFieldArray} from 'react-hook-form';
import { useRouter } from 'next/router';

import styles from './Form.module.scss';

import Header from './partials/Header';
import Row from './partials/Row';
import { Button } from 'components/Button';

import inputs from 'constants/inputs';


const Form: React.FC = () => {

  const router = useRouter();

  //create the default values for the form
  const defaults = {
    name: '',
    surname: '',
    email: ''
  }

  //setup useForm hook from react-hook-form
  const methods = useForm({
    defaultValues: {
      beneficiaries: [defaults]
    }
  });

  const {control} = methods

  //Create the onSubmit event, this only gets fired when the form is valid
  const onSubmit = (data: any) => {
      console.dir(data)
      router.push('/success')
  }

  //Setup the useFieldArray hook from react-hook-form
  const { fields, append, remove } = useFieldArray({
    control,
    name: "beneficiaries",
  });

  return (
    <div className={styles.root}>
      <div className={styles.box}>
        <Header headerPhrase='Add your Beneficiaries'/>
        <FormProvider {...methods}>
          <form className={styles.form} onSubmit={methods.handleSubmit(onSubmit)}>
            {fields.map((field, i) => <Row inputs={inputs} index={i} key={field.id} remove={remove}/>)}
            {fields.length < 5 && (
              <Button type='button' style='outline' onClick={() => append(defaults)} title='Add Beneficiary'>Add Beneficiary</Button>
            )}
            <Button type='submit' style='primary' onClick={()=>null} title='Submit'>Submit</Button>
          </form>
        </FormProvider>
      </div>
    </div>
  )
}

export default Form 