"use client"

import PageHeader from "@/components/page-header"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar, MapPin } from "lucide-react"

export default function ExperiencePage() {
  const experiences = [
    {
      title: "Bilgi İşlem Elemanı - Öğrenci",
      company: "Babil Otomasyon",
      location: "Kocaeli",
      period: "Aralık 2024 - Şubat 2025",
      description:
        "Web sitelerinin geliştirilmesi, hız optimizasyonu ve SEO uyumlu hale getirilmesi üzerine çalıştım. Google Search Console, Analytics ve Ads araçlarını kullanarak performans analizleri yaptım, kullanıcı deneyimini iyileştirmek için modern frontend çözümleri uyguladım.",
      responsibilities: [
        "Web sitelerinin SEO performansını artırmak için teknik iyileştirmeler",
        "Google Analytics ve Search Console ile site performans analizi",
        "E-ticaret platformlarının yönetimi ve optimizasyonu",
        "Şirket içi IT destek hizmetleri ve teknik sorunların çözümü",
        "Kullanıcı deneyimini iyileştirmek için frontend geliştirmeleri",
      ],
      skills: ["Web sitesi yönetimi", "SEO araçları", "E-ticaret platformları", "Teknik destek", "IT çözümleri"],
    },
    {
      title: "Yazılım Test Mühendisi - Öğrenci - Proje Bazlı",
      company: "Gosb Teknopark Vtek Bilişim Ve İletişim Teknolojileri",
      location: "İstanbul",
      period: "Eylül 2024 - Kasım 2024",
      description:
        "SaaS tabanlı I-VPORT PMIS platformunun geliştirme sürecinde görev aldım. Liman yönetimi ve envanter takibine odaklanan bu projede, yazılımın güvenli ve hatasız çalışması için end-to-end (E2E) testler gerçekleştirdim.",
      responsibilities: [
        "End-to-end (E2E) test senaryoları tasarlama ve uygulama",
        "Hata tespiti, raporlama ve takibi",
        "Test otomasyonu geliştirme ve bakımı",
        "Geliştirme ekibiyle yakın çalışarak kalite standartlarını sağlama",
        "Kullanıcı deneyimi testleri ve geri bildirim sağlama",
      ],
      skills: ["E2E Test", "CodeceptJS", "Cypress", "Vue.js", "Docker", "Redis"],
    },
    {
      title: "Web Yazılım Geliştirici - Öğrenci",
      company: "Okosis Otomasyon Ve Kontrol Sistemleri",
      location: "Kocaeli",
      period: "Aralık 2023 - Eylül 2024",
      description:
        "Okosis Otomasyon'da, Netbus Pro Cloud System projesi kapsamında, var olan Angular tabanlı web uygulamasının geliştirilmesine katkı sağladım. Kullanıcı deneyimini iyileştirmek ve uygulama verimliliğini artırmak amacıyla sistemde çeşitli optimizasyonlar yaptım.",
      responsibilities: [
        "Angular tabanlı web uygulaması geliştirme ve bakımı",
        "Kullanıcı arayüzü iyileştirmeleri ve performans optimizasyonu",
        "RESTful API entegrasyonları",
        "Veritabanı tasarımı ve yönetimi (MongoDB)",
        "Otomasyon sistemleri için web arayüzü geliştirme",
      ],
      skills: ["Angular", ".NET", "MongoDB", "Web GUI tasarımı", "SCADA", "PLC"],
    },
    {
      title: "Back-End Geliştirici - Stajyer",
      company: "Primeware Yazılım San. ve Tic. Ltd. Sti.",
      location: "İstanbul",
      period: "Temmuz 2023 - Ağustos 2023",
      description:
        "Primeware Yazılım'da stajyer olarak, masaüstü uygulama geliştirme süreçlerine katıldım. .NET teknolojisi ile backend geliştirmeleri yaptım, DevExpress kullanarak kullanıcı arayüzlerini iyileştirdim ve SQL veritabanı yönetimi konusunda deneyim kazandım.",
      responsibilities: [
        ".NET teknolojisi ile backend geliştirme",
        "DevExpress kullanarak kullanıcı arayüzü tasarımı",
        "SQL veritabanı tasarımı ve yönetimi",
        "Masaüstü uygulama geliştirme ve optimizasyon",
        "Hata ayıklama ve sorun giderme",
      ],
      skills: [".NET", "DevExpress", "SQL", "Masaüstü Uygulama Geliştirme"],
    },
    {
      title: "Tam Yığın Geliştirici  - Stajyer",
      company: "Akım Metal Ar-Ge Merkezi",
      location: "İstanbul",
      period: "Eylül 2022 - Ekim 2022",
      description:
        "Akım Metal'deki stajımda, web tasarımı ve frontend geliştirme konularında deneyim kazandım. HTML ve CSS ile kullanıcı dostu web sayfaları tasarladım ve JavaScript kullanarak temel interaktif özellikler ekledim.",
      responsibilities: [
        "HTML ve CSS ile web sayfası tasarımı",
        "JavaScript ile interaktif özellikler geliştirme",
        "Responsive tasarım prensiplerini uygulama",
        "Web sayfası performans optimizasyonu",
        "Temel web geliştirme araçlarını kullanma",
      ],
      skills: ["HTML", "CSS", "JavaScript", "Web Tasarımı"],
    },
  ]

  return (
    <>
      <PageHeader
        title="İş Deneyimlerim"
        description="Profesyonel kariyerimde edindiğim deneyimler ve çalıştığım projeler"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="timeline-item"
            >
              <div className="timeline-dot"></div>
              <div className={`md:w-1/2 ${index % 2 === 0 ? "md:ml-auto" : ""} md:pl-8 pl-12`}>
                <Card className="neon-border overflow-hidden">
                  <CardContent className="p-0">
                    <div className="bg-primary/10 p-6">
                      <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                      <div className="flex items-center text-foreground/80 mb-2">
                        <Briefcase className="h-4 w-4 mr-2" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center text-foreground/80 mb-2">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center text-foreground/80">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-foreground/80 mb-6">{exp.description}</p>

                      <h4 className="font-semibold mb-3">Sorumluluklar:</h4>
                      <ul className="list-disc pl-5 mb-6 text-foreground/80 space-y-1">
                        {exp.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex}>{resp}</li>
                        ))}
                      </ul>

                      <h4 className="font-semibold mb-3">Kullanılan Teknolojiler:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="outline">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}
