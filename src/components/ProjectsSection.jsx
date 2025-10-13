import { useState } from 'react';
import { ExternalLink, Github, Code, Database, Server, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const ProjectCard = ({ project, onViewDetails }) => {
  const getTechIcon = (tech) => {
    const techLower = tech.toLowerCase();
    if (techLower.includes('java')) return Code;
    if (techLower.includes('sql') || techLower.includes('database')) return Database;
    if (techLower.includes('api') || techLower.includes('backend')) return Server;
    return Code;
  };

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow group">
      <div className="h-48 bg-muted flex items-center justify-center relative overflow-hidden">
        <div className="text-muted-foreground text-center">
          <Code size={48} className="mx-auto mb-2 opacity-50" />
          <p className="text-sm">[Screenshot do Projeto]</p>
        </div>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {project.name}
        </h3>
        
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => {
            const Icon = getTechIcon(tech);
            return (
              <span
                key={index}
                className="flex items-center gap-1 bg-primary/10 text-primary text-xs px-2 py-1 rounded-full"
              >
                <Icon size={12} />
                {tech}
              </span>
            );
          })}
        </div>

        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onViewDetails(project)}
            className="flex-1"
          >
            <Eye size={14} className="mr-1" />
            Ver Detalhes
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            asChild
          >
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1"
            >
              <Github size={14} />
            </a>
          </Button>

          {project.liveLink && (
            <Button
              variant="outline"
              size="sm"
              asChild
            >
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                <ExternalLink size={14} />
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-card border border-border rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">{project.name}</h2>
            <Button variant="ghost" size="sm" onClick={onClose}>
              ✕
            </Button>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Screenshots</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="h-48 bg-muted rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground">[Screenshot 1]</span>
              </div>
              <div className="h-48 bg-muted rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground">[Screenshot 2]</span>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Descrição do Projeto</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {project.detailedDescription}
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Tecnologias Utilizadas</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Minha Participação</h3>
            <p className="text-muted-foreground leading-relaxed">
              {project.participation}
            </p>
          </div>

          <div className="flex gap-4">
            <Button asChild>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github size={16} />
                Ver Código
              </a>
            </Button>
            
            {project.liveLink && (
              <Button variant="outline" asChild>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink size={16} />
                  Ver Projeto
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      name: "[Nome do Projeto 1]",
      description: "[Descrição breve do projeto - máximo 2-3 linhas explicando o que o projeto faz e qual problema resolve.]",
      detailedDescription: "[Descrição detalhada do projeto - Explique em detalhes o objetivo do projeto, como foi desenvolvido, quais desafios foram enfrentados e quais soluções foram implementadas. Mencione a arquitetura utilizada e as principais funcionalidades.]",
      technologies: ["Java", "Spring Boot", "Oracle SQL", "REST API"],
      githubLink: "[Link para o repositório no GitHub]",
      liveLink: "[Link para o projeto em funcionamento (opcional)]",
      participation: "[Descrição da sua participação no projeto - Detalhe quais partes você desenvolveu, quais tecnologias utilizou especificamente, qual foi seu papel na equipe (se foi em equipe) e quais foram suas principais contribuições.]"
    },
    {
      name: "[Nome do Projeto 2]",
      description: "[Descrição breve do segundo projeto - Explique brevemente o que este projeto faz e sua importância.]",
      detailedDescription: "[Descrição detalhada do segundo projeto - Forneça detalhes sobre este projeto, incluindo objetivos, metodologia de desenvolvimento e resultados alcançados.]",
      technologies: ["JavaScript", "Node.js", "MySQL", "Express"],
      githubLink: "[Link para o repositório no GitHub]",
      liveLink: null,
      participation: "[Descrição da sua participação neste projeto - Explique seu envolvimento e contribuições específicas.]"
    },
    {
      name: "[Nome do Projeto 3]",
      description: "[Descrição breve do terceiro projeto - Uma breve explicação sobre este projeto.]",
      detailedDescription: "[Descrição detalhada do terceiro projeto - Detalhes completos sobre desenvolvimento e implementação.]",
      technologies: ["Java", "Oracle SQL", "Maven"],
      githubLink: "[Link para o repositório no GitHub]",
      liveLink: "[Link para o projeto em funcionamento (opcional)]",
      participation: "[Descrição da sua participação neste projeto - Suas contribuições e responsabilidades.]"
    }
  ];

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Portfólio de Projetos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conheça os projetos que desenvolvi durante minha formação acadêmica e experiência profissional.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                onViewDetails={handleViewDetails}
              />
            ))}

            <div className="bg-muted/50 border-2 border-dashed border-border rounded-lg p-8 flex flex-col items-center justify-center text-center min-h-[300px]">
              <Code size={48} className="text-muted-foreground mb-4 opacity-50" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Adicionar Projeto
              </h3>
              <p className="text-muted-foreground text-sm">
                Substitua este card pelos seus projetos reais
              </p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              Interessado em ver mais do meu trabalho?
            </p>
            <Button asChild size="lg">
              <a
                href="https://github.com/Parmaxxx?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github size={20} />
                Ver todos os projetos no GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default ProjectsSection;
