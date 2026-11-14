/**
 * EKSPEDISI PUASA SUNAH – Petualangan di Pulau Hikmah
 * Modul Penilaian, Skor, dan Rekapitulasi Pembelajaran
 */

window.MPI_SCORING = {
  // Hitung persentase nilai
  calculatePercentage(correct, total) {
    if (!total || total === 0) return 0;
    return Math.round((correct / total) * 100);
  },

  // Predikat kelulusan berdasarkan nilai kuis akhir
  getPredicate(score) {
    if (score >= 90) {
      return {
        title: "Penjelajah Utama Bintang Lima",
        grade: "A+",
        message: "Luar biasa! Pemahamanmu tentang puasa sunah sangat mendalam dan sempurna!",
        color: "#2e7d32"
      };
    } else if (score >= 75) {
      return {
        title: "Penjelajah Sejati Pulau Hikmah",
        grade: "A",
        message: "Hebat sekali! Kamu memahami ketentuan dan keutamaan puasa sunah dengan sangat baik!",
        color: "#00897b"
      };
    } else if (score >= 60) {
      return {
        title: "Penjelajah Cakap Berbakat",
        grade: "B",
        message: "Bagus! Terus tingkatkan dan amalkan ilmu puasa sunah yang telah kamu pelajari!",
        color: "#f57c00"
      };
    } else {
      return {
        title: "Penjelajah Bersemangat",
        grade: "C",
        message: "Semangat terus! Kamu boleh mengulang tantangan agar semakin paham dan menguasai materi!",
        color: "#7cb342"
      };
    }
  },

  // Rekapitulasi data hasil ekspedisi
  getSummary() {
    const state = window.MPI_STORAGE.load();
    const badges = state.badgesEarned.length;
    const completed = state.completedMissions.length;
    const finalScore = state.scores.misi5 || 0;
    const predicate = this.getPredicate(finalScore);

    return {
      userName: state.userName || "Penjelajah",
      badgesCount: badges,
      completedCount: completed,
      finalScore: finalScore,
      predicate: predicate,
      scores: state.scores
    };
  }
};
