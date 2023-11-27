import React from 'react';
import Navbar from '@/components/Public/Navbar';

import Portfolio from '@/pages/Public/Portfolio';
import Contact from '@/pages/Public/Contact';
import Home from '@/pages/Public/Home';
import Knowledges from '@/pages/Public/Knowledges';
import About from '@/pages/Public/About';

import '@/assets/bootstrap/bootstrap.min.css'

import '@/assets/pages/Public/base.css'

const PublicLayout = () => {
    return (
        <div className='Layout'>
            <Navbar/>

            <div className='content'>
                <Home/>
                <Knowledges/>
                <Portfolio/>
                <About/>
                <Contact/>
            </div>
        </div>
    );
};

export default PublicLayout;