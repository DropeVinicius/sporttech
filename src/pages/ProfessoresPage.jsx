import React from "react";
import Header from "../components/Header/Header";
import BannerProf from "../components/BannerProfessores/BannerProf";
import BeneficiosProf from "../components/BeneficiosProf/BeneficiosProf";
import PreFooter from "../components/PreFooter/PreFooter";
import Footer from "../components/Footer/Footer";
import Impacto from "../components/Impacto/Impacto";

const ProfessoresPage = () => {
    return(
        <>
            <Header />
            <BannerProf />
            <BeneficiosProf />
            <Impacto />
            <PreFooter />
            <Footer />
        </>
    );
};

export default ProfessoresPage;
