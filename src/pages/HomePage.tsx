import React, { useEffect, useState } from 'react';
import { Search, Shield, AlertTriangle, BookOpen, Share2, TrendingUp, CheckCircle, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import data from '../assets/mocks.json';

interface mockedData { 
  title: string,
  description: string,
  reliability: string
  comments: string[]
}

function HomePage() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedSuggestion, setSelectedSuggestion] = useState("");
  const [mockedData, setMockedData] = useState({ title: '', comments: [''], description: '', reliability: '', })
  
  
  useEffect(() => { const dataSelected = data.find(item => selectedSuggestion === item.title); if (dataSelected) { setMockedData({ title: dataSelected.title, comments: dataSelected.comments, description: dataSelected.description, reliability: dataSelected.reliability, }); } }, [selectedSuggestion]);

  const getAndCreateElement = (): HTMLElement[] => {
    const suggestion = ['Jogo do Tigrinho', 'KTO', 'Esportes da Sorte', 'Phishing', 'o que é .bet?', 'Betano', 'Jogo do Macaco', 'Dr Deolane', 'Jogo do bicho', 'Blaze'];
    const elements: HTMLElement[] = [];
    suggestion.forEach(element => {
        const content = document.createElement('a');
        content.innerHTML = element;
        content.style.display = 'block';
        content.style.marginTop = '4px';
        content.style.marginBottom = '4px';
        content.style.marginLeft = '4px';
        content.style.textAlign = 'left';
        content.href = "#";
        content.addEventListener('click', (event) => {
          event.preventDefault(); 
          renderModal(content.innerHTML);
        });        
        elements.push(content);
    });
    return elements;
};

const renderModal = (suggestion: string) => {
  setOpenModal(true);
  setSelectedSuggestion(suggestion);
  eraseSuggestions();
}
const eraseSuggestions = () => {
  const suggestionDiv: HTMLElement = document.querySelector('.search-suggestion') as HTMLElement;
  suggestionDiv.style.visibility = 'hidden';  
}

  const getSuggestions = () => {
    const suggestionDiv: HTMLElement = document.querySelector('.search-suggestion') as HTMLElement;
    suggestionDiv.style.visibility = 'visible';
    suggestionDiv.innerHTML = "";
    const elements: HTMLElement[] = getAndCreateElement();
    elements.forEach(element => suggestionDiv.appendChild(element));
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Hero Section */}
      <header className="relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576267423048-15c0040fec78?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        <nav className="relative z-10 container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-emerald-500" />
              <span className="text-2xl font-bold text-white">Sherlock</span>
            </div>
            <div className="hidden md:flex space-x-8 text-gray-300">
              <a href="#features" className="hover:text-emerald-500 transition">Recursos</a>
              <a href="#verify" className="hover:text-emerald-500 transition">Verificar</a>
              <a href="#report" className="hover:text-emerald-500 transition">Reportar</a>
              <a href="#learn" className="hover:text-emerald-500 transition">Aprender</a>
            </div>
            <button className="bg-emerald-500 text-white px-6 py-2 rounded-lg hover:bg-emerald-600 transition">
              Começar
            </button>
          </div>
        </nav>
        
        <div>
        {openModal ?
                <div id="modal" className="modal">
                <div className="modal-header">
                    <span>{mockedData.title}</span>
                    <button className="close-button" onClick={() => setOpenModal(false)}>×</button>
                </div>
                <div className="modal-description">{mockedData.description}</div>
                <div className="modal-reliability">{mockedData.reliability}</div>
                <div className="comments">
                    <div className="comment">{mockedData.comments[0]}</div>
                    <div className="comment">{mockedData.comments[1]}</div>
                    <div className="comment">{mockedData.comments[2]}</div>
                </div>
            </div>
        : null}
        </div>

        <div className="relative z-10 container mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Revelando a Verdade na Era Digital
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Seu companheiro com IA no combate à desinformação, golpes e fraudes digitais.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="relative w-full max-w-xl">
              <input
                type="text"
                onChange = {event => getSuggestions()}
                placeholder="Cole um link ou texto para verificar..."
                className="w-full px-6 py-4 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 sherlock-search"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <div className='search-suggestion'></div>
            </div>
            <button className="whitespace-nowrap bg-emerald-500 text-white px-8 py-4 rounded-lg hover:bg-emerald-600 transition">
              Verificar Agora
            </button>
          </div>
        </div>
      </header>
      {/* Features Section */}
      <section id="features" className="py-24 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Como o Sherlock Protege Você</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <AlertTriangle className="w-12 h-12 text-emerald-500" />,
                title: "Detecção de Golpes em Tempo Real",
                description: "Algoritmos avançados de IA identificam potenciais golpes e conteúdos fraudulentos instantaneamente."
              },
              {
                icon: <CheckCircle className="w-12 h-12 text-emerald-500" />,
                title: "Verificação de Fatos",
                description: "Cruzamento de informações com fontes confiáveis para validar alegações e declarações."
              },
              {
                icon: <Share2 className="w-12 h-12 text-emerald-500" />,
                title: "Relatórios da Comunidade",
                description: "Plataforma colaborativa para usuários reportarem e rastrearem golpes e desinformação emergentes."
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
              { number: "10M+", label: "Golpes Detectados" },
              { number: "98%", label: "Taxa de Precisão" },
              { number: "5M+", label: "Usuários Protegidos" }
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
            <h2 className="text-3xl font-bold text-white">Últimos Alertas</h2>
            <TrendingUp className="w-6 h-6 text-emerald-500" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                type: "ALERTA DE GOLPE",
                title: "Esquema de Investimento em Criptomoedas",
                description: "Nova onda de plataformas falsas de investimento em criptomoedas detectada."
              },
              {
                type: "NOTÍCIA FALSA",
                title: "Boato Viral em Redes Sociais",
                description: "Conselhos de saúde enganosos circulando em plataformas sociais."
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
            <h2 className="text-3xl font-bold text-white">Aprenda a se Proteger</h2>
            <BookOpen className="w-6 h-6 text-emerald-500" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Link 
              to="/learn/phishing"
              className="bg-slate-700/50 p-6 rounded-xl hover:bg-slate-700 transition cursor-pointer"
            >
              <h3 className="text-lg font-semibold text-white mb-2">Identificando Tentativas de Phishing</h3>
              <p className="text-gray-300">Saiba Mais →</p>
            </Link>
            <Link 
              to="/learn/social-engineering"
              className="bg-slate-700/50 p-6 rounded-xl hover:bg-slate-700 transition cursor-pointer"
            >
              <h3 className="text-lg font-semibold text-white mb-2">Táticas de Engenharia Social</h3>
              <p className="text-gray-300">Saiba Mais →</p>
            </Link>
            <Link 
              to="/learn/digital-security"
              className="bg-slate-700/50 p-6 rounded-xl hover:bg-slate-700 transition cursor-pointer"
            >
              <h3 className="text-lg font-semibold text-white mb-2">Fundamentos de Segurança Digital</h3>
              <p className="text-gray-300">Saiba Mais →</p>
            </Link>
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
            © 2024 Sherlock. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;