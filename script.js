function pilihanCom() {
    const comp = Math.random();
    if (comp < 0.34) return 'gajah';
    if (comp >= 0.34 && comp < 0.67) return 'orang';
    return 'semut';
}

function getHasil(comp, p) {
    if (p == comp) return 'SERI!';
    if (p == 'gajah') return (comp == 'orang') ? 'MENANG!' : 'KALAH!';
    if (p == 'orang') return (comp == 'gajah') ? 'KALAH!' : 'MENANG!';
    if (p == 'semut') return (comp == 'orang') ? 'KALAH' : 'MENANG!';
}


function putar() {
    const imgComputer = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'orang', 'semut'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(() => {
        if(new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
        if(i === gambar.length) i = 0;

    }, 100);
}


const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function (i) {
    i.addEventListener('click', function() {
        const pilihanComputer = pilihanCom();
        const pilihanP = i.className;
        const hasil = getHasil(pilihanComputer, pilihanP);

        putar();

        setTimeout(() => {
        const imgComputer = document.querySelector('.img-komputer');
        imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

        const info = document.querySelector('.info');
        info.innerHTML = hasil;  
        }, 1000);
    });
});





