 class API {

    //need a create fetch and an update fetch and possibly a delete fetch 
     //static fucntion that is a fetch request to the backend index to load color stories 

     static addStories(){
         fetch("http://localhost:3000/color_stories")
         .then(resp => resp.json()) //this help to make out responce readable 
         .then(colorStories => {
            //  console.log(colorStories)
             colorStories.forEach( colorStory => {
                console.log(colorStory)
                const{id, user_id, title, description, likes, color_code} = colorStory
                new ColorStory (id, user_id, title, description, likes, color_code) 
                    }
                )
            }
        )
    }

    static createStories(){
        
    }
}
 