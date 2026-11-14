# 🗺️ PEMETAAN INTEGRASI ASET
## Media Pembelajaran Interaktif (MPI): "Ekspedisi Puasa Sunah – Petualangan di Pulau Hikmah"
**Jenjang:** Fase C (Kelas V–VI SD) | **Mata Pelajaran:** Pendidikan Agama Islam & Budi Pekerti  
**Status Integrasi:** 100% Siap Terintegrasi  

---

## 1. Pemetaan Aset Visual per Halaman Aplikasi

| No | ID Layar | Nama Halaman | Background Utama | Karakter & Posisi | Elemen UI & Ikon | Lencana Terkait |
|---|---|---|---|---|---|:---:|
| 1 | `SCR-001` | Cover Pembuka | `assets/backgrounds/bg-cover.png` | `assets/characters/kaka-senang.png` (Kanan bawah) | Tombol Mulai, `icon-musik.png`, `icon-bantuan.png` | — |
| 2 | `SCR-002` | Identitas Murid | `assets/backgrounds/bg-cover.png` (Overlay lembut) | `assets/characters/kaka-senang.png` (Sisi kiri dialog) | Form Input Nama, Tombol Masuk Peta | — |
| 3 | `SCR-003` | Cerita Pembuka | `assets/backgrounds/bg-cover.png` | `assets/characters/kaka-senang.png` (Pemandu ekspedisi) | Balon Dialog Kaka, `icon-lanjut.png`, Tombol Lewati | — |
| 4 | `SCR-004` | Peta Pulau Hikmah | `assets/maps/peta-pulau.png` | `assets/characters/kaka-senang.png` (Avatar penjelajah) | 5 Pin Lokasi Interaktif, Indikator Skor, `icon-peta.png` | Miniatur 5 lencana |
| 5 | `SCR-005` | Misi 1: Pantai Pengetahuan | `assets/backgrounds/bg-pantai.png` | `assets/characters/kaka-senang.png` (Sisi dialog & feedback) | Tab Materi, Kartu Soal PG, Tombol B/S, `icon-kembali.png`, `icon-lanjut.png` | `assets/badges/lencana-1-pantai.png` |
| 6 | `SCR-006` | Misi 2: Hutan Kalender | `assets/backgrounds/bg-hutan.png` | `assets/characters/kaka-senang.png` (Sisi kompas kalender) | 8 Kartu Puasa Sunah, Interaksi Pengelompokan & Pengurutan Kalender | `assets/badges/lencana-2-hutan.png` |
| 7 | `SCR-007` | Misi 3: Gua Hadis | `assets/backgrounds/bg-gua.png` | `assets/characters/kaka-senang.png` (Membawa lentera) | Prasasti Hadis & Dalil, Kotak Cocokkan Keutamaan, Umpan Balik | `assets/badges/lencana-3-gua.png` |
| 8 | `SCR-008` | Misi 4: Desa Inspirasi | `assets/backgrounds/bg-desa.png` | `assets/characters/kaka-senang.png` (Sahabat warga desa) | Skenario Studi Kasus Bergambar, Pilihan Tindakan Terpuji, Umpan Balik | `assets/badges/lencana-4-desa.png` |
| 9 | `SCR-009` | Misi 5: Puncak Kebiasaan | `assets/backgrounds/bg-puncak.png` | `assets/characters/kaka-senang.png` (Pemberi semangat ujian) | 15 Kartu Soal Evaluasi Komprehensif, Timer, Indikator Nomor Soal | `assets/badges/lencana-5-puncak.png` |
| 10 | `SCR-010` | Hasil Ekspedisi | `assets/backgrounds/bg-cover.png` (Efek konfeti) | `assets/characters/kaka-senang.png` (Selebrasi jempol gembira) | Lembar Rapor Digital Murid, Predikat Kelulusan, Tombol Cetak / Simpan | Pameran 5 lencana aktif |
| 11 | `SCR-011` | Koleksi Lencana | `assets/backgrounds/bg-puncak.png` | `assets/characters/kaka-senang.png` (Kurator lencana) | Lemari Pajangan 5 Lencana, Modal Pop-up Arti Filosofis Tiap Lencana | Seluruh 5 Lencana Fisik |
| 12 | `SCR-012` | Refleksi & Penutup | `assets/backgrounds/bg-cover.png` (Suasana senja) | `assets/characters/kaka-senang.png` (Melambai ramah berpamitan) | Kartu Tekad Ibadah Murid, Pesan Hikmah Penutup, Tombol Mulai Ulang | Ringkasan Penjelajah Sejati |

---

## 2. Pemetaan Integrasi Sistem Audio

| Komponen Audio | Metode Pembangkitan | Pemicu (Event Trigger) | Karakteristik & Efek Suara |
|---|---|---|---|
| **Klik Navigasi** | Web Audio API Synthesizer | `button.click`, `pin.click`, `tab.click` | Frekuensi 600Hz → 800Hz (Sine, 0.08 detik), volume 0.3 |
| **Jawaban Benar** | Web Audio API Synthesizer | Jawaban kuis / aktivitas tepat | Arpeggio mayor 3 nada: C5 (523Hz) → E5 (659Hz) → G5 (784Hz), volume 0.4 |
| **Jawaban Salah** | Web Audio API Synthesizer | Jawaban kuis keliru | Dua nada menurun lembut: Eb4 (311Hz) → C4 (261Hz), volume 0.3 (ramah anak) |
| **Perolehan Lencana** | Web Audio API Synthesizer | Misi tuntas & klaim lencana | Fanfare melodi keemasan 5 nada: G4 → C5 → E5 → G5 → C6 (0.8 detik), getaran kemuliaan |
| **BGM Petualangan** | Web Audio API Ambient Pad & Melodi | Toggle Musik ON | Akord lembut ramah belajar (F-Am-Bb-C progression, volume 0.15, non-intrusif) |
| **BGM MP3 Eksternal** | HTML5 Audio Tag Modular | Tersedia di `assets/audio/music/` | Otomatis diputar jika file fisik MP3 disediakan pengguna |
| **TTS Narasi Kaka** | Web Speech Synthesis API | Ikon Speaker diklik / tombol narasi | Suara peramban bahasa Indonesia (`id-ID`) membacakan teks Kaka |

---

## 3. Kompatibilitas Protokol `file://` (Offline-First)

1. **Bebas CORS:** Tidak menggunakan `fetch()` atau `XMLHttpRequest()` untuk membaca file teks lokal. Seluruh bank soal, materi, dan dialog Kaka diimpor langsung melalui `<script src="js/data.js"></script>` ke dalam memori global `window.MPI_DATA`.
2. **Bebas Dependensi Jaringan:** Semua elemen UI, font ikon, dan gambar menggunakan path relatif lokal (`assets/...`).
3. **Penyimpanan Lokal Mandiri:** Progres belajar, skor tiap misi, dan nama murid disimpan secara aman dalam `window.localStorage` peramban.
