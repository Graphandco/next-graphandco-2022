import { FaPaintBrush, FaLock, FaMobileAlt } from "react-icons/fa"
import FadeIn from "../animation/FadeIn"
import { gsap } from "gsap"
import useIsomorphicLayoutEffect from "../animation/useIsomorphicLayoutEffect"

const PrestationsPack = ({ title, details }) => {
    useIsomorphicLayoutEffect(() => {
        gsap.to(".prestations__pack", {
            x: 0,
            y: -70,
            opacity: 1,
            duration: 0.5,
            ease: "power4.out",
            stagger: 0.2,
            delay: 3.5,
        })
    }, [])

    return (
        <div className="prestations__pack">
            <h2>{title}</h2>
            <ul>
                {details.map((detail) => (
                    <li key={detail}>{detail}</li>
                ))}
            </ul>
            <div className="prestations__pack__include">
                <div className="prestations__pack__include__item">
                    <FaLock /> Site sécurisé
                </div>
                <div className="prestations__pack__include__item">
                    <FaMobileAlt /> Adapté pour tablettes et smartphones
                </div>
                <div className="prestations__pack__include__item">
                    <FaPaintBrush /> Contenus éditables facilement
                </div>
            </div>
        </div>
    )
}

export default PrestationsPack
