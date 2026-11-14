/**
 * EKSPEDISI PUASA SUNAH – Petualangan di Pulau Hikmah
 * Basis Data Pembelajaran dan Bank Soal Terpadu
 * 100% Bebas Dependensi Eksternal (Offline-Ready)
 */

window.MPI_DATA = {
  meta: {
    title: "Ekspedisi Puasa Sunah – Petualangan di Pulau Hikmah",
    target: "Kelas V–VI SD (Fase C)",
    subject: "Pendidikan Agama Islam dan Budi Pekerti",
    bab: "Bab 9: Mengamalkan Puasa Sunah",
    version: "1.0.0"
  },

  // DATA MISI UTAMA
  missions: [
    {
      id: 1,
      code: "misi-1",
      title: "Pantai Pengetahuan",
      subtitle: "Hakikat & Perbedaan Puasa",
      badgeId: "lencana-1-pantai.png",
      badgeName: "Lencana Pengetahuan",
      bgImage: "assets/backgrounds/bg-pantai.png",
      desc: "Pelajari pengertian puasa secara bahasa dan syariat, hakikat puasa sunah, serta perbedaannya dengan puasa wajib.",
      kakaGreeting: "Assalamu'alaikum sahabat penjelajah! Di Pantai Pengetahuan yang sejuk ini, mari kita cari tahu rahasia di balik indahnya puasa sunah!",
      objectives: [
        "Menjelaskan pengertian puasa secara bahasa dan istilah",
        "Menjelaskan pengertian puasa sunah dan hukumnya",
        "Membedakan antara puasa wajib dan puasa sunah"
      ]
    },
    {
      id: 2,
      code: "misi-2",
      title: "Hutan Kalender",
      subtitle: "Jenis & Waktu Puasa Sunah",
      badgeId: "lencana-2-hutan.png",
      badgeName: "Lencana Kalender",
      bgImage: "assets/backgrounds/bg-hutan.png",
      desc: "Telusuri rimbunnya Hutan Kalender untuk mengenal 8 jenis puasa sunah yang diajarkan Rasulullah saw. beserta jadwal pelaksanaannya.",
      kakaGreeting: "Wah, pohon-pohon di Hutan Kalender ini menyimpan jadwal puasa sunah! Ayo temukan waktu-waktu yang dicintai Rasulullah saw.!",
      objectives: [
        "Menyebutkan 8 jenis puasa sunah",
        "Menentukan waktu pelaksanaan setiap puasa sunah",
        "Mengelompokkan puasa sunah berdasarkan kalender Hijriah"
      ]
    },
    {
      id: 3,
      code: "misi-3",
      title: "Gua Hadis",
      subtitle: "Ketentuan, Dalil & Keutamaan",
      badgeId: "lencana-3-gua.png",
      badgeName: "Lencana Hadis",
      bgImage: "assets/backgrounds/bg-gua.png",
      desc: "Nyalakan lentera di dalam Gua Hadis untuk membaca ketentuan berniat, dalil hadis terpercaya, dan keutamaan berpuasa sunah.",
      kakaGreeting: "Masya Allah, dinding gua ini berhias ukiran emas penuh hikmah! Mari kita pelajari ketentuan niat dan keutamaan puasa sunah!",
      objectives: [
        "Memahami kelonggaran waktu niat pada puasa sunah",
        "Mengetahui dalil anjuran puasa sunah",
        "Menyebutkan keutamaan dan manfaat puasa sunah bagi diri"
      ]
    },
    {
      id: 4,
      code: "misi-4",
      title: "Desa Inspirasi",
      subtitle: "Nilai Sikap, Toleransi & Pengamalan",
      badgeId: "lencana-4-desa.png",
      badgeName: "Lencana Inspirasi",
      bgImage: "assets/backgrounds/bg-desa.png",
      desc: "Berkunjung ke Desa Inspirasi untuk meneladani sikap ikhlas, jujur, menghormati teman, dan beribadah sesuai kemampuan tanpa bersikap riya'.",
      kakaGreeting: "Warga Desa Inspirasi hidup rukun dan saling menghormati! Ayo bantu mereka memecahkan persoalan sehari-hari dengan sikap yang bijak!",
      objectives: [
        "Menerapkan nilai keikhlasan dan kejujuran",
        "Menghargai teman yang tidak berpuasa tanpa memaksa",
        "Menghindari sifat riya' (pamer ibadah)"
      ]
    },
    {
      id: 5,
      code: "misi-5",
      title: "Puncak Kebiasaan",
      subtitle: "Evaluasi Komprehensif & Refleksi",
      badgeId: "lencana-5-puncak.png",
      badgeName: "Lencana Kebiasaan",
      bgImage: "assets/backgrounds/bg-puncak.png",
      desc: "Uji seluruh ilmu yang telah kamu kumpulkan di puncak tertinggi Pulau Hikmah melalui 15 tantangan komprehensif!",
      kakaGreeting: "Alhamdulillah kita telah tiba di Puncak Kebiasaan! Tunjukkan kemampuan terbaikmu dalam kuis akhir penjelajah sejati!",
      objectives: [
        "Mengukur pemahaman menyeluruh materi puasa sunah",
        "Meraih Lencana Mahkota Kebiasaan",
        "Meneguhkan tekad beribadah dalam kehidupan nyata"
      ]
    }
  ],

  // MATERI PEMBELAJARAN LENGKAP PER MISI
  materials: {
    misi1: {
      tabs: [
        {
          id: "m1-t1",
          title: "Pengertian Puasa",
          icon: "📖",
          content: `
            <div class="materi-card">
              <h4>Apa Arti Puasa?</h4>
              <p>Puasa dalam bahasa Arab disebut <strong>shaum</strong> atau <strong>siyam</strong>, yang artinya <strong>menahan diri</strong>.</p>
              <div class="highlight-box">
                <p><strong>Secara Syariat:</strong> Puasa adalah menahan diri dari segala hal yang membatalkan puasa (seperti makan, minum, dan hawa nafsu) mulai dari <em>terbit fajar (waktu Subuh)</em> hingga <em>terbenam matahari (waktu Magrib)</em>, diawali dengan <strong>niat</strong> ikhlas karena Allah Swt.</p>
              </div>
              <p>Jadi, puasa bukan sekadar menahan lapar dan dahaga, tetapi juga menahan lisan dari berkata dusta, menjaga mata, telinga, serta hati kita dari perbuatan tercela.</p>
            </div>
          `
        },
        {
          id: "m1-t2",
          title: "Puasa Sunah",
          icon: "✨",
          content: `
            <div class="materi-card">
              <h4>Mengenal Puasa Sunah</h4>
              <p><strong>Puasa Sunah</strong> adalah puasa yang sangat dianjurkan oleh Nabi Muhammad saw., namun tidak bersifat wajib.</p>
              <div class="formula-box">
                <div class="formula-item good">
                  <span class="badge-icon">👍</span>
                  <strong>Dikerjakan:</strong> Mendapat pahala dan cinta dari Allah Swt.
                </div>
                <div class="formula-item neutral">
                  <span class="badge-icon">👌</span>
                  <strong>Ditinggalkan:</strong> Tidak berdosa dan tidak mendapat sanksi.
                </div>
              </div>
              <p>Puasa sunah adalah "bonus kebaikan" sebagai tabungan amal saleh dan penyempurna kekurangan dalam ibadah wajib kita.</p>
            </div>
          `
        },
        {
          id: "m1-t3",
          title: "Wajib vs Sunah",
          icon: "⚖️",
          content: `
            <div class="materi-card">
              <h4>Perbedaan Puasa Wajib dan Puasa Sunah</h4>
              <table class="materi-table">
                <thead>
                  <tr>
                    <th>Aspek</th>
                    <th>Puasa Wajib (Ramadan)</th>
                    <th>Puasa Sunah</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Hukum</strong></td>
                    <td>Fardu 'ain (wajib atas setiap muslim yang baligh & mampu)</td>
                    <td>Sunah (dianjurkan bagi yang mampu dan bersedia)</td>
                  </tr>
                  <tr>
                    <td><strong>Waktu Niat</strong></td>
                    <td>Harus berniat di malam hari sebelum terbit fajar</td>
                    <td>Boleh berniat di pagi hari sebelum waktu Zuhur (jika belum makan/minum)</td>
                  </tr>
                  <tr>
                    <td><strong>Jika Ditinggalkan</strong></td>
                    <td>Berdosa & wajib mengganti (qada) di hari lain</td>
                    <td>Tidak berdosa dan tidak perlu qada</td>
                  </tr>
                  <tr>
                    <td><strong>Waktu Pelaksanaan</strong></td>
                    <td>Hanya pada bulan Ramadan</td>
                    <td>Pada hari-hari tertentu di luar Ramadan</td>
                  </tr>
                </tbody>
              </table>
            </div>
          `
        }
      ]
    },

    misi2: {
      cards: [
        {
          name: "Puasa Syawal",
          icon: "🌙",
          waktu: "6 Hari di bulan Syawal (setelah Idulfitri)",
          keutamaan: "Pahalanya seperti berpuasa setahun penuh jika digabung dengan puasa Ramadan.",
          detail: "Dapat dikerjakan berturut-turut atau berselang-seling selama bulan Syawal (mulai 2 Syawal ke atas)."
        },
        {
          name: "Puasa Senin & Kamis",
          icon: "📅",
          waktu: "Setiap hari Senin dan hari Kamis",
          keutamaan: "Hari di mana amalan manusia dilaporkan kepada Allah Swt., dan Rasulullah saw. lahir pada hari Senin.",
          detail: "Puasa mingguan yang rutin dan sangat dicintai Nabi Muhammad saw."
        },
        {
          name: "Puasa Arafah",
          icon: "🕋",
          waktu: "9 Zulhijjah (saat jamaah haji wukuf di Arafah)",
          keutamaan: "Dapat menghapuskan dosa setahun yang lalu dan setahun yang akan datang.",
          detail: "Dikhususkan bagi muslim yang tidak sedang menunaikan ibadah haji."
        },
        {
          name: "Puasa Asyura",
          icon: "⭐",
          waktu: "10 Muharam",
          keutamaan: "Dapat menghapuskan dosa setahun yang lalu.",
          detail: "Hari bersejarah diselamatkannya Nabi Musa as. dari kejaran Firaun."
        },
        {
          name: "Puasa Tasu'a",
          icon: "🌅",
          waktu: "9 Muharam (sehari sebelum Asyura)",
          keutamaan: "Menyelisihi tradisi kaum terdahulu atas anjuran Rasulullah saw.",
          detail: "Sangat dianjurkan dirangkai dengan puasa tanggal 10 Muharam (Asyura)."
        },
        {
          name: "Puasa Ayyamul Bidh",
          icon: "🌕",
          waktu: "Tanggal 13, 14, dan 15 setiap bulan Hijriah",
          keutamaan: "Disebut puasa 'hari-hari putih' saat bulan purnama bersinar terang benderang.",
          detail: "Pahalanya dilipatgandakan bagaikan berpuasa sepanjang tahun."
        },
        {
          name: "Puasa Nabi Daud",
          icon: "⚖️",
          waktu: "Sehari berpuasa, sehari berbuka (selang-seling)",
          keutamaan: "Puasa sunah yang paling dicintai dan disukai oleh Allah Swt.",
          detail: "Tingkatan puasa sunah tertinggi, melatih ketahanan fisik dan keistiqamahan spiritual."
        },
        {
          name: "Puasa Syakban",
          icon: "🌸",
          waktu: "Bulan Syakban (sebelum Ramadan)",
          keutamaan: "Persiapan rohani dan fisik menyambut hadirnya bulan suci Ramadan.",
          detail: "Rasulullah saw. memperbanyak puasa pada bulan ini dibanding bulan lainnya selain Ramadan."
        }
      ]
    },

    misi3: {
      topics: [
        {
          title: "Kelonggaran Berniat Puasa Sunah",
          icon: "🌅",
          body: `
            <p>Berbeda dengan puasa Ramadan yang mewajibkan niat sebelum azan Subuh (di malam hari), <strong>puasa sunah memiliki kelonggaran istimewa:</strong></p>
            <ul>
              <li>Kita diperbolehkan berniat puasa sunah di pagi hari (setelah Subuh bahkan menjelang Zuhur).</li>
              <li><strong>Syaratnya:</strong> Sejak fajar menyingsing, kita belum makan, minum, atau melakukan hal-hal yang membatalkan puasa.</li>
            </ul>
            <p class="hadis-source"><em>Dasar Hukum: Berdasarkan riwayat sahih ketika Rasulullah saw. pulang dan bertanya makanan kepada Aisyah r.a., saat tidak ada makanan, beliau bersabda: "Kalau begitu, aku berpuasa hari ini."</em></p>
          `
        },
        {
          title: "Keutamaan Agung Puasa Sunah",
          icon: "💎",
          body: `
            <div class="fadhilah-grid">
              <div class="fadhilah-item">
                <span class="f-num">1</span>
                <h5>Penyempurna Ibadah Wajib</h5>
                <p>Amalan sunah akan menutupi dan menyempurnakan kekurangan ibadah wajib kita di hari penghisaban.</p>
              </div>
              <div class="fadhilah-item">
                <span class="f-num">2</span>
                <h5>Mendapat Perlindungan & Pengampunan</h5>
                <p>Puasa adalah perisai dari godaan setan dan perbuatan buruk, serta menghapuskan dosa-dosa kecil.</p>
              </div>
              <div class="fadhilah-item">
                <span class="f-num">3</span>
                <h5>Pintu Khusus Ar-Rayyan</h5>
                <p>Di surga kelak tersedia pintu megah bernama <em>Ar-Rayyan</em> yang dikhususkan bagi orang-orang yang gemar berpuasa.</p>
              </div>
              <div class="fadhilah-item">
                <span class="f-num">4</span>
                <h5>Melatih Kesabaran & Kesehatan</h5>
                <p>Memberi waktu istirahat bagi organ pencernaan dan melatih jiwa agar senantiasa bersyukur atas rezeki Allah.</p>
              </div>
            </div>
          `
        }
      ]
    },

    misi4: {
      values: [
        {
          title: "1. Keikhlasan & Kejujuran",
          desc: "Berpuasa sunah semata-mata mengharap rida Allah Swt., bukan untuk dipuji teman, guru, atau orang tua.",
          example: "Tidak memamerkan rasa lapar di media sosial atau mengeluh di hadapan orang lain."
        },
        {
          title: "2. Menghormati Teman Tanpa Memaksa",
          desc: "Karena puasa sunah tidak wajib, kita tidak boleh mencela atau memaksa teman yang tidak berpuasa.",
          example: "Tetap ramah dan ceria bermain bersama teman yang sedang tidak berpuasa."
        },
        {
          title: "3. Mengamalkan Sesuai Kemampuan",
          desc: "Islam adalah agama yang mudah. Mulailah dari yang termudah, misalnya puasa Senin atau puasa Arafah setahun sekali.",
          example: "Jika sedang sakit atau ujian fisik berat, tidak memaksakan diri agar kesehatan tetap terjaga."
        },
        {
          title: "4. Empati & Gemar Berbagi",
          desc: "Merasakan lapar melatih kepedulian sosial kita kepada orang yang kurang mampu.",
          example: "Menyisihkan uang saku untuk berbagi makanan berbuka kepada sesama yang membutuhkan."
        }
      ]
    },

    misi5: {
      summary: {
        title: "Puncak Kebiasaan: Rangkuman Hikmah Puasa Sunah",
        subtitle: "Intisari Seluruh Pelajaran di Pulau Hikmah",
        principles: [
          {
            number: 1,
            title: "Hakikat Ibadah Puasa",
            text: "Shaum berarti menahan diri dari pembatal puasa dan hawa nafsu sejak terbit fajar hingga terbenam matahari semata-mata karena Allah Swt."
          },
          {
            number: 2,
            title: "Kelonggaran Niat Puasa Sunah",
            text: "Niat puasa sunah boleh dilakukan di pagi hari sebelum waktu Zuhur asalkan belum makan, minum, atau melakukan pembatal puasa sejak fajar."
          },
          {
            number: 3,
            title: "8 Ragam Waktu Puasa Sunah",
            text: "Meliputi puasa mingguan (Senin & Kamis), bulanan (Ayyamul Bidh 13, 14, 15), tahunan (Syawal, Arafah, Asyura, Tasu'a, Syakban), dan puasa selang-seling (Nabi Daud as.)."
          },
          {
            number: 4,
            title: "Keutamaan & Pintu Ar-Rayyan",
            text: "Menyempurnakan kekurangan ibadah wajib, melebur dosa, dan membuka pintu surga khusus Ar-Rayyan."
          },
          {
            number: 5,
            title: "Akhlak Mulia & Menghindari Riya'",
            text: "Ikhlas dalam beribadah tanpa mencari pujian manusia, menghargai sesama yang belum berpuasa, dan mengamalkan sesuai kemampuan diri."
          }
        ],
        dua: {
          title: "Doa Berbuka Puasa Sesuai Sunah Rasulullah saw.",
          arabic: "ذَهَبَ الظَّمَأُ وَابْتَلَّتِ الْعُرُوقُ، وَثَبَتَ الأَجْرُ إِنْ شَاءَ اللهُ",
          latin: "Dzahabadz-dzama'u wabtallatil 'uruuqu wa tsabatal ajru in syaa-Allah",
          meaning: "Telah hilang rasa haus, telah basah urat-urat, dan telah pasti pahala diperoleh, insya Allah. (HR. Abu Dawud)"
        }
      }
    }
  },

  // AKTIVITAS & BANK SOAL PER MISI
  activities: {
    misi1: {
      pg: [
        {
          question: "Secara bahasa Arab, puasa disebut 'shaum' yang memiliki arti...",
          options: ["Menahan diri", "Membersihkan jiwa", "Mengingat Allah", "Berhemat makanan"],
          answer: 0,
          explanation: "Secara etimologi bahasa Arab, shaum atau siyam berarti imsak (menahan diri dari sesuatu)."
        },
        {
          question: "Hukum mengerjakan amalan sunah, seperti puasa sunah, adalah...",
          options: [
            "Wajib dilakukan seluruh muslim",
            "Dikerjakan berpahala, ditinggalkan tidak berdosa",
            "Berdosa jika sengaja ditinggalkan",
            "Harus diganti di hari lain bila terlewat"
          ],
          answer: 1,
          explanation: "Sunah artinya perkara yang dianjurkan: apabila dikerjakan mendapat pahala, jika ditinggalkan tidak mendapat dosa."
        },
        {
          question: "Manakah perbedaan waktu berniat yang benar antara puasa Ramadan dan puasa sunah?",
          options: [
            "Puasa sunah harus berniat 3 hari sebelumnya",
            "Puasa Ramadan boleh berniat saat siang hari",
            "Puasa sunah boleh berniat di pagi hari sebelum Zuhur asalkan belum makan/minum",
            "Kedua jenis puasa harus berniat persis saat azan Magrib"
          ],
          answer: 2,
          explanation: "Puasa sunah memiliki kelonggaran niat boleh dilakukan di pagi hari jika belum makan/minum/melakukan pembatal puasa sejak fajar."
        }
      ],
      trueFalse: [
        {
          statement: "Orang yang tidak berpuasa sunah akan mendapatkan dosa besar.",
          isTrue: false,
          explanation: "Salah. Puasa sunah bersifat anjuran, sehingga meninggalkannya tidak berdosa."
        },
        {
          statement: "Waktu mulai berpuasa adalah sejak terbit fajar (waktu Subuh) hingga terbenam matahari (waktu Magrib).",
          isTrue: true,
          explanation: "Benar. Batasan puasa dalam Islam adalah dari terbit fajar shadiq hingga matahari terbenam."
        },
        {
          statement: "Puasa sunah bertujuan sebagai penyempurna kekurangan amalan ibadah wajib kita.",
          isTrue: true,
          explanation: "Benar. Amalan sunah di hari akhirat akan melengkapi kekurangan amal wajib."
        }
      ],
      matching: [
        { term: "Shaum", match: "Menahan diri" },
        { term: "Fardu 'Ain", match: "Puasa Ramadan" },
        { term: "Sunah", match: "Dikerjakan berpahala, ditinggalkan tidak berdosa" },
        { term: "Waktu Magrib", match: "Saat berbuka puasa" },
        { term: "Fajar Shadiq", match: "Awal dimulainya puasa" }
      ]
    },

    misi2: {
      grouping: {
        title: "Kelompokkan Puasa Sunah Menurut Siklus Waktunya",
        categories: ["Mingguan", "Bulanan", "Tahunan"],
        items: [
          { text: "Puasa Senin & Kamis", category: "Mingguan" },
          { text: "Puasa Ayyamul Bidh (13, 14, 15)", category: "Bulanan" },
          { text: "Puasa 6 Hari Syawal", category: "Tahunan" },
          { text: "Puasa Arafah (9 Zulhijjah)", category: "Tahunan" },
          { text: "Puasa Asyura (10 Muharam)", category: "Tahunan" },
          { text: "Puasa Tasu'a (9 Muharam)", category: "Tahunan" }
        ]
      },
      calendarMatching: [
        { puasa: "Puasa Syawal", waktu: "Bulan Syawal (setelah Idulfitri)" },
        { puasa: "Puasa Arafah", waktu: "9 Zulhijjah" },
        { puasa: "Puasa Asyura", waktu: "10 Muharam" },
        { puasa: "Puasa Tasu'a", waktu: "9 Muharam" },
        { puasa: "Puasa Ayyamul Bidh", waktu: "Tanggal 13, 14, 15 tiap bulan Hijriah" }
      ]
    },

    misi3: {
      pg: [
        {
          question: "Nama pintu surga khusus yang disediakan bagi orang-orang yang gemar berpuasa adalah...",
          options: ["Babussalam", "Ar-Rayyan", "Firdaus", "Al-Kautsar"],
          answer: 1,
          explanation: "Rasulullah saw. bersabda bahwa di surga terdapat pintu bernama Ar-Rayyan khusus bagi orang yang berpuasa."
        },
        {
          question: "Puasa sunah yang paling dicintai oleh Allah Swt. dan dilakukan secara selang-seling (sehari puasa, sehari tidak) adalah puasa...",
          options: ["Nabi Daud as.", "Nabi Ibrahim as.", "Nabi Musa as.", "Nabi Yunus as."],
          answer: 0,
          explanation: "Puasa Nabi Daud as. adalah sebaik-baik puasa sunah: sehari berpuasa dan sehari berbuka."
        },
        {
          question: "Kapan seseorang boleh berniat puasa sunah di pagi hari?",
          options: [
            "Meskipun sudah sarapan pagi",
            "Hanya jika cuaca sedang mendung",
            "Asalkan belum makan, minum, atau berbuat hal pembatal puasa sejak fajar",
            "Setelah azan Asar berkumandang"
          ],
          answer: 2,
          explanation: "Niat puasa sunah di pagi hari sah jika orang tersebut belum mencicipi makanan/minuman sejak Subuh."
        }
      ],
      matching: [
        { puasa: "Puasa Arafah", keutamaan: "Menghapus dosa setahun lalu dan setahun mendatang" },
        { puasa: "Puasa 6 Hari Syawal", keutamaan: "Pahalanya seperti berpuasa setahun penuh" },
        { puasa: "Puasa Asyura (10 Muharam)", keutamaan: "Menghapuskan dosa satu tahun yang lalu" },
        { puasa: "Puasa Nabi Daud as.", keutamaan: "Puasa sunah yang paling dicintai Allah Swt." }
      ]
    },

    misi4: {
      scenarios: [
        {
          id: "s1",
          situation: "Fauzan sedang menjalankan puasa sunah hari Senin. Di sekolah, teman sebangkunya, Budi, mengajak membeli es campur di kantin saat istirahat.",
          question: "Tindakan apa yang paling bijak dan santun dilakukan Fauzan?",
          options: [
            "Memarahi Budi karena tidak menghargai orang yang berpuasa",
            "Menolak dengan sopan sambil tersenyum dan tetap menemani Budi ke kantin jika berkenan",
            "Membatalkan puasa sunahnya karena merasa tidak enak pada Budi",
            "Menyindir Budi bahwa makan di kantin adalah perbuatan sia-sia"
          ],
          answer: 1,
          explanation: "Sebagai muslim yang santun, kita menolak ajakan makan dengan lembut tanpa memarahi atau merasa lebih mulia dari teman."
        },
        {
          id: "s2",
          situation: "Aisyah berpuasa Ayyamul Bidh di rumah. Ia ingin mengunggah foto wajah lemasnya ke media sosial dengan tulisan: 'Lagi lemas banget nih puasa sunah demi pahala!'.",
          question: "Bagaimanakah sikap yang semestinya diambil Aisyah?",
          options: [
            "Menghapus niat mengunggah foto agar ibadahnya tetap ikhlas dan terhindar dari sifat riya' (pamer)",
            "Tetap mengunggahnya agar mendapat banyak pujian dan like dari teman-teman",
            "Menyuruh seluruh pengikutnya untuk ikut berpuasa seperti dirinya",
            "Mengunggah foto makanan lezat sebagai gantinya"
          ],
          answer: 0,
          explanation: "Ibadah sunah sebaiknya dirahasiakan antara hamba dengan Allah Swt. agar terbebas dari riya' (ingin dipuji orang lain)."
        },
        {
          id: "s3",
          situation: "Rafi ingin berpuasa Nabi Daud (sehari puasa, sehari tidak), padahal badannya sedang kurang fit dan dokter menyarankannya minum obat secara teratur.",
          question: "Bagaimanakah tindakan yang sesuai dengan tuntunan Islam?",
          options: [
            "Tetap memaksakan diri puasa karena puasa Daud sangat dicintai Allah",
            "Mengutamakan kesembuhan diri dan meminum obat, karena beribadah harus sesuai kemampuan",
            "Berhenti beribadah untuk selama-lamanya",
            "Berpuasa setengah hari saja lalu membatalkannya diam-diam"
          ],
          answer: 1,
          explanation: "Islam tidak membebani hamba-Nya di luar batas kemampuan. Menjaga kesehatan fisik adalah kewajiban yang utama."
        }
      ]
    },

    misi5: {
      // 15 SOAL KUIS AKHIR KOMPREHENSIF
      quiz: [
        {
          q: "1. Kata 'shaum' dalam bahasa Arab secara bahasa berarti...",
          opts: ["Menahan diri", "Membersihkan diri", "Makan sahur", "Berdiam diri"],
          ans: 0,
          exp: "Secara bahasa, shaum bermakna menahan diri dari sesuatu."
        },
        {
          q: "2. Hukum mengerjakan puasa sunah adalah...",
          opts: [
            "Wajib bagi setiap orang tua",
            "Dikerjakan mendapat pahala, ditinggalkan tidak berdosa",
            "Ditinggalkan berdosa besar",
            "Wajib diqada bila terlewat"
          ],
          ans: 1,
          exp: "Amalan sunah mendatangkan pahala bila dikerjakan dan tidak membuahkan dosa bila ditinggalkan."
        },
        {
          q: "3. Puasa sunah enam hari yang dikerjakan setelah bulan Ramadan adalah puasa...",
          opts: ["Puasa Syawal", "Puasa Rajab", "Puasa Syakban", "Puasa Arafah"],
          ans: 0,
          exp: "Puasa 6 hari di bulan Syawal memiliki keutamaan pahala seperti berpuasa setahun penuh."
        },
        {
          q: "4. Puasa Arafah dilaksanakan pada tanggal...",
          opts: ["10 Muharam", "9 Zulhijjah", "1 Syawal", "15 Syakban"],
          ans: 1,
          exp: "Puasa Arafah dilaksanakan pada 9 Zulhijjah bertepatan dengan wukufnya jamaah haji di Padang Arafah."
        },
        {
          q: "5. Keutamaan puasa hari Arafah bagi orang yang tidak berhaji adalah...",
          opts: [
            "Menghapus dosa setahun lalu dan setahun yang akan datang",
            "Menjadi kaya raya seketika",
            "Bebas dari kewajiban salat lima waktu",
            "Pasti langsung berangkat haji tahun depan"
          ],
          ans: 0,
          exp: "Hadis sahih menyebutkan puasa Arafah menghapuskan dosa setahun lalu dan setahun yang akan datang."
        },
        {
          q: "6. Puasa Asyura diperingati setiap tanggal...",
          opts: ["9 Muharam", "10 Muharam", "12 Rabiulawal", "27 Rajab"],
          ans: 1,
          exp: "Asyura berasal dari kata 'asyarah' yang berarti sepuluh, yaitu tanggal 10 Muharam."
        },
        {
          q: "7. Hari yang dianjurkan untuk berpuasa Tasu'a sebelum hari Asyura adalah tanggal...",
          opts: ["8 Muharam", "9 Muharam", "11 Muharam", "1 Muharam"],
          ans: 1,
          exp: "Tasu'a berasal dari kata 'tis'ah' yang artinya sembilan (9 Muharam)."
        },
        {
          q: "8. Puasa Ayyamul Bidh dilaksanakan pada pertengahan bulan Hijriah, yaitu tanggal...",
          opts: ["1, 2, 3", "7, 8, 9", "13, 14, 15", "28, 29, 30"],
          ans: 2,
          exp: "Ayyamul Bidh (hari-hari putih) dikerjakan pada 13, 14, dan 15 saat bulan purnama bersinar terang."
        },
        {
          q: "9. Pola pelaksanaan puasa Nabi Daud as. adalah...",
          opts: [
            "Puasa sebulan penuh tanpa jeda",
            "Sehari berpuasa dan sehari berbuka secara selang-seling",
            "Puasa hanya di hari Jumat",
            "Puasa 3 hari setiap akhir pekan"
          ],
          ans: 1,
          exp: "Nabi Daud as. berpuasa selang-seling: satu hari puasa dan satu hari berikutnya tidak puasa."
        },
        {
          q: "10. Puasa sunah yang diperbanyak oleh Rasulullah saw. sebagai persiapan menyambut Ramadan adalah puasa di bulan...",
          opts: ["Syakban", "Safar", "Zulkaidah", "Jumadilakhir"],
          ans: 0,
          exp: "Rasulullah saw. paling banyak berpuasa sunah di bulan Syakban untuk melatih jiwa menyambut Ramadan."
        },
        {
          q: "11. Kelonggaran niat pada puasa sunah yang tidak ada pada puasa Ramadan adalah...",
          opts: [
            "Boleh berniat di pagi hari jika belum makan/minum sejak Subuh",
            "Boleh berniat setelah selesai berbuka puasa",
            "Tidak memerlukan niat sama sekali",
            "Cukup berniat di dalam hati setahun sekali"
          ],
          ans: 0,
          exp: "Puasa sunah boleh berniat di pagi hari sebelum waktu Zuhur bila belum melakukan pembatal puasa sejak fajar."
        },
        {
          q: "12. Pintu surga yang khusus disediakan bagi orang yang rajin berpuasa bernama...",
          opts: ["Pintu Firdaus", "Pintu Ar-Rayyan", "Pintu Na'im", "Pintu Salam"],
          ans: 1,
          exp: "Ar-Rayyan adalah pintu gerbang kemuliaan di surga bagi orang-orang yang gemar berpuasa."
        },
        {
          q: "13. Manakah contoh perbuatan riya' yang dapat merusak pahala puasa sunah?",
          opts: [
            "Sahur bersama keluarga di rumah",
            "Berdoa memohon rida Allah saat berbuka",
            "Menulis status pamer rasa lemas berpuasa di media sosial agar dipuji teman",
            "Membantu orang tua membersihkan meja makan"
          ],
          ans: 2,
          exp: "Riya' adalah memperlihatkan amalan ibadah kepada orang lain dengan tujuan ingin mendapatkan pujian manusia."
        },
        {
          q: "14. Sikap yang tepat ketika melihat teman di sekolah tidak berpuasa sunah adalah...",
          opts: [
            "Mengejeknya sebagai orang yang malas",
            "Menghormatinya dan tidak memaksanya ikut berpuasa",
            "Melaporkannya kepada kepala sekolah",
            "Menjauhi dan tidak mau berteman dengannya"
          ],
          ans: 1,
          exp: "Puasa sunah tidak wajib, sehingga kita harus saling menghormati dan tidak boleh memaksakan kehendak."
        },
        {
          q: "15. Salah satu hikmah kesehatan dari menjalankan puasa sunah secara teratur adalah...",
          opts: [
            "Membuat badan menjadi sangat kurus dan lemah",
            "Memberi kesempatan organ pencernaan untuk beristirahat dan membuang racun (detoksifikasi)",
            "Menghilangkan rasa lapar untuk selamanya",
            "Mempercepat waktu belajar di sekolah"
          ],
          ans: 1,
          exp: "Secara medis dan rohani, puasa melatih metabolisme tubuh, mengistirahatkan pencernaan, dan membersihkan racun."
        }
      ]
    }
  }
};
