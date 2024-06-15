import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import connect from './connect.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send(`
      <pre>
  /signin for signin
  /signup for signup
  /profile for profile
  /update for update
  /delete for delete
      </pre>
    `);
  });
  
  

app.listen(8000, () => { 
    connect(process.env.MONGO_URL);   
  console.log('Server is running on port 8000');
  
});