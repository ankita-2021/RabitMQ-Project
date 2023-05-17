const StudentModel = require('../models/student.js');
const producer = require('../producer.js');
const producerMedium = require('../producerMedium.js');
const producermedium = require('../producerMedium.js');

class StudentController{
    static createDoc = async(req,res)=>{
        try{
            const {name, std, roll, subject, medium} = req.body
            const doc = new StudentModel({
                name:name,
                std:std,
                roll:roll,
                subject:subject,
                medium: medium

            })
            const result = await doc.save()
            console.log(result._id)
            await producer(result._id);

            await producerMedium(result.medium)
            

            res.status(201).send(result)
        } catch (error){
            console.log(error)
        }
    }

    static getAllDoc = async(req,res)=>{
        try{
            const result = await StudentModel.find()
            res.send(result)
            // check to get data...
            console.log(result)

        } catch(error){
            console.log(error)
        }
    }

    // get student by medium...
    static getAllDocMedium = async(req,res)=>{
        try{
            const result = await StudentModel.find()
            res.send(result)
            // check to get data...
            console.log(result)

        } catch(error){
            console.log(error)
        }
    }



    static getAllDocById = async(req,res)=>{
        try{
            const result = await StudentModel.findById(req.params.id)
            res.send(result)
            // check to get data...
            console.log(result)
            
        } catch (error){
            console.log(error)
        }
    }
}

module.exports = StudentController