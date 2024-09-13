import { motion } from 'framer-motion';

const PromoteText1 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-md font-semibold mb-2 text-secondary font-storm">&quot;Embarque em Uma Jornada Epica de Pixel e Fantasia!&quot;</h2>
      <p className="text-sm mb-2 text-blue-900 font-cloister">
        Em um universo magico e vibrante, sua aventura comeca.
      </p>
      <p className="text-md mb-4 font-dungeon">
        Explore vastos mapas repletos de segredos, enfrente inimigos ferozes e desvenda historias profundas que irao desafiar nao apenas suas habilidades, mas tambem seu coracao. Nosso RPG top-down traz de volta a nostalgia dos jogos classicos, combinada com uma narrativa rica e imersiva que mantem voce no controle do destino de cada heroi.
      </p>
      <p className="text-md mb-4 font-dungeon">
        Prepare-se para forjar aliancas, conquistar territorios e descobrir reliquias antigas que irao mudar o curso da historia. Cada decisao conta, e cada caminho escolhido revela novos misterios. <strong>Esta pronto para encarar o desafio?</strong>
      </p>
    </motion.div>
  );
};

const PromoteText2 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-md font-semibold mb-4 text-secondary font-storm">&quot;Um Mundo Moldado Pelo Detalhe&quot;</h2>
      <p className="text-sm mb-4 text-blue-900 font-cloister">
        Do vasto deserto ao sombrio pantano, cada ambiente e uma obra de arte pixelada, projetada para envolver voce em uma jornada visual inesquecivel. Mais do que apenas cenarios, esses mundos vivos reagem as suas escolhas e acaoes. Com uma estetica que homenageia os classicos, mas com mecanicas modernas e dinamicas, voce tera a oportunidade de moldar sua propria lenda.
      </p>
      <p className="text-md mb-4 font-dungeon">
        Sinta a tensao das batalhas tacticas, onde cada movimento conta e sua estrategia determinará o sucesso ou a derrota. Personalize seu heroi, descubra habilidades especiais e forje armas lendarias para derrotar chefes desafiadores e criaturas misticas.
      </p>
    </motion.div>
  );
};

const PromoteText3 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-lg font-semibold mb-4 text-secondary font-storm">&quot;Uma Aventura Alem dos Limites&quot;</h2>
      <p className="text-sm mb-4 text-blue-900 font-cloister">
        Este nao e apenas mais um RPG – e uma experiencia interativa que leva o conceito de mundo aberto para outro nivel. Com uma narrativa ramificada, cada escolha abre novas possibilidades e redefine os desafios que voce enfrentara. Siga seu instinto, forme sua equipe, e desbrave ruinas esquecidas em busca de poder.
      </p>
      <p className="text-md mb-4 font-dungeon">
        Seja voce um amante de jogos retro ou um explorador de novos mundos, nosso jogo oferece algo unico: a fusao perfeita entre nostalgia e inovacao. <strong>Mergulhe de cabeca nesse universo e descubra o heroi que existe em voce.</strong>
      </p>
    </motion.div>
  );
};

export { PromoteText1, PromoteText2, PromoteText3 };
