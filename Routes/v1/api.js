import express from 'express'

import { router as ROLE_V1_ROUTES } from '../../Modules/Role/Role.routesHandle.js'


const app = express()

app.use(express.json());
app.use("/api/v1/roles", ROLE_V1_ROUTES);

export { app }