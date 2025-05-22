"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ProjectsSection() {
  const projects = [
    {
      title: "Uzman Yapsın – Uçtan Uca Dijital Proje Geliştirme",
      description:
        "Ortak yürüttüğümüz bu projede, sadece arayüz tasarımıyla sınırlı kalmayıp; frontend, backend, veritabanı yönetimi ve siber güvenlik dahil olmak üzere uçtan uca çözüm sağladık. Dijital projelerin fikir aşamasından yayına kadar tüm süreçlerinde aktif rol alarak, kullanıcı odaklı ve sürdürülebilir çözümler ürettik.",
      image: "/placeholder.svg?height=400&width=600",
      link: "https://uzmanyapsin.com.tr/",
      github: "",
      tags: ["UI/UX", "Frontend", "Backend", "Veritabanı", "Siber Güvenlik", "Proje Yönetimi"],
    },

    {
      title: "Web Sitesi İyileştirme, E-ticaret Sitesi Yönetimi",
      description:
        "Babil Otomasyon'da web sitelerinin geliştirilmesi ve performans optimizasyonu süreçlerine katkı sağladım. SEO iyileştirmeleri yaparak, web sitelerinin arama motorlarındaki görünürlüğünü artırdım ve modern web teknolojilerini entegre ederek kullanıcı deneyimini iyileştirdim.",
      image: "/placeholder.svg?height=400&width=600",
      link: "https://babilotomasyon.com/",
      github: "",
      tags: ["SEO", "Web Tasarımı", "E-ticaret", "Performans Optimizasyonu"],
    },
    {
      title: "Vtek - I-VPORT PMIS Platformu",
      description:
        "Vtek'te, SaaS tabanlı I-VPORT PMIS platformunun liman yönetimi ve envanter takibi için geliştirilmesinde yer aldım. Projede, yazılımın güvenilirliğini artırmak ve liman operasyonlarını daha verimli hale getirmek için end-to-end (E2E) testleri gerçekleştirdim.",
      image: "/placeholder.svg?height=400&width=600",
      link: "https://vtek.world/pmis/",
      github: "",
      tags: ["E2E Test", "Vue.js", "Docker", "Redis", "SaaS"],
    },
    {
      title: "Okosis Otomasyon - Netbus Pro Cloud System",
      description:
        "Okosis Otomasyon'da, Netbus Pro Cloud System projesi kapsamında, mevcut Angular tabanlı web uygulamasına katkı sağladım. Mevcut kullanıcı arayüzünü iyileştirerek, kullanıcı deneyimini güçlendirdim ve sistemin verimliliğini artırdım.",
      image: "/placeholder.svg?height=400&width=600",
      link: "https://netbus.io/netbus-pro",
      github: "",
      tags: ["Angular", ".NET", "MongoDB", "Web GUI", "Otomasyon"],
    },
    {
      title: "Kişisel Projeler",
      description:
        "Yazılım geliştirme sürecimde yer aldığım ve katkı sağladığım diğer projelerimi görmek için GitHub profilimi ziyaret edebilirsiniz. Burada, çeşitli teknolojilerle geliştirdiğim projeleri ve kod örneklerini bulabilirsiniz.",
      image: "/placeholder.svg?height=400&width=600",
      link: "",
      github: "https://github.com/nazlinres01",
      tags: ["Çeşitli Teknolojiler", "Kişisel Projeler", "Kod Örnekleri"],
    },
  ]

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Projelerim</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-6 text-foreground/80 max-w-2xl mx-auto">Geliştirdiğim ve katkıda bulunduğum projeler</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="neon-border h-full flex flex-col overflow-hidden">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6 flex-grow">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-foreground/80 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex gap-3">
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
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
