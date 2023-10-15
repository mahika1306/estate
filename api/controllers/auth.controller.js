import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
export const signup=async (req,res)=>{
    //consolole.log(req.body)
  const {username,email,password}=req.body;
  const hashedPasword=bcryptjs.hashSync(password,10); //10 is the salt value
  const newUser=new User({username,email,password:hashedPasword});
  try{
    await newUser.save();// saves inside the database
    // await is used because it takes time to save the data, so it stays in the event loop until the data is saved
    res.status(201).json('User creaed successfully');
  } catch(error){
    res.status(500).json(error.message);
  }
    
};
//201 is the status code for created
//500 is the status code for internal server error