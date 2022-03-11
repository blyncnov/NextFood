import React from 'react'
import Image from 'next/image'
import { RiCupFill } from "react-icons/ri";
import { BiDrink } from 'react-icons/bi'
import { GiDrinking } from 'react-icons/gi'
import { MdFoodBank } from 'react-icons/md'


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
                                        <p>It still lives out that spirit today .</p>
                                    </div>
                                    <BiDrink style={{ fontSize: "3em", color: "white", padding: ".2em", backgroundColor: "#33C1AE", clipPath: "circle()" }} />
                                </div>
                                <br />

                                <div className="feature__container">
                                    <div className="placement">
                                        <h4>Whiskey Sour</h4>
                                        <p>It still lives out that spirit today .</p>
                                    </div>
                                    <GiDrinking style={{ fontSize: "3em", color: "white", padding: ".2em", backgroundColor: "#33C1AE", clipPath: "circle()" }} />
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
                                    <RiCupFill style={{ fontSize: "3em", color: "white", padding: ".2em", backgroundColor: "#33C1AE", clipPath: "circle()" }} />
                                    <div className="placement">
                                        <h4>Whiskey Sour</h4>
                                        <p>It still lives out that spirit today .</p>
                                    </div>

                                </div>
                                <br />

                                <div className="feature__container secondp">
                                    <MdFoodBank style={{ fontSize: "3em", color: "white", padding: ".2em", backgroundColor: "#33C1AE", clipPath: "circle()" }} />
                                    <div className="placement">
                                        <h4>Whiskey Sour</h4>
                                        <p>It still lives out that spirit today .</p>
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