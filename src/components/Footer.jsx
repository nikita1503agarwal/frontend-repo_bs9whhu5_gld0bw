export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-white/60">© {new Date().getFullYear()} TicketEnter. Tutti i diritti riservati.</p>
        <div className="flex items-center gap-4 text-sm text-white/70">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Termini</a>
          <a href="#" className="hover:text-white">Contatti</a>
        </div>
      </div>
    </footer>
  );
}
