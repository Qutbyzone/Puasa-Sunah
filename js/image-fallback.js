/**
 * EKSPEDISI PUASA SUNAH – Petualangan di Pulau Hikmah
 * Universal Multi-Format Image Loader & Fallback System (image-fallback.js)
 * Mendukung format PNG, JPG, dan JPEG secara otomatis untuk seluruh aset gambar & tombol.
 */

(function () {
  const formatTries = new WeakMap();

  function resolveNextFormat(img) {
    if (!img || !img.src) return;

    let attempts = formatTries.get(img) || 0;
    if (attempts >= 3) {
      // Semua ekstensi telah dicoba, aktifkan fallback CSS visual
      img.classList.add("img-fallback-failed");
      const parentBtn = img.closest(".graphic-action-btn, .map-pin, button");
      if (parentBtn) {
        parentBtn.classList.add("btn-text-fallback");
      }
      return;
    }

    formatTries.set(img, attempts + 1);

    const currentSrc = img.src;
    // Deteksi ekstensi saat ini
    if (/\.png($|\?)/i.test(currentSrc)) {
      img.src = currentSrc.replace(/\.png($|\?)/i, ".jpg$1");
    } else if (/\.jpg($|\?)/i.test(currentSrc)) {
      img.src = currentSrc.replace(/\.jpg($|\?)/i, ".jpeg$1");
    } else if (/\.jpeg($|\?)/i.test(currentSrc)) {
      img.src = currentSrc.replace(/\.jpeg($|\?)/i, ".png$1");
    }
  }

  // Tangkap seluruh error pemuatan gambar di fase capture (menjangkau semua halaman)
  window.addEventListener(
    "error",
    function (e) {
      if (e.target && e.target.tagName === "IMG") {
        resolveNextFormat(e.target);
      }
    },
    true
  );

  window.MPI_HANDLE_IMG_ERROR = resolveNextFormat;

  // Verifikasi gambar setelah DOM siap untuk memastikan tidak ada gambar yang hilang
  document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll("img");
    images.forEach(function (img) {
      // Jika gambar gagal dimuat sebelum listener aktif
      if (img.complete && (img.naturalWidth === 0 || img.naturalHeight === 0)) {
        resolveNextFormat(img);
      }
    });
  });
})();
