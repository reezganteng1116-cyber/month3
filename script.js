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

    function cekUmur() {

        const umur = document.getElementById("umur").value;
        const angka = Number(umur);

        let jawaban;
        if (isNaN(angka)) {
            jawaban = "Input tidak valid. Silakan masukkan angka.";
        } else if (angka <= 18) {
            jawaban = "Anda masih Bocil!!!";
        } else if (angka > 18 && angka <= 30) {
            jawaban = "Anda sudah remaja!";
        } else if (angka > 30) {
            jawaban = "Anda sudah dewasa!";
        } else {
            jawaban = "Input tidak valid.";
        }

        document.getElementById("hasil-umur").textContent = jawaban;
    }

    function jalankanLoop() {
  const loopInput = document.getElementById("LOOP").value;
  const loopHasil = Number(loopInput);

  // Validasi
  if (isNaN(loopHasil) || loopHasil <= 0) {
    document.getElementById("hasil-loop").textContent =
      "⚠ Input tidak valid. Silakan masukkan angka positif.";
    return;
  }

  let output = "";

  for (let i = 1; i <= loopHasil; i++) {
    output += i + " ";
  }

  document.getElementById("hasil-loop").textContent = output.trim();
}

function cekPilihan() {
  const pilihanInput = document.getElementById("pilihan").value;
  const pilihanUser = Number(pilihanInput);

  switch (pilihanUser) {
    case 1:
      document.getElementById("hasil-pilihan").textContent = "Hari pertama adalah hari Senin.";
      break;
    case 2:
      document.getElementById("hasil-pilihan").textContent = "Hari kedua adalah hari Selasa.";
      break;
    case 3:
      document.getElementById("hasil-pilihan").textContent = "Hari ketiga adalah hari Rabu.";
      break;
    case 4:
      document.getElementById("hasil-pilihan").textContent = "Hari keempat adalah hari Kamis.";
      break;
    case 5:
      document.getElementById("hasil-pilihan").textContent = "Hari kelima adalah hari Jum'at.";
      break;
    case 6:
      document.getElementById("hasil-pilihan").textContent = "Hari keenam adalah hari Sabtu.";
      break;
    case 7:
      document.getElementById("hasil-pilihan").textContent = "Hari ketujuh adalah hari Minggu.";
      break;
    default:
      document.getElementById("hasil-pilihan").textContent = "Pilihan tidak valid.";
  }
}

function cekNilai() {
  const nilai = document.getElementById("nilai").value;
  const nilaiUser = Number(nilai);

  let kesimpulan;
  if (nilaiUser <= 100 && nilaiUser >= 80) {
    kesimpulan = "Selamat! Ternyata anda cukup pintar dan mendapatkan nilai A!"
  } else if (nilaiUser < 80 && nilaiUser >= 60) {
    kesimpulan = "Bagus! Anda lumayan pintar untuk mendapatkan nilai B!"
  } else if (nilaiUser < 60 && nilaiUser >= 30) {
    kesimpulan = "Sayang sekali, Ngapin aja lu dari kemarin kagak belajar?"
  } else if (nilaiUser < 30 && nilaiUser >= 0) {
    kesimpulan = "Fix sih... lu emang goblok!"
  } else {
    kesimpulan = "Input tidak valid. Silakan masukkan nilai antara 0-100.";
  }

  document.getElementById("hasil-nilai").textContent = kesimpulan;
}
