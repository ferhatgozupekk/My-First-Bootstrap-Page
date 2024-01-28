document.addEventListener("DOMContentLoaded", function () {
  const photos = document.querySelectorAll(".photos");

  photos.forEach((photo) => {
    photo.addEventListener("mouseover", function () {
      this.style.transform = "scale(1.1)"; // Resmi 1.1 kat büyüt

      // İndirme butonunu göster
      const downloadButton = document.createElement("button");
      downloadButton.innerText = "İndir";
      downloadButton.classList.add("download-button");
      downloadButton.addEventListener("click", function () {
        // İndirme butonuna tıklandığında yapılacak işlemler
        alert("Resmi İndir");
      });

      // İndirme butonunu ortaya ekleyin
      this.parentNode.appendChild(downloadButton);
    });

    photo.addEventListener("mouseout", function () {
      this.style.transform = "scale(1)"; // Resmi normal boyuta getir

      // İndirme butonunu kaldırın
      const downloadButton = this.parentNode.querySelector(".download-button");
      if (downloadButton) {
        downloadButton.parentNode.removeChild(downloadButton);
      }
    });
  });
});
