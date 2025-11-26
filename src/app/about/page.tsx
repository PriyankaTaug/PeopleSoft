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
import { Users, Target, Award, Globe, Building, Home, Laptop, ClipboardCheck, Heart, ArrowRight, Menu, X } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';

export default function AboutPage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');
  const [isEnquiryOpen, setIsEnquiryOpen] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
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
        {/* Header / Menubar */}
        <header className="relative py-4 px-4 md:py-6 md:px-16 lg:px-24 border-b border-white/20 bg-white/50 backdrop-blur-md">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/ps.png"
                alt="People Soft logo"
                width={48}
                height={48}
                className="rounded-md object-contain"
              />
              <h1 className="cursor-pointer text-2xl md:text-3xl font-bold leading-tight whitespace-nowrap bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                PeopleSoft
              </h1>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden sm:flex items-center gap-4 font-semibold text-gray-700">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
              <Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link>
            </nav>

            {/* Mobile hamburger toggle */}
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/40 sm:hidden"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile dropdown menu under header */}
          {isMenuOpen && (
            <div className="absolute left-0 right-0 top-full z-40 bg-white border-t border-gray-200 shadow-md sm:hidden">
              <nav className="flex flex-col gap-3 px-6 py-4 text-base font-semibold text-gray-800">
                <Link href="/" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors">Home</Link>
                <Link href="/about" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors">About Us</Link>
                <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors">Contact Us</Link>
              </nav>
            </div>
          )}
        </header>

        <main className="px-0">
          {/* Executive Summary Section */}
          <section className="bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 text-white py-24">
            <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                    ESTABLISHED CONSULTING EXCELLENCE
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    Driving Business
                    <span className="block bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                      Transformation
                    </span>
                  </h1>
                  <p className="text-xl text-gray-300 leading-relaxed mb-8 text-justify hyphens-auto" lang="en">
                    PeopleSoft Consultancy is a premier holding company delivering transformational consulting solutions across six strategic verticals. We empower organizations to achieve operational excellence, accelerate growth, and maintain competitive leadership in rapidly evolving markets.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 h-full">
                      <div className="text-2xl font-bold text-primary">200+</div>
                      <div className="text-sm text-gray-300">Projects Delivered</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 h-full">
                      <div className="text-2xl font-bold text-primary">6</div>
                      <div className="text-sm text-gray-300">Industry Verticals</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 h-full">
                      <div className="text-2xl font-bold text-primary">100%</div>
                      <div className="text-sm text-gray-300">Client Satisfaction</div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-2xl transform rotate-3"></div>
                  <div className="relative bg-white rounded-2xl p-8 shadow-2xl">
                    <div className="text-center">
                      <div className="bg-gradient-to-r from-primary to-blue-600 rounded-full p-6 mx-auto mb-6 w-20 h-20 flex items-center justify-center">
                        <span className="text-white font-bold text-3xl">PS</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">PeopleSoft Consultancy</h3>
                      <p className="text-gray-600 mb-4">Strategic Business Solutions</p>
                      <div className="border-t pt-4">
                        <p className="text-sm text-gray-500 italic">"Consulting Today. Leading Tomorrow"</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Strategic Focus Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Strategic Focus Areas</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Our integrated approach combines deep industry expertise with innovative solutions to deliver measurable business outcomes.
                </p>
              </div>

              {/* Mission & Vision Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Mission Card */}

                <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-lg p-3 mr-4">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    To be the global benchmark in consulting excellence, driving innovation and empowering organizations to achieve sustainable growth while maintaining the highest standards of performance and integrity.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-blue-600 to-primary rounded-lg p-3 mr-4">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Delivering comprehensive, multi-sector solutions that drive operational excellence and sustainable growth across real estate, facility management, healthcare, IT solutions, and HR operations.
                  </p>
                </div>

                {/* Vision Card */}
               
              </div>
            </div>
          </section>

          {/* Business Portfolio Section */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
              <div className="text-center mb-16">
                <div className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  BUSINESS PORTFOLIO
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Industry-Leading Solutions</h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                  Our diversified portfolio spans six strategic verticals, each delivering specialized expertise and innovative solutions tailored to meet the evolving demands of modern enterprises.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                {/* Real Estate Business - KeralaHomz */}
                <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300 h-full flex flex-col justify-between">
                  <div className="flex items-center mb-4">
                    <div className="bg-gray-50 p-2 rounded-lg mr-3">
                      <Image
                        src="/images/kh.png"
                        alt="KeralaHomez"
                        width={60}
                        height={60}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">KeralaHomez</h3>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3 text-justify hyphens-auto" lang="en">
                    A complete real estate platform that facilitates buying, selling, renting, and building of
                    residential and commercial properties across Kerala for homeowners, investors, developers, and
                    tenants.
                  </p>
                  <p className="text-xs font-semibold text-primary mb-1">Tagline: Easy Moves, Happy Homes</p>
                  <p className="text-xs text-gray-600 mb-2 text-justify">USP: To accelerate sales and revenue in a short span.</p>
                  <div className="text-xs text-gray-500">www.keralahomez.com</div>
                </div>

                {/* Property Management & Maintenance - Kerala Service Hub */}
                <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300 h-full flex flex-col justify-between">
                  <div className="flex items-center mb-4">
                    <div className="bg-gray-50 p-2 rounded-lg mr-3">
                      <Image
                        src="/images/pmt.png"
                        alt="Kerala Service Hub"
                        width={60}
                        height={60}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Property Management</h3>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3 text-justify hyphens-auto" lang="en">
                    Offers comprehensive property management covering maintenance contracts, cleaning, repairs,
                    preventive maintenance scheduling, emergency repairs, and full facility handling for hassle-free
                    property ownership.
                  </p>
                  <p className="text-xs font-semibold text-primary mb-1">Tagline: Building Value, Delivering Care</p>
                  <p className="text-xs text-gray-600 mb-2 text-justify">USP: Care your property without hassle.</p>
                  <div className="text-xs text-gray-500">www.keralaservicehub.com</div>
                </div>

                {/* Homecare & Personal Support Services - HomeCare Kerala */}
                <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300 h-full flex flex-col justify-between">
                  <div className="flex items-center mb-4">
                    <div className="bg-gray-50 p-2 rounded-lg mr-3">
                      <Image
                        src="/images/hk.png"
                        alt="HomeCare Kerala"
                        width={60}
                        height={60}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">HomeCare Kerala</h3>                    </div>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3 text-justify hyphens-auto" lang="en">
                    Delivers professional homecare services including baby care, elder care, patient and nursing
                    care, bystander assistance, maid and housekeeping services with trained, background-checked
                    caregivers for families, hospitals, and individuals.
                  </p>
                  <p className="text-xs font-semibold text-primary mb-1">Tagline: Care redefined</p>
                  <p className="text-xs text-gray-600 mb-2 text-justify">
                    USP: Professional values at the heart of our care services.
                  </p>
                  <div className="text-xs text-gray-500">www.homecarekerala.com</div>
                </div>

                {/* IT Solutions & Business Technology Services */}
                <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300 h-full flex flex-col justify-between">
                  <div className="flex items-center mb-4">
                    <div className="bg-gray-50 p-2 rounded-lg mr-3">
                      <Image
                        src="/images/itsolution.png"
                        alt="IT Solutions"
                        width={60}
                        height={60}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">IT Solutions</h3>
                      <p className="text-sm text-gray-600">IT Solutions &amp; Business Technology Services</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3 text-justify hyphens-auto" lang="en">
                    Provides website and logo design, software and mobile app development, custom ERP &amp; CRM
                    implementation, business process automation, and IT training and onboarding support for
                    next-generation businesses.
                  </p>
                  <p className="text-xs font-semibold text-primary mb-1">Tagline: Your Growth. Our Digital Expertise</p>
                  <p className="text-xs text-gray-600 mb-2 text-justify">
                    USP: Expert services for the next-generation business.
                  </p>
                  <div className="text-xs text-gray-500">www.keralaservicehub.com/itsolutions</div>
                </div>

                {/* HR & Talent Consultancy - Talent Connect Division */}
                <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300 h-full flex flex-col justify-between">
                  <div className="flex items-center mb-4">
                    <div className="bg-gray-50 p-2 rounded-lg mr-3">
                      <Image
                        src="/images/talent.png"
                        alt="Talent Connect"
                        width={60}
                        height={60}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Talent Connect</h3>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3 text-justify hyphens-auto" lang="en">
                    Delivers full-spectrum recruitment and talent solutions including identification, assessment,
                    onboarding, workforce planning, and leadership development to build strong, adaptive teams.
                  </p>
                  <p className="text-xs font-semibold text-primary mb-1">Tagline: Connecting People, Building Teams</p>
                  <p className="text-xs text-gray-600 mb-2 text-justify">
                    USP: Ready supply of skilled professionals, reduced hiring time, improved project delivery, and
                    flexibility to scale with changing business needs.
                  </p>
                  <div className="text-xs text-gray-500">www.keralaservicehub.com/talentconnect</div>
                </div>

                {/* CSR Initiative */}
                <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300 h-full flex flex-col justify-between">
                  <div className="flex items-center mb-4">
                    <div className="bg-gray-50 p-2 rounded-lg mr-3">
                      <Image
                        src="/images/csrf.jpeg"
                        alt="CSR Initiatives"
                        width={60}
                        height={60}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">CSR Initiatives</h3>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3 text-justify hyphens-auto" lang="en">
                    A dedicated CSR program where a portion of annual profits supports physically challenged
                    children and differently-abled students across Kerala through education, infrastructure,
                    health, and skill development initiatives.
                  </p>
                  <p className="text-xs font-semibold text-primary mb-1">Tagline: Unlocking Potential, Igniting Dreams</p>
                  <p className="text-xs text-gray-600 mb-2 text-justify">
                    Focus areas include educational empowerment, accessibility infrastructure, vocational training,
                    health and wellness support, and community integration in partnership with NGOs and
                    institutions.
                  </p>
                  <div className="text-xs text-gray-500">www.keralaservicehub.com/csrinitiatives</div>
                </div>
              </div>
            </div>
          </section>

          {/* Competitive Advantages */}
          <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
            <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
              <div className="text-center mb-16">
                <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  COMPETITIVE ADVANTAGES
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What Sets Us Apart</h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                  Our unique combination of industry expertise, innovative methodologies, and proven track record delivers exceptional value to our clients.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 h-full">
                    <div className="bg-gradient-to-r from-blue-600 to-primary rounded-lg p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Multi-Vertical Expertise</h3>
                    <p className="text-gray-600 text-sm leading-relaxed text-justify hyphens-auto" lang="en">
                      Deep domain knowledge across real estate, healthcare, IT, property management, and HR sectors.
                    </p>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 h-full">
                    <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Results-Driven Approach</h3>
                    <p className="text-gray-600 text-sm leading-relaxed text-justify hyphens-auto" lang="en">
                      Measurable outcomes with 100% client satisfaction rate and proven ROI across all engagements.
                    </p>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 h-full">
                    <div className="bg-gradient-to-r from-purple-600 to-violet-600 rounded-lg p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Dedicated<br />Teams</h3>
                    <p className="text-gray-600 text-sm leading-relaxed text-justify hyphens-auto" lang="en">
                      Specialized consultants with extensive experience and commitment to client success.
                    </p>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 h-full">
                    <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-lg p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Innovation<br />Focus</h3>
                    <p className="text-gray-600 text-sm leading-relaxed text-justify hyphens-auto" lang="en">
                      Cutting-edge solutions and methodologies that drive digital transformation and operational efficiency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Executive Summary */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose PeopleSoft Consultancy</h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                  Our commitment to excellence and proven track record make us the preferred partner for organizations seeking transformational growth.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="text-center">
                  <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200 h-full">
                    <div className="text-3xl font-bold text-primary mb-2">200+</div>
                    <div className="text-gray-700 font-semibold mb-2">Projects Delivered</div>
                    <div className="text-sm text-gray-600">Successfully completed across all verticals</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200 h-full">
                    <div className="text-3xl font-bold text-primary mb-2">6</div>
                    <div className="text-gray-700 font-semibold mb-2">Industry Verticals</div>
                    <div className="text-sm text-gray-600">Specialized expertise across key sectors</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200 h-full">
                    <div className="text-3xl font-bold text-primary mb-2">100%</div>
                    <div className="text-gray-700 font-semibold mb-2">Client Satisfaction</div>
                    <div className="text-sm text-gray-600">Commitment to excellence in every engagement</div>
                  </div>
                </div>
              </div>
            </div>
          </section>


          {/* Enhanced Partnership CTA */}
          <section className="py-24 bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-500/10"></div>
            <div className="relative max-w-7xl mx-auto px-8 md:px-16 lg:px-24 text-center">
              <div className="inline-block bg-primary/20 text-primary-light px-4 py-2 rounded-full text-sm font-semibold mb-6">
                READY TO TRANSFORM YOUR BUSINESS?
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Let's Build Something
                <span className="block bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                  Extraordinary Together
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
                Join industry leaders who trust PeopleSoft Consultancy to drive strategic initiatives, accelerate growth, and deliver measurable results. Our proven methodologies and dedicated expertise ensure your success.
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
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
