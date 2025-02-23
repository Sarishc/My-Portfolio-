"use client"

import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';

const ContactSection = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const contactInfo = [
        {
            icon: <Mail className="h-6 w-6" />,
            title: "Email",
            value: "chavansarish400@gmail.com",
            link: "mailto:chavansarish400@gmail.com"
        },
        {
            icon: <Linkedin className="h-6 w-6" />,
            title: "LinkedIn",
            value: "linkedin.com/in/sarishrchavan",
            link: "https://linkedin.com/in/sarishrchavan"
        },
        {
            icon: <Github className="h-6 w-6" />,
            title: "GitHub",
            value: "github.com/Sarishc",
            link: "https://github.com/Sarishc"
        }
    ];
    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        
        const form = event.target;
        const formData = new FormData(form);
        
        fetch('https://formsubmit.co/chavansarish400@gmail.com', {
            method: 'POST',
            body: formData
        })
        .then((response) => {
            if (response.ok) {
                // Clear the form fields
                form.reset(); // This will reset the form fields to their initial values (empty in this case)
                window.open('https://www.sarishchavan.com/thankyou', '_blank'); // Open the Thank You page in a new tab
            }
        })
        .catch((error) => {
            console.error("Error submitting form:", error);
        })
        .finally(() => {
            setIsSubmitting(false);
        });
    };
    

    return (
        <div className="min-h-screen bg-background">
            <div className="container px-4 pt-16 pb-20 max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-16">
                    <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
                    <p className="text-muted-foreground text-lg max-w-2xl">
                        I&apos;m always open to new opportunities and collaborations.
                        Feel free to reach out if you&apos;d like to discuss data analysis,
                        visualizations, or potential projects.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Contact Form */}
                    <Card className="p-6 border border-[#5046e6]/20 bg-[#5046e6]/5 backdrop-blur-sm">
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-6"
                        >
                            <div className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium">
                                            Name
                                        </label>
                                        <Input
                                            id="name"
                                            name="name"
                                            placeholder="John Doe"
                                            required
                                            className="bg-white/5 border-[#5046e6]/20 focus:border-[#5046e6]/50 focus:ring-[#5046e6]/50"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium">
                                            Email
                                        </label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            placeholder="john@example.com"
                                            className="bg-white/5 border-[#5046e6]/20 focus:border-[#5046e6]/50 focus:ring-[#5046e6]/50"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-medium">
                                        Subject
                                    </label>
                                    <Input
                                        id="subject"
                                        name="subject"
                                        required
                                        placeholder="How can I help you?"
                                        className="bg-white/5 border-[#5046e6]/20 focus:border-[#5046e6]/50 focus:ring-[#5046e6]/50"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium">
                                        Message
                                    </label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        required
                                        placeholder="Your message here..."
                                        className="min-h-[150px] bg-white/5 border-[#5046e6]/20 focus:border-[#5046e6]/50 focus:ring-[#5046e6]/50"
                                    />
                                </div>
                            </div>
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-[#5046e6] hover:bg-[#4035cc] transition-colors"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </Button>
                        </form>
                    </Card>

                    {/* Contact Information */}
                    <div className="space-y-6">
                        <Card className="p-6 border border-[#5046e6]/20 bg-[#5046e6]/5 backdrop-blur-sm">
                            <h2 className="text-xl font-semibold mb-4">
                                Contact Information
                            </h2>
                            <div className="space-y-3">
                                {contactInfo.map((info, index) => (
                                    <a
                                        key={index}
                                        href={info.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 p-4 rounded-xl border border-[#5046e6]/20 bg-white/5 hover:bg-[#5046e6]/10 transition-all duration-300 group"
                                    >
                                        <div className="text-[#5046e6] group-hover:text-[#6e66ff] transition-colors dark:text-white">
                                            {info.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-black dark:text-white">{info.title}</h3>
                                            <p className="text-sm text-black dark:text-white">{info.value}</p>
                                        </div>
                                        <ExternalLink className="h-4 w-4 ml-auto text-[#5046e6] opacity-0 group-hover:opacity-100 transition-all duration-300 dark:text-white" />
                                    </a>
                                ))}
                            </div>
                        </Card>

                        <Card className="p-6 border border-[#5046e6]/20 bg-[#5046e6]/5 backdrop-blur-sm">
                            <h2 className="text-xl font-semibold mb-2 dark:text-white">
                                Available for Opportunities
                            </h2>
                            <p className="text-black dark:text-white">
                                Currently open to full-time positions in data analysis and business intelligence.
                            </p>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
