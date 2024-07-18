import Link from "next/link"
import { FaDiscord, FaFacebook, FaInstagram, FaLinkedin, FaReddit, FaTelegram, FaXTwitter, FaYoutube } from "react-icons/fa6";

const Social = () => {
  return (
    <div className='flex gap-5'>
        <Link href="/">
            <FaXTwitter className="size-7 hover:text-blue-400"/>
        </Link>
        <Link href="/">
            <FaInstagram className="size-7 hover:text-blue-400"/>
        </Link>
        <Link href="/">
            <FaTelegram className="size-7 hover:text-blue-400"/>
        </Link>
        <Link href="/">
            <FaDiscord className="size-7 hover:text-blue-400"/>
        </Link>
        <Link href="/">
            <FaReddit className="size-7 hover:text-blue-400"/>
        </Link>
        <Link href="/">
            <FaFacebook className="size-7 hover:text-blue-400"/>
        </Link>
        <Link href="/">
            <FaLinkedin className="size-7 hover:text-blue-400"/>
        </Link>
        <Link href="/">
            <FaYoutube className="size-7 hover:text-blue-400"/>
        </Link>
    </div>
  )
}

export default Social