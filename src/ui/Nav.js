import { Box } from "theme-ui"
import NavHome from "./NavHome"
import NavLink from "./NavLink"
import GithubLink from "./GithubLink"
import useWindowDimensions from "../hooks/useWindowDimensions.ts"
import { FaHome, FaBoxOpen, FaImages, FaEnvelope } from "react-icons/fa"

const Nav = () => {
    const { width } = useWindowDimensions()
    return (
        <nav>
            <NavHome />
            <div className="header__right">
                <NavLink href="/" delay={3}>
                    {width > 767 ? "Accueil" : <FaHome />}
                </NavLink>
                <NavLink href="/prestations" delay={3.1}>
                    {width > 767 ? "Prestations" : <FaBoxOpen />}
                </NavLink>
                <NavLink href="/realisations" delay={3.2}>
                    {width > 767 ? "Réalisations" : <FaImages />}
                </NavLink>
                <NavLink href="/docs" delay={3.3}>
                    {width > 767 ? "Contact" : <FaEnvelope />}
                </NavLink>
            </div>
        </nav>
    )
}

export default Nav
