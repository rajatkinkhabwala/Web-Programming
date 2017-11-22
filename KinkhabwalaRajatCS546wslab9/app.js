const express=require('express');
const bodyParser=require('body-parser');
var flash = require('connect-flash');
const app=express();

var passport=require('passport');
var LocalStrategy=require('passport-local').Strategy;
var exphbs=require('express-handlebars');
var session=require('express-session');
const static=express.static(__dirname+'/public/');
app.use('/public', static);
const userData = require("./data/user");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended:true
}));
app.use(session({secret: 'keyboard cat', cookie: { maxAge: 60000 }}));
app.use(flash());
app.use(require('cookie-parser')());

const configRoutes=require('./routes');

app.engine('handlebars',exphbs({
	defaultLayout:'main',
	helpers: {
		asJSON:(obj,spacing)=>{
			if(typeof spacing=='number')
				return new Handlebars.SafeString(JSON.stringify(obj, null, spacing));
			return new Handlebars.SafeString(JSON.stringify(obj));
		}
	}
}));
app.set('view engine', 'handlebars');

passport.use(new LocalStrategy( {passReqToCallback : true},
  	function(req,username, password, done) {
	   	process.nextTick(function() {	
	   		userData.checkForUser(username,password).then(result=>{
	   			//console.log(result);
	  			return done(null,result);
	   		}).catch(error=>{
	   			console.log(error+"")
	   			return done(null, false, req.flash('message','Invalid username or password'));
	   		});
	   	});
  	}
));
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});


app.use(passport.initialize());
app.use(passport.session());

configRoutes(app);
app.listen(3000, ()=>{
	console.log("We've got a server running!");
	console.log("Your routes will be running on http://localhost:3000");
});