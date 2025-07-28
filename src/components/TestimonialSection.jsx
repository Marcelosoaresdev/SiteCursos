import React from "react";
// A imagem otimizada que você já importou.
import profilePic from "../assets/flavia.png";

function TestimonialSection() {
  return (
    // 1. A seção agora tem um padding vertical generoso para dar "palco" para a imagem.
    // 2. Usamos flexbox para centralizar a imagem perfeitamente na horizontal e vertical.
    // 3. O overflow-hidden é uma boa prática caso a imagem precise de ajustes que causem transbordamento.
    <section className="w-full py-10 px-4 overflow-hidden flex justify-center items-center">
      {/* A IMAGEM:
        - w-full: Ocupa a largura disponível do seu container.
        - h-auto: Mantém a proporção da imagem para não distorcer.
        - max-w-4xl: É o segredo para a responsividade. Em telas pequenas, a imagem se ajusta.
          Em telas muito grandes (desktops, TVs), ela não fica GIGANTE a ponto de perder a qualidade
          ou o enquadramento, parando em um tamanho máximo elegante (aprox. 768px).
          Você pode ajustar este valor (ex: max-w-2xl ou max-w-4xl) para o tamanho que achar melhor.
      */}
      <img
        src={profilePic}
        alt="Foto de Flavia Cavalcante"
        className="w-full h-auto max-w-4xl"
      />
    </section>
  );
}

export default TestimonialSection;
