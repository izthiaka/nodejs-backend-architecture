import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.APP_PORT || 3000
const URL = process.env.APP_URL
const APP_NAME = process.env.APP_NAME



import express from 'express'
var app = express()



import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'

/*
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
    apis: ['./docs/*.yaml'],
}

const swaggerSpec = swaggerJSDoc(options)
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

export { app }