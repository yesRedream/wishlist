import React from 'react';
import Sidebar from '../Sidebar';
import Header from '../Header';
import Itemslist from '../Itemslist';

export default function Drawer() {
    return (
        <div>
            <Header/>
            <div className="main">
                <Sidebar/>
                <Itemslist/>
            </div>
        </div>
    );
}