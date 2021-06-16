class ColorStory{

    constructor(id, user_id, title, description, likes, color_code){
        this.id = id 
        this.user_id = user_id
        this.title = title
        this.description = description
        this.likes = likes 
        this.color_code = color_code
        
        // render to page 
        this.renderColorStory()
    }

    //render method that creates div, append it to page, 
    renderColorStory(){
        const colorStoryHolder = document.getElementById("all-color-stories")
        const colorStoryContainer = document.createElement("div")

        colorStoryContainer.dataset.id = this.id 
        colorStoryContainer.id = this.id 
        colorStoryContainer.classList.add= "color-story-card"
        colorStoryContainer.innerHTML += this.showHTML()
        colorStoryHolder.appendChild(colorStoryContainer)
    }

    showHTML(){
        return `

                <h3 class="title">${this.title}</h3>
                <h5 class= "description">${this.description}</h5>
                <h6>
                <button data-id= ${this.id}>Edit</button> <button data-id= ${this.id}>Delete</button> <button data-id= ${this.id}>Like</button>
                `
    }
}