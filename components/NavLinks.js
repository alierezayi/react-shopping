import Link from "next/link";

const NavLinks = ({ navItems }) => {
  return (
    <ul className="hidden lg:flex items-center justify-center space-x-12">
      {navItems.map((item) => (
        <li
          key={item.href}
          className="hover:text-indigo-500 transition"
        >
          <Link href={item.href} className=" active:text-indigo-500" legacyBehavior>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
