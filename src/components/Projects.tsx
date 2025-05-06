
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: "Learning Management System (LMS) Application",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "AWS (S3, RDS, EC2, CloudFront)"],
      description: [
        "Developed a full-fledged LMS with user roles, course management, and payments.",
        "Designed a scalable and responsive UI using Next.js.",
        "Implemented backend APIs in Node.js with PostgreSQL, AWS - Amazon RDS, S3 and CloudFront."
      ],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600"
    },
    {
      title: "Cargo Revenue Optimization (Air Cargo)",
      technologies: ["React.js", "Ext JS", "Java", "Spring Boot", "Oracle SQL"],
      description: [
        "Developed web applications for air cargo revenue and capacity management.",
        "Built React.js and Ext JS UIs, enhancing booking and optimization workflows.",
        "Developed backend services with Spring Boot and Oracle SQL for dynamic pricing and demand forecasting."
      ],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600"
    },
    {
      title: "Rail Revenue Optimizer (Passenger Rails)",
      technologies: ["React.js", "Ext JS", "Java", "Spring Boot", "Oracle SQL"],
      description: [
        "Designed and implemented pricing and demand management UIs for passenger rail systems.",
        "Developed backend logic in Spring Boot for real-time demand tracking and ticket revenue optimization."
      ],
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600"
    },
    {
      title: "Education Search Mobile App",
      technologies: ["React Native", "Android Studio", "Node.js", "Auth0", "PostgreSQL"],
      description: [
        "Developed a mobile app for searching schools and colleges based on various filters.",
        "Implemented secure authentication using Auth0.",
        "Built backend APIs with Node.js and PostgreSQL for real-time search and user profile management."
      ],
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=600"
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="text-center text-gray-600 mb-12">Key projects I've worked on throughout my career</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden card-hover animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="bg-theme-purple/10">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <ul className="list-disc pl-4 space-y-2">
                  {project.description.map((point, pointIndex) => (
                    <li key={pointIndex} className="text-gray-700">{point}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
