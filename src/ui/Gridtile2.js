import RotateInOut3D from "../animation/RotateInOut3D"
import styled from "styled-components"

const GridTile2 = ({ children, bg }) => (
    <RotateInOut3D
        duration={1 + Math.random()}
        delay={0.5 + Math.random()}
        offsetY={120}
    >
        <Tile bg={bg}>{children}</Tile>
    </RotateInOut3D>
)

const Tile = styled.div.attrs({ className: "grid-tile" })`
    display: grid;
    place-items: center;
    overflow: hidden;
    width: 100%;
    height: 100%;
    min-height: 250px;
    padding: 2vw;
    background: ${(props) => props.bg && props.bg};
    background-size: cover;
    background-position: center top;
    isolation: isolate;
    &:after {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.1) 0%,
            rgba(0, 0, 0, 0.25) 100%
        );
        z-index: -1;
    }
`

export default GridTile2
