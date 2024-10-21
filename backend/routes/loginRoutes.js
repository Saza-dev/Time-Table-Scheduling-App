import express from 'express';
import { getAUser } from '../controller/loginController.js';

const router = express.Router();

// Ensure this route matches your request URL
router.get('/get-a-user', getAUser); 

export default router;
