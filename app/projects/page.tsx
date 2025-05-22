"use client"

import PageHeader from "@/components/page-header"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Uzman Yapsın – Uçtan Uca Dijital Proje Geliştirme",
      description:
        "Web tasarımından mobil uygulamaya, e-ticaretten siber güvenliğe kadar geniş bir yelpazede dijital çözümler sunmak üzere kurduğumuz profesyonel hizmet platformu.",
      longDescription:
        "Uzman Yapsın, farklı uzmanlık alanlarına sahip bir ekip tarafından kurulan ve markaların dijital dönüşüm yolculuğunda uçtan uca çözüm sunmayı amaçlayan bir platformdur. Web Tasarımı ve Geliştirme, Mobil Uygulama Geliştirme (iOS & Android), E-Ticaret Çözümleri, UI/UX Tasarım, Dijital Pazarlama ve Siber Güvenlik hizmetlerini tek çatı altında topluyoruz. Her proje için kullanıcıyı merkeze alan, performansı yüksek, güvenli ve sürdürülebilir çözümler üretmeyi hedefliyoruz. Platform yeni olsa da, her birimiz daha önce farklı projelerde edindiğimiz tecrübeleri bu çatı altında birleştiriyoruz.",
      image: "/uzmanyapsin.png",
      date: "Mart 2025",
      link: "https://uzmanyapsin.com.tr/",
      github: "",
      tags: [
        "Web Tasarımı",
        "Mobil Uygulama",
        "E-ticaret",
        "UI/UX",
        "Dijital Pazarlama",
        "Siber Güvenlik",
        "SEO",
        "Proje Yönetimi"
      ],
    },
    {
      title: "EmekPuan – Emek ve Zamanı Değere Dönüştüren Yeni Ekonomi Modeli",
      description:
        "Toplumsal dayanışma ve gönüllü katkıları ödüllendiren, zaman puanı tabanlı bir takas ve fayda platformu. EmekPuan ile emek, dijital ekonomide karşılığını buluyor.",
      longDescription:
        "EmekPuan, bireylerin toplumsal katkılarını 'zaman puanı' birimiyle ölçen ve bu puanları hizmet, ürün ya da başka katkılarla takas edebilecekleri yeni nesil bir fayda ekonomisi platformudur. Next.js ve Tailwind CSS gibi modern web teknolojileri kullanarak geliştirdiğimiz bu sistemde, kullanıcılar gönüllü faaliyetlerde bulunarak puan kazanır ve bu puanları başka kullanıcıların sunduğu faydalara dönüştürebilir. Proje, topluluk içinde karşılıksız yardımlaşma ve paylaşım kültürünü dijital altyapıyla güçlendirmeyi amaçlıyor. Kullanıcı dostu arayüzü, güvenli veri yapısı ve şeffaf işlem mantığıyla sosyal etkisi yüksek bir dijital dönüşüm modelidir.",
      image: "/emekpuan.png",
      date: "Nisan 2025",
      link: "https://emekpuan.com.tr/",
      github: "",
      tags: [
        "Next.js",
        "Tailwind CSS",
        "Fayda Ekonomisi",
        "Zaman Bankası",
        "Sosyal Fayda",
        "Topluluk Platformu",
        "Proje Yönetimi",
        "Gönüllülük"
      ],
    },
    {
      title: "Yanımda – Acil Durumlarda Güvenli Yardım Uygulaması",
      description:
        "Engelli bireyler ve panik atak yaşayanlar için özel olarak geliştirilen Yanımda, acil durum anlarında hızlıca yardım çağırma imkânı sunar.",
      longDescription:
        "Yanımda, özellikle engelli bireyler ve panik bozukluk yaşayan kullanıcılar için tasarlanmış, mobil cihazlar üzerinden çalışan bir acil durum yardım uygulamasıdır. Kullanıcılar, tek tuşla önceden tanımlı kişilere veya gönüllü destek ağına konumlarıyla birlikte yardım çağrısı gönderebilir. Uygulama iOS ve Android platformları için React Native teknolojisi ile geliştirilmektedir. Toplumsal dayanışmayı dijital çözümlerle birleştiren Yanımda, bireylerin kendilerini güvende hissetmelerini sağlayacak kullanıcı dostu bir deneyim sunmayı hedefliyor.",
      image: "/yanimda.png",
      date: "Mayıs 2025",
      link: "", // Yayında değilse boş bırakılabilir veya "#"
      github: "",
      tags: [
        "Mobil Uygulama",
        "React Native",
        "Engelli Destek",
        "Panik Atak",
        "Acil Yardım",
        "Gönüllülük",
        "Sosyal Fayda",
        "Konum Tabanlı Hizmet"
      ],
    },
    {
      title: "Vtek - I-VPORT PMIS Platformu",
      description:
        "Vtek'te, SaaS tabanlı I-VPORT PMIS platformunun liman yönetimi ve envanter takibi için geliştirilmesinde yer aldım. Projede, yazılımın güvenilirliğini artırmak ve liman operasyonlarını daha verimli hale getirmek için end-to-end (E2E) testleri gerçekleştirdim.",
      longDescription:
        "I-VPORT PMIS platformu, limanların operasyonel süreçlerini dijitalleştiren ve optimize eden bir yönetim sistemidir. Bu projede, kullanıcı senaryolarına dayalı kapsamlı test planları oluşturdum ve CodeceptJS ile Cypress kullanarak otomatik testler geliştirdim. Tespit edilen hataları detaylı raporlar halinde geliştirme ekibine ilettim ve çözüm süreçlerini takip ettim. Ayrıca, kullanıcı deneyimini iyileştirmek için arayüz testleri gerçekleştirdim ve geri bildirimler sundum. Proje sonucunda, platformun güvenilirliği ve kullanıcı memnuniyeti önemli ölçüde arttı.",
      image: "vtek.png",
      date: "Kasım 2024",
      link: "https://vtek.world/pmis/",
      github: "",
      tags: ["E2E Test", "Vue.js", "Docker", "Redis", "SaaS", "CodeceptJS", "Cypress"],
    },
    {
      title: "Okosis Otomasyon - Netbus Pro Cloud System",
      description:
        "Okosis Otomasyon'da, Netbus Pro Cloud System projesi kapsamında, mevcut Angular tabanlı web uygulamasına katkı sağladım. Mevcut kullanıcı arayüzünü iyileştirerek, kullanıcı deneyimini güçlendirdim ve sistemin verimliliğini artırdım.",
      longDescription:
        "Netbus Pro Cloud System, endüstriyel otomasyon sistemlerinin uzaktan izlenmesi ve yönetilmesi için geliştirilmiş bir bulut tabanlı platformdur. Bu projede, Angular framework'ü kullanarak frontend geliştirme çalışmaları yaptım. Kullanıcı arayüzünü yeniden tasarlayarak daha sezgisel ve kullanıcı dostu bir deneyim oluşturdum. MongoDB veritabanı ile entegrasyon sağlayarak veri akışını optimize ettim. Ayrıca, gerçek zamanlı veri görselleştirme modülleri geliştirerek, kullanıcıların sistem performansını daha etkili bir şekilde izlemelerini sağladım. Proje sonucunda, platform kullanımı kolaylaştı ve müşteri memnuniyeti arttı.",
      image: "/netbus.png",
      date: "Ağustos 2024",
      link: "https://netbus.io/netbus-pro",
      github: "",
      tags: ["Angular", ".NET", "MongoDB", "Web GUI", "Otomasyon", "Responsive Design"],
    },
    {
      title: "E-Ticaret Web Sitesi – Modern ve Mobil Uyumlu Alışveriş Deneyimi",
      description:
        "Kullanıcı dostu arayüzüyle geliştirilen bu e-ticaret sitesi, alışveriş deneyimini sade ve etkili bir şekilde sunar.",
      longDescription:
        "Bu proje, modern web teknolojileri kullanılarak geliştirilen ve tamamen frontend odaklı bir e-ticaret sitesidir. Next.js ve React ile oluşturulan bu platformda, ürün listeleme, ürün detay sayfaları, filtreleme ve kategoriye göre gezinme gibi temel e-ticaret işlevleri kullanıcı deneyimi öncelenerek tasarlanmıştır. Stil yapısı Tailwind CSS ile oluşturulmuş; mobil uyumluluk, hızlı sayfa geçişleri ve kullanıcı odaklı animasyonlarla desteklenmiştir. Ürün verileri manuel olarak entegre edilmiş olup, proje backend veya API entegrasyonu olmadan arayüz geliştirme becerilerini yansıtmaktadır.",
      image: "/ecommerce-site.png",
      date: "2025",
      link: "https://nazli-ecommerce.vercel.app", // varsa demo link
      github: "https://github.com/kullaniciadi/ecommerce-frontend", // varsa GitHub repo
      tags: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Frontend",
        "E-Ticaret",
        "Responsive Design",
        "UI/UX",
        "Web Arayüz"
      ],
    },
    {
      title: "Film Keşif Platformu – Next.js Frontend Uygulaması",
      description:
        "Next.js kullanılarak geliştirilen, film verilerinin doğrudan uygulama içerisinde yönetildiği frontend odaklı bir platform.",
      longDescription:
        "Bu proje, tamamen frontend teknolojileri ile geliştirilmiş olup, film verileri uygulama içerisinde statik olarak yönetilmektedir. Kullanıcılar, zengin içerik ve detaylı film bilgilerine hızlı ve akıcı bir arayüz üzerinden erişim sağlamaktadır. Modern React ve Next.js teknikleri kullanılarak SEO uyumlu ve responsive bir deneyim sunulmuştur.",
      image: "/filmsite.png",
      date: "Mayıs 2025",
      link: "https://manual-movies-site.com",
      github: "https://github.com/username/manual-movies-frontend",
      tags: ["Next.js", "React", "Frontend", "Statik Veri", "Film Keşif"],
    },
    {
      title: "Remote Work Finder – Next.js Tabanlı Uzaktan İş Platformu",
      description:
        "Next.js ile geliştirilen modern ve kullanıcı dostu bir arayüz üzerinden, uzaktan iş ilanlarının keşfedilmesini sağlayan frontend uygulaması.",
      longDescription:
        "Bu proje, uzaktan çalışmak isteyen bireyler için iş ilanlarını listeleyen bir platformun kullanıcı arayüzünü kapsamaktadır. Uygulama; iş ilanı arama, filtreleme, favorilere ekleme, başvuru yapma ve başvuruları takip etme gibi temel işlevleri içeren kapsamlı bir frontend mimarisi sunar. Tüm sayfalar React ve Next.js kullanılarak performans ve erişilebilirlik öncelikli şekilde tasarlanmıştır. Tasarımda Tailwind CSS ile modern ve ölçeklenebilir bir yapı benimsenmiştir. Proje, ileri düzey komponent yapısı, route yönetimi ve kullanıcı deneyimini önceleyen detaylarla profesyonel bir arayüz geliştirme pratiği sunar.",
      image: "/remote-work.png",
      date: "Mayıs 2025",
      link: "https://remote-work-finder.vercel.app",
      github: "https://github.com/kullaniciadi/remote-work-finder-frontend",
      tags: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Frontend",
        "İş İlanları",
        "Uzaktan Çalışma",
        "Kullanıcı Deneyimi",
        "Responsive Tasarım"
      ],
    },
    {
      title: "Kişisel Portfolio Web Sitesi – Bilgisayar Mühendisi için Modern Tanıtım Sitesi",
      description:
        "Bilgisayar mühendisliği alanındaki birikimimi, projelerimi ve yeteneklerimi sergilediğim profesyonel kişisel web sitesi.",
      longDescription:
        "Bu proje, yazılım geliştirme alanındaki yetkinliklerimi ve hayata geçirdiğim projeleri sergilemek amacıyla geliştirdiğim modern bir portfolio web sitesidir. Next.js ile geliştirilen frontend yapısı, React bileşen mimarisiyle modüler olarak organize edilmiştir. Tailwind CSS ile oluşturulan stil yapısı sayesinde hem mobil uyumlu hem de hızlı yüklenen bir kullanıcı arayüzü sunulmuştur. Sayfalar arasında; Hakkımda, Projeler, Hizmetler, İletişim ve CV bölümleri bulunmaktadır. SEO uyumluluğu, sade arayüzü ve etkileyici animasyonlarıyla profesyonel dijital kimliğimi yansıtmaktadır.",
      image: "/portfolio-site.png",
      date: "2025",
      link: "https://nazli.dev", // varsa kendi domainin veya vercel linki
      github: "https://github.com/kullaniciadi/personal-portfolio", // varsa GitHub repo
      tags: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Frontend",
        "Portfolio",
        "Responsive Design",
        "SEO",
        "Web Geliştirme"
      ],
    },
  ]

  return (
    <>
      <PageHeader title="Projelerim" description="Geliştirdiğim ve katkıda bulunduğum projeler" />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="project-card neon-border overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="project-card-image h-64 md:h-auto relative">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6 flex flex-col">
                    <div className="flex items-center mb-2 text-foreground/70">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">{project.date}</span>
                    </div>
                    <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-foreground/80 mb-4">{project.description}</p>
                    <p className="text-foreground/80 mb-6 text-sm">{project.longDescription}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3 mt-auto">
                      {project.link && (
                        <Button variant="outline" size="sm" asChild>
                          <Link href={project.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" /> Ziyaret Et
                          </Link>
                        </Button>
                      )}
                      {project.github && (
                        <Button variant="outline" size="sm" asChild>
                          <Link href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" /> GitHub
                          </Link>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}
