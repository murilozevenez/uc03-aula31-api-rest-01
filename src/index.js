const express = require('express');
const { request } = require('http');

const app = express()
const port = 5000

//API REST eceba e espere um body em JSON
app.use(express.json())

// Lista Usuarios
let usuarios = [
    {id: "1", name: "Eberton", "city: "Pato branco"},
    {id: "2", name: "DaviZAO"},
    {id: "3", name: "Murilinho"}
]

//ROTA GET - /
app.get('/', (request, response) => {
    response.send ('Olá pessoal');
})

//ROTA GET - /users
app.get('/users', (request, response) => {
    response.send ({ users: usuarios });
})

//ROTA GET - /users
app.get('/users/:id', (request, response) => {
    const id = (request.params.id);

     let user;

    for(let i = 0 ; i < usuarios.length; i++){
      if(usuarios[i].id === id){
        user = usuarios[i];
        break;
      }  
    }
    response.send ({ user: user });
})

app.post('/users', (request, response) => {
    const  user = request.body
    usuarios.push(user)
    response.send({ users: usuarios })
})
// Rota PUT  - /users/:id
app.put('/users', (request, response) =>{
    const id = request.params.id;
})
// Rota PATCH  - /users/:id
app.patch('/users', (request, response) =>{
    const id = request.params.id;
})
// Rota DELETE  - /users/:id
app.delete('/users', (request, response) =>{
    const id = request.params.id;


})
// Roda o servidor
 app.listen(port, () => {
console.log(`API rodando na porta ${port}`)
 })

 //http://localhost:5000/users

