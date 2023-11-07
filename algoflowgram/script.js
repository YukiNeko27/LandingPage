alert("Komputer tidak menyala.")

let confirm1 = confirm("Apakah kabel dicolok ke stop kontak?")

if(confirm1 == true){
    alert("Pasang kabel power.")
}else{
    let confirm2 = alert("Apakah kipas (cooler) computer berputar?")
    if(confirm2 == true){
        alert("Kemungkinan monitor yang bermasalah, perbaiki monitor.")
    }else{
        alert("Komputer bermasalah, perbaiki komputer!")
    }
}