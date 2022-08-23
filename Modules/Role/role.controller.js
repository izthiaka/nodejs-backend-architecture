// import { ApiResponse } from "../../core/helpers/ApiResponse.js";
import { AbstractBaseController } from "../../core/helpers/BaseControoler.js"
import { RoleSchema } from "../../database/schemas/RoleSchema.js"
import { SystemResponse } from "../../core/helpers/SystemResponse.js"

export default class RoleController extends AbstractBaseController {

    constructor(response = new SystemResponse()){
        super()
        this._response = response
    }

    async index(req, res, next){
        try {
            let data = await RoleSchema.find()
            res.send(this.created(200, true, "List *", data))
        } catch (error) {
            this._response.fail(res, "Une Erreur est survenue !")
            // this.helperJsonResponse.messageByDefaultSuccessFalse("Une Erreur est survenue !")
        }
    }

    async create(req, res, next){}

    async show(req, res, next){}

    async update(req, res, next){}

    async delete(req, res, next){}
}

