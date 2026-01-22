TANIRA - Ekosistem Pertanian Digital TerpaduTANIRA adalah platform berbasis web yang dirancang untuk merevolusi cara petani, pembeli, dan penyedia alat berinteraksi. Dengan fitur Smart Planting dan Marketplace Panen, kami memberikan kepastian pasar bagi petani dan akses langsung ke hasil bumi berkualitas bagi pembeli.🌟 Fitur Utama1. 🌱 Petani (Farmers)Smart Planting: Perencanaan masa tanam dengan rekomendasi berbasis data untuk memaksimalkan hasil panen.Simulasi Tanam: Kalkulator estimasi biaya, potensi panen, dan keuntungan sebelum mulai menanam.Manajemen Panen: Ubah rencana tanam menjadi listing penjualan (Pre-Order) untuk mendapatkan pembeli lebih awal.Sewa Alat: Cari dan sewa alat pertanian modern dari penyedia lokal.2. 🛒 Pembeli (Buyers)Marketplace Panen: Beli hasil panen langsung dari petani dengan sistem Pre-Order untuk harga yang lebih adil.Transparansi: Pantau status perkembangan tanaman yang dipesan secara real-time (mulai dari tanam hingga panen).Manajemen Pesanan: Dashboard khusus untuk melacak riwayat dan status pembelian.3. 🚜 Penyedia Alat (Producers/Partners)Manajemen Inventaris: Tambahkan dan kelola alat pertanian atau produk (bibit/pupuk) untuk disewakan/dijual.Manajemen Sewa: Terima dan proses permintaan sewa dari petani.Dashboard Statistik: Pantau kinerja penyewaan dan ketersediaan alat.🛠️ Teknologi yang DigunakanAplikasi ini dibangun dengan tech stack modern yang cepat dan efisien:Backend: Node.js & Express.jsDatabase & ORM: MySQL & PrismaFrontend: EJS (Templating Engine)Styling: Tailwind CSSAutentikasi: Express Session & BcryptUpload File: Multer🚀 Instalasi & Menjalankan ProjectIkuti langkah-langkah berikut untuk menjalankan proyek ini di komputer lokal Anda:PrasyaratNode.js (v16+)MySQL ServerGitLangkah-langkahClone Repositorygit clone [https://github.com/username/tanira.git](https://github.com/username/tanira.git)
cd tanira
Install Dependenciesnpm install
Konfigurasi DatabaseBuat file .env di root folder.Salin isi dari .env.example (jika ada) atau tambahkan konfigurasi berikut:DATABASE_URL="mysql://USER:PASSWORD@localhost:3306/tanira_db"
SESSION_SECRET="rahasia_dapur_tanira_123"

# Tambahkan konfigurasi SMTP jika menggunakan fitur email
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=emailanda@gmail.com
SMTP_PASS=password_app_anda
SMTP_SECURE=false
Migrasi Database (Prisma)Jalankan perintah ini untuk membuat tabel di database MySQL Anda:npx prisma migrate dev --name init
Jalankan ServerMode Development (dengan nodemon):npm run dev
Atau mode standar:node src/app.js
Akses AplikasiBuka browser dan kunjungi: http://localhost:3000📂 Struktur Foldertanira/
├── prisma/
│   └── schema.prisma       # Definisi Skema Database
├── public/                 # File Statis (CSS, Gambar Uploads)
├── src/
│   ├── controllers/        # Logika Bisnis (Auth, Market, Producer, dll)
│   ├── middlewares/        # Middleware (Auth Check, Upload)
│   ├── routes/             # Definisi Rute API & Halaman
│   ├── views/              # Template EJS (Frontend)
│   │   ├── auth/           # Login, Register, Onboarding
│   │   ├── buyer/          # Halaman khusus Pembeli
│   │   ├── market/         # Halaman Marketplace & Listing
│   │   ├── petani/         # Dashboard & Fitur Petani
│   │   ├── producer/       # Dashboard & Fitur Penyedia Alat
│   │   └── ...
│   └── app.js              # Entry Point Aplikasi
├── package.json
└── README.md
🔐 Akun Demo (Opsional)Jika Anda ingin langsung mencoba tanpa mendaftar (pastikan data ini ada di seed database atau buat manual):RoleEmailPasswordPetanipetani@tanira.compassword123Pembelipembeli@tanira.compassword123Penyediamitra@tanira.compassword123🤝 KontribusiKami sangat terbuka untuk kontribusi! Jika Anda ingin membantu mengembangkan TANIRA:Fork repository ini.Buat branch fitur baru (git checkout -b fitur-keren).Commit perubahan Anda (git commit -m 'Menambahkan fitur keren').Push ke branch (git push origin fitur-keren).Buat Pull Request.📄 LisensiProyek ini dilisensikan di bawah MIT License - lihat file LICENSE untuk detailnya.<p align="center">Dibuat dengan ❤️ untuk Pertanian Indonesia 🇮🇩</p>
