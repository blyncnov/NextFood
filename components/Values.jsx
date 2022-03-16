import {
    ValueContainer,
    ValueContainerColumn,
    ValueContainerRows,
    ValueContainerInner,
    ValueContainerInnerFlex
} from "../styles/Values"

import { FcAcceptDatabase, FcCallTransfer, FcCustomerSupport } from "react-icons/fc";

const Values = () => {
    return (
        <>
            <ValueContainer>
                <ValueContainerColumn>
                    <ValueContainerRows>
                        <h1>Latest NextFood features</h1>
                        <ValueContainerInner>
                            <ValueContainerInnerFlex>
                                <div>
                                    <FcAcceptDatabase style={{ fontSize: "2em" }} />
                                    <br />
                                    <h2>Choose your food</h2>

                                    <p>DNS over HTTPS (DoH) helps keep internet service providers from selling your data.</p>
                                </div>
                            </ValueContainerInnerFlex>

                            <ValueContainerInnerFlex>
                                <div>
                                    <FcCustomerSupport style={{ fontSize: "2em" }} />
                                    <br />
                                    <h2>Choose your Plate</h2>

                                    <p>DNS over HTTPS (DoH) helps keep internet service providers from selling your data.</p>
                                </div>
                            </ValueContainerInnerFlex>

                            <ValueContainerInnerFlex>
                                <div>
                                    < FcCallTransfer style={{ fontSize: "2em" }} />
                                    <br />
                                    <h2>Choose your Dishes</h2>
                                    <p>DNS over HTTPS (DoH) helps keep internet service providers from selling your data.</p>
                                </div>
                            </ValueContainerInnerFlex>
                        </ValueContainerInner>
                    </ValueContainerRows>
                </ValueContainerColumn>
            </ValueContainer>
        </>
    )
}

export default Values