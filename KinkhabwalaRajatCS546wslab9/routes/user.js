const express=require('express');
const router=express.Router();
const data = require("../data");
const userData = require("../data/user");
var passport=require('passport');

router.get('/', (req,res)=>{
	if(req.username)
		res.redirect('/private');
	else
		res.render("other/static", {message: req.flash('message')});
});
router.post('/login',
  passport.authenticate('local', { successRedirect : '/private',
                                   failureRedirect : '/',
                                   failureFlash : true 
                               })
);

router.get("/private", (req, res, next) => {
	res.render("other/private",req.user);
});
module.exports=router;