// const express = require('express')
const server = express()
server.use(express.json())
server.get('/', (req, res) => {
res.send('Hello world!')
})

// server.post('/product', (req, res) =>{
const title = req.body.title;
const price = req.body.price;
const description = req.body.description;

if (!title ||!description ||!price ){

}
})
// const product = [
{
    id: 1,
    name: 'product 1',
    price: 10 ,
    description: 'This is product 1',
    Image: 'https://via.placeholder.com/150'
},
{
    id: 2,
    name: 'product 2',
    price: 20,
    description: 'This is product 2',
    Image: 'https://via.placeholder.com/150'
},
{
    id: 3,
    name: 'product 3',
    price: 30,
    description: 'This is product 3',
    Image: 'https://via.placeholder.com/150'
},


]