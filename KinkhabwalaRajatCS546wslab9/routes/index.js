var userRoutes=require('./user');
const constructorMethod=(app) =>{
	app.use('/', userRoutes);
	app.use('*', (req,res)=>{
		res.redirect('/')
	});
}
module.exports=constructorMethod;