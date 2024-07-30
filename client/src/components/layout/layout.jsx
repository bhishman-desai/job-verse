import React, { Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './footer';
import { Flex, Spinner } from '@chakra-ui/react';
import ChatWidget from '../ChatWidget';

const Layout = ({ children }) => {
    const location = useLocation();
    const navNotRequired = ['/login', '/password', '/register', '/recovery', '/reset'];
    const currentPath = location.pathname;

    return (
        <div className="min-h-screen flex flex-col">
            {!navNotRequired.includes(currentPath) && <Navbar />}
            <main className="flex-grow">
                <Suspense fallback={
                    <Flex align="center" justify="center" w="100" h="100">
                        <Spinner size="xl" />
                    </Flex>
                }>
                    {children}
                    <ChatWidget />
                </Suspense>
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
