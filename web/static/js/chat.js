function sendMessage(){
alert("Heyyyy");
}

function  get_all_users(){
console.log("Voy a traer todos los usuarios");

$.get.JSON ("/users", function(){
var i =0;
$.each(data, function(){
user_to = data [i] ["id"]:
a= "<div class="alert" role="alert" >";
e= e+"<dic>"+date[i]("username")+"</div>";
e= e+"</div>";
i= i+1;
s("<div/>"),(html:e)).appendTo("#users");
)};
)}

