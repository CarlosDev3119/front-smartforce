import React, {FC} from 'react'
import {Field, ErrorMessage} from 'formik'
import { KTIcon, toAbsoluteUrl } from '../../../../../_metronic/helpers'
import { useImageFile } from '../../../../hooks/useImageFile';

const Step3: FC = () => {

  const {previewImage, handleFileChange} = useImageFile();

  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-12'>
        <h2 className='fw-bolder text-dark'>Datos Fiscales: Certificado Fiel</h2>
      </div>

      <div className='row'>
          <div className='col-lg-5'>
  
            <label
              className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center'
              htmlFor='fileInput3'
            >
              <KTIcon iconName='folder' className='fs-3x me-5' />
              <span className='d-block fw-bold text-start'>
                <span className='text-dark fw-bolder d-block fs-4 mb-2'>Seleccionar Archivo</span>
                <span className='text-gray-400 fw-bold fs-6'>
                  Carga de documento Certificado Fiel
                </span>
              </span>
            </label>
            <input
              type='file'
              className='btn-check d-none'
              name='accountType'
              id='fileInput3'
              onChange={handleFileChange}
            />
          </div>


          {
            previewImage && (
               <div className='col-lg-6'>
                  <Field
                    type='text'
                    className='btn-check'
                    name='imageFiel'
                    value='imageFiel'
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

      <div className='fv-row mb-10 mt-3'>
        <label className='form-label required'>Número de Serie</label>

        <Field type="text" name='serieName' className='form-control form-control-lg form-control-solid' />
        <div className='text-danger mt-2'>
          <ErrorMessage name='serieName' />
        </div>
      </div>

      <div className='fv-row mb-10'>
        <label className='d-flex align-items-center form-label'>
          <span className='required'>Fecha de emisión</span>
        </label>

        <Field
          type="text"
          name='fechaEmision'
          className='form-control form-control-lg form-control-solid'
        />
        <div className='text-danger mt-2'>
          <ErrorMessage name='fechaEmision' />
        </div>

      </div>

      <div className='fv-row mb-10'>
        <label className='form-label required'>Fecha de vigencia</label>

        <Field
          type='text'
          name='dateField'
          className='form-control form-control-lg form-control-solid'
        />
        <div className='text-danger mt-2'>
          <ErrorMessage name='dateField' />
        </div>
      </div>


    </div>
  )
}

export {Step3}
