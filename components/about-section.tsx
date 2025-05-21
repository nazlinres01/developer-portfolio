"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, GraduationCap, Languages, User } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Hakkımda</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 neon-text-purple">Kendimi Tanıtayım</h3>
            <div className="space-y-4 text-foreground/80">
              <p>
                Ben Nazlı Nur ESMERAY. Sakarya Üniversitesi Bilgisayar Mühendisliği mezunuyum. Yazılım geliştirme, web
                teknolojileri ve dijital çözümlerle ilgileniyorum.
              </p>
              <p>
                Eğitim sürecimde HTML, CSS, JavaScript, Python gibi teknolojilerde çalıştım; Angular, .NET, MongoDB gibi
                araçlarla projeler geliştirdim.
              </p>
              <p>
                Son bir yılda farklı firmalarda web geliştirme, yazılım testi, SEO, e-ticaret yönetimi ve IT desteği
                gibi alanlarda aktif görev aldım. Teknik problemleri çözmekten, sistemleri optimize etmekten ve
                kullanıcı deneyimini geliştirmekten keyif alıyorum.
              </p>
              <p>
                Takım içinde hızlı adapte olur, çözüm odaklı hareket ederim. Yeni mezun biri olarak öğrenmeye açık,
                üretmeye hevesli ve hızlı gelişen bir kariyer hedefliyorum.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <Card className="neon-border bg-background/40 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Kişisel Bilgiler</h4>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li>
                      <span className="font-medium">Doğum Yılı:</span> 2001 (23 Yaş)
                    </li>
                    <li>
                      <span className="font-medium">Konum:</span> Kocaeli, Darıca
                    </li>
                    <li>
                      <span className="font-medium">E-posta:</span> nazlinuresmeray049@gmail.com
                    </li>
                    <li>
                      <span className="font-medium">Telefon:</span> +90 (538) 014 0045
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="neon-border bg-background/40 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Eğitim</h4>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li>
                      <span className="font-medium">Üniversite:</span> Sakarya Üniversitesi
                    </li>
                    <li>
                      <span className="font-medium">Bölüm:</span> Bilgisayar Mühendisliği
                    </li>
                    <li>
                      <span className="font-medium">Dönem:</span> 2019 - 2025
                    </li>
                    <li>
                      <span className="font-medium">Derece:</span> Lisans
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="neon-border bg-background/40 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Languages className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Diller</h4>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li>
                      <span className="font-medium">Türkçe:</span> Anadil
                    </li>
                    <li>
                      <span className="font-medium">İngilizce:</span> Orta Seviye
                    </li>
                    <li>
                      <span className="font-medium">Almanca:</span> Başlangıç
                    </li>
                    <li>
                      <span className="font-medium">Japonca:</span> Başlangıç
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="neon-border bg-background/40 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">İlgi Alanları</h4>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li>Yaratıcı Kodlama Projeleri</li>
                    <li>Teknoloji ve Yenilik Takibi</li>
                    <li>Yapay Zeka ve Derin Öğrenme</li>
                    <li>Teknik Blog Yazarlığı</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
