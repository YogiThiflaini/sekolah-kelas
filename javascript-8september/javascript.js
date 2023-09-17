function hallo(){
    alert ("Hallo Javacript")
}
function waktu() {
    document.getElementById('waktu').innerHTML=Date();
}
function zodiak() {
    let tanggal=document.getElementById('tanggal').value;
    let bulan=document.getElementById('bulan').value;
    
    if (bulan==1){
        if (tanggal>0 && tanggal<20){
            zodiak="Aries";
        }
        if (tanggal>19 && tanggal<32){
            zodiak="Taurus";
        }
    }
    if (bulan ==2){
        if (tanggal>0 && tanggal>20){
            zodiak="Gemini";
        }
        if (tanggal>19 && tanggal<32){
            zodiak="Cancer";
        }
    }
    if (bulan==3){
        if (tanggal>0 && tanggal<20){
            zodiak="Leo";
        }
        if (tanggal>19 && tanggal<32) {
            zodiak="Virgo";
        }
    }
    if (bulan==4){
        if(tanggal>0 && tanggal<20){
            zodiak="Gemini";
        }
        if(tanggal>19 && tanggal<32){
            zodiak="Cancer";
        }
    }
    if(bulan==5){
        if(tanggal>0 && tanggal<20){
            zodiak="Leo";
        }
        if(tanggal>19 && tanggal<32){
            zodiak="Virgo";
        }
    }
    if(bulan==6){
        if(tanggal>0 && tanggal<20){
            zodiak="Scorpio";
        }
        if(tanggal>19 && tanggal<32){
            zodiak="Capricorn";
        }
    }
    if(bulan==7){
        if(tanggal>0 && tanggal<20){
            zodiak="Aries";
        }
        if(tanggal>19 && tanggal<32){
            zodiak="Taurus";
        }
    }
    if(bulan==8){
        if(tanggal>0 && tanggal<20){
            zodiak="Gemini";
        }
        if(tanggal>19 && tanggal<32){
            zodiak="Cancer";
        }
    }
    if(bulan==9){
        if(tanggal>0 && tanggal<20){
            zodiak="Leo";
        }
        if(tanggal>19 && tanggal<32){
            zodiak="Virgo";
        }
    }
    if(bulan==10){
        if(tanggal>0 && tanggal<20){
            zodiak="Libra";
        }
        if(tanggal>19 && tanggal<32){
            zodiak="Scorpio";
        }
    }
    if(bulan==11){
        if(tanggal>0 && tanggal<20){
            zodiak="Sagitarius";
        }
        if(tanggal>19 && tanggal<32){
            zodiak="Capricorn";
        }
    }
    if(bulan==12){
        if(tanggal>0 && taggal<20){
           zodiak="Aquarius";
        }
        if(tanggal>19 && tanggal<32){
            zodiak="Pisces";
        }
    }
    document.getElementById('zodiak').innerHTML=zodiak;
}
function kali() {
    let a= document.getElementById('bil1').value;
    let b= document.getElementById('bil2').value;
    let hasil = a * b;
    document.getElementById('hasil').innerHTML=hasil;
}
function tambah() {
    let a= parseInt( document.getElementById('bil1').value);
    let b= parseInt( document.getElementById('bil2').value);
    let hasil = a+b;
    document.getElementById('hasil').innerHTML=hasil;
}
function kurang() {
    let a= document.getElementById('bil1').value;
    let b= document.getElementById('bil2').value;
    let hasil = a-b;
    document.getElementById('hasil').innerHTML=hasil;
}
function bagi() {
    let a= document.getElementById('bil1').value;
    let b= document.getElementById('bil2').value;
    let hasil = a/b;
    document.getElementById('hasil').innerHTML=hasil;
}

let btn = document.getElementById('jam');
btn.onclick = function () {
    document.getElementById('waktu').innerHTML=Date();
};

let isi = document.getElementById('ketik');
let tampil = document.getElementById('waktu');
isi.onmouseover = function () {
    tampil.innerHTML = isi.value;
}

let hari = document.getElementById('hari');
hari.addEventListener("click",coba);

function coba() {
    alert ("coba coba");
}

let zodiac = document.getElementById('zodiac');
zodiac.addEventListener("click",zodiak);