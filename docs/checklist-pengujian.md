# Checklist Pengujian
## MPI "Ekspedisi Puasa Sunah – Petualangan di Pulau Hikmah"
**Versi:** 1.0.0  
**Tanggal:** _______________  
**Penguji:** _______________  
**Perangkat/Browser:** _______________

> **Petunjuk:** Isi kolom **Status** dengan ✅ (lulus), ❌ (gagal), atau ⚠️ (perlu perbaikan). Catat catatan di bawah tabel jika ada.

---

## 1. Checklist Fungsionalitas

| No | Item Pengujian | Kondisi Lulus | Status |
|----|---------------|---------------|--------|
| 1.1 | Halaman Cover tampil dengan benar | Judul, ilustrasi, dan tombol "Mulai" terlihat jelas | [ ] |
| 1.2 | Form identitas murid berfungsi | Input nama & kelas tersimpan di localStorage | [ ] |
| 1.3 | Halaman cerita pembuka tampil | Animasi/narasi Kaka berjalan tanpa error | [ ] |
| 1.4 | Peta Pulau Hikmah tampil lengkap | 5 lokasi misi terlihat beserta labelnya | [ ] |
| 1.5 | Navigasi ke Misi 1 (Pantai Pengetahuan) | Layar misi 1 terbuka, konten tampil | [ ] |
| 1.6 | Navigasi ke Misi 2 (Hutan Kalender) | Layar misi 2 terbuka, konten tampil | [ ] |
| 1.7 | Navigasi ke Misi 3 (Gua Hadis) | Layar misi 3 terbuka, konten tampil | [ ] |
| 1.8 | Navigasi ke Misi 4 (Desa Inspirasi) | Layar misi 4 terbuka, konten tampil | [ ] |
| 1.9 | Navigasi ke Misi 5 (Puncak Kebiasaan) | Layar misi 5 terbuka, konten tampil | [ ] |
| 1.10 | Aktivitas pilihan ganda berfungsi | Pilihan dapat diklik, jawaban tervalidasi | [ ] |
| 1.11 | Aktivitas benar-salah berfungsi | Tombol benar/salah merespons dengan benar | [ ] |
| 1.12 | Aktivitas mencocokkan berfungsi | Drag-drop atau klik-pasang bekerja | [ ] |
| 1.13 | Aktivitas mengurutkan berfungsi | Urutan dapat diubah, validasi benar | [ ] |
| 1.14 | Aktivitas mengelompokkan berfungsi | Item dapat dikelompokkan, validasi benar | [ ] |
| 1.15 | Kuis akhir Misi 5 berfungsi | Semua soal tampil, skor terhitung | [ ] |
| 1.16 | Umpan balik jawaban benar tampil | Pesan sukses muncul setelah jawaban benar | [ ] |
| 1.17 | Umpan balik jawaban salah tampil | Pesan perbaikan muncul setelah jawaban salah | [ ] |
| 1.18 | Pemberian lencana berfungsi | Lencana muncul setelah misi selesai | [ ] |
| 1.19 | Halaman koleksi lencana tampil | Semua lencana yang diperoleh ditampilkan | [ ] |
| 1.20 | Halaman hasil ekspedisi tampil | Skor total, rangkuman, dan lencana tampil | [ ] |
| 1.21 | Halaman refleksi & penutup tampil | Konten refleksi dan tombol selesai berfungsi | [ ] |
| 1.22 | Tombol "Ulangi Misi" berfungsi | Misi dapat diulang, skor direset per misi | [ ] |
| 1.23 | Tombol "Kembali ke Peta" berfungsi | Navigasi kembali ke halaman peta berfungsi | [ ] |

**Catatan Fungsionalitas:**  
_____________________________________________

---

## 2. Checklist Navigasi

| No | Item Pengujian | Kondisi Lulus | Status |
|----|---------------|---------------|--------|
| 2.1 | Tombol "Mulai Petualangan" di Cover | Mengarah ke halaman identitas murid | [ ] |
| 2.2 | Tombol "Lanjut" di form identitas | Menyimpan data dan mengarah ke cerita pembuka | [ ] |
| 2.3 | Tombol navigasi di cerita pembuka | Mengarah ke halaman peta | [ ] |
| 2.4 | Klik lokasi Misi 1 di peta | Membuka halaman Misi 1 | [ ] |
| 2.5 | Klik lokasi Misi 2 di peta | Membuka halaman Misi 2 | [ ] |
| 2.6 | Klik lokasi Misi 3 di peta | Membuka halaman Misi 3 | [ ] |
| 2.7 | Klik lokasi Misi 4 di peta | Membuka halaman Misi 4 | [ ] |
| 2.8 | Klik lokasi Misi 5 di peta | Membuka halaman Misi 5 | [ ] |
| 2.9 | Tombol "Mulai Misi" di setiap misi | Memulai aktivitas misi | [ ] |
| 2.10 | Tombol "Lanjut" antar layar dalam misi | Berpindah ke layar berikutnya dengan benar | [ ] |
| 2.11 | Tombol "Kembali" dalam misi | Kembali ke layar sebelumnya | [ ] |
| 2.12 | Tombol ikon Home/Peta | Kembali ke halaman peta dari mana saja | [ ] |
| 2.13 | Breadcrumb / indikator posisi | Menunjukkan posisi halaman saat ini | [ ] |
| 2.14 | Tombol "Lihat Lencana" | Membuka halaman koleksi lencana | [ ] |
| 2.15 | Tombol "Selesai" di halaman penutup | Kembali ke halaman Cover atau Peta | [ ] |
| 2.16 | Tidak ada tautan mati (broken link) | Semua navigasi berhasil tanpa error 404 | [ ] |
| 2.17 | Tidak ada loop navigasi tak terbatas | Tidak ada halaman yang saling memanggil | [ ] |

**Catatan Navigasi:**  
_____________________________________________

---

## 3. Checklist Konten

| No | Item Pengujian | Kondisi Lulus | Status |
|----|---------------|---------------|--------|
| 3.1 | Materi Misi 1 — Pengertian puasa | Konten lengkap, teks terbaca, gambar tampil | [ ] |
| 3.2 | Materi Misi 1 — Perbedaan wajib & sunah | Tabel/visual perbedaan tampil dengan benar | [ ] |
| 3.3 | Materi Misi 2 — 8 jenis puasa sunah | Semua 8 jenis tercantum dengan info lengkap | [ ] |
| 3.4 | Materi Misi 3 — Ketentuan & keutamaan | Konten ketentuan dan dalil tampil (placeholder jika belum) | [ ] |
| 3.5 | Materi Misi 4 — Nilai dan sikap bijak | Konten nilai terpuji tampil lengkap | [ ] |
| 3.6 | Semua soal pilihan ganda memiliki 4 opsi | Setiap soal PG memiliki opsi A–D | [ ] |
| 3.7 | Kunci jawaban semua soal benar | Jawaban yang ditandai benar sesuai materi | [ ] |
| 3.8 | Soal tidak mengandung kesalahan ejaan | Tidak ada typo atau kata tidak baku | [ ] |
| 3.9 | Instruksi aktivitas jelas dan mudah dipahami | Murid SD kelas V–VI dapat memahami instruksi | [ ] |
| 3.10 | Narasi dialog Kaka natural dan sesuai usia | Bahasa ramah, tidak terlalu formal | [ ] |
| 3.11 | Tidak ada konten yang belum diisi | Tidak ada placeholder "[TEKS]" yang tertinggal | [ ] |
| 3.12 | Lencana memiliki nama dan deskripsi | Setiap lencana ada judul dan keterangan | [ ] |
| 3.13 | Halaman rangkuman tiap misi lengkap | Poin-poin penting materi tercantum | [ ] |
| 3.14 | Refleksi di Misi 5 bermakna | Pertanyaan refleksi relevan dan sesuai usia | [ ] |

**Catatan Konten:**  
_____________________________________________

---

## 4. Checklist Audio

| No | Item Pengujian | Kondisi Lulus | Status |
|----|---------------|---------------|--------|
| 4.1 | Musik latar halaman Cover berjalan | Musik otomatis atau setelah interaksi pertama | [ ] |
| 4.2 | Musik latar Misi 1 berjalan | Audio sesuai suasana Pantai Pengetahuan | [ ] |
| 4.3 | Musik latar Misi 2 berjalan | Audio sesuai suasana Hutan Kalender | [ ] |
| 4.4 | Musik latar Misi 3 berjalan | Audio sesuai suasana Gua Hadis | [ ] |
| 4.5 | Musik latar Misi 4 berjalan | Audio sesuai suasana Desa Inspirasi | [ ] |
| 4.6 | Musik latar Misi 5 berjalan | Audio sesuai suasana Puncak Kebiasaan | [ ] |
| 4.7 | Narasi pembuka oleh Kaka berjalan | Audio narasi intro terdengar jelas | [ ] |
| 4.8 | Narasi pengantar tiap misi berjalan | Audio narasi misi terdengar dan sinkron | [ ] |
| 4.9 | Narasi instruksi aktivitas berjalan | Audio terdengar sebelum/saat aktivitas | [ ] |
| 4.10 | SFX klik tombol berfungsi | Suara klik terdengar saat tombol ditekan | [ ] |
| 4.11 | SFX jawaban benar berfungsi | Suara positif terdengar setelah jawaban benar | [ ] |
| 4.12 | SFX jawaban salah berfungsi | Suara negatif terdengar setelah jawaban salah | [ ] |
| 4.13 | SFX mendapat lencana berfungsi | Suara perayaan terdengar saat lencana diperoleh | [ ] |
| 4.14 | SFX transisi layar berfungsi | Suara transisi terdengar saat berpindah halaman | [ ] |
| 4.15 | Tombol Mute berfungsi | Semua audio berhenti saat tombol mute ditekan | [ ] |
| 4.16 | Tombol Unmute berfungsi | Audio kembali berjalan setelah unmute | [ ] |
| 4.17 | Status mute tersimpan | Status mute bertahan saat berpindah halaman | [ ] |
| 4.18 | Tidak ada audio yang overlap/bentrok | Hanya satu musik latar berjalan per waktu | [ ] |
| 4.19 | Volume audio wajar | Tidak terlalu keras atau terlalu pelan | [ ] |
| 4.20 | Audio tidak memblokir penggunaan aplikasi | Jika audio gagal load, aplikasi tetap berjalan | [ ] |

**Catatan Audio:**  
_____________________________________________

---

## 5. Checklist Responsivitas

| No | Item Pengujian | Kondisi Lulus | Status |
|----|---------------|---------------|--------|
| **Laptop – 1920×1080** | | | |
| 5.1 | Layout tidak pecah di resolusi 1920×1080 | Semua elemen tampil rapi dan proporsional | [ ] |
| 5.2 | Teks terbaca di resolusi 1920×1080 | Ukuran font tidak terlalu kecil | [ ] |
| 5.3 | Gambar tidak pixelated di 1920×1080 | Gambar tampil tajam | [ ] |
| **Laptop – 1366×768** | | | |
| 5.4 | Layout tidak pecah di resolusi 1366×768 | Semua elemen tampil rapi dan proporsional | [ ] |
| 5.5 | Teks terbaca di resolusi 1366×768 | Ukuran font tidak terlalu kecil | [ ] |
| 5.6 | Tidak ada scroll horizontal di 1366×768 | Halaman tidak memerlukan scroll ke kanan | [ ] |
| **Tablet – 1024×768** | | | |
| 5.7 | Layout responsif di 1024×768 | Konten menyesuaikan lebar layar tablet | [ ] |
| 5.8 | Tombol cukup besar untuk disentuh | Minimal 44×44 px per tombol | [ ] |
| 5.9 | Drag-drop berfungsi di layar sentuh tablet | Aktivitas interaktif dapat dilakukan dengan sentuhan | [ ] |
| **HP – 414×896** | | | |
| 5.10 | Layout responsif di 414×896 | Konten menyesuaikan lebar layar HP besar | [ ] |
| 5.11 | Teks tidak terpotong di 414×896 | Semua teks tampil penuh | [ ] |
| 5.12 | Tombol dapat ditekan dengan ibu jari | Tombol tidak terlalu kecil di HP | [ ] |
| **HP – 375×667** | | | |
| 5.13 | Layout responsif di 375×667 | Konten menyesuaikan lebar layar HP kecil | [ ] |
| 5.14 | Teks tidak terpotong di 375×667 | Semua teks tampil penuh | [ ] |
| 5.15 | Tidak ada overflow konten di 375×667 | Tidak ada elemen yang keluar dari layar | [ ] |
| **Umum** | | | |
| 5.16 | Gambar menggunakan satuan relatif | Gambar responsif dengan max-width: 100% | [ ] |
| 5.17 | Font size menggunakan rem/em atau vw | Teks menyesuaikan ukuran layar | [ ] |

**Catatan Responsivitas:**  
_____________________________________________

---

## 6. Checklist Offline (Tidak Butuh Internet)

| No | Item Pengujian | Kondisi Lulus | Status |
|----|---------------|---------------|--------|
| 6.1 | Aplikasi berjalan tanpa koneksi internet | Semua fitur berfungsi dalam mode offline | [ ] |
| 6.2 | Tidak ada resource dari CDN eksternal | Tidak ada link ke cdn.jsdelivr.net, fonts.google.com, dll. yang gagal | [ ] |
| 6.3 | Font tersimpan lokal | File font ada di dalam folder proyek | [ ] |
| 6.4 | Library JS tersimpan lokal | jQuery/library lain ada di folder js/ lokal | [ ] |
| 6.5 | Semua gambar tersimpan lokal | Tidak ada gambar dengan URL eksternal | [ ] |
| 6.6 | Semua audio tersimpan lokal | File audio ada di folder assets/audio/ | [ ] |
| 6.7 | Tidak ada API call ke server | Tidak ada fetch/XHR ke server eksternal | [ ] |
| 6.8 | Error handling jika aset gagal dimuat | Aplikasi tidak crash jika satu file tidak ditemukan | [ ] |

**Catatan Offline:**  
_____________________________________________

---

## 7. Checklist Penyimpanan Lokal (localStorage)

| No | Item Pengujian | Kondisi Lulus | Status |
|----|---------------|---------------|--------|
| 7.1 | Nama dan kelas murid tersimpan | Data identitas ada di localStorage setelah diisi | [ ] |
| 7.2 | Progres misi tersimpan | Status selesai/belum tiap misi tersimpan | [ ] |
| 7.3 | Skor per misi tersimpan | Nilai terakhir tiap misi tersimpan di localStorage | [ ] |
| 7.4 | Lencana yang diperoleh tersimpan | Daftar lencana tersimpan dan tampil di koleksi | [ ] |
| 7.5 | Status mute audio tersimpan | Preferensi audio bertahan setelah refresh | [ ] |
| 7.6 | Data tersimpan setelah refresh halaman | Reload halaman tidak menghapus progres | [ ] |
| 7.7 | Data tersimpan setelah tutup browser | Buka kembali browser masih ada progres | [ ] |
| 7.8 | Tombol "Reset Progres" berfungsi | Jika tersedia, menghapus semua data localStorage | [ ] |
| 7.9 | Tidak ada data corrupt di localStorage | JSON yang disimpan dapat di-parse dengan benar | [ ] |
| 7.10 | Aplikasi tidak crash jika localStorage kosong | Kondisi pertama kali buka ditangani dengan baik | [ ] |

**Catatan Penyimpanan Lokal:**  
_____________________________________________

---

## 8. Checklist Aksesibilitas Ringan

| No | Item Pengujian | Kondisi Lulus | Status |
|----|---------------|---------------|--------|
| 8.1 | Ukuran font teks isi minimal 16px | Teks materi dan soal mudah dibaca | [ ] |
| 8.2 | Ukuran font judul minimal 20px | Heading/judul terlihat menonjol | [ ] |
| 8.3 | Kontras teks & background mencukupi | Rasio kontras minimal 4.5:1 untuk teks normal | [ ] |
| 8.4 | Tombol memiliki label teks yang jelas | Tombol ikon memiliki title/aria-label | [ ] |
| 8.5 | Gambar dekoratif memiliki alt="" | Gambar non-konten tidak dibaca screen reader | [ ] |
| 8.6 | Gambar konten memiliki atribut alt | Deskripsi singkat pada gambar informatif | [ ] |
| 8.7 | Fokus keyboard terlihat | Outline fokus terlihat saat navigasi keyboard | [ ] |
| 8.8 | Warna tidak menjadi satu-satunya indikator | Status benar/salah tidak hanya dari warna | [ ] |
| 8.9 | Teks tidak terlalu padat | Spasi antar baris (line-height) minimal 1.4 | [ ] |
| 8.10 | Instruksi aktivitas tidak bergantung pada warna | "Klik kotak merah" → hindari, gunakan label teks | [ ] |

**Catatan Aksesibilitas:**  
_____________________________________________

---

## 9. Checklist Pengujian Lintas Browser

| No | Item Pengujian | Kondisi Lulus | Status |
|----|---------------|---------------|--------|
| **Google Chrome** | | | |
| 9.1 | Aplikasi berjalan normal di Chrome | Semua fitur berfungsi | [ ] |
| 9.2 | Audio berjalan di Chrome | Tidak ada error autoplay policy | [ ] |
| 9.3 | localStorage berfungsi di Chrome | Data tersimpan dan terbaca | [ ] |
| 9.4 | Drag-drop berfungsi di Chrome | Aktivitas interaktif berjalan | [ ] |
| 9.5 | Tampilan/layout konsisten di Chrome | Tidak ada elemen yang salah posisi | [ ] |
| **Mozilla Firefox** | | | |
| 9.6 | Aplikasi berjalan normal di Firefox | Semua fitur berfungsi | [ ] |
| 9.7 | Audio berjalan di Firefox | Tidak ada error format audio | [ ] |
| 9.8 | localStorage berfungsi di Firefox | Data tersimpan dan terbaca | [ ] |
| 9.9 | Drag-drop berfungsi di Firefox | Aktivitas interaktif berjalan | [ ] |
| 9.10 | Tampilan/layout konsisten di Firefox | Tidak ada elemen yang salah posisi | [ ] |
| **Microsoft Edge** | | | |
| 9.11 | Aplikasi berjalan normal di Edge | Semua fitur berfungsi | [ ] |
| 9.12 | Audio berjalan di Edge | Tidak ada error format audio | [ ] |
| 9.13 | localStorage berfungsi di Edge | Data tersimpan dan terbaca | [ ] |
| 9.14 | Drag-drop berfungsi di Edge | Aktivitas interaktif berjalan | [ ] |
| 9.15 | Tampilan/layout konsisten di Edge | Tidak ada elemen yang salah posisi | [ ] |
| **Umum** | | | |
| 9.16 | CSS tidak ada vendor prefix yang hilang | Gunakan autoprefixer atau manual prefix | [ ] |
| 9.17 | JavaScript tidak ada error konsol | Console browser bersih dari error/warning | [ ] |

**Catatan Lintas Browser:**  
_____________________________________________

---

## 10. Checklist Keamanan Konten

| No | Item Pengujian | Kondisi Lulus | Status |
|----|---------------|---------------|--------|
| 10.1 | Tidak ada gambar yang tidak sesuai usia | Semua ilustrasi ramah anak SD | [ ] |
| 10.2 | Tidak ada teks yang tidak sesuai usia | Bahasa sopan, tidak ada kekerasan/SARA | [ ] |
| 10.3 | Tidak ada link eksternal yang terbuka | Tidak ada tombol yang mengarah ke website luar | [ ] |
| 10.4 | Tidak ada konten iklan | Tidak ada banner atau konten komersial | [ ] |
| 10.5 | Tidak ada form yang mengirim data ke server | Semua data hanya disimpan di localStorage | [ ] |
| 10.6 | Konten agama sesuai dan akurat | Materi PAI dikonfirmasi dengan buku sumber | [ ] |
| 10.7 | Tidak ada dalil/hadis yang dikarang | Semua dalil sudah diverifikasi dari sumber sahih | [ ] |
| 10.8 | Hak cipta aset gambar bersih | Semua aset milik sendiri atau berlisensi bebas pakai | [ ] |
| 10.9 | Hak cipta aset audio bersih | Semua audio milik sendiri atau berlisensi bebas pakai | [ ] |
| 10.10 | Tidak ada data murid yang bocor | Nama/kelas hanya tersimpan di device sendiri | [ ] |

**Catatan Keamanan Konten:**  
_____________________________________________

---

## Ringkasan Hasil Pengujian

| Kategori | Total Item | ✅ Lulus | ❌ Gagal | ⚠️ Perlu Perbaikan |
|----------|-----------|---------|---------|-------------------|
| 1. Fungsionalitas | 23 | | | |
| 2. Navigasi | 17 | | | |
| 3. Konten | 14 | | | |
| 4. Audio | 20 | | | |
| 5. Responsivitas | 17 | | | |
| 6. Offline | 8 | | | |
| 7. Penyimpanan Lokal | 10 | | | |
| 8. Aksesibilitas | 10 | | | |
| 9. Lintas Browser | 17 | | | |
| 10. Keamanan Konten | 10 | | | |
| **TOTAL** | **146** | | | |

---

## Catatan Umum Pengujian

_____________________________________________  
_____________________________________________  
_____________________________________________  

**Kesimpulan:**  
- [ ] **LULUS** — Siap dipublikasikan  
- [ ] **KONDISIONAL** — Lulus dengan catatan perbaikan minor  
- [ ] **BELUM LULUS** — Perlu perbaikan sebelum publikasi  

**Tanda Tangan Penguji:** _______________  
**Tanggal Selesai Pengujian:** _______________
