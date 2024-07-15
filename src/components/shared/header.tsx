"use client"
import Image from "next/image";
import Logo from "../../../public/logo.png"
import Link from "next/link";
import searchStore from "@/lib/stores/searchStore";

const styles = {
    header: "flex justify-between items-center w-full h-16 text-white bg-slate-800 px-10 shadow-xl",
    nav: "flex justify-center items-center h-full",
    navWrapper: "flex items-center gap-5 px-5 ",
    navItem: "text-md hover:opacity-80",
    connect: "bg-blue-500 px-5 py-2 items-center gap-5 text-sm rounded",
    inputWrapper: "flex justify-center items-center bg-slate-500 rounded-md",
    input:"text-sm bg-transparent outline-none",
};

const Header = () => {
    const store = searchStore()
    
    return (
        <div className={styles.header}>
            <div className="flex items-center gap-5">
                <Image src={Logo} alt="logo" width={180} height={150} />
                <nav className={styles.nav}>
                    <ul className={styles.navWrapper}>
                        <li className={styles.navItem}>
                            <Link href="/feed">Datafeed</Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="/market">Market</Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="/swap">Swap</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={styles.connect}>
            <input className='text-black border-black' type="text" value={store.query} onChange={store.setQuery}/>
                Connect Wallet
            </div>
        </div>
    );
};

export default Header;