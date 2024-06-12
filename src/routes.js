const express = require('express')
const routes = express.Router()
const path = require('path')

routes.get('/', (req, res) => {
    res.render('index', { title: 'Página Inicial' });
});

routes.get('/user-management', (req, res) => {
    res.render('fetch', { title: 'Página user' });
});

routes.get('/renderizacao-dinamica', (req, res) => {
    res.render('renderizacaoDinamica', { nome: 'Jorge Luiz de Medeiros e Silva Junior' });
});

/**
 * ================
 * UER MANAGEMENT
 * ================
 */
const userManagement  = express.Router()
routes.use('/user-management', userManagement)

userManagement.get('/get', (req, res) => {
    const user = {
        name: "Jorge",
        age: 33
    }
    res.send(user)
})


const userManagementPost  = express.Router()
routes.use('/user-management', userManagementPost) 

userManagementPost.post('/post', (req, res) => {
        const user = req.body
        console.log(user)
        res.send(user);
})

module.exports = { routes }