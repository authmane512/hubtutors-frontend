export interface Tutor {
  id: number | string
  name: string
  subject: string
  title: string
  location: string
  distance?: number
  price: number
  rating: number
  reviews: number
  experience: number
  avatar: string
  bio?: string
  isOnline: boolean
  languages: string[]
  levels: string[]
  responseTime: string
  students: number
  presentation?: string
  description?: string
  subjects?: string[]
  isVerified?: boolean
  joinedDate?: string
  lessonsGiven?: number
  availability?: {
    [key: string]: string[]
  }
  testimonials?: Testimonial[]
  qualifications?: string[]
}

export interface Testimonial {
  id: number
  name: string
  date: string
  rating: number
  content: string
}