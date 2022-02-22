import Link from "next/link"
import styled from "styled-components"

const LinkButton = ({ name, newTab, link, yellow }) => {
    return (
        <Button yellow={yellow}>
            {console.log(yellow)}
            {link ? (
                <Link href={link}>
                    <a target={`${newTab ? "_blank" : "_self"}`}>
                        <span>{name}</span>
                    </a>
                </Link>
            ) : (
                <span>{name}</span>
            )}
        </Button>
    )
}

const Button = styled.button`
    background: none;
    outline: none;
    border: none;
    cursor: pointer;
    color: ${(props) => (props.yellow ? "hsl(42, 90%, 50%, 1)" : "white")};
    span {
        padding-inline: 10px;
        position: relative;
        text-transform: uppercase;
        font-family: var(--title-font);
        font-size: 1.5rem;

        &:after {
            content: "";
            position: absolute;
            background-image: url(/img/curly-arrow.png);
            right: 0;
            bottom: -25px;
            width: 100%;
            height: 30px;
            background-size: cover;
            background-position-x: right;
            background-repeat: no-repeat;
            filter: brightness(500);
        }
        &:hover {
            color: var(--primary);
            &:after {
                filter: brightness(100%);
            }
        }
    }
`

export default LinkButton
