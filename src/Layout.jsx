import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>

    );
}

export default Layout;
// this Layout.jsx file is also known as Root.jsx.