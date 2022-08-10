import React from 'react';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Sidebar from '../Sidebar/Sidebar.js';

const Layout = ({children}) => {
     return (
           <div className="Layout">
           <Header />
           <Sidebar />
           {children}
           <Footer />
           </div>
    );
}
export default Layout;