const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Helper untuk format tanggal Indonesia
const formatDate = (date) => {
    return new Date(date).toLocaleDateString('id-ID', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });
};

// Helper format mata uang
const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(number);
};

// GANTI NAMA FUNGSI: dari 'index' menjadi 'getDashboard'
exports.getDashboard = async (req, res) => {
    try {
        const userId = req.session.userId;
        const role = req.session.role;

        // Routing Berdasarkan Role
        if (role === 'penyedia') {
            return res.redirect('/producer'); // Redirect ke Dashboard Produsen
        }

        if (role === 'pembeli') {
            return res.redirect('/market'); // Redirect ke Dashboard Produsen
        }

        if (role === 'none') {
            return res.redirect('/auth/onboarding'); // Redirect ke Dashboard Produsen
        }
        
        if (role !== 'petani') {
            return res.status(403).send('Dashboard untuk peran ini belum tersedia.');
        }

        // 1. Ambil Data User & Profil Petani
        const user = await prisma.user.findUnique({
            where: { id: userId },
            include: { farmerProfile: true }
        });

        // 2. Ambil Rencana Tanam (Maksimal 3 terbaru)
        const plantingPlans = await prisma.plantingPlan.findMany({
            where: { userId: userId },
            take: 3,
            orderBy: { estimatedHarvest: 'asc' },
            include: { crop: true }
        });

        // 3. Ambil/Simulasi Data Tren Pasar
        const marketInsights = [
            {
                title: "Cabai Rawit",
                tag: "High Demand",
                trend: "Naik",
                value: "+15%",
                desc: "Harga pasar naik minggu ini.",
                icon: "fa-arrow-trend-up",
                color: "orange"
            },
            {
                title: "Permintaan Pasar",
                tag: "Stabil",
                trend: "Stabil",
                value: "320 Ton",
                desc: "Kebutuhan total di area " + (user.province || "Jawa Barat"),
                icon: "fa-hand-holding-dollar",
                color: "blue"
            },
            {
                title: "Risiko Musim",
                tag: "Aman",
                trend: "Rendah",
                value: "Rendah",
                desc: "Cuaca mendukung masa tanam.",
                icon: "fa-cloud-sun",
                color: "green"
            }
        ];

        // 4. Render View
        res.render('petani/dashboard', {
            title: 'Dashboard Petani',
            user: user,
            farmer: user.farmerProfile, // Bisa null jika belum diisi lengkap
            plans: plantingPlans,
            insights: marketInsights,
            currentDate: formatDate(new Date()),
            helpers: { formatRupiah, formatDate }
        });

    } catch (error) {
        console.error("Dashboard Error:", error);
        res.render('500', { message: 'Gagal memuat dashboard' });
    }
};