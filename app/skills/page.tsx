"use client"

import PageHeader from "@/components/page-header"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Globe, Server, Shield, Smartphone } from "lucide-react"

export default function SkillsPage() {
  const programmingSkills = [
    { name: "JavaScript", level: 65 },
    { name: "HTML & CSS", level: 70 },
    { name: "Python", level: 40 },
    { name: "C#", level: 55 },
    { name: "TypeScript", level: 45 },
  ]

  const frameworkSkills = [
    { name: "Angular", level: 60 },
    { name: "React", level: 65 },
    { name: "Node.js", level: 50 },
    { name: ".NET", level: 50 },
    { name: "MongoDB", level: 45 },
    { name: "SQL", level: 45 },
  ]

  const skillCategories = [
    {
      title: "Frontend Geliştirme",
      icon: <Globe className="h-10 w-10 text-primary" />,
      skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Angular", "Responsive Design", "UI/UX"],
      description:
        "Modern ve kullanıcı dostu arayüzler geliştirme konusunda deneyimliyim. Responsive tasarım prensiplerini uygulayarak her cihazda mükemmel görünen web uygulamaları oluşturuyorum.",
    },
    {
      title: "Backend Geliştirme",
      icon: <Server className="h-10 w-10 text-primary" />,
      skills: ["Node.js", ".NET", "RESTful API", "Express.js", "C#", "Python", "Java"],
      description:
        "Güçlü ve ölçeklenebilir backend sistemleri geliştirme konusunda tecrübeliyim. RESTful API'ler tasarlayarak frontend ve backend arasında verimli iletişim sağlıyorum.",
    },
    {
      title: "Veritabanı Yönetimi",
      icon: <Database className="h-10 w-10 text-primary" />,
      skills: ["SQL", "MongoDB", "Redis", "Database Design", "Query Optimization", "Data Modeling"],
      description:
        "Veritabanı tasarımı ve yönetimi konusunda bilgi sahibiyim. İlişkisel ve NoSQL veritabanlarıyla çalışarak, verimli veri depolama ve erişim çözümleri sunuyorum.",
    },
    {
      title: "DevOps & Araçlar",
      icon: <Code className="h-10 w-10 text-primary" />,
      skills: ["Git", "Docker", "CI/CD", "GitHub", "VS Code", "Agile/Scrum", "Jira"],
      description:
        "Modern geliştirme araçları ve metodolojileri kullanarak verimli yazılım geliştirme süreçleri uyguluyorum. Versiyon kontrolü ve işbirliği araçlarını etkin şekilde kullanıyorum.",
    },
    {
      title: "Siber Güvenlik",
      icon: <Shield className="h-10 w-10 text-primary" />,
      skills: ["Web Security", "Authentication", "Authorization", "OWASP", "Secure Coding"],
      description:
        "Güvenli yazılım geliştirme prensiplerini uygulayarak, güvenlik açıklarına karşı korumalı uygulamalar geliştiriyorum. OWASP güvenlik standartlarını takip ediyorum.",
    },
    {
      title: "Mobil Geliştirme",
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      skills: ["React Native", "Mobile UI Design", "Cross-platform Development"],
      description:
        "Cross-platform mobil uygulama geliştirme konusunda temel bilgilere sahibim. React Native kullanarak iOS ve Android platformları için uygulamalar geliştirebiliyorum.",
    },
  ]

  const otherSkills = [
    "SEO",
    "Docker",
    "Redis",
    "Siber Güvenlik",
    "Linux",
    "Ağ Yönetimi",
    "E-Ticaret",
    "Wordpress",
    "GitHub",
    "Otomasyon",
    "Yazılım Testi",
    "Google Analytics",
    "Agile/Scrum",
    "UI/UX Tasarım",
    "Responsive Design",
    "Web Güvenliği",
    "API Entegrasyonu",
    "Cisco",
    "Kali Linux",
    "Metasploit",
    "Wireshark",
  ]

  return (
    <>
      <PageHeader
        title="Yeteneklerim"
        description="Yazılım geliştirme sürecinde edindiğim teknik beceriler ve kullandığım teknolojiler"
      />

      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold mb-6 neon-text-blue">Programlama Dilleri & Teknolojiler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <h3 className="text-xl font-medium mb-4">Programlama Dilleri</h3>
              {programmingSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-foreground/80">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-medium mb-4">Framework & Teknolojiler</h3>
              {frameworkSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-foreground/80">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold mb-6 neon-text-purple">Uzmanlık Alanları</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="skill-card"
              >
                <Card className="h-full neon-border">
                  <CardContent className="p-6">
                    <div className="flex flex-col h-full">
                      <div className="flex items-center mb-4">
                        {category.icon}
                        <h3 className="text-xl font-semibold ml-3">{category.title}</h3>
                      </div>
                      <p className="text-foreground/80 mb-4">{category.description}</p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {category.skills.slice(0, 5).map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                        {category.skills.length > 5 && <Badge variant="outline">+{category.skills.length - 5}</Badge>}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-6 neon-text-blue">Diğer Yetenekler</h2>
          <div className="flex flex-wrap gap-3">
            {otherSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.03 }}
              >
                <Badge variant="secondary" className="text-sm py-2 px-3">
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  )
}
