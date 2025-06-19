import { type Tutor } from "@/components/tutor-card"

export const featuredTutors: Tutor[] = [
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
  {
    id: 4,
    name: "Pierre Leclerc",
    subject: "Physique",
    location: "Bâle",
    price: "70 CHF/h",
    rating: 4.7,
    reviews: 45,
    experience: "12 ans",
    avatar: "/images/placeholder-avatar.svg",
    bio: "Docteur en physique, spécialiste des sciences expérimentales"
  },
  {
    id: 5,
    name: "Anna Rossi",
    subject: "Italien",
    location: "Lugano",
    price: "50 CHF/h",
    rating: 4.9,
    reviews: 73,
    experience: "5 ans",
    avatar: "/images/placeholder-avatar.svg",
    bio: "Native italienne, passionnée par l'enseignement des langues"
  },
  {
    id: 6,
    name: "Thomas Weber",
    subject: "Chimie",
    location: "Berne",
    price: "65 CHF/h",
    rating: 4.8,
    reviews: 56,
    experience: "9 ans",
    avatar: "/images/placeholder-avatar.svg",
    bio: "Ingénieur chimiste avec une approche pratique de l'enseignement"
  }
]

// Function to filter tutors by subject, location, etc.
export function filterTutors(
  tutors: Tutor[],
  filters: {
    subject?: string
    location?: string
    minRating?: number
    maxPrice?: number
  }
): Tutor[] {
  return tutors.filter(tutor => {
    if (filters.subject && !tutor.subject.toLowerCase().includes(filters.subject.toLowerCase())) {
      return false
    }
    if (filters.location && !tutor.location.toLowerCase().includes(filters.location.toLowerCase())) {
      return false
    }
    if (filters.minRating && tutor.rating < filters.minRating) {
      return false
    }
    if (filters.maxPrice) {
      const price = parseInt(tutor.price.replace(/\D/g, ''))
      if (price > filters.maxPrice) {
        return false
      }
    }
    return true
  })
}
