
import React from 'react';
import { Card } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "HCLSoftware",
      positions: [
        {
          title: "Senior Technical Specialist",
          period: "Oct 2024 – Present",
          duration: "5M"
        },
        {
          title: "Senior Technical Lead",
          period: "Jul 2022 – Sep 2024",
          duration: "2Y 3M"
        }
      ],
      totalDuration: "2Y 8M"
    },
    {
      company: "HCLTech",
      positions: [
        {
          title: "Technical Lead",
          period: "Oct 2020 – Jun 2022",
          duration: "1Y 9M"
        },
        {
          title: "Senior Software Engineer",
          period: "Jun 2018 – Oct 2020",
          duration: "2Y 4M"
        }
      ],
      totalDuration: "4Y 1M"
    },
    {
      company: "BLUE YONDER (formerly known as JDA software)",
      positions: [
        {
          title: "Software Engineer",
          period: "Aug 2014 – May 2018",
          duration: "3Y 11M"
        }
      ],
      totalDuration: "3Y 11M"
    }
  ];

  return (
    <section id="experience" className="section bg-theme-soft-gray">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <p className="text-center text-gray-600 mb-12">10+ Years of Professional Experience</p>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                <div className="md:w-1/4">
                  <div className="flex items-center gap-3 mb-2">
                    <Briefcase className="text-theme-purple" size={20} />
                    <h3 className="font-bold text-xl">{exp.company}</h3>
                  </div>
                  <p className="text-gray-500">Total: {exp.totalDuration}</p>
                </div>
                
                <div className="md:w-3/4">
                  <div className="space-y-6">
                    {exp.positions.map((position, posIndex) => (
                      <div key={posIndex} className="border-l-2 border-theme-purple pl-4">
                        <div className="mb-1">
                          <h4 className="font-semibold text-lg">{position.title}</h4>
                          <p className="text-gray-600 text-sm">{position.period} ({position.duration})</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
