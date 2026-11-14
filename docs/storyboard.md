# 📋 Storyboard Media Pembelajaran Interaktif (MPI)
# Ekspedisi Puasa Sunah – Petualangan di Pulau Hikmah
### Sasaran: Kelas V–VI SD (Fase C) | Mata Pelajaran: Pendidikan Agama Islam & Budi Pekerti

---

## 1. Ringkasan Cerita dan Alur Naratif

### 1.1 Sinopsis Petualangan
Di Samudra Pengetahuan, terdapat sebuah pulau misterius dan indah bernama **Pulau Hikmah**. Konon, pulau ini menyimpan lima lencana pusaka pengetahuan yang dapat membuka rahasia keberkahan ibadah puasa sunah.

Murid berperan sebagai seorang **Penjelajah Cilik**. Setibanya di dermaga pulau, penjelajah disambut oleh **Kaka**, seorang anak laki-laki ramah dan ceria berbusana penjelajah sopan lengkap dengan ransel dan peta kuno Pulau Hikmah. Kaka akan menjadi sahabat sekaligus pemandu penjelajah menelusuri 5 zona di Pulau Hikmah:
1. **Pantai Pengetahuan** — Memahami hakikat puasa dan puasa sunah.
2. **Hutan Kalender** — Mengenal 8 jenis dan waktu pelaksanaan puasa sunah.
3. **Gua Hadis** — Menyelami dalil, ketentuan, dan keutamaan puasa sunah.
4. **Desa Inspirasi** — Meneladani hikmah, akhlak mulia, dan toleransi dalam beribadah.
5. **Puncak Kebiasaan** — Menguji pemahaman menyeluruh dan meneguhkan niat beribadah.

Setelah menyelesaikan setiap zona, penjelajah akan memperoleh **Lencana Hikmah**. Setelah kelima lencana terkumpul, penjelajah akan dinobatkan sebagai **Penjelajah Sejati Pulau Hikmah**.

---

## 2. Struktur Alur Aplikasi (Flowchart Naratif)

```
[Cover Pembuka]
       │
       ▼
[Identitas Murid (Input Nama)]
       │
       ▼
[Cerita Pembuka & Sambutan Kaka]
       │
       ▼
[Peta Pulau Hikmah (Hub Navigasi Misi)]
  ├──► [Misi 1: Pantai Pengetahuan] ──► [Lencana 1] ──┐
  ├──► [Misi 2: Hutan Kalender]     ──► [Lencana 2] ──┤
  ├──► [Misi 3: Gua Hadis]          ──► [Lencana 3] ──┼──► (Semua Lencana Terbuka)
  ├──► [Misi 4: Desa Inspirasi]     ──► [Lencana 4] ──┤          │
  └──► [Misi 5: Puncak Kebiasaan]   ──► [Lencana 5] ──┘          │
                                                                 ▼
                                                    [Hasil Ekspedisi & Rapor]
                                                                 │
                                                                 ▼
                                                    [Koleksi 5 Lencana]
                                                                 │
                                                                 ▼
                                                    [Refleksi Diri & Penutup]
```

---

## 3. Detail Setiap Layar (Scene by Scene)

### Layar 01: Cover Pembuka
- **ID Layar:** `SCR-001`
- **Nama Layar:** Cover Utama & Splash
- **Latar Belakang:** Pemandangan 3D Pulau Hikmah dari udara, laut toska berkilau, langit biru cerah dengan burung camar.
- **Elemen Visual:**
  - Judul besar: "EKSPEDISI PUASA SUNAH: Petualangan di Pulau Hikmah" (tipografi 3D stylized playful).
  - Karakter Kaka (pose melambai ramah di sudut kanan bawah).
  - Tombol aksi: "Mulai Petualangan" (warna oranye emas berkilau).
  - Tombol kontrol: Musik (on/off), Panduan Aplikasi (ikon tanda tanya).
- **Audio:**
  - BGM: `bgm-tema-utama.mp3` (petualangan ceria, orkestra akustik).
  - SFX klik: `sfx-klik.mp3`.
- **Interaksi:**
  - Klik tombol "Mulai Petualangan" → transisi fade-in ke `SCR-002`.
  - Klik ikon Musik → toggle mute/unmute.

---

### Layar 02: Halaman Identitas Murid
- **ID Layar:** `SCR-002`
- **Nama Layar:** Pendaftaran Penjelajah Cilik
- **Latar Belakang:** Meja kayu penjelajah di pos dermaga, ada kompas, buku catatan, dan teropong.
- **Elemen Visual:**
  - Karakter Kaka (pose berpikir/bertanya ramah).
  - Kotak dialog Kaka: *"Halo Sahabat! Sebelum kita berangkat menjelajah, beri tahu namamu ya!"*
  - Input teks: `Masukkan nama panggilanmu...` (maksimal 20 karakter).
  - Tombol: "Buka Peta & Mulai!" (nonaktif jika input kosong).
- **Audio:**
  - Narasi Kaka: *"Assalamu'alaikum! Senang sekali bisa bertemu denganmu. Siapa nama penjelajah hebat ini?"*
  - SFX input: nada lembut saat mengetik.
- **Interaksi:**
  - Murid mengetik nama, tersimpan ke `localStorage.userName`.
  - Tombol aktif → klik menuju `SCR-003`.

---

### Layar 03: Cerita Pembuka Bersama Kaka
- **ID Layar:** `SCR-003`
- **Nama Layar:** Pengantar Petualangan Pulau Hikmah
- **Latar Belakang:** Pantai dermaga dengan perahu kayu kecil dan latar gunung di kejauhan.
- **Elemen Visual:**
  - Ilustrasi komik/dialog interaktif (3 slide cerita pendek).
  - Kaka memegang gulungan peta tua.
  - Balon dialog naratif:
    - *Slide 1:* *"Selamat datang di Pulau Hikmah, [Nama]! Aku Kaka, pemandumu."*
    - *Slide 2:* *"Pulau ini menyimpan 5 Lencana Hikmah Puasa Sunah. Setiap misi akan membantumu memahami amalan puasa sunah yang dicintai Rasulullah saw."*
    - *Slide 3:* *"Ayo kita buka petanya dan selesaikan misi satu per satu!"*
  - Tombol navigasi slide ("Lanjut", "Lewati Cerita").
- **Audio:**
  - Narasi pengantar Kaka lengkap per slide.
  - SFX buka peta: `sfx-buka-peta.mp3`.
- **Interaksi:**
  - Klik "Lanjut" mengganti slide; pada slide terakhir menuju `SCR-004` (Peta).

---

### Layar 04: Peta Pulau Hikmah (Pusat Navigasi)
- **ID Layar:** `SCR-004`
- **Nama Layar:** Peta Interaktif Pulau Hikmah
- **Latar Belakang:** Peta topografi pulau bergaya 3D cartoony dengan 5 pin lokasi interaktif.
- **Elemen Visual:**
  - Header: Nama murid + jumlah lencana terkumpul (misal: 0/5 Lencana).
  - **Pin Lokasi 1:** Pantai Pengetahuan (ikon kerang emas, status: Terbuka).
  - **Pin Lokasi 2:** Hutan Kalender (ikon pohon kurma, status: Terbuka setelah Misi 1 / opsional bebas).
  - **Pin Lokasi 3:** Gua Hadis (ikon lentera bercahaya).
  - **Pin Lokasi 4:** Desa Inspirasi (ikon rumah panggung islami).
  - **Pin Lokasi 5:** Puncak Kebiasaan (ikon bendera di puncak gunung).
  - Kaka kecil berdiri di samping lokasi yang sedang aktif.
  - Tombol menu: "Koleksi Lencana", "Bantuan", "Kembali ke Beranda".
- **Audio:**
  - BGM peta: `bgm-peta.mp3` (nuansa instrumen gambus & suling ceria).
  - SFX hover pin: nada denting halus.
- **Interaksi:**
  - Klik pin lokasi yang terbuka → muncul kartu preview misi (Judul, Target, Tombol "Masuk Misi").

---

### Layar 05: Misi 1 — Pantai Pengetahuan
- **ID Layar:** `SCR-005`
- **Nama Layar:** Zona 1: Hakikat & Perbedaan Puasa
- **Latar Belakang:** Pantai berpasir putih, pohon kelapa, ombak laut lembut.
- **Alur Sub-Layar Misi 1:**
  1. **Pengantar Misi (1.1):** Kaka menyambut dan menjelaskan target misi.
  2. **Penyajian Materi (1.2):**
     - Tab 1: Pengertian Puasa secara Bahasa (*Shaum* = menahan diri) dan Syariat.
     - Tab 2: Pengertian Puasa Sunah (amalan berpahala jika dikerjakan, tidak berdosa jika ditinggalkan).
     - Tab 3: Tabel Interaktif Perbedaan Puasa Wajib vs Puasa Sunah (Niat, Waktu Pelaksanaan, Hukum Pembatalan).
  3. **Aktivitas Interaktif (1.3):**
     - *Aktivitas 1A:* Kuis Pilihan Ganda (Konsep dasar puasa).
     - *Aktivitas 1B:* Tantangan Benar-Salah (Syarat dan rukun puasa).
     - *Aktivitas 1C:* Permainan Mencocokkan Pasangan (Menjodohkan kartu istilah & arti).
  4. **Umpan Balik Langsung & Skor Misi 1.**
  5. **Rangkuman Pantai Pengetahuan.**
  6. **Penganugerahan Lencana 1:** *Lencana Mutiara Hikmah*.
- **Audio:** BGM pantai tropis santai, SFX deburan ombak, SFX perolehan lencana.

---

### Layar 06: Misi 2 — Hutan Kalender
- **ID Layar:** `SCR-006`
- **Nama Layar:** Zona 2: Jenis dan Waktu Puasa Sunah
- **Latar Belakang:** Hutan tropis rimbun dengan pepohonan rimbun, sinar matahari menembus dedaunan (*god rays*), papan penunjuk arah kalender hijriah.
- **Alur Sub-Layar Misi 2:**
  1. **Pengantar Misi (2.1):** Kaka menunjukkan kompas waktu dan kalender Hijriah.
  2. **Penyajian Materi 8 Jenis Puasa Sunah (2.2):**
     - Galeri Kartu Interaktif 3D:
       1. Puasa Syawal (6 hari di bulan Syawal).
       2. Puasa Senin dan Kamis.
       3. Puasa Arafah (9 Zulhijjah).
       4. Puasa Asyura (10 Muharam).
       5. Puasa Tasu'a (9 Muharam).
       6. Puasa Ayyamul Bidh (13, 14, 15 tiap bulan Hijriah).
       7. Puasa Nabi Daud (sehari puasa, sehari berbuka).
       8. Puasa Syakban (memperbanyak puasa di bulan Syakban).
  3. **Aktivitas Interaktif (2.3):**
     - *Aktivitas 2A:* Mengelompokkan jenis puasa (Mingguan, Bulanan, Tahunan).
     - *Aktivitas 2B:* Mencocokkan Jenis Puasa ↔ Waktu Pelaksanaan pada Kalender Hijriah.
     - *Aktivitas 2C:* Mengurutkan Kalender Ibadah Puasa Sunah dari Muharam hingga Zulhijjah.
  4. **Umpan Balik & Rangkuman Hutan Kalender.**
  5. **Penganugerahan Lencana 2:** *Lencana Pohon Kalender*.

---

### Layar 07: Misi 3 — Gua Hadis
- **ID Layar:** `SCR-007`
- **Nama Layar:** Zona 3: Dalil, Ketentuan & Keutamaan
- **Latar Belakang:** Dinding gua batu kapur eksotis dengan ukiran kaligrafi bercahaya keemasan, lentera gantung kristal.
- **Alur Sub-Layar Misi 3:**
  1. **Pengantar Misi (3.1):** Kaka memegang lentera, mengajak membaca hikmah yang terukir.
  2. **Penyajian Materi (3.2):**
     - Kartu Hikmah 1: Ketentuan berniat puasa sunah (kelonggaran niat di pagi hari jika belum makan/minum).
     - Kartu Hikmah 2: Dalil dan Sumber Terpercaya [Terverifikasi dari Buku PAI Kelas VI Bab 9].
     - Kartu Hikmah 3: Keutamaan Puasa Sunah (penyempurna amal wajib, mendekatkan diri kepada Allah, melatih kesabaran & empati).
  3. **Aktivitas Interaktif (3.3):**
     - *Aktivitas 3A:* Mengungkap Misteri Prasasti (Pilihan ganda tentang keutamaan puasa sunah).
     - *Aktivitas 3B:* Benar-Salah Ketentuan Niat dan Pelaksanaan Puasa Sunah.
     - *Aktivitas 3C:* Menghubungkan Keutamaan Spesifik dengan Jenis Puasanya.
  4. **Umpan Balik & Rangkuman Gua Hadis.**
  5. **Penganugerahan Lencana 3:** *Lencana Lentera Hadis*.

---

### Layar 08: Misi 4 — Desa Inspirasi
- **ID Layar:** `SCR-008`
- **Nama Layar:** Zona 4: Nilai Sikap, Toleransi & Pengamalan
- **Latar Belakang:** Perkampungan asri Nusantara, rumah panggung kayu, sawah hijau, dan surau kecil yang teduh.
- **Alur Sub-Layar Misi 4:**
  1. **Pengantar Misi (4.1):** Kaka mengajak murid menemui warga desa yang hidup rukun dan saling menghormati.
  2. **Penyajian Materi (4.2):**
     - Nilai Kejujuran dan Keikhlasan dalam beribadah.
     - Menghormati teman yang tidak berpuasa (tidak memaksakan puasa sunah kepada orang lain).
     - Menjalankan ibadah sesuai kemampuan tanpa berlebihan.
     - Tidak riya' (pamer ibadah puasa di media sosial atau teman).
  3. **Aktivitas Interaktif (4.3):**
     - *Aktivitas 4A:* Studi Kasus Bergambar "Pilih Tindakan Bijak" (4 skenario kehidupan sehari-hari anak SD).
     - *Aktivitas 4B:* Memilah Sikap Terpuji vs Sikap Kurang Tepat (Drag & Drop ke keranjang kebaikan).
  4. **Umpan Balik & Rangkuman Desa Inspirasi.**
  5. **Penganugerahan Lencana 4:** *Lencana Bintang Kebaikan*.

---

### Layar 09: Misi 5 — Puncak Kebiasaan
- **ID Layar:** `SCR-009`
- **Nama Layar:** Zona 5: Evaluasi Komprehensif & Refleksi
- **Latar Belakang:** Puncak bukit tertinggi di Pulau Hikmah berlatar pemandangan cakrawala luas bergradasi jingga keemasan.
- **Alur Sub-Layar Misi 5:**
  1. **Tantangan Akhir Sang Penjelajah:**
     - 15 Soal Kuis Komprehensif (menguji pemahaman dari Misi 1 sampai Misi 4).
     - Sistem timer opsional (ramah anak, tanpa stres berlebih).
     - Tampilan kartu soal dinamis dengan animasi transisi mulus.
  2. **Umpan Balik Langsung & Skor Akhir.**
  3. **Penganugerahan Lencana 5:** *Lencana Mahkota Puncak*.

---

### Layar 10: Hasil Ekspedisi (Rapor Penjelajah)
- **ID Layar:** `SCR-010`
- **Nama Layar:** Lembar Hasil Pencapaian Ekspedisi
- **Latar Belakang:** Panggung kemenangan dengan taburan konfeti dan pemandangan pulau.
- **Elemen Visual:**
  - Sertifikat Digital Penjelajah dengan Nama Murid.
  - Skor Akhir (Skala 0–100) dan Predikat (Sangat Memuaskan / Hebat / Baik).
  - Ringkasan statistik (jawaban benar per zona).
  - Tombol: "Lihat Koleksi Lencana", "Refleksi & Niat", "Ulangi Ekspedisi".
- **Audio:** BGM kemenangan ceria (`bgm-kemenangan.mp3`), suara tepuk tangan meriah.

---

### Layar 11: Koleksi Lima Lencana
- **ID Layar:** `SCR-011`
- **Nama Layar:** Ruang Koleksi Lencana Hikmah
- **Latar Belakang:** Lemari pajangan kayu bertema penjelajah dengan 5 slot lencana beludru merah.
- **Elemen Visual:**
  - 5 Lencana 3D:
    1. *Lencana Mutiara Pengetahuan* (Pantai Pengetahuan).
    2. *Lencana Daun Kalender* (Hutan Kalender).
    3. *Lencana Lentera Hadis* (Gua Hadis).
    4. *Lencana Bintang Inspirasi* (Desa Inspirasi).
    5. *Lencana Kompas Puncak* (Puncak Kebiasaan).
  - Klik tiap lencana menampilkan jendela pop-up deskripsi makna lencana.
  - Tombol "Lanjut ke Refleksi".

---

### Layar 12: Halaman Refleksi dan Penutup
- **ID Layar:** `SCR-012`
- **Nama Layar:** Refleksi Diri & Salam Penutup Kaka
- **Latar Belakang:** Dermaga senja, kapal bersiap pulang, langit bertabur bintang awal.
- **Elemen Visual:**
  - Kaka melambaikan tangan dengan senyum tulus.
  - Kartu Komitmen Pribadi (Murid memilih nilai yang ingin diamalkan dalam kehidupan sehari-hari, *bukan sebagai syarat nilai*).
  - Pesan penutup dari Kaka: *"Terima kasih sudah menjelajah bersamaku! Semoga ilmu tentang puasa sunah ini menjadi bekal ibadah yang berkah untuk kita semua."*
  - Tombol: "Cetak Rapor/Unduh Ringkasan", "Kembali ke Menu Awal".

---

## 4. Matriks Navigasi Antar Halaman

| Dari Layar | Tindakan Pengguna | Menuju Layar | Catatan Kondisi |
|---|---|---|---|
| `SCR-001` (Cover) | Klik "Mulai" | `SCR-002` (Identitas) | Reset / muat nama sesi |
| `SCR-002` (Identitas) | Submit Nama valid | `SCR-003` (Intro Kaka) | Simpan ke storage |
| `SCR-003` (Intro Kaka) | Selesai dialog / Lewati | `SCR-004` (Peta Pulau) | Akses misi dibuka |
| `SCR-004` (Peta) | Klik Pin Misi 1 | `SCR-005` (Pantai) | Terbuka di awal |
| `SCR-004` (Peta) | Klik Pin Misi 2–5 | `SCR-006` s.d. `SCR-009` | Terbuka bebas atau bertahap |
| Misi 1–4 Selesai | Klik "Klaim Lencana" | `SCR-004` (Peta) | Pin tercentang, lencana bertambah |
| Misi 5 Selesai | Selesai Kuis Akhir | `SCR-010` (Hasil) | Hitung skor total |
| `SCR-010` (Hasil) | Klik "Koleksi Lencana" | `SCR-011` (Lencana) | Menampilkan 5 lencana |
| `SCR-011` (Lencana) | Klik "Refleksi" | `SCR-012` (Penutup) | Menampilkan pesan moral & penutup |
| `SCR-012` (Penutup) | Klik "Selesai / Ulang" | `SCR-001` (Cover) | Kembali ke beranda |

---

## 5. Rincian Dialog Karakter Kaka

| Lokasi / Adegan | Kondisi Emosi Kaka | Teks Dialog Lengkap |
|---|---|---|
| `SCR-002` Identitas | Ceria, menyambut | *"Assalamu'alaikum teman-teman penjelajah! Aku Kaka. Sebelum perahu kita berlayar ke Pulau Hikmah, tuliskan nama hebatmu di buku ekspedisi ini ya!"* |
| `SCR-003` Cerita Pembuka | Bersemangat | *"Lihat pulau di depan itu! Namanya Pulau Hikmah. Di sana ada 5 rahasia keutamaan puasa sunah yang tersimpan dalam lencana emas. Maukah kamu membantuku menemukan semuanya?"* |
| `SCR-005` Pantai (Awal) | Senang, mengarahkan | *"Subhanallah, sejuknya angin pantai! Di Pantai Pengetahuan ini, kita akan belajar apa itu puasa dan rahasia indahnya puasa sunah. Siap memulai?"* |
| `SCR-005` Jawaban Benar | Bangga, acung jempol | *"Luar biasa! Jawabanmu tepat sekali. Puasa sunah memang amalan mulia yang membawa pahala melimpah!"* |
| `SCR-005` Jawaban Keliru | Ramah, menyemangati | *"Jangan berkecil hati ya! Ingat, puasa sunah itu jika dikerjakan berpahala, jika ditinggalkan tidak berdosa. Yuk kita coba lagi!"* |
| `SCR-006` Hutan Kalender | Penasaran, teliti | *"Ssst... perhatikan pepohonan ini! Setiap dahan menyimpan jadwal puasa sunah yang diajarkan Nabi Muhammad saw. Mari kita temukan waktu-waktunya!"* |
| `SCR-007` Gua Hadis | Khusyuk, takjub | *"Masya Allah, indahnya tulisan di dinding gua ini! Ini adalah petunjuk dan keutamaan puasa sunah dari hadis Rasulullah. Ayo kita pelajari dengan teliti."* |
| `SCR-008` Desa Inspirasi | Hangat, bijak | *"Selamat datang di Desa Inspirasi! Berpuasa melatih kita menjadi anak yang sabar, jujur, dan peduli sesama. Mari bantu warga desa memecahkan masalah mereka!"* |
| `SCR-009` Puncak Kebiasaan | Fokus, memotivasi | *"Kita sudah tiba di Puncak Kebiasaan! Ini adalah ujian terakhir untuk menguji semua ilmu yang telah kamu kumpulkan. Tunjukkan kemampuan terbaikmu!"* |
| `SCR-010` Hasil Ekspedisi | Sangat gembira, selebrasi | *"Alhamdulillah! Kamu berhasil menyelesaikan seluruh ekspedisi di Pulau Hikmah dengan nilai yang sangat membanggakan! Kamu penjelajah sejati!"* |
| `SCR-012` Penutup | Hangat, berpamitan | *"Perjalanan kita di Pulau Hikmah telah usai, tapi petualangan ibadahmu di dunia nyata baru saja dimulai. Sampai jumpa lagi di ekspedisi berikutnya! Wassalamu'alaikum warahmatullah!"* |

---

## 6. Kondisi Keberhasilan & Umpan Balik Tantangan

1. **Prinsip Evaluasi:**
   - Tidak ada sistem "Game Over" yang memblokir murid dari belajar; murid dapat mengulang aktivitas hingga paham.
   - Tidak mensyaratkan pengalaman pribadi berpuasa sunah sebagai tolok ukur nilai/lencana. Penilaian murni berbasis pemahaman materi kognitif dan sikap bijak.
2. **Kondisi Berhasil Per Misi:**
   - Menyelesaikan seluruh rangkaian materi pembelajaran.
   - Mencapai minimal ketuntasan 70% pada aktivitas interaktif zona.
   - Menerima umpan balik animasi Kaka melompat gembira, efek suara fanfare, dan lencana zona terbuka berkilauan.
3. **Kondisi Belum Tuntas:**
   - Murid mendapat penjelasan ulang (remedial ramah) pada bagian yang keliru.
   - Kaka memberikan petunjuk pengingat (*clue*) tanpa langsung memberi jawaban instan.
   - Murid diberikan kesempatan mencoba kembali tantangan.
