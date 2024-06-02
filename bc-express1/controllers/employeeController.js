
data = {}
data.employees = require('../model/employees.json')

const getAllEmployees = (req, res) => {
    res.json(data.employees)
}

const createNewEmployee = (req, res) => {
    res.json({
        'fname': req.body.fname,
        'lname': req.body.lname
    })
}

const updateEmployee = (req, res) => {
    res.json({
        'fname': req.body.fname,
        'lname': req.body.lname
    })
}

const deleteEmployee = (req, res) => {
    res.json({"id":req.body.id})
}

const getOneEmployee = (req, res) => {
    res.json({"id" : req.params.id})
}

module.exports = {createNewEmployee, updateEmployee, getAllEmployees, getOneEmployee, deleteEmployee}