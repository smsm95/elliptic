import React from "react";
import Link from "next/link";

const NavMenu = () => {
  return (
    <ul className="main-menu__links">
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/#about">
          <a>About</a>
        </Link>
      </li>
      {/* <li>
        <Link href="/#vision">
          <a>Vision</a>
        </Link>
      </li> */}
      <li>
        <Link href="/#services">
          <a>Services</a>
        </Link>
      </li>

      <li>
        <Link href="/#team">
          <a>Team</a>
        </Link>
      </li>

      <li>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </li>
    </ul>
  );
};

export default NavMenu;
