# 🎨 Panduan Desain Visual
## MPI "Ekspedisi Puasa Sunah – Petualangan di Pulau Hikmah"
### Untuk Murid SD Kelas V–VI | Mata Pelajaran PAI

---

## 1. Panduan Gaya Visual Keseluruhan

### Konsep Utama: **Stylized 3D Adventure**

Aplikasi ini menggunakan gaya visual **Stylized 3D Adventure** — perpaduan antara estetika 3D yang dirender dengan warna cerah dan toon-shading, menyerupai gaya game petualangan anak populer (seperti Roblox meets Pixar Junior). Karakter dan latar bersifat ekspresif, penuh warna, dengan outline tebal yang bersih.

| Aspek | Deskripsi |
|---|---|
| **Rendering Style** | Cel-shading / Toon rendering — tampak seperti 3D yang "dicat tangan" |
| **Outline** | Outline hitam tebal (3–4px pada ukuran 1080p) untuk semua objek |
| **Lighting** | Soft ambient light, bayangan ringan dan lembut, tidak realistis |
| **Perspektif** | Isometric / slight low-angle untuk layar latar; front-facing untuk karakter |
| **Mood** | Ceria, hangat, penuh semangat, bersahabat, petualangan |
| **Target Usia** | 10–12 tahun (kelas V–VI SD) |
| **Resolusi Dasar** | 1280 × 720 px (16:9), scalable ke 1920 × 1080 |

### Prinsip Desain Visual
1. **Keterbacaan Tinggi** — Teks selalu kontras dengan latar, minimum rasio kontras 4.5:1.
2. **Konsistensi Warna** — Palet warna terbatas dan berulang untuk membangun identitas.
3. **Hierarki Visual Jelas** — Informasi penting selalu paling menonjol secara ukuran dan warna.
4. **Ramah Anak** — Sudut tumpul (border-radius besar), bentuk organik, tidak ada elemen menakutkan.
5. **Responsif Emosional** — Setiap lokasi punya mood warna berbeda untuk membedakan misi.

---

## 2. Palet Warna

### 2.1 Warna Brand Utama

| Nama Warna | Hex Code | Contoh Penggunaan |
|---|---|---|
| **Kuning Petualangan** | `#FFD93D` | Judul utama, tombol aksi, bintang/koin |
| **Hijau Hikmah** | `#2ECC71` | Tombol konfirmasi, lencana sukses, progress bar |
| **Biru Langit** | `#3498DB` | Latar layar menu, tombol navigasi, air |
| **Oranye Semangat** | `#FF6B35` | Highlight penting, label misi, tanda seru |
| **Ungu Bijak** | `#8B5CF6` | Panel kuis, elemen mistis/pengetahuan |

### 2.2 Warna Netral

| Nama Warna | Hex Code | Contoh Penggunaan |
|---|---|---|
| **Putih Bersih** | `#FFFFFF` | Latar kartu, teks pada latar gelap |
| **Krem Lembut** | `#FFF8E7` | Latar panel soal, kartu materi |
| **Abu Terang** | `#F0F4F8` | Latar layar netral, divider |
| **Abu Gelap** | `#2D3436` | Teks utama, outline elemen |
| **Hitam Outline** | `#1A1A1A` | Outline karakter dan objek |

### 2.3 Warna Sekunder / Aksen per Lokasi

| Lokasi | Warna Dominan | Warna Aksen | Hex Dominan | Hex Aksen |
|---|---|---|---|---|
| Cover / Intro | Biru laut + emas | Oranye sunset | `#1B6CA8` | `#FFD93D` |
| Pantai Pengetahuan | Biru-toska | Kuning pasir | `#00BCD4` | `#FFEB3B` |
| Hutan Kalender | Hijau daun | Coklat kayu | `#4CAF50` | `#795548` |
| Gua Hadis | Ungu batu | Kuning lentera | `#7B1FA2` | `#FFC107` |
| Desa Inspirasi | Oranye tanah | Merah bata | `#FF6F00` | `#D32F2F` |
| Puncak Kebiasaan | Biru dingin + putih | Emas mahkota | `#1565C0` | `#FFD700` |

---

## 3. Tipografi

> [!IMPORTANT]
> Gunakan Google Fonts yang tersedia untuk embed offline (unduh file `.woff2` dan sertakan dalam aset proyek).

### 3.1 Font Utama (Display / Judul)

| Properti | Nilai |
|---|---|
| **Nama Font** | **Nunito** |
| **Google Fonts** | `https://fonts.google.com/specimen/Nunito` |
| **Alasan Pilihan** | Rounded letterform yang ramah anak, tegas namun bersahabat |
| **Variasi Berat** | ExtraBold (800), Bold (700), SemiBold (600) |

#### Penggunaan Nunito:
- **Judul Utama / Cover:** Nunito ExtraBold (800), 48–72px, uppercase, shadow `2px 4px #00000040`
- **Judul Halaman / Misi:** Nunito Bold (700), 32–40px, capitalize
- **Sub-heading:** Nunito SemiBold (600), 20–24px

### 3.2 Font Pendukung (Body / UI)

| Properti | Nilai |
|---|---|
| **Nama Font** | **Poppins** |
| **Google Fonts** | `https://fonts.google.com/specimen/Poppins` |
| **Alasan Pilihan** | Geometric sans-serif, modern, sangat mudah dibaca di layar digital |
| **Variasi Berat** | Medium (500), Regular (400), Light (300) |

#### Penggunaan Poppins:
- **Teks Materi / Narasi:** Poppins Regular (400), 14–16px, line-height 1.6
- **Teks Tombol:** Poppins SemiBold (600), 14–16px
- **Label Kecil / Caption:** Poppins Light (300), 11–12px
- **Dialog Kaka:** Poppins Medium (500), italic style, 14px

### 3.3 Font Aksen (Dekoratif — opsional)

| Properti | Nilai |
|---|---|
| **Nama Font** | **Baloo 2** |
| **Google Fonts** | `https://fonts.google.com/specimen/Baloo+2` |
| **Penggunaan** | Nama lencana, label lokasi di peta, teks dekoratif pada banner |
| **Berat** | Bold (700), ExtraBold (800) |

### 3.4 Skala Tipografi Lengkap

| Level | Font | Ukuran | Berat | Warna Default |
|---|---|---|---|---|
| H1 — Judul Utama | Nunito | 56px | 800 | `#FFD93D` atau `#FFFFFF` |
| H2 — Judul Misi | Nunito | 36px | 700 | `#2D3436` |
| H3 — Sub-judul | Nunito | 24px | 600 | `#2D3436` |
| Body | Poppins | 15px | 400 | `#2D3436` |
| Body Bold | Poppins | 15px | 600 | `#2D3436` |
| Caption | Poppins | 12px | 300 | `#636E72` |
| Button | Poppins | 15px | 600 | `#FFFFFF` |
| Dialog | Poppins Italic | 14px | 500 | `#2D3436` |

---

## 4. Deskripsi Visual 7 Lokasi / Latar

### 4a. 🏝️ Cover Screen — Pulau Hikmah

**Suasana:** Epik, megah, mengundang petualangan. Matahari bersinar cerah di atas cakrawala dengan awan volumetrik berwarna oranye dan emas. Terasa seperti pembuka film animasi petualangan.

**Deskripsi Visual:**
- **Latar belakang:** Langit sore keemasan dengan gradasi `#FF6B35` → `#FFD93D` → `#87CEEB` dari bawah ke atas
- **Laut:** Warna biru-toska jernih (`#00BCD4`), dengan ombak animasi ringan. Ada bayangan dan pantulan cahaya dari matahari
- **Pulau utama:** Pulau hijau tropis dengan puncak gunung kecil di tengah, dikelilingi pohon palem tinggi, batu karang, dan vegetasi tropis lebat
- **Judul:** "EKSPEDISI PUASA SUNAH" dalam font Nunito ExtraBold, berwarna putih dengan outline emas tebal, shadow dramatis. Di bawahnya sub-judul kecil: "Petualangan di Pulau Hikmah"
- **Karakter Kaka:** Berdiri di ujung perahu kayu kecil, melambaikan tangan, bersemangat
- **Dekorasi:** Burung camar terbang, bintang-bintang kecil berkilau di sudut layar, bendera petualangan berkibar
- **Tombol Mulai:** Tombol bulat besar berwarna `#FFD93D` dengan teks "MULAI PETUALANGAN!" berpulse-animasi

**Warna Dominan:** `#FFD93D` · `#FF6B35` · `#1B6CA8` · `#2ECC71`

---

### 4b. 📋 Layar Identitas & Menu Utama

**Suasana:** Hangat, personal, mengundang. Seperti halaman depan buku petualangan milik si anak.

**Deskripsi Visual:**
- **Latar belakang:** Peta tua bergaya "parchment" (krem kecoklatan `#F5E6C8`) dengan textur kertas dan garis-garis peta yang menyerupai peta harta karun
- **Panel formulir:** Kartu putih bersih dengan border-radius 20px, shadow lembut, berisi field nama dan kelas
- **Peta Pulau Hikmah (mini):** Versi kecil peta pulau di pojok kanan, dengan 5 pin lokasi misi yang bisa dilihat
- **Karakter Kaka:** Pose "menyambut" di kiri layar, sambil memegang peta besar dan menatap pengguna
- **Menu Utama:** Tombol-tombol berbentuk lembaran peta atau papan kayu yang berisi: Mulai Ekspedisi, Koleksi Lencana, Panduan, Keluar
- **Dekorasi:** Kompas antik di sudut, stempel "Ekspedisi" bergaya, tali tampar sebagai border dekoratif

**Warna Dominan:** `#F5E6C8` · `#8B6914` · `#2ECC71` · `#3498DB`

---

### 4c. 🏖️ Pantai Pengetahuan — Misi 1

**Suasana:** Segar, menyenangkan, terbuka. Pantai tropis di pagi hari — bersih, jernih, penuh cahaya.

**Deskripsi Visual:**
- **Langit:** Biru cerah muda `#87CEEB` dengan awan putih fluffy yang bergerak perlahan
- **Pasir:** Kuning hangat `#FDDFA0`, berkilau ringan, ada bekas kaki dan kerang-kerang kecil
- **Laut:** Gradasi toska `#00BCD4` → biru `#0288D1`, ombak animasi berbusa putih di bibir pantai
- **Elemen Konten:** Papan tulis kayu besar berdiri di pasir (tempat teks materi), didekorasi kerang dan bintang laut
- **Objek Interaktif:** Kerang-kerang besar yang bisa diklik (berisi informasi), botol kaca berpesan di pasir
- **Karakter Kaka:** Duduk di atas batu karang dekat papan tulis, menjelaskan materi dengan semangat
- **Dekorasi:** Payung pantai warna-warni, pohon palem melengkung, bintang laut oranye, kepiting kecil

**Warna Dominan:** `#00BCD4` · `#FDDFA0` · `#87CEEB` · `#FFFFFF`

---

### 4d. 🌳 Hutan Kalender — Misi 2

**Suasana:** Rimbun, magis, penuh rahasia yang menyenangkan. Hutan tropis dengan cahaya matahari yang menembus celah dedaunan.

**Deskripsi Visual:**
- **Langit:** Hijau kanopi daun lebat di bagian atas, cahaya bocor berbentuk "god rays" berwarna kuning lembut
- **Pepohonan:** Pohon-pohon besar berdiameter besar, akar menempel di tanah, berlumut hijau tua. Batang coklat gelap `#5D4037`
- **Daun:** Berbagai ukuran daun hijau: `#1B5E20`, `#388E3C`, `#66BB6A` — berlapis dan bervariasi
- **Elemen Konten:** Kalender raksasa berbentuk papan kayu yang tergantung di pohon besar. Setiap tanggal adalah "buah" yang bisa dipetik untuk melihat info jenis puasa
- **Objek Interaktif:** Pohon-pohon berlabel nama bulan Hijriyah, burung hantu sebagai "penjaga informasi"
- **Jalur:** Jalan setapak tanah coklat yang berkelok masuk ke dalam hutan
- **Karakter Kaka:** Berdiri di jalan setapak, menunjuk ke pohon kalender raksasa

**Warna Dominan:** `#4CAF50` · `#795548` · `#FFEB3B` · `#1B5E20`

---

### 4e. 🕌 Gua Hadis — Misi 3

**Suasana:** Misterius namun nyaman, hangat, penuh kearifan. Gua yang diterangi lentera-lentera kecil — seperti perpustakaan tersembunyi para ulama.

**Deskripsi Visual:**
- **Dinding Gua:** Batu alam berwarna ungu-abu `#4A148C` dan abu-ungu `#7B1FA2`, bertekstur, berlumut
- **Penerangan:** Lentera-lentera gantung berwarna kuning emas `#FFC107` yang mengambang dan bergoyang lembut
- **Lantai:** Permadani bergaya islami (motif geometris) di atas lantai batu
- **Elemen Konten:** Gulungan-gulungan perkamen (hadis) tergantung di dinding, ada rak buku batu berisi kitab
- **Objek Interaktif:** Gulungan perkamen yang bisa dibuka, ornamen kaligrafi dekoratif (non-teks) di dinding
- **Cahaya:** Ambience ungu lembut dari kristal-kristal di langit-langit gua
- **Karakter Kaka:** Duduk bersila di atas bantal merah, membaca gulungan perkamen dengan serius

**Warna Dominan:** `#7B1FA2` · `#FFC107` · `#4A148C` · `#F3E5F5`

---

### 4f. 🏘️ Desa Inspirasi — Misi 4

**Suasana:** Hangat, ramai, komunitas yang saling mendukung. Desa tradisional yang penuh kehangatan dan kekeluargaan.

**Deskripsi Visual:**
- **Langit:** Sore keemasan `#FF8F00`, gradasi hangat dengan siluet gunung hijau di latar jauh
- **Rumah-rumah:** Rumah kayu tradisional bernuansa melayu/nusantara, dengan atap jerami/genteng merah, berwarna `#E64A19` dan `#BF360C`
- **Jalanan:** Jalur tanah merah `#A1887F` dengan batu-batu pijakan, diapit pagar kayu dan tanaman berbunga
- **Elemen Konten:** Panggung kecil di tengah desa (tempat presentasi sikap/nilai), papan pengumuman desa
- **Warga Desa:** Silhouette atau karakter NPC (anak-anak dan orang tua) berpakaian rapi dan bersahaja
- **Objek Interaktif:** Rumah-rumah yang bisa dikunjungi, sumur desa, pohon beringin tua di tengah
- **Karakter Kaka:** Berdiri di depan panggung, mengajak pengguna berinteraksi dengan warga

**Warna Dominan:** `#FF6F00` · `#4CAF50` · `#795548` · `#FFE0B2`

---

### 4g. 🏔️ Puncak Kebiasaan — Misi 5

**Suasana:** Megah, pencapaian, puncak petualangan. Suasana langit sore dengan pemandangan indah dari atas bukit/gunung, terasa seperti titik akhir yang gemilang.

**Deskripsi Visual:**
- **Langit:** Gradasi dramatis biru-ungu ke oranye `#1565C0` → `#9C27B0` → `#FF6F00`, bintang-bintang mulai muncul
- **Latar:** Pemandangan dari ketinggian — terlihat semua lokasi misi sebelumnya (pantai, hutan, gua, desa) di bawah
- **Puncak:** Batu-batu besar berwarna biru-kelabu `#78909C`, dengan bendera kecil warna-warni terpancang
- **Elemen Konten:** "Meja batu" sebagai panel kuis akhir, berlapis permukaan putih halus seperti marmer
- **Objek Sukses:** Mahkota emas melayang, pita pelangi, bintang-bintang berkilau jika jawaban benar
- **Karakter Kaka:** Berdiri gagah di puncak batu, pose tangan mengacungkan jempol, penuh kebanggaan
- **Dekorasi:** Awan di bawah level karakter, sinar cahaya dari langit menyinari puncak

**Warna Dominan:** `#1565C0` · `#FFD700` · `#78909C` · `#E8EAF6`

---

## 5. Panduan UI (User Interface)

### 5.1 Tombol (Button)

| Tipe Tombol | Warna Background | Warna Teks | Border Radius | Shadow | Ukuran Min |
|---|---|---|---|---|---|
| **Tombol Aksi Utama** | `#FFD93D` | `#1A1A1A` | 50px (pill) | `0 4px 12px #FFD93D80` | 180×52px |
| **Tombol Konfirmasi** | `#2ECC71` | `#FFFFFF` | 50px | `0 4px 12px #2ECC7180` | 160×48px |
| **Tombol Navigasi** | `#3498DB` | `#FFFFFF` | 16px | `0 2px 8px #3498DB60` | 140×44px |
| **Tombol Bahaya/Keluar** | `#E74C3C` | `#FFFFFF` | 16px | `0 2px 8px #E74C3C60` | 140×44px |
| **Tombol Sekunder** | `#FFFFFF` | `#3498DB` | 16px | `0 2px 6px #00000020` | 140×44px |
| **Tombol Nonaktif** | `#B2BEC3` | `#636E72` | 16px | none | 140×44px |

**State Tombol:**
- **Normal:** Seperti tabel di atas
- **Hover:** Scale 1.05, brightness +10%, cursor pointer
- **Pressed/Active:** Scale 0.97, brightness -5%
- **Fokus:** Ring outline 3px warna aksen, offset 2px

---

### 5.2 Kartu Materi

```
┌─────────────────────────────────────────┐
│  🏖️  [Ikon Lokasi]   PANTAI PENGETAHUAN │  ← Header (warna lokasi)
│─────────────────────────────────────────│
│                                         │
│   [Konten teks materi di sini]          │
│   Font: Poppins Regular 15px            │
│   Line-height: 1.6                      │
│                                         │
│─────────────────────────────────────────│
│  ◀ Sebelumnya          Selanjutnya ▶   │  ← Footer navigasi
└─────────────────────────────────────────┘
```

| Properti | Nilai |
|---|---|
| Background | `#FFFFFF` atau `#FFF8E7` (krem) |
| Border Radius | 20px |
| Padding | 24px |
| Shadow | `0 8px 24px #00000015` |
| Border | 1px solid `#E0E0E0` |
| Max Width | 680px |
| Header Height | 56px |
| Header Font | Nunito Bold 18px, warna putih |

---

### 5.3 Panel Soal / Kuis

```
┌────────────────────────────────────────────┐
│  Soal 3 dari 5    ████████░░  60%          │  ← Progress bar
│────────────────────────────────────────────│
│                                            │
│  ❓ [Pertanyaan soal di sini]              │
│     Poppins Medium 16px                    │
│                                            │
│  ┌────────────────────────┐                │
│  │  A. Opsi pertama       │                │
│  └────────────────────────┘                │
│  ┌────────────────────────┐                │
│  │  B. Opsi kedua         │                │
│  └────────────────────────┘                │
│  ┌────────────────────────┐                │
│  │  C. Opsi ketiga        │                │
│  └────────────────────────┘                │
│  ┌────────────────────────┐                │
│  │  D. Opsi keempat       │                │
│  └────────────────────────┘                │
└────────────────────────────────────────────┘
```

| Properti | Nilai |
|---|---|
| Background Panel | `#F0F4F8` |
| Border Radius Panel | 24px |
| Kartu Opsi — Normal | `#FFFFFF`, border `2px solid #DFE6E9`, radius 12px |
| Kartu Opsi — Dipilih | `#3498DB` background, border `2px solid #2980B9` |
| Kartu Opsi — Benar | `#2ECC71` background, border `2px solid #27AE60` |
| Kartu Opsi — Salah | `#E74C3C` background, border `2px solid #C0392B` |
| Progress Bar | Warna `#FFD93D`, background `#DFE6E9`, height 10px, radius 5px |
| Timer (jika ada) | Lingkaran countdown, warna `#FF6B35`, font Nunito Bold |

---

### 5.4 Navigasi

**Navigation Bar Bawah:**
- Background: `#1A1A2E` (gelap navy)
- Icon 5 misi + tombol peta + tombol profil
- Ikon aktif: Kuning emas `#FFD93D` dengan background bulat
- Ikon nonaktif: Abu `#636E72`
- Tinggi: 64px, border-radius atas 20px

**Back Button:**
- Pojok kiri atas, ikon panah kiri dalam lingkaran `#FFFFFF` semi-transparan
- Ukuran: 44×44px

**Peta Navigasi (overlay):**
- Full-screen overlay dengan backdrop blur
- Pulau Hikmah dengan 5 pin lokasi yang bisa diklik
- Pin aktif: Animated bounce, warna kuning
- Pin terkunci: Warna abu dengan ikon gembok

---

## 6. Panduan Ikon dan Lencana

### 6.1 Lencana (Badge) — 5 Lencana Misi

---

#### 🏅 Lencana 1: "Penjelajah Pantai"
**Misi:** Pantai Pengetahuan (Misi 1)

| Properti | Detail |
|---|---|
| **Bentuk** | Perisai segi enam (hexagon), pinggir bergerigi seperti lencana petualangan |
| **Ikon Tengah** | Kerang besar berwarna krem dan oranye di atas ombak toska kecil |
| **Warna Utama Lencana** | `#00BCD4` (biru-toska) |
| **Warna Aksen** | `#FDDFA0` (kuning pasir), `#FF6B35` (oranye) |
| **Outline** | Emas `#FFD700`, tebal 3px |
| **Efek** | Shimmer/kilap ringan pada outline, shadow `0 4px 12px #00000030` |
| **Teks** | "Penjelajah Pantai" — Baloo 2 Bold, 11px, warna `#1B6CA8` di bawah lencana |

---

#### 🏅 Lencana 2: "Penjaga Kalender"
**Misi:** Hutan Kalender (Misi 2)

| Properti | Detail |
|---|---|
| **Bentuk** | Perisai berbentuk daun dengan ujung runcing bawah |
| **Ikon Tengah** | Kalender kecil bergaya kayu dengan daun hijau menghias pojoknya |
| **Warna Utama Lencana** | `#4CAF50` (hijau daun) |
| **Warna Aksen** | `#FFEB3B` (kuning), `#795548` (coklat kayu) |
| **Outline** | Emas `#FFD700`, tebal 3px |
| **Efek** | Gradient hijau tua → muda dari bawah ke atas |
| **Teks** | "Penjaga Kalender" — Baloo 2 Bold, 11px, warna `#1B5E20` |

---

#### 🏅 Lencana 3: "Pecinta Hikmah"
**Misi:** Gua Hadis (Misi 3)

| Properti | Detail |
|---|---|
| **Bentuk** | Bulat sempurna seperti stempel kuno |
| **Ikon Tengah** | Gulungan perkamen terbuka dengan bintang di atas gulungan |
| **Warna Utama Lencana** | `#7B1FA2` (ungu) |
| **Warna Aksen** | `#FFC107` (emas lentera), `#F3E5F5` (ungu pucat) |
| **Outline** | Emas `#FFD700`, tebal 3px dengan titik-titik dekoratif di keliling |
| **Efek** | Inner glow warna ungu muda |
| **Teks** | "Pecinta Hikmah" — Baloo 2 Bold, 11px, warna `#4A148C` |

---

#### 🏅 Lencana 4: "Duta Inspirasi"
**Misi:** Desa Inspirasi (Misi 4)

| Properti | Detail |
|---|---|
| **Bentuk** | Bintang 5 sudut bergaya klasik |
| **Ikon Tengah** | Dua tangan berjabat atau hati kecil berwarna merah di tengah bintang |
| **Warna Utama Lencana** | `#FF6F00` (oranye desa) |
| **Warna Aksen** | `#E64A19` (merah bata), `#FFE0B2` (krem hangat) |
| **Outline** | Emas `#FFD700`, tebal 3px |
| **Efek** | Warm glow oranye, shadow hangat |
| **Teks** | "Duta Inspirasi" — Baloo 2 Bold, 11px, warna `#BF360C` |

---

#### 🏅 Lencana 5: "Penakluk Puncak"
**Misi:** Puncak Kebiasaan (Misi 5) — Lencana Mahkota

| Properti | Detail |
|---|---|
| **Bentuk** | Mahkota raja bergaya kartun (crown), paling besar di antara semua lencana |
| **Ikon Tengah** | Mahkota emas dengan bintang merah di puncak tengah |
| **Warna Utama Lencana** | `#1565C0` (biru puncak) |
| **Warna Aksen** | `#FFD700` (emas mahkota), `#E8EAF6` (putih biru pucat) |
| **Outline** | Emas tebal `#FFD700`, 4px, dengan efek kilap animasi |
| **Efek** | Sparkle animasi (bintang kecil berkilau mengelilingi lencana saat baru didapat) |
| **Teks** | "Penakluk Puncak" — Baloo 2 Bold, 11px, warna `#1565C0` |
| **Khusus** | Ini lencana terbesar dan paling prestisius — tampil lebih besar 1.3× dari lencana lain |

---

### 6.2 Panduan Ikon Umum

| Kategori Ikon | Gaya | Ukuran | Warna |
|---|---|---|---|
| Ikon Navigasi | Outline 2px, ujung membulat | 24×24px | `#636E72` aktif: `#FFD93D` |
| Ikon Aksi (klik/tap) | Filled, rounded | 20×20px | Menyesuaikan tombol |
| Ikon Status (benar/salah) | Filled bulat | 32×32px | ✓ `#2ECC71`, ✗ `#E74C3C` |
| Ikon Lencana (terkunci) | Silhouette gelap dengan gembok | 48×48px | `#B2BEC3` + gembok `#636E72` |

---

## 7. Panduan Animasi dan Transisi

### 7.1 Prinsip Animasi

> [!NOTE]
> Semua animasi mengutamakan **kenyamanan pengguna anak**. Hindari flash rate tinggi dan gerakan terlalu cepat yang bisa membuat pusing.

| Prinsip | Penerapan |
|---|---|
| **Purposeful** | Animasi hanya jika punya fungsi komunikatif |
| **Smooth** | Gunakan easing CSS `cubic-bezier` alih-alih `linear` |
| **Responsive** | Animasi merespons input pengguna dalam < 100ms |
| **Delightful** | Momen perayaan (benar, lencana) boleh lebih dramatis |

---

### 7.2 Transisi Layar

| Jenis Transisi | Digunakan Pada | Durasi | Easing |
|---|---|---|---|
| **Slide kanan→kiri** | Pindah ke halaman berikutnya | 350ms | `ease-in-out` |
| **Slide kiri→kanan** | Kembali ke halaman sebelumnya | 350ms | `ease-in-out` |
| **Fade dissolve** | Masuk ke lokasi baru (awal misi) | 500ms | `ease-in` |
| **Scale up + fade** | Overlay/popup muncul | 250ms | `cubic-bezier(0.34, 1.56, 0.64, 1)` (spring) |
| **Scale down + fade** | Overlay/popup tutup | 200ms | `ease-in` |
| **Zoom in dramatic** | Cover screen → Layar identitas | 800ms | `ease-out` |

---

### 7.3 Animasi Elemen UI

| Elemen | Animasi | Durasi | Easing | Loop |
|---|---|---|---|---|
| **Tombol hover** | Scale 1.05 + shadow intensify | 150ms | `ease-out` | — |
| **Tombol klik** | Scale 0.97 | 80ms | `linear` | — |
| **Karakter Kaka idle** | Napas ringan (scale 1.0 → 1.02 → 1.0, vertikal) | 2000ms | `ease-in-out` | ∞ |
| **Lencana baru dapat** | Scale 0 → 1.3 → 1.0 + sparkle + suara | 800ms | `cubic-bezier(0.34, 1.56, 0.64, 1)` | — |
| **Progress bar isi** | Width animasi kiri ke kanan | 600ms | `ease-out` | — |
| **Opsi soal dipilih** | Scale 1.0 → 1.03 → 1.0 + warna berubah | 200ms | `ease-out` | — |
| **Jawaban benar** | Bounce + warna hijau + partikel ✓ | 500ms | `cubic-bezier(0.34, 1.56, 0.64, 1)` | — |
| **Jawaban salah** | Shake horizontal (±6px, 3×) + warna merah | 300ms | `ease-out` | — |
| **Ombak pantai** | Loop gerakan sinusoidal | 3000ms | `ease-in-out` | ∞ |
| **Daun hutan** | Oscillasi ringan ±3° | 4000ms | `ease-in-out` | ∞ |
| **Lentera gua** | Swing ±5° | 2500ms | `ease-in-out` | ∞ |
| **Peta hover** | Glow kuning ringan | 200ms | `ease-out` | — |
| **Pin peta aktif** | Bounce kecil terus-menerus | 1000ms | `ease-in-out` | ∞ |

---

### 7.4 Animasi Perayaan

Digunakan saat misi selesai atau lencana didapat:

1. **Confetti Burst** — partikel warna-warni dari tengah layar, 60 partikel, durasi 1500ms
2. **Star Shower** — bintang emas jatuh dari atas, 20 bintang, durasi 2000ms
3. **Glow Pulse** — outline lencana berdenyut 3×, interval 400ms
4. **Sound Trigger** — efek suara "fanfare" pendek saat animasi dimulai (audio opsional)

---

## 8. Checklist Konsistensi Visual

### 8.1 Warna & Tema

- [ ] Semua teks body menggunakan `#2D3436` atau `#FFFFFF` (kontras minimum 4.5:1)
- [ ] Warna aksen per lokasi tidak digunakan di lokasi lain
- [ ] Tombol aksi utama selalu kuning `#FFD93D` di semua layar
- [ ] Tombol konfirmasi selalu hijau `#2ECC71`
- [ ] Background overlay selalu `#1A1A1A` dengan opacity 50%

### 8.2 Tipografi

- [ ] Judul halaman selalu Nunito Bold ≥24px
- [ ] Teks narasi/materi selalu Poppins Regular 14–16px
- [ ] Label tombol selalu Poppins SemiBold 14–16px
- [ ] Tidak ada lebih dari 3 ukuran font berbeda dalam satu layar
- [ ] Tidak ada font selain Nunito, Poppins, dan Baloo 2

### 8.3 Komponen

- [ ] Semua kartu materi border-radius ≥16px
- [ ] Semua tombol border-radius ≥12px
- [ ] Semua shadow menggunakan nilai yang telah ditetapkan (tidak improvisasi)
- [ ] Ikon navigasi selalu ukuran 24×24px
- [ ] Lencana selalu ditampilkan pada ukuran minimum 64×64px

### 8.4 Karakter Kaka

- [ ] Outline karakter selalu hitam `#1A1A1A`, tebal 3px
- [ ] Warna kulit selalu `#C68642` (tidak berubah antar layar)
- [ ] Warna baju selalu teal `#00897B` dengan detail putih
- [ ] Tas selalu berwarna coklat `#8D6E63` dengan gesper kuning
- [ ] Ukuran Kaka proporsional: tinggi ≈ 40–50% tinggi layar

### 8.5 Animasi

- [ ] Semua transisi layar tidak melebihi 500ms
- [ ] Animasi idle karakter selalu loop mulus tanpa jitter
- [ ] Animasi feedback (benar/salah) selalu menggunakan easing yang ditetapkan
- [ ] Tidak ada animasi yang berjalan terus saat layar tidak aktif (pause on hidden)

### 8.6 Aksesibilitas

- [ ] Semua teks minimal 12px
- [ ] Semua tombol minimal 44×44px (touch target)
- [ ] Semua elemen interaktif punya state visual yang jelas
- [ ] Tidak mengandalkan warna saja sebagai satu-satunya pembeda informasi

---

*Dokumen ini adalah panduan hidup — perbarui setiap ada keputusan desain baru selama produksi.*

**Versi:** 1.0 | **Dibuat oleh:** Tim Desain Visual | **Tanggal:** November 2026
