"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function SkillsSection() {
  const programmingSkills = [
    { name: "JavaScript", level: 85 },
    { name: "HTML & CSS", level: 90 },
    { name: "Python", level: 75 },
    { name: "C#", level: 70 },
    { name: "TypeScript", level: 80 },
    { name: "Java", level: 65 },
  ]

  const frameworkSkills = [
    { name: "Angular", level: 80 },
    { name: "React", level: 75 },
    { name: "Node.js", level: 70 },
    { name: ".NET", level: 65 },
    { name: "MongoDB", level: 75 },
    { name: "SQL", level: 80 },
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
  ]

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Yeteneklerim</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-6 text-foreground/80 max-w-2xl mx-auto">
            Yazılım geliştirme sürecinde edindiğim teknik beceriler ve kullandığım teknolojiler
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 neon-text-blue">Programlama Dilleri</h3>
            <div className="space-y-6">
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 neon-text-purple">Framework & Teknolojiler</h3>
            <div className="space-y-6">
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
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold mb-6 text-center neon-text-blue">Diğer Yetenekler</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {otherSkills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-sm py-2 px-3">
                {skill}
              </Badge>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
