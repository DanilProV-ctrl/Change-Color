//

function ff() {
    localStorage.setItem('data', 'rgb(' + Math.ceil(Math.random() * 200) + ', ' + Math.ceil(Math.random() * 200) + ', ' + Math.ceil(Math.random() * 200) + ')')
    document.getElementById('i').style.backgroundColor = localStorage.getItem('data');
    let au = new Audio();
    au.src = 'A.mp3';
    au.autoplay = true;
}

document.getElementById('i').style.backgroundColor = localStorage.getItem('data');