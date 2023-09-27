var sousmenu = document.getElementsByClassName("sous-menu");
var lien = document.getElementsByClassName("lien");

for(i=0; i<sousmenu.length; i++)
{
   sousmenu[i].style.display ="none";

   
}


// lien[1].addEventListener('click', function(){
        
//     if(sousmenu[1].style.display=="block")
//     {
//         sousmenu[1].style.display="none"
//     }
//     else if(sousmenu[1].style.display=="none")
//     {
//         sousmenu[1].style.display="block";
//     }
    
// });


for(i=0; i<lien.length; i++)
{
    lien[i].addEventListener('click',function(){
        if(sousmenu[i].style.display=="block")
        {
             sousmenu[i].style.display="none";
        }
        else if(sousmenu[i].style.display=="none")
        {
            sousmenu[i].style.display="block";
        }
        
    });
   
}