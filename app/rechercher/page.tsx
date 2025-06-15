"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function RechercherPage() {
  const router = useRouter()

  useEffect(() => {
    router.push("/cours/tous/suisse")
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-gray-600">Redirection en cours...</p>
    </div>
  )
}