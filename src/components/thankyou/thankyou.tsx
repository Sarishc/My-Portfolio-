import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from 'lucide-react';

const ThankYouPage = () => {
    return (
        <div className="min-h-screen bg-background">
            <div className="container px-4 pt-16 pb-20 max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-16 text-center">
                    <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Your message has been successfully sent. I&apos;ll get back to you as soon as possible. 
                        In the meantime, feel free to explore my projects or connect on LinkedIn.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Success Message Card */}
                    <Card className="p-6 border border-[#5046e6]/20 bg-[#5046e6]/5 backdrop-blur-sm">
                        <div className="flex items-center gap-4">
                            <CheckCircle className="h-8 w-8 text-green-500" />
                            <h2 className="text-2xl font-semibold">Message Sent Successfully!</h2>
                        </div>
                        <p className="mt-4 text-lg">
                            Thank you for reaching out. I will review your message and get back to you as soon as possible.
                        </p>
                    </Card>

                    {/* Explore Button */}
                    <div className="space-y-6">
                        <Card className="p-6 border border-[#5046e6]/20 bg-[#5046e6]/5 backdrop-blur-sm">
                            <h2 className="text-xl font-semibold mb-4 dark:text-white">
                                Keep Exploring
                            </h2>
                            <p className="text-black dark:text-white">
                                Feel free to browse through my portfolio or check out my GitHub to see my latest projects.
                            </p>
                            <Button
                                className="w-full bg-[#5046e6] hover:bg-[#4035cc] transition-colors mt-4"
                                href="https://github.com/Sarishc"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Visit GitHub
                            </Button>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThankYouPage;
