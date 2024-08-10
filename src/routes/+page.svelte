<script>
    import Footer from '$lib/Footer.svelte';
</script>

<main class="bg-gray-50 text-gray-900 font-sans">
    <!-- Header -->
    <header class="flex justify-between items-center p-4 bg-white shadow">
        <h1 class="text-2xl font-bold text-blue-600">DRMS 24.</h1>
        <nav>
            <a href="#" class="text-gray-700 hover:text-blue-600 mx-4">Home</a>
            <a href="#" class="text-gray-700 hover:text-blue-600 mx-4">About</a>
            <a href="#" class="text-gray-700 hover:text-blue-600 mx-4">Contact</a>
        </nav>
        <button class="px-4 py-2 bg-blue-600 text-white rounded">Register</button>
    </header>

    <!-- Hero Section -->
    <section class="text-center py-20 bg-blue-50">
        <h2 class="text-3xl font-bold">Klinik 24 siap melayani kebutuhan masyarakat selama 24/7.</h2>
        <p class="text-gray-600 my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button class="px-6 py-2 bg-blue-600 text-white rounded-full">Learn More</button>
    </section>

    <!-- Services Section -->
    <section class="py-12">
        <h3 class="text-center text-2xl font-bold mb-8">Daftar Layanan</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                <h4 class="font-bold text-xl mb-2">Layanan 1</h4>
                <p class="text-gray-600">Deskripsi singkat tentang layanan 1.</p>
                <button class="mt-4 px-4 py-2 bg-blue-600 text-white rounded">Selengkapnya</button>
            </div>
            <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                <h4 class="font-bold text-xl mb-2">Layanan 2</h4>
                <p class="text-gray-600">Deskripsi singkat tentang layanan 2.</p>
                <button class="mt-4 px-4 py-2 bg-blue-600 text-white rounded">Selengkapnya</button>
            </div>
            <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                <h4 class="font-bold text-xl mb-2">Layanan 3</h4>
                <p class="text-gray-600">Deskripsi singkat tentang layanan 3.</p>
                <button class="mt-4 px-4 py-2 bg-blue-600 text-white rounded">Selengkapnya</button>
            </div>
        </div>
    </section>

    <!-- Featured Section -->
    <section class="bg-white py-12">
        <div class="container mx-auto px-4 flex flex-col lg:flex-row items-center">
            <img src="image-url" alt="Feature Image" class="w-full lg:w-1/2 rounded-lg shadow-lg">
            <div class="lg:ml-8 mt-8 lg:mt-0">
                <h3 class="text-2xl font-bold mb-4">Pelayanan terbaik dari para ahli medis</h3>
                <p class="text-gray-600 mb-4">Deskripsi singkat tentang layanan unggulan atau fasilitas yang ditawarkan.</p>
                <button class="px-4 py-2 bg-blue-600 text-white rounded">Learn More</button>
            </div>
        </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-12 bg-blue-50">
        <h3 class="text-center text-2xl font-bold mb-8">Testimonial by Pasien</h3>
        <div class="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white p-6 rounded-lg shadow">
                <p class="text-gray-600">"Testimonial 1 dari pasien."</p>
                <p class="mt-2 font-bold">Nama Pasien</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow">
                <p class="text-gray-600">"Testimonial 2 dari pasien."</p>
                <p class="mt-2 font-bold">Nama Pasien</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow">
                <p class="text-gray-600">"Testimonial 3 dari pasien."</p>
                <p class="mt-2 font-bold">Nama Pasien</p>
            </div>
        </div>
    </section>

    <!-- Include Footer Component -->
    <Footer />
</main>
