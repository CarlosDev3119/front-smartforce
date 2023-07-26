import  {FC} from 'react'
import {KTIcon, toAbsoluteUrl} from '../../../../../_metronic/helpers'
import {ErrorMessage, Field} from 'formik'
import { useImageFile } from '../../../../hooks/useImageFile';

const Step2: FC = () => {

  const {previewImage, handleFileChange} = useImageFile();

  return (
    
    <div className='w-100'>
      <div className='w-100'>
 
        <div className='pb-10 pb-lg-15'>
          <h2 className='fw-bolder text-dark'>Carga de Cédula RFC</h2>
        </div>
        <div className='fv-row'>
          <div className='row'>
              <div className='col-lg-5'>
      
                <label
                  className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center'
                  htmlFor='fileInput2'
                >
                  <KTIcon iconName='folder' className='fs-3x me-5' />
                  <span className='d-block fw-bold text-start'>
                    <span className='text-dark fw-bolder d-block fs-4 mb-2'>Seleccionar Archivo</span>
                    <span className='text-gray-400 fw-bold fs-6'>
                      Carga de documento Cédula RFC
                    </span>
                  </span>
                </label>
                <input
                  type='file'
                  className='btn-check d-none'
                  name='accountType'
                  id='fileInput2'
                  onChange={handleFileChange}
                />
              </div>

            {
              previewImage && (
                 <div className='col-lg-6'>
                    <Field
                      type='text'
                      className='btn-check'
                      name='accountType'
                      value='corporate'
                      id='kt_create_account_form_account_type_corporate'
                    />
                    <label
                      className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center'
                      htmlFor='kt_create_account_form_account_type_corporate'
                    >
                      <div style={{
                        display: 'flex',
                        justifyContent: 'center',  // Centrar horizontalmente
                        alignItems: 'center',      // Centrar verticalmente
                        maxWidth: '100%',
                        overflow: 'hidden',
                        height: '100px',           // Altura fija de 100px
                      }}>
                          <img src={previewImage} alt="" style={{ width: 'auto', height: '100%' }} />
                      </div>
                    </label>
                </div>
              )
            }
           

          </div>
        </div>
      </div>

 


      <div className='mb-10 fv-row mt-3'>
        <label className='form-label mb-3'>RFC</label>

        <Field
          type='text'
          className='form-control form-control-lg form-control-solid'
          name='rfc'
        />
        <div className='text-danger mt-2'>
          <ErrorMessage name='rfc' />
        </div>
      </div>


      <div className='mb-10 fv-row mt-3'>
        <label className='form-label mb-3'>Razón Social</label>

        <Field
          type='text'
          className='form-control form-control-lg form-control-solid'
          name='RazonSocial'
        />
        <div className='text-danger mt-2'>
          <ErrorMessage name='RazonSocial' />
        </div>
      </div>

      <div className='mb-10 fv-row mt-3'>
        <label className='form-label mb-3'>Dirección Fiscal</label>

        <Field
          type='text'
          className='form-control form-control-lg form-control-solid'
          name='direccionFiscal'
        />
        <div className='text-danger mt-2'>
          <ErrorMessage name='direccionFiscal' />
        </div>
      </div>

      <div className='mb-10 fv-row mt-3'>
        <label className='form-label mb-3'>Fecha de Inscripción</label>

        <Field
          type='text'
          className='form-control form-control-lg form-control-solid'
          name='fechaInscripcion'
        />
        <div className='text-danger mt-2'>
          <ErrorMessage name='fechaInscripcion' />
        </div>
      </div>


    </div>
  )
}

export {Step2}
