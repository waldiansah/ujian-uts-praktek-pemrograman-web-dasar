let produk = [
  { id: 1, judul: 'Laskar Pelangi', harga: 80000 },
  { id: 2, judul: 'Berani berubah untuk hidup yang lebih baik ', harga: 120000 },
  { id: 3, judul: 'Hidup setelah ibu pergi', harga: 95000 },
  { id: 4, judul: 'Bu,tidak ada teman menangis malam ini', harga: 70000 },
];

function tampilkanProduk() {
  const container = document.getElementById('produk-container');
  container.innerHTML = '';

  produk.forEach((item, index) => {
    container.innerHTML += `
      <div class="card">
        <h3>${item.judul}</h3>
        <p>Rp ${item.harga}</p>
        <button onclick="hapusProduk(${index})">Hapus</button>
      </div>
    `;
  });
}

function tambahProduk() {
  const judul = document.getElementById('judulBaru').value;

  if (judul === '') return alert('Isi judul!');

  produk.push({
    id: produk.length + 1,
    judul,
    harga: 50000,
  });

  tampilkanProduk();
}

function hapusProduk(index) {
  produk.splice(index, 1);
  tampilkanProduk();
}

document.getElementById('formPembelian').addEventListener('submit', function (e) {
  e.preventDefault();

  let valid = true;

  const nama = document.getElementById('nama');
  const email = document.getElementById('email');
  const jumlah = document.getElementById('jumlah');

  document.querySelectorAll('.error').forEach((e) => (e.innerText = ''));

  if (nama.value === '') {
    nama.nextElementSibling.innerText = 'Nama wajib diisi';
    valid = false;
  }

  if (!email.value.includes('@')) {
    email.nextElementSibling.innerText = 'Email tidak valid';
    valid = false;
  }

  if (jumlah.value <= 0) {
    jumlah.nextElementSibling.innerText = 'Jumlah harus positif';
    valid = false;
  }

  if (valid) {
    alert('✅ Pembelian berhasil!');
  }
});

tampilkanProduk();
