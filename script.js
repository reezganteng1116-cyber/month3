 window.addEventListener("load", () => {
      setTimeout(() => {
        document.getElementById("loading").style.display = "none";
        document.getElementById("content").style.display = "block";
      }, 3000);
    });

    function showAlert() {
        alert("Halo nama saya Jaisyurrahman");
    }
    
    let input;

    while (!input) {
      input = prompt("Masukkan nama Anda:");
      if (!input) {
        alert("Nama tidak boleh kosong!");
      }
    }
    alert("Selamat datang, " + input + "!");
    
    while (true) {
        if (confirm("Apakah kamu sudah siap untuk melanjutkan?")) {
            alert("OK, Selamat datang di website saya!");
            break;
        } else {
            alert("Kamu tidak siap untuk melanjutkan!,silahkan kembali,jangan balik lagi!!!");
        }
    }

     // Data produk
    let produkA = "Pensil";
    let produkB = "Buku";
    let hargaA = 3000;
    let hargaB = 7000;
    let bayar = 52000;

    // Hitung total
    let total = hargaA + hargaB;
    let kembali = bayar - total;

    // Ambil elemen tabel
    let daftarProduk = document.getElementById("daftar-produk");
    let totalHarga = document.getElementById("total-harga");
    let totalBayar = document.getElementById("bayar");
    let totalKembali = document.getElementById("kembali");

    
    // Tambahkan baris produk ke tabel
    daftarProduk.innerHTML = `
      <tr>
        <td>${produkA}</td>
        <td>${hargaA}</td>
      </tr>
      <tr>
        <td>${produkB}</td>
        <td>${hargaB}</td>
      </tr>
    `;

    // Tampilkan total harga
    totalHarga.textContent = total;
    // Hitung total bayar
    totalBayar.textContent = bayar;
    totalKembali.textContent = kembali;
