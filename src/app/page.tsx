// app/page.tsx

'use client'

import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="bg-[#0e0e0e] text-white min-h-screen font-sans">
      <div className="max-w-[1200px] mx-auto px-5 py-10">
        <header className="flex justify-between items-center py-8">
          <div className="flex items-center gap-4">
            <Image src="/logo_kgi.png" alt="Logo KGI" width={100} height={100} />
            {/* <h1 className="text-3xl font-bold">Karet Gelang Indonesia</h1> */}
          </div>
          <nav className="space-x-6 text-gray-400 font-medium">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#benefits" className="hover:text-white">Benefits</a>
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#testimonials" className="hover:text-white">Testimonials</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </header>

        <section className="flex flex-col-reverse md:flex-row justify-between items-center gap-10 py-10">
          <div className="flex-1">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Karet Gelang <br /> Untuk <span className="bg-gradient-to-r from-[#F2082D] to-[#FF9A3C] text-transparent bg-clip-text">Segala Kebutuhan</span>
            </h2>
            <p className="text-gray-400 mb-6 max-w-md">
              Kuat, fleksibel, dan tersedia dalam berbagai ukuran serta warna. Produk lokal berkualitas tinggi.
            </p>
            <button className="bg-gradient-to-r from-[#F2082D] to-[#FF9A3C] text-white px-6 py-3 rounded-full font-medium">
              Pelajari Lebih Lanjut
            </button>
          </div>
          <div className="flex-1">
            <Image
              src="/karet-gelang.png"
              alt="Karet Gelang"
              width={500}
              height={500}
              className="w-full max-w-md mx-auto rounded-xl"
            />
          </div>
        </section>

        <section id="about" className="py-20 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">About <span className="bg-gradient-to-r from-[#F2082D] to-[#FF9A3C] text-transparent bg-clip-text">Company</span></h3>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Established in 2022, PT Karet Gelang Indonesia has quickly emerged as a leading manufacturer and exporter of premium-quality rubber bands. With a steadfast commitment to delivering products of unparalleled strength, durability, and elasticity, we take pride in offering the best materials and ingredients to ensure the utmost satisfaction of our customers worldwide.
          </p>
        </section>

        <section id="benefits" className="py-20 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Why <span className="bg-gradient-to-r from-[#F2082D] to-[#FF9A3C] text-transparent bg-clip-text">Choose Us</span></h3>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Kami berkomitmen untuk memberikan produk yang berkualitas tinggi, harga kompetitif, dan layanan pelanggan yang responsif. Dengan pengalaman, proses produksi modern, dan sumber daya manusia profesional, kami mampu memenuhi kebutuhan pasar lokal maupun internasional.
          </p>
        </section>

        <section id="features" className="py-20 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Our <span className="bg-gradient-to-r from-[#F2082D] to-[#FF9A3C] text-transparent bg-clip-text">Vision</span></h3>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Menjadi produsen karet gelang terbaik di Asia Tenggara dengan fokus pada inovasi berkelanjutan, kepuasan pelanggan, dan kontribusi terhadap industri kreatif dan UMKM.
          </p>
        </section>

        <section id="testimonials" className="py-20 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Customer <span className="bg-gradient-to-r from-[#F2082D] to-[#FF9A3C] text-transparent bg-clip-text">Testimonials</span></h3>
          <p className="text-gray-400 max-w-3xl mx-auto">
            "Produk karet gelang dari KGI sangat kuat dan tahan lama! Saya telah menggunakannya untuk keperluan usaha kecil saya dan hasilnya luar biasa." – Ani, Jakarta
          </p>
        </section>

        <section id="products" className="py-28">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Our <span className="bg-gradient-to-r from-[#F2082D] to-[#FF9A3C] text-transparent bg-clip-text">Products</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Array.from({ length: 12 }).map((_, idx) => (
              <div key={idx} className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg relative">
                <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-[#F2082D] to-[#FF9A3C]" />
                <Image
                  src="/karet-gelang.png"
                  alt={`Produk ${idx + 1}`}
                  width={500}
                  height={500}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-white mb-2">Produk Karet Gelang {idx + 1}</h4>
                  <p className="text-gray-400 mb-4 text-sm">Kuat, elastis, dan berkualitas ekspor. Tersedia dalam berbagai warna dan ukuran. Ideal untuk industri, rumah tangga, dan keperluan kerajinan tangan.</p>
                  <div className="flex justify-between">
                    <a href="#" className="text-[#F2082D] text-sm font-medium hover:underline">Shopee</a>
                    <a href="#" className="text-[#F2082D] text-sm font-medium hover:underline">Tokopedia</a>
                    <a href="#" className="text-[#F2082D] text-sm font-medium hover:underline">TikTok</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="py-20 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Contact <span className="bg-gradient-to-r from-[#F2082D] to-[#FF9A3C] text-transparent bg-clip-text">Us</span></h3>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Hubungi kami melalui WhatsApp di +62 812-3456-7890 atau email ke info@karetgelang.id untuk pemesanan dan informasi lebih lanjut.
          </p>
        </section>

        <section id="map" className="py-20">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Lokasi <span className="bg-gradient-to-r from-[#F2082D] to-[#FF9A3C] text-transparent bg-clip-text">Kami</span>
          </h3>
          <div className="w-full h-96 rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126916.40381626003!2d106.68943135!3d-6.229728599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1579882d2d9%3A0x6a0c98bcaa9e14d4!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1691117391971!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

        <footer className="text-center py-10 text-sm text-gray-500 border-t border-[#222]">
          &copy; 2025 Karet Gelang Indonesia. All rights reserved.<br />
          Shopee | Tokopedia | TikTok | Instagram
        </footer>
      </div>
    </main>
  )
}