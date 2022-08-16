import React from 'react';
import './Layout.css';
import Footer from '../Footer/Footer.js';
import Sidebar from '../Sidebar/Sidebar.js';

const Layout = ({children}) => {
     return (
           <div className="Layout">
           <Sidebar />
           {children}
           <Footer />
           </div>
    );
}
export default Layout;