import {Router} from "express";``
import { getActivity, addActivity } from "../controllers/activityControllers.js"

const router = Router();

router.get("/:user", getActivity);
router.post("/", addActivity); // create new activity

export default router;



