//https://www.educative.io/collection/page/5429798910296064/5725579815944192/4708464761765888
class User {
    constructor(name) {
        this.name = name;
        this.chatroom = null;
    }

    send(message, to) {
        this.chatroom.send(message, this, to);
    }

    receive(message, from) {
        console.log(`ES6 ${from.name} to ${this.name}: ${message}`)
    }
}

class Chatroom {

    constructor() {
        this.users = {};
    }

    register(user) {
        this.users[user.name] = user;
        user.chatroom = this;
    }

    send(message, from, to) {
        if (to) {
            //single user message
            to.receive(message, from)
        } else {
            //Mass message
            for (const key in this.users) {
                if (this.users[key] != from) {
                    this.users[key].receive(message, from);
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