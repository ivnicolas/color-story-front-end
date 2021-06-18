//Listen for when the DOM is loaded 
let showTheForm = false;

let test = undefined 
const url = "http://localhost:3000/color_stories"


document.addEventListener("DOMContentLoaded",function(){
    //what is the first thing that needs to happen 
    // load in the color stories that already exist 
    API.addStories()



    //**FORM TOGGLE
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

// END FORM 


    // POSTING A NEW COLOR STORY 

    const newColorStory = document.querySelector(".add-color-story")

    newColorStory.addEventListener("submit", event =>{ event.preventDefault();
        
        const title = event.target.title.value 
        const description = event.target.description.value
        const color = event.target.colorpicker.value
        const user = event.target.user_name.value 

         // Can/Should I refactor this to the API)  
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
            
        })
        event.target.reset()
    })

    //END OF NEW POSTING


    //LIKE BUTTONE 

    const allCards = document.querySelector("#all-color-stories")
    
    

    allCards.addEventListener("click", function(e){

        const postID = e.target.parentElement.parentElement.id
        
        let likes = parseInt(e.target.parentElement.querySelector(".like-count").innerText)

        // why no work
        // likes = likes+1 

        let new_likes = likes +1
        e.target.parentElement.querySelector(".like-count").innerText = new_likes

        const postObj = {
            likes: new_likes
          }

        const link = `${url}/${postID}`

        fetch (link, {
            method: "PATCH",
            headers: {
              "Accept": 'application/json',
              "Content-Type": 'application/json'
            },
            body: JSON.stringify ({
              likes: new_likes
            })
          })
     

    });


//END OF LIKE BUTTON 

//closing 
    

})