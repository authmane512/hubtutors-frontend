import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">À propos de Suisseprof</h3>
            <p className="text-sm text-gray-600 mb-4">
              La plateforme de référence pour trouver des professeurs particuliers en Suisse. 
              Des milliers d'enseignants qualifiés à votre service.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/comment-ca-marche" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Comment ça marche ?
                </Link>
              </li>
              <li>
                <Link href="/devenir-enseignant" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Devenir enseignant
                </Link>
              </li>
              <li>
                <Link href="/rechercher" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Rechercher un cours
                </Link>
              </li>
              <li>
                <Link href="/aide" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Centre d'aide
                </Link>
              </li>
              <li>
                <Link href="/conditions" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Conditions d'utilisation
                </Link>
              </li>
              <li>
                <Link href="/confidentialite" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-600">
                <Mail className="h-4 w-4 mr-2 text-primary" />
                contact@suisseprof.ch
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Phone className="h-4 w-4 mr-2 text-primary" />
                +41 22 123 45 67
              </div>
              <div className="flex items-start text-sm text-gray-600">
                <MapPin className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                <span>
                  Rue du Rhône 100<br />
                  1204 Genève<br />
                  Suisse
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Contactez-nous</h3>
            <form className="space-y-3">
              <div>
                <Label htmlFor="footer-email" className="sr-only">
                  Email
                </Label>
                <Input
                  id="footer-email"
                  type="email"
                  placeholder="Votre email"
                  className="w-full"
                />
              </div>
              <div>
                <Label htmlFor="footer-message" className="sr-only">
                  Message
                </Label>
                <Textarea
                  id="footer-message"
                  placeholder="Votre message"
                  className="w-full h-20 resize-none"
                />
              </div>
              <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90">
                Envoyer
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 mb-4 sm:mb-0">
              2025 Suisseprof
            </p>
            <div className="flex space-x-6">
              <Link href="/mentions-legales" className="text-sm text-gray-600 hover:text-primary transition-colors">
                Mentions légales
              </Link>
              <Link href="/cookies" className="text-sm text-gray-600 hover:text-primary transition-colors">
                Cookies
              </Link>
              <Link href="/sitemap" className="text-sm text-gray-600 hover:text-primary transition-colors">
                Plan du site
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}