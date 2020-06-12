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

const remove = require('./Json/delete.json')
const succes = require('./Json/succes.json')

const expiryDate = new Date(Date.now() + 60 * 60 * 1000) // 1 hour

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

app.delete('/remove', (req, res) => {
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
app.get('/onlineinvoice/:service', (req, res) => {
  res.status(200).send(onlineInvoice[req.params['service']])
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
  res.status(200).send(removeCompany)
})

app.get('/companieById', (req, res) => {
  res.status(200).send(companieById)
})
// Companies ---------------------------------

// PLANS ---------------------------------
app.get('/getAllPlans', (req, res) => {
  res.status(200).send(plans)
})

app.delete('/removePlan', (req, res) => {
  res.status(200).send(removePlan)
})

app.get('/filterPlans', (req, res) => {
  res.status(200).send(filterPlans)
})
// PLANS ---------------------------------
/**
 * series
 */
app.get('/getSerieById', (req, res) => {
  res.status(200).send(seriesList.series[1])
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
app.get('/errorsDetails', (req, res) => {
  res.status(200).send(errorsDetails)
})

app.get('/getDocumentTypes', (req, res) => {
  res.status(200).send(documentTypes)
})

// Series -------------------------------------

app.listen(8080, () => {
  // eslint-disable-next-line no-console
  console.log('Example app listening on port https://localhost:8080')
})
