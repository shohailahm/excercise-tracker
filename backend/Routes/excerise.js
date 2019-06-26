const router=require('express').Router();
const Excercise=require('../models/excercise.model');

router.route('/').get((req,res)=>{
    Excercise.find()
    .then(users=>res.json(users))
    .catch(err=>res.status(400).json('Error'+err))
})


router.post("/add",(req,res)=>{
    console.log(req.body);
    const username=req.body.username;
    const description=req.body.description;

    const duration=req.body.duration;
    let date=req.body.date;

   if(date){
       date=Date.parse(date);
   }
    Excercise.create(req.body)
    .then(()=>res.json('new user Added'))
    .catch(err=>res.status(400).json('Error'+err))
})


router.get('/:id',(req,res)=>{

    Excercise.findById(req.params.id)
    .then((ex)=>res.json(ex))
    .catch(err=>res.status(400).json("ERR"+err));
})

router.delete("/:id",(req,res)=>{
    Excercise.findByIdAndDelete(req.params.id)
    .then((ex)=>res.json("Excercise Deleted"))
    .catch(err=>res.status(400).json(err));
})

router.post("/update/:id",(req,res)=>{
    Excercise.findById(req.params.id)
    .then((excercise)=>{
        excercise.username=req.body.username;
        excercise.description=req.body.description;
        excercise.duration=Number(req.body.duration);
        excercise.date=Date.parse(req.body.date);
        excercise.save()
        .then(()=>res.json("User Updated"))
        .catch(err=>res.status(400).json(err))
    })
    .catch(err=>res.status(400).json(err));
})




module.exports=router;