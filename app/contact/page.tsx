"use client"

import type React from "react"

import { useState } from "react"
import PageHeader from "@/components/page-header"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { Mail, Phone, MapPin, Send, Linkedin, Github, ExternalLink } from "lucide-react"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mesajınız gönderildi!",
        description: "En kısa sürede size dönüş yapacağım.",
      })
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
      setIsSubmitting(false)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "E-posta",
      value: "nazlinuresmeray049@gmail.com",
      link: "mailto:nazlinuresmeray049@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Telefon",
      value: "+90 (538) 014 0045",
      link: "tel:+905380140045",
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Konum",
      value: "Kocaeli, Darıca",
      link: "https://maps.google.com/?q=Darıca,Kocaeli,Turkey",
    },
  ]

  const socialLinks = [
    {
      icon: <Linkedin className="h-6 w-6" />,
      title: "LinkedIn",
      value: "nazli-nur-esmeray",
      link: "https://www.linkedin.com/in/nazli-nur-esmeray-155a36213/",
    },
    {
      icon: <Github className="h-6 w-6" />,
      title: "GitHub",
      value: "nazlinres01",
      link: "https://github.com/nazlinres01",
    },
    {
      icon: <ExternalLink className="h-6 w-6" />,
      title: "Kişisel Web Sitesi",
      value: "nazlinuresmeray.com.tr",
      link: "https://nazlinuresmeray.com.tr",
    },
  ]

  return (
    <>
      <PageHeader
        title="İletişime Geç"
        description="Projeleriniz, iş fırsatları veya sorularınız için benimle iletişime geçebilirsiniz"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1 space-y-6"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6 neon-text-purple">İletişim Bilgilerim</h3>
              {contactInfo.map((info, index) => (
                <Card key={index} className="neon-border">
                  <CardContent className="p-6">
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start hover:opacity-80 transition-opacity"
                    >
                      <div className="mr-4 mt-1">{info.icon}</div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{info.title}</h3>
                        <p className="text-foreground/80">{info.value}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="space-y-6 mt-8">
              <h3 className="text-2xl font-semibold mb-6 neon-text-blue">Sosyal Medya</h3>
              {socialLinks.map((social, index) => (
                <Card key={index} className="neon-border">
                  <CardContent className="p-6">
                    <a
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start hover:opacity-80 transition-opacity"
                    >
                      <div className="mr-4 mt-1">{social.icon}</div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{social.title}</h3>
                        <p className="text-foreground/80">{social.value}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <Card className="neon-border">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6 neon-text-purple">Mesaj Gönder</h3>
                <p className="text-foreground/80 mb-6">
                  Projeleriniz, iş fırsatları veya sorularınız için aşağıdaki formu doldurarak benimle iletişime
                  geçebilirsiniz. En kısa sürede size dönüş yapacağım.
                </p>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        İsim
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="İsminizi girin"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        E-posta
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="E-posta adresinizi girin"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Konu
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Mesajınızın konusu"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Mesaj
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Mesajınızı yazın"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full neon-border" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Gönderiliyor...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="mr-2 h-4 w-4" /> Mesaj Gönder
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8"
            >
              <Card className="neon-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 neon-text-blue">İş Fırsatları</h3>
                  <p className="text-foreground/80 mb-4">
                    Yazılım geliştirme, web teknolojileri ve dijital çözümler alanlarında yeni fırsatları
                    değerlendirmeye açığım. Projeleriniz veya iş teklifleriniz için benimle iletişime geçebilirsiniz.
                  </p>
                  <p className="text-foreground/80">
                    Freelance projeler, tam zamanlı pozisyonlar veya danışmanlık hizmetleri için CV'mi inceleyebilir ve
                    benimle iletişime geçebilirsiniz.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
