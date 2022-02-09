import Link from "next/link"
import { Flex, Box, Text, Button, Link as A } from "theme-ui"
import GridTile from "../ui/GridTile"
import Image from "next/image"
import GridTile2 from "../ui/Gridtile2"
import { useWindowSize } from "../hooks/useWindowSize"

const Realisations = () => {
    const responsive = useWindowSize()

    return (
        <>
            <div className="header-section container">
                <h1>Nos réalisations</h1>
            </div>
            <section className="realisations__grid">
                <GridTile2 bg="var(--color1)">
                    <Image
                        className="op5"
                        src="/img/icons/arrow_upward_24dp.svg"
                        width={48}
                        height={48}
                    />
                </GridTile2>
                <GridTile2 bg="var(--color2)">
                    <Text
                        as="p"
                        sx={{
                            fontWeight: 900,
                            fontSize: [2, 3],
                            textAlign: "center",
                            px: 3,
                            maxWidth: "200px",
                            mx: "auto",
                            lineHeight: 1.3,
                        }}
                    >
                        Created by Graph and Co
                    </Text>
                </GridTile2>
                <GridTile2 bg="var(--color3)">
                    <Text
                        sx={{
                            fontWeight: 900,
                            fontSize: [1, 2],
                            textAlign: "center",
                            px: 3,
                        }}
                    >
                        from Chicago
                    </Text>
                </GridTile2>

                <GridTile2 bg="var(--color1)">
                    <Image
                        className="op5"
                        width={48}
                        height={48}
                        src="/img/icons/auto_awesome_24dp.svg"
                    />
                </GridTile2>

                <GridTile2 bg="var(--color4)">
                    <Image
                        className="op5"
                        width={48}
                        height={48}
                        src="/img/icons/code_24dp.svg"
                    />
                </GridTile2>
                <GridTile2 bg="var(--color3)">
                    <Image
                        className="op5"
                        width={48}
                        height={48}
                        src="/img/icons/emoji_events_24dp.svg"
                    />
                </GridTile2>

                <GridTile2 bg="var(--color4)">
                    <Image
                        className="op5"
                        width={48}
                        height={48}
                        src="/img/icons/lightbulb_24dp.svg"
                    />
                </GridTile2>
                <GridTile2 bg="var(--color2)">
                    <Image
                        className="op5"
                        width={48}
                        height={48}
                        src="/img/icons/phone_android_24dp.svg"
                    />
                </GridTile2>
                <GridTile2 bg="var(--color2)">
                    <Text sx={{ display: ["none", "inline"] }}>follow </Text>
                    <A
                        sx={{
                            fontWeight: 600,
                            fontSize: ["14px", 0, 1],
                            color: "greenyellow",
                            ml: 2,
                        }}
                        href="https://twitter.com/johnpolacek"
                    >
                        @johnpolacek
                    </A>
                </GridTile2>
                <GridTile2 bg="var(--color1)">
                    <Image
                        className="op5"
                        width={40}
                        height={40}
                        src="/img/icons/thumb_up_24dp.svg"
                    />
                </GridTile2>
                <GridTile2 bg="var(--color3)">
                    <Image
                        className="op5"
                        width={48}
                        height={48}
                        src="/img/icons/trending_up_24dp.svg"
                    />
                </GridTile2>
                <GridTile2 bg="var(--color1)">
                    <A
                        sx={{
                            mx: 2,
                            fontWeight: 600,
                            fontSize: ["12px", 0, 1, 3],
                            color: "white",
                        }}
                        href="https://johnpolacek.com"
                    >
                        johnpolacek.com
                    </A>
                </GridTile2>
                <GridTile2 bg="var(--color2)">
                    <Image
                        className="op5"
                        width={48}
                        height={48}
                        src="/img/icons/emoji_people_24dp.svg"
                    />
                </GridTile2>
                <GridTile2 bg="var(--color4)" display={["none", "flex"]}>
                    <Image
                        className="op5"
                        width={48}
                        height={48}
                        src="/img/icons/workspace_premium_24dp.svg"
                    />
                </GridTile2>
                <GridTile2 bg="var(--color3)">
                    <Link href="/docs" passHref={true}>
                        <A
                            sx={{
                                textDecoration: "none",
                                width: "auto",
                            }}
                        >
                            <Button
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    ml: ["auto", "auto", "auto", 0],
                                    mr: ["auto", "auto", "auto", 0],
                                    mb: 3,
                                    fontSize: [0, 1, 2],
                                    fontWeight: 600,
                                    p: 3,
                                    width: ["100px", "120px", "160px"],
                                    display: "flex",
                                    justifyContent: "center",
                                    background: "rgba(0,0,0,.25)",
                                    color: "white",
                                }}
                            >
                                {/* <Image
                                width="24"
                                height="24"
                                sx={{
                                    ml: [-2, -3, -2],
                                    mr: [2, 3, 2],
                                    width: ["18px", "24px"],
                                }}
                                src="/img/double-right-white.svg"
                            /> */}
                                docs
                            </Button>
                        </A>
                    </Link>
                </GridTile2>
                <GridTile2 bg="var(--color2)">
                    <Image
                        className="op5"
                        width={48}
                        height={48}
                        src="/img/icons/grade_24dp.svg"
                    />
                </GridTile2>
                <GridTile2 bg="var(--color4)">
                    <Image
                        className="op5"
                        width={48}
                        height={48}
                        src="/img/icons/cloud_done_24dp.svg"
                    />
                </GridTile2>
                <GridTile2 bg="var(--color4)">
                    <A
                        sx={{
                            mx: 2,
                            fontSize: ["12px", 0, 1],
                            fontWeight: 600,
                            color: "rgba(0,0,0,75)",
                        }}
                        href="https://github.com/johnpolacek"
                    >
                        <Text sx={{ display: ["inline", "none"] }} as="span">
                            on{" "}
                        </Text>
                        github
                        <Text sx={{ display: ["none", "inline"] }} as="span">
                            .com/johnpolacek
                        </Text>
                    </A>
                </GridTile2>
                <GridTile2 bg="var(--color1)">
                    <Image
                        className="op5"
                        width={48}
                        height={48}
                        src="/img/icons/computer_24dp.svg"
                    />
                </GridTile2>
                <GridTile2 display={["none", "flex"]} bg="var(--color2)">
                    <Image
                        className="op5"
                        width={48}
                        height={48}
                        src="/img/icons/bolt_24dp.svg"
                    />
                </GridTile2>
            </section>
        </>
    )
}

export default Realisations
