import React, { Component } from 'react';
import Header from './header';
import Footer from "./footer";

export default class Layout extends Component {
    render () {
        const { children } = this.props
        return (
            <div className='layout h-screen bg-black text-white'>
                <Header />
                {children}
                <Footer />
            </div>
        );
    }
}
