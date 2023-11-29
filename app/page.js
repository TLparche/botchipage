import Firstpage from '@/app/components/Firstpage'
import Secondpage from '@/app/components/Secondpage'
import Thirdpage from '@/app/components/Thirdpage'
import Footer from '@/app/components/Footer'
import React from 'react'

export default function Home() {
    return (
        <div className={"grid"}>
            <Firstpage/>
            <Secondpage/>
            <Thirdpage/>
            <Footer/>
        </div>
    )
}
