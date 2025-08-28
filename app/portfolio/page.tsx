"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'seo', name: 'SEO' },
    { id: 'social', name: 'Social Media' },
    { id: 'ppc', name: 'PPC' },
    { id: 'web', name: 'Web Development' },
    { id: 'branding', name: 'Branding' }
  ];

  const projects = [
    {
      id: 1,
      title: 'TechStart E-commerce Growth',
      category: 'seo',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      results: '+300% Revenue Growth',
      description: 'Complete SEO overhaul and PPC campaign for a tech startup, resulting in 300% revenue increase.',
      metrics: ['300% Revenue Increase', '150% Organic Traffic Growth', '5x ROAS', '50% Cost per Acquisition Reduction'],
      duration: '6 months',
      services: ['SEO', 'PPC', 'Content Marketing']
    },
    {
      id: 2,
      title: 'Fashion Brand Social Media Success',
      category: 'social',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600',
      results: '1M+ Followers Gained',
      description: 'Built a strong social media presence for a fashion brand across Instagram, TikTok, and Facebook.',
      metrics: ['1M+ New Followers', '500% Engagement Increase', '200% Sales Growth', '50M+ Impressions'],
      duration: '8 months',
      services: ['Social Media Marketing', 'Influencer Marketing', 'Content Creation']
    },
    {
      id: 3,
      title: 'Restaurant Chain PPC Campaign',
      category: 'ppc',
      image: 'https://images.pexels.com/photos/776538/pexels-photo-776538.jpeg?auto=compress&cs=tinysrgb&w=600',
      results: '8x Return on Ad Spend',
      description: 'Multi-location PPC campaign for a restaurant chain with focus on local targeting and promotions.',
      metrics: ['8x ROAS', '40% Increase in Foot Traffic', '60% Online Order Growth', '25% Cost Reduction'],
      duration: '4 months',
      services: ['Google Ads', 'Facebook Ads', 'Local SEO']
    },
    {
      id: 4,
      title: 'Healthcare Website Redesign',
      category: 'web',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      results: '250% Lead Increase',
      description: 'Complete website redesign and development for a healthcare provider with focus on user experience.',
      metrics: ['250% Lead Increase', '180% Page Speed Improvement', '90% Mobile Optimization', '50% Bounce Rate Reduction'],
      duration: '3 months',
      services: ['Web Development', 'UX/UI Design', 'SEO']
    },
    {
      id: 5,
      title: 'Fitness Brand Identity',
      category: 'branding',
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600',
      results: '5x Brand Recognition',
      description: 'Complete brand identity development for a fitness startup including logo, guidelines, and materials.',
      metrics: ['5x Brand Recognition', '300% Social Engagement', '150% Website Traffic', '200% Customer Retention'],
      duration: '2 months',
      services: ['Brand Strategy', 'Logo Design', 'Marketing Materials']
    },
    {
      id: 6,
      title: 'Real Estate SEO Success',
      category: 'seo',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600',
      results: '+400% Organic Traffic',
      description: 'Local SEO optimization for a real estate agency resulting in massive organic growth.',
      metrics: ['400% Organic Traffic', '300% Lead Generation', '#1 Local Rankings', '80% Mobile Traffic Growth'],
      duration: '5 months',
      services: ['Local SEO', 'Content Marketing', 'Google My Business']
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
              Our Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Explore our success stories and see how we've helped businesses achieve 
              remarkable growth through strategic digital marketing solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mr-4 mb-2">
              <Filter className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">Filter by:</span>
            </div>
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? "default" : "outline"}
                onClick={() => setActiveFilter(category.id)}
                className={`mb-2 ${
                  activeFilter === category.id 
                    ? "bg-blue-600 hover:bg-blue-700 text-white" 
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                {category.name}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  variants={fadeInUp}
                  initial="initial"
                  animate="animate"
                  exit={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <Card className="overflow-hidden bg-white dark:bg-gray-800 hover:shadow-2xl transition-all duration-500">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <div className="text-2xl font-bold">{project.results}</div>
                        <div className="text-sm opacity-90">{project.duration}</div>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Button size="sm" className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.services.map((service, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                      
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                        {project.description}
                      </p>

                      <div className="space-y-2">
                        <h4 className="font-medium text-gray-900 dark:text-white text-sm">Key Results:</h4>
                        <ul className="space-y-1">
                          {project.metrics.slice(0, 3).map((metric, index) => (
                            <li key={index} className="text-xs text-gray-600 dark:text-gray-300 flex items-center">
                              <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                              {metric}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                No projects found for this category.
              </p>
            </motion.div>
          )}
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
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Let's create a case study together. Get started with a free consultation 
              and see how we can transform your business.
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
              Start Your Success Story
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}