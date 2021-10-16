//Module pattern

//Basic structure
// (function () {
//     //Benefits of iffy () is to create private vars and function

//     return {
//         //Declare public var and function
//     }
// })()

//Standard module pattern
const UICtrl = (function () {
    let text = 'Hello world';

    const changeText = function () {
        const element = document.querySelector('h1');
        element.textContent = text;
    }

    return {
        callChangeText: function () {
            changeText();
            console.log(text);
        }
    }
})()

UICtrl.callChangeText();

//----------------------------------------------------------
//Revealing module pattern
const itemCtrl = (function () {
    let data = [];

    function add(item) {
        data.push(item);
        console.log("item added...");
    }

    function get(id) {
        return data.find(item => {
            return item.id === id;
        })
    }

    return {
        add: add,
        get: get
    }
})()

itemCtrl.add({
    id: 1,
    name: 'john'
})
itemCtrl.add({
    id: 2,
    name: 'joe'
})

console.log(itemCtrl.get(1))

//----------------------------------------------------------
//single pattern
const singleton = (function () {
    let instance;

    function createInstance() {
        const object = new Object({
            name: 'brad'

        });
        return object;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }

            return instance;
        }
    }
})()

const instanceA = singleton.getInstance();
const instanceB = singleton.getInstance();

console.log(instanceA === instanceB);


//----------------------------------------------------------
//Factory pattern - clear interface to create objects
function MemberFactory() {
    this.createMember = function (name, type) {
        let member;

        //based on member type, a specific memeber object will be created
        if (type === 'simple') {
            member = new SimpleMemberShip(name);
        } else if (type === 'standard') {
            member = new StandardMemberShip(name);
        } else if (type === 'super') {
            member = new SuperMemberShip(name);
        } else {
            member = new SimpleMemberShip(name);
        }

        member.type = type;
        member.define = function () {
            console.log(`${this.name} (${this.type}): ${this.cost}`);
        }

        return member;
    }
}

const SimpleMemberShip = function (name) {
    this.name = name;
    this.cost = '$5';
}

const StandardMemberShip = function (name) {
    this.name = name;
    this.cost = '$15';
}

const SuperMemberShip = function (name) {
    this.name = name;
    this.cost = '$25';
}

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember('johndoe', 'simiple'))
members.push(factory.createMember('johndoe', 'standard'))
members.push(factory.createMember('johndoe', 'super'))

console.log(members)

members.forEach(function (member) {
    member.define(); //log the name type
})

//----------------------------------------------------------
//Observer pattern - clear interface to create objects
//to subscript and unsubscript certain events


//ES5
//constrcutor function
function EventObserver() {
    this.observers = [];
}

EventObserver.prototype = {
    subscribe: function (fn) {
        this.observers.push(fn);
        console.log(`subscribe to ${fn.name}`)
    },
    unsubscribe: function (fn) {
        //Filter out form the lsit whatever matches the callback func. if there' sno match, the callback gets to stay on the list. the filter returns a new list and reassigs the list of observers
        this.observers = this.observers.filter(function (item) {
            if (item != fn) {
                return item;
            }
        });
        //.name is part of function
        console.log(`unsubscribe from ${fn.name}`)
    },
    fire: function () {
        this.observers.forEach(function (item) {
            item.call(); //.call is part of a function
        })
    }
}

const click = new EventObserver();

//Event listerner
document.querySelector('.sub-ms').addEventListener('click', function () {
    click.subscribe(getCurrentMs);
});

document.querySelector('.unsub-ms').addEventListener('click', function () {
    click.unsubscribe(getCurrentMs);
});

document.querySelector('.fire').addEventListener('click', function () {
    click.fire();
});

document.querySelector('.sub-s').addEventListener('click', function () {
    click.subscribe(getCurrentSec);
});

document.querySelector('.unsub-s').addEventListener('click', function () {
    click.unsubscribe(getCurrentSec);
});

//click handler
const getCurrentMs = function () {
    console.log(
        `current milliseconds: ${new Date().getMilliseconds()}`
    )
}

const getCurrentSec = function () {
    console.log(
        `current Seconds: ${new Date().getSeconds()}`
    )
}

//----------------------------------------------------------
//ES6 
//constrcutor function
class EventObserverES6 {
    constructor() {
        this.observers = [];
    }

    subscribe(fn) {
        this.observers.push(fn);
        console.log(`subscribe to ${fn.name}`)
    }

    unsubscribe(fn) {
        //Filter out form the lsit whatever matches the callback func. if there' sno match, the callback gets to stay on the list. the filter returns a new list and reassigs the list of observers
        this.observers = this.observers.filter(function (item) {
            if (item != fn) {
                return item;
            }
        });
        //.name is part of function
        console.log(`unsubscribe from ${fn.name}`)
    }

    fire() {
        this.observers.forEach(function (item) {
            item.call(); //.call is part of a function
        })
    }

}
//create object
const clickES6 = new EventObserverES6();

//Event listerner
document.querySelector('.sub-ms6').addEventListener('click', function () {
    clickES6.subscribe(getCurrentMs);
});

document.querySelector('.unsub-ms6').addEventListener('click', function () {
    clickES6.unsubscribe(getCurrentMs);
});

document.querySelector('.fire6').addEventListener('click', function () {
    clickES6.fire();
});

document.querySelector('.sub-s6').addEventListener('click', function () {
    clickES6.subscribe(getCurrentSec);
});

document.querySelector('.unsub-s6').addEventListener('click', function () {
    clickES6.unsubscribe(getCurrentSec);
});

//----------------------------------------------------------
//Mediator pattern - chat room
const User = function (name) {
    this.name = name;
    this.chatroom = null;
}

User.prototype = {
    send: function (message, to) {
        this.chatroom.send(message, this, to);
    },
    receive: function (message, from) {
        console.log(`${from.name} to ${this.name}: ${message}`)
    }
}

const Chatroom = function () {
    let users = {}; //list of users

    return {
        register: function (user) {
            users[user.name] = user;
            user.chatroom = this;
        },
        send: function (message, from, to) {
            if (to) {
                //single user message
                to.receive(message, from)
            } else {
                //Mass message
                for (key in users) {
                    if (users[key] != from) {
                        users[key].receive(message, from);
                    }
                }
            }
        }
    }
}

const john = new User('John');
const jeff = new User('jeff');
const jane = new User('jane');

const chatroom = new Chatroom();

chatroom.register(john);
chatroom.register(jeff);
chatroom.register(jane);

john.send('hello there', jeff)
jane.send('hello john', john)
jeff.send("hello all")