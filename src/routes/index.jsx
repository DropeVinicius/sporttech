import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DownloadPage from '../pages/DownloadPage';

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<DownloadPage />} />
                {/* outras rotas futuras */}
            </Routes>
        </Router>
    );
}

export default AppRoutes;