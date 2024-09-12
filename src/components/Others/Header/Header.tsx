import { MobileNav } from "../Nav/MobileNav";
import Nav from "../Nav/Nav";

const Header = () => {
  return (
    <header
      className="fixed top-0 left-0 w-full z-10 transition-all bg-header">
      <div className="md:py-10 py-2" />
      <div className="hidden md:block">
      <Nav />
      </div>
      <div className="flex md:hidden items-center justify-center mb-2" >
        <MobileNav />
      </div>
      <div className="w-full h-3 bg-pattern border border-black"></div>
    </header>
  )
}

export default Header
