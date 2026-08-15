document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const nomorWA = "6289505546974";

            const nama = document.getElementById('nama').value;
            const password = document.getElementById('password').value;
            const jk = document.querySelector('input[name="jk"]:checked')?.value || '-';
            const kota = document.getElementById('kota').value;
            const komentar = document.getElementById('komentar').value || '-';

            const hobiChecked = document.querySelectorAll('input[name="hobi"]:checked');
            let hobiList = [];
            hobiChecked.forEach(item => hobiList.push(item.value));
            const hobi = hobiList.length > 0 ? hobiList.join(', ') : '-';

            const pesan = `*Form Data Login*%0A%0A` +
                          `*Nama:* ${encodeURIComponent(nama)}%0A` +
                          `*Password:* ${encodeURIComponent(password)}%0A` +
                          `*Jenis Kelamin:* ${encodeURIComponent(jk)}%0A` +
                          `*Hobi:* ${encodeURIComponent(hobi)}%0A` +
                          `*Asal Kota:* ${encodeURIComponent(kota)}%0A` +
                          `*Komentar:* ${encodeURIComponent(komentar)}`;

            const urlWA = `https://wa.me/6289505546974/${nomorWA}?text=${pesan}`;
            window.open(urlWA, '_blank');
});