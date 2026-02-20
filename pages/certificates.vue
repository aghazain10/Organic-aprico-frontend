<template>
    <div>
        <main class="min-h-screen bg-gray-50">
            <!-- Hero Section for Certificates -->
            <section class="bg-gradient-to-b from-green-50 to-white py-20">
                <div class="container mx-auto px-4 text-center">
                    <h1
                        class="text-4xl md:text-5xl font-bold text-green-800 mb-6"
                    >
                        Our Certifications
                    </h1>
                    <p
                        class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-16 leading-relaxed"
                    >
                        At Organic Aprico, we are committed to the highest
                        standards of quality and purity in every batch of our
                        shilajit. Our products are rigorously tested and
                        certified by independent third-party laboratories to
                        ensure they meet or exceed industry benchmarks.
                        Transparency is at the heart of our mission—explore our
                        certifications below.
                    </p>
                </div>
            </section>

            <!-- Certificates Grid Section -->
            <section class="py-16">
                <div class="container mx-auto px-4">
                    <div
                        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        <CertificateCard
                            v-for="cert in certificates"
                            :key="cert.id"
                            :title="cert.title"
                            :description="cert.description"
                            :image="cert.image"
                            :download-link="cert.downloadLink"
                        />
                    </div>
                    <!-- Download All Button (if applicable, centered) -->
                    <div class="text-center mt-12">
                        <Button
                            variant="primary"
                            size="lg"
                            class="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold"
                            @click="handleDownloadAll"
                        >
                            Download All Certificates
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>

<script setup>
// Import existing components if needed; assuming they are globally registered or imported in layout
// const { $fetch } = useNuxtApp(); // If fetching dynamic data
import CertificateCard from "@/components/sections/CertificateCard.vue"; // Adjust path as necessary
import Button from "@/components/ui/Button.vue"; // Adjust path as necessary

const certificates = [
    {
        id: 1,
        title: "USDA Organic Certified",
        description:
            "Our shilajit is sourced from pristine Himalayan regions and certified organic by the United States Department of Agriculture, ensuring no pesticides, herbicides, or synthetic fertilizers.",
        image: "/images/certificates/usda-organic.png", // Replace with actual image path
        downloadLink: "/downloads/usda-organic.pdf",
    },
    {
        id: 2,
        title: "Heavy Metals Tested",
        description:
            "Independently tested for heavy metals including lead, mercury, arsenic, and cadmium, with results well below safe limits as per WHO guidelines.",
        image: "/images/certificates/heavy-metals-test.png",
        downloadLink: "/downloads/heavy-metals-report.pdf",
    },
    {
        id: 3,
        title: "Purity & Potency Verified",
        description:
            "Third-party lab verified for fulvic acid content (minimum 60%) and overall purity, guaranteeing the full spectrum of bio-active minerals.",
        image: "/images/certificates/purity-test.png",
        downloadLink: "/downloads/purity-report.pdf",
    },
    {
        id: 4,
        title: "GMP Certified",
        description:
            "Manufactured in facilities compliant with Good Manufacturing Practices (GMP) standards, ensuring consistent quality and safety from raw material to final product.",
        image: "/images/certificates/gmp-certified.png",
        downloadLink: "/downloads/gmp-certificate.pdf",
    },
    {
        id: 5,
        title: "Third-Party Lab Tested",
        description:
            "All batches undergo comprehensive testing by accredited labs for microbial contaminants, ensuring our shilajit is safe and effective.",
        image: "/images/certificates/lab-tested.png",
        downloadLink: "/downloads/lab-test-report.pdf",
    },
    {
        id: 6,
        title: "Vegan & Non-GMO",
        description:
            "100% vegan, non-GMO, and free from animal products, artificial additives, or fillers—pure Himalayan shilajit as nature intended.",
        image: "/images/certificates/vegan-non-gmo.png",
        downloadLink: "/downloads/vegan-cert.pdf",
    },
];

const handleDownloadAll = () => {
    // Implement logic to download all PDFs, e.g., generate a ZIP or redirect to a bundle
    alert("Downloading all certificates..."); // Placeholder; replace with actual download handler
};
</script>

<style scoped>
/* Any custom styles beyond Tailwind, if needed for exact Figma matches (e.g., specific shadows) */
.card-shadow {
    box-shadow:
        0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
</style>
