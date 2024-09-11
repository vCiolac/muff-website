import Link from "next/link";

const FooterNav = () => {
  return (
    <section className="grid grid-cols-3 md:grid-cols-4 lg:top-10 lg:relative text-center lg:text-left ml-2 lg:col-span-3 gap-6 mx-2">
      <div>
        <p className="font-medium text-gray-900">Atendimento</p>
        <ul className="mt-6 space-y-4 text-sm">
          <li>
            <span className="text-gray-700 transition hover:opacity-75">
              Atendimentos de segunda à sexta de 08h às 17h.
            </span>
          </li>
          <li>
            <p className="text-gray-700 transition hover:opacity-75">
              (21) 3347-0211
            </p>
          </li>
        </ul>
      </div>

      <div>
        <p className="font-medium text-gray-900">CMTrat</p>
        <ul className="mt-6 space-y-4 text-sm">
          <li>
            <Link href="/sobre" className="text-gray-700 transition hover:opacity-75">
              Sobre Nós
            </Link>
          </li>
          <li>
            <Link href="/servicos" className="text-gray-700 transition hover:opacity-75">
              Serviços
            </Link>
          </li>
          <li>
            <Link href="/noticias" className="text-gray-700 transition hover:opacity-75">
              Notícias
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <p className="font-medium text-gray-900">Legislação</p>
        <ul className="mt-6 space-y-4 text-sm">
          <li>
            <Link href="/privacidade" className="text-gray-700 transition hover:opacity-75">
              Política de Privacidade
            </Link>
          </li>
          <li>
            <Link href="/termos" className="text-gray-700 transition hover:opacity-75">
              Termos de Uso
            </Link>
          </li>
        </ul>
      </div>

      <div className="md:col-span-1 col-span-3 mb-4">
        <p className="font-medium text-gray-900">Links úteis</p>
        <ul className="mt-6 space-y-4 text-sm">
          <li>
            <Link href="/faq" className="text-gray-700 transition hover:opacity-75">
              FAQ - Perguntas Frequentes
            </Link>
          </li>
          <li>
            <Link href="/orcamento" className="text-gray-700 transition hover:opacity-75">
              Solicitar Orçamento
            </Link>
          </li>
          <li>
            <Link href="/contato" className="text-gray-700 transition hover:opacity-75">
              Contato
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default FooterNav;
