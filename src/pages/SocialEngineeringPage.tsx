import React from 'react';
import { Shield, ArrowLeft, Users, Brain, Target, AlertTriangle, Lock, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

function SocialEngineeringPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Header */}
      <header className="bg-slate-800/50 border-b border-slate-700">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Shield className="w-6 h-6 text-emerald-500" />
              <span className="text-xl font-bold text-white">Sherlock</span>
            </Link>
            <Link to="/" className="flex items-center text-gray-300 hover:text-emerald-500 transition">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Voltar para Início
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="relative container mx-auto px-6">
          <h1 className="text-5xl font-bold text-white mb-6">Táticas de Engenharia Social</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Entenda as técnicas de manipulação psicológica usadas por criminosos cibernéticos para explorar vulnerabilidades humanas.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        {/* Common Tactics */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Táticas Comuns</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8 text-emerald-500" />,
                title: "Personificação",
                description: "Criminosos se passam por entidades confiáveis como colegas, prestadores de serviços ou autoridades."
              },
              {
                icon: <Brain className="w-8 h-8 text-emerald-500" />,
                title: "Manipulação Psicológica",
                description: "Exploração de emoções como medo, urgência ou curiosidade para contornar o pensamento racional."
              },
              {
                icon: <Target className="w-8 h-8 text-emerald-500" />,
                title: "Phishing Direcionado",
                description: "Ataques específicos usando informações pessoais para parecer mais legítimos."
              },
              {
                icon: <Eye className="w-8 h-8 text-emerald-500" />,
                title: "Espionagem Presencial",
                description: "Observação física de informações sensíveis sendo digitadas ou exibidas."
              }
            ].map((tactic, index) => (
              <div key={index} className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
                <div className="mb-4">{tactic.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{tactic.title}</h3>
                <p className="text-gray-300">{tactic.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Warning Signs */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Sinais de Alerta</h2>
          <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-8">
            <div className="flex items-start space-x-4">
              <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
              <ul className="space-y-4 text-gray-300">
                <li>• Pedidos inesperados de informações sensíveis</li>
                <li>• Urgência incomum ou pressão para agir rapidamente</li>
                <li>• Erros de gramática ou ortografia em comunicações oficiais</li>
                <li>• Solicitações para ignorar procedimentos padrão de segurança</li>
                <li>• Anexos ou links não solicitados</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Protection Strategies */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-8">Estratégias de Proteção</h2>
          <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-8">
            <div className="flex items-start space-x-4">
              <Lock className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
              <ul className="space-y-4 text-gray-300">
                <li>• Verifique solicitações através de canais alternativos de comunicação</li>
                <li>• Nunca compartilhe informações sensíveis por e-mail ou telefone</li>
                <li>• Reserve tempo para avaliar situações, resista a táticas de pressão</li>
                <li>• Mantenha software e sistemas atualizados</li>
                <li>• Reporte atividades suspeitas à equipe de segurança</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 mt-16">
        <div className="container mx-auto px-6 text-center text-gray-500">
          © 2024 Sherlock. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}

export default SocialEngineeringPage;