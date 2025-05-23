import React from "react";
import Header from "../components/Header/Header";
import BannerGame from "../components/BannerGame/BannerGame";
import BeneficiosGame from "../components/BeneficiosGame/BeneficiosGame";
import ImpactoGame from "../components/ImpactoGame/ImpactoGame";
import PreFooterG from "../components/PreFooterG/PreFooterG";
import Footer from "../components/Footer/Footer";

const Gamificacao = () => {
    return(
        <>
            <Header />
            <BannerGame />
            <BeneficiosGame />
            <ImpactoGame />
            <PreFooterG />
            <Footer />
        </>
    );
};

export default Gamificacao;