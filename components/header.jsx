// styled components
import { HeaderContainer } from "../styles/header"
import HeroSection from "./heroSection"

// components
import Navigation from "./navigation"

const Header = () => {
    return (
        <>
            <HeaderContainer>
                <Navigation />
                <HeroSection />
            </HeaderContainer>

        </>
    )
}

export default Header