console.log('hello world');
console.log(document.getElementsByTagName("p")[0].innerHTML);
console.log(document.getElementsByClassName("clsname")[0].innerText);
function ok(){
    console.log("clicked");
    document.getElementsByClassName("clsname")[0].innerText="shiohsnb"
    document.getElementById("first").style.color="red"
}
