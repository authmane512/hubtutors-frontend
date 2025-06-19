import { TutorCard, type Tutor } from "./tutor-card"

interface TutorGridProps {
  tutors: Tutor[]
  columns?: "1" | "2" | "3" | "4"
  className?: string
  showAll?: boolean
  maxItems?: number
}

export function TutorGrid({ 
  tutors, 
  columns = "3", 
  className = "",
  showAll = false,
  maxItems = 6
}: TutorGridProps) {
  const displayedTutors = showAll ? tutors : tutors.slice(0, maxItems)
  
  const gridClasses = {
    "1": "grid-cols-1",
    "2": "grid-cols-1 md:grid-cols-2",
    "3": "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    "4": "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
  }

  return (
    <div className={`grid ${gridClasses[columns]} gap-6 ${className}`}>
      {displayedTutors.map((tutor) => (
        <TutorCard key={tutor.id} tutor={tutor} />
      ))}
    </div>
  )
}
