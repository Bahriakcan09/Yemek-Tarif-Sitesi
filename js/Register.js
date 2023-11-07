function kodeuret() {
    const code = document.getElementById('code');
    const kodUzunlugu = 6;
    const karakterler = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let kod = '';
    for (let i = 0; i < kodUzunlugu; i++) {
        const rastgeleIndex = Math.floor(Math.random() * karakterler.length);
        kod += karakterler.charAt(rastgeleIndex);
    }
    code.value = kod;
}