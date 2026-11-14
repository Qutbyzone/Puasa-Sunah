# 🎵 Spesifikasi Audio
## MPI "Ekspedisi Puasa Sunah – Petualangan di Pulau Hikmah"
### SD Kelas V–VI | Mata Pelajaran PAI

---

## 1. Panduan Umum Audio

| Parameter | Narasi | Musik | SFX |
|-----------|--------|-------|-----|
| **Format Utama** | MP3 | MP3 / OGG | MP3 / OGG |
| **Format Cadangan** | OGG | OGG | WAV |
| **Bitrate** | 128 kbps | 192 kbps | 128 kbps |
| **Sample Rate** | 44.100 Hz | 44.100 Hz | 44.100 Hz |
| **Channel** | Mono | Stereo | Stereo |
| **Bit Depth** | 16-bit | 16-bit | 16-bit |
| **Normalisasi Volume** | -3 dBFS | -6 dBFS | -6 dBFS |
| **Silence padding** | 0,2 dtk awal/akhir | — | — |

> **Catatan Teknis:**
> - Semua file narasi direkam dalam ruang kedap suara (atau minimal ruang dengan reverb minimal).
> - Narrator: suara anak-anak usia 10–12 tahun (1 suara utama untuk Kaka, 1 suara narrator netral).
> - Semua file diberi nama menggunakan kode file seperti pada tabel di bawah (huruf kecil, tanpa spasi, gunakan tanda hubung `-`).
> - Simpan dalam folder: `assets/audio/narasi/`, `assets/audio/musik/`, `assets/audio/sfx/`

---

## 2. NARASI

### 2.1 Narasi Pembuka & Cerita Intro

| Kode File | Nama / Deskripsi | Teks Narasi (Ringkasan) | Durasi Estimasi |
|-----------|-----------------|------------------------|----------------|
| `NAR-001` | Intro Splash / Logo | "Bismillahirrahmanirrahim..." (singkat) | 5 dtk |
| `NAR-002` | Pembuka Cerita — Kaka memperkenalkan diri | Kaka memperkenalkan dirinya, mengajak bertualang ke Pulau Hikmah | 20 dtk |
| `NAR-003` | Narasi Latar Pulau Hikmah | Deskripsi suasana Pulau Hikmah, ada banyak pengetahuan tersembunyi | 15 dtk |
| `NAR-004` | Ajakan Ekspedisi | Kaka mengajak pemain untuk memulai ekspedisi bersama | 12 dtk |
| `NAR-005` | Instruksi Pengisian Identitas | "Sebelum kita mulai, tuliskan namamu ya!" | 8 dtk |
| `NAR-006` | Sambutan Setelah Identitas | "Halo [nama pemain]! Selamat datang di Ekspedisi Puasa Sunah!" | 10 dtk |
| `NAR-007` | Pengantar Peta Pulau Hikmah | Kaka menjelaskan peta dan 5 lokasi misi yang harus dijelajahi | 20 dtk |

### 2.2 Narasi Pengantar Setiap Misi

| Kode File | Nama / Deskripsi | Teks Narasi (Ringkasan) | Durasi Estimasi |
|-----------|-----------------|------------------------|----------------|
| `NAR-M1-001` | Pengantar Misi 1 — Pantai Pengetahuan | "Kita tiba di Pantai Pengetahuan! Di sini kita akan belajar apa itu puasa dan puasa sunah." | 18 dtk |
| `NAR-M2-001` | Pengantar Misi 2 — Hutan Kalender | "Selamat datang di Hutan Kalender yang lebat! Di sini tersimpan rahasia jenis-jenis puasa sunah dan waktu pelaksanaannya." | 18 dtk |
| `NAR-M3-001` | Pengantar Misi 3 — Gua Hadis | "Wah, kita masuk ke Gua Hadis yang misterius! Di sini tersimpan dalil dan keutamaan puasa sunah." | 18 dtk |
| `NAR-M4-001` | Pengantar Misi 4 — Desa Inspirasi | "Kita tiba di Desa Inspirasi! Mari belajar nilai-nilai mulia dari puasa sunah." | 15 dtk |
| `NAR-M5-001` | Pengantar Misi 5 — Puncak Kebiasaan | "Ini dia, misi terakhir kita! Di Puncak Kebiasaan, kita akan menguji semua pengetahuan yang sudah kita dapat." | 20 dtk |

### 2.3 Narasi Penjelasan Materi Per Misi

#### Misi 1 — Pantai Pengetahuan

| Kode File | Nama / Deskripsi | Teks Narasi (Ringkasan) | Durasi Estimasi |
|-----------|-----------------|------------------------|----------------|
| `NAR-M1-101` | Pengertian Puasa | Penjelasan puasa secara umum dalam bahasa anak-anak | 25 dtk |
| `NAR-M1-102` | Pengertian Puasa Sunah | Puasa sunah adalah puasa yang dianjurkan, bukan diwajibkan | 25 dtk |
| `NAR-M1-103` | Perbedaan Puasa Wajib dan Sunah | Perbandingan singkat puasa wajib vs sunah | 30 dtk |
| `NAR-M1-104` | Rangkuman Misi 1 | Kaka merangkum poin-poin penting Misi 1 | 20 dtk |

#### Misi 2 — Hutan Kalender

| Kode File | Nama / Deskripsi | Teks Narasi (Ringkasan) | Durasi Estimasi |
|-----------|-----------------|------------------------|----------------|
| `NAR-M2-101` | Pengantar Jenis Puasa Sunah | Ada 8 jenis puasa sunah yang akan kita pelajari | 15 dtk |
| `NAR-M2-102` | Puasa Syawal | Puasa 6 hari di bulan Syawal setelah Ramadan | 20 dtk |
| `NAR-M2-103` | Puasa Senin-Kamis | Puasa yang dilakukan setiap Senin dan Kamis | 20 dtk |
| `NAR-M2-104` | Puasa Arafah | Puasa pada tanggal 9 Zulhijjah | 20 dtk |
| `NAR-M2-105` | Puasa Asyura | Puasa pada tanggal 10 Muharam | 20 dtk |
| `NAR-M2-106` | Puasa Syakban | Puasa di bulan Syakban | 20 dtk |
| `NAR-M2-107` | Puasa Ayyamul Bidh | Puasa tiga hari setiap tanggal 13, 14, 15 | 20 dtk |
| `NAR-M2-108` | Puasa Nabi Daud | Puasa selang-seling, sehari puasa sehari tidak | 20 dtk |
| `NAR-M2-109` | Puasa Tasu'a | Puasa pada tanggal 9 Muharam | 15 dtk |
| `NAR-M2-110` | Rangkuman Misi 2 | Kaka merangkum 8 jenis puasa sunah | 25 dtk |

#### Misi 3 — Gua Hadis

| Kode File | Nama / Deskripsi | Teks Narasi (Ringkasan) | Durasi Estimasi |
|-----------|-----------------|------------------------|----------------|
| `NAR-M3-101` | Pengantar Ketentuan Puasa Sunah | Penjelasan ketentuan umum niat dan cara berpuasa sunah | 25 dtk |
| `NAR-M3-102` | Niat Puasa Sunah | Niat dilakukan dalam hati, bisa sebelum Fajar | 20 dtk |
| `NAR-M3-103` | Hal yang Membatalkan Puasa | Penjelasan hal-hal yang membatalkan puasa | 25 dtk |
| `NAR-M3-104` | Keutamaan Puasa Sunah (Umum) | Puasa sunah mendekatkan diri kepada Allah | 20 dtk |
| `NAR-M3-105` | Keutamaan per Jenis Puasa | Keutamaan dari masing-masing jenis puasa sunah | 30 dtk |
| `NAR-M3-106` | Rangkuman Misi 3 | Kaka merangkum ketentuan dan keutamaan puasa sunah | 20 dtk |

#### Misi 4 — Desa Inspirasi

| Kode File | Nama / Deskripsi | Teks Narasi (Ringkasan) | Durasi Estimasi |
|-----------|-----------------|------------------------|----------------|
| `NAR-M4-101` | Nilai Disiplin dari Puasa Sunah | Puasa sunah melatih disiplin diri | 20 dtk |
| `NAR-M4-102` | Nilai Sabar dan Ikhlas | Puasa mengajarkan kesabaran dan keikhlasan | 20 dtk |
| `NAR-M4-103` | Sikap Bijak dalam Mengamalkan | Mengamalkan puasa sunah sesuai kemampuan | 20 dtk |
| `NAR-M4-104` | Berbagi Pengetahuan tentang Puasa | Mengajak teman untuk mengenal puasa sunah | 20 dtk |
| `NAR-M4-105` | Rangkuman Misi 4 | Kaka merangkum nilai dan sikap terpuji dari puasa sunah | 20 dtk |

#### Misi 5 — Puncak Kebiasaan

| Kode File | Nama / Deskripsi | Teks Narasi (Ringkasan) | Durasi Estimasi |
|-----------|-----------------|------------------------|----------------|
| `NAR-M5-101` | Pengantar Kuis Akhir | "Sekarang saatnya menguji semua ilmu yang sudah kamu dapat!" | 15 dtk |
| `NAR-M5-102` | Instruksi Kuis Akhir | Penjelasan cara menjawab soal kuis akhir | 15 dtk |
| `NAR-M5-103` | Narasi Rangkuman Akhir | Kaka merangkum seluruh isi ekspedisi | 40 dtk |
| `NAR-M5-104` | Refleksi Diri | "Apa yang sudah kamu pelajari hari ini? Yuk, kita renungkan." | 25 dtk |

### 2.4 Narasi Instruksi Setiap Jenis Aktivitas

| Kode File | Nama / Deskripsi | Teks Narasi (Ringkasan) | Durasi Estimasi |
|-----------|-----------------|------------------------|----------------|
| `NAR-AKT-001` | Instruksi Pilihan Ganda | "Pilih jawaban yang paling tepat ya!" | 6 dtk |
| `NAR-AKT-002` | Instruksi Benar-Salah | "Tentukan apakah pernyataan berikut benar atau salah!" | 7 dtk |
| `NAR-AKT-003` | Instruksi Mencocokkan | "Hubungkan setiap item di kiri dengan pasangannya di kanan!" | 8 dtk |
| `NAR-AKT-004` | Instruksi Mengurutkan | "Urutkan langkah-langkah berikut dengan menyeretnya ke tempat yang benar!" | 8 dtk |
| `NAR-AKT-005` | Instruksi Mengelompokkan | "Kelompokkan setiap item ke dalam kelompok yang tepat!" | 7 dtk |
| `NAR-AKT-006` | Instruksi Memilih Tindakan | "Pilih tindakan yang paling tepat dalam situasi berikut!" | 8 dtk |
| `NAR-AKT-007` | Instruksi Drag-and-Drop | "Seret dan letakkan item ke tempat yang sesuai!" | 7 dtk |

### 2.5 Narasi Umpan Balik

| Kode File | Nama / Deskripsi | Teks Narasi (Ringkasan) | Durasi Estimasi |
|-----------|-----------------|------------------------|----------------|
| `NAR-FB-001` | Jawaban Benar (Versi 1) | "Luar biasa! Jawaban kamu tepat sekali!" | 4 dtk |
| `NAR-FB-002` | Jawaban Benar (Versi 2) | "Wah, kamu pintar! Betul sekali!" | 4 dtk |
| `NAR-FB-003` | Jawaban Benar (Versi 3) | "Mantap! Kamu benar! Terus semangat!" | 4 dtk |
| `NAR-FB-004` | Jawaban Benar (Versi 4) | "Keren! Kamu berhasil menjawab dengan tepat!" | 4 dtk |
| `NAR-FB-005` | Jawaban Salah (Versi 1) | "Hmm, belum tepat. Coba lagi ya!" | 4 dtk |
| `NAR-FB-006` | Jawaban Salah (Versi 2) | "Jawabanmu belum benar. Jangan menyerah!" | 4 dtk |
| `NAR-FB-007` | Jawaban Salah (Versi 3) | "Belum tepat. Yuk baca lagi materinya!" | 4 dtk |
| `NAR-FB-008` | Hampir Benar (Versi 1) | "Hampir benar! Kamu sudah dekat, coba sekali lagi!" | 5 dtk |
| `NAR-FB-009` | Hampir Benar (Versi 2) | "Hm, hampir! Perhatikan lebih teliti ya." | 5 dtk |
| `NAR-FB-010` | Penjelasan Jawaban Benar | "Jawaban yang benar adalah... karena..." (template, disesuaikan per soal) | 10–15 dtk |
| `NAR-FB-011` | Semangat Setelah 2 Kali Salah | "Kaka percaya kamu bisa! Yuk coba lagi." | 5 dtk |
| `NAR-FB-012` | Misi Berhasil | "Selamat! Kamu berhasil menyelesaikan misi ini!" | 6 dtk |
| `NAR-FB-013` | Misi Gagal | "Belum berhasil kali ini. Tapi jangan menyerah, ya!" | 6 dtk |
| `NAR-FB-014` | Lencana Didapat | "Selamat! Kamu mendapatkan lencana baru!" | 5 dtk |

### 2.6 Narasi Penutup & Refleksi

| Kode File | Nama / Deskripsi | Teks Narasi (Ringkasan) | Durasi Estimasi |
|-----------|-----------------|------------------------|----------------|
| `NAR-END-001` | Narasi Hasil Ekspedisi | Kaka mengumumkan hasil akhir ekspedisi pemain | 20 dtk |
| `NAR-END-002` | Refleksi Akhir | Ajakan merenungkan pelajaran yang didapat selama ekspedisi | 25 dtk |
| `NAR-END-003` | Penutup Kaka | Kaka berpamitan dan memberikan motivasi untuk mengamalkan ilmu | 20 dtk |
| `NAR-END-004` | Ajakan Lihat Koleksi Lencana | "Yuk lihat lencana-lencana yang sudah kamu kumpulkan!" | 8 dtk |
| `NAR-END-005` | Ucapan Selamat (Semua Lencana) | "Luar biasa! Kamu berhasil mengumpulkan semua lencana!" | 8 dtk |
| `NAR-END-006` | Doa Penutup / Hamdallah | Narasi doa penutup singkat | 10 dtk |

**Total file narasi: ±70 file**

---

## 3. MUSIK

### 3.1 Musik Latar & Tema

| Kode File | Nama | Suasana / Mood | BPM | Durasi |
|-----------|------|---------------|-----|--------|
| `MUS-001` | Tema Utama Ekspedisi | Petualangan, ceria, bersemangat, epik anak-anak | 120 | 2:30 (loop) |
| `MUS-002` | Menu Utama & Layar Identitas | Ramah, hangat, mengundang, ringan | 90 | 1:30 (loop) |
| `MUS-JINGLE` | Jingle Logo / Intro | Singkat, khas, menghentak | — | 0:05 |

### 3.2 Musik Per Lokasi / Misi

| Kode File | Nama | Suasana / Mood | BPM | Durasi |
|-----------|------|---------------|-----|--------|
| `MUS-M1` | Pantai Pengetahuan | Segar, ceria, suara ombak, tropis, penasaran | 100 | 3:00 (loop) |
| `MUS-M2` | Hutan Kalender | Misterius namun menyenangkan, suara hutan, petualangan | 95 | 3:00 (loop) |
| `MUS-M3` | Gua Hadis | Misterius, agak serius, dalam, lagu magis penemuan | 80 | 3:00 (loop) |
| `MUS-M4` | Desa Inspirasi | Hangat, damai, komunal, suara gamelan ringan | 85 | 3:00 (loop) |
| `MUS-M5` | Puncak Kebiasaan | Megah, klimaks, penuh semangat, orkestral anak | 130 | 3:00 (loop) |

### 3.3 Musik Situasional

| Kode File | Nama | Suasana / Mood | BPM | Durasi |
|-----------|------|---------------|-----|--------|
| `MUS-KUIS` | Kuis / Tantangan | Tegang menyenangkan, timer, kompetitif anak | 115 | 1:30 (loop) |
| `MUS-WIN` | Sukses / Kemenangan | Girang, epik, perayaan, fanfare | 140 | 0:15 |
| `MUS-LOSE` | Gagal / Sedih | Kecil hati, pelan, mendorong untuk bangkit kembali | 70 | 0:08 |
| `MUS-BADGE` | Mendapat Lencana | Spesial, gemerlap, pencapaian | 120 | 0:06 |
| `MUS-TRANS` | Transisi antar Misi / Layar | Ringan, singkat, penghubung | — | 0:03 |
| `MUS-END` | Penutup Ekspedisi | Haru, penuh pencapaian, hangat, mengakhiri petualangan | 80 | 2:00 |
| `MUS-REFLECT` | Layar Refleksi | Tenang, meditatif, damai, Islami nuansa ringan | 70 | 2:00 (loop) |
| `MUS-RESULT` | Layar Hasil Ekspedisi | Senang bercampur haru, pencapaian besar | 100 | 1:30 |

**Total file musik: 16 file**

---

## 4. EFEK SUARA (SFX)

### 4.1 Navigasi & UI

| Kode File | Nama | Deskripsi Suara | Durasi |
|-----------|------|----------------|--------|
| `SFX-UI-001` | Klik Tombol Utama | Klik lembut, pop menyenangkan | 0,2 dtk |
| `SFX-UI-002` | Hover Tombol | Suara ringan, gesekan halus | 0,15 dtk |
| `SFX-UI-003` | Klik Tombol Kecil/Sekunder | Klik ringan tipis | 0,2 dtk |
| `SFX-UI-004` | Tombol Disabled / Tidak Bisa Diklik | Suara buntu, getaran kecil | 0,2 dtk |
| `SFX-UI-005` | Transisi Layar Masuk (Fade In) | Swoosh lembut masuk | 0,5 dtk |
| `SFX-UI-006` | Transisi Layar Keluar (Fade Out) | Swoosh lembut keluar | 0,5 dtk |
| `SFX-UI-007` | Membuka Peta | Suara kertas/gulungan terbuka | 0,8 dtk |
| `SFX-UI-008` | Menutup Peta | Suara kertas/gulungan menutup | 0,6 dtk |
| `SFX-UI-009` | Scroll / Swipe Konten | Suara lembut geser | 0,2 dtk |
| `SFX-UI-010` | Notifikasi / Pop-up Muncul | Ting lembut, ringan | 0,3 dtk |
| `SFX-UI-011` | Dialog/Balon Bicara Muncul | Suara pop muncul | 0,2 dtk |
| `SFX-UI-012` | Menu Terbuka | Slide muncul halus | 0,4 dtk |

### 4.2 Gameplay

| Kode File | Nama | Deskripsi Suara | Durasi |
|-----------|------|----------------|--------|
| `SFX-GP-001` | Jawaban Benar | Suara positif, ting-ting ceria | 0,5 dtk |
| `SFX-GP-002` | Jawaban Salah | Suara negatif, bzz lembut | 0,4 dtk |
| `SFX-GP-003` | Hampir Benar | Suara pertengahan, agak positif | 0,4 dtk |
| `SFX-GP-004` | Kuis Selesai (Semua Benar) | Fanfare mini, gemerlap | 1,0 dtk |
| `SFX-GP-005` | Kuis Selesai (Lulus) | Suara positif sedang | 0,8 dtk |
| `SFX-GP-006` | Kuis Selesai (Gagal) | Suara kecil hati, lembut | 0,8 dtk |
| `SFX-GP-007` | Drag Objek Diangkat | Suara angkat, pop kecil | 0,2 dtk |
| `SFX-GP-008` | Drag Objek Dilepaskan (Benar) | Klik tepat, klik masuk | 0,3 dtk |
| `SFX-GP-009` | Drag Objek Dilepaskan (Salah) | Suara "tidak bisa", memantul | 0,3 dtk |
| `SFX-GP-010` | Kartu Matching Terbuka | Flip kartu, ringan | 0,3 dtk |
| `SFX-GP-011` | Kartu Cocok | Suara match, harmonis | 0,4 dtk |
| `SFX-GP-012` | Kartu Tidak Cocok | Suara blik, kartu balik lagi | 0,4 dtk |
| `SFX-GP-013` | Timer Berjalan (Tick) | Tick detik lembut (loop) | 1,0 dtk (loop) |
| `SFX-GP-014` | Timer Hampir Habis | Tick cepat agak tegang | 1,0 dtk (loop) |
| `SFX-GP-015` | Timer Habis | Suara waktu habis, bel | 0,6 dtk |
| `SFX-GP-016` | Skor Bertambah | Suara koin/poin naik | 0,5 dtk |
| `SFX-GP-017` | Urutan Benar | Suara "jatuh ke tempat" berurutan | 0,6 dtk |

### 4.3 Misi & Pencapaian

| Kode File | Nama | Deskripsi Suara | Durasi |
|-----------|------|----------------|--------|
| `SFX-MSI-001` | Mulai Misi | Suara naik, siap berangkat | 0,8 dtk |
| `SFX-MSI-002` | Selesai Misi (Berhasil) | Fanfare kecil, ceria | 1,2 dtk |
| `SFX-MSI-003` | Mendapat Lencana | Suara gemerlap bintang, perayaan | 1,5 dtk |
| `SFX-MSI-004` | Animasi Lencana Muncul | Suara kemunculan lencana (whoosh + ting) | 1,0 dtk |
| `SFX-MSI-005` | Level Up / Naik Level | Suara naik nada, pencapaian | 1,0 dtk |
| `SFX-MSI-006` | Pin Misi Terbuka di Peta | Suara pin muncul, klik lembut | 0,5 dtk |
| `SFX-MSI-007` | Ekspedisi Selesai | Suara besar perayaan akhir | 2,0 dtk |
| `SFX-MSI-008` | Progress Bar Naik | Suara mengisi, naik halus | 0,5 dtk |

### 4.4 Lingkungan (Ambient)

| Kode File | Nama | Deskripsi Suara | Durasi |
|-----------|------|----------------|--------|
| `SFX-AMB-001` | Pantai — Ombak & Angin | Suara ombak laut, angin sepoi (loop) | 30 dtk (loop) |
| `SFX-AMB-002` | Pantai — Burung Camar | Suara burung laut sesekali | 5 dtk |
| `SFX-AMB-003` | Hutan — Suara Alam | Suara jangkrik, burung hutan (loop) | 30 dtk (loop) |
| `SFX-AMB-004` | Hutan — Gemerisik Daun | Gemerisik angin di pepohonan | 5 dtk |
| `SFX-AMB-005` | Gua — Gema & Tetesan Air | Suara gua, tetesan air, gema (loop) | 30 dtk (loop) |
| `SFX-AMB-006` | Gua — Kelelawar Melintas | Suara kelelawar sesekali | 3 dtk |
| `SFX-AMB-007` | Desa — Keramaian Desa | Suara aktivitas desa, anak bermain (loop) | 30 dtk (loop) |
| `SFX-AMB-008` | Desa — Adzan Jauh | Suara adzan sayup dari kejauhan | 10 dtk |
| `SFX-AMB-009` | Puncak Gunung — Angin Kencang | Suara angin kencang, hening (loop) | 30 dtk (loop) |
| `SFX-AMB-010` | Puncak Gunung — Elang | Suara elang melintas | 3 dtk |

**Total file SFX: 49 file**

---

## 5. Panduan Implementasi Audio

### 5.1 Autoplay & Loop

| Jenis Audio | Autoplay | Loop | Keterangan |
|-------------|----------|------|------------|
| Narasi | Ya (saat layar muncul) | Tidak | Beri tombol replay narasi |
| Musik Latar | Ya | Ya | Fade in saat layar aktif |
| Musik Win/Lose | Ya (saat event) | Tidak | Mainkan sekali |
| SFX UI | Ya (saat event) | Tidak | Mainkan sekali |
| SFX Ambient | Ya | Ya | Volum rendah, latar |
| SFX Timer | Ya (saat timer berjalan) | Ya | Hentikan saat timer selesai |

### 5.2 Pengaturan Volume (Default)

| Jenis Audio | Volume Default | Dapat Disesuaikan Pengguna |
|-------------|---------------|--------------------------|
| Narasi | 100% | Tidak (selalu penuh) |
| Musik | 60% | Ya |
| SFX UI | 70% | Ya |
| SFX Ambient | 30% | Ya |
| SFX Gameplay | 80% | Ya |

### 5.3 Fade In / Fade Out

| Situasi | Jenis Fade | Durasi |
|---------|-----------|--------|
| Musik mulai (masuk layar) | Fade In | 1,0 dtk |
| Musik berhenti (keluar layar) | Fade Out | 0,8 dtk |
| Ganti musik antar misi | Crossfade | 1,5 dtk |
| Narasi mulai | Langsung | — |
| Ambient mulai | Fade In | 2,0 dtk |

### 5.4 Prioritas Audio (saat tumpang tindih)

| Prioritas | Jenis | Keterangan |
|-----------|-------|------------|
| 1 (Tertinggi) | Narasi | Turunkan volume musik ke 20% saat narasi aktif |
| 2 | SFX Gameplay | Mainkan bersamaan dengan ambient |
| 3 | Musik | Utama, selalu loop di latar |
| 4 (Terendah) | Ambient | Volum rendah, latar suasana |

### 5.5 Aksesibilitas

- Sediakan tombol **mute/unmute** untuk setiap kategori audio (musik, narasi, SFX).
- Sediakan tombol **replay** untuk setiap narasi.
- Semua teks narasi juga ditampilkan sebagai teks di layar (subtitle).
- Pertimbangkan mode "tanpa suara" untuk penggunaan di lingkungan tenang.

---

## 6. Ringkasan Total File Audio

| Kategori | Jumlah File |
|----------|------------|
| Narasi — Intro & Pembuka | 7 |
| Narasi — Pengantar Misi (5 misi) | 5 |
| Narasi — Materi per Misi | 29 |
| Narasi — Instruksi Aktivitas | 7 |
| Narasi — Umpan Balik | 14 |
| Narasi — Penutup & Refleksi | 6 |
| **Subtotal Narasi** | **68** |
| Musik (semua jenis) | 16 |
| SFX — Navigasi & UI | 12 |
| SFX — Gameplay | 17 |
| SFX — Misi & Pencapaian | 8 |
| SFX — Ambient Lingkungan | 10 |
| **Subtotal SFX** | **47** |
| **TOTAL KESELURUHAN** | **131 file audio** |

> **Estimasi Ukuran Storage:**
> - Narasi (MP3 128 kbps, rata-rata 15 dtk): ~68 × 240 KB ≈ **16 MB**
> - Musik (MP3 192 kbps, rata-rata 2 menit): ~16 × 2.800 KB ≈ **44 MB**
> - SFX (MP3 128 kbps, rata-rata 0,5 dtk): ~47 × 80 KB ≈ **4 MB**
> - **Estimasi Total: ±64 MB** (sebelum kompresi OGG)
> - Dengan format OGG (kompresi ~40% lebih kecil): **±38 MB**

---

*Dokumen ini dibuat untuk keperluan produksi MPI "Ekspedisi Puasa Sunah – Petualangan di Pulau Hikmah".*
*Versi 1.0 — Revisi sesuai perkembangan konten storyboard dan desain visual.*
