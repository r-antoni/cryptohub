import Image from "next/image"
import Social from "./social"
import Logo from "../../public/logo.png"
import Link from "next/link"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


const Footer = () => {
  return (
    <footer className="">
      {/* Social */}
      <section className="flex flex-col justify-center items-center gap-5">
         <h3>Stay in Touch</h3> 
         <Social />
      </section>
      {/* Footer */}
      <section className="flex justify-center items-start gap-40">
        <div className="">
          <Image src={Logo} alt="CryptoHub Logo" width={180} height={150} />
          <p className="w-[400px] pl-4 text-sm">CoinGecko provides a fundamental analysis of the crypto market. In addition to tracking price, volume and market capitalisation, CoinGecko tracks community growth, open-source code development, major events and on-chain metrics.</p>
        </div>
        <div className="flex flex-col">
          <h3>About CryptoHub</h3>
          <Link href="/">About Us</Link>
          <Link href="/">Company Blog</Link>
          <Link href="/">Careers</Link>
          <Link href="/">Disclaimer</Link>
          <Link href="/">Terms of Service</Link>
          <Link href="/">Privacy Policy</Link>
        </div>
        <div className="flex flex-col">
          <h3>Support</h3>
          <Link href="/">Request Form</Link>
          <Link href="/">Help Center</Link>
          <Link href="/">Bug Bounty</Link>
          <Link href="/">FAQ</Link>
        </div>
        <div>
            <h3>Donations</h3>
            <Popover>
              <PopoverTrigger>Bitcoin</PopoverTrigger>
              <PopoverContent>
                <span>Donate Bitcoin</span>
                <Image src={Logo} alt=""/>
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger>Ethereum</PopoverTrigger>
              <PopoverContent>
                <span>Donate Bitcoin</span>
                <Image src={Logo} alt=""/>
              </PopoverContent>
            </Popover>
          </div>
      </section>
    </footer>
  )
}

export default Footer