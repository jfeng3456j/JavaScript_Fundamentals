const name = 'john';
const age = '30';
const job = 'SWE';
const city = 'stl';

function hello() {
    return 'hello';
}

html = `
<ul>
    <li>${name}</li>
    <li>${age}</li>
    <li>${job}</li>
    <li>${city}</li>
    <li>${2 + 2}</li>
    <li>${hello()}</li>
`;

document.getElementById('content').innerHTML = html;