import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DownloadPage from "./pages/DownloadPage";
import LoginAlunoPage from "./pages/LoginAlunoPage";
import LoginPraticantePage from "./pages/LoginPraticantePage";
import CadastroProfessor from "./pages/CadastroProfessor";
import CadastroAluno from "./pages/CadastroAluno";
import CadastroPraticante from "./pages/CadastroPraticante";
import Home from "./pages/Home";
import ProfessoresPage from "./pages/ProfessoresPage";
import AlunosPrat from "./pages/AlunosPrat";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/professores" element={<ProfessoresPage/>} />
                <Route path="/alunos-praticantes" element={<AlunosPrat/>} />
                <Route path="/cadastro-professor" element={<CadastroProfessor />} />
                <Route path="/cadastro-praticante" element={<CadastroPraticante />} />
                <Route path="/cadastro-aluno" element={<CadastroAluno />} />
                <Route path="/download" element={<DownloadPage />} />
                <Route path="/login-aluno" element={<LoginAlunoPage />} />
                <Route path="/login-praticante" element={<LoginPraticantePage />} />
            </Routes>
        </Router>
    );
}

export default App;