import { useState } from 'react'

const faqs = [
  {
    question: 'Qui peut participer ?',
    answer: 'Toute personne majeure, seul ou en équipe.' ,
    icon: '👤',
  },
  {
    question: "Comment s'inscrire ?",
    answer: "Via le bouton d'inscription ou le formulaire sur le site.",
    icon: '📝',
  },
  {
    question: "À quoi servent les dons ?",
    answer: "Ils soutiennent l'IHU PRISM et la recherche contre le cancer.",
    icon: '🎗️',
  },
  {
    question: "Puis-je venir en tant que spectateur ?",
    answer: "Bien sûr ! L'événement est ouvert à toutes et tous.",
    icon: '👀',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <section className="container mx-auto py-16">
      <h2 className="mb-8 text-center text-3xl font-bold text-primary">FAQ</h2>
      <div className="max-w-2xl mx-auto space-y-4">
        {faqs.map((faq, idx) => (
          <div key={faq.question} className="border rounded-lg shadow-sm bg-white">
            <button
              className="w-full flex items-center justify-between px-6 py-4 text-lg font-semibold focus:outline-none focus:ring"
              onClick={() => setOpen(open === idx ? null : idx)}
              aria-expanded={open === idx}
            >
              <span className="flex items-center gap-3">
                <span className="text-2xl">{faq.icon}</span>
                {faq.question}
              </span>
              <span className="ml-4 text-xl">{open === idx ? '−' : '+'}</span>
            </button>
            {open === idx && (
              <div className="px-6 pb-4 text-gray-700 animate-fade-in">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
} 