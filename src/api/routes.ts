import { Router } from 'express';
import kingsData from '../models/structure-base';
import { StoreUser } from '../controllers/controller'

const router = Router();


router.post('/kingpress/data/message/senddata', StoreUser);



 
export default router;
