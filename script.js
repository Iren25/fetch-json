const btn = document.getElementById('button');
const pic = document.getElementById('picture');
let url ='https://dog.ceo/api/breeds/image/random';

function loadPicture() {
    btn.addEventListener('click', () =>{
        let response = fetch(url);
        response.then((res) => res.json()
        .then((data) => {
                console.log(data);

            const img = document.createElement('img');
            img.src = data.message;
            pic.innerHTML = '';
            pic.appendChild(img);
            })
        )

    })
}

loadPicture();
