"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const contactFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().min(1, "Please select a budget range"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form submitted:', data);
      reset();
      // Show success message
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'hello@5dsolutions.com',
      description: 'Send us an email and we\'ll respond within 24 hours',
      action: 'mailto:hello@5dsolutions.com'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (234) 567-8900',
      description: 'Mon-Fri from 8am to 6pm EST',
      action: 'tel:+12345678900'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'New York, NY',
      description: 'Come say hello at our office headquarters',
      action: '#'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon - Fri: 8am - 6pm',
      description: 'Saturday & Sunday: Closed',
      action: null
    }
  ];

  const services = [
    'SEO Optimization',
    'Social Media Marketing',
    'PPC Advertising',
    'Content Marketing',
    'Web Development',
    'Brand Strategy',
    'Email Marketing',
    'Other'
  ];

  const budgets = [
    'Under $1,000',
    '$1,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000+'
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
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your business? Let's discuss your goals and create 
              a custom digital marketing strategy that drives results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <Card className="bg-white dark:bg-gray-800 shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                    Send us a message
                  </h2>
                  
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          First Name *
                        </label>
                        <Input
                          {...register('firstName')}
                          className="w-full"
                          placeholder="John"
                        />
                        {errors.firstName && (
                          <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Last Name *
                        </label>
                        <Input
                          {...register('lastName')}
                          className="w-full"
                          placeholder="Doe"
                        />
                        {errors.lastName && (
                          <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Email Address *
                        </label>
                        <Input
                          {...register('email')}
                          type="email"
                          className="w-full"
                          placeholder="john@example.com"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Phone Number *
                        </label>
                        <Input
                          {...register('phone')}
                          type="tel"
                          className="w-full"
                          placeholder="+1 (234) 567-8900"
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Company Name
                      </label>
                      <Input
                        {...register('company')}
                        className="w-full"
                        placeholder="Your Company"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Service Interested In *
                        </label>
                        <select
                          {...register('service')}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        >
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                        {errors.service && (
                          <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Budget Range *
                        </label>
                        <select
                          {...register('budget')}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        >
                          <option value="">Select budget range</option>
                          {budgets.map((budget) => (
                            <option key={budget} value={budget}>
                              {budget}
                            </option>
                          ))}
                        </select>
                        {errors.budget && (
                          <p className="text-red-500 text-sm mt-1">{errors.budget.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Tell us about your project *
                      </label>
                      <Textarea
                        {...register('message')}
                        rows={5}
                        className="w-full"
                        placeholder="Describe your goals, challenges, and what you're hoping to achieve..."
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg"
                    >
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Let's start a conversation
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  We're here to help you grow your business. Reach out to us through any of 
                  the channels below, and we'll get back to you as soon as possible.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="group"
                  >
                    <Card className="bg-white dark:bg-gray-800 hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                              <info.icon className="h-6 w-6 text-blue-600 group-hover:text-white" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                              {info.title}
                            </h3>
                            {info.action ? (
                              <a
                                href={info.action}
                                className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                              >
                                {info.content}
                              </a>
                            ) : (
                              <p className="font-medium text-gray-900 dark:text-white">
                                {info.content}
                              </p>
                            )}
                            <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                              {info.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Quick Contact Buttons */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Need immediate assistance?
                </h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                    onClick={() => window.open('https://wa.me/12345678900', '_blank')}
                  >
                    WhatsApp
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="flex-1"
                    onClick={() => window.location.href = 'tel:+12345678900'}
                  >
                    Call Now
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Visit Our Office
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Located in the heart of New York City, our team is ready to meet 
              with you to discuss your digital marketing needs.
            </p>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="h-96 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-300">
                  Interactive map would be integrated here with Google Maps
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  123 Business Avenue, New York, NY 10001
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer isContact={false} />
    </div>
  );
}