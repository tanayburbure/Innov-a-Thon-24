import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput
} from 'mdb-react-ui-kit';

function Registration() {
  return (
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center'>

        <MDBCol lg='6'>

          <MDBCard className='my-4 rounded-3' style={{maxWidth: '500px'}}>
            <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp' className='w-100 rounded-top'  alt="Sample photo"/>

            <MDBCardBody className='px-4'>

              <h3 className="mb-3 pb-2 pb-md-0 mb-md-4 px-md-2">Registration Info</h3>
              <MDBInput wrapperClass='mb-3' label='Name' id='form1' type='text'/>

              <MDBRow>

                <MDBCol md='6'>
                  <MDBInput wrapperClass='datepicker mb-3' label='Select a date' id='form2' type='text'/>
                </MDBCol>

                <MDBCol md='6' className='mb-3'>
                  <MDBInput
                    wrapperClass='mb-3'
                    label='Gender'
                    id='formGender'
                    type='select'
                    options={[
                      { text: 'Select Gender', value: '', disabled: true },
                      { text: 'Female', value: 'female' },
                      { text: 'Male', value: 'male' }
                    ]}
                  />
                </MDBCol>

              </MDBRow>

              <MDBInput
                className='mb-3'
                label='Class'
                id='formClass'
                type='select'
                options={[
                  { text: 'Select Class', value: '', disabled: true },
                  { text: 'Class 1', value: 'class1' },
                  { text: 'Class 2', value: 'class2' },
                  { text: 'Class 3', value: 'class3' }
                ]}
              />

              <MDBRow>
                <MDBCol md='6'>
                  <MDBInput wrapperClass='mb-3' label='Registration code' id='form3' type='text'/>
                </MDBCol>
              </MDBRow>

              <MDBBtn color='success' className='mb-3' size='lg'>Submit</MDBBtn>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default Registration;