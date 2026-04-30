import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function Skills() {
  const skillCategories = [
    {
      name: 'Frontend',
      skills: ['React.js', 'Next.js', 'JavaScript', 'TypeScript'],
    },
    {
      name: 'Backend',
      skills: ['Node.js', 'Express.js'],
    },
    {
      name: 'Databases',
      skills: ['PostgreSQL', 'MongoDB'],
    },
    {
      name: 'DevOps & Tools',
      skills: ['AWS', 'Docker', 'Nginx', 'GitHub', 'Vim'],
    },
    {
      name: 'Languages',
      skills: ['C/C++'],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 border-t border-border">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Skills</h2>
          <p className="text-muted-foreground">Technologies and tools I work with</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.name} className="p-6 border border-border hover:border-muted-foreground/50 transition-colors duration-200">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
