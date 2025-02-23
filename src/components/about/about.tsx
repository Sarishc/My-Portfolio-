import { Marquee } from "@/components/magicui/marquee";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import {Award, GraduationCap} from "lucide-react";
import Image from "next/image";

const technologies = [
    {
        name: "Python",
        logo: "/logos/python.png",
        width: 50
    },
    {
        name: "SQL",
        logo: "/logos/sql.png",
        width: 50
    },
    {
        name: "Power BI",
        logo: "/logos/powerbi.png",
        width: 50
    },
    {
        name: "Excel",
        logo: "/logos/excel.png",
        width: 50
    },
    {
        name: "Tableau",
        logo: "/logos/tableau.png",
        width: 50
    },
    {
        name: "AWS",
        logo: "/logos/aws.png",
        width: 50
    }
];

const education = [
    {
        school: "Illinois Institute of Technology",
        degree: "Master in Computer Science",
        specialization: "Specialization in Data Analytics",
        period: "2023-2025",
        coursework: [
            "Machine Learning",
            "Big Data Technologies",
            "Data Mining",
            "Database Design",
            "Statistical Analysis",
            "Deep Learning"
        ]
    },
    {
        school: "Pune University",
        degree: "Bachelor of Computer Science",
        period: "2019-2023",
        coursework: [
            "Data Structures & Algorithms",
            "Database Management Systems",
            "Object-Oriented Programming",
            "Web Development",
            "Software Engineering",
            "Operating Systems"
        ]
    }
];

const certifications = [
    {
        name: "AWS System Operations Associate",
        image: "/certs/aws.jpeg"
    },
    {
        name: "Beyond Silicon Valley: Growing Entrepreneurship",
        image: "/certs/beyond_silicon_valley.png"
    },
    {
        name: "Introduction to Data Science in Python",
        image: "/certs/data_science.png"
    },
    {
        name: "Machine Learning: A Case Study Approach",
        image: "/certs/machine_learning.png"
    },
    {
        name: "Python for Data Science",
        image: "/certs/python_data.png"
    },
    {
        name: "Software Processes and Agile Practices",
        image: "/certs/software_processes.png"
    }
];

const TechLogo = ({ name, logo, width }: {
    name: string;
    logo: string;
    width: number;
}) => (
    <div className="mx-4 sm:mx-8 hover:scale-110 transition-transform duration-300">
        <div className="relative h-8 sm:h-12 flex items-center justify-center">
            <Image
                src={logo}
                alt={name}
                width={width}
                height={40}
                className="object-contain"
            />
        </div>
    </div>
);

export default function AboutSection() {
    return (
        <section className="min-h-screen py-12 sm:py-20 bg-muted/10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto space-y-12 sm:space-y-20">
                    {/* Animated Intro */}
                    <div className="space-y-4 text-center">
                        <h2 className="text-3xl sm:text-4xl font-bold">
                            Turning Data into
                            <span className="text-primary mt-2">
                                <TypingAnimation>Actionable Insights</TypingAnimation>
                            </span>
                        </h2>
                        <p className="text-lg sm:text-xl text-muted-foreground mt-4 sm:mt-6 max-w-2xl mx-auto">
                            Data Analyst with expertise in transforming complex datasets into clear, actionable insights
                        </p>
                    </div>

                    {/* Skills Marquee */}
                    <div className="py-6 sm:py-10">
                        <Marquee pauseOnHover className="[--duration:40s]">
                            {technologies.map((tech) => (
                                <TechLogo key={tech.name} {...tech} />
                            ))}
                        </Marquee>
                    </div>

                    {/* Education Timeline */}
                    <div className="max-w-3xl mx-auto px-4">
                        <div className="flex items-center gap-3 mb-8 sm:mb-12">
                            <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                            <h2 className="text-xl sm:text-2xl font-bold">Education</h2>
                        </div>

                        <div className="relative">
                            {/* Timeline line */}
                            <div className="absolute left-0 top-0 bottom-0 w-px bg-primary/20" />

                            {/* Education items */}
                            <div className="space-y-12 sm:space-y-16">
                                {education.map((edu, index) => (
                                    <div key={index} className="relative pl-6 sm:pl-8 group">
                                        {/* Timeline dot */}
                                        <div className="absolute left-0 top-0 w-2 sm:w-3 h-2 sm:h-3 -translate-x-1/2 rounded-full bg-primary group-hover:scale-150 transition-transform" />

                                        {/* Period indicator */}
                                        <div className="absolute left-6 sm:left-8 -top-6 text-xs sm:text-sm font-medium text-primary">
                                            {edu.period}
                                        </div>

                                        <div className="space-y-3 sm:space-y-4">
                                            {/* Education details */}
                                            <div className="space-y-1 sm:space-y-2">
                                                <h3 className="text-lg sm:text-xl font-semibold">{edu.school}</h3>
                                                <p className="text-base sm:text-lg text-muted-foreground">{edu.degree}</p>
                                                {edu.specialization && (
                                                    <p className="text-xs sm:text-sm text-muted-foreground">{edu.specialization}</p>
                                                )}
                                            </div>

                                            {/* Coursework */}
                                            <div className="space-y-2">
                                                <h4 className="text-xs sm:text-sm font-medium text-primary">Relevant Coursework</h4>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                                    {edu.coursework.map((course, courseIndex) => (
                                                        <div
                                                            key={courseIndex}
                                                            className="text-xs sm:text-sm text-muted-foreground py-1 px-2 rounded bg-primary/5"
                                                        >
                                                            {course}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Certifications Section */}
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="flex items-center gap-3 mb-8 sm:mb-12">
                            <Award className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                            <h2 className="text-xl sm:text-2xl font-bold">Certifications</h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                            {certifications.map((cert, index) => (
                                <div
                                    key={index}
                                    className="group flex flex-col items-center gap-3 sm:gap-4 p-4 sm:p-8 rounded-lg transition-colors duration-300"
                                >
                                    <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full bg-muted/20 p-4 group-hover:bg-muted/30 transition-colors duration-300">
                                        <Image
                                            src={cert.image}
                                            alt={cert.name}
                                            fill
                                            className="object-contain p-2"
                                        />
                                    </div>
                                    <p className="text-center font-medium text-xs sm:text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300">
                                        {cert.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}