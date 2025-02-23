"use client"

import React, { useState, useEffect } from 'react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {ModeToggle} from "@/components/dark-mode-toggle/dark-mode-toggle";
import Link from 'next/link';

const navItems = [
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Experience', href: '/experience' },
    { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    // Handle scroll effects
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            // Find which section is currently in view
            const sections = navItems.map(item => item.href.substring(1));
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });

            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // @ts-ignore
    const NavLink = ({ href, children, isMobile = false }) => {
        const isActive = activeSection === href.substring(1);

        return (
            <a
                href={href}
                className={`
          relative px-3 py-2 text-md transition-all duration-300 ease-in-out
          ${isMobile ? 'text-2xl font-light' : 'text-base font-medium'}
          ${isActive
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-primary'}
          ${isActive && !isMobile ? 'after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-primary after:transition-all after:duration-300' : ''}
        `}
            >
                {children}
            </a>
        );
    };

    return (
        <header
            className={`
        fixed top-0 z-50 w-full transition-all duration-300
        ${isScrolled
                ? 'bg-background/80 backdrop-blur-lg border-b shadow-sm'
                : 'bg-background/0'}
      `}
        >
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
                        SC
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-1">
                        {navItems.map((item) => (
                            <NavLink key={item.name} href={item.href}>
                                {item.name}
                            </NavLink>
                        ))}
                        <ModeToggle/>
                    </nav>

                    {/* Mobile Navigation */}
                    <Sheet>
                        <SheetTrigger asChild className="md:hidden">
                            <Button variant="ghost" size="icon" className="relative w-10 h-10">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-full sm:w-[300px] flex flex-col justify-center">
                            <nav className="flex flex-col space-y-8 text-center">
                                {navItems.map((item) => (
                                    <NavLink key={item.name} href={item.href} isMobile>
                                        {item.name}
                                    </NavLink>
                                ))}
                                <div className="flex justify-center pt-4">
                                    <ModeToggle/>
                                </div>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}