import React from 'react';
import { Shield, ArrowLeft, Lock, Key, Smartphone, Cloud, Laptop, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

function DigitalSecurityPage() {
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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="relative container mx-auto px-6">
          <h1 className="text-5xl font-bold text-white mb-6">Fundamentos de Segurança Digital</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Aprenda os princípios essenciais para proteger sua vida digital e manter seus dados seguros no mundo conectado.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        {/* Core Principles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Princípios Fundamentais</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Key className="w-8 h-8 text-emerald-500" />,
                title: "Senhas Fortes",
                description: "Use senhas únicas e complexas para cada conta, com gerenciador de senhas."
              },
              {
                icon: <RefreshCw className="w-8 h-8 text-emerald-500" />,
                title: "Atualizações",
                description: "Mantenha sistemas e aplicativos sempre atualizados com as últimas correções."
              },
              {
                icon: <Lock className="w-8 h-8 text-emerald-500" />,
                title: "Autenticação em Duas Etapas",
                description: "Ative a verificação em dois fatores em todas as contas possíveis."
              },
              {
                icon: <Cloud className="w-8 h-8 text-emerald-500" />,
                title: "Backup de Dados",
                description: "Mantenha cópias regulares de seus dados importantes em local seguro."
              },
              {
                icon: <Smartphone className="w-8 h-8 text-emerald-500" />,
                title: "Segurança Mobile",
                description: "Proteja seus dispositivos móveis com PIN, biometria e criptografia."
              },
              {
                icon: <Laptop className="w-8 h-8 text-emerald-500" />,
                title: "Navegação Segura",
                description: "Use conexões HTTPS e evite redes Wi-Fi públicas sem VPN."
              }
            ].map((principle, index) => (
              <div key={index} className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
                <div className="mb-4">{principle.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{principle.title}</h3>
                <p className="text-gray-300">{principle.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Best Practices */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Melhores Práticas</h2>
          <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-8">
            <ul className="space-y-4 text-gray-300">
              <li>• Nunca reutilize senhas entre diferentes contas</li>
              <li>• Evite compartilhar informações pessoais em redes sociais</li>
              <li>• Faça backup regular de dados importantes</li>
              <li>• Use um gerenciador de senhas confiável</li>
              <li>• Mantenha seu software antivírus atualizado</li>
              <li>• Verifique permissões de aplicativos regularmente</li>
              <li>• Criptografe dados sensíveis</li>
              <li>• Use VPN em redes públicas</li>
            </ul>
          </div>
        </section>

        {/* Security Tools */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-8">Ferramentas Recomendadas</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-4">Proteção Básica</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Gerenciadores de senha</li>
                <li>• Antivírus confiável</li>
                <li>• Firewall ativo</li>
                <li>• Autenticador 2FA</li>
              </ul>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-4">Proteção Avançada</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• VPN para navegação segura</li>
                <li>• Software de criptografia</li>
                <li>• Backup em nuvem seguro</li>
                <li>• Scanner de malware</li>
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

export default DigitalSecurityPage;