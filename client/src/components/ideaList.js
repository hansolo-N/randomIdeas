import ideasApi from "../services/ideasApi";



class IdeaList{
    constructor(){
        this.ideaListEl = document.getElementById('idea-list')

        this.getIdeas();
        this._validTags = new Set();
        this._validTags.add('technology');
        this._validTags.add('software');
        this._validTags.add('business');
        this._validTags.add('education');
        this._validTags.add('health');
        this._validTags.add('inventions');





        this.ideas = [
            
        ]

    }

    async getIdeas(){
      try {
        const res = await ideasApi.getIdeas();
        this.ideas = res.data.data
        this.render()
      } catch (error) {
        console.log(error)
      }
    }

    addideaToList(idea){
      this.ideas.push(idea)
      this.render()
  }


    getTagClass(tag){
        tag = tag.toLowerCase();
        let tagClass = ''
        if(this._validTags.has(tag)){
            tagClass = `tag-${tag}`
        }
        else{
            tagClass=''
        }

        return tagClass
    }


    render(){
        this.ideaListEl.innerHTML =this.ideas.map((idea)=>{
            const tagClass = this.getTagClass(idea.tag)
            return `
            <div class="card" data-id="${idea._id}">
            <h3>
              ${idea.text}
            </h3>
            <p class="tag ${tagClass}">${idea.tag.toUpperCase()}</p>
            <p>
              Posted on <span class="date">${idea.Date}</span> by
              <span class="author">${idea.username}</span>
            </p>
          </div>
            `;
            })
            .join('');
    }
}

export default IdeaList