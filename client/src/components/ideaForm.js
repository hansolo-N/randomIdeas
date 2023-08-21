class IdeaForm{
    constructor(){
        this.formModal = document.getElementById("form-modal");
        
    }

    addEventListeners(){
        this.form.addEventListener('submit',this.handleSubmit.bind(this))
    }

    handleSubmit(e){
        e.preventDefault()
        

        const idea = {
            text:this.form.elements.text.value,
            tag:this.form.elements.tag.value,
            username:this.form.elements.username.value,
        }
        console.log(idea)

        this.form.elements.text.value = ''
        this.form.elements.tag.value =''
        this.form.elements.username.value= ''
        document.dispatchEvent("closemodal")
    }


    render(){
        this.formModal.innerHTML = ` <form id="idea-form">
        <div class="form-control">
          <label for="idea-text">Enter a Username</label>
          <input type="text" name="username" id="username" value="${
            localStorage.getItem('username') ? localStorage.getItem('username') : ''
          }" />
        </div>
        <div class="form-control">
          <label for="idea-text">What's Your Idea?</label>
          <textarea name="text" id="idea-text"></textarea>
        </div>
        <div class="form-control">
          <label for="tag">Tag</label>
          <input type="text" name="tag" id="tag" />
        </div>
        <button class="btn" type="submit" id="submit">Submit</button>
      </form>`
      this.form = document.getElementById("idea-form")
      this.addEventListeners();



    }
}

export default IdeaForm;