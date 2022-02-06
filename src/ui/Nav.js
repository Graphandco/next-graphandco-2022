import { Box } from "theme-ui"
import NavHome from "./NavHome"
import NavLink from "./NavLink"
import GithubLink from "./GithubLink"

const Nav = () => (
    <Box
        as="nav"
        sx={{
            display: "flex",
            flexWrap: "wrap",
            py: [2, 2],
            //bg: "rgba(0,0,0, .5)",
            //background: "linear-gradient(180deg, rgba(0,0,0,.6), transparent)",
            position: "relative",
            zIndex: 999999,
        }}
    >
        <Box
            sx={{
                width: ["100%", "50%"],
                pl: [0, 3],
                textAlign: ["center", "left"],
            }}
        >
            <NavHome />
        </Box>
        <Box
            sx={{
                width: ["100%", "50%"],
                textAlign: ["center", "right"],
                pr: [0, 3],
                overflow: "hidden",
            }}
        >
            <NavLink href="/" delay={3}>
                One
            </NavLink>
            <NavLink href="/prestations" delay={3.1}>
                Prestations
            </NavLink>
            <NavLink href="/three" delay={3.2}>
                Three
            </NavLink>
            <NavLink href="/docs" delay={3.3}>
                Docs
            </NavLink>
        </Box>
    </Box>
)

export default Nav
