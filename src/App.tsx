import React from 'react';
import { Search, Shield, AlertTriangle, BookOpen, Share2, TrendingUp, CheckCircle, AlertCircle } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576267423048-15c0040fec78?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        <nav className="relative z-10 container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-emerald-500" />
              <span className="text-2xl font-bold text-white">Sherlock</span>
            </div>
            <div className="hidden md:flex space-x-8 text-gray-300">
              <a href="#features" className="hover:text-emerald-500 transition">Sobre</a>
              <a href="#verify" className="hover:text-emerald-500 transition">Verifique</a>
              <a href="#report" className="hover:text-emerald-500 transition">Relatório</a>
              <a href="#learn" className="hover:text-emerald-500 transition">Aprenda</a>
            </div>
            <button className="bg-emerald-500 text-white px-6 py-2 rounded-lg hover:bg-emerald-600 transition">
              Inicie
            </button>
          </div>
        </nav>

        <div className="relative z-10 container mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Desvendando a verdade na era digita
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Seu companheiro com inteligência artificial na luta contra desinformação, golpes e engano digital.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="relative w-full max-w-xl">
              <input
                type="text"
                placeholder="Paste a link or text to verify..."
                className="w-full px-6 py-4 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <button className="whitespace-nowrap bg-emerald-500 text-white px-8 py-4 rounded-lg hover:bg-emerald-600 transition">
              Verifique agora
            </button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-24 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Como Sherlock protege você</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <AlertTriangle className="w-12 h-12 text-emerald-500" />,
                title: "Detecção de golpes em tempo real",
                description: "Algoritmos avançados de IA identificam possíveis golpes e conteúdo fraudulento instantaneamente."
              },
              {
                icon: <CheckCircle className="w-12 h-12 text-emerald-500" />,
                title: "Verificação de fatos",
                description: "Cruze informações com fontes confiáveis para validar declarações e declarações."
              },
              {
                icon: <Share2 className="w-12 h-12 text-emerald-500" />,
                title: "Relatórios da comunidade",
                description: "Plataforma colaborativa para os usuários denunciarem e rastrearem golpes e desinformação emergentes."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-slate-700/50 p-8 rounded-xl hover:transform hover:-translate-y-1 transition">
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-emerald-500">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {[
              { number: "10M+", label: "Golpes detectados" },
              { number: "98%", label: "Taxa de precisão" },
              { number: "5M+", label: "Usuários protegidos" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-emerald-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Alerts */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-white">Alertas mais recentes</h2>
            <TrendingUp className="w-6 h-6 text-emerald-500" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                type: "ALERTA DE SHAM",
                title: "Esquema de investimento em criptomoeda",
                description: "Nova onda de plataformas falsas de investimento em criptomoedas detectadas."
              },
              {
                type: "NOTÍCIAS FALSAS",
                title: "Viral Social Media Hoax",
                description: "Conselhos de saúde enganosos que circulam nas plataformas sociais."
              }
            ].map((alert, index) => (
              <div key={index} className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
                <div className="flex items-center space-x-2 mb-4">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  <span className="text-sm font-semibold text-red-500">{alert.type}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{alert.title}</h3>
                <p className="text-gray-300">{alert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-24 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-white">Aprenda a se proteger</h2>
            <BookOpen className="w-6 h-6 text-emerald-500" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Identificando tentativas de phishing",
              "Táticas de engenharia social",
              "Noções básicas de segurança digital"
            ].map((topic, index) => (
              <div key={index} className="bg-slate-700/50 p-6 rounded-xl hover:bg-slate-700 transition cursor-pointer">
                <h3 className="text-lg font-semibold text-white mb-2">{topic}</h3>
                <p className="text-gray-300">Saiba mais →</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-8 md:mb-0">
              <Shield className="w-6 h-6 text-emerald-500" />
              <span className="text-xl font-bold text-white">Sherlock</span>
            </div>
            <div className="flex space-x-8 text-gray-400">
              <a href="#privacy" className="hover:text-emerald-500 transition">Privacidade</a>
              <a href="#terms" className="hover:text-emerald-500 transition">Termos</a>
              <a href="#contact" className="hover:text-emerald-500 transition">Contato</a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-500">
            © 2024 Sherlock. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;