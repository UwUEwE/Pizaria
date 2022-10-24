MenuListArray = ["Pizza Vegetariana",
                 "Pizza Doce",
                 "Pizza de Catupiri",
                 "Pizza de Calabresa",
                 "Pizza de Frango"];
                    

function getMenu(){
var htmldata="";
MenuListArray.sort();
var quantidade = MenuListArray.length;
for(var i=0; i <quantidade; i++){
    htmldata = htmldata+ MenuListArray[i] + "<br>";
}
document.getElementById("displayMenu").innerHTML = htmldata;
//Completar o código
}

function addItem(){
var htmldata="";
var imgtags = '<img id="im1" src="images/pizzaImg.png"/>'
var item = document.getElementById("addItem").value;
MenuListArray.sort();
var quantidade = MenuListArray.length;
for(var i=0; i<quantidade; i++){
    htmldata=htmldata+imgtags+ MenuListArray[i] + "<br>";
}
document.getElementById("displayAddedMenu").innerHTML = htmldata;
//Completar o código

}

function addTop(){
    var item=document.getElementById("addItem").value;
    MenuListArray.push(item);
    addItem();
//Completar o código
}
