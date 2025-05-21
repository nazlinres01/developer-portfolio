import Link from "next/link"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Hakkımda", href: "/about" },
    { name: "Yetenekler", href: "/skills" },
    { name: "Deneyim", href: "/experience" },
    { name: "Projeler", href: "/projects" },
    { name: "Sertifikalar", href: "/certificates" },
    { name: "İletişim", href: "/contact" },
  ]

  return (
    <footer className="bg-background/80 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="text-xl font-bold gradient-text">
              Nazlı Nur Esmeray
            </Link>
            <p className="text-foreground/60 mt-4">
              Bilgisayar Mühendisi & Web Geliştirici olarak modern ve kullanıcı dostu web uygulamaları geliştiriyorum.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link
                href="https://github.com/nazlinres01"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/nazli-nur-esmeray-155a36213/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:nazlinuresmeray049@gmail.com"
                className="text-foreground/60 hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Sayfalar</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-foreground/60 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">İletişim</h3>
            <ul className="space-y-2 text-foreground/60">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 mt-0.5" />
                <span>nazlinuresmeray049@gmail.com</span>
              </li>
              <li>
                <Link
                  href="https://nazlinuresmeray.com.tr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-primary transition-colors"
                >
                  <ExternalLink className="h-5 w-5 mr-2" />
                  <span>nazlinuresmeray.com.tr</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/50 text-center text-foreground/60 text-sm">
          <p>© {currentYear} Nazlı Nur Esmeray. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}
