//Listen for when the DOM is loaded 
let showTheForm = false;


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
})