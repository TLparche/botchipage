"use client";
import React, { useState, useEffect } from 'react';
import YouTubePlayer from '@/app/components/YouTubePlayer';

const Firstpage = () => {
    const [scrollOpacity, setScrollOpacity] = useState(1);

    const handleScroll = () => {
        const opacity = window.scrollY / 600;
        setScrollOpacity(opacity < 0 ? 0 : opacity);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div className="h-screen w-full block relative bg-pink-300">
                <div className="absolute top-0 left-0 right-0 bg-pink-300 z-30 h-full" style={{ opacity: scrollOpacity }}>
                </div>
                <div className="absolute top-0 left-0 right-0 bg-cover bg-center before:block before:pt-[56.25%] z-20 h-screen">
                    <YouTubePlayer />
                </div>
            </div>
        </div>
    );
};

export default Firstpage;
