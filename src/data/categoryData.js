// Importações de imagens que serão usadas nas páginas
import runnersImage from "../assets-webp/corrida.webp";
import flaviaThumbnail from "../assets-webp/flavia.webp"; // ⚠️
import videoBgPattern from "../assets/arvoreVitis.png";

import comboProductsImage from "../assets-webp/corrida.webp"; // Imagem do combo de produtos
// Use o thumbnail da Flavia aqui
// Importe aqui as imagens para as outras categorias no futuro
// import financeImage from '../assets-webp/financeiro.webp';

// ==================================================================
// 1. DADOS PARA AS PÁGINAS DE CATEGORIA
// ==================================================================
export const categories = [
  {
    slug: "saude-fisica",
    title: "Saúde Física",
    subtitle: "A Jornada Definitiva: Do Primeiro Passo ao Pódio",
    heroImage: runnersImage,
    gradient:
      "bg-[linear-gradient(135deg,_#d5f5ff,_#a9ebff,_#49d4ff,_#13b8eb)]",
    titleColor1: "text-[#203162]",
    titleColor2: "text-[#00afdb]",
    subtitleColor: "text-[#323232]",
    coursesBackgroundColor:
      "bg-[linear-gradient(135deg,_#d5f5ff,_#a9ebff,_#49d4ff,_#13b8eb)]",
    videoTestimonial: {
      text: "Essa jornada te leva do primeiro passo até você se tornar aquela pessoa que outros admiram, um exemplo para vários. Descubra como transformar a corrida (e qualquer exercício) no seu superpoder pessoal.",
      background: videoBgPattern,
      videoId: "YpDqsoXhA7U", // 👈 COLOQUE AQUI O ID DO VÍDEO DO YOUTUBE
    },

    finalCta: {
      title: "A Transformação Completa:",
      mainParagraph:
        "Quando esses cursos trabalham juntos, algo mágico acontece. Os hábitos que você constrói se tornam a fundação para correr. A corrida se torna seu portal para performance física máxima e clareza mental – o mesmo estado focado que impulsiona sucesso nos negócios, relacionamentos e vida. No final, você não está apenas em forma – você está operando em um nível completamente diferente de potencial humano. É assim que pessoas comuns se tornam extraordinárias.",
      price: {
        original: "R$675,00",
        installments: "R$58,95*",
        full: "R$570,00",
      },
      productImage: comboProductsImage,
      bonusParagraph:
        "Ao garantir o Pacote Completo da Transformação da Saúde você recebe acesso aos três cursos do programa e ainda leva gratuitamente um e-book e um caderno de exercícios especial, escrito por Flávia Cavalcante.",
      buttonText: "QUERO GARANTIR O PACOTE",
      gradient: "bg-[linear-gradient(to_bottom,_#1e3a8a,_#0ea5e9)]", // Gradiente específico para esta categoria
    },
    
  },
  {
    slug: "financeiro",
    title: "Financeiro",
    subtitle: "Do primeiro real ao seu próprio império.",
    heroImage: runnersImage, // ⚠️ Substituir pela imagem correta
    gradient:
      "bg-[linear-gradient(135deg,_#d7ffdc,_#98ffaa,_#63ff81,_#13eb3f)]",
    titleColor1: "text-[#0b4e18]",
    titleColor2: "text-[#0f8a26]",
    subtitleColor: "text-[#323232]",
    coursesBackgroundColor: "bg-green-100", // Exemplo de cor
  },
  // ADICIONE AS OUTRAS 3 CATEGORIAS AQUI
];

// ==================================================================
// 2. DADOS PARA OS CARDS DE CURSOS
// ==================================================================
export const courses = [
  {
    id: 1,
    categorySlug: "saude-fisica",
    title: "Curso 1",
    imageSrc: runnersImage, // ⚠️ Substituir pela imagem correta do curso
    imageText: "Transforme sua vida",
    heading: "Transforme sua vida",
    description: "O Caminho Completo para uma vida saudável e feliz.",
    priceInstallments: "12x de R$ 23,27*",
    priceFull: "R$ 225,00",
    isHighlighted: false,
  },
  {
    id: 2,
    categorySlug: "saude-fisica",
    title: "Curso 2",
    imageSrc: runnersImage, // ⚠️ Substituir pela imagem correta do curso
    imageText: "Corra para a vida",
    heading: "Corrida para a vida",
    description: "Transforme Seu Corpo e Mente Através do Movimento.",
    priceInstallments: "12x de R$ 23,27*",
    priceFull: "R$ 225,00",
    isHighlighted: true,
  },
  {
    id: 3,
    categorySlug: "saude-fisica",
    title: "Curso 3",
    imageSrc: runnersImage, // ⚠️ Substituir pela imagem correta do curso
    imageText: "Corrida Elite",
    heading: "Corrida de Elite",
    description: "Performance, Longevidade, Competência e Excelência.",
    priceInstallments: "12x de R$ 23,27*",
    priceFull: "R$ 225,00",
    isHighlighted: false,
  },
  // Futuramente, adicione cursos de outras categorias aqui
];
