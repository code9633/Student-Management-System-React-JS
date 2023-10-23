// this codes is used to do the CRUD operations

const router  = require("express").Router();
let Student = require("../models/Student")  // model of the student data add and get from the database


// add the data for the database
router.route("/add").post((req, res)=>{
    
    const name = req.body.name
    const age = Number(req.body.age)  // Cast the datatype accroding to the model
    const gender = req.body.gender

    const newStudent = new Student({
        name,
        age,
        gender
    })

    //saving model in to the database
    newStudent.save().then(()=>{  // javascript Promise if success .... else error ....
        res.json("Student Added")
    }).catch((err)=>{
        console.log(err)
    }) 
})

// Get the data from the all the users
router.route("/").get((req, res)=>{   
    Student.find().then((students)=>{
        res.json(students)
    }).catch((err) =>{
        console.log(err)
    })
})


// User data Updation
router.route("/update/:id").put(async (req, res) =>{
    let userId = req.params.id
    // destructurue method
    const {name, age, gender} = req.body
    // create updataStudent object
    const updateStudent = {
        name, 
        age, 
        gender
    }
    // ssync and await are both parallel
    const update = await Student.findByIdAndUpdate(userId, updateStudent).then(()=>{
        //second method of passed the massage thoruugh json instead of then catch
        res.status(200).send({status : "User Updated"})
    }).catch((err)=>{
        console.log(err)
        res.status(500).send({status : "Error with updating data", error: err.message})
    })
 
})

//User data delete

router.route('/delete/:id').delete(async (req, res) =>{
    let userId = req.params.id;
    
    const delteteStudent = await Student.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status:"User Delted"});
    }).catch((err)=>{
        console.log(err)
        res.status(500).send({status : "Error with deleting data", error : err.message})
    })
    
})
    


// Get a user data from the database

router.route("/get/:id").get(async (req, res)=>{
    let userId = req.params.id
    const user = await Student.findById(userId).then((student)=>{
        res.status(200).send({status : "User Fetched", student})
    }).catch((err)=>{
        console.log(err)
        res.status(500).send({status : "Error with get user", error : err.message})
    })
})

module.exports = router 