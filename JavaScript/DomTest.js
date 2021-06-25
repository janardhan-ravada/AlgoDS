let div1 = document.createElement('div');
div1.innerText = 'click Me';
div1.addEventListener('click' , ()=>{alert('1')});

let div2 = `<div>Click me2</div>`;

let domParser = new DOMParser();
let div2Node = domParser.parseFromString(div2, 'text/html');

document.getElementById("testDiv").appendChild(div2Node.body.firstChild);
document.getElementById("testDiv").appendChild(div1);
