import { MapPin, Calendar, Clock, Users } from "lucide-react";

export default function EventCard({ cover, title, date, time, location, attendees }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-3 hover:bg-white/10 transition-colors">
      <div className="aspect-[16/9] w-full overflow-hidden rounded-xl">
        <img src={cover} alt={title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
      </div>
      <div className="mt-3 text-white">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="mt-2 grid grid-cols-2 gap-3 text-sm text-white/80">
          <div className="flex items-center gap-2"><Calendar size={16} /> {date}</div>
          <div className="flex items-center gap-2"><Clock size={16} /> {time}</div>
          <div className="flex items-center gap-2 col-span-2 sm:col-span-1"><MapPin size={16} /> {location}</div>
          <div className="flex items-center gap-2 justify-end sm:justify-start"><Users size={16} /> {attendees}+ in lista</div>
        </div>
        <button className="mt-3 w-full rounded-xl bg-white text-black py-2 font-medium hover:bg-white/90 transition-colors">Registrati</button>
      </div>
    </div>
  );
}
