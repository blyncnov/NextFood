import { TiMediaPlay } from "react-icons/ti";

import Bg from "../public/assets/backgrounds/hero-image.jpg"
import Image from "next/image"


// Navigation Styles
import {
    HeroContainer,
    HeroContainerColumn,
    HeroContainerRow
} from "../styles/hero"

const HeroSection = () => {
    return (
        <>
            <HeroContainer>
                <HeroContainerColumn>
                    <HeroContainerRow>
                        <h1> Minimal Food Website Template By Blyncnov UI.</h1>
                        <br />
                        <p>We are a digital agency that helps brands to achieve their business outcomes. We see technology as a tool to create amazing things.</p>
                        <br />
                        <div className="btn__display">
                            <button>Order Now </button>
                            <div className="text__display">
                                <TiMediaPlay style={{ fontSize: "2em" }} />
                                <h4>Watch Intro</h4>
                            </div>
                        </div>
                    </HeroContainerRow>
                    <HeroContainerRow>
                        <Image layout="responsive" src={Bg} alt="banner image" />
                    </HeroContainerRow>
                </HeroContainerColumn>
            </HeroContainer>
        </>
    )
}

export default HeroSection