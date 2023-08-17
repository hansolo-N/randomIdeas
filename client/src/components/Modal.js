class Modal{
    constructor(){
        this.modal = document.getElementById("modal");

        this.modalBtn = document.getElementById("modal-btn");
        
        this.addEventListeners();
        
    }

        addEventListeners(){
            this.modalBtn.addEventListener('click',this.open.bind(this))
        
        
            window.addEventListener("click",this.outsideClick.bind(this))
        }
        //open modal
        open(){
            this.modal.style.display = "block";
        }
        
        
        //close modal
        close(){
            this.modal.style.display = "block";
        }
        
        //close modal
         outsideClick(e){
            if( e.target === this.modal){
                close();
            }
        }
    
    
    }



    

export default Modal;