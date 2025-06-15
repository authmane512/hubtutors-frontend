"use client"

import { useState, use } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { 
  MapPin, Clock, Star, Globe, Users, BookOpen, Languages, 
  Calendar, CheckCircle2, Mail, Phone, MessageSquare, 
  GraduationCap, Award, Target, Heart
} from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

interface TutorProfilePageProps {
  params: Promise<{
    id: string
  }>
}

export default function TutorProfilePage({ params }: TutorProfilePageProps) {
  const { id } = use(params)
  const [showContactForm, setShowContactForm] = useState(false)

  // Mock data for the tutor
  const tutor = {
    id: id,
    name: "Marie Dubois",
    title: "Professeure certifiée de mathématiques",
    avatar: "/images/placeholder-avatar.svg",
    location: "Genève, Suisse",
    price: 60,
    rating: 4.9,
    reviews: 87,
    students: 45,
    experience: 8,
    responseTime: "< 2 heures",
    languages: ["Français", "Anglais", "Espagnol"],
    isOnline: true,
    isVerified: true,
    joinedDate: "2016",
    lessonsGiven: 1250,
    presentation: "Bonjour ! Je suis Marie, professeure de mathématiques passionnée avec plus de 8 ans d'expérience dans l'enseignement. J'ai obtenu mon master en mathématiques appliquées à l'EPFL et j'ai enseigné dans plusieurs établissements prestigieux de Suisse romande.",
    description: `Mon approche pédagogique est centrée sur l'élève. Je crois fermement que chaque étudiant a son propre rythme d'apprentissage et ses propres forces. Mon objectif est de créer un environnement d'apprentissage positif et encourageant où les élèves se sentent à l'aise pour poser des questions et faire des erreurs.

J'utilise des méthodes d'enseignement variées et interactives, incluant des exemples pratiques, des exercices adaptés et des outils numériques modernes. Je m'assure que mes élèves comprennent non seulement comment résoudre les problèmes, mais aussi pourquoi les méthodes fonctionnent.

Mes spécialités incluent:
• Algèbre et géométrie (tous niveaux)
• Analyse et calcul différentiel
• Statistiques et probabilités
• Préparation aux examens (maturité, examens d'entrée)
• Soutien scolaire régulier

Je suis disponible pour des cours en présentiel dans la région de Genève ou en ligne via Zoom/Skype. N'hésitez pas à me contacter pour discuter de vos besoins !`,
    subjects: ["Mathématiques", "Statistiques", "Algèbre", "Géométrie", "Analyse"],
    levels: ["Primaire", "Secondaire I", "Secondaire II", "Supérieur", "Adultes"],
    availability: {
      monday: ["9:00-12:00", "14:00-18:00"],
      tuesday: ["9:00-12:00", "14:00-20:00"],
      wednesday: ["14:00-20:00"],
      thursday: ["9:00-12:00", "14:00-18:00"],
      friday: ["9:00-12:00", "14:00-17:00"],
      saturday: ["10:00-16:00"],
      sunday: []
    },
    testimonials: [
      {
        id: 1,
        name: "Lucas B.",
        date: "Il y a 2 semaines",
        rating: 5,
        content: "Marie est une excellente professeure ! Elle a su m'aider à comprendre des concepts complexes en mathématiques. Grâce à elle, j'ai réussi mon examen avec une excellente note."
      },
      {
        id: 2,
        name: "Sophie M.",
        date: "Il y a 1 mois",
        rating: 5,
        content: "Très patiente et pédagogue. Ma fille a fait d'énormes progrès en quelques mois seulement. Je recommande vivement !"
      },
      {
        id: 3,
        name: "Thomas R.",
        date: "Il y a 2 mois",
        rating: 4,
        content: "Bonne professeure, explications claires. Les cours en ligne fonctionnent très bien."
      }
    ],
    qualifications: [
      "Master en Mathématiques Appliquées - EPFL (2014)",
      "Bachelor en Mathématiques - Université de Genève (2012)",
      "Certificat d'Aptitude au Professorat - HEP Vaud (2015)",
      "Formation continue en pédagogie différenciée (2020)"
    ]
  }

  const ContactForm = () => (
    <form className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="firstName">Prénom</Label>
          <Input id="firstName" placeholder="Votre prénom" />
        </div>
        <div>
          <Label htmlFor="lastName">Nom</Label>
          <Input id="lastName" placeholder="Votre nom" />
        </div>
      </div>
      
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="votre.email@exemple.com" />
      </div>
      
      <div>
        <Label htmlFor="phone">Téléphone</Label>
        <Input id="phone" type="tel" placeholder="+41 79 123 45 67" />
      </div>
      
      <div>
        <Label htmlFor="subject">Matière souhaitée</Label>
        <Input id="subject" placeholder="Ex: Mathématiques niveau secondaire" />
      </div>
      
      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea 
          id="message" 
          placeholder="Décrivez vos besoins, votre niveau actuel et vos objectifs..."
          className="min-h-[120px]"
        />
      </div>
      
      <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
        Envoyer le message
      </Button>
    </form>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Info */}
            <div className="lg:col-span-2">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <Avatar className="h-32 w-32 flex-shrink-0">
                  <AvatarImage src={tutor.avatar} alt={tutor.name} />
                  <AvatarFallback className="text-2xl">
                    {tutor.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h1 className="text-3xl font-bold text-gray-900">{tutor.name}</h1>
                      <p className="text-lg text-gray-600 mt-1">{tutor.title}</p>
                    </div>
                    {tutor.isVerified && (
                      <Badge className="bg-green-100 text-green-800">
                        <CheckCircle2 className="h-4 w-4 mr-1" />
                        Vérifié
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                      {tutor.location}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1 text-gray-400" />
                      Répond en {tutor.responseTime}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1 text-gray-400" />
                      {tutor.students} élèves
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="h-4 w-4 mr-1 text-gray-400" />
                      {tutor.lessonsGiven} cours donnés
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {tutor.isOnline && (
                      <Badge variant="outline">
                        <Globe className="h-3 w-3 mr-1" />
                        Cours en ligne
                      </Badge>
                    )}
                    <Badge variant="outline">
                      <MapPin className="h-3 w-3 mr-1" />
                      Cours en présentiel
                    </Badge>
                    <Badge variant="outline">
                      <Calendar className="h-3 w-3 mr-1" />
                      Membre depuis {tutor.joinedDate}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Price & Contact */}
            <div className="lg:col-span-1">
              <Card>
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <p className="text-3xl font-bold text-primary">{tutor.price} CHF/h</p>
                    <p className="text-sm text-gray-600 mt-1">Premier cours offert</p>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-500 mr-1" />
                        <span className="font-semibold">{tutor.rating}</span>
                      </div>
                      <span className="text-sm text-gray-600">{tutor.reviews} avis</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Expérience</span>
                      <span className="font-semibold">{tutor.experience} ans</span>
                    </div>
                  </div>
                  
                  <Dialog open={showContactForm} onOpenChange={setShowContactForm}>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-primary hover:bg-primary/90 mb-3">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Contacter l'enseignant
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[600px]">
                      <DialogHeader>
                        <DialogTitle>Contacter {tutor.name}</DialogTitle>
                        <DialogDescription>
                          Envoyez un message à l'enseignant pour discuter de vos besoins et planifier votre premier cours.
                        </DialogDescription>
                      </DialogHeader>
                      <ContactForm />
                    </DialogContent>
                  </Dialog>
                  
                  <Button variant="outline" className="w-full">
                    <Heart className="mr-2 h-4 w-4" />
                    Ajouter aux favoris
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content Sections */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Presentation */}
            <Card>
              <CardHeader>
                <CardTitle>Présentation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{tutor.presentation}</p>
              </CardContent>
            </Card>
            
            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle>À propos du cours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                  {tutor.description}
                </div>
              </CardContent>
            </Card>
            
            {/* Qualifications */}
            <Card>
              <CardHeader>
                <CardTitle>Qualifications</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {tutor.qualifications.map((qual, index) => (
                    <li key={index} className="flex items-start">
                      <Award className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{qual}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            {/* Testimonials */}
            <Card>
              <CardHeader>
                <CardTitle>Avis des élèves ({tutor.reviews})</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {tutor.testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="border-b last:border-0 pb-4 last:pb-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.date}</p>
                      </div>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700">{testimonial.content}</p>
                  </div>
                ))}
                <Button variant="outline" className="w-full">
                  Voir tous les avis
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Subjects & Levels */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Matières enseignées</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {tutor.subjects.map((subject) => (
                    <Badge key={subject} variant="secondary">
                      {subject}
                    </Badge>
                  ))}
                </div>
                <h4 className="font-semibold mb-2 text-sm">Niveaux:</h4>
                <div className="flex flex-wrap gap-2">
                  {tutor.levels.map((level) => (
                    <Badge key={level} variant="outline">
                      {level}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Languages */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Langues parlées</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {tutor.languages.map((language) => (
                    <div key={language} className="flex items-center">
                      <Languages className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="text-gray-700">{language}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Availability */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Disponibilités</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  {Object.entries(tutor.availability).map(([day, slots]) => {
                    const dayNames: { [key: string]: string } = {
                      monday: "Lundi",
                      tuesday: "Mardi",
                      wednesday: "Mercredi",
                      thursday: "Jeudi",
                      friday: "Vendredi",
                      saturday: "Samedi",
                      sunday: "Dimanche"
                    }
                    return (
                      <div key={day} className="flex justify-between">
                        <span className="font-medium">{dayNames[day]}</span>
                        <span className="text-gray-600">
                          {slots.length > 0 ? slots.join(", ") : "Non disponible"}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
            
            {/* Share */}
            <Card>
              <CardContent className="p-4">
                <p className="text-sm text-gray-600 text-center">
                  Partagez ce profil avec vos amis
                </p>
                <div className="flex justify-center gap-2 mt-3">
                  <Button variant="outline" size="sm">
                    <Mail className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <MessageSquare className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}