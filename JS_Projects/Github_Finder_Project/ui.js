class UI {
    constructor() {
        this.profile = document.getElementById("profile");
    }

    //display profile
    showProfile(user) {
        const userDp = user.avatar_url,
            name = user.name || "No Name Provided",
            viewProfile = user.html_url,
            pubRepos = user.public_repos,
            pubGists = user.public_gists,
            followers = user.followers,
            following = user.following,
            company = user.company || "Not Provided",
            website = user.blog || "Not Provided",
            websiteUrl = website === "Not Provided" ? "" : website,
            location = user.location || "Not Provided",
            profileCreated = new Date(user.created_at).toDateString();

        this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3 text-center">
                    <img class="img-fluid mb-2" src="${userDp}">
                <div class="name mb-2">
                    <strong>${name}</strong><br>
                </div>
                <a href="${viewProfile}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                </div>
                <div class="col-md-9">
                <span class="badge badge-primary mb-2">Public Repos: ${pubRepos}</span>
                <span class="badge badge-secondary mb-2">Public Gists: ${pubGists}</span>
                <span class="badge badge-success mb-2">Followers: ${followers}</span>
                <span class="badge badge-info mb-2">Following: ${following}</span>
                <br><br>
                <ul class="list-group">
                <li class="list-group-item">Company: ${company}
                <li class="list-group-item">Website/Blog: <a href="${websiteUrl}" target="_blank">${website}</a>
                <li class="list-group-item">Location: ${location}
                <li class="list-group-item">Member since: ${profileCreated}
                </ul>
                </div>
            </div>
        </div>
        <h3 class="page-heading mb-3 ml-3" style="color: rgb(57, 113, 209)">Latest Repositories</h3>
        <div id="repos"></div>
        `;
    }

    //Show user repos
    showRepos(repos) {
        let output = "";
        repos.forEach(function (repo) {
            console.log(repo)
            output += `
                <div class="card card-body mb-2>
                    <div class="row">
                        <div class="col-md-6">
                        <a href="${repo.hmtl_url}" target="_blank">${repo.name}</a>
                        </div>

                        <div class="col-md-6">
                        <span class="badge badge-primary mb-2">Stars: ${repo.stargazers_count}</span>

                        <span class="badge badge-secondary mb-2">Watchers ${repo.watchers}</span>

                        <span class="badge badge-success mb-2">Forks: ${repo.forks_count}</span>

                        </div>
                    </div>
                </div>
                `;
        });

        //output repos
        document.getElementById('repos').innerHTML = output;
    }

    //show alert msg
    showAlert(msg, className) {
        //clear any remaining alert
        this.clearAlert();

        //create div
        const div = document.createElement("div");
        //add classes
        div.className = className;

        //add text
        div.appendChild(document.createTextNode(msg));

        //Get parent
        const container = document.querySelector(".searchContainer");

        //get search box
        const search = document.querySelector(".search");

        container.insertBefore(div, search);

        //TimeOut after 3 sec
        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }

    //clear alert msg
    clearAlert() {
        const currentAlert = document.querySelector(".alert");
        if (currentAlert) {
            currentAlert.remove();
        }
    }

    //clear profile
    clearProfile() {
        this.profile.innerHTML = "";
    }
}