let employee2 ={
    uid : "21210010",
    nama : "Aldi Rahmat",
    alamat : {
        jalan : "Benda Baru XV",
        kelurahan : "Pamulang",
        kecamatan : "Benda Baru",
        kota : "Tangerang Selatan"
    },
    gaji : 5000000,
    showData : () =>{
        console.log(`UID        :${employee2.uid}`);
        console.log(`Nama       :${employee2.nama}`);
        for (const property in employee2.alamat) {
            console.log(`${property}    :${employee2.alamat[property]}`);
        }
        console.log(`Gaji       :${employee2.gaji}`);
    },
    changeGaji : (operasi, a) =>{
        operasi(a)
    },
    tambahGaji : (a) =>{
        employee2.gaji += a;
    },
    kurangGaji : (a) =>{
        employee2.gaji -= a;
    }
}
employee2.changeGaji(employee2.tambahGaji, 2000000);
// employee2.changeGaji(employee2.kurangGaji, 2000000);
employee2.showData();