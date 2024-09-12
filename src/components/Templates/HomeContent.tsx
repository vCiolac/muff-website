import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HomeContent() {
  return (
    <div className="min-h-screen text-black font-toxType">
      {/* Header Section */}
      <header className="container mx-auto text-center">
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Muff - A Origem
        </motion.h1>
        <motion.p
          className="text-xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Um RPG épico onde sua casa é seu refúgio, e o campo de batalha, seu destino!
        </motion.p>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Link href="#" className="bg-blue-600 px-1 md:px-6 py-3 rounded-lg text-xl font-semibold hover:bg-blue-800 transition transform scale-80">
              Conheça os Campeões
          </Link>
        </motion.div>
      </header>

      {/* Features Section */}
      <section className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="p-8 bg-gray-800 rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-xl font-bold mb-4">Sua Casa, Seu Mundo</h2>
            <p>
              Personalize, plante, crie animais e use sua casa como o ponto de partida para aventuras épicas!
            </p>
          </motion.div>
          <motion.div
            className="p-8 bg-gray-800 rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <h2 className="text-xl font-bold mb-4">Aventura em Equipe</h2>
            <p>
              Reúna-se com até 5 amigos, escolha entre 12 campeões, e lute contra hordas de inimigos e monstros poderosos!
            </p>
          </motion.div>
          <motion.div
            className="p-8 bg-gray-800 rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <h2 className="text-xl font-bold mb-4 ">Monstros Desafiadores</h2>
            <p>
              Cada nova onda traz inimigos mais inteligentes e perigosos. Está preparado para o desafio?
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 C-Star Games. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
