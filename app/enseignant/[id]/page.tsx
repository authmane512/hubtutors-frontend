import TutorProfileClient from './tutor-profile-client'

// This generates static pages for specific tutor IDs
export async function generateStaticParams() {
  // In a real app, you would fetch this from your API
  // const tutors = await fetchAllTutors()
  // return tutors.map(tutor => ({ id: tutor.id.toString() }))
  
  // For now, pre-generate pages for IDs 1-100
  const params = []
  for (let i = 1; i <= 100; i++) {
    params.push({ id: i.toString() })
  }
  
  return params
}

// Set to false to only allow pre-generated paths
export const dynamicParams = false

interface TutorProfilePageProps {
  params: Promise<{
    id: string
  }>
}

export default async function TutorProfilePage({ params }: TutorProfilePageProps) {
  const { id } = await params
  
  // In a real app, you would fetch tutor data from your API here
  // const tutorData = await fetchTutor(id)
  
  // For now, we'll pass undefined and let the client component use its mock data
  return <TutorProfileClient tutorId={id} />
}