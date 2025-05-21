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
      title: "Web Sitesi İyileştirme, E-ticaret Sitesi Yönetimi",
      description:
        "Babil Otomasyon'da web sitelerinin geliştirilmesi ve performans optimizasyonu süreçlerine katkı sağladım. SEO iyileştirmeleri yaparak, web sitelerinin arama motorlarındaki görünürlüğünü artırdım ve modern web teknolojilerini entegre ederek kullanıcı deneyimini iyileştirdim.",
      longDescription:
        "Bu projede, e-ticaret sitesinin yükleme hızını %40 artırdım ve mobil uyumluluk sorunlarını çözdüm. Google Search Console ve Analytics entegrasyonları ile site performansını düzenli olarak takip ettim ve iyileştirme önerileri sundum. Ürün sayfalarını SEO açısından optimize ederek organik trafik artışı sağladım. Ayrıca, site güvenliğini artırmak için SSL sertifikası kurulumu ve güvenlik açıklarının kapatılması konusunda çalıştım.",
      image: "/placeholder.svg?height=400&width=600",
      date: "Ocak 2025",
      link: "https://babilotomasyon.com/",
      github: "",
      tags: ["SEO", "Web Tasarımı", "E-ticaret", "Performans Optimizasyonu", "Google Analytics"],
    },
    {
      title: "Vtek - I-VPORT PMIS Platformu",
      description:
        "Vtek'te, SaaS tabanlı I-VPORT PMIS platformunun liman yönetimi ve envanter takibi için geliştirilmesinde yer aldım. Projede, yazılımın güvenilirliğini artırmak ve liman operasyonlarını daha verimli hale getirmek için end-to-end (E2E) testleri gerçekleştirdim.",
      longDescription:
        "I-VPORT PMIS platformu, limanların operasyonel süreçlerini dijitalleştiren ve optimize eden bir yönetim sistemidir. Bu projede, kullanıcı senaryolarına dayalı kapsamlı test planları oluşturdum ve CodeceptJS ile Cypress kullanarak otomatik testler geliştirdim. Tespit edilen hataları detaylı raporlar halinde geliştirme ekibine ilettim ve çözüm süreçlerini takip ettim. Ayrıca, kullanıcı deneyimini iyileştirmek için arayüz testleri gerçekleştirdim ve geri bildirimler sundum. Proje sonucunda, platformun güvenilirliği ve kullanıcı memnuniyeti önemli ölçüde arttı.",
      image: "/placeholder.svg?height=400&width=600",
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
      image: "/placeholder.svg?height=400&width=600",
      date: "Ağustos 2024",
      link: "https://netbus.io/netbus-pro",
      github: "",
      tags: ["Angular", ".NET", "MongoDB", "Web GUI", "Otomasyon", "Responsive Design"],
    },
    {
      title: "E-Ticaret Ürün Yönetim Sistemi",
      description:
        "Kişisel bir proje olarak, küçük ve orta ölçekli işletmeler için basit bir e-ticaret ürün yönetim sistemi geliştirdim. Bu sistem, ürün kataloğu yönetimi, stok takibi ve basit analitik özellikleri sunuyor.",
      longDescription:
        "Bu projede, React ve Node.js kullanarak tam yığın bir web uygulaması geliştirdim. Frontend için modern bir kullanıcı arayüzü tasarladım ve state yönetimi için Redux kullandım. Backend tarafında Express.js ile RESTful API oluşturdum ve MongoDB veritabanı ile entegre ettim. Sistem, ürün ekleme, düzenleme, silme, kategorilere ayırma, stok takibi ve basit satış raporları gibi temel e-ticaret fonksiyonlarını içeriyor. Ayrıca, kullanıcı yetkilendirme ve kimlik doğrulama için JWT implementasyonu yaptım. Bu proje, modern web teknolojilerini öğrenmek ve pratik yapmak için geliştirdiğim kişisel bir çalışmadır.",
      image: "/placeholder.svg?height=400&width=600",
      date: "Haziran 2024",
      link: "",
      github: "https://github.com/nazlinres01/ecommerce-product-management",
      tags: ["React", "Node.js", "MongoDB", "Express", "Redux", "JWT", "RESTful API"],
    },
    {
      title: "Yapay Zeka Destekli Metin Özetleyici",
      description:
        "Uzun metinleri otomatik olarak özetleyen bir web uygulaması geliştirdim. Bu uygulama, doğal dil işleme teknikleri kullanarak metinleri analiz ediyor ve önemli noktaları çıkararak özet oluşturuyor.",
      longDescription:
        "Bu projede, Python ve Flask kullanarak bir backend API geliştirdim ve frontend için React.js kullandım. Doğal dil işleme için NLTK ve spaCy kütüphanelerinden yararlandım. Uygulama, metin içeriğini analiz ederek anahtar kelimeleri ve önemli cümleleri tespit ediyor, ardından bu bilgileri kullanarak anlamlı bir özet oluşturuyor. Kullanıcılar, özet uzunluğunu ve detay seviyesini ayarlayabiliyorlar. Ayrıca, özetlenen metinleri PDF olarak indirme özelliği de ekledim. Bu proje, yapay zeka ve doğal dil işleme alanlarındaki ilgimi geliştirmek için tasarladığım kişisel bir çalışmadır.",
      image: "/placeholder.svg?height=400&width=600",
      date: "Mart 2024",
      link: "",
      github: "https://github.com/nazlinres01/ai-text-summarizer",
      tags: ["Python", "Flask", "React", "NLP", "NLTK", "spaCy", "Yapay Zeka"],
    },
    {
      title: "Kişisel Blog ve Portfolyo Sitesi",
      description:
        "Kendi profesyonel deneyimlerimi ve teknik yazılarımı paylaşmak için bir blog ve portfolyo sitesi geliştirdim. Bu site, yazılım geliştirme sürecimde öğrendiğim teknolojileri ve en iyi uygulamaları sergilememi sağlıyor.",
      longDescription:
        "Bu projede, Next.js ve Tailwind CSS kullanarak modern ve performanslı bir web sitesi geliştirdim. Server-side rendering sayesinde SEO dostu bir yapı oluşturdum ve içerik yönetimi için Markdown formatını kullandım. Site, responsive tasarım prensipleriyle her cihazda optimum görüntülenme sağlıyor. Blog bölümünde, yazılım geliştirme, web teknolojileri ve kişisel deneyimlerimle ilgili yazılar paylaşıyorum. Portfolyo bölümünde ise, geliştirdiğim projeleri detaylı olarak sergiliyorum. Ayrıca, ziyaretçilerin benimle iletişime geçebilmesi için bir iletişim formu ekledim. Bu proje, hem teknik becerilerimi sergilemek hem de bilgi paylaşımı yapmak amacıyla geliştirdiğim kişisel bir çalışmadır.",
      image: "/placeholder.svg?height=400&width=600",
      date: "Ocak 2024",
      link: "https://nazlinuresmeray.com.tr",
      github: "https://github.com/nazlinres01/personal-website",
      tags: ["Next.js", "Tailwind CSS", "Markdown", "SEO", "Responsive Design", "Blog"],
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
