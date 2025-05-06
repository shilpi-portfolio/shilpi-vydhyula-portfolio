
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, User, Code, FileText } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section bg-theme-soft-gray">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="animate-fade-in">
            <h3 className="section-subtitle mb-4">Professional Summary</h3>
            <p className="text-gray-700 mb-6">
              I'm a Senior Technical Specialist with over 10 years of experience in the tech industry, currently working at HCLSoftware. Throughout my career, I've led product teams and managed the full development lifecycle, from initial concepts to designing, developing, and deploying scalable applications.
            </p>
            <p className="text-gray-700 mb-6">
              My expertise spans across front-end and back-end development, with a strong focus on creating intuitive user experiences. I've worked with a variety of technologies including React Native, Next.js, React.js, TypeScript, JavaScript, Java, Spring Boot, and more.
            </p>
            <p className="text-gray-700">
              I'm also a published researcher, having co-authored two research papers in Chemical Physics Letters and Royal Society of Chemistry Advances during my time at IIT Roorkee.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="card-hover animate-fade-in">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-theme-purple/10 text-theme-purple">
                    <Briefcase size={24} />
                  </div>
                  <h4 className="font-semibold text-lg">Experience</h4>
                </div>
                <p className="text-gray-700">10+ years of experience in product development and team leadership</p>
              </CardContent>
            </Card>
            
            <Card className="card-hover animate-fade-in" style={{animationDelay: "0.1s"}}>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-theme-purple/10 text-theme-purple">
                    <User size={24} />
                  </div>
                  <h4 className="font-semibold text-lg">Leadership</h4>
                </div>
                <p className="text-gray-700">Proven track record in people management and delivery management</p>
              </CardContent>
            </Card>
            
            <Card className="card-hover animate-fade-in" style={{animationDelay: "0.2s"}}>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-theme-purple/10 text-theme-purple">
                    <Code size={24} />
                  </div>
                  <h4 className="font-semibold text-lg">Development</h4>
                </div>
                <p className="text-gray-700">Full-stack expertise with modern front-end and back-end technologies</p>
              </CardContent>
            </Card>
            
            <Card className="card-hover animate-fade-in" style={{animationDelay: "0.3s"}}>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-theme-purple/10 text-theme-purple">
                    <FileText size={24} />
                  </div>
                  <h4 className="font-semibold text-lg">Research</h4>
                </div>
                <p className="text-gray-700">Published researcher with papers in respected scientific journals</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
