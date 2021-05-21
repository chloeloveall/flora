import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import ModalWrapper from '../Reusable/Modals/ModalWrapper';
import ReusableTextInput from '../Reusable/Forms/ReusableTextInput';
import * as Yup from 'yup';
import { Button, Divider, Label } from 'semantic-ui-react';
import { closeModal } from '../../actions/index';
import { signInWithEmail } from '../../firebase-firestore/firebaseService';
import SocialLogin from './SocialLogin';
import { ErrorsAndButtonMargin } from './styles';

export default function LoginForm() {
  const dispatch = useDispatch();

  return (
    <ModalWrapper size='mini' header='Sign-in to Flora'>
      <Formik 
        initialValues={{email: '', password: ''}}
        validationSchema={Yup.object({
          email: Yup.string().required().email(),
          password: Yup.string().required()
        })}
        onSubmit={async (values, {setSubmitting, setErrors}) => {
          try {
            await signInWithEmail(values);
            setSubmitting(false);
            dispatch(closeModal());
            console.log(values)
          } catch (error) {
            setErrors({auth: error.message})
            setSubmitting(false);
          }
        }}
      >
        {({isSubmitting, isValid, dirty, errors}) => (
          <Form className='ui form'>
            <ReusableTextInput name='email' placeholder='Email Address'/>
            <ReusableTextInput name='password' placeholder='Password' type='password'/>
            <ErrorsAndButtonMargin>
              {errors.auth && <Label basic color='red' content={errors.auth} />}
            </ErrorsAndButtonMargin>
            <Button 
              loading={isSubmitting}
              disabled={!isValid || !dirty || isSubmitting}
              type='submit'
              fluid
              size='large'
              content='Login'
            />
            <Divider horizontal>Or</Divider>
            <SocialLogin />
          </Form>
        )}
      </Formik>
    </ModalWrapper>
  )
}