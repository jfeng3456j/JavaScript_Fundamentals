const data = [{
        name: 'john doe',
        age: 32,
        gender: 'male',
        lookingFor: 'female',
        location: 'Seattle',
        image: 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
        name: 'jane doe',
        age: 32,
        gender: 'female',
        lookingFor: 'male',
        location: 'Chicago',
        image: 'https://randomuser.me/api/portraits/women/77.jpg'
    },
    {
        name: 'James doe',
        age: 20,
        gender: 'male',
        lookingFor: 'female',
        location: 'Austin',
        image: 'https://randomuser.me/api/portraits/men/77.jpg'
    },
];

const profiles = profileIterator(data);

//call first profile
nextProfile();

//next event
document.getElementById('next').addEventListener('click', nextProfile)

//next profile display
function nextProfile() {
    const currentProfile = profiles.next().value;

    if (currentProfile != undefined) {
        document.getElementById('profileDisplay').innerHTML = `
        <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
        <li class="list-group-item">Prefence: ${currentProfile.gender}</li>
        <li class="list-group-item">Looking for: ${currentProfile.lookingFor}</li>
        </ul>
        `

        document.getElementById('imageDisplay').innerHTML =
            `<center><img src="${currentProfile.image}"></center>`
    } else {
        window.location.reload();
    }

}

//create iterator
function profileIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profiles.length ? {
                value: profiles[nextIndex++],
                done: false
            } : {
                done: true
            }
        }
    }
}