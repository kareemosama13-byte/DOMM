document.querySelector("#red").onclick = function(){
  document.querySelector("#demo").style.color = "red";
}

document.querySelector("#green").onclick = function(){
  document.querySelector("#demo").style.color = "green";
}

document.querySelector("#blue").onclick = function(){
  document.querySelector("#demo").style.color = "blue";
}

document.querySelectorAll(".pen").forEach( function(kareem){
kareem.onclick = function(event){
   document.querySelector("#DEEMO").style.color = event.target.id;
}


} );

document.querySelector("#form-validd").addEventListener("submit",function(event){
  var works = document.querySelector("#works").value;
  var result = document.querySelector("#result");
  if(works==""){
    alert("enter value")
    event.preventDefault();
  }else{

    var myLi = document.createElement("li");
    myLi.innerHTML = works;
    result.append(myLi);
    document.querySelector("#works").value = ''; 
    event.preventDefault;
  }
    
});