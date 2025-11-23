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
      name: 'Kerala Homez',
      icon: <Building className="w-8 h-8 text-primary" />,
      image: '/images/khz.png',
      width: 110,
      height: 100,
      url: 'http://keralahomez.com/',
    },
    {
      name: 'Property Management',
      icon: <ClipboardCheck className="w-8 h-8 text-primary" />,
      image: '/images/pm3.jpeg',
      width: 120,
      height: 190,
    },
    {
      name: 'Home Kerala',
      image: '/images/hc.png',
      width: 120,
      height: 80,
      url: 'https://homecarekerala.com/',
    },
    {
      name: 'IT Solution',
      icon: <Laptop className="w-8 h-8 text-primary" />,
      image: '/images/itsolution.png',
      width: 140,
      height: 100,
    },
    {
      name: 'Talent Connect',
      icon: <ClipboardCheck className="w-8 h-8 text-primary" />,
      image: '/images/talent.png',
      width: 140,
      height: 100,
    },
    {
      name: 'CSR Fund',
      icon: <ClipboardCheck className="w-8 h-8 text-primary" />,
      image: '/images/csrf.jpeg',
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
    alert('Thank you for your enquiry! We will get back to you soon.');
    setIsEnquiryOpen(false);
    setFormData({ name: '', email: '', phone: '', company: '', comment: '' });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white/95 via-white/90 to-white">
      <div className="relative z-10 min-h-screen bg-transparent">
        <header className="py-6 px-8 md:px-16 lg:px-24 flex justify-between items-center border-b border-white/20 bg-white/50 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <Image
              src="/images/ps.png"
              alt="People Soft logo"
              width={56}
              height={56}
              className="rounded-md object-contain"
            />
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
          {/* Hero */}
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

          {/* Verticals + Enquiry */}
          <section className="bg-gradient-to-br from-[#f8fafc] via-[#f0f7f5] to-[#e8f5f0] rounded-3xl p-10 md:p-20 relative overflow-hidden shadow-2xl border border-gray-100">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-blue-500/5" />
              <div
                className="absolute inset-0 opacity-10"
                style={{ backgroundImage: `url("${basePath}/wavy-pattern.svg")` }}
              />
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
                  <DialogContent className="sm:max-w-[420px] w-[90vw] sm:w-full rounded-2xl p-6">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-gray-900">
                        Submit an Enquiry
                      </DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="font-semibold text-gray-700">
                          Name
                        </Label>
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
                        <Label htmlFor="email" className="font-semibold text-gray-700">
                          Email ID
                        </Label>
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
                        <Label htmlFor="phone" className="font-semibold text-gray-700">
                          Phone No.
                        </Label>
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
                        <Label htmlFor="company" className="font-semibold text-gray-700">
                          Which company you are enquiring about
                        </Label>
                        <Select
                          value={formData.company}
                          onValueChange={(value) => handleInputChange('company', value)}
                        >
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
                        <Label htmlFor="comment" className="font-semibold text-gray-700">
                          Comment
                        </Label>
                        <Textarea
                          id="comment"
                          placeholder="Your comment or message"
                          value={formData.comment}
                          onChange={(e) => handleInputChange('comment', e.target.value)}
                          rows={4}
                          className="resize-none"
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full h-12 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 font-bold text-base shadow-lg"
                      >
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
                    className={
                      company.image
                        ? 'relative overflow-hidden group h-40 cursor-pointer'
                        : 'bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer'
                    }
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

          {/* Company overview */}
          <section className="mt-24 max-w-7xl mx-auto">
            <div className="relative bg-white/95 backdrop-blur-sm border border-gray-100 rounded-3xl shadow-[0_18px_45px_rgba(15,23,42,0.06)] px-8 md:px-12 py-10 md:py-14 overflow-hidden">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-blue-500 to-sky-400" />
              <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1.1fr)] gap-10 md:gap-16 items-start relative z-10">
                <div className="pr-0 md:pr-6">
                  <p className="text-xs md:text-sm font-semibold tracking-[0.22em] text-primary uppercase mb-2 md:mb-3">
                    Company Overview
                  </p>
                  <h3 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4 md:mb-5">
                    About Peoplesoft Consultancy
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed md:leading-8 text-slate-600 max-w-xl">
                    Peoplesoft Consultancy is a holding company that offers specialized consulting services
                    across five verticals, addressing diverse industry needs. These verticals include real
                    estate, facility management, healthcare, IT solutions, and the HR sector, with a strong
                    focus on streamlining operations and driving business excellence.
                  </p>
                </div>
                <div className="space-y-4 md:space-y-5">
                  <div className="flex items-center justify-between gap-3">
                    <h4 className="text-xs md:text-sm font-semibold tracking-[0.20em] text-slate-500 uppercase">
                      Our Verticals
                    </h4>
                    <span className="hidden md:inline-flex h-px flex-1 bg-gradient-to-r from-slate-200 via-slate-100 to-transparent" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                    <div className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50/80 px-4 py-3.5 shadow-[0_10px_25px_rgba(15,23,42,0.03)]">
                      <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Home className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">Real Estate &amp; Property</p>
                        <p className="text-xs text-slate-600">
                          Advisory across residential, commercial and investment assets.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50/80 px-4 py-3.5 shadow-[0_10px_25px_rgba(15,23,42,0.03)]">
                      <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Building className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">Facility Management</p>
                        <p className="text-xs text-slate-600">
                          End-to-end management for efficient asset operations.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50/80 px-4 py-3.5 shadow-[0_10px_25px_rgba(15,23,42,0.03)]">
                      <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <ClipboardCheck className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">Healthcare &amp; CSR</p>
                        <p className="text-xs text-slate-600">
                          Support services around healthcare initiatives and CSR.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50/80 px-4 py-3.5 shadow-[0_10px_25px_rgba(15,23,42,0.03)]">
                      <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Laptop className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">IT &amp; HR Solutions</p>
                        <p className="text-xs text-slate-600">
                          Technology and talent solutions to enable business growth.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}