import { ApiJsonResponse } from "../../Core/helpers/ApiJsonResponse.js";
import { RoleSchema } from "../../Database/Schemas/RoleSchema.js";

export default class RoleController {
    constructor(
        helperJsonResponse = ApiJsonResponse()
    ){
        this._helperJsonResponse = helperJsonResponse
    }

    async index(req, res, next){
        try {
            return await RoleSchema.find()
        } catch (error) {
            this.helperJsonResponse.messageByDefaultSuccessFalse("Une Erreur est survenue !")
        }
    }

    async create(req, res, next){}

    async show(req, res, next){}

    async update(req, res, next){}

    async delete(req, res, next){}
}