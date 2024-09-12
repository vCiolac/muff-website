import { useState } from 'react';
import { champions } from '@/data/champions';
import { motion } from 'framer-motion';

export default function CharactersContent() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="font-toxType min-h-screen">
      <header className="container mx-auto text-center">
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
        {champions.map((campeao, index) => {
          const isExpanded = expandedIndex === index;

          return (
            <motion.div
              key={index}
              className="p-8 bg-gray-800 rounded-lg cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.7 }}
              onClick={() => toggleExpand(index)}
            >
              <h2 className="text-2xl font-bold mb-4">{campeao.nome}</h2>
              
              {/* Mostrar resumo breve se não estiver expandido */}
              <motion.div
                initial={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
                animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="mb-4">{campeao.resumo}</p>

                <ul className="text-gray-400 mb-4">
                  <li><strong>Idade:</strong> {campeao.idade}</li>
                  <li><strong>Raça:</strong> {campeao.raça}</li>
                  <li><strong>Pele:</strong> {campeao.pele}</li>
                  <li><strong>Altura:</strong> {campeao.altura} cm</li>
                  <li><strong>Arma:</strong> {campeao.arma}</li>
                  <li><strong>Propriedade:</strong> {campeao.propriedade}</li>
                  <li><strong>Elemento:</strong> {campeao.elemento}</li>
                </ul>

                <ul className="mt-4">
                  {campeao.habilidades.map((habilidade, idx) => (
                    <li key={idx} className="mt-2">
                      <strong>{habilidade.nome}: </strong>{habilidade.descricao}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Mostrar breve informação se estiver recolhido */}
              {!isExpanded && <p className="text-gray-400">Clique para ver mais...</p>}
            </motion.div>
          );
        })}
      </section>
    </div>
  );
}
