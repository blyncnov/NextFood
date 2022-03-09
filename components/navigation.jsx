import React, { useState } from "react"
import { BsFillFilterCircleFill } from 'react-icons/bs';
import { FaTimes } from 'react-icons/fa';
import { RiHaze2Line } from "react-icons/ri";
import { RiBarChartHorizontalLine } from "react-icons/ri"

// styled components
import {
    NavigationContainer,
    NavigationColumn,
    ListItem,
    ListItems,
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
                                <h2><RiHaze2Line style={{ fontSize: "1.5em" }} /></h2>
                                <h2 > nextfood </h2>
                            </div>

                            <div className="second">
                                <ListItem onClick={isBarClickHandler} open={open}>
                                    <ListItems onClick={isBarClickHandler} >
                                        <li>Home</li>
                                        <li>Service</li>
                                        <li>Portfolio</li>
                                        <li>Pricing</li>
                                        <li>Team</li>
                                        <li>Contact</li>
                                    </ListItems>
                                </ListItem>

                                <div onClick={isBarClickHandler} className="mobile__opening">
                                    {open ? <FaTimes style={{ fontSize: "1.5em" }} /> : <RiBarChartHorizontalLine style={{ fontSize: "1.5em" }} />}
                                </div>

                                <div onClick={isClickHandler} className="mobile">
                                    <BsFillFilterCircleFill style={{ fontSize: "1.5em" }} />
                                </div>

                                <DetailsCardBox click={click} onClick={isClickHandler}>
                                    <div className="details__box__inner">
                                        <div className="log">
                                            <h2><RiHaze2Line style={{ fontSize: "1.5em", color: "#203C83" }} /></h2>
                                            <h1>NEXTFOOD</h1></div>

                                        <br />
                                        <p>Lorem ipsum dolor sit amet adipisicing elit.Sapiente fuga nisi rerum iusto intro
                                            Lorem ipsum dolor sit amet adipisicing elit.Sapiente fuga nisi rerum iusto intro.
                                        </p>
                                        <br />
                                        <br />
                                        <h2 style={{ color: "#090B24" }}>Our working days</h2>
                                        <ul style={{ margin: "1em .2em" }}>
                                            <li>Monday - 7:00am - 10:00pm</li>
                                            <li>Tuesday - 7:00am  - 10:00pm</li>
                                            <li>Wednesday - 7:00am  - 10:00pm</li>
                                            <li>Thursday - 7:00am  - 10:00pm</li>
                                            <li>Friday - 7:00am  - 10:00pm</li>
                                            <li>Saturday - 8:00am  - 10:00pm</li>
                                        </ul>
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