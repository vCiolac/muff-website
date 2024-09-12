import { champions } from '@/data/champions';
import { motion } from 'framer-motion';

export default function CharactersContent() {
  return (
    <div className="min-h-screen">
      <header className="container mx-auto py-12 text-center">
        <motion.h1
          className="text-5xl font-bold mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Campeões de Muff - A Origem
        </motion.h1>
      </header>

      <section className="container mx-auto py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {champions.map((campeao, index) => (
          <motion.div
            key={index}
            className="p-8 bg-gray-800 rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.7 }}
          >
            <h2 className="text-2xl font-bold mb-4">{campeao.nome}</h2>
            <p>{campeao.resumo}</p>
            <ul className="mt-4">
              {campeao.habilidades.map((habilidade, idx) => (
                <li key={idx} className="mt-2">
                  <strong>{habilidade.nome}: </strong>{habilidade.descricao}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
