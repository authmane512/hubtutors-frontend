"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, MessageSquare, Clock } from "lucide-react"
import PhoneInput, { getCountries } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { useState } from 'react'

export function Footer() {
  const [phoneValue, setPhoneValue] = useState<string>()

  // Get all countries except one
  const availableCountries = getCountries().filter(country => country !== 'IL')

  return (
    <footer className="bg-gray-100">
      {/* Contact Section */}
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left side - Contact details */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                30 minutes de cours gratuit et sans engagement !
              </h2>
              <p className="text-xl md:text-2xl font-semibold mb-6">
                puis dès seulement 20 CHF par heure !
              </p>

              {/* Contact details */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-center lg:justify-start text-lg">
                  <Phone className="h-5 w-5 mr-3" />
                  <span>+41 22 123 45 67</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start text-lg">
                  <Mail className="h-5 w-5 mr-3" />
                  <span>contact@suisseprof.ch</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start text-lg">
                  <Clock className="h-5 w-5 mr-3" />
                  <span>24h/24, 7j/7</span>
                </div>
              </div>

              {/* WhatsApp button */}
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 text-lg"
                asChild
              >
                <Link href="https://wa.me/+41221234567" target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Discuter sur WhatsApp
                </Link>
              </Button>
            </div>

            {/* Right side - Contact form */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">Contactez-nous maintenant</h3>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="promo-firstName" className="text-gray-700">
                    Prénom
                  </Label>
                  <Input
                    id="promo-firstName"
                    type="text"
                    placeholder="Votre prénom"
                    className="w-full"
                  />
                </div>
                <div>
                  <Label htmlFor="promo-email" className="text-gray-700">
                    Email
                  </Label>
                  <Input
                    id="promo-email"
                    type="email"
                    placeholder="votre.email@exemple.com"
                    className="w-full"
                  />
                </div>
                <div>
                  <Label htmlFor="promo-phone" className="text-gray-700">
                    Téléphone
                  </Label>
                  <PhoneInput
                    placeholder="Entrez votre numéro de téléphone"
                    value={phoneValue}
                    onChange={setPhoneValue}
                    defaultCountry="CH"
                    countries={availableCountries}
                    className="phone-input-custom"
                  />
                </div>
                <div>
                  <Label htmlFor="promo-message" className="text-gray-700">
                    Message <span className="text-gray-500 text-sm">(optionnel)</span>
                  </Label>
                  <Textarea
                    id="promo-message"
                    placeholder="Décrivez vos besoins... (optionnel)"
                    className="w-full h-20 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary text-white hover:bg-primary/90 font-semibold"
                >
                  Recevoir un cours gratuit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Regular Footer Content */}
      <div className="pt-16 pb-8">
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
      </div>
    </footer>
  )
}