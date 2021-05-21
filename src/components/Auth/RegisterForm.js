import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import ModalWrapper from '../Reusable/Modals/ModalWrapper';
import ReusableTextInput from '../Reusable/Forms/ReusableTextInput';
import * as Yup from 'yup';
import { Button, Divider, Label } from 'semantic-ui-react';
import { closeModal } from '../../actions/index';
import { registerInFirebase } from '../../firebase-firestore/firebaseService';
import SocialLogin from './SocialLogin';
import { ErrorsAndButtonMargin } from './styles';

export default function RegisterForm() {
  const dispatch = useDispatch();

  return (
    <ModalWrapper size='mini' header='Register with Flora'>
      <Formik 
        initialValues={{displayName: '', email: '', password: ''}}
        validationSchema={Yup.object({
          displayName: Yup.string().required(),
          email: Yup.string().required().email(),
          password: Yup.string().required()
        })}
        onSubmit={async (values, {setSubmitting, setErrors}) => {
          try {
            await registerInFirebase(values);
            setSubmitting(false);
            dispatch(closeModal());
          } catch (error) {
            setErrors({auth: error.message})
            setSubmitting(false);
          }
        }}
      >
        {({isSubmitting, isValid, dirty, errors}) => (
          <Form className='ui form'>
            <ReusableTextInput name='email' placeholder='Email Address'/>
            <ReusableTextInput name='displayName' placeholder='Display Name'/>
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
              content='Register'
            />
            <Divider horizontal>Or</Divider>
            <SocialLogin />
          </Form>
        )}
      </Formik>
    </ModalWrapper>
  )
}