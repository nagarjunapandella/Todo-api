var express=require('express');
var bodyParser=require('body-parser');
var app=express();
var PORT=process.env.PORT||8000;
var todos=[];
var nextTodoId=1;
app.use(bodyParser.json());
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
app.post('/todos',function(req,res){
   var body=req.body;
  body.id=nextTodoId++;
  todos.push(body);
   res.json(body);
});

app.listen(PORT,function(){
	console.log('IT is running on the port no is'+PORT);
});