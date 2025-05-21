"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Bilgisayar Mühendisi"

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)

        // Reset after a pause
        setTimeout(() => {
          currentIndex = 0
          const resetInterval = setInterval(() => {
            if (currentIndex <= fullText.length) {
              setTypedText(fullText.slice(0, currentIndex))
              currentIndex++
            } else {
              clearInterval(resetInterval)
            }
          }, 100)
        }, 2000)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Merhaba, Ben <span className="gradient-text">Nazlı Nur Esmeray</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-8 md:h-12 mb-6"
            >
              <h2 className="text-xl md:text-3xl font-medium neon-text-blue">
                {typedText}
                <span className="animate-pulse">|</span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg md:text-xl text-foreground/80 mb-8"
            >
              Yazılım geliştirme, web teknolojileri ve dijital çözümlerle ilgileniyorum. Modern ve kullanıcı dostu
              uygulamalar geliştirmek için tutkuyla çalışıyorum.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button className="neon-border" size="lg" asChild>
                <Link href="/projects">
                  Projelerimi Gör <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">İletişime Geç</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex gap-4 mt-8"
            >
              <Link href="https://github.com/nazlinres01" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link
                href="https://www.linkedin.com/in/nazli-nur-esmeray-155a36213/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden neon-border">
              <Image
                src="/placeholder.svg?height=320&width=320"
                alt="Nazlı Nur Esmeray"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-20 md:mt-32"
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="gradient-text">Uzmanlık Alanlarım</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background/40 backdrop-blur-sm p-6 rounded-lg neon-border">
              <h3 className="text-xl font-semibold mb-4 neon-text-purple">Web Geliştirme</h3>
              <p className="text-foreground/80">
                Modern web teknolojileri kullanarak responsive ve kullanıcı dostu web uygulamaları geliştiriyorum.
                Angular, React ve .NET gibi teknolojilerle çalışıyorum.
              </p>
            </div>

            <div className="bg-background/40 backdrop-blur-sm p-6 rounded-lg neon-border">
              <h3 className="text-xl font-semibold mb-4 neon-text-blue">Yazılım Testi</h3>
              <p className="text-foreground/80">
                End-to-end (E2E) testleri gerçekleştirerek yazılımın güvenli ve hatasız çalışmasını sağlıyorum.
                CodeceptJS ve Cypress gibi araçlarla çalışma deneyimim var.
              </p>
            </div>

            <div className="bg-background/40 backdrop-blur-sm p-6 rounded-lg neon-border">
              <h3 className="text-xl font-semibold mb-4 neon-text-purple">SEO & Web Optimizasyonu</h3>
              <p className="text-foreground/80">
                Web sitelerinin arama motorlarındaki görünürlüğünü artırmak için SEO iyileştirmeleri yapıyorum. Google
                Search Console, Analytics ve Ads araçlarını kullanıyorum.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
