import Link from "next/link"
import { Flex, Box, Text, Button, Image, Link as A } from "theme-ui"
import FadeIn from "../animation/FadeIn"
import FadeInOut from "../animation/FadeInOut"
import FlyInOut from "../animation/FlyInOut"
import ScaleInOut from "../animation/ScaleInOut"
import { GiMuscleUp } from "react-icons/gi"
import { IoIosRocket } from "react-icons/io"

const Prestations = () => (
    <section className="prestations">
        <div className="prestations__hero container">
            <FadeIn
                className="prestations__title"
                duration={0.5}
                y={1200}
                delay={0.5}
            >
                <h1>
                    <FlyInOut x={-500} delay={0.6}>
                        <span>Découvrez</span>
                    </FlyInOut>
                    <FlyInOut x={-500} delay={0.7}>
                        <span>Nos</span>
                    </FlyInOut>
                    <FlyInOut x={-500} delay={0.8}>
                        <span>Offres</span>
                    </FlyInOut>
                </h1>
            </FadeIn>
            <div className="prestations__lead">
                <FadeInOut x={-20} delay={2}>
                    <GiMuscleUp />
                </FadeInOut>
                <FadeInOut y={5} delay={2.25}>
                    <p>
                        Vous êtes novice en informatique ? Aucun problème, nous
                        vous montrons à quel point éditer votre site est un vrai
                        jeu d'enfant !
                    </p>
                </FadeInOut>
                <FadeInOut x={-20} delay={2.5}>
                    <IoIosRocket />
                </FadeInOut>
                <FadeInOut y={5} delay={2.75}>
                    <p>
                        Vous êtes un utilisateur aguerri ? Vous serez ravi du
                        niveau de personnalisation que le site vous propose.
                    </p>
                </FadeInOut>
            </div>
        </div>
    </section>
)

export default Prestations
