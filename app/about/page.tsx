"use client"

import PageHeader from "@/components/page-header"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Languages, User, Award, Heart } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <>
      <PageHeader title="Hakkımda" description="Kendimi, eğitimimi ve ilgi alanlarımı daha yakından tanıyın" />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-24">
              <div className="relative w-full h-80 rounded-lg overflow-hidden neon-border mb-6">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Nazlı Nur Esmeray"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-6">
                <Card className="neon-border bg-background/40 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                        <User className="h-5 w-5 text-primary" />
                      </div>
                      <div>
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
                    </div>
                  </CardContent>
                </Card>

                <Card className="neon-border bg-background/40 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                        <Languages className="h-5 w-5 text-primary" />
                      </div>
                      <div>
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
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 neon-text-purple flex items-center">
                  <User className="mr-3 h-6 w-6" /> Kendimi Tanıtayım
                </h3>
                <div className="space-y-4 text-foreground/80">
                  <p className="text-lg">
                    Ben Nazlı Nur ESMERAY. Sakarya Üniversitesi Bilgisayar Mühendisliği mezunuyum. Yazılım geliştirme,
                    web teknolojileri ve dijital çözümlerle ilgileniyorum.
                  </p>
                  <p>
                    Eğitim sürecimde HTML, CSS, JavaScript, Python gibi teknolojilerde çalıştım; Angular, .NET, MongoDB
                    gibi araçlarla projeler geliştirdim. Bu süreçte hem teorik bilgilerimi pekiştirdim hem de pratik
                    uygulamalar geliştirerek deneyim kazandım.
                  </p>
                  <p>
                    Son bir yılda farklı firmalarda web geliştirme, yazılım testi, SEO, e-ticaret yönetimi ve IT desteği
                    gibi alanlarda aktif görev aldım. Bu deneyimler, farklı sektörlerde ve farklı teknolojilerle çalışma
                    fırsatı sunarak vizyonumu genişletti.
                  </p>
                  <p>
                    Teknik problemleri çözmekten, sistemleri optimize etmekten ve kullanıcı deneyimini geliştirmekten
                    keyif alıyorum. Analitik düşünme yeteneğim ve problem çözme becerilerim, karmaşık sorunları
                    parçalara ayırıp etkili çözümler üretmeme yardımcı oluyor.
                  </p>
                  <p>
                    Takım içinde hızlı adapte olur, çözüm odaklı hareket ederim. İletişim becerilerim ve ekip
                    çalışmasına yatkınlığım, projelerimde başarılı sonuçlar almamı sağlıyor. Yeni mezun biri olarak
                    öğrenmeye açık, üretmeye hevesli ve hızlı gelişen bir kariyer hedefliyorum.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6 neon-text-blue flex items-center">
                  <GraduationCap className="mr-3 h-6 w-6" /> Eğitim Geçmişim
                </h3>
                <Card className="neon-border">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold mb-2">Sakarya Üniversitesi</h4>
                    <p className="text-foreground/80 mb-4">
                      Bilgisayar Bilimleri Fakültesi, Bilgisayar Mühendisliği | 2019 - 2025
                    </p>
                    <div className="space-y-4 text-foreground/80">
                      <p>
                        Sakarya Üniversitesi Bilgisayar Mühendisliği bölümünde aldığım eğitimle, yazılım geliştirme,
                        algoritma tasarımı, veri yapıları, ağ yönetimi, yapay zeka ve makine öğrenimi gibi alanlarda
                        sağlam bir temel kazandım.
                      </p>
                      <p>
                        Proje tabanlı derslerde, hem teknik becerilerimi geliştirdim hem de takım çalışması ve proje
                        yönetimi konusunda önemli deneyimler edindim. Akademik hayatım boyunca öğrendiğim teorik
                        bilgileri, gerçek dünyada projelere dönüştürdüm.
                      </p>
                      <h5 className="font-semibold mt-4 mb-2">Edindiğim Temel Beceriler:</h5>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Programlama Dilleri: C, Java, Python, JavaScript</li>
                        <li>Yazılım Geliştirme Metodolojileri: Agile, Scrum</li>
                        <li>Veri Yapıları & Algoritmalar</li>
                        <li>Veritabanı Yönetimi: SQL, MongoDB</li>
                        <li>Ağ Yönetimi ve Güvenliği</li>
                        <li>Yapay Zeka & Makine Öğrenimi Temelleri</li>
                        <li>Proje Yönetimi & Takım Çalışması</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6 neon-text-purple flex items-center">
                  <Award className="mr-3 h-6 w-6" /> Profesyonel Hedeflerim
                </h3>
                <div className="space-y-4 text-foreground/80">
                  <p>
                    Kariyerimde sürekli gelişim ve öğrenmeyi hedefliyorum. Yazılım geliştirme alanında uzmanlaşarak,
                    kullanıcı odaklı ve yenilikçi çözümler üretmek istiyorum. Özellikle web teknolojileri ve yapay zeka
                    alanlarında kendimi geliştirerek, bu alanlarda uzman bir yazılım mühendisi olmayı hedefliyorum.
                  </p>
                  <p>
                    Kısa vadede, çalıştığım projelerde değer yaratmak ve teknik becerilerimi geliştirmek önceliğim. Orta
                    vadede, bir yazılım ekibinde liderlik rolü üstlenerek, hem teknik hem de yönetimsel becerilerimi
                    ilerletmek istiyorum. Uzun vadede ise, kendi yazılım girişimimi kurarak yenilikçi ürünler
                    geliştirmeyi hayal ediyorum.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6 neon-text-blue flex items-center">
                  <Heart className="mr-3 h-6 w-6" /> İlgi Alanlarım ve Hobilerim
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Card className="neon-border bg-background/40 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold mb-4">Yazılımcı Olarak Hobilerim</h4>
                      <ul className="space-y-3 text-foreground/80">
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>
                            <strong>Yaratıcı Kodlama Projeleri:</strong> Kendi projelerimi geliştirirken estetik ve
                            işlevselliği birleştiriyorum. Oyunlar ve interaktif web uygulamaları gibi projelerde
                            yaratıcılığımı keşfetmekten keyif alıyorum.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>
                            <strong>Teknoloji ve Yenilik Takibi:</strong> Yazılım dünyasında yeni teknolojiler ve
                            gelişen trendleri takip ederek, her zaman kendimi bir adım önde tutuyorum.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>
                            <strong>Yapay Zeka ve Derin Öğrenme:</strong> Yapay zeka ve derin öğrenme üzerine mini
                            projeler geliştiriyorum, özellikle NLP (Doğal Dil İşleme) alanında çalışmalar yapıyorum.
                          </span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="neon-border bg-background/40 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold mb-4">Kişisel İlgi Alanlarım</h4>
                      <ul className="space-y-3 text-foreground/80">
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>
                            <strong>Teknik Blog Yazarlığı:</strong> Yazılım dünyasında öğrendiklerimi toplulukla paylaşmak için blog yazıları yazıyorum.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>
                            <strong>Yabancı Dil Öğrenimi:</strong> Farklı dilleri öğrenmek ve kültürleri keşfetmek beni heyecanlandırıyor. Şu anda Japonca öğrenmeye odaklanıyorum.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>
                            <strong>Spor:</strong> Fiziksel ve zihinsel dengeyi sağlamak için düzenli olarak koşu ve yürüyüş yapıyorum.
                          </span>
                        </li>
                      </ul>

                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
