import * as Yup from 'yup'

export interface ICreateAccount {
  accountType: string
  accountTeamSize: string
  rfc: string
  accountPlan: string
  serieName: string
  fechaEmision: string
  dateField: string
  businessDescription: string
  businessEmail: string
  direction: string
  holder: string
  expired: string
  cardExpiryYear: string
  cardCvv: string
  saveCard: string
  RazonSocial: string
  direccionFiscal: string
  fechaInscripcion: string
  actaNumber: string
  noteNumber: string
  dateConstitution: string
  altaDate: string
  activity: string
  curp: string
  namefull: string
  porcentaje: string

}

const createAccountSchemas = [
  Yup.object({
    accountType: Yup.string().required().label('Account Type'),
  }),
  Yup.object({
    rfc: Yup.string().required().label('RFC'),
    RazonSocial: Yup.string().required().label('Razón Social'),
    direccionFiscal: Yup.string().required().label('Dirección Fiscal'),
    fechaInscripcion: Yup.string().required().label('Fecha de Inscripción'),

  }),
  Yup.object({
    serieName: Yup.string().required().label('Numero de serie'),
    fechaEmision: Yup.string().required().label('Fecha de Emision'),
    dateField: Yup.string().required().label('Fecha de vigencia'),
    businessEmail: Yup.string().required().label('Contact Email'),
  }),
  Yup.object({
    direction: Yup.string().required().label('Dirección'),
    holder: Yup.string().required().label('Tituar'),
    expired: Yup.string().required().label('Expiration Month'),
    cardExpiryYear: Yup.string().required().label('Expiration Year'),
    cardCvv: Yup.string().required().label('CVV'),
  }),
  Yup.object({
    actaNumber: Yup.string().required().label('Número de acta'),
    noteNumber: Yup.string().required().label('Número de notaría'),
    dateConstitution: Yup.string().required().label('Fecha de constitucion'),
    altaDate: Yup.string().required().label('Fecha de alta'),
    activity: Yup.string().required().label('Actividad ó Giro'),
  }),
  Yup.object({
    curp: Yup.string().required().label('CURP'),
    namefull: Yup.string().required().label('Nombre completo '),
    porcentaje: Yup.string().required().label('% de Participacion'),
  }),
]

const inits: ICreateAccount = {
  accountType: 'personal',
  accountTeamSize: '50+',
  rfc: '',
  accountPlan: '1',
  serieName: '',
  fechaEmision: '',
  dateField: '',
  businessDescription: '',
  businessEmail: 'corp@support.com',
  direction: '',
  holder: '',
  expired: '',
  cardExpiryYear: '2025',
  cardCvv: '123',
  saveCard: '1',
  RazonSocial: '',
  direccionFiscal: '',
  fechaInscripcion: '',
  actaNumber: '',
  noteNumber: '',
  dateConstitution: '',
  altaDate:'',
  activity:'',
  curp: '',
  namefull: '',
  porcentaje: '',


}

export {createAccountSchemas, inits}
