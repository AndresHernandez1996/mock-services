const express = require('express')

const app = express()
const cors = require('cors')
const companies = require('./Json/Companies.json')
const associatedCompanies = require('./Json/AssociatedCompanies.json')
const typeProfiles = require('./Json/TypeProfiles.json')
const users = require('./Json/GetUsers.json')
const userById = require('./Json/userById.json')
const filterUsers = require('./Json/FilterUsers.json')
const createUser = require('./Json/CreateUser.json')
const editUser = require('./Json/UpdateUser.json')
const onlineInvoice = require('./Json/OnlineInvoice.json')
const login = require('./Json/Login.json')
const createCompany = require('./Json/Companies/CreateCompany.json')
const editCompany = require('./Json/Companies/UpdateCompany.json')
const removeCompany = require('./Json/Companies/RemoveCompany.json')
const filterCompany = require('./Json/Companies/FilterCompanies.json')
const companieById = require('./Json/Companies/CompanieById.json')
const plans = require('./Json/Planes/GetAllPlans.json')
const removePlan = require('./Json/Planes/RemovePlans.json')
const filterPlans = require('./Json/Planes/FilterPlans.json')
const seriesList = require('./Json/Series.json')
const errorsDetails = require('./Json/Errors/ErrorDetails.json')
const documentTypes = require('./Json/DocumentTypes.json')
const profileById = require('./Json/Profiles/ProfileById.json')
const filterProfiles = require('./Json/Profiles/FilterProfiles.json')
const brokerById = require('./Json/Brokers/GetBrokerById.json')
const filterBrokers = require('./Json/Brokers/FilterBrokers.json')
const errorHandler = require('./Json/Errors/Errors.json')
const filterReports = require('./Json/Vouchers/BillingNotice/GetBillingNotice.json')
const saveInvoice = require('./Json/SaveInvoice.json')
const getAllSystem = require('./Json/Vouchers/Cancelations/GetSystem.json')
const filterCancelations = require('./Json/Vouchers/Cancelations/GetCancelations.json')
const Exports = require('./Json/Vouchers/Cancelations/GetExport.json')
const resumenGCAYE = require('./Json/Monitor/GCAYE/GetGCAYE')
const detailGcaye = require('./Json/Monitor/GCAYE/DetailGcaye')
const getMassDownload = require('./Json/MassDownload/getMassDownload.json')
const getScheduleById = require('./Json/MassDownload/GetScheduleById.json')
const createMassDownload = require('./Json/MassDownload/CreateMassDownload.json')
const updateMassDownload = require('./Json/MassDownload/UpdateMassDownload.json')
const getOneBroker = require('./Json/MassDownload/GetOneBroker.json')
const getStatus = require('./Json/Status')
const getExceptions = require('./Json/Monitor/exceptions/getExeptions.json')
const getPeriodicity = require('./Json/Periodicity.json')
const getPeriod = require('./Json/Period.json')
const getCellById = require('./Json/MassDownload/GetCellById.json')
const getSeriesBilling = require('./Json/Vouchers/BillingNotice/GetSeries.json')

const saveInvoiceError = require('./Json/SaveInvoiceError.json')
const getPdf = require('./Json/Vouchers/BillingNotice/GetPdf.json')
const filterDocuments = require('./Json/Vouchers/Documents/getDocumentsData.json')
const getDocumentType = require('./Json/Vouchers/Documents/getDocumentType.json')
const getStatusDocument = require('./Json/Vouchers/Documents/getStatusDocument.json')
const getSystems = require('./Json/Vouchers/Documents/getsystems.json')
const getZip = require('./Json/Vouchers/BillingNotice/GetZip.json')
const getErrorsCfdi = require('./Json/Vouchers/ErrorsCfdi/GetErrorsCfdi.json')
const multipack = require('./Json/multipack.json')

const remove = require('./Json/delete.json')
const succes = require('./Json/succes.json')

const expiryDate = new Date(Date.now() + 60 * 60 * 1000) // 1 hour

const getEcosysPac = require('./Json/Monitor/ECOSYS-PAC/GetEcosysPac.json')
const getEcosysPacDetail = require('./Json/Monitor/ECOSYS-PAC/GetEcosysPacDetail.json')

app.use(
  cors({
    origin: [
      'http://localhost:3000',
      'http://localhost:8080',
      'http://localhost:3001',
    ],
    credentials: true,
  })
)

// login y el refresh
app.get('/login', (req, res) => {
  res.cookie(
    'token',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwidHlwZV9ncm91cCI6ImFkbWluIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.YcAZZ5Nq1T_38jZBQExI2TxlYp48pPM6wPt8xOR6HD0',
    { httpOnly: true, expires: expiryDate }
  )
  res.setHeader('idCompany', '123456')
  res.status(406).send(login)
})

// Companies
app.get('/companies', (req, res) => {
  res.status(200).send(companies)
})

// Associated Companies
app.get('/associatedCompanies', (req, res) => {
  res.status(200).send(associatedCompanies)
})

// Type Profiles
app.get('/typeProfiles', (req, res) => {
  res.status(200).send(typeProfiles)
})

// Users -------------------------------------
app.get('/users', (req, res) => {
  res.status(200).send(users)
})

app.get('/logout', (req, res) => {
  res.cookie()
  res.status(200).send(null)
})

app.get('/getText', (req, res) => {
  res.status(200).send(UITexts)
})
app.get('/userById', (req, res) => {
  res.status(200).send(userById)
})
app.get('/filterUsers', (req, res) => {
  res.status(200).send(filterUsers)
})

app.delete('/removeUser', (req, res) => {
  res.status(200).send(remove)
})

app.post('/saveUser', (req, res) => {
  res.status(200).send(createUser)
})

app.put('/saveUser', (req, res) => {
  res.status(200).send(editUser)
})
// Users -------------------------------------

/**
 * Online Invoice
 */
app.get('/onlineinvoice', (req, res) => {
  res.status(200).send(onlineInvoice[req.query.catalog])
})

// 200 ok
app.post('/saveInvoice', (req, res) => {
  res.status(200).send(saveInvoice)
})

// 406 Conflict
// app.post('/saveInvoice', (req, res) => {
//   res.status(406).send(saveInvoiceError)
// })

app.post('/saveCreditNote', (req, res) => {
  res.status(200).send(succes)
})

app.post('/savePaymentComplement', (req, res) => {
  res.status(200).send(succes)
})

app.post('/saveDocumentSubstitution', (req, res) => {
  res.status(200).send(succes)
})

app.post('/saveAnnulment', (req, res) => {
  res.status(200).send(succes)
})

/**
 * Companies
 */
app.post('/saveCompany', (req, res) => {
  res.status(200).send(createCompany)
})

app.put('/saveCompany', (req, res) => {
  res.status(200).send(editCompany)
})

app.get('/filterCompanies', (req, res) => {
  res.status(200).send(filterCompany)
})

app.delete('/removeCompany', (req, res) => {
  res.status(200).send(remove)
})

app.get('/companyById', (req, res) => {
  res.status(200).send(companieById)
})
// Companies ---------------------------------

// PLANS ---------------------------------
app.get('/getAllPlans', (req, res) => {
  res.status(200).send(plans)
})

app.delete('/removePlan', (req, res) => {
  res.status(200).send(remove)
})

app.get('/filterPlans', (req, res) => {
  res.status(200).send(filterPlans)
})
// PLANS ---------------------------------
/**
 * series
 */
app.get('/getSerieById', (req, res) => {
  res.status(200).send(seriesList.extension.variations[0])
})

app.put('/saveSerie', (req, res) => {
  res.status(200).send(succes)
})

app.post('/saveSerie', (req, res) => {
  res.status(200).send(succes)
})

app.delete('/deleteSerie', (req, res) => {
  res.status(200).send(remove)
})

app.get('/getAllSeries', (req, res) => {
  res.status(200).send(seriesList)
})

// VALIDACIÓN DE CAMPOS
app.post('/errorsDetails', (req, res) => {
  res.status(200).send(errorsDetails)
})

app.get('/errorHandler', (req, res) => {
  res.status(200).send(errorHandler)
})

app.get('/getDocumentTypes', (req, res) => {
  res.status(200).send(documentTypes)
})

app.get('/getSeriesBilling', (req, res) => {
  res.status(200).send(getSeriesBilling)
})

// Series -------------------------------------

// REPORTS -------------------------------------
app.get('/filterReports', (req, res) => {
  console.log('BODY', req)
  res.status(200).send(filterReports)
})

// REPORTS -------------------------------------

// Profiles -------------------------------------
app.get('/getProfileById', (req, res) => {
  res.status(200).send(profileById)
})
app.post('/saveProfile', (req, res) => {
  res.status(200).send(succes)
})
app.put('/saveProfile', (req, res) => {
  res.status(200).send(succes)
})
app.get('/filterProfiles', (req, res) => {
  res.status(200).send(filterProfiles)
})
app.delete('/removeProfile', (req, res) => {
  res.status(200).send(succes)
})

app.delete('/deleteProfile', (req, res) => {
  res.status(200).send(remove)
})
// Profiles -------------------------------------

// BROKERS -------------------------------------
app.get('/getbrokerById', (req, res) => {
  res.status(200).send(brokerById)
})
app.post('/saveBroker', (req, res) => {
  res.status(200).send(succes)
})
app.put('/saveBroker', (req, res) => {
  res.status(200).send(succes)
})
app.get('/filterBrokers', (req, res) => {
  console.log('REQUEST', req)

  res.status(200).send(filterBrokers)
})
app.delete('/removeBroker', (req, res) => {
  res.status(200).send(succes)
})

// DOCUMENTS -------------------------------------
app.post('/getPdf', (req, res) => {
  res.status(200).send(getPdf)
})

app.get('/getZip', (req, res) => {
  res.status(200).send(getZip)
})
// DOCUMENTS -------------------------------------

// DOCUMENTS -------------------------------------
app.get('/filterDocuments', (req, res) => {
  res.status(200).send(filterDocuments)
})

app.get('/getDocumentType', (req, res) => {
  res.status(200).send(getDocumentType)
})

app.get('/getStatusDocument', (req, res) => {
  res.status(200).send(getStatusDocument)
})

app.get('/getSystems', (req, res) => {
  res.status(200).send(getSystems)
})
// DOCUMENTS -------------------------------------

// CANCELATIONS -------------------------------------
app.get('/filterCancelations', (req, res) => {
  res.status(200).send(filterCancelations)
})

app.post('/exports', (req, res) => {
  res.status(200).send(Exports)
})
// CANCELATIONS -------------------------------------

// System -------------------------------------
app.get('/getAllSystem', (req, res) => {
  res.status(200).send(getAllSystem)
})
// System -------------------------------------

// System -------------------------------------
app.get('/getErrorsCfdi', (req, res) => {
  res.status(200).send(getErrorsCfdi)
})
// System -------------------------------------

// RESUMEN GCAYE -------------------------------------
app.get('/resumenGCAYE', (req, res) => {
  res.status(200).send(resumenGCAYE)
})
// RESUMEN GCAYE -------------------------------------

// DETAIL GCAYE ---------------------------------------
app.get('/detailGcaye', (req, res) => {
  res.status(200).send(detailGcaye)
})
// DETAIL GCAYE ---------------------------------------
// REPORTS -------------------------------------
app.get('/getStatus', (req, res) => {
  res.status(200).send(getStatus)
})
// MONITOR EXCEPTION
app.get('/getExceptions', (req, res) => {
  res.status(200).send(getExceptions)
})
// MONITOR EXCEPTION

// Period
app.get('/getPeriod', (req, res) => {
  res.status(200).send(getPeriod)
})
// Period

// MassDownload
app.get('/getMassDownload', (req, res) => {
  res.status(200).send(getMassDownload)
})
app.get('/getOneBroker', (req, res) => {
  res.status(200).send(getOneBroker)
})
app.get('/getScheduleById', (req, res) => {
  res.status(200).send(getScheduleById)
})
app.get('/getCellById', (req, res) => {
  res.status(200).send(getCellById)
})

app.post('/saveMassDowload', (req, res) => {
  res.status(200).send(createMassDownload)
})

app.put('/saveMassDowload', (req, res) => {
  res.status(200).send(updateMassDownload)
})

// MassDownload

// Monitor ECOSYS-PAC
app.get('/getEcosysPac', (req, res) => {
  res.status(200).send(getEcosysPac)
})
app.get('/getEcosysPacDetail', (req, res) => {
  res.status(200).send(getEcosysPacDetail)
})

// Periodicity
app.get('/getPeriodicity', (req, res) => {
  res.status(200).send(getPeriodicity)
})
/**
 * Multipack
 */
app.get('/multipack', (req, res) => {
  res.status(200).send(multipack[req.query.catalog])
})

// 200 ok
app.post('/saveMultipack', (req, res) => {
  res.status(200).send(saveInvoice)
})

app.post('/gestion/operations/massive-load/bulkLoad', (req, res) => {
  res.status(200).send({
    codeId: 200,
    data: {
      file: 'c2FkYXNka2FqZGpqYXNkDQpzYWQNCnNhZA0Kc2FkDQpzYWQNCnNhZA0Kc2E=',
      level: 'error',
      message: 'Total de Registros 24',
      title: 'Operación exitosa',
    },
  })
})

/*
 * series mock ok
 */

app.post('/configurations/series', (req, res) => {
  res.status(200).send(succes)
})

app.patch('/configurations/series', (req, res) => {
  res.status(200).send(succes)
})

app.delete('/configurations/series/:id', (req, res) => {
  res.status(200).send(remove)
})

app.get('/configurations/series/:id', (req, res) => {
  res.status(200).send(seriesList.extension.variations[0])
})

app.get('/configurations/series', (req, res) => {
  res.status(200).send(seriesList)
})

app.get('/gestion/configurations/seriesInvoice', (req, res) => {
  res.status(200).send(onlineInvoice.serie)
})
app.get('/gestion/configurations/paymentType', (req, res) => {
  res.status(200).send(onlineInvoice.paymentType)
})
app.get('/gestion/configurations/paymentMethod', (req, res) => {
  res.status(200).send(onlineInvoice.paymentMethod)
})
app.get('/gestion/configurations/cfdiType', (req, res) => {
  res.status(200).send(onlineInvoice.cfdiType)
})
app.get('/gestion/configurations/currency', (req, res) => {
  res.status(200).send(onlineInvoice.currency)
})
app.get('/gestion/configurations/transferTax', (req, res) => {
  res.status(200).send(onlineInvoice.transferTax)
})
app.get('/gestion/configurations/factorType', (req, res) => {
  res.status(200).send(onlineInvoice.factorType)
})
app.get('/gestion/configurations/system', (req, res) => {
  res.status(200).send(onlineInvoice.system)
})
app.get('/gestion/configurations/documentType', (req, res) => {
  res.status(200).send(onlineInvoice.documentType)
})
app.get('/gestion/configurations/creditNote', (req, res) => {
  res.status(200).send(onlineInvoice.creditNote)
})
app.get('/gestion/configurations/paymentComplement', (req, res) => {
  res.status(200).send(onlineInvoice.paymentComplement)
})
app.get('/gestion/configurations/documentSubstitution', (req, res) => {
  res.status(200).send(onlineInvoice.documentSubstitution)
})
app.get('/gestion/configurations/annulment', (req, res) => {
  res.status(200).send(onlineInvoice.annulment)
})
app.get('/gestion/configurations/personType', (req, res) => {
  res.status(200).send(onlineInvoice.personType)
})
app.get('/gestion/configurations/nationality', (req, res) => {
  res.status(200).send(onlineInvoice.nationality)
})

app.listen(8080, () => {
  // eslint-disable-next-line no-console
  console.log('Example app listening on port https://localhost:8080')
})
