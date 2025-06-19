"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TutorGrid } from "@/components/tutor-grid"
import { type Tutor } from "@/components/tutor-card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Filter } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

interface SearchClientProps {
  matiere: string
  lieu: string
  initialTutors?: any[] // Will be passed from server component
}

export default function SearchClient({ matiere, lieu, initialTutors }: SearchClientProps) {
  const decodedMatiere = decodeURIComponent(matiere)
  const decodedLieu = decodeURIComponent(lieu)

  const [maxPrice, setMaxPrice] = useState([100])
  const [maxDistance, setMaxDistance] = useState([10])
  const [courseType, setCourseType] = useState("all")
  const [selectedLevels, setSelectedLevels] = useState<string[]>([])
  const [responseTime, setResponseTime] = useState("all")
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
    </div>
  )
}