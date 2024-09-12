import { motion } from 'framer-motion';

export default function AboutContent() {
  return (
    <div className="font-toxType min-h-screen bg-gradient-to-b from-gray-900 to-gray-700 text-white p-2 rounded-xl">
      <header className="container mx-auto py-4 text-center">
        <motion.h1
          className="text-5xl font-bold mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Sobre Nós
        </motion.h1>
        <motion.p
          className="text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          A C-Star Games nasceu de uma paixão por criar experiências imersivas
          e divertidas. Nosso objetivo é transportar jogadores para universos
          repletos de aventuras e desafios. Somos um estúdio dedicado a
          explorar novas formas de contar histórias e envolver nossos jogadores
          com personagens marcantes e jogabilidade surpreendente.
        </motion.p>
      </header>

      <section className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="p-8 bg-gray-800 rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-2xl font-bold mb-4">Nossa Missão</h2>
            <p>
              Queremos oferecer aos jogadores uma experiência única, onde cada
              escolha afeta a história, e cada personagem tem uma história
              profunda a ser contada.
            </p>
          </motion.div>
          <motion.div
            className="p-8 bg-gray-800 rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <h2 className="text-2xl font-bold mb-4">Nossa Equipe</h2>
            <p>
              Composta por desenvolvedores, designers e escritores apaixonados,
              nossa equipe se dedica a entregar jogos que tragam alegria e
              desafiem o intelecto dos jogadores.
            </p>
          </motion.div>
          <motion.div
            className="p-8 bg-gray-800 rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <h2 className="text-2xl font-bold mb-4">Nossa Visão</h2>
            <p>
              Queremos ser reconhecidos como um estúdio inovador, que quebra
              barreiras e redefine o que um jogo pode ser.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
