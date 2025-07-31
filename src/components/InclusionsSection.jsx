import React from 'react';

// 1. Adicione 'purchaseLink' às props
function InclusionsSection({ data, purchaseLink }) {
  if (!data || !data.items) return null;

  return (
    <section className=" text-white py-20 px-6">
      <div className="container mx-auto text-center max-w-3xl">
        <h2 className="font-league text-6xl md:text-7xl uppercase font-light mb-12">
          {data.title}
        </h2>
        <ul className="space-y-4 text-left font-ttnorms text-xl list-disc pl-6 mb-12">
          {data.items.map((item, index) => (
            <li
              key={index}
              dangerouslySetInnerHTML={{
                __html: item.replace("BÔNUS:", "<strong>BÔNUS:</strong>"),
              }}
            ></li>
          ))}
        </ul>

        {/* 2. Transforme o 'div' e 'button' em uma única tag 'a' */}
        <div className="mt-12 mb-8">
          <a
            href={purchaseLink}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group inline-block overflow-hidden font-ttnorms font-bold text-lg uppercase rounded-full px-8 py-4 
               text-white shadow-lg transition-all duration-300 hover:scale-105 active:scale-95
               bg-black/40 backdrop-blur-md border border-white/20 hover:bg-black/50 hover:border-white/40"
          >
            <span className="relative z-10">COMEÇAR MINHA TRANSFORMAÇÃO</span>

            {/* Brilho animado no hover */}
            <span
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/10 via-white/5 to-transparent opacity-0 
                 group-hover:opacity-20 transition-opacity duration-500 z-0"
            />
          </a>
        </div>

        <div className="font-ttnorms">
          <p className="text-xl line-through opacity-80">
            De {data.price.original} por
          </p>
          <p className="text-2xl my-2">{data.price.installments}</p>
          <div className="bg-red-500 text-white rounded-xl p-3 inline-block shadow-lg mt-2">
            <p className="font-bold text-4xl">{data.price.full} à vista</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InclusionsSection;