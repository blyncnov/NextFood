import React, { useState } from "react"
import { BsFillFilterCircleFill } from 'react-icons/bs';
import { TiTimes } from 'react-icons/ti';
import { RiBarChartHorizontalLine } from "react-icons/ri"

// styled components
import {
    NavigationContainer,
    NavigationColumn,
    ListItem,
    DetailsCardBox
} from "../styles/navigation"

// components

const Navigation = () => {
    const [click, isClick] = useState(false)
    const [open, isOpen] = useState(false)

    const isClickHandler = () => {
        isClick(!click)
    }

    const isBarClickHandler = () => {
        isOpen(!open)
    }

    return (
        <>
            <NavigationContainer>
                <NavigationColumn>
                    <div className="nav__items__set">
                        <div className="logo__section__list">

                            <div className="logo" onClick={isClickHandler}>
                                <h2 > NEXTFOOD</h2>
                            </div>

                            <div className="second">

                                <ListItem open={open} onClick={isBarClickHandler}>
                                    <li>Home</li>
                                    <li>Service</li>
                                    <li>Portfolio</li>
                                    <li>Pricing</li>
                                    <li>Team</li>
                                    <li>Contact</li>
                                </ListItem>

                                <div onClick={isBarClickHandler} className="mobile__opening">
                                    {open ? <TiTimes style={{ fontSize: "2em" }} /> : <RiBarChartHorizontalLine style={{ fontSize: "1.5em" }} />}
                                </div>

                                <div onClick={isClickHandler} className="mobile">
                                    <BsFillFilterCircleFill style={{ fontSize: "1.5em" }} />
                                </div>

                                <DetailsCardBox click={click} onClick={isClickHandler}>
                                    <div className="details__box__inner">
                                        <h1>NEXTFOOD</h1>
                                        <br />
                                        <p>Lorem ipsum dolor sit amet adipisicing elit.Sapiente fuga nisi rerum iusto intro
                                            Lorem ipsum dolor sit amet adipisicing elit.Sapiente fuga nisi rerum iusto intro.</p>
                                    </div>
                                </DetailsCardBox>

                            </div>

                        </div>
                    </div>
                </NavigationColumn>
            </NavigationContainer>
        </>
    )
}

export default Navigation