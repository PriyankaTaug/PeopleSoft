'use client';

import * as React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
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
import {
  Building,
  Home,
  Laptop,
  ClipboardCheck,
  ArrowRight,
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Page() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
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
      icon: <Building className="w-8 h-8 text-primary" />,
      image: '/images/realestate.jpeg',
    },
    {
      name: 'Home Kerala',
      icon: <Home className="w-8 h-8 text-primary" />,
    },
    {
      name: 'IT Solution',
      icon: <Laptop className="w-8 h-8 text-primary" />,
    },
    {
      name: 'Property Management',
      icon: <ClipboardCheck className="w-8 h-8 text-primary" />,
    },
  ];

  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
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
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/60 to-blue-700/40" />
        </div>
      )}
      <div className="relative z-10 min-h-screen bg-gradient-to-b from-white/95 via-white/90 to-white backdrop-blur-sm">
        <header className="py-6 px-8 md:px-16 lg:px-24 flex justify-between items-center border-b border-white/20 bg-white/50 backdrop-blur-md">
          <div className="flex items-center">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              People Soft
            </h1>
          </div>
        </header>

        <main className="px-8 md:px-16 lg:px-24 py-20">
          <div className="text-center mb-12">
            <h2 className="text-6xl md:text-7xl font-serif text-gray-900 font-bold mb-4 leading-tight">
              Change the way
            </h2>
            <h2 className="text-6xl md:text-7xl font-serif mb-6 leading-tight">
              you use your{' '}
              <span className="bg-gradient-to-r from-primary via-blue-500 to-blue-600 bg-clip-text text-transparent">
                money
              </span>
            </h2>
            <p className="max-w-lg mx-auto text-lg text-gray-600 leading-relaxed">
              From your everyday spending, to planning for your future with
              savings and investments.
            </p>
          </div>

          <section className="bg-gradient-to-br from-[#f8fafc] via-[#f0f7f5] to-[#e8f5f0] rounded-3xl p-10 md:p-20 relative overflow-hidden shadow-2xl border border-gray-100">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-blue-500/5" />
              <div
                className="absolute inset-0 opacity-10"
                style={{ backgroundImage: `url("${basePath}/wavy-pattern.svg")` }}
              ></div>
            </div>
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <h3 className="text-5xl font-bold text-gray-900 leading-tight mb-4">
                    Browse our set of Companies and offerings
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    We offer a variety of tools and resources to help you manage
                    your finances more effectively.
                  </p>
                </div>
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {companies.map((company) => (
                  <Card
                    key={company.name}
                    className={`${
                      company.image 
                        ? 'relative overflow-hidden group h-48' 
                        : 'bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer'
                    }`}
                  >
                    {company.image ? (
                      <>
                        <Image
                          src={company.image}
                          alt={company.name}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <p className="font-bold text-2xl text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                            {company.name}
                          </p>
                        </div>
                      </>
                    ) : (
                      <CardContent className="flex flex-col items-start justify-center p-8 gap-5 h-48 group">
                        <div className="bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-2xl p-4 group-hover:scale-110 transition-transform duration-300">
                          {React.cloneElement(company.icon, {
                            className: 'w-8 h-8 text-primary',
                          })}
                        </div>
                        <p className="font-bold text-xl text-gray-900 group-hover:text-primary transition-colors duration-300">
                          {company.name}
                        </p>
                      </CardContent>
                    )}
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}