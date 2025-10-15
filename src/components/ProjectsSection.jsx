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
          {project.mainScreenshot ? (
              <img
                  src={project.mainScreenshot}
                  alt={`Screenshot do projeto ${project.name}`}
                  className="w-full h-full object-cover"
              />
          ) : (
              <div className="text-muted-foreground text-center">
                <Code size={48} className="mx-auto mb-2 opacity-50" />
                <p className="text-sm">[Screenshot do Projeto]</p>
              </div>
          )}
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
            {project.allScreenshots && project.allScreenshots.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Screenshots</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.allScreenshots.map((screenshot, index) => (
                        <div key={index} className="h-48 bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                          <img
                              src={screenshot.src}
                              alt={screenshot.alt || `Screenshot ${index + 1} do projeto ${project.name}`}
                              className="w-full h-full object-cover"
                          />
                        </div>
                    ))}
                  </div>
                </div>
            )}
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
      name: "Curriculo Fácil",
      description: "Site responsivo que oferece informações sobre empregabilidade, dicas para entrevistas e uma lista de cursos gratuitos em diversas linguagens de programação, ajudando o usuário a se preparar melhor para o mercado de trabalho.",
      detailedDescription: "Este é um site moderno e totalmente responsivo criado para impulsionar a empregabilidade de profissionais e estudantes da área de tecnologia.\n" +
          "A plataforma reúne informações atualizadas sobre o mercado de trabalho, dicas práticas de comportamento e postura em entrevistas, além de uma curadoria de cursos gratuitos em diversas linguagens de programação.\n" +
          "Com um design intuitivo e acessível, o site tem como objetivo facilitar o acesso ao conhecimento e ajudar o usuário a desenvolver habilidades técnicas e interpessoais, tornando-o mais preparado para conquistar novas oportunidades profissionais.",
      technologies: ["HTML", "CSS", "Javascript"],
      githubLink: "https://github.com/Parmaxxx/Curriculo-Facil/tree/main/Curriculo%20Facil/public_html",
      liveLink: "https://curriculo-facil-three.vercel.app/index.html",
      participation: "Contribuí para o desenvolvimento de diversas páginas do site e atuei na implementação da responsividade, garantindo uma melhor experiência em diferentes dispositivos. Além disso, colaborei com a equipe no desenvolvimento da ferramenta de criação de currículos, auxiliando na definição de funcionalidades e na integração das interfaces.",
      mainScreenshot: "/Portifolio/assets/projects/curriculo1.png",
      allScreenshots: [
        { src: "/src/assets/projects/curriculo2.png", alt: "Screenshot do Curriculo Fácil - Página 1"},
        { src: "/src/assets/projects/curriculo3.png", alt: "Screenshot do Curriculo Fácil - Página 2"},
      ]
    },
    {
      name: "Ateliê do Chocolate",
      description: "Site criado para uma produtora de doces, permitindo que clientes peçam orçamentos online e que a proprietária controle todos os pedidos e demandas de forma prática.",
      detailedDescription: "Site desenvolvido para divulgação e gerenciamento de pedidos de uma produtora de doces para festas. A plataforma permite que os clientes solicitem orçamentos de forma prática e rápida, enquanto a proprietária pode acompanhar todos os pedidos e demandas em um painel organizado. Com foco na usabilidade e experiência do usuário, o site ajuda a agilizar processos, aumentar as vendas e fortalecer a presença online do negócio.",
      technologies: ["JavaScript", "React"],
      githubLink: "https://github.com/Parmaxxx/Projeto_Interdisciplinar_II_FATEC",
      liveLink: "https://sistema-atelie-do-chocolate.vercel.app/",
      participation: "Atuei como desenvolvedor full stack, com foco no backend das páginas, colaborando junto à equipe no desenvolvimento das funcionalidades. Além disso, contribui como desenvolvedor front-end em algumas páginas, garantindo integração, usabilidade e responsividade da plataforma.",
      mainScreenshot: "/src/assets/projects/atelie1.png",
      allScreenshots: [
        { src: "/src/assets/projects/atelie2.png"},
        { src: "/src/assets/projects/atelie3.png"}
      ]
    },
    {
      name: "Adriana Oliveira Fotos",
      description: "O Micro-SaaS Adriana Oliveira Fotografias automatiza tarefas diárias de fotógrafos profissionais, facilitando agendamentos, gestão de clientes e organização do portfólio, para que possam se concentrar em seu trabalho artístico.",
      detailedDescription: "O Micro-SaaS Adriana Oliveira Fotografias é uma plataforma completa e inovadora, desenvolvida para atender às necessidades de fotógrafos profissionais. O sistema automatiza tarefas do dia a dia, como organização de portfólio, gerenciamento de clientes e controle de agendamentos, permitindo que os fotógrafos focem em seu trabalho artístico enquanto a plataforma cuida das operações administrativas. A solução combina eficiência, praticidade e tecnologia, tornando a rotina profissional mais organizada e produtiva.",
      technologies: ["Python", "MongoDB", "React"],
      githubLink: "https://github.com/Equipe-BooleanTech/Adriana_Oliveira_Fotos_II",
      liveLink: null,
      participation: "Atuei como desenvolvedor backend, responsável por implementar toda a lógica por trás das funcionalidades, garantindo o correto funcionamento, desempenho e integração do sistema.",
      mainScreenshot: "/src/assets/projects/adriana1.png",
      allScreenshots: [
        { src: "/src/assets/projects/adriana2.png"},
        { src: "/src/assets/projects/adriana3.png"},
        { src: "/src/assets/projects/adriana4.png"},
      ]
    },
    {
      name: "Restaurantto",
      description: "Sistema de gerenciamento de restaurantes com controle de fichas técnicas, fornecedores, ingredientes e finanças, centralizando informações para otimizar a operação e os custos.",
      detailedDescription: "Sistema desenvolvido para o gerenciamento completo de restaurantes, oferecendo funcionalidades para controle de fichas técnicas, fornecedores, ingredientes e finanças. A plataforma permite que os gestores acompanhem o estoque, planejem compras, monitorem custos e organizem informações financeiras de forma centralizada, facilitando a tomada de decisões estratégicas e otimizando a operação do negócio.",
      technologies: ["Java", "PostGreSQL", "Spring", "React"],
      githubLink: "https://github.com/Equipe-BooleanTech/restaurantto_client",
      liveLink: null,
      participation: "Atuei como desenvolvedor backend, responsável por implementar toda a lógica por trás das funcionalidades, garantindo o correto funcionamento, desempenho e integração do sistema.",
      mainScreenshot: "/src/assets/projects/restauranto1.jpg",
      allScreenshots: [
        { src: "/src/assets/projects/restauranto2.jpg"},
        { src: "/src/assets/projects/restauranto3.jpg"},
        { src: "/src/assets/projects/restauranto4.jpg"},
      ]
    },
    {
      name: "Lembrai",
      description: "Sistema de gerenciamento de finanças, gastos e manutenção de veículos, ajudando o usuário a organizar despesas e acompanhar datas importantes.",
      detailedDescription: "Sistema desenvolvido para gerenciar as finanças e a manutenção de veículos, permitindo que os usuários acompanhem gastos, controlem despesas e registrem datas de manutenção de seus carros. A plataforma centraliza informações importantes, facilitando o planejamento financeiro e garantindo que o veículo seja mantido em boas condições, evitando esquecimentos e imprevistos",
      technologies: ["Java", "PostGreSQL", "Spring", "ReactNative"],
      githubLink: "https://github.com/Equipe-BooleanTech/lembrai_client",
      liveLink: null,
      participation: "Atuei como desenvolvedor backend, responsável por implementar toda a lógica por trás das funcionalidades, garantindo o correto funcionamento, desempenho e integração do sistema.",
      mainScreenshot: "/src/assets/projects/lembrai1.jpg",
      allScreenshots: [
        { src: "/src/assets/projects/lembrai2.jpg"},
        { src: "/src/assets/projects/lembrai3.jpg"},
        { src: "/src/assets/projects/lembrai4.jpg"}
      ]
    },
    {
      name: "Petwise",
      description: "Aplicação para gerenciamento de animais, permitindo o controle de saúde, vacinas e agendamentos de forma prática e organizada.",
      detailedDescription: "Aplicação desenvolvida para gerenciar informações de animais, com foco em facilitar o controle de saúde, vacinas e agendamentos. A plataforma permite que os usuários acompanhem o histórico médico dos animais, registrem vacinas e programem compromissos de forma organizada, garantindo uma gestão mais eficiente e segura do cuidado animal.",
      technologies: ["Kotlin", "PostGreSQL", "Spring"],
      githubLink: "https://github.com/Equipe-BooleanTech/PI_VI",
      liveLink: null,
      participation: "Atuo como desenvolvedor backend, responsável por implementar toda a lógica por trás das funcionalidades, garantindo o correto funcionamento, desempenho e integração do sistema.",
      mainScreenshot: "",
      allScreenshots: []
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
