"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { MapPin, Clock, Star, Globe, Users, Filter, X } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

import { use } from "react"

interface SearchPageProps {
  params: Promise<{
    matiere: string
    lieu: string
  }>
}

export default function SearchPage({ params }: SearchPageProps) {
  const { matiere, lieu } = use(params)
  const decodedMatiere = decodeURIComponent(matiere)
  const decodedLieu = decodeURIComponent(lieu)

  const [maxPrice, setMaxPrice] = useState([100])
  const [maxDistance, setMaxDistance] = useState([10])
  const [courseType, setCourseType] = useState("all")
  const [selectedLevels, setSelectedLevels] = useState<string[]>([])
  const [responseTime, setResponseTime] = useState("all")
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([])
  const [showFilters, setShowFilters] = useState(false)

  const tutors = [
    {
      id: 1,
      name: "Marie Dubois",
      subject: "Mathématiques",
      location: "Genève",
      distance: 2.5,
      price: 60,
      rating: 4.9,
      reviews: 87,
      experience: 8,
      avatar: "/images/placeholder-avatar.svg",
      title: "Professeure certifiée de mathématiques",
      isOnline: true,
      languages: ["Français", "Anglais"],
      levels: ["Secondaire I", "Secondaire II", "Supérieur"],
      responseTime: "< 2h",
      students: 45,
    },
    {
      id: 2,
      name: "Jean-Pierre Martin",
      subject: "Mathématiques",
      location: "Lausanne",
      distance: 5.0,
      price: 55,
      rating: 4.8,
      reviews: 62,
      experience: 6,
      avatar: "/images/placeholder-avatar.svg",
      title: "Expert en algèbre et géométrie",
      isOnline: true,
      languages: ["Français"],
      levels: ["Primaire", "Secondaire I", "Secondaire II"],
      responseTime: "< 24h",
      students: 32,
    },
    {
      id: 3,
      name: "Sophie Müller",
      subject: "Mathématiques",
      location: "Zurich",
      distance: 8.2,
      price: 65,
      rating: 5.0,
      reviews: 104,
      experience: 10,
      avatar: "/images/placeholder-avatar.svg",
      title: "Spécialiste en mathématiques avancées",
      isOnline: false,
      languages: ["Français", "Allemand", "Anglais"],
      levels: ["Secondaire II", "Supérieur", "Adultes"],
      responseTime: "< 12h",
      students: 68,
    },
    {
      id: 4,
      name: "Thomas Bernard",
      subject: "Mathématiques",
      location: "Berne",
      distance: 3.8,
      price: 50,
      rating: 4.7,
      reviews: 43,
      experience: 4,
      avatar: "/images/placeholder-avatar.svg",
      title: "Cours de soutien en mathématiques",
      isOnline: true,
      languages: ["Français", "Italien"],
      levels: ["Primaire", "Secondaire I"],
      responseTime: "< 48h",
      students: 28,
    },
    {
      id: 5,
      name: "Claire Fontaine",
      subject: "Mathématiques",
      location: "Fribourg",
      distance: 6.5,
      price: 70,
      rating: 4.9,
      reviews: 91,
      experience: 12,
      avatar: "/images/placeholder-avatar.svg",
      title: "Préparation aux examens de maturité",
      isOnline: true,
      languages: ["Français", "Anglais"],
      levels: ["Secondaire II", "Supérieur"],
      responseTime: "< 6h",
      students: 52,
    },
    {
      id: 6,
      name: "Marc Dupont",
      subject: "Mathématiques",
      location: "Neuchâtel",
      distance: 4.2,
      price: 58,
      rating: 4.6,
      reviews: 38,
      experience: 5,
      avatar: "/images/placeholder-avatar.svg",
      title: "Mathématiques pour tous niveaux",
      isOnline: false,
      languages: ["Français"],
      levels: ["Primaire", "Secondaire I", "Secondaire II", "Adultes"],
      responseTime: "< 24h",
      students: 25,
    },
    {
      id: 7,
      name: "Anna Schmidt",
      subject: "Mathématiques",
      location: "Bâle",
      distance: 7.3,
      price: 75,
      rating: 5.0,
      reviews: 120,
      experience: 15,
      avatar: "/images/placeholder-avatar.svg",
      title: "Docteure en mathématiques appliquées",
      isOnline: true,
      languages: ["Français", "Allemand", "Anglais", "Italien"],
      levels: ["Supérieur", "Adultes"],
      responseTime: "< 1h",
      students: 78,
    },
    {
      id: 8,
      name: "Pierre Moreau",
      subject: "Mathématiques",
      location: "Sion",
      distance: 9.1,
      price: 52,
      rating: 4.7,
      reviews: 55,
      experience: 7,
      avatar: "/images/placeholder-avatar.svg",
      title: "Soutien scolaire personnalisé",
      isOnline: true,
      languages: ["Français", "Espagnol"],
      levels: ["Primaire", "Secondaire I", "Apprentissage"],
      responseTime: "< 12h",
      students: 41,
    },
    {
      id: 9,
      name: "Isabelle Rousseau",
      subject: "Mathématiques",
      location: "Lucerne",
      distance: 5.7,
      price: 68,
      rating: 4.8,
      reviews: 73,
      experience: 9,
      avatar: "/images/placeholder-avatar.svg",
      title: "Cours intensifs de mathématiques",
      isOnline: false,
      languages: ["Français", "Allemand"],
      levels: ["Secondaire II", "Supérieur", "Apprentissage"],
      responseTime: "< 24h",
      students: 36,
    },
    {
      id: 10,
      name: "Daniel Weber",
      subject: "Mathématiques",
      location: "St-Gall",
      distance: 8.8,
      price: 62,
      rating: 4.9,
      reviews: 96,
      experience: 11,
      avatar: "/images/placeholder-avatar.svg",
      title: "Mathématiques et statistiques",
      isOnline: true,
      languages: ["Français", "Allemand", "Anglais"],
      levels: ["Secondaire II", "Supérieur", "Adultes"],
      responseTime: "< 6h",
      students: 59,
    },
    {
      id: 11,
      name: "Sylvie Blanc",
      subject: "Mathématiques",
      location: "Montreux",
      distance: 3.2,
      price: 56,
      rating: 4.6,
      reviews: 48,
      experience: 5,
      avatar: "/images/placeholder-avatar.svg",
      title: "Aide aux devoirs en mathématiques",
      isOnline: true,
      languages: ["Français", "Anglais"],
      levels: ["Primaire", "Secondaire I"],
      responseTime: "< 48h",
      students: 22,
    },
    {
      id: 12,
      name: "Robert Favre",
      subject: "Mathématiques",
      location: "Lugano",
      distance: 9.5,
      price: 72,
      rating: 4.9,
      reviews: 82,
      experience: 13,
      avatar: "/images/placeholder-avatar.svg",
      title: "Professeur universitaire de mathématiques",
      isOnline: true,
      languages: ["Français", "Italien", "Anglais"],
      levels: ["Supérieur", "Adultes"],
      responseTime: "< 12h",
      students: 64,
    },
  ]

  const levels = ["Primaire", "Secondaire I", "Secondaire II", "Supérieur", "Adultes", "Apprentissage"]
  const languages = ["Français", "Allemand", "Anglais", "Italien", "Espagnol"]

  const handleLevelChange = (level: string, checked: boolean) => {
    if (checked) {
      setSelectedLevels([...selectedLevels, level])
    } else {
      setSelectedLevels(selectedLevels.filter(l => l !== level))
    }
  }

  const handleLanguageChange = (language: string, checked: boolean) => {
    if (checked) {
      setSelectedLanguages([...selectedLanguages, language])
    } else {
      setSelectedLanguages(selectedLanguages.filter(l => l !== language))
    }
  }

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Prix maximal */}
      <div>
        <Label className="text-sm font-medium mb-2 block">
          Prix maximal: {maxPrice[0]} CHF/h
        </Label>
        <Slider
          value={maxPrice}
          onValueChange={setMaxPrice}
          max={150}
          min={20}
          step={5}
          className="w-full"
        />
      </div>

      {/* Distance maximale */}
      {decodedLieu !== "en ligne" && (
        <div>
          <Label className="text-sm font-medium mb-2 block">
            Distance maximale: {maxDistance[0]} km
          </Label>
          <Slider
            value={maxDistance}
            onValueChange={setMaxDistance}
            max={50}
            min={1}
            step={1}
            className="w-full"
          />
        </div>
      )}

      {/* Types de cours */}
      <div>
        <Label className="text-sm font-medium mb-2 block">Types de cours</Label>
        <RadioGroup value={courseType} onValueChange={setCourseType}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="all" id="all" />
            <Label htmlFor="all" className="font-normal cursor-pointer">Tous</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="online" id="online" />
            <Label htmlFor="online" className="font-normal cursor-pointer">En ligne uniquement</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="inperson" id="inperson" />
            <Label htmlFor="inperson" className="font-normal cursor-pointer">En présentiel uniquement</Label>
          </div>
        </RadioGroup>
      </div>

      {/* Niveaux */}
      <div>
        <Label className="text-sm font-medium mb-2 block">Niveaux</Label>
        <div className="space-y-2">
          {levels.map((level) => (
            <div key={level} className="flex items-center space-x-2">
              <Checkbox
                id={level}
                checked={selectedLevels.includes(level)}
                onCheckedChange={(checked) => handleLevelChange(level, checked as boolean)}
              />
              <Label htmlFor={level} className="font-normal cursor-pointer">
                {level}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Temps de réponse */}
      <div>
        <Label className="text-sm font-medium mb-2 block">Temps de réponse maximal</Label>
        <Select value={responseTime} onValueChange={setResponseTime}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tous</SelectItem>
            <SelectItem value="1h">&lt; 1 heure</SelectItem>
            <SelectItem value="6h">&lt; 6 heures</SelectItem>
            <SelectItem value="24h">&lt; 24 heures</SelectItem>
            <SelectItem value="48h">&lt; 48 heures</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Langues */}
      <div>
        <Label className="text-sm font-medium mb-2 block">Langues</Label>
        <div className="space-y-2">
          {languages.map((language) => (
            <div key={language} className="flex items-center space-x-2">
              <Checkbox
                id={language}
                checked={selectedLanguages.includes(language)}
                onCheckedChange={(checked) => handleLanguageChange(language, checked as boolean)}
              />
              <Label htmlFor={language} className="font-normal cursor-pointer">
                {language}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-900">
            Cours de {decodedMatiere} à {decodedLieu}
          </h1>
          <p className="text-gray-600 mt-1">
            {tutors.length} professeurs disponibles
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Desktop Filters */}
          <div className="hidden lg:block">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Filtres</CardTitle>
              </CardHeader>
              <CardContent>
                <FilterContent />
              </CardContent>
            </Card>
          </div>

          {/* Mobile Filter Button */}
          <div className="lg:hidden mb-4">
            <Sheet open={showFilters} onOpenChange={setShowFilters}>
              <SheetTrigger asChild>
                <Button variant="outline" className="w-full">
                  <Filter className="mr-2 h-4 w-4" />
                  Filtres
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>Filtres</SheetTitle>
                </SheetHeader>
                <div className="mt-6">
                  <FilterContent />
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Tutors Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {tutors.map((tutor) => (
                <Link key={tutor.id} href={`/enseignant/${tutor.id}`}>
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between mb-2">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={tutor.avatar} alt={tutor.name} />
                          <AvatarFallback>{tutor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          {tutor.price} CHF/h
                        </Badge>
                      </div>
                      <div>
                        <CardTitle className="text-lg">{tutor.name}</CardTitle>
                        <CardDescription className="text-sm">{tutor.title}</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        {tutor.isOnline && (
                          <Badge variant="outline" className="text-xs">
                            <Globe className="mr-1 h-3 w-3" />
                            En ligne
                          </Badge>
                        )}
                        <Badge variant="outline" className="text-xs">
                          <MapPin className="mr-1 h-3 w-3" />
                          {tutor.location} ({tutor.distance} km)
                        </Badge>
                      </div>
                      
                      <div className="text-sm text-gray-600">
                        <div className="flex items-center justify-between mb-1">
                          <span>Expérience: {tutor.experience} ans</span>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-500 mr-1" />
                            <span className="font-semibold">{tutor.rating}</span>
                            <span className="text-gray-500 ml-1">({tutor.reviews})</span>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 text-gray-400 mr-1" />
                          <span>{tutor.students} élèves</span>
                          <Clock className="h-4 w-4 text-gray-400 ml-3 mr-1" />
                          <span>{tutor.responseTime}</span>
                        </div>
                      </div>

                      <div className="pt-2 border-t">
                        <p className="text-xs text-gray-500 mb-1">Matières:</p>
                        <div className="flex flex-wrap gap-1">
                          <Badge variant="secondary" className="text-xs">
                            {tutor.subject}
                          </Badge>
                        </div>
                      </div>

                      <div>
                        <p className="text-xs text-gray-500 mb-1">Niveaux:</p>
                        <p className="text-xs text-gray-600">
                          {tutor.levels.slice(0, 2).join(", ")}
                          {tutor.levels.length > 2 && ` +${tutor.levels.length - 2}`}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs text-gray-500 mb-1">Langues:</p>
                        <p className="text-xs text-gray-600">
                          {tutor.languages.join(", ")}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Load More Button */}
            <div className="mt-8 text-center">
              <Button variant="outline" size="lg" className="min-w-[200px]">
                Voir plus d'enseignants
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}