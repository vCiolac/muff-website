import { MobileNav } from "../Nav/MobileNav";
import Nav from "../Nav/Nav";

const Header = () => {
  return (
    <header
      className="fixed top-0 left-0 w-full z-10 transition-all bg-header">
      <div className="py-10" />
      <Nav />
      <div className="flex md:hidden" >
        <MobileNav />
      </div>
      <div className="w-full h-3 bg-pattern border border-black"></div>
    </header>
  )
}

export default Header
