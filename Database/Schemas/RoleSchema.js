import mongoose from "mongoose"
const { Schema } = mongoose


export const COLLECTION_NAME = 'roles'

const roleSchema = new Schema({
    code_role: {
        type: String,
        required: true
    },
    name_role: {
        type: String,
        required: true
    }
}, { timestamps: true })

const RoleSchema = mongoose.model(COLLECTION_NAME, roleSchema)

export { RoleSchema } 