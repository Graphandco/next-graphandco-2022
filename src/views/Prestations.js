import Link from "next/link"
import { Flex, Box, Text, Button, Image, Link as A } from "theme-ui"
import FadeIn from "../animation/FadeIn"
import FadeInOut from "../animation/FadeInOut"
import FlyInOut from "../animation/FlyInOut"
import ScaleInOut from "../animation/ScaleInOut"
import { GiMuscleUp } from "react-icons/gi"
import { IoIosRocket } from "react-icons/io"
import PrestationsPack from "./PrestationsPack"

const Prestations = () => {
    const packs = [
        {
            id: 1,
            title: "Pack Starter",
            details: [
                "Vous gérez votre nom de domaine et votre hébergement",
                "Votre site est livré clé en main",
            ],
        },
        {
            id: 2,
            title: "Pack Medium",
            details: [
                "Gestion de votre nom de domaine et hébergement",
                "Maintenance permanente de votre site",
                "Modifications graphiques et techniques",
            ],
        },
        {
            id: 3,
            title: "Pack commerce",
            details: [
                "Pack Medium avec en plus :",
                "Vente en ligne avec panier et tunnel de commande",
                "Paiement en ligne et livraison / click and collect",
            ],
        },
        {
            id: 4,
            title: "Pack sur-mesure",
            details: [
                "Votre site sur mesure :",
                "Virtual DOM → un site rapide comme l'éclair !",
                "Applications mobiles, interfaces utilisateurs, bases de données (backend)...",
                "Et bien d'autres... !",
            ],
        },
    ]
    return (
        <>
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
                                Vous êtes novice en informatique ? Aucun
                                problème, nous vous montrons à quel point éditer
                                votre site est un vrai jeu d'enfant !
                            </p>
                        </FadeInOut>
                        <FadeInOut x={-20} delay={2.5}>
                            <IoIosRocket />
                        </FadeInOut>
                        <FadeInOut y={5} delay={2.75}>
                            <p>
                                Vous êtes un utilisateur aguerri ? Vous serez
                                ravi du niveau de personnalisation que le site
                                vous propose.
                            </p>
                        </FadeInOut>
                    </div>
                </div>
                <div className="prestations__content">
                    {packs.map((pack) => (
                        <PrestationsPack
                            key={pack.id}
                            title={pack.title}
                            details={pack.details}
                        />
                    ))}
                </div>
            </section>
        </>
    )
}

export default Prestations
