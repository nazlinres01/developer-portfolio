"use client"

import PageHeader from "@/components/page-header"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Calendar, Award } from "lucide-react"
import Link from "next/link"

export default function CertificatesPage() {
  const certificates = [
    {
      title: "Siber Güvenlik Eğitimleri (Devam Ediyor)",
      issuer: "Turkcell Geleceği Yazanlar",
      date: "2025",
      description: "Siber güvenliğe yönelik devam eden eğitim ve pratik uygulamalar",
      skills: ["Siber Güvenlik", "Web Güvenliği", "Güvenli Kodlama"],
      link: "https://www.beyazhacker.com/", // örnek link
    },
    {
      title: "Ağ Temelleri Sertifikası",
      issuer: "BTK Akademi",
      date: "Ekim 2023",
      description: "Bilgisayar ağlarının yapısı, iletişim protokolleri ve temel güvenlik önlemleri",
      skills: ["Network", "TCP/IP", "Routing", "Switching"],
      link: "https://drive.google.com/file/d/1TCzB4XlABLMRFxMD7UwPBIy_8X9qFOq3/view?usp=sharing",
    },
    {
      title: "Angular 7 Sertifikası",
      issuer: "BTK Akademi",
      date: "Ocak 2024",
      description: "Angular 7 ile modern web uygulamaları geliştirme",
      skills: ["Angular", "TypeScript", "SPA"],
      link: "https://drive.google.com/file/d/16M-uaPuyVVLttD3NfYxslGhLI2y9E16S/view?usp=sharing",
    },
    {
      title: "Makine Öğrenmesi 101-201",
      issuer: "Turkcell",
      date: "Kasım 2024",
      description: "Denetimli ve denetimsiz öğrenme algoritmalarına giriş",
      skills: ["Makine Öğrenmesi", "Python", "Scikit-learn"],
      link: "https://drive.google.com/file/d/1YwSW_Jeg9H6eW3UDyni6wgQ1nbnwogAo/view?usp=sharing",
    },
    {
      title: "React 101-201-301-401",
      issuer: "Turkcell",
      date: "Nisan 2024",
      description: "React ile ileri düzey komponent geliştirme ve context yönetimi",
      skills: ["React", "Hooks", "Context API"],
      link: "https://drive.google.com/file/d/1Z4Lvww7EPSBH7LBmxwG2np0YBPNdicg3/view?usp=sharing",
    },
    {
      title: "Angular 101-201-301",
      issuer: "Turkcell",
      date: "Mart 2024",
      description: "Angular ile modül yapıları, servisler ve HTTP entegrasyonu",
      skills: ["Angular", "RxJS", "HTTP Client"],
      link: "https://drive.google.com/file/d/16oX6oE2zg104CANF6DiyvOqxSlxAfzWt/view?usp=sharing",
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
      </div>
    </>
  )
}
