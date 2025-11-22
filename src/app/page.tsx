'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
      name: 'Kerala Homz',
      icon: <Building className="w-8 h-8 text-primary" />,
      image: '/images/khm.jpeg',
      width: 110,
      height: 100,
      url:'http://keralahomez.com/'
    },
    {
      name: 'Property Management',
      icon: <ClipboardCheck className="w-8 h-8 text-primary" />,
      image:'/images/pm3.jpeg',
      width: 120,
      height: 190,
    },
    {
      name: 'Home Kerala',
      image:'/images/hm.jpeg',
      width: 120,
      height: 80,
      url: 'https://homecarekerala.com/',
    },
    {
      name: 'IT Solution',
      icon: <Laptop className="w-8 h-8 text-primary" />,
      image:'/images/itsolution.png',
      width: 140,
      height: 100,
    },
    {
      name: 'Talent Connect',
      icon: <ClipboardCheck className="w-8 h-8 text-primary" />,
      image:'/images/talent.png',
      width: 140,
      height: 100,
    },
    {
      name: 'CSR Fund',
      icon: <ClipboardCheck className="w-8 h-8 text-primary" />,
      image:'/images/people.png',
      width: 140,
      height: 100,
    },
  ];

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
    <div className="relative min-h-screen bg-gradient-to-b from-white/95 via-white/90 to-white">
      <div className="relative z-10 min-h-screen bg-transparent">
        <header className="py-6 px-8 md:px-16 lg:px-24 flex justify-between items-center border-b border-white/20 bg-white/50 backdrop-blur-md">
          <div className="flex items-center">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              People Soft
            </h1>
          </div>
          <nav className="flex gap-4">
            <Link href="/about">
              <Button 
                variant="ghost" 
                className="text-gray-700 hover:text-primary font-semibold"
              >
                About Us
              </Button>
            </Link>
            <Link href="/contact">
              <Button 
                variant="ghost" 
                className="text-gray-700 hover:text-primary font-semibold"
              >
                Contact Us
              </Button>
            </Link>
          </nav>
        </header>

        <main className="px-8 md:px-16 lg:px-24 py-20">
          <div className="text-center mb-12">
            <h2 className="text-6xl md:text-7xl font-serif text-gray-900 font-bold mb-4 leading-tight">
             Consulting Today. 
            </h2>
            <h2 className="text-6xl md:text-7xl font-serif mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary via-blue-500 to-blue-600 bg-clip-text text-transparent">
               Leading Tomorrow.
              </span>
            </h2>
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
                  Browse our set of verticals and offerings
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                  We offer a variety of tools and resources designed to help improve your business
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
                  <DialogContent className="sm:max-w-[420px] rounded-2xl">
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
                        ? 'relative overflow-hidden group h-40 cursor-pointer' 
                        : 'bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer'
                    }`}
                    onClick={() => {
                      if (company.url) {
                        window.open(company.url, '_blank');
                      }
                    }}
                  >
                    {company.image ? (
                      <>
                        <div className="absolute inset-0 flex items-center justify-center bg-white">
                          <Image
                            src={company.image}
                            alt={company.name}
                            width={company.width}
                            height={company.height}
                            className="object-contain transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <p className="font-bold text-2xl text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                            {company.name}
                          </p>
                        </div>
                      </>
                    ) : (
                      <CardContent className="flex flex-col items-start justify-center p-8 gap-5 h-40 group">
                        {company.icon && (
                          <div className="bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-2xl p-4 group-hover:scale-110 transition-transform duration-300">
                            {React.cloneElement(company.icon, {
                              className: 'w-8 h-8 text-primary',
                            })}
                          </div>
                        )}
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