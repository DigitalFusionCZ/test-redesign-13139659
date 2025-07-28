'use client';

import { useState, useEffect } from 'react';

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.title = "Vše pro stavby s.r.o. | Rekonstrukce a stavby na klíč";

    const faviconSvg = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#34D399" /><stop offset="100%" stop-color="#1F2937" /></linearGradient></defs><circle cx="50" cy="50" r="50" fill="url(#g)" /></svg>`;
    const faviconUrl = `data:image/svg+xml;base64,${btoa(faviconSvg)}`;

    let link: HTMLLinkElement | null = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
    }
    link.href = faviconUrl;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: '#services', label: 'Služby' },
    { href: '#projects', label: 'Realizace' },
    { href: '#about', label: 'O nás' },
    { href: '#contact', label: 'Kontakt' },
  ];

  const ServiceCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-emerald-100 text-emerald-500 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );

  const ProjectCard = ({ image, title, description }: { image: string; title: string; description: string }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
      <div className="overflow-hidden">
         <img src={image} alt={title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"/>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 text-gray-800">
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
      
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <a href="#home" className="flex items-center gap-2">
              <img src="/images/logo-line-art-house.png" alt="Vše pro stavby logo" className="h-10 w-auto"/>
               <span className={`text-xl font-bold transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}>Vše pro stavby</span>
            </a>
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className={`font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-emerald-500' : 'text-white hover:text-emerald-300'}`}>
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="lg:hidden">
              <button onClick={toggleMenu} className={`relative z-50 transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
                {isMenuOpen ? (
                   <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                ) : (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed inset-0 bg-gray-900 bg-opacity-95 backdrop-blur-sm transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={toggleMenu} className="text-white text-2xl font-semibold hover:text-emerald-400 transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative h-screen flex items-center justify-center text-center bg-cover bg-center" style={{backgroundImage: 'url(/images/project-tanvald-after-renovation.jpg)'}}>
            <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
            <div className="relative z-10 px-4">
                <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">Rekonstrukce a stavby na klíč</h1>
                <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8">Komplexní řešení pro vaše stavby od projektu po realizaci. S důrazem na kvalitu a spolehlivost.</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href="#services" className="bg-emerald-500 text-white font-bold py-3 px-8 rounded-full hover:bg-emerald-600 transition-colors duration-300 w-full sm:w-auto">Naše služby</a>
                    <a href="#contact" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-gray-900 transition-colors duration-300 w-full sm:w-auto">Kontaktujte nás</a>
                </div>
            </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 md:py-28 bg-gray-100 scroll-mt-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Naše služby</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Nabízíme široké spektrum stavebních prací s garancí vysoké kvality.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ServiceCard icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M2 21a8 8 0 0 1 11.873-7.873Z"/><path d="M17.5 14.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z"/><path d="M12 21v-1a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v1"/><path d="M22 21v-1a2 2 0 0 0-2-2h-2.5"/><path d="M17 11.5a1.5 1.5 0 0 1 3 0V21"/></svg>} title="Stavby na klíč" description="Kompletní realizace novostaveb dle vašich představ, od základů po střechu."/>
                <ServiceCard icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-4-3-5s-4-1-5-3-1-4-3-4-3 1-4 3-2 2-3 4-1 3-1 5a7 7 0 0 0 7 7z"/><path d="M12 12v10"/></svg>} title="Rekonstrukce bytů a domů" description="Modernizace a úpravy stávajících objektů pro lepší a komfortnější bydlení."/>
                <ServiceCard icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M14 4h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-2"/><path d="M6 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 4v16"/></svg>} title="Zateplení fasád" description="Efektivní zateplovací systémy, které sníží vaše náklady na energie a zlepší vzhled domu."/>
                <ServiceCard icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M14 12V8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="m10 9-6 6"/><path d="M8 22v-3.5a1.5 1.5 0 0 1 3 0V22"/><path d="M12 12h4"/><path d="M16 12h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2v-6Z"/></svg>} title="Zemní a výkopové práce" description="Provádíme veškeré zemní práce potřebné pro přípravu vaší stavby."/>
                <ServiceCard icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>} title="Zámková dlažba" description="Profesionální pokládka zámkové dlažby pro chodníky, příjezdové cesty a terasy."/>
                <ServiceCard icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M4 22h16"/><path d="M4 18h16"/><path d="M4 14h16"/><path d="M4 10h16"/><path d="M4 6h16"/></svg>} title="Obklady a dlažby" description="Precizní obkladačské práce v interiérech i exteriérech s použitím moderních materiálů."/>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 md:py-28 bg-white scroll-mt-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Ukázky naší práce</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Naše projekty jsou naší nejlepší vizitkou. Podívejte se na vybrané realizace.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                   <ProjectCard image="/images/project-tanvald-after-renovation.jpg" title="Rekonstrukce RD Tanvald" description="Kompletní rekonstrukce rodinného domu včetně nové střechy, fasády a vnitřních dispozic."/>
                   <ProjectCard image="/images/project-rdpo-completed.jpg" title="Novostavba RDPO" description="Výstavba moderního rodinného domu na klíč podle individuálního projektu klienta."/>
                </div>
            </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-20 md:py-28 bg-gray-100 scroll-mt-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">O firmě Vše pro stavby s.r.o.</h2>
                  <p className="text-lg text-gray-600 mb-4">Jsme zavedená stavební firma s více než 15 lety zkušeností na trhu. Od založení v roce 2005 jsme se vyprofilovali jako spolehlivý partner pro stovky spokojených zákazníků.</p>
                  <p className="text-gray-600 mb-8">Náš tým tvoří zkušení odborníci, kteří kladou důraz na kvalitu, profesionalitu a individuální přístup. Každý projekt je pro nás jedinečnou výzvou, ke které přistupujeme s maximálním nasazením a péčí o detail.</p>
                </div>
                <div className="space-y-6">
                   <div className="flex items-start gap-4">
                       <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-emerald-100 text-emerald-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 0 2l-.15.08a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1 0-2l.15-.08a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg></div>
                       <div><h4 className="font-semibold text-lg text-gray-800">Kvalita a preciznost</h4><p className="text-gray-600">Používáme ověřené materiály a postupy pro dosažení nejvyšší kvality.</p></div>
                   </div>
                   <div className="flex items-start gap-4">
                       <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-emerald-100 text-emerald-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M12 8v4l3 3"/><circle cx="12" cy="12" r="10"/></svg></div>
                       <div><h4 className="font-semibold text-lg text-gray-800">Spolehlivost a termíny</h4><p className="text-gray-600">Dodržujeme dohodnuté termíny a rozpočty. Na nás se můžete spolehnout.</p></div>
                   </div>
                     <div className="flex items-start gap-4">
                       <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-emerald-100 text-emerald-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
                       <div><h4 className="font-semibold text-lg text-gray-800">Individuální přístup</h4><p className="text-gray-600">Každému klientovi nasloucháme a navrhujeme řešení na míru.</p></div>
                   </div>
                </div>
              </div>
            </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-28 bg-gray-800 text-white scroll-mt-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold">Kontaktujte nás</h2>
                    <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">Máte dotaz nebo zájem o nezávaznou konzultaci? Ozvěte se nám!</p>
                </div>
                <div className="mx-auto max-w-4xl bg-white text-gray-800 p-8 sm:p-12 rounded-lg shadow-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
                        <div className="space-y-6">
                           <h3 className="text-2xl font-bold text-gray-900">Vše pro stavby s.r.o.</h3>
                           <div className="flex items-center justify-center md:justify-start gap-3">
                               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-emerald-500"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                               <p>Podhorská 112/99, 466 01<br/>Jablonec nad Nisou</p>
                           </div>
                          <p><span className="font-semibold">IČO:</span> 27273349</p>
                        </div>
                         <div className="space-y-6">
                           <h3 className="text-2xl font-bold text-gray-900">Spojte se s námi</h3>
                           <div className="flex items-center justify-center md:justify-start gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-emerald-500"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                               <a href="tel:+420732232000" className="hover:text-emerald-600 transition-colors">+420 732 232 000</a>
                           </div>
                             <div className="flex items-center justify-center md:justify-start gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-emerald-500"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                               <a href="mailto:info@vseprostavby.cz" className="hover:text-emerald-600 transition-colors">info@vseprostavby.cz</a>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="mb-2">&copy; {new Date().getFullYear()} Vše pro stavby s.r.o. Všechna práva vyhrazena.</p>
          <p>Vytvořeno s láskou od <a href="https://digitalfusion.cz" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors">DigitalFusion</a></p>
        </div>
      </footer>
    </div>
  );
}
