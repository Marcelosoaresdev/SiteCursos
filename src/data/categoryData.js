// Importações de imagens que serão usadas nas páginas
import runnersImage from "../assets-webp/corrida.webp";
import flaviaThumbnail from "../assets-webp/flavia.webp";
import videoBgPattern from "../assets/arvoreVitis.png";
import comboProductsImage from "../assets-webp/corrida.webp";
import comboPackageImage from "../assets-webp/corrida.webp"; // Imagem para o header do combo
import comboImage from "../assets-webp/corrida.webp";

// ==================================================================
// 1. DADOS PARA AS PÁGINAS DE CATEGORIA
// ==================================================================
export const categories = [
  {
    slug: "saude-fisica",
    title: "Saúde Física",
    subtitle: "A Jornada Definitiva: Do Primeiro Passo ao Pódio",
    heroImage: runnersImage,
    gradient: "bg-saude-gradient",
    titleColor1: "text-saude-dark-blue",
    titleColor2: "text-saude-vivid-azure",
    subtitleColor: "text-saude-dark-gray",
    coursesBackgroundColor: "bg-saude-gradient",
    
    videoTestimonial: {
      text: "Essa jornada te leva do primeiro passo...",
      background: videoBgPattern,
      videoId: "YpDqsoXhA7U",
    },
    
    finalCta: {
      title: "A Transformação Completa:",
      mainParagraph: "Quando esses cursos trabalham juntos...",
      price: {
        original: "R$675,00",
        installments: "R$58,95*",
        full: "R$570,00",
      },
      productImage: comboProductsImage,
      bonusParagraph: "Ao garantir o Pacote Completo...",
      buttonText: "QUERO GARANTIR O PACOTE",
      gradient: "bg-[linear-gradient(to_bottom,_#1e3a8a,_#0ea5e9)]",
    },

    // 👇👇👇 OBJETO FALTANDO ADICIONADO AQUI 👇👇👇
    comboDetails: {
      header: {
        title: 'Premium Combo',
        subtitle: 'Pacote',
        image: comboPackageImage,
      },
      included: {
        title: 'O que está incluso?',
        items: [
          '<strong>Curso 1. Transforme Sua Vida</strong> – O Caminho Completo para Saúde e Vitalidade',
          '<strong>Curso 2. Corra para a Vida</strong> – Transforme Corpo e Mente Através do Movimento',
          '<strong>Curso 3. Corrida Elite</strong> – Performance, Longevidade e Transcendência',
          '<strong>Bônus: E-book grátis</strong> da nossa coleção especialmente selecionada + <strong>Caderno de exercícios</strong> + <strong>Sistema Integrado</strong> – Desperte o atleta interior, não importa onde você está começando.',
        ],
        buttonText: 'Começar minha transformação completa',
      },
      why: {
        line1: 'POR QUE ESCOLHER O',
        paragraph: 'Cada curso desbloqueia um novo nível de potencial do seu corpo e da sua saúde.',
        line2: 'PACOTE COMPLETO?',
      },
      benefits: [
        { title: 'Curso 1', text: 'Reprograma seus hábitos diários.' },
        { title: 'Curso 2', text: 'Canaliza essa energia no movimento.' },
        { title: 'Curso 3', text: 'Te eleva à performance de elite.' },
      ],
      gradient: 'bg-[linear-gradient(to_bottom,_#1e3a8a,_#0ea5e9)]',
      textColor: 'text-saude-white',
    }
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
    coursesBackgroundColor: "bg-green-100",
    // ⚠️ Lembre-se de adicionar os objetos videoTestimonial, finalCta e comboDetails aqui também
  },
];

// ==================================================================
// 2. DADOS PARA OS CARDS DE CURSOS E COMBOS
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
  // OBJETO DO COMBO ADICIONADO AQUI
  {
    id: 100,
    isCombo: true, // Flag para identificar que é o combo
    categorySlug: "saude-fisica",
    title: "Combo",
    heading: "Pacote Premium Combo",
    imageSrc: comboImage,
    description: "Pacote Completo de Transformação da Saúde: receba todos os 3 Cursos + Materiais Completos para máximos resultados.",
    priceInstallments: "12x de R$ 58,95*",
    priceFull: "R$ 570,00",
  },
];