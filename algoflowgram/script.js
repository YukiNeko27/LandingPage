alert("Komputer tidak menyala.")

let confirm1 = confirm("Apakah kabel dicolok ke stop kontak?")

if(confirm1 == true){
    alert("Pasang kabel power.");
    alert("Algorithma berakhir.");
}else{
    let confirm2 = confirm("Apakah kipas (cooler) computer berputar?");
    if(confirm2 == true){
        alert("Kemungkinan monitor yang bermasalah, perbaiki monitor.");
        alert("Algoritma berakhir.");
    }else{
        alert("Komputer yang bermasalah, perbaiki komputer!");
        alert("Algoritma berakhir.");
    }
}