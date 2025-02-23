import React from 'react';
import { Card } from "@/components/ui/card";
import { BarChart3, Database, FileSpreadsheet } from "lucide-react";
import Image from "next/image";
import { BorderBeam } from "@/components/magicui/border-beam";
import BlurryBlob from "@/components/animate/blurry-blob";

const HeroSection = () => {
    const skills = [
        { icon: <Database className="h-5 w-5" />, text: "SQL" },
        { icon: <FileSpreadsheet className="h-5 w-5" />, text: "Excel" },
        { icon: <BarChart3 className="h-5 w-5" />, text: "Power BI" },
    ];

    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background Blob */}
            <BlurryBlob
                firstBlobColor="#6931d7"
                secondBlobColor="#d1e32b"
            />

            {/* Content overlay */}
            <div className="absolute inset-0 bg-background/50 backdrop-blur-[2px]"/>

            <div className="container px-4 py-12 md:py-24 relative">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Text Content */}
                    <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
                        <div className="space-y-4 lg:space-y-6">
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight animate-fade-in opacity-0"
                                style={{animationDelay: '0.4s'}}>
                                Hey there! I'm <span className="text-primary">Sarish Chavan</span>
                            </h1>
                            <div className="space-y-4 text-base lg:text-lg text-muted-foreground animate-fade-in opacity-0"
                                 style={{animationDelay: '0.6s'}}>
                                <p>
                                    I'm a passionate data enthusiast with a keen eye for transforming data into
                                    impactful insights.
                                </p>
                                <p>
                                    With a strong foundation in Computer Science from Illinois Institute of Technology
                                    and hands-on experience in data engineering and machine learning, I am driven by
                                    the excitement of solving complex data problems and creating value through
                                    innovative solutions.
                                </p>
                            </div>
                        </div>

                        {/* Skills Pills */}
                        <div className="flex flex-wrap gap-3 animate-fade-in opacity-0"
                             style={{animationDelay: '0.8s'}}>
                            {skills.map((skill, index) => (
                                <Card
                                    key={index}
                                    className="px-4 py-2 flex items-center gap-2 bg-background/50 hover:bg-background/80 backdrop-blur-sm transition-colors cursor-pointer"
                                >
                                    {skill.icon}
                                    <span className="font-medium">{skill.text}</span>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Visual Element - Responsive Image with BorderBeam */}
                    <div className="flex justify-center order-1 lg:order-2 animate-fade-in opacity-0"
                         style={{animationDelay: '1s'}}>
                        <div className="w-64 sm:w-80 lg:w-96 relative">
                            <Card className="relative overflow-hidden">
                                <div className="relative aspect-square">
                                    <Image
                                        src="/sarish.jpeg"
                                        alt="Sarish Chavan"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                                <BorderBeam
                                    duration={8}
                                    size={100}
                                    style={{
                                        borderWidth: '4px',
                                        background: 'linear-gradient(to right, #5e0d0d, #d1e32b, transparent)',
                                        opacity: 0.8
                                    }}
                                />
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;