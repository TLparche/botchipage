import Firstpage from '@/app/components/Firstpage'
import Secondpage from '@/app/components/Secondpage'

export default function Home() {
    return (
        <div className={"grid"}>
            <Firstpage/>
            <Secondpage/>
        </div>
    )
}
