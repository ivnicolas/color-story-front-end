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
        this.likeMe()
       
    }

    //render method that creates div, append it to page, 
    renderColorStory(){
        const colorStoryHolder = document.getElementById("all-color-stories")
        const colorStoryContainer = document.createElement("div")


        //explain this tidbit right here pls 
        colorStoryContainer.dataset.id = this.id 
        colorStoryContainer.id = this.id 
        colorStoryContainer.classList.add= "color-story-card"
        colorStoryContainer.innerHTML += this.showHTML()
        colorStoryHolder.appendChild(colorStoryContainer)
      
      
    }

    showHTML(){
        return `

        <div class="card" style="background-color: ${this.color_code}">
        <i class="large material-icons heart-icon">favorite</i><p class= "like-count">${this.likes}</p>
            <di class="card-footer">
                <div>
                    <h2 class="card-title" >${this.title.toUpperCase()}</h2>
                </div>
             </di>
        </div>
         <br><br>      
                
                
                `
    }



    // WHAT I WANTED TO DO 
    // likeMe(){
    //     const likeButtons = document.querySelectorAll(".heart-icon")
    //     for (const likeButton of likeButtons){
    //     likeButton.addEventListener("click", addLike)
    //     }
    // }

    // addLike(e){
    //     const url = "http://localhost:3000/color_stories"
    //     const postID = e.target.parentElement.parentElement.id
        
    //     let likes = parseInt(e.target.parentElement.querySelector(".like-count").innerText)

    //     // why no work
    //     // likes = likes+1 

    //     let new_likes = likes +1
    //     e.target.parentElement.querySelector(".like-count").innerText = new_likes


    //     const postObj = {
    //         likes: new_likes
    //       }

        
    //     const options = {
    //     method: 'PATCH',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(postObj)
    //     }
    
    //     const url = `${url}/${postID}`
    //     const resp = fetch(url, options)
    //     const data = resp.json()

    //     API.addStories

    // }

    // likeMe(){
    //     const likeButtons = document.querySelectorAll(".heart-icon")
    //     for (const likeButton of likeButtons){
    //         // add event listener to each one
    //         likeButton.addEventListener("click", function(e){
    //          if (e.target.className == "large material-icons heart-icon"){
    //             let likes = parseInt(e.target.parentElement.querySelector(".like-count").innerText)
    //             let new_likes = likes +1
    //             e.target.parentElement.querySelector(".like-count").innerText = new_likes
    //          } 
    //         })
    //       }
    // }


    // addLike(e){
    //     console.log("we done did it again")
    // }
}




//<h5 class= "description">${this.description}</h5>
                // <button data-id= ${this.id}>Edit</button> <button data-id= ${this.id}>Delete</button> <button data-id= ${this.id}>Like</button>