import React from 'react';
import { Shield, ArrowLeft, Mail, AlertTriangle, CheckCircle2, Link as LinkIcon, CreditCard, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

function PhishingPage() {
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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="relative container mx-auto px-6">
          <h1 className="text-5xl font-bold text-white mb-6">Identificando Tentativas de Phishing</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Aprenda a reconhecer e evitar tentativas de phishing para proteger suas informações pessoais e financeiras.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        {/* Common Types */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Tipos Comuns de Phishing</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Mail className="w-8 h-8 text-emerald-500" />,
                title: "E-mail Phishing",
                description: "E-mails fraudulentos que se passam por empresas legítimas solicitando dados sensíveis."
              },
              {
                icon: <MessageSquare className="w-8 h-8 text-emerald-500" />,
                title: "SMS Phishing (Smishing)",
                description: "Mensagens de texto maliciosas com links para sites falsos ou números suspeitos."
              },
              {
                icon: <LinkIcon className="w-8 h-8 text-emerald-500" />,
                title: "Phishing de URL",
                description: "Sites falsos que imitam páginas legítimas para roubar credenciais de login."
              },
              {
                icon: <CreditCard className="w-8 h-8 text-emerald-500" />,
                title: "Phishing Financeiro",
                description: "Tentativas de roubo de dados bancários e informações de cartão de crédito."
              }
            ].map((type, index) => (
              <div key={index} className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
                <div className="mb-4">{type.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{type.title}</h3>
                <p className="text-gray-300">{type.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Red Flags */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Sinais de Alerta</h2>
          <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-8">
            <div className="flex items-start space-x-4">
              <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
              <ul className="space-y-4 text-gray-300">
                <li>• Erros de português ou formatação estranha</li>
                <li>• Solicitação urgente de dados pessoais ou financeiros</li>
                <li>• Remetente suspeito ou diferente do normal</li>
                <li>• Links com URLs ligeiramente diferentes das oficiais</li>
                <li>• Ofertas muito boas para ser verdade</li>
                <li>• Mensagens genéricas sem seu nome</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How to Protect Yourself */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-8">Como se Proteger</h2>
          <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-8">
            <div className="flex items-start space-x-4">
              <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
              <ul className="space-y-4 text-gray-300">
                <li>• Verifique sempre o endereço de e-mail do remetente</li>
                <li>• Não clique em links suspeitos</li>
                <li>• Digite manualmente os URLs de sites importantes</li>
                <li>• Use autenticação em duas etapas</li>
                <li>• Mantenha seu software atualizado</li>
                <li>• Nunca forneça senhas ou dados sensíveis por e-mail</li>
                <li>• Em caso de dúvida, contate a empresa diretamente</li>
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

export default PhishingPage;