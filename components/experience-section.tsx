"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar } from "lucide-react"

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Bilgi İşlem Elemanı",
      company: "Babil Otomasyon",
      period: "Aralık 2024 - Şubat 2025",
      description:
        "Web sitelerinin geliştirilmesi, hız optimizasyonu ve SEO uyumlu hale getirilmesi üzerine çalıştım. Google Search Console, Analytics ve Ads araçlarını kullanarak performans analizleri yaptım, kullanıcı deneyimini iyileştirmek için modern frontend çözümleri uyguladım.",
      skills: ["Web sitesi yönetimi", "SEO araçları", "E-ticaret platformları", "Teknik destek", "IT çözümleri"],
    },
    {
      title: "Yazılım Test Mühendisi",
      company: "Gosb Teknopark Vtek Bilişim Ve İletişim Teknolojileri",
      period: "Eylül 2024 - Kasım 2024",
      description:
        "SaaS tabanlı I-VPORT PMIS platformunun geliştirme sürecinde görev aldım. Liman yönetimi ve envanter takibine odaklanan bu projede, yazılımın güvenli ve hatasız çalışması için end-to-end (E2E) testler gerçekleştirdim.",
      skills: ["E2E Test", "CodeceptJS", "Cypress", "Vue.js", "Docker", "Redis"],
    },
    {
      title: "Web Yazılım Geliştirici",
      company: "Okosis Otomasyon Ve Kontrol Sistemleri",
      period: "Aralık 2023 - Eylül 2024",
      description:
        "Okosis Otomasyon'da, Netbus Pro Cloud System projesi kapsamında, var olan Angular tabanlı web uygulamasının geliştirilmesine katkı sağladım. Kullanıcı deneyimini iyileştirmek ve uygulama verimliliğini artırmak amacıyla sistemde çeşitli optimizasyonlar yaptım.",
      skills: ["Angular", ".NET", "MongoDB", "Web GUI tasarımı", "SCADA", "PLC"],
    },
    {
      title: "Back-End Geliştirici",
      company: "Primeware Yazılım San. ve Tic. Ltd. Sti.",
      period: "Temmuz 2023 - Ağustos 2023",
      description:
        "Primeware Yazılım'da stajyer olarak, masaüstü uygulama geliştirme süreçlerine katıldım. .NET teknolojisi ile backend geliştirmeleri yaptım, DevExpress kullanarak kullanıcı arayüzlerini iyileştirdim ve SQL veritabanı yönetimi konusunda deneyim kazandım.",
      skills: [".NET", "DevExpress", "SQL", "Masaüstü Uygulama Geliştirme"],
    },
    {
      title: "Tam Yığın Geliştirici",
      company: "Akım Metal Ar-Ge Merkezi",
      period: "Eylül 2022 - Ekim 2022",
      description:
        "Akım Metal'deki stajımda, web tasarımı ve frontend geliştirme konularında deneyim kazandım. HTML ve CSS ile kullanıcı dostu web sayfaları tasarladım ve JavaScript kullanarak temel interaktif özellikler ekledim.",
      skills: ["HTML", "CSS", "JavaScript", "Web Tasarımı"],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">İş Deneyimlerim</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-6 text-foreground/80 max-w-2xl mx-auto">
            Profesyonel kariyerimde edindiğim deneyimler ve çalıştığım projeler
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="neon-border overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-4">
                    <div className="bg-primary/10 p-6 flex flex-col justify-center">
                      <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                      <div className="flex items-center text-foreground/80 mb-2">
                        <Briefcase className="h-4 w-4 mr-2" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center text-foreground/80">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <div className="p-6 md:col-span-3">
                      <p className="text-foreground/80 mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="outline">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
