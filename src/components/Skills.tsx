
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      name: "Front-End Development",
      skills: [
        { name: "React Native", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "React.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "JavaScript (ES5, ES6)", level: 95 },
        { name: "Ext JS", level: 85 },
      ]
    },
    {
      name: "Back-End Development",
      skills: [
        { name: "Java", level: 90 },
        { name: "Spring Boot", level: 85 },
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 85 },
      ]
    },
    {
      name: "Database & Cloud",
      skills: [
        { name: "Oracle SQL", level: 80 },
        { name: "PostgreSQL", level: 85 },
        { name: "AWS", level: 80 },
      ]
    },
    {
      name: "Other Expertise",
      skills: [
        { name: "UI/UX Design", level: 85 },
        { name: "Agile & Scrum", level: 90 },
        { name: "Team Leadership", level: 95 },
        { name: "Product Management", level: 90 },
      ]
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="overflow-hidden animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="bg-theme-purple text-white p-4">
                <h3 className="text-xl font-semibold">{category.name}</h3>
              </div>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-gray-600">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12">
          <Card className="animate-fade-in">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Additional Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "API Development (REST, SOAP)",
                  "Authentication & Authorization (Auth0, Amazon Cognito)",
                  "Version Control & CI/CD",
                  "GitHub Actions",
                  "Jenkins",
                  "Docker",
                  "AI & Productivity Tools",
                  "Security & Code Quality",
                  "OWASP",
                  "Checkmarx",
                  "SonarQube",
                  "Figma",
                  "Adobe XD",
                  "JIRA",
                  "Product Ownership"
                ].map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 rounded-full text-sm bg-gray-100 border border-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
