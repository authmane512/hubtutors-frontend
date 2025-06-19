"use client"

import { useState, useMemo } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TutorGrid } from "@/components/tutor-grid"
import { type Tutor } from "@/components/tutor-card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Filter, Search, MapPin, X } from "lucide-react"

interface SearchClientProps {
  matiere: string
  lieu: string
}

export default function SearchClient({ matiere, lieu }: SearchClientProps) {
  const router = useRouter()
  const decodedMatiere = decodeURIComponent(matiere)
  const decodedLieu = decodeURIComponent(lieu)

  // Subject and location selection states
  const [selectedSubject, setSelectedSubject] = useState(decodedMatiere)
  const [selectedLocation, setSelectedLocation] = useState(decodedLieu)
  const [subjectSearch, setSubjectSearch] = useState("")
  const [locationSearch, setLocationSearch] = useState("")
  const [isSubjectSelectOpen, setIsSubjectSelectOpen] = useState(false)
  const [isLocationSelectOpen, setIsLocationSelectOpen] = useState(false)

  // Filter states
  const [maxPrice, setMaxPrice] = useState([100])
  const [maxDistance, setMaxDistance] = useState([10])
  const [courseType, setCourseType] = useState("all")
  const [selectedLevels, setSelectedLevels] = useState<string[]>([])
  const [responseTime, setResponseTime] = useState("all")
  const [responseTimeHours, setResponseTimeHours] = useState([24])
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([])
  const [showFilters, setShowFilters] = useState(false)

  const tutors: Tutor[] = [
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
      bio: "Professeure certifiée de mathématiques avec une approche pédagogique innovante",
    },
    {
      id: 2,
      name: "Jean-Pierre Martin",
      subject: "Mathématiques",
      location: "Lausanne",
      price: "55 CHF/h",
      rating: 4.8,
      reviews: 62,
      experience: "6 ans",
      avatar: "/images/placeholder-avatar.svg",
      bio: "Expert en algèbre et géométrie avec une approche personnalisée",
    },
    {
      id: 3,
      name: "Sophie Müller",
      subject: "Mathématiques",
      location: "Zurich",
      price: "65 CHF/h",
      rating: 5.0,
      reviews: 104,
      experience: "10 ans",
      avatar: "/images/placeholder-avatar.svg",
      bio: "Spécialiste en mathématiques avancées et préparation d'examens",
    },
    {
      id: 4,
      name: "Thomas Bernard",
      subject: "Mathématiques",
      location: "Berne",
      price: "50 CHF/h",
      rating: 4.7,
      reviews: 43,
      experience: "4 ans",
      avatar: "/images/placeholder-avatar.svg",
      bio: "Cours de soutien en mathématiques avec méthodes adaptées",
    },
    {
      id: 5,
      name: "Claire Fontaine",
      subject: "Mathématiques",
      location: "Fribourg",
      price: "70 CHF/h",
      rating: 4.9,
      reviews: 91,
      experience: "12 ans",
      avatar: "/images/placeholder-avatar.svg",
      bio: "Préparation aux examens de maturité et cours intensifs",
    },
    {
      id: 6,
      name: "Marc Dupont",
      subject: "Mathématiques",
      location: "Neuchâtel",
      price: "58 CHF/h",
      rating: 4.6,
      reviews: 38,
      experience: "5 ans",
      avatar: "/images/placeholder-avatar.svg",
      bio: "Mathématiques pour tous niveaux avec approche personnalisée",
    },
  ]

  // Subject and location data (same as homepage)
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
    { value: "economie", label: "Économie", icon: "💼" },
    { value: "informatique", label: "Informatique", icon: "💻" },
    { value: "latin", label: "Latin", icon: "🏛️" },
    { value: "grec", label: "Grec", icon: "🏺" },
    { value: "musique", label: "Musique", icon: "🎵" },
    { value: "art", label: "Art", icon: "🎨" },
  ]

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
    { value: "fribourg", label: "Fribourg", icon: "🏰" },
    { value: "neuchatel", label: "Neuchâtel", icon: "🏞️" },
    { value: "sion", label: "Sion", icon: "⛰️" },
    { value: "montreux", label: "Montreux", icon: "🎭" },
    { value: "yverdon", label: "Yverdon-les-Bains", icon: "♨️" },
    { value: "suisse", label: "Toute la Suisse", icon: "🇨🇭" },
  ]

  const levels = ["Primaire", "Secondaire I", "Secondaire II", "Supérieur", "Adultes", "Apprentissage"]
  const languages = ["Français", "Allemand", "Anglais", "Italien", "Espagnol"]

  // Filter subjects and locations based on search
  const filteredSubjects = useMemo(() => {
    if (!subjectSearch) return allSubjects
    return allSubjects.filter(subject =>
      subject.label.toLowerCase().includes(subjectSearch.toLowerCase())
    )
  }, [subjectSearch])

  const filteredLocations = useMemo(() => {
    if (!locationSearch) return allLocations
    return allLocations.filter(location =>
      location.label.toLowerCase().includes(locationSearch.toLowerCase())
    )
  }, [locationSearch])

  // Handler functions
  const handleSubjectChange = (value: string) => {
    setSelectedSubject(value)
    setSubjectSearch("")
    setIsSubjectSelectOpen(false)
    // Navigate to new URL
    router.push(`/cours/${value}/${selectedLocation}`)
  }

  const handleLocationChange = (value: string) => {
    setSelectedLocation(value)
    setLocationSearch("")
    setIsLocationSelectOpen(false)
    // Navigate to new URL
    router.push(`/cours/${selectedSubject}/${value}`)
  }

  const FilterContent = () => (
    <div className="flex flex-wrap gap-4 items-center">
      {/* Prix maximal */}
      <div className="min-w-[180px]">
        <Label className="text-sm font-medium mb-2 block">Prix maximal</Label>
        <Select value={maxPrice[0].toString()} onValueChange={(value: string) => setMaxPrice([parseInt(value)])}>
          <SelectTrigger className="h-10">
            <SelectValue placeholder={`${maxPrice[0]} CHF/h`} />
          </SelectTrigger>
          <SelectContent className="w-80">
            <div className="p-4">
              <div className="mb-4">
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
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>20 CHF</span>
                  <span>150 CHF</span>
                </div>
              </div>
              <div className="space-y-1">
                <SelectItem value="50">Jusqu'à 50 CHF/h</SelectItem>
                <SelectItem value="60">Jusqu'à 60 CHF/h</SelectItem>
                <SelectItem value="70">Jusqu'à 70 CHF/h</SelectItem>
                <SelectItem value="80">Jusqu'à 80 CHF/h</SelectItem>
                <SelectItem value="100">Jusqu'à 100 CHF/h</SelectItem>
                <SelectItem value="150">Jusqu'à 150 CHF/h</SelectItem>
              </div>
            </div>
          </SelectContent>
        </Select>
      </div>

      {/* Distance maximale */}
      {decodedLieu !== "en ligne" && (
        <div className="min-w-[160px]">
          <Label className="text-sm font-medium mb-2 block">Distance maximale</Label>
          <Select value={maxDistance[0].toString()} onValueChange={(value: string) => setMaxDistance([parseInt(value)])}>
            <SelectTrigger className="h-10">
              <SelectValue placeholder={`${maxDistance[0]} km`} />
            </SelectTrigger>
            <SelectContent className="w-80">
              <div className="p-4">
                <div className="mb-4">
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
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1 km</span>
                    <span>50 km</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <SelectItem value="5">Jusqu'à 5 km</SelectItem>
                  <SelectItem value="10">Jusqu'à 10 km</SelectItem>
                  <SelectItem value="20">Jusqu'à 20 km</SelectItem>
                  <SelectItem value="30">Jusqu'à 30 km</SelectItem>
                  <SelectItem value="50">Jusqu'à 50 km</SelectItem>
                </div>
              </div>
            </SelectContent>
          </Select>
        </div>
      )}

      {/* Types de cours */}
      <div className="min-w-[140px]">
        <Label className="text-sm font-medium mb-2 block">Type de cours</Label>
        <Select value={courseType} onValueChange={(value: string) => setCourseType(value)}>
          <SelectTrigger className="h-10">
            <SelectValue placeholder="Tous" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tous</SelectItem>
            <SelectItem value="online">En ligne</SelectItem>
            <SelectItem value="inperson">Présentiel</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Niveaux */}
      <div className="min-w-[140px]">
        <Label className="text-sm font-medium mb-2 block">Niveaux</Label>
        <Select
          value={selectedLevels.length > 0 ? selectedLevels[0] : "all"}
          onValueChange={(value: string) => {
            if (value === "all") {
              setSelectedLevels([])
            } else {
              setSelectedLevels([value])
            }
          }}
        >
          <SelectTrigger className="h-10">
            <SelectValue placeholder="Tous niveaux" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tous niveaux</SelectItem>
            {levels.map((level) => (
              <SelectItem key={level} value={level}>
                {level}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Temps de réponse */}
      <div className="min-w-[160px]">
        <Label className="text-sm font-medium mb-2 block">Temps de réponse</Label>
        <Select value={responseTime} onValueChange={(value: string) => setResponseTime(value)}>
          <SelectTrigger className="h-10">
            <SelectValue placeholder={`< ${responseTimeHours[0]}h`} />
          </SelectTrigger>
          <SelectContent className="w-80">
            <div className="p-4">
              <div className="mb-4">
                <Label className="text-sm font-medium mb-2 block">
                  Temps de réponse maximal: {responseTimeHours[0]}h
                </Label>
                <Slider
                  value={responseTimeHours}
                  onValueChange={setResponseTimeHours}
                  max={48}
                  min={1}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>1h</span>
                  <span>48h</span>
                </div>
              </div>
              <div className="space-y-1">
                <SelectItem value="all">Tous</SelectItem>
                <SelectItem value="1h">&lt; 1 heure</SelectItem>
                <SelectItem value="6h">&lt; 6 heures</SelectItem>
                <SelectItem value="24h">&lt; 24 heures</SelectItem>
                <SelectItem value="48h">&lt; 48 heures</SelectItem>
              </div>
            </div>
          </SelectContent>
        </Select>
      </div>

      {/* Langues */}
      <div className="min-w-[140px]">
        <Label className="text-sm font-medium mb-2 block">Langues</Label>
        <Select
          value={selectedLanguages.length > 0 ? selectedLanguages[0] : "all"}
          onValueChange={(value: string) => {
            if (value === "all") {
              setSelectedLanguages([])
            } else {
              setSelectedLanguages([value])
            }
          }}
        >
          <SelectTrigger className="h-10">
            <SelectValue placeholder="Toutes langues" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Toutes langues</SelectItem>
            {languages.map((language) => (
              <SelectItem key={language} value={language}>
                {language}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Reset Button */}
      <div className="min-w-[120px]">
        <Label className="text-sm font-medium mb-2 block opacity-0">Reset</Label>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            setMaxPrice([100])
            setMaxDistance([10])
            setCourseType("all")
            setSelectedLevels([])
            setResponseTime("all")
            setResponseTimeHours([24])
            setSelectedLanguages([])
            setSubjectSearch("")
            setLocationSearch("")
          }}
          className="h-10 w-full"
        >
          Réinitialiser
        </Button>
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

          {/* Subject and Location Selection */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
            {/* Subject Selection */}
            <div>
              <Label className="text-sm font-medium mb-2 block">Changer de matière</Label>
              <Select
                value={selectedSubject}
                onValueChange={handleSubjectChange}
                open={isSubjectSelectOpen}
                onOpenChange={setIsSubjectSelectOpen}
              >
                <SelectTrigger className="w-full h-10">
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

            {/* Location Selection */}
            <div>
              <Label className="text-sm font-medium mb-2 block">Changer de lieu</Label>
              <Select
                value={selectedLocation}
                onValueChange={handleLocationChange}
                open={isLocationSelectOpen}
                onOpenChange={setIsLocationSelectOpen}
              >
                <SelectTrigger className="w-full h-10">
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
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Filters at Top */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Filtres</CardTitle>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden"
              >
                <Filter className="mr-2 h-4 w-4" />
                {showFilters ? 'Masquer' : 'Afficher'} les filtres
              </Button>
            </div>
          </CardHeader>
          <CardContent className={`${showFilters ? 'block' : 'hidden lg:block'}`}>
            <FilterContent />
          </CardContent>
        </Card>

        {/* Containerized Tutors Grid */}
        <div className="max-w-6xl mx-auto">
          <TutorGrid
            tutors={tutors}
            columns="3"
            showAll={true}
          />

          {/* Load More Button */}
          <div className="mt-8 text-center">
            <Button variant="outline" size="lg" className="min-w-[200px]">
              Voir plus d'enseignants
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}