import EventCard from "./EventCard";

const mockEvents = [
  {
    cover:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2070&auto=format&fit=crop",
    title: "Warehouse Techno Night",
    date: "Sab 23 Nov",
    time: "23:30 – 05:00",
    location: "Zona Navigli, Milano",
    attendees: 268,
  },
  {
    cover:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2070&auto=format&fit=crop",
    title: "House & Disco Fever",
    date: "Ven 29 Nov",
    time: "22:00 – 03:00",
    location: "San Salvario, Torino",
    attendees: 143,
  },
  {
    cover:
      "https://images.unsplash.com/photo-1464375117522-1311d6a5b81a?q=80&w=2070&auto=format&fit=crop",
    title: "Sunset Rooftop Session",
    date: "Dom 1 Dic",
    time: "18:30 – 00:00",
    location: "Rooftop Duomo, Firenze",
    attendees: 312,
  },
];

export default function EventsSection() {
  return (
    <section className="bg-black" id="eventi">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-12">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-semibold">Eventi in evidenza</h2>
          <a href="#" className="text-sm text-white/70 hover:text-white">
            Vedi tutti
          </a>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {mockEvents.map((e) => (
            <EventCard key={e.title} {...e} />
          ))}
        </div>
      </div>
    </section>
  );
}
