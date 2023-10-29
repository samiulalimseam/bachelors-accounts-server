// controllers/userController.js
const User = require('../models/userModel.js');

exports.registerUser = async (req, res) => {
  try {
    const { fullName, email, password, phone, userType } = req.body;
    const user = new User({ fullName, email, password, phone, userType });
    const dbUser = await User.findOne({email: email});
    if(dbUser && dbUser.email === email) {
        res.status(409).send({message: 'User already exists',})
    } else {
        await user.save();
        res.status(200).json({ message: 'Registration successful', user });
    }
    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUserDetails = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.checkUser = async (req, res) => {
    console.log('check user hit');
    try {
        const {  email, password } = req.body;
        const user =await User.findOne({email: email, password : password})
        if(user) {
           
            if(user.email === email && user.password === password) {
                res.status(200).send({message: 'User found'})
                } else {
                    res.status(409).send({message: 'Mismatch'});
                }
        } else {
            res.status(404).send({message: 'Not Found'});
        }
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
}
