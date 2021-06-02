let bl = document.getElementById("like1");
    
        bl.addEventListener("click",function(){
            if (bl.style.color == "black")
            {
                bl.style.color = "red";
            } else {
                bl.style.color = "black";
            }
        })
    



var compteur =0;
var total =0;
prix = document.getElementById("pr").innerHTML;

document.querySelector("#pbtn").addEventListener("click",function()
{
    compteur = document.getElementById("qte1").value;
    compteur++;
    document.getElementById("qte1").value = compteur;
    total = compteur * prix;
    document.getElementById("pr").innerHTML = total;
})

document.querySelector("#mbtn").addEventListener("click",function()
{
    compteur = document.getElementById("qte1").value;
    if (compteur>0){
    compteur--;}
    document.getElementById("qte1").value = compteur;
    total = compteur * prix;
    document.getElementById("pr").innerHTML = total;

}
)
        
    
document.querySelector("#bdel").addEventListener("click",function()
{
document.getElementById("sup").remove();  
})    
      
