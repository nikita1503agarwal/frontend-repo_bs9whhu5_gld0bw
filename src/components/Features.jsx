import { QrCode, LineChart, Share2, ShieldCheck } from "lucide-react";

const items = [
  {
    icon: QrCode,
    title: "QR Code d'ingresso",
    desc: "Ogni registrazione genera un QR unico, sicuro e veloce al controllo.",
  },
  {
    icon: Share2,
    title: "Link PR tracciabili",
    desc: "I PR possono condividere link personalizzati e vedere le conversioni.",
  },
  {
    icon: LineChart,
    title: "Dashboard e analytics",
    desc: "Statistiche su partecipanti, PR performanti e conversioni in tempo reale.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy e ruoli",
    desc: "Dati sensibili protetti, accessi basati su ruoli: Admin, PR, Clienti.",
  },
];

export default function Features() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-14">
        <h2 className="text-2xl md:text-3xl font-semibold">Perché TicketEnter</h2>
        <p className="mt-2 text-white/70 max-w-2xl">
          Un'esperienza fluida per tutti: scopri eventi, gestisci liste, misura risultati. Pronto per web e mobile.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                <it.icon size={18} />
              </div>
              <h3 className="mt-3 font-semibold">{it.title}</h3>
              <p className="mt-1 text-sm text-white/70">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
