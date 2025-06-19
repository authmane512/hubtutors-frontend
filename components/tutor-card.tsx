import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MapPin, Star, BriefcaseBusiness } from "lucide-react"

export interface Tutor {
  id: number
  name: string
  subject: string
  location: string
  price: string
  rating: number
  reviews: number
  experience: string
  avatar: string
  bio: string
}

interface TutorCardProps {
  tutor: Tutor
  className?: string
}

// Helper function to render star rating
function StarRating({ rating }: { rating: number }) {
  const stars = []
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 >= 0.5

  // Add full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
    )
  }

  // Add half star if needed
  if (hasHalfStar && fullStars < 5) {
    stars.push(
      <div key="half" className="relative">
        <Star className="h-4 w-4 text-gray-300 fill-gray-300" />
        <div className="absolute inset-0 overflow-hidden w-1/2">
          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
        </div>
      </div>
    )
  }

  // Add empty stars to complete 5 stars
  const remainingStars = 5 - Math.ceil(rating)
  for (let i = 0; i < remainingStars; i++) {
    stars.push(
      <Star key={`empty-${i}`} className="h-4 w-4 text-gray-300 fill-gray-300" />
    )
  }

  return <div className="flex items-center space-x-1">{stars}</div>
}

export function TutorCard({ tutor, className = "" }: TutorCardProps) {
  return (
    <Link href={`/enseignant/${tutor.id}`}>
      <Card className={`hover:shadow-lg transition-shadow cursor-pointer h-full min-h-[550px] ${className}`}>
        <CardHeader className="pb-6">
          <div className="flex flex-col items-center text-center space-y-6">
            {/* Extra Large Square Avatar - Full Width */}
            <Avatar className="w-full aspect-square rounded-lg bg-gray-50 min-h-[250px]">
              <AvatarImage src={tutor.avatar} alt={tutor.name} className="object-contain w-full h-full" />
              <AvatarFallback className="text-6xl font-semibold rounded-lg">
                {tutor.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>

            {/* Name and Price */}
            <div className="w-full">
              <CardTitle className="text-xl mb-3">{tutor.name}</CardTitle>
              <Badge variant="secondary" className="bg-primary/10 text-primary text-sm px-3 py-1">
                {tutor.price}
              </Badge>
            </div>
          </div>
        </CardHeader>

        <CardContent className="pt-0 pb-6">
          {/* Bio */}
          <p className="text-sm text-gray-600 mb-6 text-center leading-relaxed">{tutor.bio}</p>

          {/* Rating with 5 stars */}
          <div className="flex items-center justify-center mb-6">
            <StarRating rating={tutor.rating} />
            <span className="text-sm text-gray-600 ml-2">({tutor.reviews} avis)</span>
          </div>

          {/* Location and Experience */}
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-center">
              <MapPin className="h-4 w-4 text-gray-400 mr-2" />
              <span className="text-gray-600">{tutor.location}</span>
            </div>
            <div className="flex items-center justify-center">
              <BriefcaseBusiness className="h-4 w-4 text-gray-400 mr-2" />
              <span className="text-gray-600">{tutor.experience.replace(' ans', '+ ans d\'expérience')}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
