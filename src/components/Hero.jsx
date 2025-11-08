import Spline from '@splinetool/react-spline';
import { ArrowRight, Ticket } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] w-full bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zks9uYILDPSX-UX6/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* subtle vignette + gradient for legibility */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/80" />

      <div className="relative mx-auto max-w-6xl px-4 md:px-6 pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs tracking-wide uppercase">
            <Ticket size={14} />
            TicketEnter
          </div>
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-tight">
            L'ingresso al club, reinventato
          </h1>
          <p className="mt-4 text-white/80 md:text-lg">
            Scopri eventi vicino a te, registrati scegliendo un PR e ottieni un QR code unico per entrare. Pensato per Clienti, PR e Organizzatori.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#eventi" className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-5 py-3 font-medium hover:bg-white/90 transition-colors">
              Esplora Eventi <ArrowRight size={18} />
            </a>
            <a href="#pr" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 font-medium hover:bg-white/10 transition-colors">
              Diventa PR
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
