const nav = document.querySelector(".nav");

const btnMenu = document.querySelector(".btn-menu");

const menu = document.querySelector(".menu");
    
    function handleButtonClick(event){
        if(event.type ==="");
        event.stopPropagation();
        nav.classList.toggle("active")
        handleclickOutsite(menu,()=>{
            nav.classList.remove("active");
            setAria();
        });
        setAria();
    }

    function handleButtonClick(targetElement, callback){
        const html = document.documentElement;
        function handleHTMLClick (event){
            if(!targetElement.contains(Event.Target)){
                targetElement.removeAtribute("data-target");
                html.removeEventListener("click", handleHTMLClick);
                html.removeEventListener("touchstart", handleHTMLClick);
                callback();
            }
        }
        
        if(!targetElement.hasAttribute("data-target")){
            html.addEventListener("click", handleHTMLClick);
            html.addEventListener("touchstart", handleHTMLClick);
            targetElement.setAttribute("data-target", "")
        }
    }

    function setAria(){
        const isActive = nav.classList.contains("active");
        btnMenu.setAttribute("aria-expanded", isActive);
        if(isActive){
            btnMenu.setAttribute("aria-label","Fechar Menu");
        }   else{
            btnMenu.setAttribute("aria-label","Abrir Menu")
        }
    }
btnMenu.addEventListener("click", handleButtonClick);
btnMenu.addEventListener("touchstart", handleButtonClick);

