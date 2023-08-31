import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-urbanist leading-normal text-slate-gray text-lg hover:text-coral-red focus:text-coral-red active:text-coral-red"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-2 text-lg leading-normal font-medium font-urbanist max-lg:hidden wide:mr-24">
          <a href="/" className="hover:text-coral-red">
            Sign in
          </a>
          <span>/</span>
          <a href="/" className="hover:text-coral-red">
            Explore now
          </a>
        </div>
        <div className="lg:hidden">
          <img src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
