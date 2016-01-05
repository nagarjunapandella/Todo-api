var express=require('express');
var app=express();
var PORT=process.env.PORT||8000;


app.get('/',function(req,res){
  res.send('todo application is success.....');
});
app.listen(PORT,function(){
	console.log('IT is running on the port no is'+PORT);
});