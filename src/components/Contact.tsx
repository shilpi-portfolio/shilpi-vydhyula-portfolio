
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <p className="text-center text-gray-600 mb-12">Get in touch for opportunities or collaborations</p>
        
        <div className="max-w-3xl mx-auto">
          <Card className="animate-fade-in">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-6">
                    <a href="mailto:shilpivydhyula3116@gmail.com" className="flex items-center gap-3 text-gray-700 hover:text-theme-purple transition-colors">
                      <div className="p-3 rounded-full bg-theme-purple/10 text-theme-purple">
                        <Mail size={20} />
                      </div>
                      <span>shilpivydhyula3116@gmail.com</span>
                    </a>
                    
                    <a href="tel:+917799640002" className="flex items-center gap-3 text-gray-700 hover:text-theme-purple transition-colors">
                      <div className="p-3 rounded-full bg-theme-purple/10 text-theme-purple">
                        <Phone size={20} />
                      </div>
                      <span>+91-7799640002</span>
                    </a>
                    
                    <a href="https://in.linkedin.com/in/shilpi-vydhyula" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gray-700 hover:text-theme-purple transition-colors">
                      <div className="p-3 rounded-full bg-theme-purple/10 text-theme-purple">
                        <Linkedin size={20} />
                      </div>
                      <span>linkedin.com/in/shilpi-vydhyula</span>
                    </a>
                    <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="dark" data-type="VERTICAL" data-vanity="shilpi-vydhyula" data-version="v1"><a className="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/shilpi-vydhyula?trk=profile-badge"></a></div>

                  </div>
              
                  <div className="mt-8">
                    <Button asChild className="w-full">
                      <a href="mailto:shilpivydhyula3116@gmail.com">
                        Send Email
                      </a>
                    </Button>
                  </div>
                </div>
                
                <div className="md:w-1/2">
                  <h3 className="text-xl font-semibold mb-4">Let's Connect</h3>
                  <p className="text-gray-600 mb-4">
                    I'm always open to discussing new projects, opportunities, or collaborations. Feel free to reach out to me through any of the channels provided.
                  </p>
                  <p className="text-gray-600">
                    Based in India, I'm available for both remote and on-site opportunities worldwide.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
