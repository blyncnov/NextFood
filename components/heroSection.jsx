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
                        <button>Order Now </button>
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