import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="h-16 border-t text-white/60 border-white/10 p-3 mt-auto flex justify-around items-center">
      <span>Github profile</span>
      <ul className="flex gap-x-4">
        <li>
          <Link href="/terms-conditions">Terms & Conditions</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
