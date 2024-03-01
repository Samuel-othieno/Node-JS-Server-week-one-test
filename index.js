import express from 'express';
import morgan from 'morgan';

//middleware
server.use(morgan('dev'))



const server= express();

server.get('/', (req, res)=> {
    res.send('Welcome to my sever.');
})

server.get('/home', (req, res)=> {
    res.send('Welcome to the home page.');
})

server.get('/about', (req, res)=> {
    res.send('This is the About page');
})

server.get('/Contact', (req, res)=> {
    res.send('This is the Contact page');
})

server.listen(4000, ()=>{
    console.log('Server listening on port 4000');
})