import React from 'react';
import YouTubePlayer from '@/app/components/YouTubePlayer'

const Firstpage = () => {
    return (
        <div>
            <div className={"h-screen w-full grid"}>
                <div className={"fixed top-0 left-0 right-0 bg-cover bg-center before:block before:pt-[56.25%]"}>
                    <YouTubePlayer />
                </div>


            </div>

        </div>
    )
};

export default Firstpage;
