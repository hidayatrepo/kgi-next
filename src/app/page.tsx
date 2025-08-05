'use client'

import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="bg-[#0e0e0e] text-white min-h-screen font-sans">
      {/* SVG Background Decorations */}
      <svg className="absolute left-0 top-0 w-32 h-full text-[#F2082D] opacity-10" fill="currentColor" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" /></svg>
      <svg className="absolute right-0 top-0 w-32 h-full text-[#F2082D] opacity-10" fill="currentColor" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" /></svg>

      <div className="relative z-10 max-w-[1200px] mx-auto px-5 py-10">
        <header className="flex justify-between items-center py-8">
          <div className="flex items-center gap-4">
            <Image src="/logo_kgi.png" alt="Logo KGI" width={100} height={100} />
          </div>
          <nav className="space-x-6 text-gray-400 font-medium">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#benefits" className="hover:text-white">Benefits</a>
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#products" className="hover:text-white">Products</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </header>

        {/* HERO */}
        <section className="flex flex-col-reverse md:flex-row justify-between items-center gap-10 py-10">
          <div className="flex-1">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Karet Gelang <br /> Untuk <span className="bg-gradient-to-r from-[#F2082D] to-[#FF9A3C] text-transparent bg-clip-text">Segala Kebutuhan</span>
            </h2>
            <p className="text-gray-400 mb-6 max-w-md">
              Kuat, fleksibel, dan tersedia dalam berbagai ukuran serta warna. Produk lokal berkualitas tinggi.
            </p>
            <button className="bg-gradient-to-r from-[#F2082D] to-[#F95D33] text-white px-6 py-3 rounded-full font-medium">
              Pesan Karet Premium
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

        {/* ABOUT */}
        <section id="about" className="py-20 text-center bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] rounded-xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Tentang <span className="bg-gradient-to-r from-[#F2082D] to-[#FF9A3C] text-transparent bg-clip-text">Kami</span>
          </h3>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            PT Karet Gelang Indonesia berdiri sejak tahun 2022 dan telah menjadi produsen serta eksportir terkemuka untuk produk karet gelang berkualitas tinggi. Kami menghadirkan karet gelang dengan kekuatan, elastisitas, dan daya tahan terbaik yang dibuat dari bahan-bahan premium. Didukung oleh teknologi modern dan tim profesional, kami siap melayani kebutuhan industri dan UMKM lokal maupun global.
          </p>
        </section>

        {/* BENEFITS */}
        <section id="benefits" className="py-20 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#F2082D] to-[#FF9A3C] text-transparent bg-clip-text">Mengapa</span> Memilih Kami
          </h3>
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Kami tidak hanya menawarkan produk, tapi solusi. Dengan proses produksi efisien dan kontrol kualitas ketat, kami menjamin konsistensi dan kehandalan di setiap produk. Layanan pelanggan kami responsif dan fleksibel sesuai kebutuhan mitra bisnis.
          </p>
        </section>

        {/* FEATURES */}
        <section id="features" className="py-20 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Visi <span className="bg-gradient-to-r from-[#F2082D] to-[#FF9A3C] text-transparent bg-clip-text">Kami</span>
          </h3>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Menjadi produsen karet gelang nomor satu di Asia Tenggara dengan inovasi berkelanjutan, keberlanjutan lingkungan, serta dedikasi tinggi untuk mendukung ekonomi lokal dan UMKM.
          </p>
        </section>

        {/* PRODUCTS */}
        <section id="products" className="py-28">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Produk <span className="bg-gradient-to-r from-[#F2082D] to-[#FF9A3C] text-transparent bg-clip-text">Unggulan</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, idx) => (
              <div key={idx} className="bg-[#1e1e1e] border border-gray-700 rounded-xl overflow-hidden shadow-md relative">
                <Image
                  src="/karet-gelang.png"
                  alt={`Produk ${idx + 1}`}
                  width={500}
                  height={500}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-white mb-2">Karet Gelang Seri {idx + 1}</h4>
                  <p className="text-gray-400 mb-4 text-sm">Elastisitas tinggi dan awet, cocok untuk kebutuhan industri, rumah tangga, dan kerajinan tangan.</p>
                  <div className="flex justify-between bg-gradient-to-r from-[#F2082D] to-[#FF9A3C] text-transparent bg-clip-text text-sm font-medium">
                    <a href="#" className="hover:underline">Shopee</a>
                    <a href="#" className="hover:underline">Tokopedia</a>
                    <a href="#" className="hover:underline">TikTok</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="py-28 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-12">
            Daftar <span className="bg-gradient-to-r from-[#F2082D] to-[#FF9A3C] text-transparent bg-clip-text">Harga</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Basic', price: 'Rp25.000', features: ['50gr isi ±1000', 'Warna Campur', 'Cocok untuk rumah tangga'] },
              { title: 'Premium', price: 'Rp50.000', features: ['100gr isi ±2000', 'Warna Merah / Custom', 'Cocok untuk usaha kecil'] },
              { title: 'Wholesale', price: 'Hubungi Kami', features: ['>1Kg / Volume besar', 'Custom ukuran & warna', 'Diskon reseller'] },
            ].map((item, idx) => (
              <div key={idx} className="bg-[#1e1e1e] border border-gray-700 rounded-xl p-6 shadow-md">
                <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                <p className="text-2xl font-semibold bg-gradient-to-r from-[#F2082D] to-[#FF9A3C] text-transparent bg-clip-text mb-4">{item.price}</p>
                <ul className="text-gray-400 text-sm mb-6 space-y-2">
                  {item.features.map((feat, i) => (
                    <li key={i}>✔ {feat}</li>
                  ))}
                </ul>
                <br/>
                <button className="bg-gradient-to-r from-[#F2082D] to-[#F2082D] text-white px-6 py-3 rounded-full font-medium">
                  Buat Pesanan
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-20 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Hubungi <span className="bg-gradient-to-r from-[#F2082D] to-[#FF9A3C] text-transparent bg-clip-text">Kami</span>
          </h3>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Hubungi kami via WhatsApp di +62 812-3456-7890 atau email ke info@karetgelang.id untuk pemesanan dan informasi lebih lanjut.
          </p>
        </section>

        {/* MAP */}
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
