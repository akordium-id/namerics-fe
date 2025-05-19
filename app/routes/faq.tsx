import { useState } from "react";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "FAQ - Namerics" },
    { name: "description", content: "Frequently asked questions about Namerics username generator" },
  ];
};

interface FaqItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

export default function FAQ() {
  const [faqItems, setFaqItems] = useState<FaqItem[]>([
    {
      question: "Apa itu Namerics?",
      answer: "Namerics adalah generator username unik yang terinspirasi dari warisan budaya Indonesia. Kami membantu Anda menciptakan identitas online yang bermakna dan kaya secara budaya.",
      isOpen: false,
    },
    {
      question: "Bagaimana cara kerja Namerics?",
      answer: "Namerics menggunakan database kata-kata dari bahasa daerah dan kearifan lokal Indonesia untuk menghasilkan username yang unik. Anda dapat memilih kategori tertentu seperti Jawa, Sunda, Bali, dan lainnya untuk mendapatkan username yang sesuai dengan preferensi Anda.",
      isOpen: false,
    },
    {
      question: "Apakah layanan Namerics gratis?",
      answer: "Ya, layanan dasar Namerics tersedia secara gratis. Kami juga menawarkan paket premium dengan fitur tambahan seperti penyesuaian lanjutan dan analisis makna nama.",
      isOpen: false,
    },
    {
      question: "Bagaimana cara mendaftar?",
      answer: "Cukup klik tombol 'Daftar' di halaman beranda kami dan ikuti petunjuk untuk membuat akun. Anda dapat mulai menggunakan generator username kami segera setelah pendaftaran selesai.",
      isOpen: false,
    },
    {
      question: "Apakah username yang dihasilkan unik?",
      answer: "Kami berusaha memberikan username yang unik, tetapi ketersediaan tergantung pada platform yang Anda gunakan. Kami menyarankan untuk memeriksa ketersediaan username di platform yang Anda inginkan.",
      isOpen: false,
    },
  ]);

  const toggleFaq = (index: number) => {
    setFaqItems(
      faqItems.map((item, i) => {
        if (i === index) {
          return { ...item, isOpen: !item.isOpen };
        }
        return item;
      })
    );
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-10">Pertanyaan yang Sering Diajukan</h1>
      <div className="max-w-3xl mx-auto">
        {faqItems.map((faq, index) => (
          <div key={index} className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
            <button
              className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 flex justify-between items-center"
              onClick={() => toggleFaq(index)}
            >
              <span className="font-medium">{faq.question}</span>
              <span className="text-xl">
                {faq.isOpen ? "−" : "+"}
              </span>
            </button>
            {faq.isOpen && (
              <div className="px-6 py-4 bg-gray-50">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}