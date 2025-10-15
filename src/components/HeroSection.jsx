import { Button } from '@/components/ui/button.jsx';
import {Github, Mail, Download, Linkedin} from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full border-4 border-primary/20 overflow-hidden">
              <img
                  src="/Portifolio/assets/RicPerfil.jpg"
                  alt="Ricardo Moraes"
                  className="w-full h-full object-cover"
              />
            </div>
          </div>


          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Ricardo Moraes de Souza
          </h1>

          <h2 className="text-xl md:text-2xl text-primary font-semibold mb-6">
            Desenvolvedor Backend
          </h2>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Especialista em desenvolvimento backend com foco em Java, Oracle SQL e JavaScript. 
            Apaixonado por criar soluções robustas e escaláveis que impulsionam o sucesso dos negócios.
          </p>

          <div className="bg-card border border-border rounded-lg p-6 mb-8 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-foreground mb-4">Formação Acadêmica</h3>
            <div className="text-muted-foreground space-y-2">
              <p><strong>Faculdade:</strong> FATEC-ZL</p>
              <p><strong>Curso:</strong> Desenvolvimento de Software Multiplataforma</p>
              <p><strong>Início:</strong> 2023/1</p>
              <p><strong>Previsão de Conclusão:</strong> 2025/2</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
                onClick={() => scrollToSection('projects')}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Ver Projetos
            </Button>

            <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"
                size="lg"
            >
              Entre em Contato
            </Button>

            <a
                href="/src/assets/RicardoCV.pdf"
                download="Ricardo Moraes de Souza - CV.pdf"
                className="flex items-center gap-2"
            >
              <Download size={16}/>
              Download CV
            </a>
          </div>

          <div className="flex justify-center space-x-6 mt-8">
            <a
                href="https://github.com/Parmaxxx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-muted"
            >
              <Github size={24}/>
            </a>
            <a
                href="https://www.linkedin.com/in/ricardo-moraes-de-souza-6262b114a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-muted"
            >
              <Linkedin className="text-foreground" size={24}/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
