import Image from "next/image"

import { motion } from 'framer-motion'

import { TiMediaPlay } from "react-icons/ti";

import Banner from "../public/assets/banner2.jpg"



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
                        <motion.div
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                duration: 5,
                                ease: "easeInOut",
                                times: [0, 0.2, 0.5, 0.8, 1],
                                repeat: 0,
                                repeatDelay: 0
                            }}
                        >
                            <Image layout="responsive" src={Banner} alt="banner image" />
                        </motion.div>
                    </HeroContainerRow>
                </HeroContainerColumn>
            </HeroContainer>
        </>
    )
}

export default HeroSection