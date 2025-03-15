function setActive(element) {
    document.querySelectorAll(".nama-list li").forEach(li => {
        li.classList.remove("active");
    });

    element.classList.add("active");

    let nama = element.textContent;

    let biografiData = {
        "Ayanaara Kemal Haro": [
            "<strong>Redaksional :</strong> Menjelaskan tentang standar pola hidup sehat"
        ],
        "Bernadeth Joscelyn Tan": [
            "<strong>Design :</strong> Mendesain header, button, dropdown, dan footer",
            "<strong>Coding :</strong> Membuat, mengatur, dan mendesain layout website menggunakan bahasa pemrograman",
            "<strong>Coding :</strong> Memasukkan semua materi 'Pola Hidup Sehat' ke dalam website"
        ],
        "Brigitta Milana Wahyudi": [
            "<strong>Redaksional :</strong> Menjelaskan cara pola hidup sehat",
            "<strong>Design :</strong> Membantu membuat desain header"
        ],
        "Eugenia Keiko Wijaya": [
            "<strong>Redaksional :</strong> Membuat caption",
            "<strong>Redaksional :</strong> Membahas pentingnya pola hidup sehat dan resiko jika tidak menerapkannya",
            "<strong>Redaksional :</strong> Mencari gambar yang sesuai dengan topik yang dibahas",
            "<strong>Redaksional + Design :</strong> Merapikan daftar pustaka + membuat background daftar pustaka"
        ],
        "Laurentia Diandra Harsono": [
            "<strong>Redaksional :</strong> Menjelaskan pengertian pola hidup",
            "<strong>Redaksional :</strong> Mencari gambar yang sesuai dengan topik yang dibahas",
            "<strong>Design :</strong> Membantu mendesain header dan button"
        ],
        "Rafaella Gratia Juean": [
            "<strong>Redaksional :</strong> Menjelaskan apa itu pola hidup sehat",
            "<strong>Coding :</strong> Membantu membuat kode untuk profile website" 

        ]
    };

    // Ambil container biografi
    let biografiContainer = document.getElementById("biografi-text");

    // Kosongkan isi sebelumnya
    biografiContainer.innerHTML = "";

    // Buat elemen <ul> untuk bullet points
    let ul = document.createElement("ul");
    ul.classList.add("biografi-list");

    // Tambahkan setiap item sebagai <li>
    biografiData[nama].forEach(item => {
        let li = document.createElement("li");
        li.innerHTML = item; // Use innerHTML to allow bold formatting
        ul.appendChild(li);
    });

    // Masukkan <ul> ke dalam div biografi
    biografiContainer.appendChild(ul);

    document.getElementById("biografi-nama").textContent = nama;
    document.getElementById("biografi-container").style.display = "block";
}