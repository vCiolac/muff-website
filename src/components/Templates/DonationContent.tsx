import { motion } from 'framer-motion';

export default function DonationContent() {
  return (
    <div className="font-toxType min-h-screen bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 text-white p-2 rounded-2xl">
      <header className="container mx-auto py-4 text-center">
        <motion.h1
          className="text-5xl font-bold mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Apoie Muff - A Origem
        </motion.h1>
        <motion.p
          className="text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Sua doação nos ajuda a continuar desenvolvendo este mundo incrível
          e oferecer novas experiências aos jogadores. Toda contribuição faz
          a diferença!
        </motion.p>
      </header>

      <section className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="p-8 bg-gray-800 rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-2xl font-bold mb-4">Por que doar?</h2>
            <p>
              Cada doação nos ajuda a manter os servidores funcionando, criar
              novos personagens e expandir o universo de *Muff*. Queremos que
              este seja um jogo que evolui com a comunidade, e sua ajuda é
              fundamental para isso!
            </p>
          </motion.div>
          <motion.div
            className="p-8 bg-gray-800 rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <h2 className="text-2xl font-bold mb-4">Como você pode ajudar</h2>
            <p>
              Você pode nos apoiar financeiramente através de doações únicas ou
              recorrentes. Além disso, compartilhar o jogo com amigos e
              engajar-se com a comunidade é uma ótima maneira de contribuir!
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto text-center py-8">
        <motion.a
          href="https://www.patreon.com/cstar"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          Torne-se um patrono
        </motion.a>
      </section>
    </div>
  );
}