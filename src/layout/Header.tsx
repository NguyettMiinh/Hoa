import { useEffect, useState } from 'react';
function HeaderCommon() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
       <header className={`flex flex-col gap-0 bg-white w-full sticky top-0 left-0 z-[100]
        transition-transform duration-300 ${isScrolled ? '-translate-y-[40px]' : ""}`}>
            <div className="bg-white h-[40px]"></div>
            <div className="bg-brand-darkRed h-[40px]"></div>
        </header>
    )
}

export default HeaderCommon;