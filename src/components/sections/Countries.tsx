import Image from 'next/image';

const countries = [
  { 
    name: 'Viet Nam', 
    img: '/assets/flags/vietnam.png',
    textColor: 'text-white'
  },
  { 
    name: 'Indonesia', 
    img: '/assets/flags/indonesia.png',
    textColor: 'text-white'
  },
  { 
    name: 'Brazil', 
    img: '/assets/flags/brazil.png',
    textColor: 'text-white'
  },
];

export default function Countries() {
  return (
    <section className="bg-black py-24 px-6 md:px-20">
      <div className="container mx-auto">
        {/* Tiêu đề chính  */}
        <h2 className="text-4xl md:text-6xl font-bold text-white text-center mb-16 tracking-tight">
          Overlix được sử dụng trên nhiều quốc gia.
        </h2>

        {/* Lưới 3 lá cờ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {countries.map((country) => (
            <div 
              key={country.name}
              className="relative h-[400px] rounded-[2.5rem] overflow-hidden group cursor-pointer transition-transform duration-500 hover:scale-[1.02]"
            >
              {/* Ảnh lá cờ - Phủ kín khung */}
              <Image
                src={country.img}
                alt={`Overlix in ${country.name}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              <div className="absolute bottom-10 left-10">
                <p className="text-lg font-medium text-gray-300 opacity-90 mb-1">
                  Overlix in
                </p>
                <h3 className="text-2xl font-bold text-white uppercase tracking-wide">
                  {country.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}