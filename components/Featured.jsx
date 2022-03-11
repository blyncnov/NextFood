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
                    <br />
                    <br />
                    <FeaturedContainerRows>
                        <FeaturedRows>
                            <div>
                                <div className="feature__container">
                                    <div className="placement end">
                                        <h4>OZ Cointreau</h4>
                                        <p>The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                                    </div>
                                    <BiDrink style={{ fontSize: "3em", color: "white", padding: ".2em", backgroundColor: "#FFCB03", clipPath: "circle()" }} />
                                </div>
                                <br />

                                <div className="feature__container">
                                    <div className="placement end">
                                        <h4>OZ Boulevard</h4>
                                        <p>The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                                    </div>
                                    <GiDrinking style={{ fontSize: "3em", color: "white", padding: ".2em", backgroundColor: "#FFCB03", clipPath: "circle()" }} />
                                </div>
                            </div>
                        </FeaturedRows>

                        <FeaturedRows className="separated">
                            <Image
                                layout="responsive"
                                src={FeaturedPicture}
                                alt="banner image" />
                        </FeaturedRows>

                        <FeaturedRows>
                            <div>
                                <div className="feature__container start">
                                    <RiCupFill style={{ fontSize: "3em", color: "white", padding: ".2em", backgroundColor: "#FFCB03", clipPath: "circle()" }} />
                                    <div className="placement">
                                        <h4>OZ Fresh lime juice</h4>
                                        <p>The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                                    </div>

                                </div>
                                <br />

                                <div className="feature__container start">
                                    <MdFoodBank style={{ fontSize: "3em", color: "white", padding: ".2em", backgroundColor: "#FFCB03", clipPath: "circle()" }} />
                                    <div className="placement">
                                        <h4>OZ Cranberry juice</h4>
                                        <p>The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
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