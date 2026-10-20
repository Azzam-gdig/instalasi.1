'use client';

import { useSearchParams, useRouter, usePathname } from 'next/navigation';

interface Event {
  id: number;
  title: string;
  type: 'free' | 'paid';
  price: string;
  date: string;
}

const EVENTS_DATA: Event[] = [
  { id: 1, title: 'Workshop React & Next.js', type: 'free', price: 'Gratis', date: '15 Okt 2026' },
  { id: 2, title: 'Masterclass Tailwind CSS', type: 'paid', price: 'Rp 150.000', date: '20 Okt 2026' },
  { id: 3, title: 'Webinar UI/UX Trends', type: 'free', price: 'Gratis', date: '25 Okt 2026' },
  { id: 4, title: 'Bootcamp Fullstack Developer', type: 'paid', price: 'Rp 500.000', date: '01 Nov 2026' },
];

export default function EventsPage() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Ambil tipe filter dari URL, default ke 'all' jika kosong
  const currentFilter = searchParams.get('type') || 'all';

  // Handler untuk mengubah query URL saat filter diklik
  const handleFilterChange = (filterType: string) => {
    const params = new URLSearchParams(searchParams);
    
    if (filterType === 'all') {
      params.delete('type');
    } else {
      params.set('type', filterType);
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  // Filter daftar event berdasarkan parameter yang dipilih
  const filteredEvents = EVENTS_DATA.filter((event) => {
    if (currentFilter === 'all') return true;
    return event.type === currentFilter;
  });

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Daftar Events</h1>

      {/* Tombol Filter */}
      <div className="flex gap-3 mb-8">
        {['all', 'free', 'paid'].map((type) => {
          const isActive = currentFilter === type;
          return (
            <button
              key={type}
              onClick={() => handleFilterChange(type)}
              className={`px-4 py-2 rounded-md font-medium capitalize transition-colors ${
                isActive
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {type === 'all' ? 'All Events' : type}
            </button>
          );
        })}
      </div>

      {/* Grid Daftar Event */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <div
              key={event.id}
              className="border rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow bg-white"
            >
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-xl font-semibold">{event.title}</h2>
                <span
                  className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                    event.type === 'free'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-purple-100 text-purple-800'
                  }`}
                >
                  {event.type.toUpperCase()}
                </span>
              </div>
              <p className="text-gray-500 text-sm mb-4">Tanggal: {event.date}</p>
              <div className="text-lg font-bold text-gray-900">{event.price}</div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 col-span-2">Tidak ada event yang ditemukan.</p>
        )}
      </div>
    </div>
  );
}