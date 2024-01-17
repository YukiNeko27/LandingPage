let employee1 = {
    uid : "21210040",
    nama : "Tari Lestari",
    alamat : "Disana",
    showData : () =>{
        console.log(`====SHOW DATA====`);
        console.log(`UID        :${employee1.uid}`);
        console.log(`Nama       :${employee1.nama}`);
        console.log(`Alamat     :${employee1.alamat}`);
    },
    changeData : (uid="21210040", nama= "Tari Lestari", alamat="Disana") =>{
        employee1.uid = uid;
        employee1.nama = nama;
        employee1.alamat = alamat;
        console.log(`====CHANGE DATA====`);
        console.log(`UID        :${employee1.uid}`);
        console.log(`Nama       :${employee1.nama}`);
        console.log(`Alamat     :${employee1.alamat}`);
    }
}
employee1.showData()
employee1.changeData("21210039")
employee1.changeData("21210039", "Ayunda Kurniawan")
employee1.changeData("21210039", "Ayunda Kurniawan", "Disini")