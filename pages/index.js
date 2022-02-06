import Wrapper from "../src/layout/Wrapper"
import Home from "../src/views/Home"

const IndexPage = () => (
    <Wrapper
        url="https://tweenpages.vercel.app/"
        title="TweenPages"
        description="Build complex animated page transitions with GSAP and Next.js."
        twitter="johnpolacek"
        imageUrl="https://tweenpages.vercel.app/greensock_plus_nextjs.png"
        imageAlt="Greensock plus Next.js"
        background="linear-gradient(90deg, rgb(3 35 59), rgb(12, 16, 18))"
    >
        <Home />
    </Wrapper>
)

export default IndexPage
