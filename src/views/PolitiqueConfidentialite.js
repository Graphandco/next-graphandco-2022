import FadeInOut from "../animation/FadeInOut"
import Pagetitle from "../ui/PageTitle"

const Politiqueconfidentialite = () => {
    return (
        <>
            <section className="politique-confidentialite">
                <Pagetitle title="Politique de confidentialit√©" />
                <FadeInOut x={-20} delay={1.8}>
                    Politique de confidentialit√©
                </FadeInOut>
            </section>
        </>
    )
}

export default Politiqueconfidentialite
