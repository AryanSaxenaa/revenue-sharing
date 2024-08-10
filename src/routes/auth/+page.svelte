<script>
    import Header from '../lib/Header.svelte';
    import Footer from '../lib/Footer.svelte';
</script>

<Header />

<main class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white shadow-md rounded-lg p-8 flex flex-col md:flex-row items-center max-w-4xl w-full">
        <div class="flex-1">
            <h2 class="text-3xl font-bold mb-4">Register your Business</h2>
            <form class="space-y-4">
                <div>
                    <label for="business-name" class="block text-sm font-medium text-gray-700">Business Name</label>
                    <input type="text" id="business-name" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div>
                    <label for="contact-details" class="block text-sm font-medium text-gray-700">Contact Details</label>
                    <input type="text" id="contact-details" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <button type="submit" class="w-full bg-blue-600 text-white py-2 px-4 rounded-md font-semibold shadow-md hover:bg-blue-700 transition-colors">Register</button>
            </form>
        </div>
        <div class="flex-1 hidden md:block">
            <img src="/path/to/your/image.png" alt="Illustration" class="w-full h-auto"/>
        </div>
    </div>
</main>

<Footer />
