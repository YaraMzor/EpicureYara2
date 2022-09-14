import { Router } from "express";
import { DishsController } from "../controllers/DishsController";


const router = Router();

router.get("/getDishs",DishsController.getDishs);
router.post("/createDishs",DishsController.createDishs)

export default router;