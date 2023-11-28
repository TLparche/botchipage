import Firstpage from '@/app/components/Firstpage'
import Secondpage from '@/app/components/Secondpage'
import Thirdpage from '@/app/components/Thirdpage'

export default function Home() {
    return (
        <div className={"grid"}>
            <Firstpage/>
            <Secondpage/>
            <Thirdpage/>
        </div>
    )
}
