export const personES6 = {
    name: 'john doe',
    age: '32',
    email: "test@gmail.com"
}

export function sayHello() {
    return `hello ${personES6.name}`;
}

const greeting = 'hello javascript';

//default no need of {} on import
export default greeting;