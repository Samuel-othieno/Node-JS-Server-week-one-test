import express from 'express';
import morgan from 'morgan';
import coursesRouter from './routes/coursesRouter.js';
import fs from 'fs';
import path from 'path';

// express server instance
const app= express();

const PORT =  process.env.PORT||4000;



//Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use('./api', coursesRouter);
app.use(express.static('public'));

const PASSWORD = '@Douglas1799';
let authToken = null;


// Route handlers
app.get('/login', (req, res) => {
    res.sendFile(path.join('public', 'login.html'));
});

app.post('/login', (req, res) => {
    const {password} = req.body;
    if(password === PASSWORD) {
        authToken = Math.random().toString(36).substring(2);
        res.cookie('authToken', authToken);
        res.redirect('/node-course');
    }else{
        res.status(401).send('Unauthorized');
    }
})


app.get('/node-course', (req, res,) => {
    const {authToken: token} = req.cookies;
    if (token === authToken) {
        res.sendFile(path.join('public', 'node-course.html'));
    }else {
        res.redirect('/login');
    }
})

// server listening
app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`);
})