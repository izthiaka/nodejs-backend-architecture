import { MongoDb } from "./MongoDb.js"

export class DbAdapter{
    constructor(database = new MongoDb()) {
        this._database = database;
    }

    async connectDatabase(){
        await this._database.connect()
    }

    async closeDatabase(){
        await this._database.close();
    }
}