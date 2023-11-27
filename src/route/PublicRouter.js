import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PublicLayout from '@/pages/Public/PublicLayout';
import NotFound from '@/pages/NotFound';

const PublicRouter = () => {
    return (
        <div>
            <Routes>      
                <Route path="/" element={<PublicLayout/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </div>
    );
};

export default PublicRouter;