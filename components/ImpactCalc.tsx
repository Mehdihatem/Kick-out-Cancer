import { useState } from 'react'
import { motion } from 'framer-motion'

const ImpactCalc = () => {
  const [amount, setAmount] = useState<number>(0)
  const impact = Math.round((amount / 50) * 60)

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white dark:bg-dark rounded-xl shadow-soft">
      <h3 className="text-2xl font-bold mb-4 text-center">Calculateur d&apos;Impact</h3>
      
      <div className="mb-6">
        <label htmlFor="amount" className="block text-sm font-medium mb-2">
          Montant du don (€)
        </label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
          min="0"
          step="1"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <p className="text-lg mb-2">Votre impact :</p>
        <p className="text-3xl font-bold text-primary">
          {impact} minutes
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          de séquençage financées à l&apos;IHU PRISM
        </p>
      </motion.div>
    </div>
  )
}

export default ImpactCalc 