//Listen for when the DOM is loaded 
let showTheForm = false;

let test = undefined 
const url = "http://localhost:3000/color_stories"


document.addEventListener("DOMContentLoaded",function(){
    //what is the first thing that needs to happen 
    // load in the color stories that already exist 
    API.addStories()

    // create toggle to display/hide form 
    const formContainer = document.querySelector(".container");
    const addBtn = document.querySelector("#new-color-story");

    addBtn.addEventListener("click", () => {

      //toggle
      showTheForm = !showTheForm;

      // Initially showTheForm === false
      if (showTheForm) {
        formContainer.style.display = "block";
      } else {
        formContainer.style.display = "none";
      }

    });


    // get fetch request 

    const newColorStory = document.querySelector(".add-color-story")

    newColorStory.addEventListener("submit", event =>{ event.preventDefault();
        
        const title = event.target.title.value 
        const description = event.target.description.value
        const color = event.target.colorpicker.value
        const user = event.target.user_name.value 

          
        fetch(url,{
            method: "POST",
            headers: { "Content-Type": "application/json"}, //syntax
            body: JSON.stringify({ 
                "title": title,
                "description": description,
                "color_code": color, 
                "user": user,
                "likes": 0
            })
        })
        .then(response => response.json())
        .then(something => {
            let colorStory = new ColorStory(
                something.id, 
                something.user_id, 
                something.title, 
                something.description, 
                something.likes , 
                something.color_code
            )
            // colorStory.id = something.id
            // colorStory.user_id = something.user_id 
            // colorStory.title = something.title
            // colorStory.description = something.description
            // colorStory.likes = 0
            // colorStory.color_code = something.color_code

            // colorStory.renderColorStory()
            
            
        })
    

        event.target.reset()
  
        // fetch(url, {
      
        //     method: "POST",
        //     headers: { "Content-Type": "application/json"},
        //     body: JSON.stringify({ 
        //       "title": title,
        //       "description": description,
        //     //   "likes": 0
        //       /* WHAT WE ARE POSTING */
        //     })
        
        //   })
        //   .then(response => response.json())
        //   .then(theThingWePostedButFromTheServer => new ColorStory (theThingWePostedButFromTheServer) )
    


















    })
//closing 
})