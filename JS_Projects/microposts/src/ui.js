class UI {
    constructor() {
        this.post = document.querySelector('#posts');
        this.titleInput = document.querySelector('#title');
        this.body = document.querySelector('#body');
        this.idInput = document.querySelector('#id');
        this.postSubmit = document.querySelector('.post-submit');
        this.forState = 'add';
    }

    showPosts(posts) {
        let output = '';

        posts.forEach((post) => {
            output += `
                <div class="card mb-3">
                    <div class="card-body">
                    <h4 class="card-title">${post.title}</h4>
                    <p class="card-text">${post.body}</p>
                    <a href="#" class="edit card-link" data-id="${post.id}">
                        <i class="fa fa-pencil"></i>
                    </a>

                    <a href="#" class="delete card-link" data-id="${post.id}">
                    <i class="fa fa-remove"></i>
                </a>
                    </div>
                </div>
            `
        })

        this.post.innerHTML = output;
    }

    showAlerts(msg, className) {
        this.clearAlert();


        //create div
        const div = document.createElement('div');
        div.className = className;

        //add text
        div.appendChild(document.createTextNode(msg));

        //insertBefore - Get parent
        const container = document.querySelector('.postsContainer');

        //get posts
        const posts = document.querySelector('#posts');

        container.insertBefore(div, posts);

        //Timeout
        setTimeout(() => {
            this.clearAlert()
        }, 3000);

    }

    clearAlert() {
        const currentAlert = document.querySelector('.alert');

        if (currentAlert) {
            currentAlert.remove();
        }
    }

    clearFields() {
        this.titleInput.value = '';
        this.body.value = '';
    }

    //Fill form for edit
    fillForm(data) {
        this.titleInput.value = data.title;
        this.body.value = data.body;
        this.idInput.value = data.id;

        this.changeFormState('edit');
    }

    //change form state
    changeFormState(type) {

        if (type === 'edit') {
            this.postSubmit.textContent = 'Update Post';
            this.postSubmit.className = 'post-submit btn btn-warning btn-block';

            //create cancel button below
            const button = document.createElement('button');
            button.className = 'post-cancel btn-light btn-block';
            button.appendChild(document.createTextNode('Cancel Edit'));

            //InsertBefore - parent
            const cardForm = document.querySelector('.card-form');

            //Get element to insert before
            const formEnd = document.querySelector('.form-end');

            cardForm.insertBefore(button, formEnd);

        } else {
            this.postSubmit.textContent = 'Post it';
            this.postSubmit.className = 'post-submit btn btn-primary btn-block';

            //remove cancel button if it exists
            if (document.querySelector('.post-cancel')) {
                document.querySelector('.post-cancel').remove();
            }

            //clear id from hidde field
            this.clearIdInput();

            //clear text fields
            this.clearFields();
        }
    }

    clearIdInput() {
        this.idInput.value = '';
    }
}

export const ui = new UI();