import { Form, Formik } from 'formik';
import React from 'react';
import { useSelector } from 'react-redux';
import { Button, Header, Label, Segment } from 'semantic-ui-react';
import * as Yup from 'yup';
import { updateUserPassword } from '../../firebase-firestore/firebaseService';
import ReusableTextInput from '../Reusable/Forms/ReusableTextInput';
import { BodyStyles } from '../PlantDashboard/styles';
import { ErrorsAndButtonMargin, WidthDiv, HeaderContentWrapper } from './styles';

export default function AccountPage() {
  const {currentUser} = useSelector((state) => state.auth);

  return (
    <BodyStyles>
      <WidthDiv>
        <Segment>
          <Header dividing size='large'>
            <HeaderContentWrapper>
              Account
            </HeaderContentWrapper>
          </Header>
          {currentUser.providerId === 'password' &&
            <div>
              <Header sub content='Change Password' />
              <p>Use this form to change your password</p>

              <Formik 
                initialValues={{newPassword1: '', newPassword2: ''}}
                validationSchema={Yup.object({
                  newPassword1: Yup.string().required('Password is required'),
                  newPassword2: Yup.string().oneOf([Yup.ref('newPassword1'), null], 'Passwords do not match'),
                })}
                onSubmit={async (values, {setSubmitting, setErrors}) => {
                  try {
                    await updateUserPassword(values);
                    setSubmitting(false);
                    console.log(values);
                    console.log(currentUser);
                  } catch (error) {
                    setErrors({auth: error.message});
                    setSubmitting(false);
                  }
                }}
              >
              {({errors, isSubmitting, isValid, dirty}) =>(
                <Form className='ui form'>
                  <ReusableTextInput name='newPassword1' type='password' placeholder='New Password' />
                  <ReusableTextInput name='newPassword2' type='password' placeholder='Confirm Password' />
                  <ErrorsAndButtonMargin>
                    {errors.auth && <Label basic color='red' content={errors.auth} />}
                  </ErrorsAndButtonMargin>
                  <Button
                    type='submit' 
                    disabled={!isValid || !dirty || isSubmitting } 
                    loading={isSubmitting}
                    size='large'
                    positive
                    content='Update Password'
                  />
                </Form>
              )}
              </Formik>
            </div>
          }

          {currentUser.providerId === 'facebook.com' &&
            <div>
              <Header sub content='Facebook Account' />
              <p>Please visit Facebook to update your account</p>
              <Button icon='facebook' href='https://www.facebook.com/' content='Go to Facebook' />
            </div>
          }

          {currentUser.providerId === 'google.com' &&
            <div>
              <Header sub content='Google Account' />
              <p>Please visit Google to update your account</p>
              <Button icon='google' href='https://accounts.google.com/' content='Go to Google' />
            </div>
          }

          {currentUser.providerId === 'twitter.com' &&
            <div>
              <Header sub content='Twitter Account' />
              <p>Please visit Twitter to update your account</p>
              <Button icon='twitter' href='https://www.twitter.com/' content='Go to Twitter' />
            </div>
          }

          {currentUser.providerId === 'github.com' &&
            <div>
              <Header sub content='GitHub Account' />
              <p>Please visit GitHub to update your account</p>
              <Button icon='github' href='https://www.github.com/' content='Go to GitHub' />
            </div>
          }
        </Segment>
      </WidthDiv>
    </BodyStyles>
  )
}

