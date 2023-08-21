class IdeaList{
    constructor(){
        this.ideaListEl = document.getElementById('idea-list')
        this._validTags = new Set();
        this._validTags.add('technology');
        this._validTags.add('software');
        this._validTags.add('business');
        this._validTags.add('education');
        this._validTags.add('health');
        this._validTags.add('inventions');





        this.ideas = [
            {
                id:1,
                text: 'this is idea 1',
                tag:'business',
                username: 'john',
                Date: '20/08/23'
            },
            {
                id:2,
                text: 'this is idea 2',
                tag:'sport',
                username: 'benzema',
                Date: '21/08/23'
            }
        ]

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