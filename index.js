import express from 'express';
import morgan from 'morgan';

// express server instance
const app= express();

// middleware
app.use(morgan('dev'));
app.use(express.static('public'));

// Route handlers
app.get('/', (req, res) => {
    res.send('Welcome to the backend server!');
})

// server listening
app.listen(4000, ()=>{
    console.log('Server listening on port 4000');
})