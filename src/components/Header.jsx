import { useState } from 'react';
import { Menu, X, Github, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-foreground">
              Ricardo Moraes de Souza
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <button
                  onClick={() => scrollToSection('home')}
                  className="text-muted-foreground hover:text-primary transition-colors"
              >
                Início
              </button>
              <button
                  onClick={() => scrollToSection('about')}
                  className="text-muted-foreground hover:text-primary transition-colors"
              >
                Sobre
              </button>
              <button
                  onClick={() => scrollToSection('experience')}
                  className="text-muted-foreground hover:text-primary transition-colors"
              >
                Experiência
              </button>
              <button
                  onClick={() => scrollToSection('skills')}
                  className="text-muted-foreground hover:text-primary transition-colors"
              >
                Habilidades
              </button>
              <button
                  onClick={() => scrollToSection('projects')}
                  className="text-muted-foreground hover:text-primary transition-colors"
              >
                Projetos
              </button>
              <button
                  onClick={() => scrollToSection('contact')}
                  className="text-muted-foreground hover:text-primary transition-colors"
              >
                Contato
              </button>
            </nav>


            <div className="hidden md:flex items-center space-x-4">
              <a
                  href="https://github.com/Parmaxxx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                  href="mailto:ric_msouza@hotmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>

            <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>

          {isMenuOpen && (
              <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
                <div className="flex flex-col space-y-4">
                  <button
                      onClick={() => scrollToSection('home')}
                      className="text-left text-muted-foreground hover:text-primary transition-colors"
                  >
                    Início
                  </button>
                  <button
                      onClick={() => scrollToSection('about')}
                      className="text-left text-muted-foreground hover:text-primary transition-colors"
                  >
                    Sobre
                  </button>
                  <button
                      onClick={() => scrollToSection('experience')}
                      className="text-left text-muted-foreground hover:text-primary transition-colors"
                  >
                    Experiência
                  </button>
                  <button
                      onClick={() => scrollToSection('skills')}
                      className="text-left text-muted-foreground hover:text-primary transition-colors"
                  >
                    Habilidades
                  </button>
                  <button
                      onClick={() => scrollToSection('projects')}
                      className="text-left text-muted-foreground hover:text-primary transition-colors"
                  >
                    Projetos
                  </button>
                  <button
                      onClick={() => scrollToSection('contact')}
                      className="text-left text-muted-foreground hover:text-primary transition-colors"
                  >
                    Contato
                  </button>
                  <div className="flex items-center space-x-4 pt-4">
                    <a
                        href="https://github.com/Parmaxxx"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a
                        href="mailto:ric_msouza@hotmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </nav>
          )}
        </div>
      </header>
  );
};

export default Header;