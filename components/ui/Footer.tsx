// In components/ui/Footer.tsx

import React from 'react';

function Footer() {
    return (
        <footer className="bg-transparent border-t border-neutral-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-base text-neutral-500 order-2 md:order-1 mt-8 md:mt-0">&copy; {new Date().getFullYear()} DUST THEORY. ALL RIGHTS RESERVED.</p>
                    <div className="flex space-x-6 order-1 md:order-2">
                        <a href="#" className="text-neutral-500 hover:text-neutral-900">X / Twitter</a>
                        <a href="#" className="text-neutral-500 hover:text-neutral-900">Instagram</a>
                        <a href="#" className="text-neutral-500 hover:text-neutral-900">Discord</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
