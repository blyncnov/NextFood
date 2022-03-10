import React from 'react'
import Image from 'next/image'
import { RiCupFill } from "react-icons/ri";
import { BsCupStraw } from 'react-icons/bs'

import FeaturedPicture from "../public/assets/images/drinks.webp"


import {
    FeaturedContainer,
    FeaturedContainerColumn,
    FeaturedContainerRows,
    FeaturedRows
} from "../styles/featured"

const Featured = () => {
    return (
        <>
            <FeaturedContainer>
                <FeaturedContainerColumn>
                    <div className="featured__text">
                        <h4>The Best Cocktails</h4>
                        <h1>Most Popular Cocktails</h1>
                        <p>
                            Anyway, you still use Lorem Ipsum and rightly so, as it will always have a place in the web workers toolbox, as things happen, not always the way you like it, not always in the preferred.
                        </p>
                    </div>
                    <FeaturedContainerRows>
                        <FeaturedRows>
                            <div>
                                <div className="feature__container">
                                    <div className="placement">
                                        <h4>Whiskey Sour</h4>
                                        <p>It still lives out that spirit today and invites others to join in seizing their dreams.</p>
                                    </div>
                                    <RiCupFill style={{ fontSize: "5em", color: "#F2AD44" }} />
                                </div>
                                <br />
                                <div className="feature__container">
                                    <div className="placement">
                                        <h4>Whiskey Sour</h4>
                                        <p>It still lives out that spirit today and invites others to join in seizing their dreams.</p>
                                    </div>
                                    <RiCupFill style={{ fontSize: "5em", color: "#F2AD44" }} />
                                </div>
                            </div>
                        </FeaturedRows>

                        <FeaturedRows>
                            <Image
                                layout="responsive"
                                src={FeaturedPicture}
                                alt="banner image" />
                            {/* <BsCupStraw style={{ fontSize: "20em", color: "#F2AD44" }} /> */}
                        </FeaturedRows>

                        <FeaturedRows>
                            <div>
                                <div className="feature__container secondp">
                                    <RiCupFill style={{ fontSize: "5em", color: "#F2AD44" }} />
                                    <div className="placement">
                                        <h4>Whiskey Sour</h4>
                                        <p>It still lives out that spirit today and invites others to join in seizing their dreams.</p>
                                    </div>

                                </div>
                                <br />
                                <div className="feature__container secondp">
                                    <RiCupFill style={{ fontSize: "5em", color: "#F2AD44" }} />
                                    <div className="placement">
                                        <h4>Whiskey Sour</h4>
                                        <p>It still lives out that spirit today and invites others to join in seizing their dreams.</p>
                                    </div>
                                </div>
                            </div>
                        </FeaturedRows>
                    </FeaturedContainerRows>
                </FeaturedContainerColumn>
            </FeaturedContainer>
        </>
    )
}

export default Featured