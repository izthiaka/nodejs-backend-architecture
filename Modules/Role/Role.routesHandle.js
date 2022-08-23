import { Router } from "express"
import RoleController from "./role.controller.js"



const router = Router()
const roleController = new RoleController();

router.get("/all", (req,res, next) => {
    return roleController.index(req, res)
})


export { router }