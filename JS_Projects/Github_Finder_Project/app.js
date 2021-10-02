//instantiate GitHub object
const github = new GitHub();

//instantiate UI object
const ui = new UI();

//Searc input
const searchUser = document.getElementById('searchUser');



//Search input event listener
searchUser.addEventListener('keyup', (e) => {
    //Get input text
    const userText = e.target.value;

    if (userText != '') {
        //make http get request
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    //Show alert
                    ui.showAlert(`user not found: ${userText}`, 'alert alert-danger');
                } else {
                    //show profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repo);
                }
            })

    } else {
        //clear profile
        ui.clearProfile();
    }
})