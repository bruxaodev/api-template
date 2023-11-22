import { connect } from 'mongoose'
import { config as dotenv } from 'dotenv'
dotenv()
const { MONGO_URL } = process.env

export default async function (){
    try{
        console.log("connectando ao mongo DB!")
        await connect(MONGO_URL)
    }
    catch(err){
        console.error("Erro ao connectar! ",err)
    }
}