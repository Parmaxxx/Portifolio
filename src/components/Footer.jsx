import {Github, Mail, Heart, Linkedin} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Ricardo Moraes de Souza
              </h3>
              <p className="text-muted-foreground mb-4">
                Desenvolvedor Backend especializado em Java, Oracle SQL e JavaScript. 
                Focado em criar soluções robustas e escaláveis.
              </p>
              <div className="flex space-x-4">
                <a
                    href="https://github.com/Parmaxxx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={20}/>
                </a>
                <a
                    href="https://www.linkedin.com/in/ricardo-moraes-de-souza-6262b114a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="text-foreground" size={24}/>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Links Rápidos
              </h3>
              <ul className="space-y-2">
                <li>
                  <button
                      onClick={() => document.getElementById('home')?.scrollIntoView({behavior: 'smooth'})}
                      className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Início
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Sobre
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Experiência
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Habilidades
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Projetos
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Contato
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Tecnologias Principais
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                  Java
                </span>
                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                  Oracle SQL
                </span>
                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                  JavaScript
                </span>
                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                  Spring Boot
                </span>
                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                  REST APIs
                </span>
                <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                  Go (Aprendendo)
                </span>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4 md:mb-0">
                <span>© {currentYear} Ricardo Moraes de Souza </span>
              </div>
              
              <button
                onClick={scrollToTop}
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Voltar ao topo ↑
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
