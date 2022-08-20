import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.APP_PORT || 3000
const URL = process.env.APP_URL
const APP_NAME = process.env.APP_NAME



import express from 'express'
var app = express()



/**
 * SETTING OF DATABASE
 */
import { DbAdapter } from './Services/Database/Mongo/DbAdapter.js'

const database = new DbAdapter()
database.connectDatabase()



import { router as ROLE_V1_ROUTES } from './Modules/Role/Role.routesHandle.js'


app.use(express.json())

app.use("/api/v2/roles", ROLE_V1_ROUTES)

app.use(function(req, res, next){
    res.status(404)
    res.json({
        statusCode: 404,
        success: false,
        message: '404 NOT FOUND' 
    })
})

import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'

/**
 * FOR THE DOCUMENTATION WITH SWAGGER
 */
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: `ExpressJS API for ${APP_NAME}`,
        description: "API documentation ...",
        version: '1.0.0',
    },
    servers: [
        {
            url: `${URL}:${PORT}/api/v1`,
            description: 'Development server',
        },
    ],
}

const options = {
    swaggerDefinition,
    // Paths to files containing OpenAPI definitions
    apis: ['./Docs/*.yaml'],
}

const swaggerSpec = swaggerJSDoc(options)
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

export { app }