function foodEdit() {
    var result = confirm("Yemek tarifini düzenlemek istediğine emin misin ?");
    if (result) {
        alert("yemek düzenlendi");
    } else {
        alert("yemek düzenlenmedi");
    }
}

function foodDelete() {
    var result = confirm("Yemek tarifini silmek istediğine emin misin ?");
    if (result) {
        alert("yemek silindi");
    } else {
        alert("yemek silinmedi");
    }
}