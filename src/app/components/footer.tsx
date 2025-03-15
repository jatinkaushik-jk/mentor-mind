import {
  Facebook,
  Instagram,
  Linkedin,
  Twitch,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full p-6 px-10 mt-4 bg-accent space-y-4">
      <div className="upperSection flex flex-col sm:flex-row justify-between items-center gap-x-4 py-6 flex-wrap gap-y-12">
        <div className="logo">
          <span className="text-4xl font-bold text-nowrap text-gray-800 dark:text-gray-100">
            <Image
              src="/logo-ltr-dark.png"
              alt="logo"
              width={220}
              height={50}
              className="aspect-auto "
            />
          </span>
        </div>
        <div className="fLinks flex lg:flex-row flex-wrap flex-col gap-y-6">
          <ul className="grid sm:grid-cols-2  space-y-2 lg:pr-8">
            <li>Home</li>
            <li>About</li>
            <li>Features</li>
            <li>Getting Started</li>
          </ul>
          <ul className="grid sm:grid-cols-3 lg:border-l-2 lg:pl-8 space-y-2 space-x-4">
            <li>Careers</li>
            <li>Hackathon</li>
            <li>Documentation</li>
            <li>Blogs</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="lowerSection flex flex-row justify-between items-center flex-wrap-reverse gap-y-4">
        <div className="text-sm text-balance">
          © Mentor Mind 2025 | All Rights Reserved
        </div>
        <div className="socials flex flex-row gap-x-4 flex-wrap gap-y-2">
          <Twitter />
          <Facebook />
          <Instagram />
          <Youtube />
          <Linkedin />
          <Twitch />
        </div>
      </div>
    </div>
  );
};

export default Footer;
