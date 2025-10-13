import { User, GraduationCap, Globe } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Sobre Mim
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conheça mais sobre minha trajetória, formação e objetivos profissionais.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <User className="text-primary" size={24} />
                <h3 className="text-xl font-semibold text-foreground">Perfil Profissional</h3>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                Sou desenvolvedor backend com experiência em Java, SQL e NoSQL (MongoDB), além de conhecimentos em JavaScript e em constante aprendizado de Go. Tenho grande interesse por lógica de programação e resolução de desafios, buscando sempre criar soluções eficientes e simples por meio do software. Meu foco é desenvolver sistemas robustos, escaláveis e que facilitem o dia a dia das pessoas e das empresas.
              </p>

              <div className="bg-card border border-border rounded-lg p-6">
                <h4 className="font-semibold text-foreground mb-4">Foco Tecnológico</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>Backend Development:</strong> Especialização em arquiteturas robustas</li>
                  <li>• <strong>Banco de Dados:</strong> Modelagem e otimização de consultas</li>
                  <li>• <strong>APIs:</strong> Desenvolvimento de serviços RESTful</li>
                  <li>• <strong>Performance:</strong> Otimização de aplicações server-side</li>
                </ul>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <GraduationCap className="text-primary" size={24} />
                  <h3 className="text-xl font-semibold text-foreground">Formação</h3>
                </div>
                
                <div className="bg-card border border-border rounded-lg p-6">
                  <h4 className="font-semibold text-foreground mb-2">Tecnólogo em Gastronomia</h4>
                  <p className="text-primary font-medium mb-2">HOTEC</p>
                  <p className="text-muted-foreground text-sm">
                    2019-1 - 2021-2
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Globe className="text-primary" size={24} />
                  <h3 className="text-xl font-semibold text-foreground">Idiomas</h3>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-card border border-border rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">Português</span>
                      <span className="text-primary text-sm font-medium">Nativo</span>
                    </div>
                  </div>
                  
                  <div className="bg-card border border-border rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">Inglês</span>
                      <span className="text-primary text-sm font-medium">Avançado</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
