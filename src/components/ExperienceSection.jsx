import { Briefcase, Calendar, MapPin } from 'lucide-react';

const ExperienceCard = ({ company, position, period, location, description, isActive = false }) => {
  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground mb-1">{position}</h3>
          <p className="text-primary font-medium mb-2">{company}</p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>{period}</span>
            </div>
            {location && (
              <div className="flex items-center gap-1">
                <MapPin size={14} />
                <span>{location}</span>
              </div>
            )}
          </div>
        </div>
        {isActive && (
          <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
            Atual
          </span>
        )}
      </div>
      
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};

const CourseCard = ({ name, institution, location, hours, period }) => {
  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-semibold text-foreground mb-2">{name}</h3>
      <p className="text-primary font-medium mb-2">{institution}</p>
      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
        {location && (
          <div className="flex items-center gap-1">
            <MapPin size={14} />
            <span>{location}</span>
          </div>
        )}
        <div className="flex items-center gap-1">
          <Calendar size={14} />
          <span>{period}</span>
        </div>
        {hours && (
          <span>{hours}h</span>
        )}
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Fasano",
      position: "Sous Chef",
      period: "2012 - Atual",
      location: "São Paulo, SP",
      description: "Como Sous Chef no prestigiado Grupo FASANO, sou responsável pela supervisão geral da cozinha e garantia da excelência gastronômica que caracteriza a marca. Lidero uma equipe de profissionais talentosos, coordenando as diversas praças da cozinha para assegurar a perfeita execução dos pratos e a manutenção dos elevados padrões de qualidade.\n" +
          "\n" +
          "Principais responsabilidades e realizações:\n" +
          "• Desenvolvimento e implementação de novos pratos para o cardápio, com foco em gastronomia italiana, massas artesanais exclusivas e fine dining\n" +
          "• Supervisão especializada da praça de massas, garantindo a excelência e autenticidade das preparações artesanais\n" +
          "• Gestão de equipe com mais de 10 profissionais, incluindo treinamento, avaliação de desempenho e desenvolvimento de talentos\n" +
          "• Controle rigoroso de custos, gestão de estoque e planejamento de compras, contribuindo para a otimização da rentabilidade\n" +
          "• Elaboração e atualização de fichas técnicas detalhadas, garantindo padronização e consistência na execução dos pratos\n" +
          "• Participação ativa em eventos especiais e jantares exclusivos, elevando a experiência gastronômica dos clientes\n" +
          "• Implementação de processos de controle de qualidade e segurança alimentar, assegurando conformidade com normas sanitárias",
      isActive: true
    },
  ];

  const courses = [];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Experiência & Formação
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Minha trajetória profissional e acadêmica, incluindo experiências de trabalho e cursos de extensão.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Briefcase className="text-primary" size={24} />
                <h3 className="text-2xl font-semibold text-foreground">Experiência Profissional</h3>
              </div>
              
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <ExperienceCard
                    key={index}
                    company={exp.company}
                    position={exp.position}
                    period={exp.period}
                    location={exp.location}
                    description={exp.description}
                    isActive={exp.isActive}
                  />
                ))}
                

              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-8">
                <Calendar className="text-primary" size={24} />
                <h3 className="text-2xl font-semibold text-foreground">Cursos de Extensão</h3>
              </div>
              
              <div className="space-y-6">
                {courses.map((course, index) => (
                  <CourseCard
                    key={index}
                    name={course.name}
                    institution={course.institution}
                    location={course.location}
                    hours={course.hours}
                    period={course.period}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
