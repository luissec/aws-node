const express = require('express');
const app = express();
app.get('/', (req,res)=> res.send('Hola mundo desde EXPRESS'))

app.listen(3000);

console.log('El servidor estado escuchando en el puerto 3000');