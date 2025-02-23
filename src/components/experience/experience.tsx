"use client"

import { Card } from "@/components/ui/card";
import { useState } from "react";
import {
    AnimatedSpan,
    Terminal,
    TypingAnimation
} from "@/components/magicui/terminal";
const experiences = [
    {
        id: 1,
        role: "Data Analyst",
        company: "Hack For LA",
        period: "Sept 2024 - Present",
        description: "Leading data analysis initiatives and stakeholder engagement for impactful decision-making.",
        achievements: [
            "Led weekly stakeholder meetings with 95% satisfaction rating from program managers",
            "Designed automated data quality monitoring system, reducing errors by 30%",
            "Collaborated on KPI dashboards used by 50+ decision-makers"
        ],
        tools: ["Python", "SQL", "Power BI", "Excel"],
        color: "bg-blue-500/10",
        highlightColor: "bg-blue-500/20",
        command: "python analyze_metrics.py --type=kpi --period=Q3",
        output: [
            "Loading data from warehouse...",
            "Generating KPI dashboard...",
            ">>> Stakeholder metrics updated successfully ✅"
        ]
    },
    {
        id: 2,
        role: "Graduate Student Assistant",
        company: "Illinois Institute of Technology",
        period: "Aug 2024 - Present",
        description: "Driving improvements in student support programs through data-driven insights.",
        achievements: [
            "Presented monthly insights leading to 20% improvement in student support",
            "Developed automated reporting system reducing processing time by 65%",
            "Optimized departmental workflows through data analysis"
        ],
        tools: ["SQL", "Excel", "Python", "Tableau"],
        color: "bg-purple-500/10",
        highlightColor: "bg-purple-500/20",
        command: "SELECT performance_metrics FROM student_data WHERE semester='Fall2024';",
        output: [
            "Executing query...",
            "Processing student performance data...",
            ">>> Generated monthly report ✅"
        ]
    },
    {
        id: 3,
        role: "Data Analyst Intern",
        company: "Excelerate",
        period: "May 2023 - Jul 2023",
        description: "Implemented advanced analytics for sales forecasting and customer segmentation.",
        achievements: [
            "Achieved 85% accuracy in sales forecasting using time series analysis",
            "Identified $300K in cost-saving opportunities through KPI dashboards",
            "Improved targeted marketing campaigns by 15% through customer segmentation"
        ],
        tools: ["Python", "R", "SQL", "Tableau"],
        color: "bg-green-500/10",
        highlightColor: "bg-green-500/20",
        command: "from sklearn.cluster import KMeans\nfit_clusters(customer_data)",
        output: [
            "Training segmentation model...",
            "Analyzing customer patterns...",
            ">>> Segments identified: 5 optimal clusters ✅"
        ]
    },
    {
        id: 4,
        role: "Data Engineer Intern",
        company: "IBM",
        period: "Oct 2022 - Jan 2023",
        description: "Developed anomaly detection models and optimized data pipelines.",
        achievements: [
            "Developed anomaly detection models with 95% accuracy",
            "Reduced data pipeline processing time by 40%",
            "Enhanced data quality monitoring systems"
        ],
        tools: ["Python", "SQL", "Apache Airflow", "AWS"],
        color: "bg-indigo-500/10",
        highlightColor: "bg-indigo-500/20",
        command: "airflow tasks test data_pipeline load_transform_job 2024-02-22",
        output: [
            "Starting data pipeline...",
            "Running ETL transformations...",
            ">>> Pipeline completed: 2.5M records processed ✅"
        ]
    },
    {
        id: 5,
        role: "Web Developer Intern",
        company: "Expoysys Data Labs",
        period: "Oct 2021 - Dec 2021",
        description: "Enhanced website performance and user experience through technical optimizations.",
        achievements: [
            "Reduced bounce rate by 15% through UX improvements",
            "Increased user engagement metrics by 20%",
            "Optimized website load time and performance"
        ],
        tools: ["HTML", "JavaScript", "CSS", "React"],
        color: "bg-orange-500/10",
        highlightColor: "bg-orange-500/20",
        command: "npm run build && npm run deploy",
        output: [
            "Building production bundle...",
            "Optimizing assets...",
            ">>> Deployment successful ✅"
        ]
    }
];

const ExperienceSection = () => {
    const [activeId, setActiveId] = useState<number>(1);
    const expArray = [...experiences].reverse();

    return (
        <div className="min-h-screen bg-background mb-20">
            {/* Header */}
            <div className="container px-4 pt-16 pb-8 max-w-5xl mx-auto">
                <h1 className="text-4xl font-bold mb-4">Experience</h1>
                <p className="text-muted-foreground text-lg">
                    My professional journey in data analysis and business intelligence.
                </p>
            </div>

            {/* Content */}
            <div className="container px-4 max-w-5xl mx-auto">
                <div className="space-y-16">
                    {/* Terminal Section */}
                    <div className="flex justify-center">
                        <div className="w-full max-w-3xl">
                            <Terminal>
                                <TypingAnimation key="typing-1">$ career.progression --timeline</TypingAnimation>

                                {expArray.map((exp, index) => (
                                    <div key={`terminal-${exp.id}`}>
                                        <AnimatedSpan delay={1500 + (index * 1000)} className="text-muted-foreground">
                                            <span>$ {exp.command}</span>
                                        </AnimatedSpan>
                                        {exp.output.map((output, i) => (
                                            <AnimatedSpan
                                                key={`output-${exp.id}-${i}`}
                                                delay={1700 + (index * 1000) + (i * 200)}
                                                className="text-green-500"
                                            >
                                                <span>{output}</span>
                                            </AnimatedSpan>
                                        ))}
                                    </div>
                                ))}

                                <TypingAnimation key="typing-2" delay={6000} className="text-blue-500">
                                    Successfully loaded career progression ✨
                                </TypingAnimation>
                            </Terminal>
                        </div>
                    </div>

                    {/* Experience Timeline */}
                    <div className="relative mt-20">
                        {/* Timeline Line */}
                        <div className="absolute left-8 lg:left-1/2 h-full w-px bg-border lg:-translate-x-1/2" />

                        {/* Experience Cards */}
                        <div className="space-y-12 lg:space-y-24">
                            {experiences.map((exp, index) => (
                                <div
                                    key={`timeline-${exp.id}`}
                                    className="relative"
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute lg:left-1/2 w-4 h-4 rounded-full bg-primary lg:-translate-x-1/2 transition-transform group-hover:scale-150" />

                                    {/* Card Container */}
                                    <div className={`flex pl-16 lg:pl-0 w-full lg:w-1/2 ${
                                        index % 2 === 0 ? 'lg:justify-end lg:ml-auto' : 'lg:justify-start lg:mr-auto'
                                    }`}>
                                        {/* Card */}
                                        <Card
                                            className={`w-full lg:w-[calc(100%-2rem)] p-6 cursor-pointer transition-all duration-300 hover:-translate-y-2 ${
                                                activeId === exp.id ? exp.highlightColor : exp.color
                                            } relative group`}
                                            onClick={() => setActiveId(exp.id)}
                                        >
                                            {/* Connection Line */}
                                            <div className={`absolute top-2 left-[-2rem] w-8 h-px bg-border group-hover:bg-primary transition-colors ${
                                                index % 2 === 0 ? 'lg:left-[-2rem]' : 'lg:right-[-2rem] lg:left-auto'
                                            }`} />

                                            <div className="space-y-4">
                                                <div className="space-y-1">
                                                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                                                    <p className="text-primary font-medium">{exp.company}</p>
                                                    <p className="text-sm text-muted-foreground">{exp.period}</p>
                                                </div>

                                                <p className="text-muted-foreground">{exp.description}</p>

                                                {activeId === exp.id && (
                                                    <div className="space-y-4 animate-fade-in">
                                                        <div className="space-y-2">
                                                            <h4 className="font-medium">Key Achievements:</h4>
                                                            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                                                                {exp.achievements.map((achievement, i) => (
                                                                    <li key={`achievement-${exp.id}-${i}`}>{achievement}</li>
                                                                ))}
                                                            </ul>
                                                        </div>

                                                        <div className="flex flex-wrap gap-2">
                                                            {exp.tools.map((tool, i) => (
                                                                <span
                                                                    key={`tool-${exp.id}-${i}`}
                                                                    className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                                                                >
                                                                    {tool}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </Card>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExperienceSection;