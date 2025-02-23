"use client"

import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { Button } from "@/components/ui/button";
import { Github, } from "lucide-react";

const projects = [
    {
        title: "Airbnb Data Science Project",
        description: "End-to-end analysis of 50,000+ Airbnb listings using Random Forest and XGBoost, achieving 85% accuracy in price prediction. Created interactive visualizations with Seaborn and Plotly for market insights.",
        tech: ["Python", "Scikit-learn", "XGBoost", "Seaborn", "Plotly"],
        links: {
            github: "https://github.com/Sarishc/Airbnb-Data-Science-Project",

        }
    },
    {
        title: "Reddit Data Pipeline",
        description: "Comprehensive ETL pipeline for Reddit data using Apache Airflow, Celery, and AWS services (S3, Glue, Athena, Redshift). Implemented automated data extraction and warehouse loading processes.",
        tech: ["Airflow", "AWS", "PostgreSQL", "Python", "Redshift"],
        links: {
            github: "https://github.com/Sarishc/Reddit-Data-Pipeline-Engineering",
        }
    },
    {
        title: "Tesla Stock Forecasting",
        description: "LSTM neural network implementation for Tesla stock price prediction. Analyzes historical data patterns to forecast future price movements using deep learning techniques.",
        tech: ["Python", "TensorFlow", "LSTM", "Pandas", "Matplotlib"],
        links: {
            github: "https://github.com/Sarishc/Tesla-LSTM-Stock-Forecasting",
        }
    },
    {
        title: "Realtime Data Streaming",
        description: "End-to-end data engineering pipeline using Apache Kafka, Spark, and Cassandra. Containerized with Docker for scalable deployment and real-time data processing.",
        tech: ["Kafka", "Spark", "Cassandra", "Docker", "Python"],
        links: {
            github: "https://github.com/Sarishc/Real-Time-Data-Streaming",
        }
    },
    {
        title: "International Debt Analysis",
        description: "Analysis of World Bank's international debt statistics, examining global economic patterns and debt distributions across developing countries.",
        tech: ["Python", "Pandas", "SQL", "Tableau", "Excel"],
        links: {
            github: "https://github.com/Sarishc/International-debt-Statistics",
        }
    },
    {
        title: "Job Market Analytics Dashboard",
        description: "Analytics dashboard analyzing 20,000+ data science job postings. Features salary distributions, geographical trends, and skill demand patterns across major tech companies.",
        tech: ["Python", "React", "D3.js", "PostgreSQL", "Flask"],
        links: {
            github: "https://github.com/Sarishc/Job-Market-Analytics-Dashboard",
        }
    }
];

// @ts-ignore
const ProjectCard = ({ project, index }) => (
    <BoxReveal
        boxColor="#5046e6"
        duration={0.5}
    >
        <Card className="h-[400px] bg-white/5 backdrop-blur-sm border-2 border-gray-800 hover:border-[#5046e6] transition-all duration-300 flex flex-col">
            <CardHeader>
                <CardTitle className="text-xl font-bold mb-4">{project.title}</CardTitle>
                <CardDescription className="text-gray-400 text-base">{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-6">
                    {
                        // @ts-ignore
                        project.tech.map((tech, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 text-sm rounded-full bg-[#5046e6]/10 text-[#5046e6]"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="flex gap-4">
                    <Button
                        variant="outline"
                        className="flex items-center gap-2"
                        onClick={() => window.open(project.links.github, '_blank')}
                    >
                        <Github size={16} />
                        Code
                    </Button>
                </div>
            </CardContent>
        </Card>
    </BoxReveal>
);

export default function Projects() {
    return (
        <section id="projects" className="min-h-screen py-20 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
                <BoxReveal boxColor="#5046e6" duration={0.5} >
                    <p className="text-gray-400 text-lg mb-12 max-w-2xl">
                        Here are some of my recent projects that showcase my expertise in data engineering,
                        machine learning, and analytics dashboard development.
                    </p>
                </BoxReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};