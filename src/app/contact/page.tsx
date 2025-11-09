'use client';

import * as React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Mail, Phone, MapPin, Clock, Users, Award, Globe, ArrowRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';

export default function ContactPage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');
  const [isEnquiryOpen, setIsEnquiryOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    comment: '',
  });

  const companies = [
    {
      name: 'Real Estate',
    },
    {
      name: 'Home Kerala',
    },
    {
      name: 'IT Solution',
    },
    {
      name: 'Property Management',
    },
    {
      name: 'Talent Connect',
    },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your enquiry! We will get back to you soon.');
    setIsEnquiryOpen(false);
    setFormData({ name: '', email: '', phone: '', company: '', comment: '' });
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {heroImage && (
        <div className="fixed inset-0 z-0">
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/60 to-blue-700/40" />
        </div>
      )}
      <div className="relative z-10 min-h-screen bg-gradient-to-b from-white/95 via-white/90 to-white backdrop-blur-sm">
        {/* Header */}
        <header className="py-6 px-8 md:px-16 lg:px-24 flex justify-between items-center border-b border-white/20 bg-white/50 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm" className="text-gray-700 hover:text-primary">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            </Link>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              People Soft
            </h1>
          </div>
        </header>

        <main className="px-8 md:px-16 lg:px-24 py-20">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              GET IN TOUCH WITH EXPERTS
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Let's Discuss Your
              <span className="block bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                Business Goals
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Connect with our consulting experts to explore how we can transform your business operations and drive sustainable growth across all verticals.
            </p>
          </div>

          {/* Contact Methods */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Multiple Ways to Connect</h3>
              <p className="text-lg text-gray-600">Choose the communication method that works best for you</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Email Card */}
              <Card className="bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-r from-blue-600 to-primary rounded-lg p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Email Us</h4>
                  <p className="text-gray-600 mb-4">Send us a detailed message about your requirements</p>
                  <a 
                    href="mailto:mail@peoplesoft-consult.com"
                    className="text-primary hover:text-blue-600 transition-colors duration-300 font-semibold"
                  >
                    mail@peoplesoft-consult.com
                  </a>
                </CardContent>
              </Card>

              {/* Phone Card */}
              <Card className="bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Call Us</h4>
                  <p className="text-gray-600 mb-4">Speak directly with our consulting experts</p>
                  <a 
                    href="tel:7902449454"
                    className="text-primary hover:text-blue-600 transition-colors duration-300 font-semibold"
                  >
                    +91 7902449454
                  </a>
                </CardContent>
              </Card>

              {/* Location Card */}
              <Card className="bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-r from-purple-600 to-violet-600 rounded-lg p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Visit Us</h4>
                  <p className="text-gray-600 mb-4">Schedule an in-person consultation</p>
                  <div className="text-gray-700 text-sm">
                    <p>Near KINFRA Film and Video Park,</p>
                    <p>Kazhakkoottam, Thiruvananthapuram, Kerala</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Business Hours & Response Time */}
          <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl mb-20">
            <div className="max-w-6xl mx-auto px-8">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">When We're Available</h3>
                <p className="text-lg text-gray-600">Our commitment to responsive communication</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
                    <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h4 className="font-bold text-gray-900 mb-2">Business Hours</h4>
                    <p className="text-sm text-gray-600">Mon - Sat: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
                    <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h4 className="font-bold text-gray-900 mb-2">Email Response</h4>
                    <p className="text-sm text-gray-600">Within 2-4 hours</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
                    <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h4 className="font-bold text-gray-900 mb-2">Phone Support</h4>
                    <p className="text-sm text-gray-600">Immediate response</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
                    <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h4 className="font-bold text-gray-900 mb-2">Consultation</h4>
                    <p className="text-sm text-gray-600">Same day scheduling</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Professional CTA Section */}
          <section className="py-20 bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 text-white relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-500/10"></div>
            <div className="relative max-w-6xl mx-auto px-8 text-center">
              <div className="inline-block bg-primary/20 text-primary-light px-4 py-2 rounded-full text-sm font-semibold mb-6">
                START YOUR TRANSFORMATION TODAY
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Ready to Accelerate Your
                <span className="block bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                  Business Growth?
                </span>
              </h3>
              <p className="text-xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
                Our consulting experts are standing by to discuss your unique challenges and develop customized solutions that drive measurable results. Let's start the conversation today.
              </p>
              
              <div className="flex justify-center">
                <Dialog open={isEnquiryOpen} onOpenChange={setIsEnquiryOpen}>
                  <DialogTrigger asChild>
                    <Button className="h-14 px-8 rounded-full font-bold text-base bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 group">
                      Submit Enquiry
                      <span className="bg-white text-primary rounded-full p-1.5 group-hover:translate-x-1 transition-transform duration-300">
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[500px] rounded-2xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-gray-900">Submit an Enquiry</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="font-semibold text-gray-700">Name</Label>
                        <Input
                          id="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="h-11"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="font-semibold text-gray-700">Email ID</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="h-11"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="font-semibold text-gray-700">Phone No.</Label>
                        <Input
                          id="phone"
                          placeholder="Your Phone Number"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="h-11"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company" className="font-semibold text-gray-700">Which company you are enquiring about</Label>
                        <Select value={formData.company} onValueChange={(value) => handleInputChange('company', value)}>
                          <SelectTrigger className="h-11">
                            <SelectValue placeholder="Select a company" />
                          </SelectTrigger>
                          <SelectContent>
                            {companies.map((company) => (
                              <SelectItem key={company.name} value={company.name}>
                                {company.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="comment" className="font-semibold text-gray-700">Comment</Label>
                        <Textarea
                          id="comment"
                          placeholder="Your comment or message"
                          value={formData.comment}
                          onChange={(e) => handleInputChange('comment', e.target.value)}
                          rows={4}
                          className="resize-none"
                        />
                      </div>
                      <Button type="submit" className="w-full h-12 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 font-bold text-base shadow-lg">
                        Submit
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
                  <Award className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-sm text-gray-300">Proven Excellence</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
                  <Globe className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-sm text-gray-300">Multi-Industry Expertise</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
                  <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-sm text-gray-300">Dedicated Support</div>
                </div>
              </div>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}
