import { Code, Database, Server, Zap, BookOpen } from 'lucide-react';

const SkillBadge = ({ name, level, icon: Icon, isLearning = false }) => {
  const getLevelColor = (level) => {
    switch (level) {
      case 'Avançado':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Intermediário':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Básico':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Aprendendo':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 bg-primary/10 rounded-lg">
          <Icon className="text-primary" size={20} />
        </div>
        <h3 className="font-semibold text-foreground">{name}</h3>
      </div>
      
      <div className="flex items-center justify-between">
        <span className={`text-xs px-2 py-1 rounded-full border ${getLevelColor(level)}`}>
          {level}
        </span>
        {isLearning && (
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            <BookOpen size={12} />
            Em estudo
          </span>
        )}
      </div>
    </div>
  );
};

const SkillCategory = ({ title, icon: Icon, skills, description }) => {
  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-primary/10 rounded-lg">
          <Icon className="text-primary" size={24} />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <SkillBadge
            key={index}
            name={skill.name}
            level={skill.level}
            icon={skill.icon}
            isLearning={skill.isLearning}
          />
        ))}
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Linguagens de Programação",
      icon: Code,
      description: "Linguagens que domino e utilizo no desenvolvimento",
      skills: [
        { name: "Java", level: "Avançado", icon: Code },
        { name: "JavaScript", level: "Intermediário", icon: Code },
        { name: "Go", level: "Aprendendo", icon: Code, isLearning: true }
      ]
    },
    {
      title: "Banco de Dados",
      icon: Database,
      description: "Sistemas de gerenciamento de banco de dados",
      skills: [
        { name: "Oracle SQL", level: "Avançado", icon: Database },
        { name: "MySQL", level: "Intermediário", icon: Database },
        { name: "PostgreSQL", level: "Básico", icon: Database }
      ]
    },
    {
      title: "Backend & APIs",
      icon: Server,
      description: "Tecnologias para desenvolvimento server-side",
      skills: [
        { name: "Spring Boot", level: "Avançado", icon: Server },
        { name: "REST APIs", level: "Avançado", icon: Server },
        { name: "Node.js", level: "Intermediário", icon: Server },
        { name: "Microservices", level: "Intermediário", icon: Server }
      ]
    },
    {
      title: "Ferramentas & DevOps",
      icon: Zap,
      description: "Ferramentas de desenvolvimento e deploy",
      skills: [
        { name: "Git", level: "Avançado", icon: Zap },
        { name: "Docker", level: "Intermediário", icon: Zap },
        { name: "Maven", level: "Intermediário", icon: Zap },
        { name: "Jenkins", level: "Básico", icon: Zap }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Título da seção */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Habilidades Técnicas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tecnologias e ferramentas que utilizo para criar soluções robustas e escaláveis.
            </p>
          </div>

          {/* Foco em Backend */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Server className="text-primary" size={32} />
              <h3 className="text-2xl font-bold text-foreground">Especialista em Backend</h3>
            </div>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Meu foco principal está no desenvolvimento backend, criando APIs robustas, 
              otimizando performance de banco de dados e implementando arquiteturas escaláveis 
              que suportam aplicações de alta demanda.
            </p>
          </div>

          {/* Grid de categorias de habilidades */}
          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <SkillCategory
                key={index}
                title={category.title}
                icon={category.icon}
                skills={category.skills}
                description={category.description}
              />
            ))}
          </div>

          {/* Seção de aprendizado contínuo */}
          <div className="mt-12 bg-card border border-border rounded-lg p-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <BookOpen className="text-primary" size={28} />
              <h3 className="text-xl font-semibold text-foreground">Aprendizado Contínuo</h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Sempre em busca de novas tecnologias e melhores práticas. Atualmente estudando Go 
              para expandir meu conhecimento em linguagens de alta performance.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="bg-purple-100 text-purple-800 border border-purple-200 text-sm px-3 py-1 rounded-full">
                Go (Golang)
              </span>
              <span className="bg-blue-100 text-blue-800 border border-blue-200 text-sm px-3 py-1 rounded-full">
                Kubernetes
              </span>
              <span className="bg-green-100 text-green-800 border border-green-200 text-sm px-3 py-1 rounded-full">
                Cloud Computing
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
