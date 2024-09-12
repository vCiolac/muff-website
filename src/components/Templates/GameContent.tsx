import { motion } from 'framer-motion';

export default function GameContent() {
  return (
    <div className="min-h-screen p-2">
      <header className="container mx-auto text-center">
        <motion.h1
          className="text-5xl font-bold mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Sobre Muff - A Origem
        </motion.h1>
        <motion.p
          className="text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          *Muff - A Origem* é um jogo de RPG online que combina aventura,
          estratégia e uma imersão completa em um mundo pixel art vibrante.
          Cada jogador tem sua própria casa, cuida de seu espaço e se prepara
          para batalhas épicas em equipe!
        </motion.p>
      </header>

      <section className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="p-8 bg-gray-800 rounded-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-2xl font-bold mb-4">Aventura e Personalização</h2>
            <p>
              Em *Muff*, cada jogador tem sua própria casa para personalizar,
              além de poder cuidar de plantas e animais. Mas não se engane,
              a verdadeira ação começa quando você se une a outros jogadores
              para enfrentar hordas de monstros!
            </p>
          </motion.div>
          <motion.div
            className="p-8 bg-gray-800 rounded-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <h2 className="text-2xl font-bold mb-4">Desafios Progressivos</h2>
            <p>
              Conforme os jogadores avançam nas ondas de inimigos, a dificuldade
              aumenta. Cada monstro é mais inteligente e perigoso, o que obriga
              os jogadores a planejarem estratégias em equipe para sobreviver!
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
