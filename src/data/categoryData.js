// Importações de imagens que serão usadas nas páginas
import capaSaude1 from "../assets/saude/capa_saude1.png";
import capaSaude2 from "../assets/saude/capa_saude2.png";
import capaSaude3 from "../assets/saude/capa_saude3.png";
import comboPackageImage from "../assets/saude/combo_saude.png"; // Imagem do pacote combo
/*------------------------------------------------------------*/

import capaFinanceiro1 from "../assets/financeiro/capa_financeiro1.png";
import capaFinanceiro2 from "../assets/financeiro/capa_financeiro2.png";
import capaFinanceiro3 from "../assets/financeiro/capa_financeiro3.png";
import comboPackageFinanceiro from "../assets/financeiro/combo_financeiro.png";

/*------------------------------------------------------------*/
import corrida from "../assets/corrida.png";
import heroFinanceiroImg from "../assets/financeiro.png";

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
       gradient: 'bg-gradient-to-r from-[#1e3a8a]/95 via-[#1e40af]/80 to-[#1d4ed8]/70',
      textColor: 'text-white'
    },
    
    finalCta: {
      title: "A Transformação Completa:",
      mainParagraph: "Quando esses cursos trabalham juntos, algo mágico acontece. Os hábitos que você constrói se tornam a fundação para correr. A corrida se torna seu portal para performance física máxima eclareza mental — o mesmo estado focado que impulsiona sucesso nos negócios, relacionamentos e vida. No final, você não está apenas em forma — você está operando em um nível completamente diferente de potencial humano. É assim que pessoas comuns se tornam extraordinárias.",
      price: { original: "R$675,00", installments: "R$58,95*", full: "R$570,00" },
      productImage: comboProductsImage,
      bonusParagraph: "Ao garantir o Pacote Completo da Transformação Financeira você recebe acesso aos três cursos do programa e ainda leva gratuitamente um e-book e um caderno de exercícios especial,  escrito por Flávia Cavalcante.",
      buttonText: "QUERO GARANTIR O PACOTE",
      gradient: "bg-saude-gradient", // Já existia, vamos usar
    textColor: "text-saude-dark-blue",
    borderColor: "border-saude-dark-blue",
    buttonLink: "https://pay.hotmart.com/J100521738O", // Link do pacote completo
    buttonClasses: "bg-saude-white/40 backdrop-blur-md border border-white/40 hover:bg-saude-white/20",
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
    // ==========================================================
    //            INÍCIO DO OBJETO 'FINANCEIRO' ATUALIZADO
    // ==========================================================
    slug: "financeiro",
    title: "Financeiro",
    subtitle: "A Jornada: Do Primeiro Real ao Império.",
    heroImage: heroFinanceiroImg, // ⚠️ Substitua pelo nome da sua variável de imagem
    gradient: 'bg-[radial-gradient(circle_at_top_left,_#f8fdf4,_#9efa93,_#61cd51)]',
    titleColor1: "text-financeiro-dark-green",
    titleColor2: "text-financeiro-dark-green",
    subtitleColor: "text-financeiro-dark-green",
    coursesBackgroundColor: "bg-[radial-gradient(circle_at_top_left,_#f8fdf4,_#9efa93,_#61cd51)]",
    
    // ... DADOS DAS SEÇÕES DA PÁGINA DE CATEGORIA ...

    videoTestimonial: {
      text: "Do primeiro real ao seu próprio império – Não é sobre trabalhar mais, é sobre trabalhar diferente.",
      videoId: "SEU_ID_DE_VIDEO_AQUI",
    gradient: 'bg-gradient-to-r from-[#1a300f] via-[#3e722f] to-[#8aaf76]',
    textColor: 'text-white',
    },
    
    finalCta: {
  title: "A TRANSFORMAÇÃO COMPLETA:",
  mainParagraph: "Quando esses cursos se combinam, a transformação financeira se torna inevitável. As mudanças de mentalidade criam a coragem para começar. As habilidades empreendedoras criam a renda para investir. As estratégias de investimento criam riqueza geracional. Isso não é apenas sobre ter mais dinheiro - é sobre conquistar a liberdade, confiança e paz de espírito que vem com a verdadeira maestria financeira. É assim que pessoas comuns constroem impérios.",
  price: { original: "R$675,00", installments: "12x de R$58,95*", full: "R$570,00" },
  productImage: comboProductsImage, // Use a imagem correta dos seus produtos
  bonusParagraph: "Ao garantir o Pacote Completo da Transformação Financeira você recebe acesso aos três cursos do programa e ainda leva gratuitamente um e-book e caderno de exercícios especial, escrito por Flávia Cavalcante.",
  buttonText: "QUERO GARANTIR O PACOTE",

  // 👇 PROPRIEDADES ADICIONADAS E CORRIGIDAS
  gradient: "bg-[linear-gradient(to_bottom,_#065f46,_#10b981)]",
  textColor: "text-white",
  borderColor: "border-white",
  buttonLink: "#SEU-LINK-DE-CHECKOUT-COMBO-FINANCEIRO", // Coloque o link do pacote completo aqui
  buttonClasses: "bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30",
},
    
    comboDetails: {
      header: { title: 'Premium Combo', subtitle: 'Pacote', image: capaFinanceiro1 }, // ⚠️ Substitua pelo nome da sua variável de imagem
      included: {
        title: 'O QUE ESTÁ INCLUSO:',
        items: [
          '<strong>Curso 1. Mentalidade e Fundamentos da Independência Financeira</strong>',
          '<strong>Curso 2. Mindset Empreendedor - Múltiplas Fontes de Renda</strong>',
          '<strong>Curso 3. Escala e Investimentos Inteligentes para Empreendedores</strong>',
          '<strong>Bônus.</strong> E-book GRÁTIS da nossa coleção especialmente selecionada + caderno de exercícios',
          '<strong>Sistema Integrado</strong> - Reprograme seu DNA financeiro e construa riqueza que se multiplica',
        ],
        buttonText: 'COMEÇAR MINHA TRANSFORMAÇÃO COMPLETA',
        buttonLink: '#SEU-LINK-DE-CHECKOUT-COMBO-FINANCEIRO', // ⚠️ SUBSTITUA PELO SEU LINK DE CHECKOUT
      },
      why: { 
        line1: 'POR QUE ESCOLHER O', 
        paragraph: 'Descubra como libertar-se do ciclo salário a salário e construir riqueza que cresce enquanto você dorme.', 
        line2: 'PACOTE COMPLETO?' 
      },
      benefits: [
        { title: 'Curso 1', text: 'Reprograma sua consciência de riqueza.' },
        { title: 'Curso 2', text: 'Te mostra como criar fontes de renda a partir de suas paixões.' },
        { title: 'Curso 3', text: 'Mostra como multiplicar essa renda enquanto você dorme.' },
      ],
      gradient: 'bg-gradient-to-r from-[#1a300f] via-[#3e722f] to-[#8aaf76]',
      textColor: 'text-white',
    }
  },
  // ==========================================================
  //               FIM DO OBJETO 'FINANCEIRO'
  // ==========================================================
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
    
    theme: {
    normal: { // <--- Estilos para o card normal
      cardBg: 'bg-white/10 backdrop-blur-md',
      borderColor: 'border-white hover:border-saude-vivid-azure',
      titleColor: 'text-saude-dark-blue',
      textColor: 'text-saude-dark-blue',
      buttonBg: 'bg-saude-dark-blue',
      buttonText: 'text-white',
      priceBg: 'bg-red-500',
      learnMoreVariant: 'dark',
    },
    highlighted: { // <--- Mesmo assim, é bom definir
      cardBg: 'bg-saude-dark-blue',
      borderColor: 'border-saude-vivid-azure',
      titleColor: 'text-white',
      textColor: 'text-white/80',
      buttonBg: 'bg-white',
      buttonText: 'text-saude-dark-blue',
      priceBg: 'bg-red-500',
      learnMoreVariant: 'light',
    }
  },
    
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

    theme: {
    normal: { // <--- Estilos para o card normal
      cardBg: 'bg-white/10 backdrop-blur-md',
      borderColor: 'border-white hover:border-saude-vivid-azure',
      titleColor: 'text-saude-dark-blue',
      textColor: 'text-saude-dark-blue',
      buttonBg: 'bg-saude-dark-blue',
      buttonText: 'text-white',
      priceBg: 'bg-red-500',
      learnMoreVariant: 'dark',
    },
    highlighted: { // <--- Mesmo assim, é bom definir
      cardBg: 'bg-saude-dark-blue',
      borderColor: 'border-saude-vivid-azure',
      titleColor: 'text-white',
      textColor: 'text-white/80',
      buttonBg: 'bg-white',
      buttonText: 'text-saude-dark-blue',
      priceBg: 'bg-red-500',
      learnMoreVariant: 'light',
    }
  },

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

    theme: {
    normal: { // <--- Estilos para o card normal
      cardBg: 'bg-white/10 backdrop-blur-md',
      borderColor: 'border-white hover:border-saude-vivid-azure',
      titleColor: 'text-saude-dark-blue',
      textColor: 'text-saude-dark-blue',
      buttonBg: 'bg-saude-dark-blue',
      buttonText: 'text-white',
      priceBg: 'bg-red-500',
      learnMoreVariant: 'dark',
    },
    highlighted: { // <--- Mesmo assim, é bom definir
      cardBg: 'bg-saude-dark-blue',
      borderColor: 'border-saude-vivid-azure',
      titleColor: 'text-white',
      textColor: 'text-white/80',
      buttonBg: 'bg-white',
      buttonText: 'text-saude-dark-blue',
      priceBg: 'bg-red-500',
      learnMoreVariant: 'light',
    }
  },

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
  {
    id: 4,
    categorySlug: "financeiro",
    slug: "mentalidade-e-fundamentos",
    title: "Curso 1",
    imageSrc: capaFinanceiro1, // ⚠️ Use a variável da imagem correta
    imageText: "Mentalidade & Fundamentos",
    heading: "Mentalidade e Fundamentos",
    description: "Reprograme sua relação com o dinheiro e construa as bases sólidas da riqueza real.",
    priceInstallments: "12x de R$ 23,27*",
    priceFull: "R$ 225,00",
    isHighlighted: false,
    purchaseLink: "#SEU-LINK-FINANCEIRO-CURSO1", // ⚠️ Link do curso 1

theme: {
    normal: { // <--- Estilos para o card normal
      cardBg: 'bg-white/10 backdrop-blur-md',
      borderColor: 'border-white hover:border-financeiro-light-green',
      titleColor: 'text-financeiro-dark-green',
      textColor: 'text-financeiro-dark-green',
      buttonBg: 'bg-financeiro-dark-green',
      buttonText: 'text-white',
      priceBg: 'bg-red-500',
      learnMoreVariant: 'dark',
    },
    highlighted: { // <--- Estilos para o card destacado
      cardBg: 'bg-financeiro-dark-green',
      borderColor: 'border-financeiro-light-green',
      titleColor: 'text-white',
      textColor: 'text-white/80',
      buttonBg: 'bg-financeiro-light-green',
      buttonText: 'text-financeiro-dark-green',
      priceBg: 'bg-red-500',
      learnMoreVariant: 'light',
    }
  },

    // ========= DETALHES DO CURSO 1 PREENCHIDOS =========
    details: {
      detailsBackgroundColor: "bg-gradient-to-r from-[#1a300f] via-[#3e722f] to-[#8aaf76]",
      pageTitle: "MENTALIDADE E FUNDAMENTOS DA INDEPENDÊNCIA FINANCEIRA",
      pageSubtitle: "CURSO 1",
      description: "Reprograme sua consciência de riqueza",
      longDescription: "O curso Mentalidade e Fundamentos da Independência Financeira oferece as bases cognitivas e estratégicas essenciais para quem deseja romper com ciclos de escassez e construir, de forma consistente, um caminho sólido rumo à liberdade financeira.",
      heroImage: capaFinanceiro1, // ⚠️ Use a variável da imagem correta
      purchaseLink: "#SEU-LINK-FINANCEIRO-CURSO1", // ⚠️ Link do curso 1
      domination: {
        title: "Você vai Dominar:",
        items: [
          "Reprogramar crenças limitantes sobre dinheiro e riqueza",
          "Educação financeira completa: investimentos, poupança e multiplicação",
          "Mentalidade de abundância que atrai oportunidades",
          "Disciplina financeira para construir patrimônio sólido",
          "Planejamento estratégico da sua independência financeira.",
        ]
      },
      inclusions: {
        title: "O que está incluso:",
        items: [
          "7 módulos poderosos em vídeo (2+ horas no total)",
          "Todo o conteúdo em vídeo do Curso 1",
          "Diagnósticos e calculadoras financeiras completas.",
          "Roteiro personalizado de liberdade para 5 anos",
          "BÔNUS: E-book gratuito da nossa coleção especialmente selecionada + caderno de exercícios",
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
    id: 5,
    categorySlug: "financeiro",
    slug: "mindset-empreendedor",
    title: "Curso 2",
    imageSrc: capaFinanceiro2, // ⚠️ Use a variável da imagem correta
    imageText: "Mindset Empreendedor",
    heading: "Mindset Empreendedor",
    description: "Desperte o empreendedor que existe em você.",
    priceInstallments: "12x de R$ 23,27*",
    priceFull: "R$ 225,00",
    isHighlighted: true,
    purchaseLink: "#SEU-LINK-FINANCEIRO-CURSO2", // ⚠️ Link do curso 2
    
theme: {
    normal: { // <--- Estilos para o card normal
      cardBg: 'bg-white/10 backdrop-blur-md',
      borderColor: 'border-white hover:border-financeiro-light-green',
      titleColor: 'text-financeiro-dark-green',
      textColor: 'text-financeiro-dark-green',
      buttonBg: 'bg-financeiro-dark-green',
      buttonText: 'text-white',
      priceBg: 'bg-red-500',
      learnMoreVariant: 'dark',
    },
    highlighted: { // <--- Estilos para o card destacado
      cardBg: 'bg-financeiro-dark-green',
      borderColor: 'border-financeiro-light-green',
      titleColor: 'text-white',
      textColor: 'text-white/80',
      buttonBg: 'bg-financeiro-light-green',
      buttonText: 'text-financeiro-dark-green',
      priceBg: 'bg-red-500',
      learnMoreVariant: 'light',
    }
  },

    // ========= DETALHES DO CURSO 2 PREENCHIDOS =========
    details: {
      detailsBackgroundColor: "bg-gradient-to-r from-[#1a300f] via-[#3e722f] to-[#8aaf76]",
      pageTitle: "MINDSET EMPREENDEDOR",
      pageSubtitle: "CURSO 2",
      description: "Como criar fontes de renda a partir de suas paixões",
      longDescription: "Descubra um modelo estruturado para identificar habilidades pessoais com potencial de monetização, desenvolver visão estratégica e implementar fontes de renda alinhadas com propósito, gerando autonomia financeira com base em princípios validados do empreendedorismo moderno.",
      heroImage: capaFinanceiro2, // ⚠️ Use a variável da imagem correta
      purchaseLink: "#SEU-LINK-FINANCEIRO-CURSO2", // ⚠️ Link do curso 2
      domination: {
        title: "Você vai Dominar:",
        items: [
          "Identificar oportunidades onde outros veem problemas",
          "Mindset de risco calculado e tomada de decisão rápida",
          "Resiliência empreendedora para superar fracassos",
          "Networking estratégico e construção de relacionamentos valiosos",
          "Visão de negócios e timing de mercado",
        ]
      },
      inclusions: {
        title: "O que está incluso:",
        items: [
          "6 módulos abrangentes (3+ horas no total)",
          "Todo o conteúdo em vídeo do Curso 2",
          "Templates de criação de produtos e sistemas",
          "Roteiro de escala do zero aos milhões",
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
    id: 6,
    categorySlug: "financeiro",
    slug: "escala-e-investimentos",
    title: "Curso 3",
    imageSrc: capaFinanceiro3, // ⚠️ Use a variável da imagem correta
    imageText: "Escala e Investimentos",
    heading: "Escala e Investimentos",
    description: "Onde a visão encontra a ação para transformar ideias em máquinas de crescimento.",
    priceInstallments: "12x de R$ 23,27*",
    priceFull: "R$ 225,00",
    isHighlighted: false,
    purchaseLink: "#SEU-LINK-FINANCEIRO-CURSO3", // ⚠️ Link do curso 3
    
    theme: {
    normal: { // <--- Estilos para o card normal
      cardBg: 'bg-white/10 backdrop-blur-md',
      borderColor: 'border-white hover:border-financeiro-light-green',
      titleColor: 'text-financeiro-dark-green',
      textColor: 'text-financeiro-dark-green',
      buttonBg: 'bg-financeiro-dark-green',
      buttonText: 'text-white',
      priceBg: 'bg-red-500',
      learnMoreVariant: 'dark',
    },
    highlighted: { // <--- Estilos para o card destacado
      cardBg: 'bg-financeiro-dark-green',
      borderColor: 'border-financeiro-light-green',
      titleColor: 'text-white',
      textColor: 'text-white/80',
      buttonBg: 'bg-financeiro-light-green',
      buttonText: 'text-financeiro-dark-green',
      priceBg: 'bg-red-500',
      learnMoreVariant: 'light',
    }
  },

    // ========= DETALHES DO CURSO 3 PREENCHIDOS =========
    details: {
      detailsBackgroundColor: "bg-gradient-to-r from-[#1a300f] via-[#3e722f] to-[#8aaf76]",
      pageTitle: "ESCALA E INVESTIMENTOS INTELIGENTES PARA EMPREENDEDORES",
      pageSubtitle: "CURSO 3",
      description: "Como multiplicar essa renda enquanto você dorme.",
      longDescription: "Uma abordagem estratégica para alavancar negócios e otimizar capital, integrando técnicas de crescimento escalável com inteligência financeira aplicada - ideal para quem busca alta performance e liberdade econômica real.",
      heroImage: capaFinanceiro3, // ⚠️ Use a variável da imagem correta
      purchaseLink: "#SEU-LINK-FINANCEIRO-CURSO3", // ⚠️ Link do curso 3
      domination: {
        title: "As Estratégias Avançadas Incluem:",
        items: [
          "Sistemas automatizados que funcionam sem você",
          "Processos escaláveis para crescimento exponencial",
          "Gestão de equipes de alta performance",
          "Métricas que impulsionam resultados",
          "Estratégias de expansão e multiplicação de negócios",
        ]
      },
      inclusions: {
        title: "O que está incluso:",
        items: [
          "6 módulos avançados (3 horas no total)",
          "Todo o conteúdo em vídeo do Curso 3",
          "Calculadoras de investimento e templates de carteira",
          "Roteiro com cronogramas para alcançar o milhão",
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
    theme: {
    titleColor: 'text-saude-dark-blue',
    cardBg: 'bg-white/10 backdrop-blur-md',
    cardBorder: 'border-white',
    headingColor: 'text-saude-dark-blue',
    textColor: 'text-gray-700',
    buttonBg: 'bg-saude-dark-blue',
    buttonText: 'text-white',
    priceBg: 'bg-red-500',
    learnMoreVariant: 'dark',
  }
},
    
  {
    id: 101, // ID do Combo Financeiro
    isCombo: true,
    categorySlug: "financeiro",
    title: "Combo",
    heading: "Pacote Premium Combo",
    imageSrc: comboPackageFinanceiro, // ⚠️ Importe e use a variável da imagem do Combo Card
    description: "Domine Todos os 3 Cursos + Materiais para Liberdade Financeira Total.",
    priceInstallments: "12x de R$ 58,95*",
    priceFull: "R$ 570,00",
    purchaseLink: '#SEU-LINK-DE-CHECKOUT-COMBO-FINANCEIRO', // O mesmo link do seu comboDetails
  theme: {
    titleColor: 'text-financeiro-dark-green',
    cardBg: 'bg-financeiro-dark-green/10 backdrop-blur-md',
    cardBorder: 'border-white',
    headingColor: 'text-financeiro-dark-green',
    textColor: 'text-gray-800', // Um pouco mais escuro para contraste no fundo verde claro
    buttonBg: 'bg-financeiro-dark-green',
    buttonText: 'text-white',
    priceBg: 'bg-red-500',
    learnMoreVariant: 'dark',
    }
  },
]; 
