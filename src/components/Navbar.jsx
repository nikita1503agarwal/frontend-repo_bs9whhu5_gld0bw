import { Menu, Ticket, User } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const NavLinks = () => (
    <ul className="flex flex-col gap-4 p-4 md:p-0 md:flex-row md:items-center text-sm">
      <li>
        <a href="#eventi" className="hover:opacity-80 transition-opacity">Eventi</a>
      </li>
      <li>
        <a href="#pr" className="hover:opacity-80 transition-opacity">PR</a>
      </li>
      <li>
        <a href="#organizzatori" className="hover:opacity-80 transition-opacity">Organizzatori</a>
      </li>
      <li className="md:ml-2">
        <button className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 hover:bg-white/10 transition-colors">
          <User size={16} />
          Accedi
        </button>
      </li>
    </ul>
  );

  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
      <nav className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex items-center justify-between py-3 text-white">
          <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-white text-black">
              <Ticket size={18} />
            </div>
            <span>TicketEnter</span>
          </a>
          <div className="hidden md:block">
            <NavLinks />
          </div>
          <button
            aria-label="Toggle menu"
            className="md:hidden inline-flex items-center justify-center rounded-md border border-white/20 p-2"
            onClick={() => setOpen((v) => !v)}
          >
            <Menu />
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-white/10 text-white">
            <NavLinks />
          </div>
        )}
      </nav>
    </header>
  );
}
