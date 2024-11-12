// import Link from "next/link";
// import { IoMenu } from "react-icons/io5";

// export default function Header(){
//     return(
//         <header className="header">
//             <div className="logo">
//                 <h2 > skin Bliss </h2>
//             </div>

    
//         <nav>
//             <ul className="navList" >
//                 <li> <Link href="/">Home</Link></li>
//                 <li> <Link href="/products">Products</Link></li>
//                 <li> <Link href="/contact">Contact</Link></li>
//                 <li> <Link href="/about">About</Link></li>
                
//             </ul>
//             <IoMenu />
//         </nav>
//         </header>
//     )
// }

 "use client"
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

export default function Header() {
  // State to toggle the navigation menu visibility on small screens
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="logo">
        <h2>Skin Bliss</h2>
      </div>

      <nav>
        <ul className={`navList ${menuOpen ? "open" : ""}`}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/products">Products</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/about">About</Link></li>
        </ul>
        <IoMenu className="hamburger" onClick={toggleMenu} />
      </nav>
    </header>
  );
}
