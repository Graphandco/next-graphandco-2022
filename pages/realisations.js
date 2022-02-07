import Wrapper from "../src/layout/Wrapper"
import Realisations from "../src/views/Realisations"
const RealisationsPage = () => {
    return (
        <Wrapper
            url="https://tweenpages.vercel.app/three"
            title="TweenPages | Transition 3"
            description="Demo of TweenPages with a complex transition to page number three"
            twitter="johnpolacek"
            imageUrl="https://tweenpages.vercel.app/project-logo.png"
            imageAlt="TweenPages Logo"
            background="linear-gradient(90deg,green,black)"
        >
            <Realisations />
        </Wrapper>
    )
}

export default RealisationsPage
