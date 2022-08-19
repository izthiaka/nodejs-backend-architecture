import mongoose from 'mongoose'

export class MongoDb{
    async connect(){
        try{
            const DATABASE_NAME = process.env.DB_URL_MONGO;
            mongoose.connect(DATABASE_NAME);
            
            console.log(`Connected To Database : ${DATABASE_NAME}`);
        }catch (error){
            throw error;
        }
    }


    async close(){
        await mongoose.connection.close();
    }
}