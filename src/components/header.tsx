/*
 * Copyright (C), 2024 Team 3602. Some rights reserved. This work is
 * licensed under the terms of the MIT license which can be found in
 * the root directory of this project.
 */

import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown px-1">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li className="px-1"><Link href="/about">About</Link></li>
              <li className="px-1"><Link href="/">News</Link></li>
              <li className="px-1"><Link href="/">Sponsors</Link></li>
              <li className="px-1"><Link href="/">Events</Link></li>
              <li className="px-1"><Link href="/">Resources</Link></li>
            </ul>
          </div>
          <Link className="btn btn-ghost text-xl px-1" href={"/"}>Team 3602</Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="px-1"><Link href="/about">About</Link></li>
            <li className="px-1"><Link href="/">News</Link></li>
            <li className="px-1"><Link href="/">Sponsors</Link></li>
            <li className="px-1"><Link href="/">Events</Link></li>
            <li className="px-1"><Link href="/">Resources</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
}