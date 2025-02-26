Berikut adalah README.md untuk projek web-based attendance app Reza:


---

Web-Based Attendance & Overtime Tracking App

📌 Pengenalan

Aplikasi ini direka khas untuk merekod kehadiran kerja, perjalanan (trip), dan mengira waktu kerja lebih masa (OT) secara automatik. Ia juga membolehkan eksport laporan ke PDF untuk dihantar ke payroll.

🎯 Ciri-Ciri Utama

✅ Rekod Kehadiran: Clock-in dan clock-out setiap hari.
✅ Rekod Trip: Pilih destinasi dan rekod airway bill (untuk KLIA Cargo).
✅ Pengiraan OT Automatik: Mengikut peraturan OT yang telah ditetapkan.
✅ Simpan Data Secara Berasingan Setiap Bulan: Tidak bercampur dengan bulan lain.
✅ Paparan "Tiada Rekod": Jika tiada data untuk bulan tersebut.
✅ Auto-Save Setiap 5 Saat: Kurangkan risiko kehilangan data.
✅ Highlight Sabtu & Ahad: Sabtu (kuning), Ahad (merah) dalam laporan.
✅ PWA (Progressive Web App): Boleh dijadikan shortcut seperti aplikasi mudah alih.
✅ Cetak & Eksport Laporan ke PDF: Menggunakan html2pdf.js dan jsPDF.

🚀 Cara Guna

1️⃣ Setup Awal

1. Buka aplikasi melalui pelayar web (Chrome, Edge, dll.).


2. Pastikan localStorage tidak dikosongkan agar data tidak hilang.



2️⃣ Rekod Kehadiran

1. Pilih tarikh.


2. Masukkan waktu clock-in dan clock-out.


3. Tekan butang Simpan.



3️⃣ Tambah Trip

1. Pilih destinasi dari senarai.


2. Jika destinasi adalah KLIA Cargo, masukkan airway bill.


3. Tekan butang Tambah Trip.



4️⃣ Cetak atau Eksport Laporan

1. Tekan butang Cetak untuk mencetak laporan.


2. Tekan butang Eksport ke PDF untuk simpan sebagai fail PDF.



⚙️ Peraturan Pengiraan OT

🟢 Hari Biasa (Isnin - Jumaat)

OT hanya dikira selepas jam 5:00 PM.

Jika ada trip ke KLIA Cargo, OT tidak dikira.


🟡 Hari Sabtu

OT bermula selepas jam 2:00 PM.

Jika ada trip ke KLIA Cargo, OT tidak dikira.


🔴 Hari Ahad

Semua jam bekerja dikira sebagai OT tanpa mengira destinasi.


📂 Struktur Projek

/attendance-app  
│── index.html      # UI utama  
│── styles.css      # CSS untuk rekaan UI  
│── script.js       # Logik aplikasi (JavaScript)  
│── html2pdf.bundle.min.js  # Untuk eksport PDF  
│── README.md       # Dokumentasi

🛠 Teknologi Digunakan

HTML, CSS, JavaScript

LocalStorage untuk simpan data

html2pdf.js dan jsPDF untuk eksport laporan

PWA (Progressive Web App) untuk shortcut aplikasi


📌 Nota Tambahan

Data disimpan dalam localStorage, jadi jangan kosongkan storage tanpa menyimpan laporan.

PWA membolehkan aplikasi digunakan seperti app mudah alih.



---

README ni dah cukup lengkap dan jelas untuk pengguna faham cara guna sistem. Kalau ada apa-apa nak tambah atau ubah, bagitau ja.

