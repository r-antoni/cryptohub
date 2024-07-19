import Image from "next/image"
import Social from "./social"
import Logo from "../../public/logo.png"
import Link from "next/link"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Separator } from "./ui/separator"


const Footer = () => {
  return (
    <footer className="flex flex-col">
      {/* Social */}
      <section className="flex flex-col justify-center items-center gap-5 py-5">
         <h3 className="font-semibold">Stay in Touch</h3> 
         <Social />
      </section>
      <Separator />
      {/* Footer */}
      <section className="flex flex-col xl:flex-row justify-center items-start gap-5 xl:gap-40 py-5">
        <div className="">
          <Image src={Logo} alt="CryptoHub Logo" width={180} height={150} />
          <p className="w-[400px] pl-4 text-sm text-slate-500">
            CryptoHub provides a fundamental analysis of the crypto market. In addition to tracking price, 
            volume and market capitalisation, Cryptohub tracks community growth, 
            open-source code development, major events and on-chain metrics.</p>
        </div>
        
        <div className="font-medium pt-3">
          <h3>About Crypto<span className="text-blue-400">Hub</span></h3>
          <Separator />
          <div className="flex flex-col text-sm text-slate-600 pt-3 gap-2">
            <Link href="/">About Us</Link>
            <Link href="/">Company Blog</Link>
            <Link href="/">Careers</Link>
            <Link href="/">Disclaimer</Link>
            <Link href="/">Terms of Service</Link>
            <Link href="/">Privacy Policy</Link>
          </div>       
        </div>
        
        <div className="font-medium pt-3">
          <h3>Support</h3>
          <Separator />
          <div className="flex flex-col text-sm text-slate-600 pt-3 gap-2">
            <Link href="/">Request Form</Link>
            <Link href="/">Help Center</Link>
            <Link href="/">Bug Bounty</Link>
            <Link href="/">FAQ</Link>
          </div>
        </div>
        
        <div className="font-medium pt-3">
            <h3>Donations</h3>
            <Separator />
            <div className="flex flex-col items-start text-sm text-slate-600 gap-2 pt-3">
              <Popover >
              <PopoverTrigger>Bitcoin</PopoverTrigger>
              <PopoverContent>
                <span>Donate Bitcoin</span>
                <Image src={Logo} alt=""/>
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger>Ethereum</PopoverTrigger>
              <PopoverContent>
                <span>Donate Ethereum</span>
                <Image src={Logo} alt=""/>
              </PopoverContent>
            </Popover>
            </div>
            
          </div>
      </section>
    </footer>
  )
}

export default Footer