
const section = document.querySelector('section')
let image = document.createElement('img')

fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        image.src = data.message;
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

const btn = document.querySelector('button')
btn.addEventListener('click', () => {
    section.append(image);
}, {once : false});