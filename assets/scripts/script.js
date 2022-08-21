document.addEventListener('DOMContentLoaded', function () {
    var article = document.getElementsByClassName('card');    

    for(var i =0; i< article.length; i++){        
        article[i].onmouseenter = function(){ 
            this.classList.add('active');            
        }


        article[i].onmouseleave = function(){ 
            this.classList.remove('active');
        }
    }


})