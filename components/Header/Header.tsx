"use client";

import { links } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import "./Header.scss";

function Header() {
  return (
    <header>
      <motion.div
        className="header__background"
        initial={{ y: -100, opacity: 0, x: "-50%" }}
        animate={{ y: 0, opacity: 1, x: "-50%" }}
      >
        <nav>
          <ul>
            {links.map((link) => (
              <motion.li key={link.hash} initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
                <Link className="link transition" href={link.hash}>
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
}

export default Header;
