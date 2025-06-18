import SearchClient from './search-client'

// This generates all static pages at build time
export async function generateStaticParams() {
  // Define all subjects and locations you want to pre-render
  const subjects = [
    'mathematiques', 'francais', 'anglais', 'allemand', 'italien', 'espagnol',
    'physique', 'chimie', 'biologie', 'histoire', 'geographie', 'economie',
    'informatique', 'philosophie', 'latin', 'grec', 'musique', 'art'
  ]
  
  const locations = [
    'geneve', 'lausanne', 'zurich', 'berne', 'bale', 'lucerne',
    'st-gall', 'lugano', 'bienne', 'thun', 'fribourg', 'neuchatel',
    'sion', 'montreux', 'yverdon', 'suisse', 'en-ligne'
  ]
  
  // Generate all combinations
  const params = []
  for (const matiere of subjects) {
    for (const lieu of locations) {
      params.push({ matiere, lieu })
    }
  }
  
  // Also add a "tous" (all) option for subjects
  for (const lieu of locations) {
    params.push({ matiere: 'tous', lieu })
  }
  
  return params
}

// Set to false to only allow pre-generated paths
export const dynamicParams = false

interface SearchPageProps {
  params: Promise<{
    matiere: string
    lieu: string
  }>
}

export default async function SearchPage({ params }: SearchPageProps) {
  const { matiere, lieu } = await params
  
  // In a real app, you would fetch data from your API here
  // const tutors = await fetchTutors(matiere, lieu)
  
  // For now, we'll pass undefined and let the client component use its mock data
  return <SearchClient matiere={matiere} lieu={lieu} />
}