var express=require('express');
var app=express();
var PORT=process.env.PORT||8000;
var todos=[{
	id:1,
	name:'Nagarjuna',
	company:'Bitapps',
	salary:15000,
	role:'Software Engineer'
},{
	id:2,
	name:'Venkatesh',
	company:'Bitapps',
	salary:15000,
	role:'Software Engineer'
},{
	id:3,
	name:'Gopi Ram',
	company:'Bitapps',
	salary:15000,
	role:'Software Engineer'
},{
	id:4,
	name:'Gopi Kishore',
	company:'Bitapps',
	salary:15000,
	role:'Software Engineer'
}];

app.get('/',function(req,res){
  res.send('todo application is success.....');
});

app.get('/todos',function(req,res){
   res.json(todos);
});

app.get('/todos/:id',function(req,res){
	var todoId=parseInt(req.params.id,10);
	var matchedId;
	todos.forEach(function(todo){
      if (todoId===todo.id) {
      	matchedId=todo;
      };
	});
	if (matchedId) {
		res.json(matchedId)
	}else{
		res.status(404).send();
	}
	
});


app.listen(PORT,function(){
	console.log('IT is running on the port no is'+PORT);
});