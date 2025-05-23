import React from "react";
import Header from "../components/Header/Header";
import BannerSobre from "../components/BannerSobre/BannerSobre";
import NossosValores from "../components/NossosValores/NossosValores";
import InstitucionalInfo from "../components/Institucional/InstitucionalInfo";
import Footer from "../components/Footer/Footer";

const SobreNos = () => {
    return(
        <>
            <Header />
            <BannerSobre />
            <NossosValores />
            <InstitucionalInfo />
            <Footer />
        </>
    );
};

export default SobreNos;