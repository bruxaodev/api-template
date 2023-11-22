import { Test } from '../models/test.js'


export async function getTest(req, res) {
    try {
        //variaveis na url
        //const { name, number } = req.query

        const tests = await Test.find({})

        res.status(200).json({
            message: `${tests.length} tests find`
        })
    }
    catch (err) {
        console.log(err)
        res.status(400).json({
            message: 'fail'
        })
    }
}

export async function postTest(req, res) {
    try {
        //variaveis no body
        //const { name, number } = req.body

        const tests = await new Test.create({}).save()

        res.status(200).json({
            message: `${tests.length} tests find`
        })
    }
    catch (err) {
        console.log(err)
        res.status(400).json({
            message: 'fail'
        })
    }
}