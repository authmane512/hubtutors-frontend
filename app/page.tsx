"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, MapPin, Users, Clock, Star, ChevronRight, GraduationCap, CheckCircle } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Home() {
  const router = useRouter()
  const [subject, setSubject] = useState("")
  const [location, setLocation] = useState("")

  const popularSubjects = [
    { name: "Mathématiques", icon: "📐", count: "2,345 profs" },
    { name: "Français", icon: "📚", count: "1,892 profs" },
    { name: "Anglais", icon: "🇬🇧", count: "1,567 profs" },
    { name: "Sciences", icon: "🔬", count: "1,234 profs" },
    { name: "Allemand", icon: "🇩🇪", count: "987 profs" },
    { name: "Italien", icon: "🇮🇹", count: "756 profs" },
    { name: "Physique", icon: "⚛️", count: "654 profs" },
    { name: "Chimie", icon: "🧪", count: "543 profs" },
  ]

  const featuredTutors = [
    {
      id: 1,
      name: "Marie Dubois",
      subject: "Mathématiques",
      location: "Genève",
      price: "60 CHF/h",
      rating: 4.9,
      reviews: 87,
      experience: "8 ans",
      avatar: "/images/placeholder-avatar.svg",
      bio: "Professeure certifiée avec une approche pédagogique innovante"
    },
    {
      id: 2,
      name: "Jean-Pierre Martin",
      subject: "Français",
      location: "Lausanne",
      price: "55 CHF/h",
      rating: 4.8,
      reviews: 62,
      experience: "6 ans",
      avatar: "/images/placeholder-avatar.svg",
      bio: "Spécialiste en littérature française et préparation d'examens"
    },
    {
      id: 3,
      name: "Sophie Müller",
      subject: "Allemand",
      location: "Zurich",
      price: "65 CHF/h",
      rating: 5.0,
      reviews: 104,
      experience: "10 ans",
      avatar: "/images/placeholder-avatar.svg",
      bio: "Native allemande, experte en préparation aux certificats Goethe"
    },
  ]

  const testimonials = [
    {
      id: 1,
      name: "Lucas Berger",
      role: "Étudiant en médecine",
      content: "Grâce à Suisseprof, j'ai trouvé un excellent professeur de chimie qui m'a aidé à réussir mes examens. Je recommande vivement !",
      rating: 5,
    },
    {
      id: 2,
      name: "Emma Favre",
      role: "Mère de deux enfants",
      content: "Mes enfants ont fait des progrès remarquables en mathématiques. Les professeurs sont vraiment qualifiés et patients.",
      rating: 5,
    },
    {
      id: 3,
      name: "Thomas Roux",
      role: "Professionnel",
      content: "J'ai pu améliorer mon anglais professionnel rapidement. La flexibilité des cours en ligne est parfaite pour mon emploi du temps.",
      rating: 5,
    },
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (subject) {
      const searchLocation = location || "suisse"
      router.push(`/cours/${subject.toLowerCase()}/${searchLocation.toLowerCase()}`)
    }
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-white to-primary/5 pt-20 pb-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Trouvez le professeur particulier idéal en Suisse
            </h1>
            <p className="text-xl text-gray-600 mb-10">
              Plus de 10 000 enseignants qualifiés pour vous accompagner dans votre réussite
            </p>

            {/* Search Form */}
            <form onSubmit={handleSearch} className="bg-white rounded-lg shadow-lg p-4 md:p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-1">
                  <Select value={subject} onValueChange={setSubject}>
                    <SelectTrigger className="w-full h-12">
                      <SelectValue placeholder="Choisir une matière" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mathematiques">Mathématiques</SelectItem>
                      <SelectItem value="francais">Français</SelectItem>
                      <SelectItem value="anglais">Anglais</SelectItem>
                      <SelectItem value="allemand">Allemand</SelectItem>
                      <SelectItem value="sciences">Sciences</SelectItem>
                      <SelectItem value="physique">Physique</SelectItem>
                      <SelectItem value="chimie">Chimie</SelectItem>
                      <SelectItem value="biologie">Biologie</SelectItem>
                      <SelectItem value="histoire">Histoire</SelectItem>
                      <SelectItem value="geographie">Géographie</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="md:col-span-1">
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      type="text"
                      placeholder="Lieu ou 'en ligne'"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="pl-10 h-12"
                    />
                  </div>
                </div>
                <div className="md:col-span-1">
                  <Button type="submit" className="w-full h-12 bg-primary hover:bg-primary/90 text-white">
                    <Search className="mr-2 h-5 w-5" />
                    Rechercher
                  </Button>
                </div>
              </div>
            </form>

            {/* Quick Stats */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center space-x-2">
                <Users className="h-8 w-8 text-primary" />
                <div className="text-left">
                  <p className="text-2xl font-bold text-gray-900">10,000+</p>
                  <p className="text-sm text-gray-600">Professeurs actifs</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <GraduationCap className="h-8 w-8 text-primary" />
                <div className="text-left">
                  <p className="text-2xl font-bold text-gray-900">50,000+</p>
                  <p className="text-sm text-gray-600">Élèves satisfaits</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Clock className="h-8 w-8 text-primary" />
                <div className="text-left">
                  <p className="text-2xl font-bold text-gray-900">24h</p>
                  <p className="text-sm text-gray-600">Réponse moyenne</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Subjects */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Matières populaires</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {popularSubjects.map((subject) => (
              <Link
                key={subject.name}
                href={`/cours/${subject.name.toLowerCase()}/suisse`}
                className="group"
              >
                <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-3">{subject.icon}</div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                      {subject.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">{subject.count}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tutors */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Professeurs en vedette</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez nos enseignants les mieux notés, sélectionnés pour leur excellence pédagogique
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {featuredTutors.map((tutor) => (
              <Link key={tutor.id} href={`/enseignant/${tutor.id}`}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={tutor.avatar} alt={tutor.name} />
                          <AvatarFallback>{tutor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-lg">{tutor.name}</CardTitle>
                          <CardDescription>{tutor.subject}</CardDescription>
                        </div>
                      </div>
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        {tutor.price}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">{tutor.bio}</p>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                          <span className="text-gray-600">{tutor.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 text-gray-400 mr-1" />
                          <span className="text-gray-600">{tutor.experience}</span>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 mr-1" />
                        <span className="font-semibold">{tutor.rating}</span>
                        <span className="text-gray-600 ml-1">({tutor.reviews})</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/rechercher">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                Voir tous les professeurs
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Comment ça marche ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Recherchez</h3>
              <p className="text-gray-600">
                Trouvez le professeur idéal en fonction de la matière, du lieu et de votre budget
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Contactez</h3>
              <p className="text-gray-600">
                Échangez gratuitement avec les professeurs et planifiez votre premier cours
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Apprenez</h3>
              <p className="text-gray-600">
                Suivez vos cours en toute sérénité et progressez à votre rythme
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Quelques témoignages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="h-full">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">&ldquo;{testimonial.content}&rdquo;</p>
                  <div className="mt-auto">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à commencer votre apprentissage ?</h2>
          <p className="text-xl mb-8 opacity-90">
            Rejoignez des milliers d'élèves qui ont déjà trouvé leur professeur idéal
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/rechercher">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                Trouver un professeur
              </Button>
            </Link>
            <Link href="/devenir-enseignant">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Devenir enseignant
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}