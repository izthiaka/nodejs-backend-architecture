import { Router } from "express"
import RoleController from "./RoleController.js"

// let roleController = new (require("./roles.controller").default)

const router = Router()

router.get("", (req,res, next) => {
    return RoleController.index(req, res, next)
})


export { router }