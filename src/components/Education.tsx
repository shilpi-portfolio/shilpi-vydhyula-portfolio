
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Education = () => {
  const educations = [
    {
      institution: "INDIAN INSTITUTE OF TECHNOLOGY (IIT), ROORKEE",
      period: "2012 - 2014",
      degree: "MASTER OF TECHNOLOGY (M. Tech)",
      field: "Advanced Chemical Analysis",
      grade: "CGPA 7.82"
    },
    {
      institution: "MOTILAL NEHRU NATIONAL INSTITUTE OF TECHNOLOGY (MNNIT), ALLAHABAD",
      period: "2007 - 2011",
      degree: "BACHELOR OF TECHNOLOGY (B. Tech)",
      field: "Chemical Engineering",
      grade: "CGPA 6.0"
    },
    {
      institution: "SR JUNIOR COLLEGE FOR BOYS, WARANGAL",
      period: "2004 - 2006",
      degree: "INTERMEDIATE",
      field: "Mathematics, Physics and Chemistry (MPC)",
      grade: "94.7%"
    },
    {
      institution: "TRINITY MODEL SECONDARY SCHOOL, PEDDAPALLI",
      period: "2004",
      degree: "SECONDARY SCHOOL CERTIFICATE (SSC)",
      field: "",
      grade: "91.8%"
    }
  ];

  const publications = [
    {
      title: "Density functional studies of fused dodecahedral and irregular dodecahedral water cages",
      authors: "V. Shilpi, Surinder Pal Kaur, C.N. Ramachandran",
      journal: "RSC Advances (2015), 5, 74270-74273"
    },
    {
      title: "Revisiting the structural pattern and the stability of (H2O)20 clusters using the dispersion corrected density functional method",
      authors: "V. Shilpi, Surinder Pal Kaur, C.N. Ramachandran",
      journal: "Chem. Phys. Lett. (2015), 626, 39-42"
    }
  ];

  const awards = [
    "Annual Performance Ratings (Last 5 Years): 2023-24: 5/5, 2022-23: 4/5, 2021-22: 4/5, 2020-21: 3/5, 2019-20: 5/5",
    "Above and Beyond Award",
    "HCL Champion Award",
    "HCL ERS Champion Award",
    "Multiple Spot Awards for excellence in product development, problem-solving, and client support"
  ];

  return (
    <section id="education" className="section bg-theme-soft-gray">
      <div className="container">
        <h2 className="section-title">Education & Achievements</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="section-subtitle mb-6">Education</h3>
            <div className="space-y-6">
              {educations.map((edu, index) => (
                <Card key={index} className="card-hover animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-1">{edu.institution}</h4>
                    <p className="text-theme-purple mb-1">{edu.degree}</p>
                    <p className="text-gray-600 mb-2">{edu.field}</p>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">{edu.period}</span>
                      <span className="font-medium">{edu.grade}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <div className="mb-10">
              <h3 className="section-subtitle mb-6">Research Publications</h3>
              <div className="space-y-6">
                {publications.map((pub, index) => (
                  <Card key={index} className="card-hover animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                    <CardContent className="p-6">
                      <h4 className="font-bold text-lg mb-2">{pub.title}</h4>
                      <p className="text-gray-700 mb-2">{pub.authors}</p>
                      <p className="text-sm text-theme-purple italic">{pub.journal}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="section-subtitle mb-6">Awards & Recognitions</h3>
              <Card className="animate-fade-in">
                <CardContent className="p-6">
                  <ul className="list-disc pl-4 space-y-3">
                    {awards.map((award, index) => (
                      <li key={index} className="text-gray-700">{award}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
