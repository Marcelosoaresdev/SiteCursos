import React from 'react';

// Recebe os dados específicos desta seção via props
function DominationSection({ data }) {
  if (!data || !data.items) return null;

  return (
    <section className="text-white py-20 px-6">
      <div className="container mx-auto text-center">
        <h2 className="font-league text-6xl md:text-7xl uppercase mb-12">
          {data.title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {data.items.map((item, index) => (
            // A MUDANÇA PARA O EFEITO DE VIDRO ESTÁ AQUI
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 transition-all duration-300 hover:bg-white/20 hover:scale-105 shadow-lg"
            >
              <p className="font-ttnorms text-lg">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DominationSection;