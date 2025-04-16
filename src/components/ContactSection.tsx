
import React from "react";
import { Phone, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const ContactSection: React.FC = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
      variant: "default",
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get in Touch With Us
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Have questions or ready to start exchanging? Contact our team for quick assistance and support.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-exchange-purple/10 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-exchange-purple" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Phone</h3>
                  <a href="tel:07089680703" className="text-gray-600 hover:text-exchange-purple">
                    07089680703
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-exchange-purple/10 p-3 rounded-full mr-4">
                  <Instagram className="h-6 w-6 text-exchange-purple" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Instagram</h3>
                  <a 
                    href="https://www.instagram.com/Mubaranky411"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-exchange-purple"
                  >
                    @Mubaranky411
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-exchange-purple/10 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-exchange-purple" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <a 
                    href="mailto:Mubaranky411@gmail.com"
                    className="text-gray-600 hover:text-exchange-purple"
                  >
                    Mubaranky411@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold mb-4">Operating Hours</h3>
              <p className="text-gray-600 mb-2">
                Our exchange services are available:
              </p>
              <p className="font-medium">24/7 Support Available</p>
              <p className="text-gray-600 mt-4">
                We aim to respond to all inquiries within 30 minutes during business hours.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-gray-100">
            <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="What is this regarding?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Enter your message here"
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-exchange-purple hover:bg-exchange-purple-dark">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
