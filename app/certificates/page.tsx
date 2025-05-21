"use client"

import PageHeader from "@/components/page-header"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Calendar, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CertificatesPage() {
  const certificates = [
    {
      title: "Web Geliştirme Bootcamp",
      issuer: "Turkcell Geleceği Yazanlar",
      date: "Nisan 2025",
      description: "HTML, CSS, JavaScript ve React.js kullanarak modern web uygulamaları geliştirme eğitimi",
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Responsive Design"],
      image: "/placeholder.svg?height=300&width=400",
      link: "https://nazlinuresmeray.com.tr/certificates/web-development-bootcamp",
    },
    {
      title: "Python ile Veri Bilimi",
      issuer: "BTK Akademi",
      date: "Mart 2025",
      description: "Python programlama dili kullanarak veri analizi ve görselleştirme teknikleri",
      skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Veri Analizi"],
      image: "/placeholder.svg?height=300&width=400",
      link: "https://nazlinuresmeray.com.tr/certificates/data-science-with-python",
    },
    {
      title: "Angular Temelleri",
      issuer: "Udemy",
      date: "Şubat 2025",
      description: "Angular framework kullanarak single-page uygulamalar geliştirme",
      skills: ["Angular", "TypeScript", "RxJS", "Component-Based Architecture"],
      image: "/placeholder.svg?height=300&width=400",
      link: "https://nazlinuresmeray.com.tr/certificates/angular-fundamentals",
    },
    {
      title: "Siber Güvenlik Temelleri",
      issuer: "Turkcell Geleceği Yazanlar",
      date: "Ocak 2025",
      description: "Temel siber güvenlik kavramları ve web uygulamaları güvenliği",
      skills: ["Siber Güvenlik", "Web Güvenliği", "Güvenli Kodlama", "OWASP"],
      image: "/placeholder.svg?height=300&width=400",
      link: "https://nazlinuresmeray.com.tr/certificates/cyber-security-fundamentals",
    },
    {
      title: "MongoDB Veritabanı Yönetimi",
      issuer: "MongoDB University",
      date: "Aralık 2024",
      description: "MongoDB NoSQL veritabanı tasarımı, yönetimi ve optimizasyonu",
      skills: ["MongoDB", "NoSQL", "Database Design", "Aggregation Framework"],
      image: "/placeholder.svg?height=300&width=400",
      link: "https://nazlinuresmeray.com.tr/certificates/mongodb-database-management",
    },
    {
      title: ".NET Core Web API Geliştirme",
      issuer: "Microsoft Learn",
      date: "Kasım 2024",
      description: ".NET Core kullanarak RESTful API tasarımı ve implementasyonu",
      skills: [".NET Core", "C#", "RESTful API", "Entity Framework"],
      image: "/placeholder.svg?height=300&width=400",
      link: "https://nazlinuresmeray.com.tr/certificates/dotnet-core-web-api",
    },
    {
      title: "Docker ve Konteynerleştirme",
      issuer: "Udemy",
      date: "Ekim 2024",
      description: "Docker kullanarak uygulama konteynerleştirme ve dağıtım",
      skills: ["Docker", "Containerization", "DevOps", "Microservices"],
      image: "/placeholder.svg?height=300&width=400",
      link: "https://nazlinuresmeray.com.tr/certificates/docker-containerization",
    },
    {
      title: "Agile ve Scrum Metodolojileri",
      issuer: "Coursera",
      date: "Eylül 2024",
      description: "Agile proje yönetimi ve Scrum framework'ü uygulama",
      skills: ["Agile", "Scrum", "Project Management", "Team Collaboration"],
      image: "/placeholder.svg?height=300&width=400",
      link: "https://nazlinuresmeray.com.tr/certificates/agile-scrum-methodologies",
    },
  ]

  return (
    <>
      <PageHeader
        title="Sertifikalarım"
        description="Eğitim ve gelişim sürecimde edindiğim sertifikalar ve başarılar"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="certificate-card h-full flex flex-col neon-border overflow-hidden">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={cert.image || "/placeholder.svg"}
                    alt={cert.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6 flex-grow">
                  <div className="flex items-center mb-2 text-foreground/70">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">{cert.date}</span>
                  </div>
                  <div className="flex items-start mb-3">
                    <Award className="h-5 w-5 text-primary mr-2 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold">{cert.title}</h3>
                      <p className="text-foreground/70 text-sm">{cert.issuer}</p>
                    </div>
                  </div>
                  <p className="text-foreground/80 mb-4 text-sm">{cert.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {cert.skills.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{cert.skills.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href={cert.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" /> Sertifikayı Görüntüle
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-semibold mb-4 neon-text-purple">Tüm Sertifikalarım</h3>
          <p className="text-foreground/80 mb-6">
            Tüm sertifikalarımı ve eğitim başarılarımı görmek için sertifika sayfamı ziyaret edebilirsiniz.
          </p>
          <Button className="neon-border" asChild>
            <Link href="https://nazlinuresmeray.com.tr/certificates" target="_blank" rel="noopener noreferrer">
              <Award className="mr-2 h-4 w-4" /> Tüm Sertifikalarım
            </Link>
          </Button>
        </motion.div>
      </div>
    </>
  )
}
