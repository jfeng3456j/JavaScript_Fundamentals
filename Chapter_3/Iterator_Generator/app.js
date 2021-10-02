//iterator pause the loop
function nameIterator(names) {
    let nextIndex = 0;

    return {
        next: function () {
            //if nextIndex < names.length
            return nextIndex < names.length ? {
                value: names[nextIndex++],
                done: false
            } : {
                done: true
            }
        }
    }
}

//create an array of names
const namesArr = ['john', 'jane', 'joey'];
const names = namesIterator(namesArr);

console.log(names.next()); //john
console.log(names.next()); //jane
console.log(names.next()); //joey


//genreator(*) -function return multiple values
function* sayNames() {
    yield 'john';
    yield 'jane';
    yield 'joey';
}

const name = sayNames();
console.log(name.next());


//ID creator
function* createIds() {
    let index = 1;

    while (true) {
        yield index++;
    }
}

const gen = createIds();
console.log(gen.next().value)