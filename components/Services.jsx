import Link from 'next/link'
import Image from 'next/image'

// import Showcase from "../public/assets/images/kitchen.jpg"
import Showcase2 from "../public/assets/images/3.png"

import {
    ServicesContainer,
    ServicesColumn,
    ServicesRows
} from "../styles/Services"


const Services = () => {
    return (
        <>
            <ServicesContainer>
                <ServicesColumn>
                    <ServicesRows wide>
                        <div className="service__path">
                            <h2>Are You Hungry , huh ?</h2>
                        </div>
                        <br />
                        <h4>Brilliant Toolkit to Build Nextgen Website Faster.</h4>
                        <br />
                        <p>The main thrust is to focus on educating attendees on how to best protect highly vulnerable business applications with interactive panel discussions and roundtables
                            led by subject matter experts. The main thrust is to focus on educating attendees on how to best protect highly vulnerable business applications with interactive panel.</p>
                        <br />
                        <Link href="/" passHref={true}>
                            <button>Learn More</button>
                        </Link>
                    </ServicesRows>

                    <ServicesRows >
                        <Image layout="responsive" src={Showcase2} alt="showcase" />
                    </ServicesRows>

                </ServicesColumn>
                <br />
                <br />
                <ServicesColumn reverse>
                    <ServicesRows wide>
                        <div className="service__path">
                            <h2>Are You Hungry , huh ?</h2>
                        </div>
                        <br />
                        <h4>Brilliant Toolkit to Build Nextgen Website Faster.</h4>
                        <br />
                        <p>The main thrust is to focus on educating attendees on how to best protect highly vulnerable business applications with interactive panel discussions and roundtables
                            led by subject matter experts. The main thrust is to focus on educating attendees on how to best protect highly vulnerable business applications with interactive panel.</p>
                        <br />
                        <Link href="/" passHref={true}>
                            <button>Learn More</button>
                        </Link>
                    </ServicesRows>

                    <ServicesRows >
                        <Image layout="responsive" src={Showcase2} alt="showcase" />
                    </ServicesRows>

                </ServicesColumn>

            </ServicesContainer>
        </>
    )
}

export default Services