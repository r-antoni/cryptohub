"use client"
import Image from "next/image";
import Logo from "../../public/logo.png"
import Link from "next/link";
import Searchbar from "./searchbar";
import Nav from "./nav";
import { Button } from "./ui/button";
import { FaAlignRight } from "react-icons/fa6";



const Header = () => {
    return (
       <header className="flex justify-between items-center px-5 xl:px-10 h-16 w-full gap-5 xl:gap-0">
        <div className="flex items-center gap-8">
            <Link href="/">
                <Image src={Logo} alt="Cryptohub Logo" width={180} height={135}/>
            </Link>     
            <Nav />
        </div>
        <div className="flex items-center gap-10">
            <Searchbar />             
            <Button className="hidden xl:flex text-xs bg-blue-400 hover:bg-blue-500" size="sm">Connect Wallet</Button>  
        </div>
        <div className="xl:hidden">
            <FaAlignRight />
        </div>
       </header>
    );
};

export default Header;