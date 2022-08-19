import { app } from  './main.js'

const PORT = process.env.APP_PORT || 3000

app.listen(PORT, async () => {
    console.log(`listening on PORT ${PORT}`);
})