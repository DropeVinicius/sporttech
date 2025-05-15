import React from "react";
import Header from "../components/Header/Header";
import BannerPrats from "../components/BannerAlunosPrat/BannerPrats";
import BeneficiosPrat from "../components/BeneficiosPrat/BeneficiosPrat";
import ImpactoPrat from "../components/ImpactoPrat/ImpactoPrat"
import PreFooter from "../components/PreFooter/PreFooter";
import Footer from "../components/Footer/Footer";

const AlunosPrat = () => {
    return (
        <>
            <Header />
            <BannerPrats />
            <BeneficiosPrat />
            <ImpactoPrat />
            <PreFooter />
            <Footer />
        </>
    );
};

export default AlunosPrat;