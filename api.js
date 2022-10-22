
const section = document.querySelector('section')
let image = document.createElement('img')
image.setAttribute('style', 'width: 350px; height: auto;')

const btn = document.querySelector('button')
btn.addEventListener('click', () => {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            image.src = data.message;
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
    section.append(image);
});