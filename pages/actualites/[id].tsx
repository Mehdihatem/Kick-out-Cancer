import { useRouter } from 'next/router'

export default function ActualiteDetail() {
  const router = useRouter()
  const { id } = router.query

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div>
        <h1 className="text-3xl font-bold mb-4">Détail de l'actualité {id}</h1>
        <p>Contenu à venir…</p>
      </div>
    </main>
  )
} 