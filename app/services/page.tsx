"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Users, MousePointer, PenTool, Code, Megaphone, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Link from 'next/link';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function ServicesPage() {
  const services = [
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Dominate search results and drive organic traffic with our comprehensive SEO strategies.',
      features: [
        'Technical SEO Audit & Optimization',
        'Keyword Research & Strategy',
        'On-Page & Off-Page SEO',
        'Local SEO & Google My Business',
        'Content Optimization',
        'Link Building & PR'
      ],
      process: [
        'SEO Audit & Analysis',
        'Keyword Strategy Development',
        'Technical Optimization',
        'Content Creation & Optimization',
        'Link Building Campaign',
        'Monitoring & Reporting'
      ],
      price: 'Starting from $999/month',
      deliverables: [
        'Monthly SEO reports',
        'Keyword ranking improvements',
        'Technical SEO fixes',
        'Optimized content strategy'
      ]
    },
    {
      icon: Users,
      title: 'Social Media Marketing',
      description: 'Build a strong social presence and engage your audience across all major platforms.',
      features: [
        'Social Media Strategy Development',
        'Content Creation & Curation',
        'Community Management',
        'Social Media Advertising',
        'Influencer Partnerships',
        'Analytics & Reporting'
      ],
      process: [
        'Social Media Audit',
        'Strategy & Calendar Planning',
        'Content Creation',
        'Publishing & Engagement',
        'Advertising Campaigns',
        'Performance Analysis'
      ],
      price: 'Starting from $799/month',
      deliverables: [
        'Daily social media management',
        'Custom content creation',
        'Monthly analytics reports',
        'Community engagement'
      ]
    },
    {
      icon: MousePointer,
      title: 'PPC Advertising',
      description: 'Maximize your ROI with targeted pay-per-click campaigns that convert.',
      features: [
        'Google Ads Management',
        'Facebook & Instagram Ads',
        'LinkedIn Advertising',
        'Remarketing Campaigns',
        'Landing Page Optimization',
        'Conversion Tracking & Analytics'
      ],
      process: [
        'Campaign Strategy',
        'Keyword & Audience Research',
        'Ad Creation & Testing',
        'Campaign Launch',
        'Optimization & A/B Testing',
        'Performance Reporting'
      ],
      price: 'Starting from $1,299/month + ad spend',
      deliverables: [
        'Campaign setup & optimization',
        'Weekly performance reports',
        'A/B tested ad creatives',
        'Landing page recommendations'
      ]
    },
    {
      icon: PenTool,
      title: 'Content Marketing',
      description: 'Tell your brand story with compelling content that resonates and converts.',
      features: [
        'Content Strategy Development',
        'Blog Writing & SEO Articles',
        'Video Production & Editing',
        'Infographic Design',
        'Email Marketing Campaigns',
        'Content Distribution'
      ],
      process: [
        'Content Audit & Strategy',
        'Editorial Calendar Planning',
        'Content Creation',
        'Review & Optimization',
        'Publishing & Distribution',
        'Performance Tracking'
      ],
      price: 'Starting from $699/month',
      deliverables: [
        '8-12 blog posts per month',
        'Social media content',
        'Email newsletter campaigns',
        'Content performance reports'
      ]
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Create stunning, responsive websites that convert visitors into customers.',
      features: [
        'Custom Website Design',
        'Responsive Development',
        'E-commerce Solutions',
        'CMS Development',
        'Website Speed Optimization',
        'Security & Maintenance'
      ],
      process: [
        'Requirements Analysis',
        'Design & Wireframing',
        'Development & Testing',
        'Content Integration',
        'Launch & Deployment',
        'Ongoing Support'
      ],
      price: 'Starting from $2,999',
      deliverables: [
        'Fully responsive website',
        'CMS training & documentation',
        '3 months free support',
        'SEO-optimized structure'
      ]
    },
    {
      icon: Megaphone,
      title: 'Brand Strategy',
      description: 'Develop a strong brand identity that sets you apart from the competition.',
      features: [
        'Brand Identity Development',
        'Logo Design & Guidelines',
        'Market Research & Analysis',
        'Brand Positioning Strategy',
        'Visual Identity System',
        'Brand Guidelines & Standards'
      ],
      process: [
        'Brand Discovery Workshop',
        'Market & Competitor Analysis',
        'Brand Strategy Development',
        'Visual Identity Creation',
        'Brand Guidelines',
        'Implementation Support'
      ],
      price: 'Starting from $3,999',
      deliverables: [
        'Complete brand identity',
        'Logo & visual assets',
        'Brand guidelines document',
        'Marketing materials templates'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive digital marketing solutions designed to grow your business, 
              increase your online presence, and maximize your return on investment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="space-y-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group"
              >
                <Card className="overflow-hidden bg-white dark:bg-gray-800 hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                      {/* Service Info */}
                      <div className="p-8 lg:p-12">
                        <div className="flex items-center mb-6">
                          <service.icon className="h-12 w-12 text-blue-600 dark:text-blue-400 mr-4" />
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                              {service.title}
                            </h3>
                            <div className="text-blue-600 dark:text-blue-400 font-semibold">
                              {service.price}
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                          {service.description}
                        </p>

                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">What's Included:</h4>
                          <ul className="space-y-2">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Link href="/contact">
                          <Button className="bg-blue-600 hover:bg-blue-700 text-white group">
                            Get Started
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </div>

                      {/* Process & Deliverables */}
                      <div className="bg-gray-50 dark:bg-gray-900 p-8 lg:p-12">
                        <div className="space-y-8">
                          {/* Process */}
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Our Process:</h4>
                            <div className="space-y-3">
                              {service.process.map((step, stepIndex) => (
                                <div key={stepIndex} className="flex items-center">
                                  <div className="w-6 h-6 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                    {stepIndex + 1}
                                  </div>
                                  <span className="text-gray-600 dark:text-gray-300">{step}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Deliverables */}
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">You'll Receive:</h4>
                            <ul className="space-y-2">
                              {service.deliverables.map((deliverable, deliverableIndex) => (
                                <li key={deliverableIndex} className="flex items-start">
                                  <CheckCircle className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0" />
                                  <span className="text-gray-600 dark:text-gray-300 text-sm">{deliverable}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 dark:bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Let's discuss your goals and create a custom strategy that drives results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
                View Our Portfolio
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}