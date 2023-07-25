import {FC} from 'react'
import { ErrorMessage, Field } from 'formik'

const Step6: FC = () => {
  return (
    <div className='w-100'>
    <div className='pb-10 pb-lg-12'>
      <h2 className='fw-bolder text-dark'>Datos del Contacto</h2>
    </div>

    <div className='fv-row mb-10 mt-3'>
      <label className='form-label required'>Nombre</label>

      <Field type="text" name='name' className='form-control form-control-lg form-control-solid' />
      <div className='text-danger mt-2'>
        <ErrorMessage name='name' />
      </div>
    </div>

    <div className='fv-row mb-10'>
      <label className='d-flex align-items-center form-label'>
        <span className='required'>Correo Electrónico</span>
      </label>

      <Field
        type="text"
        name='email'
        className='form-control form-control-lg form-control-solid'
      />
      <div className='text-danger mt-2'>
        <ErrorMessage name='email' />
      </div>

    </div>

    <div className='fv-row mb-10'>
      <label className='form-label required'>Teléfono (10 dígitos)</label>

      <Field
        type='text'
        name='celNumber'
        className='form-control form-control-lg form-control-solid'
      />
      <div className='text-danger mt-2'>
        <ErrorMessage name='celNumber' />
      </div>
    </div>


  </div>
  )
}

export {Step6}
