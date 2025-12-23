import React from "react";
import Nav from "../../Components/Nav/Nav";
import Hero from "./Hero/Hero";
import Mission from "./Mission/Mission";
import Features from "./Features/Features";
import Team from "./Team/Team";
import Stack from "./Stack/Stack";
import Footer from "../../Components/Footer/Footer";

function AboutUs() {
    return (
        <div>
            <Nav />
            <Hero />
            <Mission />
            <Features />
            <Team />
            <Stack />
            <Footer />
        </div>
    )
}
export default AboutUs;