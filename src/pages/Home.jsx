import React from "react";
import Header from "../components/Header/Header";
import PreFooter from "../components/PreFooter/PreFooter";
import Footer from "../components/Footer/Footer";
import BannerHome from "../components/BannerHome/BannerHome";
import ComoFunciona from "../components/ComoFunciona/ComoFunciona";
import ConecteSe from "../components/ConecteSe/ConecteSe";

export default function Home() {
    return (
        <>
            <Header />
            <BannerHome />
            <ComoFunciona />
            <ConecteSe />
           

            <PreFooter />
            <Footer />
        </>
    );
}