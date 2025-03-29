import Image from "next/image";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navItems = [
  { name: "Home", link: "https://igift.ph" },
  { name: "Centers", link: "/" },
  { name: "Guidelines", link: "/guidelines" },
  { name: "Book a Discovery Call", link: "/discovery-call" }
];

const NavBar = () => {
  return (
    <header className="w-full dark:bg-transparent border-b-transparent mb-8">
      <div className="wrapper flex items-center justify-between py-4 px-6">
        {/* Logo Section */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo.svg" 
            alt={`${APP_NAME} logo`} 
            height={48}
            width={48}
            priority={true}
          />
        </Link>

        {/* Desktop Navigation Bar */}
        <nav className="flex-1 hidden justify-center lg:flex">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.link}>
                <Link href={item.link} className="text-gray-200 hover:text-primary uppercase font-semibold text-xl ">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <SheetTrigger asChild>
              <button className="p-2 rounded-md text-gray-800 dark:text-gray-200">
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent className="w-full bg-black text-white p-4">
              <div className="flex flex-col space-y-4 mt-4">
                {navItems.map((item) => (
                  <Link key={item.link} href={item.link} className="text-2xl uppercase font-medium text-gray-800 dark:text-gray-200 hover:text-primary">
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
