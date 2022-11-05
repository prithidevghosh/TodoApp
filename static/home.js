
// for(var i=0;i<check.length;i++){
// label_for_accept[i].addEventListener("click",function () {
//     console.log(check[i].checked);
// })
// }
exports=function show(){
var table=[]
var test=document.getElementById("test");
test.addEventListener("click",function () {
    var all=document.querySelectorAll(".check:checked");
    for(var i of all){
       table.push(i.value);
    }
   for(var i of all){
     console.log(i);
   }
})
}
// module.exports=function show() {
//     for(var i of table){
//         console.log(i);
//     }

// }

var category=document.getElementsByClassName("work");

