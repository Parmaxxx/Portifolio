import { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  useEffect(() => {
    // Adiciona scroll suave ao documento
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Cleanup
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header fixo */}
      <Header />
      
      {/* Conteúdo principal */}
      <main>
        {/* Seção Hero */}
        <HeroSection />
        
        {/* Seção Sobre */}
        <AboutSection />
        
        {/* Seção Experiência */}
        <ExperienceSection />
        
        {/* Seção Habilidades */}
        <SkillsSection />
        
        {/* Seção Projetos */}
        <ProjectsSection />
        
        {/* Seção Contato */}
        <ContactSection />
      </main>
      
      {/* Rodapé */}
      <Footer />
    </div>
  );
}

export default App;
