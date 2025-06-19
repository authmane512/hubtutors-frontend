"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TutorGrid } from "@/components/tutor-grid"
import { featuredTutors } from "@/lib/tutors-data"
import { Search, MapPin, Users, Clock, Star, ChevronRight, GraduationCap, CheckCircle, X } from "lucide-react"
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
  const [subjectSearch, setSubjectSearch] = useState("")
  const [locationSearch, setLocationSearch] = useState("")
  const [isSubjectSelectOpen, setIsSubjectSelectOpen] = useState(false)
  const [isLocationSelectOpen, setIsLocationSelectOpen] = useState(false)

  // Complete subjects list for search
  const allSubjects = [
    { value: "mathematiques", label: "Mathématiques", icon: "📐" },
    { value: "francais", label: "Français", icon: "📚" },
    { value: "anglais", label: "Anglais", icon: "🇬🇧" },
    { value: "allemand", label: "Allemand", icon: "🇩🇪" },
    { value: "italien", label: "Italien", icon: "🇮🇹" },
    { value: "espagnol", label: "Espagnol", icon: "🇪🇸" },
    { value: "sciences", label: "Sciences", icon: "🔬" },
    { value: "physique", label: "Physique", icon: "⚛️" },
    { value: "chimie", label: "Chimie", icon: "🧪" },
    { value: "biologie", label: "Biologie", icon: "🧬" },
    { value: "histoire", label: "Histoire", icon: "📜" },
    { value: "geographie", label: "Géographie", icon: "🌍" },
    { value: "philosophie", label: "Philosophie", icon: "🤔" },
    { value: "economie", label: "Économie", icon: "💰" },
    { value: "informatique", label: "Informatique", icon: "💻" },
    { value: "musique", label: "Musique", icon: "🎵" },
    { value: "art", label: "Art", icon: "🎨" },
    { value: "sport", label: "Sport", icon: "⚽" },
    { value: "latin", label: "Latin", icon: "🏛️" },
    { value: "grec", label: "Grec", icon: "🏺" },
  ]

  // Complete locations list for search
  const allLocations = [
    { value: "en-ligne", label: "En ligne", icon: "💻" },
    { value: "zurich", label: "Zurich", icon: "🏙️" },
    { value: "geneve", label: "Genève", icon: "🏛️" },
    { value: "lausanne", label: "Lausanne", icon: "🏔️" },
    { value: "bale", label: "Bâle", icon: "🌉" },
    { value: "berne", label: "Berne", icon: "🐻" },
    { value: "winterthur", label: "Winterthur", icon: "🏘️" },
    { value: "lucerne", label: "Lucerne", icon: "🏔️" },
    { value: "saint-gall", label: "Saint-Gall", icon: "🏰" },
    { value: "lugano", label: "Lugano", icon: "🌊" },
    { value: "bienne", label: "Bienne", icon: "🏞️" },
    { value: "thoune", label: "Thoune", icon: "🏔️" },
    { value: "koniz", label: "Köniz", icon: "🏘️" },
    { value: "la-chaux-de-fonds", label: "La Chaux-de-Fonds", icon: "⌚" },
    { value: "fribourg", label: "Fribourg", icon: "🏰" },
    { value: "schaffhouse", label: "Schaffhouse", icon: "🏰" },
    { value: "coire", label: "Coire", icon: "🏔️" },
    { value: "neuchatel", label: "Neuchâtel", icon: "🏞️" },
    { value: "vernier", label: "Vernier", icon: "🏘️" },
    { value: "uster", label: "Uster", icon: "🏘️" },
    { value: "sion", label: "Sion", icon: "🏔️" },
    { value: "lancy", label: "Lancy", icon: "🏘️" },
    { value: "yverdon-les-bains", label: "Yverdon-les-Bains", icon: "♨️" },
    { value: "zug", label: "Zoug", icon: "🏞️" },
    { value: "emmen", label: "Emmen", icon: "🏘️" },
  ]

  // Filter subjects based on search
  const filteredSubjects = useMemo(() => {
    if (!subjectSearch) return allSubjects
    return allSubjects.filter(subject =>
      subject.label.toLowerCase().includes(subjectSearch.toLowerCase())
    )
  }, [subjectSearch])

  // Filter locations based on search
  const filteredLocations = useMemo(() => {
    if (!locationSearch) return allLocations
    return allLocations.filter(location =>
      location.label.toLowerCase().includes(locationSearch.toLowerCase())
    )
  }, [locationSearch])

  // Exercises and corrections data
  const exercisesData = [
    {
      id: 1,
      title: "Corrigés de 9e",
      image: "/images/maths-9e.jpg",
      href: "/corriges/9e",
      isComingSoon: false
    },
    {
      id: 2,
      title: "Corrigés de 10e",
      image: "/images/maths-10e.jpg",
      href: "/corriges/10e",
      isComingSoon: false
    },
    {
      id: 3,
      title: "Corrigés de 11e",
      image: "/images/maths-11e.jpg",
      href: "/corriges/11e",
      isComingSoon: false
    },
    {
      id: 4,
      title: "Exercices de 9e (prochainement)",
      image: "/images/maths-9e.jpg",
      href: "#",
      isComingSoon: true
    },
    {
      id: 5,
      title: "Exercices de 10e",
      image: "/images/maths-10e.jpg",
      href: "/exercices/10e",
      isComingSoon: false
    },
    {
      id: 6,
      title: "Exercices de 11e",
      image: "/images/maths-11e.jpg",
      href: "/exercices/11e",
      isComingSoon: false
    },
  ]

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

  const handleSubjectChange = (value: string) => {
    setSubject(value)
    setSubjectSearch("")
    setIsSubjectSelectOpen(false)
  }

  const handleLocationChange = (value: string) => {
    setLocation(value)
    setLocationSearch("")
    setIsLocationSelectOpen(false)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (subject) {
      const searchLocation = location || "suisse"
      router.push(`/cours/${subject.toLowerCase()}/${searchLocation.toLowerCase()}`)
    }
  }

  return (
    <div className="flex flex-col">
      {/* Promotional Banner */}
      <section className="bg-primary text-white py-3 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="text-center md:text-left">
              <p className="text-sm md:text-base font-medium">
                30 min de cours gratuit et sans engagement puis dès 20 CHF/heure !
              </p>
            </div>
            <Button
              variant="secondary"
              size="sm"
              className="bg-white text-primary hover:bg-gray-100 font-medium whitespace-nowrap"
            >
              Obtenir un cours gratuit
            </Button>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-white to-primary/5 pt-20 pb-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Trouvez l'enseignant particulier idéal en Suisse
            </h1>
            <p className="text-xl text-gray-600 mb-10">
              Des enseignants variés pour tous les niveaux et de nombreuses matières
            </p>

            {/* Search Form */}
            <form onSubmit={handleSearch} className="bg-white rounded-lg shadow-lg p-4 md:p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-1">
                  <Select
                    value={subject}
                    onValueChange={handleSubjectChange}
                    open={isSubjectSelectOpen}
                    onOpenChange={setIsSubjectSelectOpen}
                  >
                    <SelectTrigger className="w-full h-12">
                      <SelectValue placeholder="Choisir une matière" />
                    </SelectTrigger>
                    <SelectContent className="max-h-[300px]">
                      <div className="sticky top-0 bg-white p-2 border-b">
                        <div className="relative">
                          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                          <Input
                            placeholder="Rechercher une matière..."
                            value={subjectSearch}
                            onChange={(e) => setSubjectSearch(e.target.value)}
                            className="pl-8 h-8 text-sm"
                            onClick={(e) => e.stopPropagation()}
                          />
                          {subjectSearch && (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation()
                                setSubjectSearch("")
                              }}
                              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          )}
                        </div>
                      </div>
                      <div className="max-h-[200px] overflow-y-auto">
                        {filteredSubjects.length > 0 ? (
                          filteredSubjects.map((subjectOption) => (
                            <SelectItem key={subjectOption.value} value={subjectOption.value}>
                              <div className="flex items-center space-x-2">
                                <span>{subjectOption.icon}</span>
                                <span>{subjectOption.label}</span>
                              </div>
                            </SelectItem>
                          ))
                        ) : (
                          <div className="p-2 text-sm text-gray-500 text-center">
                            Aucune matière trouvée
                          </div>
                        )}
                      </div>
                    </SelectContent>
                  </Select>
                </div>
                <div className="md:col-span-1">
                  <Select
                    value={location}
                    onValueChange={handleLocationChange}
                    open={isLocationSelectOpen}
                    onOpenChange={setIsLocationSelectOpen}
                  >
                    <SelectTrigger className="w-full h-12">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                        <SelectValue placeholder="Lieu ou 'en ligne'" />
                      </div>
                    </SelectTrigger>
                    <SelectContent className="max-h-[300px]">
                      <div className="sticky top-0 bg-white p-2 border-b">
                        <div className="relative">
                          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                          <Input
                            placeholder="Rechercher un lieu..."
                            value={locationSearch}
                            onChange={(e) => setLocationSearch(e.target.value)}
                            className="pl-8 h-8 text-sm"
                            onClick={(e) => e.stopPropagation()}
                          />
                          {locationSearch && (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation()
                                setLocationSearch("")
                              }}
                              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          )}
                        </div>
                      </div>
                      <div className="max-h-[200px] overflow-y-auto">
                        {filteredLocations.length > 0 ? (
                          filteredLocations.map((locationOption) => (
                            <SelectItem key={locationOption.value} value={locationOption.value}>
                              <div className="flex items-center space-x-2">
                                <span>{locationOption.icon}</span>
                                <span>{locationOption.label}</span>
                              </div>
                            </SelectItem>
                          ))
                        ) : (
                          <div className="p-2 text-sm text-gray-500 text-center">
                            Aucun lieu trouvé
                          </div>
                        )}
                      </div>
                    </SelectContent>
                  </Select>
                </div>
                <div className="md:col-span-1">
                  <Button type="submit" className="w-full h-12 bg-primary hover:bg-primary/90 text-white">
                    <Search className="mr-2 h-5 w-5" />
                    Rechercher
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Exercices et Corrigés */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Exercices et Corrigés</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exercisesData.map((exercise) => (
              <div key={exercise.id} className="group">
                {exercise.isComingSoon ? (
                  <Card className="cursor-not-allowed opacity-60 h-full">
                    <CardContent className="p-0">
                      <div className="relative">
                        <Image
                          src={exercise.image}
                          alt={exercise.title}
                          width={400}
                          height={250}
                          className="w-full h-48 object-contain rounded-t-lg bg-gray-50"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="font-semibold text-gray-500 text-center">
                          {exercise.title}
                        </h3>
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <Link href={exercise.href}>
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                      <CardContent className="p-0">
                        <div className="relative">
                          <Image
                            src={exercise.image}
                            alt={exercise.title}
                            width={400}
                            height={250}
                            className="w-full h-48 object-contain rounded-t-lg bg-gray-50 group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors text-center">
                            {exercise.title}
                          </h3>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                )}
              </div>
            ))}
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
          <TutorGrid
            tutors={featuredTutors}
            columns="3"
            maxItems={3}
            className="mb-8"
          />
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