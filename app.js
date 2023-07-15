var ans="";
function get_input(value){
    ans += value;
    document.getElementById("c2").innerHTML = ans;
}
function clean(){
    ans ="0";
    document.getElementById("c2").innerHTML = ans;
    ans ="";
}
function submit(){
    var expression = ans;
    var out = eval(expression);
    document.getElementById("c2").innerHTML = out;
    ans=out;
}
function Back(value){
     document.getElementById("c2").innerHTML;
     
}