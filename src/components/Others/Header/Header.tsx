import { motion } from "framer-motion";
import { MobileNav } from "../Nav/MobileNav";
import Nav from "../Nav/Nav";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed top-0 left-0 w-full z-50 transition-all bg-header"
    >
      <div className="md:py-10 py-2" />
      <div className="hidden md:block">
        <Nav />
      </div>
      <div className="flex md:hidden items-center justify-center mb-2">
        <MobileNav />
      </div>
      <div className="w-full h-3 bg-pattern border border-black" />
    </motion.header>
  );
}

export default Header;
