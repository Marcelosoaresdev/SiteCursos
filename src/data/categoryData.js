// Importações de imagens que serão usadas nas páginas
import capaSaude1 from "../assets/saude/capa_saude1.png";
import capaSaude2 from "../assets/saude/capa_saude2.png";
import capaSaude3 from "../assets/saude/capa_saude3.png";
import comboPackageImage from "../assets/saude/combo_saude.png"; // Imagem do pacote combo
import corrida from "../assets/corrida.png";
import comboProductsImage from "../assets/books.png"; // Imagem de exemplo
//

export const categories = [
  {
    slug: "saude-fisica",
    title: "Saúde Física",
    subtitle: "A Jornada Definitiva: Do Primeiro Passo ao Pódio",
    heroImage: corrida,
    gradient: "bg-saude-gradient",
    titleColor1: "text-saude-dark-blue",
    titleColor2: "text-saude-vivid-azure",
    subtitleColor: "text-saude-dark-gray",
    coursesBackgroundColor: "bg-saude-gradient",
    
    // DADOS PARA A SEÇÃO 'DominationSection'
    domination: {
      title: "Você vai Dominar",
      items: [
        "Rotinas de movimento para todos os níveis de condicionamento (iniciante a avançado)",
        "Superalimentos brasileiros que transformam a saúde de forma acessível",
        "Técnicas de gerenciamento do estresse que realmente funcionam",
        "Encontrar seu propósito de vida através do método japonês Ikigai"
      ]
    },

    // DADOS PARA A SEÇÃO 'InclusionsSection'
    inclusions: {
      title: "O que está incluso:",
      items: [
        "6 módulos abrangentes (3 horas no total)",
        "Todo o conteúdo em vídeo do Curso 1",
        "Checklist semanal de transformação",
        "Plano de ação personalizado de 90 dias",
        "BÔNUS: E-book gratuito da nossa coleção especialmente selecionada + Caderno de exercícios"
      ],
      price: {
        original: "R$ 297,00",
        installments: "12x de R$ 23,27*",
        full: "R$ 225,00"
      }
    },
    
    videoTestimonial: {
      text: "Essa jornada te leva do primeiro passo até você se tornar aquela pessoa que outros admiram um exemplo para vários. Descubra como transformar a corrida (e qualquer exercício) no seu superpoder pessoal.",
      //background: videoBgPattern,
      videoId: "YpDqsoXhA7U",
    },
    
    finalCta: {
      title: "A Transformação Completa:",
      mainParagraph: "Quando esses cursos trabalham juntos, algo mágico acontece. Os hábitos que você constrói se tornam a fundação para correr. A corrida se torna seu portal para performance física máxima eclareza mental — o mesmo estado focado que impulsiona sucesso nos negócios, relacionamentos e vida. No final, você não está apenas em forma — você está operando em um nível completamente diferente de potencial humano. É assim que pessoas comuns se tornam extraordinárias.",
      price: { original: "R$675,00", installments: "R$58,95*", full: "R$570,00" },
      productImage: comboProductsImage,
      bonusParagraph: "Ao garantir o Pacote Completo da Transformação Financeira você recebe acesso aos três cursos do programa e ainda leva gratuitamente um e-book e um caderno de exercícios especial,  escrito por Flávia Cavalcante.",
      buttonText: "QUERO GARANTIR O PACOTE",
      gradient: "bg-[linear-gradient(to_bottom,_#1e3a8a,_#0ea5e9)]",
    },
    
    comboDetails: {
      header: { title: 'Premium Combo', subtitle: 'Pacote', image: comboPackageImage },
      included: {
        title: 'O que está incluso?',
        items: [
          '<strong>Curso 1. Transforme Sua Vida</strong> – O Caminho Completo para Saúde e Vitalidade',
          '<strong>Curso 2. Corra para a Vida</strong> – Transforme Corpo e Mente Através do Movimento',
          '<strong>Curso 3. Corrida Elite</strong> – Performance, Longevidade e Transcendência',
          '<strong>Bônus: E-book grátis</strong> da nossa coleção especialmente selecionada + <strong>Caderno de exercícios</strong> + <strong>Sistema Integrado</strong> – Desperte o atleta interior, não importa onde você está começando.',
        ],
        buttonText: 'Começar minha transformação completa',
        buttonLink: 'https://pay.hotmart.com/J100521738O',
      },
      why: { line1: 'POR QUE ESCOLHER O', paragraph: ' Cada curso desbloqueia um novo nível de potêncial do seu corpo e da sua saúde.', line2: 'PACOTE COMPLETO?' },
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
    //heroImage: runnersImage, // ⚠️ Substituir pela imagem correta
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
    slug: "transforme-sua-vida",
    // Dados para o card pequeno
    title: "Curso 1",
    imageSrc: capaSaude1,
    imageText: "Transforme sua vida",
    heading: "Transforme sua vida",
    description: "O Caminho Completo para uma vida saudável e feliz.",
    priceInstallments: "12x de R$ 23,27*",
    priceFull: "R$ 225,00",
    isHighlighted: false,
    purchaseLink: "https://pay.hotmart.com/I100520899F",
    
    // Dados para a PÁGINA DETALHADA do Curso 1
    details: {
      pageTitle: "TRANSFORME SUA VIDA",
      pageSubtitle: "CURSO 1",
      description: "Reprogramar seus hábitos diários e acender sua energia. Senso de largada.",
      longDescription: "Esta jornada abrangente de 3 horas ensina os pilares da verdadeira transformação da saúde através de pequenas mudanças sustentáveis que criam resultados extraordinários.",
      heroImage: capaSaude1,
      purchaseLink: "https://pay.hotmart.com/I100520899F",
      domination: {
        title: "Você vai Dominar",
        items: [
            "Rotinas de movimento para todos os níveis de condicionamento (iniciante a avançado)",
            "Superalimentos brasileiros que transformam a saúde de forma acessível",
            "Técnicas de gerenciamento do estresse que realmente funcionam",
            "Encontrar seu propósito de vida através do método japonês Ikigai"
        ]
      },
      inclusions: {
        title: "O que está incluso:",
        items: [
            "6 módulos abrangentes (3 horas no total)",
            "Todo o conteúdo em vídeo do Curso 1",
            "Checklist semanal de transformação",
            "Plano de ação personalizado de 90 dias",
            "BÔNUS: E-book gratuito da nossa coleção especialmente selecionada + Caderno de exercícios"
        ],
        price: {
            original: "R$ 297,00",
            installments: "12x de R$ 23,27*",
            full: "R$ 225,00"
        }
      }
    }
  },

  {
    // CURSO 2 
    id: 2,
    categorySlug: "saude-fisica",
    title: "Curso 2",
    imageSrc: capaSaude2,
    imageText: "Corrida para a vida",
    heading: "Corrida para a vida",
    description: "Transforme Seu Corpo e Mente Através do Movimento.",
    priceInstallments: "12x de R$ 23,27*",
    priceFull: "R$ 225,00",
    isHighlighted: true,
    purchaseLink: "https://pay.hotmart.com/C100521124R",

    details: {
      pageTitle: "CORRIDA PARA A VIDA",
      pageSubtitle: "CURSO 2",
      description: "Transforme Seu Corpo e Mente Através do Movimento",
      longDescription: "Do sofá aos 5Km e além - descubra como a corrida se torna meditação em movimento. Junte-se a milhares que transformaram suas vidas um passo de cada vez, independente da idade ou nível de condicionamento.",
      heroImage: capaSaude2,
      purchaseLink: "https://pay.hotmart.com/C100521124R",
      domination: {
        title: "VOCÊ VAI DOMINAR",
        items: [
          "Método progressivo do zero aos 5Km em 8 semanas",
          "Como acessar a euforia do corredor naturalmente",
          "Corrida como terapia",
          "Técnica adequada para prevenir lesões",
          "Estilo de vida pessoal de corredor que se sustenta para sempre"
        ]
      },
      inclusions: {
        title: "O QUE ESTÁ INCLUSO?",
        items: [
          "7 módulos progressivos (3,5 horas no total)",
          "Plano de treino 5Km completo",
          "Todo o conteúdo do Curso 2 em vídeo"
        ],
        price: {
          original: "R$ 297,00",
          installments: "12x de R$ 23,27*",
          full: "R$ 225,00"
        }
      }
    }
  },

  // CURSO 3
  {
    id: 3,
    categorySlug: "saude-fisica",
    title: "Curso 3",
    imageSrc: capaSaude3,
    imageText: "Corrida Elite",
    heading: "Corrida de Elite",
    description: "Performance, Longevidade, Competência e Excelência.",
    priceInstallments: "12x de R$ 23,27*",
    priceFull: "R$ 225,00",
    isHighlighted: false,
    purchaseLink: "https://pay.hotmart.com/E100521352K",

    details: {
      pageTitle: "CORRIDA ELITE",
      pageSubtitle: "CURSO 3",
      description: "Performance, Longevidade e Transcendência",
      longDescription: "Para corredores prontos para quebrar barreiras e correr forte por décadas. Domine técnicas avançadas usadas por atletas olímpicos enquanto aprende a manter performance máxima em qualquer idade.",
      heroImage: capaSaude3,
      purchaseLink: "https://pay.hotmart.com/E100521352K",
      domination: {
        title: "VOCÊ VAI DOMINAR",
        items: [
          "Quebrando platos de performance cientificamente",
          "Correndo forte através das décadas (adaptações específicas por idade)",
          "Estratégias de nutrição de alta performance",
          "A dimensão mental e espiritual da ultra performance"
        ]
      },
      inclusions: {
        title: "O QUE ESTÁ INCLUSO:",
        items: [
          "7 módulos avançados (3,5 horas no total)",
          "Protocolos e planos de treino elite",
          "Todo o conteúdo do Curso 3 em vídeo"
        ],
        price: {
          original: "R$ 297,00",
          installments: "12x de R$ 23,27*",
          full: "R$ 225,00"
        }
      }
    }
  },
  // OBJETO DO COMBO ADICIONADO AQUI
  {
    id: 100,
    isCombo: true, // Flag para identificar que é o combo
    categorySlug: "saude-fisica",
    title: "Combo",
    heading: "Pacote Premium Combo",
    imageSrc: comboPackageImage,
    description: "Pacote Completo de Transformação da Saúde: receba todos os 3 Cursos + Materiais Completos para máximos resultados.",
    priceInstallments: "12x de R$ 58,95*",
    priceFull: "R$ 570,00",
  },
];