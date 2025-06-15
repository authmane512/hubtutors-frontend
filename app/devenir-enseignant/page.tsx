"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { 
  Upload, User, Mail, Phone, MapPin, BookOpen, Languages, 
  DollarSign, AlertCircle, CheckCircle, Plus, X, Camera,
  GraduationCap, Users, Clock, Star
} from "lucide-react"

export default function DevenirEnseignantPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([])
  const [selectedLevels, setSelectedLevels] = useState<string[]>([])
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([])
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    postalCode: "",
    city: "",
    hourlyRate: "",
    bio: "",
    experience: "",
    qualifications: "",
    courseType: "both",
    profilePhoto: null as File | null,
  })

  const subjects = [
    "Mathématiques", "Français", "Anglais", "Allemand", "Italien", "Espagnol",
    "Physique", "Chimie", "Biologie", "Histoire", "Géographie", "Économie",
    "Informatique", "Philosophie", "Latin", "Grec", "Musique", "Art"
  ]

  const levels = [
    "Primaire", "Secondaire I", "Secondaire II", "Supérieur", "Adultes", "Apprentissage"
  ]

  const languages = [
    "Français", "Allemand", "Italien", "Romanche", "Anglais", "Espagnol", 
    "Portugais", "Chinois", "Japonais", "Arabe", "Russe"
  ]

  const totalSteps = 4

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubjectToggle = (subject: string) => {
    setSelectedSubjects(prev =>
      prev.includes(subject)
        ? prev.filter(s => s !== subject)
        : [...prev, subject]
    )
  }

  const handleLevelToggle = (level: string) => {
    setSelectedLevels(prev =>
      prev.includes(level)
        ? prev.filter(l => l !== level)
        : [...prev, level]
    )
  }

  const handleLanguageToggle = (language: string) => {
    setSelectedLanguages(prev =>
      prev.includes(language)
        ? prev.filter(l => l !== language)
        : [...prev, language]
    )
  }

  const handleNextStep = () => {
    setError("")
    
    // Validate current step
    if (currentStep === 1) {
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
        setError("Veuillez remplir tous les champs obligatoires")
        return
      }
    } else if (currentStep === 2) {
      if (selectedSubjects.length === 0) {
        setError("Veuillez sélectionner au moins une matière")
        return
      }
      if (selectedLevels.length === 0) {
        setError("Veuillez sélectionner au moins un niveau")
        return
      }
    } else if (currentStep === 3) {
      if (!formData.location || !formData.hourlyRate) {
        setError("Veuillez remplir tous les champs obligatoires")
        return
      }
      if (selectedLanguages.length === 0) {
        setError("Veuillez sélectionner au moins une langue")
        return
      }
    }

    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // Final validation
    if (!formData.bio || !formData.experience) {
      setError("Veuillez remplir tous les champs obligatoires")
      return
    }

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      // For demo, redirect to success page or profile
      router.push("/")
    }, 2000)
  }

  const StepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      {[1, 2, 3, 4].map((step) => (
        <div key={step} className="flex items-center">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center font-medium transition-colors ${
              currentStep >= step
                ? "bg-primary text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            {currentStep > step ? <CheckCircle className="h-6 w-6" /> : step}
          </div>
          {step < totalSteps && (
            <div
              className={`w-16 h-1 mx-2 transition-colors ${
                currentStep > step ? "bg-primary" : "bg-gray-200"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* Hero Section */}
      <div className="bg-white border-b mb-8">
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Devenez enseignant sur Suisseprof
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Partagez vos connaissances et gagnez de l'argent en donnant des cours particuliers
          </p>
          
          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <DollarSign className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-1">Revenus flexibles</h3>
              <p className="text-sm text-gray-600">Fixez vos tarifs et vos horaires</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-1">+10,000 élèves</h3>
              <p className="text-sm text-gray-600">Une large communauté d'apprenants</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-1">100% flexible</h3>
              <p className="text-sm text-gray-600">Enseignez où et quand vous voulez</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-1">Support dédié</h3>
              <p className="text-sm text-gray-600">Une équipe pour vous accompagner</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-3xl">
        <StepIndicator />

        <form onSubmit={handleSubmit}>
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <Card>
              <CardHeader>
                <CardTitle>Informations personnelles</CardTitle>
                <CardDescription>
                  Commençons par vos informations de base
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {error && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Prénom *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Jean"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Nom *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Dupont"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="jean.dupont@exemple.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+41 79 123 45 67"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="profilePhoto">Photo de profil</Label>
                  <div className="flex items-center gap-4">
                    <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center">
                      {formData.profilePhoto ? (
                        <img
                          src={URL.createObjectURL(formData.profilePhoto)}
                          alt="Profile"
                          className="w-full h-full rounded-full object-cover"
                        />
                      ) : (
                        <Camera className="h-8 w-8 text-gray-400" />
                      )}
                    </div>
                    <div>
                      <Input
                        id="profilePhoto"
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0]
                          if (file) {
                            setFormData(prev => ({ ...prev, profilePhoto: file }))
                          }
                        }}
                        className="hidden"
                      />
                      <Label
                        htmlFor="profilePhoto"
                        className="cursor-pointer inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                      >
                        <Upload className="mr-2 h-4 w-4" />
                        Choisir une photo
                      </Label>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">
                    Une photo professionnelle augmente vos chances d'être contacté
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Subjects and Levels */}
          {currentStep === 2 && (
            <Card>
              <CardHeader>
                <CardTitle>Matières et niveaux</CardTitle>
                <CardDescription>
                  Quelles matières souhaitez-vous enseigner ?
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {error && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <div>
                  <Label className="text-base font-semibold mb-3 block">
                    Matières * (sélectionnez toutes celles que vous maîtrisez)
                  </Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {subjects.map((subject) => (
                      <div
                        key={subject}
                        onClick={() => handleSubjectToggle(subject)}
                        className={`p-3 rounded-lg border-2 cursor-pointer transition-colors text-center ${
                          selectedSubjects.includes(subject)
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <span className="text-sm font-medium">{subject}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label className="text-base font-semibold mb-3 block">
                    Niveaux * (sélectionnez tous ceux que vous pouvez enseigner)
                  </Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {levels.map((level) => (
                      <div
                        key={level}
                        onClick={() => handleLevelToggle(level)}
                        className={`p-3 rounded-lg border-2 cursor-pointer transition-colors text-center ${
                          selectedLevels.includes(level)
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <span className="text-sm font-medium">{level}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Location and Pricing */}
          {currentStep === 3 && (
            <Card>
              <CardHeader>
                <CardTitle>Localisation et tarifs</CardTitle>
                <CardDescription>
                  Où enseignez-vous et à quel prix ?
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {error && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="postalCode">Code postal *</Label>
                    <Input
                      id="postalCode"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      placeholder="1200"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">Ville *</Label>
                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="Genève"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Adresse complète *</Label>
                  <Input
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="Rue du Rhône 100, 1204 Genève"
                    required
                  />
                  <p className="text-xs text-gray-500">
                    Votre adresse exacte ne sera pas affichée publiquement
                  </p>
                </div>

                <div className="space-y-2">
                  <Label>Type de cours *</Label>
                  <RadioGroup value={formData.courseType} onValueChange={(value) => setFormData(prev => ({ ...prev, courseType: value }))}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="online" id="online" />
                      <Label htmlFor="online" className="font-normal cursor-pointer">
                        En ligne uniquement
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="inperson" id="inperson" />
                      <Label htmlFor="inperson" className="font-normal cursor-pointer">
                        En présentiel uniquement
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="both" id="both" />
                      <Label htmlFor="both" className="font-normal cursor-pointer">
                        En ligne et en présentiel
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="hourlyRate">Tarif horaire (CHF) *</Label>
                  <Input
                    id="hourlyRate"
                    name="hourlyRate"
                    type="number"
                    value={formData.hourlyRate}
                    onChange={handleInputChange}
                    placeholder="60"
                    min="20"
                    max="200"
                    required
                  />
                  <p className="text-xs text-gray-500">
                    Tarif moyen sur Suisseprof : 45-80 CHF/heure
                  </p>
                </div>

                <div>
                  <Label className="text-base font-semibold mb-3 block">
                    Langues parlées * (sélectionnez toutes vos langues)
                  </Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {languages.map((language) => (
                      <div
                        key={language}
                        onClick={() => handleLanguageToggle(language)}
                        className={`p-3 rounded-lg border-2 cursor-pointer transition-colors text-center ${
                          selectedLanguages.includes(language)
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <span className="text-sm font-medium">{language}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 4: Profile Description */}
          {currentStep === 4 && (
            <Card>
              <CardHeader>
                <CardTitle>Votre profil d'enseignant</CardTitle>
                <CardDescription>
                  Présentez-vous aux futurs élèves
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {error && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <div className="space-y-2">
                  <Label htmlFor="bio">Présentation courte *</Label>
                  <Textarea
                    id="bio"
                    name="bio"
                    value={formData.bio}
                    onChange={handleInputChange}
                    placeholder="Bonjour ! Je suis professeur de mathématiques passionné avec 5 ans d'expérience..."
                    className="min-h-[100px]"
                    required
                  />
                  <p className="text-xs text-gray-500">
                    2-3 phrases pour vous présenter (cette partie apparaît en premier sur votre profil)
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Expérience et méthodologie *</Label>
                  <Textarea
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    placeholder="Décrivez votre expérience d'enseignement, votre approche pédagogique, vos méthodes..."
                    className="min-h-[150px]"
                    required
                  />
                  <p className="text-xs text-gray-500">
                    Détaillez votre parcours et votre façon d'enseigner
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="qualifications">Qualifications et diplômes</Label>
                  <Textarea
                    id="qualifications"
                    name="qualifications"
                    value={formData.qualifications}
                    onChange={handleInputChange}
                    placeholder="- Master en Mathématiques - EPFL (2018)&#10;- Certificat d'enseignement - HEP (2019)&#10;- Formation continue en pédagogie différenciée (2021)"
                    className="min-h-[100px]"
                  />
                  <p className="text-xs text-gray-500">
                    Listez vos diplômes et certifications pertinents
                  </p>
                </div>

                <Alert>
                  <CheckCircle className="h-4 w-4" />
                  <AlertDescription>
                    En soumettant ce formulaire, vous acceptez nos conditions d'utilisation et notre charte qualité pour les enseignants.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
            {currentStep > 1 ? (
              <Button
                type="button"
                variant="outline"
                onClick={handlePreviousStep}
              >
                Précédent
              </Button>
            ) : (
              <div />
            )}

            {currentStep < totalSteps ? (
              <Button
                type="button"
                onClick={handleNextStep}
                className="bg-primary hover:bg-primary/90"
              >
                Suivant
              </Button>
            ) : (
              <Button
                type="submit"
                className="bg-primary hover:bg-primary/90"
                disabled={isLoading}
              >
                {isLoading ? "Envoi en cours..." : "Soumettre ma candidature"}
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}