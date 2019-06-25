// Instantiate the class
const GitHub = new Github;
// Instiate the UI class 
const ui= new UI;

// Seach Input 
const searchUser = document.querySelector("#searchUser");

// Event Listener
searchUser.addEventListener("keyup",(e) => {
     
    const userText = e.target.value;
    // console.log(userText);

    if(userText !== ''){
        // Make http call
        GitHub.getUser(userText)
            .then(data => {
                if(data.profile.message === 'Not Found' ){
                    // alert
                    ui.showAlert('User not found','alert alert-danger')

                } else {
                    // show profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            })
    } else {
        // Clear Profile
        ui.clearProfile();
    }

});

