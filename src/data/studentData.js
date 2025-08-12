// Importações de imagens que serão usadas nas páginas
import capaSaude1 from "../assets/espaco_Uni/capa_saude1_uni.webp";
import capaSaude2 from "../assets/espaco_Uni/capa_saude2_uni.webp";
import capaSaude3 from "../assets/espaco_Uni/capa_saude3_uni.webp";
import comboPackageSaude from "../assets/espaco_Uni/capa_combosaude_uni.webp"; // Imagem do pacote combo
import corrida from "../assets/corrida.webp"; // Hero image da categoria Saúde Física

/*------------------------------------------------------------*/

import capaFinanceiro1 from "../assets/espaco_Uni/capa_financeiro1_uni.webp";
import capaFinanceiro2 from "../assets/espaco_Uni/capa_financeiro2_uni.webp";
import capaFinanceiro3 from "../assets/espaco_Uni/capa_financeiro3_uni.webp";
import comboPackageFinanceiro from "../assets/espaco_Uni/capa_combofinanceiro_uni.webp";
import heroFinanceiroImg from "../assets/financeiro.webp"; // Hero image da categoria Financeiro

/*------------------------------------------------------------*/

import capaConquista1 from "../assets/espaco_Uni/capa_conquista1_uni.webp";
import capaConquista2 from "../assets/espaco_Uni/capa_conquista2_uni.webp";
import capaConquista3 from "../assets/espaco_Uni/capa_conquista3_uni.webp";
import comboPackageConquista from "../assets/espaco_Uni/capa_comboconquista_uni.webp";
import conquistaImg from "../assets/conquista.webp"; // Hero image da categoria Conquista

/*------------------------------------------------------------*/

import capaAutoestima1 from "../assets/espaco_Uni/capa_autoestima1_uni.webp";
import capaAutoestima2 from "../assets/espaco_Uni/capa_autoestima3_uni.webp";
import capaAutoestima3 from "../assets/espaco_Uni/capa_autoestima2_uni.webp";
import comboPackageAutoestima from "../assets/espaco_Uni/capa_comboautoestima_uni.webp";
import autoestimaImg from "../assets/autoestima.webp"; // Hero image da categoria Autoestima

/*------------------------------------------------------------*/

// ✅ NOVAS IMAGENS PARA RELACIONAMENTO
import capaRelacionamento1 from "../assets/espaco_Uni/capa_relacionamento1_uni.webp";
import capaRelacionamento2 from "../assets/espaco_Uni/capa_relacionamento2_uni.webp";
import capaRelacionamento3 from "../assets/espaco_Uni/capa_relacionamento3_uni.webp";
import comboPackageRelacionamento from "../assets/espaco_Uni/capa_comborelacionamento_uni.webp";
import heroRelacionamentoImg from "../assets/relacionamento.webp";

/*------------------------------------------------------------*/

import comboProductsImage from "../assets/books.webp"; // Imagem de exemplo

/*------------------------------------------------------------*/

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
        "Encontrar seu propósito de vida através do método japonês Ikigai",
      ],
    },

    // DADOS PARA A SEÇÃO 'InclusionsSection'
    inclusions: {
      title: "O que está incluso:",
      items: [
        "6 módulos abrangentes",
        "Todo o conteúdo em vídeo do Módulo 1",
        "Checklist semanal de transformação",
        "Plano de ação personalizado de 90 dias",
        "BÔNUS: E-book gratuito da nossa coleção especialmente selecionada + Caderno de exercícios",
      ],
      price: {
        original: "R$ 297,00",
        installments: "12x de R$ 20,37*",
        full: "R$ 197,00",
      },
    },

    videoTestimonial: {
      text: "Essa jornada te leva do primeiro passo até você se tornar aquela pessoa que outros admiram um exemplo para vários. Descubra como transformar a corrida (e qualquer exercício) no seu superpoder pessoal.",
      //background: videoBgPattern,
      videoId: "YpDqsoXhA7U",
      gradient:
        "bg-gradient-to-r from-[#1e3a8a]/95 via-[#1e40af]/80 to-[#1d4ed8]/70",
      textColor: "text-white",
    },

    finalCta: {
      title: "A Transformação Completa:",
      mainParagraph:
        "Quando esses cursos trabalham juntos, algo mágico acontece. Os hábitos que você constrói se tornam a fundação para correr. A corrida se torna seu portal para performance física máxima eclareza mental — o mesmo estado focado que impulsiona sucesso nos negócios, relacionamentos e vida. No final, você não está apenas em forma — você está operando em um nível completamente diferente de potencial humano. É assim que pessoas comuns se tornam extraordinárias.",
      price: {
        original: "R$675,00",
        installments: "R$52,75*",
        full: "R$510,00",
      },
      productImage: comboProductsImage,
      bonusParagraph:
        "Ao garantir o Pacote Completo da Transformação Financeira você recebe acesso aos três cursos do programa e ainda leva gratuitamente um e-book e um caderno de exercícios especial,  escrito por Flávia Cavalcante.",
      buttonText: "Aproveitar o Combo com 3 Cursos",
      gradient: "bg-saude-gradient", // Já existia, vamos usar
      textColor: "text-saude-dark-blue",
      borderColor: "border-saude-dark-blue",
      buttonLink: "https://pay.hotmart.com/A100523908T", // Link do pacote completo
      buttonClasses:
        "bg-black/50 backdrop-blur-md border border-white/20 text-white shadow-lg \
   hover:bg-black/50 hover:border-white/40 hover:scale-105 active:scale-95 transition-all duration-300 px-8 py-4 rounded-full font-ttnorms font-bold uppercase",
    },

    comboDetails: {
      header: {
        title: "Premium Combo",
        subtitle: "Pacote",
        image: comboPackageSaude,
      },
      included: {
        title: "O que está incluso?",
        items: [
          "<strong>Módulo 1. Transforme Sua Vida</strong> – O Caminho Completo para Saúde e Vitalidade",
          "<strong>Módulo 2. Corra para a Vida</strong> – Transforme Corpo e Mente Através do Movimento",
          "<strong>Módulo 3. Corrida Elite</strong> – Performance, Longevidade e Transcendência",
          "<strong>Bônus: E-book grátis</strong> da nossa coleção especialmente selecionada + <strong>Caderno de exercícios</strong> + <strong>Sistema Integrado</strong> – Desperte o atleta interior, não importa onde você está começando.",
        ],
        buttonText: "Quero Começar Minha Transformação",
        buttonLink: "https://pay.hotmart.com/A100523908T",
      },
      why: {
        line1: "POR QUE ESCOLHER O",
        paragraph:
          " Cada curso desbloqueia um novo nível de potêncial do seu corpo e da sua saúde.",
        line2: "PACOTE COMPLETO?",
      },
      benefits: [
        { title: "Módulo 1", text: "Reprograma seus hábitos diários." },
        { title: "Módulo 2", text: "Canaliza essa energia no movimento." },
        { title: "Módulo 3", text: "Te eleva à performance de elite." },
      ],
      gradient: "bg-[linear-gradient(to_bottom,_#1e3a8a,_#0ea5e9)]",
      textColor: "text-saude-white",
    },
    callToAction: {
      text: "SUA SAÚDE NÃO ESPERA. DECIDA POR VOCÊ HOJE!",
      buttonText: "QUERO TRANSFORMAR MINHA SAÚDE",
      gradient: "bg-gradient-to-r from-cyan-500 to-blue-500",
      textColor: "text-white",
      buttonClasses:
        "bg-black/50 backdrop-blur-md border border-white/20 text-white shadow-lg \
   hover:bg-black/50 hover:border-white/40 hover:scale-105 active:scale-95 transition-all duration-300 px-8 py-4 rounded-full font-ttnorms font-bold uppercase",
    },
  },
  {
    // ==========================================================
    //            INÍCIO DO OBJETO 'FINANCEIRO' ATUALIZADO
    // ==========================================================
    slug: "financeiro",
    title: "Financeiro",
    subtitle: "A Jornada: Do Primeiro Real ao Império.",
    heroImage: heroFinanceiroImg, // ⚠️ Substitua pelo nome da sua variável de imagem
    gradient:
      "bg-[radial-gradient(circle_at_0%_0%,_#f8fdf4,_#9efa93,_#61cd51)]",
    titleColor1: "text-financeiro-dark-green",
    titleColor2: "text-financeiro-dark-green",
    subtitleColor: "text-financeiro-dark-green",
    coursesBackgroundColor:
      "bg-[radial-gradient(circle_at_0%_0%,_#f8fdf4,_#9efa93,_#61cd51)]",

    videoTestimonial: {
      text: "Do primeiro real ao seu próprio império – Não é sobre trabalhar mais, é sobre trabalhar diferente.",
      videoId: "SEU_ID_DE_VIDEO_AQUI",
      gradient: "bg-gradient-to-r from-[#1a300f] via-[#3e722f] to-[#8aaf76]",
      textColor: "text-white",
    },

    finalCta: {
      title: "A TRANSFORMAÇÃO COMPLETA:",
      mainParagraph:
        "Quando esses cursos se combinam, a transformação financeira se torna inevitável. As mudanças de mentalidade criam a coragem para começar. As habilidades empreendedoras criam a renda para investir. As estratégias de investimento criam riqueza geracional. Isso não é apenas sobre ter mais dinheiro - é sobre conquistar a liberdade, confiança e paz de espírito que vem com a verdadeira maestria financeira. É assim que pessoas comuns constroem impérios.",
      price: {
        original: "R$675,00",
        installments: "12x de R$52,75*",
        full: "R$510,00",
      },
      productImage: comboProductsImage, // Use a imagem correta dos seus produtos
      bonusParagraph:
        "Ao garantir o Pacote Completo da Transformação Financeira você recebe acesso aos três cursos do programa e ainda leva gratuitamente um e-book e caderno de exercícios especial, escrito por Flávia Cavalcante.",
      buttonText: "QUERO GARANTIR O PACOTE",

      // 👇 PROPRIEDADES ADICIONADAS E CORRIGIDAS
      gradient: "bg-[linear-gradient(to_bottom,_#065f46,_#10b981)]",
      textColor: "text-white",
      borderColor: "border-white",
      buttonLink: "https://pay.hotmart.com/M100510960L", // Coloque o link do pacote completo aqui
      buttonClasses:
        "bg-black/50 backdrop-blur-md border border-white/20 text-white shadow-lg \
   hover:bg-black/50 hover:border-white/40 hover:scale-105 active:scale-95 transition-all duration-300 px-8 py-4 rounded-full font-ttnorms font-bold uppercase",
    },

    comboDetails: {
      header: {
        title: "Premium Combo",
        subtitle: "Pacote",
        image: comboPackageFinanceiro,
      }, // ⚠️ Substitua pelo nome da sua variável de imagem
      included: {
        title: "O QUE ESTÁ INCLUSO:",
        items: [
          "<strong>Módulo 1. Mentalidade e Fundamentos da Independência Financeira</strong>",
          "<strong>Módulo 2. Mindset Empreendedor - Múltiplas Fontes de Renda</strong>",
          "<strong>Módulo 3. Escala e Investimentos Inteligentes para Empreendedores</strong>",
          "<strong>Bônus.</strong> E-book GRÁTIS da nossa coleção especialmente selecionada + caderno de exercícios",
          "<strong>Sistema Integrado</strong> - Reprograme seu DNA financeiro e construa riqueza que se multiplica",
        ],
        buttonText: "COMEÇAR MINHA TRANSFORMAÇÃO COMPLETA",
        buttonLink: "https://pay.hotmart.com/M100510960L",
      },
      why: {
        line1: "POR QUE ESCOLHER O",
        paragraph:
          "Descubra como libertar-se do ciclo salário a salário e construir riqueza que cresce enquanto você dorme.",
        line2: "PACOTE COMPLETO?",
      },
      benefits: [
        { title: "Módulo 1", text: "Reprograma sua consciência de riqueza." },
        {
          title: "Módulo 2",
          text: "Te mostra como criar fontes de renda a partir de suas paixões.",
        },
        {
          title: "Módulo 3",
          text: "Mostra como multiplicar essa renda enquanto você dorme.",
        },
      ],
      gradient: "bg-gradient-to-r from-[#1a300f] via-[#3e722f] to-[#8aaf76]",
      textColor: "text-white",
    },
    callToAction: {
      text: "VOCÊ NÃO SERÁ MAIS UM FUNCIONÁRIO DA VIDA – VOCÊ SERÁ O CEO DA SUA EXISTÊNCIA.",
      buttonText: "QUERO MINHA LIBERDADE FINANCEIRA",
      gradient: "bg-gradient-to-r from-lime-400 to-green-500",
      textColor: "text-green-900",
      buttonClasses:
        "bg-black/50 backdrop-blur-md border border-white/20 text-white shadow-lg \
   hover:bg-black/50 hover:border-white/40 hover:scale-105 active:scale-95 transition-all duration-300 px-8 py-4 rounded-full font-ttnorms font-bold uppercase",
    },
  },
  // ==========================================================
  //               FIM DO OBJETO 'FINANCEIRO'
  // ==========================================================

  {
    slug: "conquista",
    title: "Conquista",
    subtitle: "Seus sonhos merecem um plano que realmente funciona",
    heroImage: conquistaImg,
    gradient:
      "bg-[radial-gradient(circle_at_0%_0%,_#fbefb1,_#ffab1c,_#ffab1c,_#ff6c2e)]",
    titleColor1: "text-[#8c2100]",
    titleColor2: "text-[#8c2100]",
    subtitleColor: "text-[#8c2100]",
    coursesBackgroundColor:
      "bg-[radial-gradient(circle_at_0%_0%,_#fbefb1,_#ffab1c,_#ffab1c,_#ff6c2e)]",

    domination: {
      title: "Você vai Dominar",
      items: [
        "Transformar objetivos esmagadores em vitórias inevitáveis",
        "Sistemas comprovados de clareza, estratégia e execução imparável",
        "Como criar estratégias à prova de falhas que transformam obstáculos em degraus",
        "Instalar sistemas diários e hábitos que tornam o sucesso automático",
      ],
    },

    inclusions: {
      title: "O que está incluso:",
      items: [
        "Módulo 1 – Conquiste Seus Objetivos – Objetivos Cristalinos",
        "Módulo 2 – Estratégia e Planejamento – Seu Mapa de Sucesso",
        "Módulo 3 – Execução e Hábitos – Sistemas Diários para Vitória",
        "Bônus – E-book grátis da nossa coleção especialmente selecionada",
        "Caderno de exercícios + Sistema Integrado – transforme 'algum dia' em 'feito' com métodos baseados em ciência.",
      ],
      price: {
        original: "R$ 297,00",
        installments: "12x de R$ 20,37*",
        full: "R$ 197,00",
      },
    },

    videoTestimonial: {
      text: "Transforme objetivos esmagadores em vitórias inevitáveis através de sistemas comprovados de clareza, estratégia e execução imparável.",
      videoId: "SEU_ID_DE_VIDEO_AQUI", // substitua aqui
      gradient: "bg-gradient-to-r from-[#8c2100] via-[#d14900] to-[#ff6c2e]",
      textColor: "text-white",
    },

    finalCta: {
      title: "O EFEITO MULTIPLICAÇÃO DO SUCESSO:",
      mainParagraph:
        "Quando esses cursos trabalham juntos, a conquista se torna inevitável. A clareza cria foco que corta através das distrações. As estratégias criam confiança que dissolve o medo. Os sistemas criam consistência que se transforma em resultados extraordinários. Isso não é apenas sobre marcar objetivos como concluídos – é sobre se tornar a pessoa que faz o impossível parecer fácil. É assim que pessoas comuns conquistam coisas extraordinárias.",
      price: {
        original: "R$675,00",
        installments: "12x de R$52,75*",
        full: "R$510,00",
      },
      productImage: comboProductsImage,
      bonusParagraph:
        "Ao garantir o Pacote Completo do Sistema de Conquista você recebe acesso aos três cursos do programa e ainda leva gratuitamente um e-book e caderno de exercícios especial, escrito por Flávia Cavalcante.",
      buttonText: "QUERO GARANTIR O PACOTE",
      gradient: "bg-gradient-to-r from-[#8c2100] via-[#d14900] to-[#ff6c2e]",
      textColor: "text-white",
      borderColor: "border-white",
      buttonLink: "https://pay.hotmart.com/P100552916T",
      buttonClasses:
        "bg-black/50 backdrop-blur-md border border-white/20 text-white shadow-lg \
   hover:bg-black/50 hover:border-white/40 hover:scale-105 active:scale-95 transition-all duration-300 px-8 py-4 rounded-full font-ttnorms font-bold uppercase",
    },

    comboDetails: {
      header: {
        title: "PREMIUM COMBO",
        subtitle: "Pacote",
        image: comboPackageConquista,
      },
      included: {
        title: "O QUE ESTÁ INCLUSO:",
        items: [
          "<strong>Módulo 1 – Conquiste Seus Objetivos</strong> – Objetivos Cristalinos",
          "<strong>Módulo 2 – Estratégia e Planejamento</strong> – Seu Mapa de Sucesso",
          "<strong>Módulo 3 – Execução e Hábitos</strong> – Sistemas Diários para Vitória",
          "<strong>Bônus:</strong> E-book grátis da nossa coleção especialmente selecionada + <strong>Caderno de exercícios + Sistema Integrado</strong> – transforme 'algum dia' em 'feito' com métodos baseados em ciência.",
        ],
        buttonText: "COMEÇAR MINHA TRANSFORMAÇÃO COMPLETA",
        buttonLink: "https://pay.hotmart.com/P100552916T",
      },
      why: {
        line1: "POR QUE ESCOLHER O",
        paragraph:
          "Transforme seus sonhos em objetivos possíveis através de sistemas comprovados.",
        line2: "PACOTE COMPLETO?",
      },
      benefits: [
        {
          title: "Módulo 1",
          text: "Transforma seus desejos vagos em alvos que te puxam para frente.",
        },
        {
          title: "Módulo 2",
          text: "Mostra como fazer uma estratégia à prova de falhas que transformam obstáculos em degraus.",
        },
        {
          title: "Módulo 3",
          text: "Instala os sistemas diários e hábitos que tornam o sucesso automático.",
        },
      ],
      gradient: "bg-gradient-to-r from-[#8c2100] via-[#d14900] to-[#ff6c2e]",
      textColor: "text-white",
    },
    callToAction: {
      text: "O TEMPO NÃO PARA. SEU RESULTADO DEPENDE DO QUE VOCÊ FAZ AGORA!",
      buttonText: "QUERO CONQUISTAR AGORA",
      gradient: "bg-gradient-to-r from-amber-500 to-orange-500",
      textColor: "text-orange-900",
      buttonClasses:
        "bg-black/50 backdrop-blur-md border border-white/20 text-white shadow-lg \
   hover:bg-black/50 hover:border-white/40 hover:scale-105 active:scale-95 transition-all duration-300 px-8 py-4 rounded-full font-ttnorms font-bold uppercase",
    },
  },

  {
    slug: "autoestima",
    title: "Autoestima",
    subtitle:
      "Não é sobre fingir confiança, é construir um valor real que ninguém pode tirar de você.",
    heroImage: autoestimaImg,
    gradient:
      "bg-[radial-gradient(circle_at_0%_0%,_#eac7ff,_#bc6cff,_#7d3cb5)]",
    titleColor1: "text-[#4c007a]",
    titleColor2: "text-[#4c007a]",
    subtitleColor: "text-[#4c007a]",
    coursesBackgroundColor:
      "bg-[radial-gradient(circle_at_0%_0%,_#eac7ff,_#bc6cff,_#7d3cb5)]",

    domination: {
      title: "Você vai Descobrir",
      items: [
        "Como construir um valor autêntico e sólido que não depende da opinião dos outros",
        "Ferramentas práticas para reescrever sua história e dissolver autocrítica",
        "Hábitos diários que fortalecem a confiança de dentro pra fora",
        "Como transformar suas dores e desafios em fontes de força pessoal",
      ],
    },

    inclusions: {
      title: "O que está incluso:",
      items: [
        "Módulo 1 – Autoestima Verdadeira – As Raízes da Confiança Autêntica",
        "Módulo 2 – Transformando Sua História Pessoal – Reescreva Sua Narrativa",
        "Módulo 3 – Autoestima na Prática – Vivendo Seu Valor Diariamente",
        "Bônus – E-book GRÁTIS da nossa coleção + Caderno de Exercícios + Jornada Integrada: Dissolva auto dúvida para sempre e construa confiança que vem de dentro",
      ],
      price: {
        original: "R$ 297,00",
        installments: "12x de R$ 20,37*",
        full: "R$ 197,00",
      },
    },

    videoTestimonial: {
      text: "Construa autovalor inabalável de dentro para fora através de autoconhecimento profundo, transformação de história e práticas diárias que tornam a confiança seu estado natural.",
      videoId: "SEU_ID_DE_VIDEO_AQUI",
      // ✅ PADRONIZADO
      gradient: "bg-gradient-to-r from-[#4c007a] via-[#7e22ce] to-[#c084fc]",
      textColor: "text-white",
    },

    finalCta: {
      title: "O EFEITO COMPOSTO DA CONFIANÇA:",
      mainParagraph:
        "Quando esses cursos se unem, algo profundo acontece. A autoconfiança cria compaixão que derrete anos de crítica. A nova história cria permissão para brilhar sem pedir desculpas. As práticas diárias criam evidências que provam seu valor além de qualquer dúvida. Isso não é apenas sobre se sentir melhor – é sobre finalmente se tornar quem você deveria ser antes que o mundo te dissesse o contrário. É assim que pessoas que nunca se sentiram boas o suficiente se tornam imparáveis.",
      price: {
        original: "R$675,00",
        installments: "12x de R$52,75*",
        full: "R$510,00",
      },
      productImage: comboProductsImage,
      bonusParagraph:
        "Ao garantir o Pacote Completo de Transformação do Autovalor você recebe acesso aos três cursos do programa e ainda leva gratuitamente um e-book e caderno de exercícios especial, escrito por Flávia Cavalcante.",
      buttonText: "QUERO GARANTIR O PACOTE",
      // ✅ PADRONIZADO
      gradient: "bg-gradient-to-r from-[#4c007a] via-[#7e22ce] to-[#c084fc]",
      textColor: "text-white",
      borderColor: "border-white",
      buttonLink: "https://pay.hotmart.com/H100554096D",
      buttonClasses:
        "bg-black/50 backdrop-blur-md border border-white/20 text-white shadow-lg \
   hover:bg-black/50 hover:border-white/40 hover:scale-105 active:scale-95 transition-all duration-300 px-8 py-4 rounded-full font-ttnorms font-bold uppercase",
    },

    comboDetails: {
      header: {
        title: "PREMIUM COMBO",
        subtitle: "Pacote",
        image: comboPackageAutoestima,
      },
      included: {
        title: "O QUE ESTÁ INCLUSO:",
        items: [
          "<strong>Módulo 1 – Autoestima Verdadeira</strong> – As Raízes da Confiança Autêntica",
          "<strong>Módulo 2 – Transformando Sua História Pessoal</strong> – Reescreva Sua Narrativa",
          "<strong>Módulo 3 – Autoestima na Prática</strong> – Vivendo Seu Valor Diariamente",
          "<strong>Bônus:</strong> E-book gratuito + Caderno de exercícios + Jornada Integrada: Dissolva auto dúvida para sempre e construa confiança que vem de dentro",
        ],
        buttonText: "COMEÇAR MINHA TRANSFORMAÇÃO COMPLETA",
        buttonLink: "https://pay.hotmart.com/H100554096D",
      },
      why: {
        line1: "POR QUE ESCOLHER O",
        paragraph:
          "Aprenda a brilhar sem pedir desculpas – é sobre finalmente se tornar quem você deveria ser.",
        line2: "PACOTE COMPLETO?",
      },
      benefits: [
        {
          title: "Módulo 1",
          text: "Revela seu valor autêntico que sempre esteve lá.",
        },
        {
          title: "Módulo 2",
          text: "Ajuda você a reescrever a sua vida.",
        },
        {
          title: "Módulo 3",
          text: "Mostra como ter uma confiança inabalável.",
        },
      ],
      // ✅ PADRONIZADO
      gradient: "bg-gradient-to-r from-[#4c007a] via-[#7e22ce] to-[#c084fc]",
      textColor: "text-white",
    },
    callToAction: {
      text: "SUA AUTOESTIMA NASCE DE UMA DECISÃO, DÊ O PRIMEIRO PASSO HOJE!",
      buttonText: "COMEÇAR MINHA AUTOESTIMA",
      gradient: "bg-gradient-to-r from-fuchsia-500 to-purple-600",
      textColor: "text-white",
      buttonClasses:
        "bg-black/50 backdrop-blur-md border border-white/20 text-white shadow-lg \
   hover:bg-black/50 hover:border-white/40 hover:scale-105 active:scale-95 transition-all duration-300 px-8 py-4 rounded-full font-ttnorms font-bold uppercase",
    },
  },

  {
    slug: "relacionamento",
    title: "Relacionamento",
    subtitle:
      "Seu padrão no amor não é má sorte - é programação que você pode mudar!",
    heroImage: heroRelacionamentoImg,
    gradient:
      "bg-[radial-gradient(circle_at_0%_0%,_#fecaca,_#f87171,_#dc2626)]",
    titleColor1: "text-[#7f1d1d]",
    titleColor2: "text-[#7f1d1d]",
    subtitleColor: "text-[#7f1d1d]",
    coursesBackgroundColor:
      "bg-[radial-gradient(circle_at_0%_0%,_#fecaca,_#f87171,_#dc2626)]",

    // Seções de conteúdo da página da categoria
    videoTestimonial: {
      text: "Aprenda a construir o amor que você sempre quis, começando por dentro. Liberte-se de padrões tóxicos e construa um amor que se aprofunda com o tempo.",
      videoId: "SEU_ID_DE_VIDEO_AQUI",
      gradient: "bg-gradient-to-r from-[#7f1d1d] via-[#b91c1c] to-[#ef4444]",
      textColor: "text-white",
    },
    finalCta: {
      title: "O EFEITO MULTIPLICAÇÃO DO AMOR:",
      mainParagraph:
        "Quando esses cursos trabalham juntos, os relacionamentos se tornam mágicos. Os padrões curados criam espaço para o amor real crescer. As habilidades de comunicação criam segurança onde a vulnerabilidade se torna força. A mentalidade de crescimento transforma conflitos em catalisadores para conexão mais profunda. Isso não é apenas sobre encontrar ou consertar amor - é sobre se tornar alguém que cria relacionamentos extraordinários naturalmente. É assim que pessoas que foram feridas se tornam curadoras do amor.",
      price: {
        original: "R$ 675,00",
        installments: "12x de R$52,75*",
        full: "R$ 510,00",
      },
      productImage: comboProductsImage, // Use a imagem correta do combo
      bonusParagraph:
        "Ao garantir o Pacote Completo de Transformação Relacional você recebe acesso aos três cursos do programa e ainda leva gratuitamente um e-book e caderno de exercícios especial, escrito por Flávia Cavalcante.",
      buttonText: "QUERO GARANTIR O PACOTE",
      gradient: "bg-gradient-to-r from-[#7f1d1d] via-[#b91c1c] to-[#ef4444]",
      textColor: "text-white",
      borderColor: "border-white",
      buttonLink: "https://pay.hotmart.com/D100554896F", // Inserir link do pacote
      buttonClasses:
        "bg-black/50 backdrop-blur-md border border-white/20 text-white shadow-lg \
   hover:bg-black/50 hover:border-white/40 hover:scale-105 active:scale-95 transition-all duration-300 px-8 py-4 rounded-full font-ttnorms font-bold uppercase",
    },
    comboDetails: {
      header: {
        title: "Premium Combo",
        subtitle: "Pacote",
        image: comboPackageRelacionamento,
      },
      included: {
        title: "O QUE ESTÁ INCLUSO:",
        items: [
          "<strong>Módulo 1. Revolução do Amor</strong> – Quebrando Ciclos, Construindo Fundações",
          "<strong>Módulo 2. Comunicação e Intimidade</strong> – A Arte da Conexão Real",
          "<strong>Módulo 3. Crescimento e Evolução</strong> – Relacionamentos Como Prática Espiritual",
          "<strong>Bônus: E-book grátis</strong> da nossa coleção especialmente selecionada + <strong>Caderno de exercícios + Sistema Revolucionário</strong> - liberte-se de padrões tóxicos e construa amor que se aprofunda com o tempo.",
        ],
        buttonText: "COMEÇAR MINHA TRANSFORMAÇÃO COMPLETA",
        buttonLink: "https://pay.hotmart.com/D100554896F", // Inserir link do pacote
      },
      why: {
        line1: "POR QUE ESCOLHER O",
        paragraph:
          "Aprenda a construir o amor que você sempre quis, começando por dentro.",
        line2: "PACOTE COMPLETO?",
      },
      benefits: [
        {
          title: "Módulo 1",
          text: "Constrói a base de amor-próprio que os relacionamentos saudáveis exigem.",
        },
        {
          title: "Módulo 2",
          text: "Ensina a arte sagrada da intimidade verdadeira.",
        },
        {
          title: "Módulo 3",
          text: "Eleva seu relacionamento a uma versão mais elevada.",
        },
      ],
      gradient: "bg-gradient-to-r from-[#7f1d1d] via-[#b91c1c] to-[#ef4444]",
      textColor: "text-white",
    },
    callToAction: {
      text: 'CRIE NATURALMENTE RELACIONAMENTOS EXTRAORDINÁRIOS, PASSANDO DE UMA PESSOA QUE FOI FERIDA, PARA ALGUÉM QUE SE TORNA "CURADORA DO AMOR".',
      buttonText: "VIVER UM AMOR DE VERDADE",
      gradient: "bg-gradient-to-r from-red-500 to-rose-500",
      textColor: "text-white",
      buttonClasses: "bg-rose-900 text-white border-rose-900 hover:bg-rose-800",
    },
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
    title: "Módulo 1",
    imageSrc: capaSaude1,
    imageText: "Transforme sua vida",
    heading: "Transforme sua vida",
    description: "O Caminho Completo para uma vida saudável e feliz.",
    priceInstallments: "12x de R$ 20,37*",
    priceFull: "R$ 197,00",
    isHighlighted: false,
    purchaseLink: "https://pay.hotmart.com/D100523521C",

    theme: {
      normal: {
        // <--- Estilos para o card normal
        cardBg: "bg-white/10 backdrop-blur-md",
        borderColor: "border-white hover:border-saude-vivid-azure",
        titleColor: "text-saude-dark-blue",
        textColor: "text-saude-dark-blue",
        buttonBg: "bg-saude-dark-blue",
        buttonText: "text-white",
        priceBg: "bg-red-500",
        learnMoreVariant: "dark",
      },
      highlighted: {
        // <--- Mesmo assim, é bom definir
        cardBg: "bg-saude-dark-blue",
        borderColor: "border-saude-vivid-azure",
        titleColor: "text-white",
        textColor: "text-white/80",
        buttonBg: "bg-white",
        buttonText: "text-saude-dark-blue",
        priceBg: "bg-red-500",
        learnMoreVariant: "light",
      },
    },

    // Dados para a PÁGINA DETALHADA do Módulo 1
    details: {
      pageTitle: "TRANSFORME SUA VIDA",
      pageSubtitle: "Módulo 1",
      description:
        "Reprogramar seus hábitos diários e acender sua energia. Senso de largada.",
      longDescription:
        "Esta jornada abrangente ensina os pilares da verdadeira transformação da saúde através de pequenas mudanças sustentáveis que criam resultados extraordinários.",
      heroImage: capaSaude1,
      purchaseLink: "https://pay.hotmart.com/D100523521C",
      detailsBackgroundColor: "bg-gradient-to-r from-[#203162] to-[#00afdb]",
      domination: {
        title: "Você vai Dominar",
        items: [
          "Rotinas de movimento para todos os níveis de condicionamento (iniciante a avançado)",
          "Superalimentos brasileiros que transformam a saúde de forma acessível",
          "Técnicas de gerenciamento do estresse que realmente funcionam",
          "Encontrar seu propósito de vida através do método japonês Ikigai",
        ],
      },
      inclusions: {
        title: "O que está incluso:",
        items: [
          "6 módulos abrangentes",
          "Todo o conteúdo em vídeo do Módulo 1",
          "Checklist semanal de transformação",
          "Plano de ação personalizado de 90 dias",
          "BÔNUS: E-book gratuito da nossa coleção especialmente selecionada + Caderno de exercícios",
        ],
        price: {
          original: "R$ 297,00",
          installments: "12x de R$ 20,37*",
          full: "R$ 197,00",
        },
      },
    },
  },

  {
    // Módulo 2
    id: 2,
    categorySlug: "saude-fisica",
    title: "Módulo 2",
    imageSrc: capaSaude2,
    imageText: "Corrida para a vida",
    heading: "Corrida para a vida",
    description: "Transforme Seu Corpo e Mente Através do Movimento.",
    priceInstallments: "12x de R$ 20,37*",
    priceFull: "R$ 197,00",
    isHighlighted: true,
    purchaseLink: "https://pay.hotmart.com/U100523572Y",

    theme: {
      normal: {
        // <--- Estilos para o card normal
        cardBg: "bg-white/10 backdrop-blur-md",
        borderColor: "border-white hover:border-saude-vivid-azure",
        titleColor: "text-saude-dark-blue",
        textColor: "text-saude-dark-blue",
        buttonBg: "bg-saude-dark-blue",
        buttonText: "text-white",
        priceBg: "bg-red-500",
        learnMoreVariant: "dark",
      },
      highlighted: {
        // <--- Mesmo assim, é bom definir
        cardBg: "bg-saude-dark-blue",
        borderColor: "border-saude-vivid-azure",
        titleColor: "text-white",
        textColor: "text-white/80",
        buttonBg: "bg-white",
        buttonText: "text-saude-dark-blue",
        priceBg: "bg-red-500",
        learnMoreVariant: "light",
      },
    },

    details: {
      pageTitle: "CORRIDA PARA A VIDA",
      pageSubtitle: "Módulo 2",
      description: "Transforme Seu Corpo e Mente Através do Movimento",
      longDescription:
        "Do sofá aos 5Km e além - descubra como a corrida se torna meditação em movimento. Junte-se a milhares que transformaram suas vidas um passo de cada vez, independente da idade ou nível de condicionamento.",
      heroImage: capaSaude2,
      purchaseLink: "https://pay.hotmart.com/U100523572Y",
      detailsBackgroundColor: "bg-gradient-to-r from-[#203162] to-[#00afdb]",
      domination: {
        title: "VOCÊ VAI DOMINAR",
        items: [
          "Método progressivo do zero aos 5Km em 8 semanas",
          "Como acessar a euforia do corredor naturalmente",
          "Corrida como terapia",
          "Técnica adequada para prevenir lesões",
          "Estilo de vida pessoal de corredor que se sustenta para sempre",
        ],
      },
      inclusions: {
        title: "O QUE ESTÁ INCLUSO?",
        items: [
          "7 módulos progressivos",
          "Plano de treino 5Km completo",
          "Todo o conteúdo do Módulo 2 em vídeo",
        ],
        price: {
          original: "R$ 297,00",
          installments: "12x de R$ 20,37*",
          full: "R$ 197,00",
        },
      },
    },
  },

  // Módulo 3
  {
    id: 3,
    categorySlug: "saude-fisica",
    title: "Módulo 3",
    imageSrc: capaSaude3,
    imageText: "Corrida Elite",
    heading: "Corrida de Elite",
    description: "Performance, Longevidade, Competência e Excelência.",
    priceInstallments: "12x de R$ 20,37*",
    priceFull: "R$ 197,00",
    isHighlighted: false,
    purchaseLink: "https://pay.hotmart.com/M100523733D",

    theme: {
      normal: {
        // <--- Estilos para o card normal
        cardBg: "bg-white/10 backdrop-blur-md",
        borderColor: "border-white hover:border-saude-vivid-azure",
        titleColor: "text-saude-dark-blue",
        textColor: "text-saude-dark-blue",
        buttonBg: "bg-saude-dark-blue",
        buttonText: "text-white",
        priceBg: "bg-red-500",
        learnMoreVariant: "dark",
      },
      highlighted: {
        // <--- Mesmo assim, é bom definir
        cardBg: "bg-saude-dark-blue",
        borderColor: "border-saude-vivid-azure",
        titleColor: "text-white",
        textColor: "text-white/80",
        buttonBg: "bg-white",
        buttonText: "text-saude-dark-blue",
        priceBg: "bg-red-500",
        learnMoreVariant: "light",
      },
    },

    details: {
      pageTitle: "CORRIDA ELITE",
      pageSubtitle: "Módulo 3",
      description: "Performance, Longevidade e Transcendência",
      longDescription:
        "Para corredores prontos para quebrar barreiras e correr forte por décadas. Domine técnicas avançadas usadas por atletas olímpicos enquanto aprende a manter performance máxima em qualquer idade.",
      heroImage: capaSaude3,
      purchaseLink: "https://pay.hotmart.com/M100523733D",
      detailsBackgroundColor: "bg-gradient-to-r from-[#203162] to-[#00afdb]",
      domination: {
        title: "VOCÊ VAI DOMINAR",
        items: [
          "Quebrando platos de performance cientificamente",
          "Correndo forte através das décadas (adaptações específicas por idade)",
          "Estratégias de nutrição de alta performance",
          "A dimensão mental e espiritual da ultra performance",
        ],
      },
      inclusions: {
        title: "O QUE ESTÁ INCLUSO:",
        items: [
          "7 módulos avançados",
          "Protocolos e planos de treino elite",
          "Todo o conteúdo do Módulo 3 em vídeo",
        ],
        price: {
          original: "R$ 297,00",
          installments: "12x de R$ 20,37*",
          full: "R$ 197,00",
        },
      },
    },
  },
  {
    id: 4,
    categorySlug: "financeiro",
    slug: "mentalidade-e-fundamentos",
    title: "Módulo 1",
    imageSrc: capaFinanceiro1, // ⚠️ Use a variável da imagem correta
    imageText: "Mentalidade & Fundamentos",
    heading: "Mentalidade e Fundamentos",
    description:
      "Reprograme sua relação com o dinheiro e construa as bases sólidas da riqueza real.",
    priceInstallments: "12x de R$ 20,37*",
    priceFull: "R$ 197,00",
    isHighlighted: false,
    purchaseLink: "https://pay.hotmart.com/P100490999L", // ⚠️ Link do Módulo 1

    theme: {
      normal: {
        // <--- Estilos para o card normal
        cardBg: "bg-white/10 backdrop-blur-md",
        borderColor: "border-white hover:border-financeiro-light-green",
        titleColor: "text-financeiro-dark-green",
        textColor: "text-financeiro-dark-green",
        buttonBg: "bg-financeiro-dark-green",
        buttonText: "text-white",
        priceBg: "bg-red-500",
        learnMoreVariant: "dark",
      },
      highlighted: {
        // <--- Estilos para o card destacado
        cardBg: "bg-financeiro-dark-green",
        borderColor: "border-financeiro-light-green",
        titleColor: "text-white",
        textColor: "text-white/80",
        buttonBg: "bg-financeiro-light-green",
        buttonText: "text-financeiro-dark-green",
        priceBg: "bg-red-500",
        learnMoreVariant: "light",
      },
    },

    // ========= DETALHES DO Módulo 1 PREENCHIDOS =========
    details: {
      detailsBackgroundColor:
        "bg-gradient-to-r from-[#1a300f] via-[#3e722f] to-[#8aaf76]",
      pageTitle: "MENTALIDADE E FUNDAMENTOS DA INDEPENDÊNCIA FINANCEIRA",
      pageSubtitle: "Módulo 1",
      description: "Reprograme sua consciência de riqueza",
      longDescription:
        "O curso Mentalidade e Fundamentos da Independência Financeira oferece as bases cognitivas e estratégicas essenciais para quem deseja romper com ciclos de escassez e construir, de forma consistente, um caminho sólido rumo à liberdade financeira.",
      heroImage: capaFinanceiro1, // ⚠️ Use a variável da imagem correta
      purchaseLink: "https://pay.hotmart.com/P100490999L", // ⚠️ Link do Módulo 1
      domination: {
        title: "Você vai Dominar:",
        items: [
          "Reprogramar crenças limitantes sobre dinheiro e riqueza",
          "Educação financeira completa: investimentos, poupança e multiplicação",
          "Mentalidade de abundância que atrai oportunidades",
          "Disciplina financeira para construir patrimônio sólido",
          "Planejamento estratégico da sua independência financeira.",
        ],
      },
      inclusions: {
        title: "O que está incluso:",
        items: [
          "7 módulos poderosos em vídeo",
          "Todo o conteúdo em vídeo do Módulo 1",
          "Diagnósticos e calculadoras financeiras completas.",
          "Roteiro personalizado de liberdade para 5 anos",
          "BÔNUS: E-book gratuito da nossa coleção especialmente selecionada + caderno de exercícios",
        ],
        price: {
          original: "R$ 297,00",
          installments: "12x de R$ 20,37*",
          full: "R$ 197,00",
        },
      },
    },
  },
  {
    id: 5,
    categorySlug: "financeiro",
    slug: "mindset-empreendedor",
    title: "Módulo 2",
    imageSrc: capaFinanceiro2, // ⚠️ Use a variável da imagem correta
    imageText: "Mindset Empreendedor",
    heading: "Mindset Empreendedor",
    description: "Desperte o empreendedor que existe em você.",
    priceInstallments: "12x de R$ 20,37*",
    priceFull: "R$ 197,00",
    isHighlighted: true,
    purchaseLink: "https://pay.hotmart.com/K100501434N", // ⚠️ Link do Módulo 2

    theme: {
      normal: {
        // <--- Estilos para o card normal
        cardBg: "bg-white/10 backdrop-blur-md",
        borderColor: "border-white hover:border-financeiro-light-green",
        titleColor: "text-financeiro-dark-green",
        textColor: "text-financeiro-dark-green",
        buttonBg: "bg-financeiro-dark-green",
        buttonText: "text-white",
        priceBg: "bg-red-500",
        learnMoreVariant: "dark",
      },
      highlighted: {
        // <--- Estilos para o card destacado
        cardBg: "bg-financeiro-dark-green",
        borderColor: "border-financeiro-light-green",
        titleColor: "text-white",
        textColor: "text-white/80",
        buttonBg: "bg-financeiro-light-green",
        buttonText: "text-financeiro-dark-green",
        priceBg: "bg-red-500",
        learnMoreVariant: "light",
      },
    },

    // ========= DETALHES DO Módulo 2 PREENCHIDOS =========
    details: {
      detailsBackgroundColor:
        "bg-gradient-to-r from-[#1a300f] via-[#3e722f] to-[#8aaf76]",
      pageTitle: "MINDSET EMPREENDEDOR",
      pageSubtitle: "Módulo 2",
      description: "Como criar fontes de renda a partir de suas paixões",
      longDescription:
        "Descubra um modelo estruturado para identificar habilidades pessoais com potencial de monetização, desenvolver visão estratégica e implementar fontes de renda alinhadas com propósito, gerando autonomia financeira com base em princípios validados do empreendedorismo moderno.",
      heroImage: capaFinanceiro2, // ⚠️ Use a variável da imagem correta
      purchaseLink: "https://pay.hotmart.com/K100501434N", // ⚠️ Link do Módulo 2
      domination: {
        title: "Você vai Dominar:",
        items: [
          "Identificar oportunidades onde outros veem problemas",
          "Mindset de risco calculado e tomada de decisão rápida",
          "Resiliência empreendedora para superar fracassos",
          "Networking estratégico e construção de relacionamentos valiosos",
          "Visão de negócios e timing de mercado",
        ],
      },
      inclusions: {
        title: "O que está incluso:",
        items: [
          "6 módulos abrangentes",
          "Todo o conteúdo em vídeo do Módulo 2",
          "Templates de criação de produtos e sistemas",
          "Roteiro de escala do zero aos milhões",
        ],
        price: {
          original: "R$ 297,00",
          installments: "12x de R$ 20,37*",
          full: "R$ 197,00",
        },
      },
    },
  },
  {
    id: 6,
    categorySlug: "financeiro",
    slug: "escala-e-investimentos",
    title: "Módulo 3",
    imageSrc: capaFinanceiro3, // ⚠️ Use a variável da imagem correta
    imageText: "Escala e Investimentos",
    heading: "Escala e Investimentos",
    description:
      "Onde a visão encontra a ação para transformar ideias em máquinas de crescimento.",
    priceInstallments: "12x de R$ 20,37*",
    priceFull: "R$ 197,00",
    isHighlighted: false,
    purchaseLink: "https://pay.hotmart.com/I100501499Q", // ⚠️ Link do Módulo 3

    theme: {
      normal: {
        // <--- Estilos para o card normal
        cardBg: "bg-white/10 backdrop-blur-md",
        borderColor: "border-white hover:border-financeiro-light-green",
        titleColor: "text-financeiro-dark-green",
        textColor: "text-financeiro-dark-green",
        buttonBg: "bg-financeiro-dark-green",
        buttonText: "text-white",
        priceBg: "bg-red-500",
        learnMoreVariant: "dark",
      },
      highlighted: {
        // <--- Estilos para o card destacado
        cardBg: "bg-financeiro-dark-green",
        borderColor: "border-financeiro-light-green",
        titleColor: "text-white",
        textColor: "text-white/80",
        buttonBg: "bg-financeiro-light-green",
        buttonText: "text-financeiro-dark-green",
        priceBg: "bg-red-500",
        learnMoreVariant: "light",
      },
    },

    // ========= DETALHES DO Módulo 3 PREENCHIDOS =========
    details: {
      detailsBackgroundColor:
        "bg-gradient-to-r from-[#1a300f] via-[#3e722f] to-[#8aaf76]",
      pageTitle: "ESCALA E INVESTIMENTOS INTELIGENTES PARA EMPREENDEDORES",
      pageSubtitle: "Módulo 3",
      description: "Como multiplicar essa renda enquanto você dorme.",
      longDescription:
        "Uma abordagem estratégica para alavancar negócios e otimizar capital, integrando técnicas de crescimento escalável com inteligência financeira aplicada - ideal para quem busca alta performance e liberdade econômica real.",
      heroImage: capaFinanceiro3, // ⚠️ Use a variável da imagem correta
      purchaseLink: "https://pay.hotmart.com/I100501499Q", // ⚠️ Link do Módulo 3
      domination: {
        title: "As Estratégias Avançadas Incluem:",
        items: [
          "Sistemas automatizados que funcionam sem você",
          "Processos escaláveis para crescimento exponencial",
          "Gestão de equipes de alta performance",
          "Métricas que impulsionam resultados",
          "Estratégias de expansão e multiplicação de negócios",
        ],
      },
      inclusions: {
        title: "O que está incluso:",
        items: [
          "6 módulos avançados",
          "Todo o conteúdo em vídeo do Módulo 3",
          "Calculadoras de investimento e templates de carteira",
          "Roteiro com cronogramas para alcançar o milhão",
        ],
        price: {
          original: "R$ 297,00",
          installments: "12x de R$ 20,37*",
          full: "R$ 197,00",
        },
      },
    },
  },

  {
    id: 7,
    categorySlug: "conquista",
    slug: "conquiste-seus-objetivos",
    title: "Módulo 1",
    imageSrc: capaConquista1,
    imageText: "Conquiste Seus Objetivos",
    heading: "Conquiste Seus Objetivos",
    description: "Objetivos Claros e Diretos",
    priceInstallments: "12x de R$ 20,37*",
    priceFull: "R$ 197,00",
    isHighlighted: false,
    purchaseLink: "https://pay.hotmart.com/N100552688F",

    theme: {
      normal: {
        cardBg: "bg-white/10 backdrop-blur-md",
        borderColor: "border-white hover:border-[#ff6c2e]",
        titleColor: "text-[#8c2100]",
        textColor: "text-[#8c2100]",
        buttonBg: "bg-[#8c2100]",
        buttonText: "text-white",
        priceBg: "bg-red-500",
        learnMoreVariant: "dark",
      },
      highlighted: {
        cardBg: "bg-[#8c2100]",
        borderColor: "border-[#ff6c2e]",
        titleColor: "text-white",
        textColor: "text-white/80",
        buttonBg: "bg-white",
        buttonText: "text-[#8c2100]",
        priceBg: "bg-red-500",
        learnMoreVariant: "light",
      },
    },

    details: {
      pageTitle: "CONQUISTE SEUS OBJETIVOS",
      pageSubtitle: "Módulo 1",
      description: "Objetivos Claros e Diretos Que Te Puxam Para Frente",
      longDescription:
        "Esta jornada abrangente é um método prático e validado de definição, planejamento e execução de metas, desenvolvido para maximizar desempenho pessoal e acelerar resultados em qualquer área da vida.",
      heroImage: capaConquista1,
      purchaseLink: "https://pay.hotmart.com/N100552688F",
      detailsBackgroundColor:
        "bg-gradient-to-r from-[#8c2100] via-[#d14900] to-[#ff6c2e]",
      domination: {
        title: "Você vai Dominar:",
        items: [
          "A neurociência de por que 92% dos objetivos falham (e junte-se aos 8%)",
          "Método S.M.A.R.T. TURBINADO – objetivos tão claros que são inevitáveis",
          "Mapeamento da Zona de Gênio – onde esforço parece brincadeira",
          "O sistema de foco em 3 objetivos para máxima transformação de vida",
          "Transformando sonhos vagos em vitórias específicas e mensuráveis",
        ],
      },
      inclusions: {
        title: "O que está incluso:",
        items: [
          "6 módulos transformadores",
          "Todo o conteúdo em vídeo do Módulo 1",
          "Ferramentas de avaliação da Zona de Gênio",
          "Roteiro de transformação de 90 dias",
          "BÔNUS: E-book gratuito da nossa coleção especialmente selecionada + caderno de exercícios",
        ],
        price: {
          original: "R$ 297,00",
          installments: "12x de R$ 20,37*",
          full: "R$ 197,00",
        },
      },
    },
  },

  {
    id: 8,
    categorySlug: "conquista",
    slug: "estrategia-e-planejamento",
    title: "Módulo 2",
    imageSrc: capaConquista2,
    imageText: "Estratégia e Planejamento",
    heading: "Estratégia e Planejamento",
    description: "Seu Mapa de Sucesso",
    priceInstallments: "12x de R$ 20,37*",
    priceFull: "R$ 197,00",
    isHighlighted: true,
    purchaseLink: "https://pay.hotmart.com/H100552734W",

    theme: {
      normal: {
        cardBg: "bg-white/10 backdrop-blur-md",
        borderColor: "border-white hover:border-[#ff6c2e]",
        titleColor: "text-[#8c2100]",
        textColor: "text-[#8c2100]",
        buttonBg: "bg-[#8c2100]",
        buttonText: "text-white",
        priceBg: "bg-red-500",
        learnMoreVariant: "dark",
      },
      highlighted: {
        cardBg: "bg-[#8c2100]",
        borderColor: "border-[#ff6c2e]",
        titleColor: "text-white",
        textColor: "text-white/80",
        buttonBg: "bg-white",
        buttonText: "text-[#8c2100]",
        priceBg: "bg-red-500",
        learnMoreVariant: "light",
      },
    },

    details: {
      pageTitle: "ESTRATÉGIA E PLANEJAMENTO",
      pageSubtitle: "Módulo 2",
      description: "Seu Mapa de Sucesso",
      longDescription:
        "A diferença entre sonhadores e conquistadores não é talento – é ter um mapa. Crie seu GPS para o sucesso com estratégias que antecipam obstáculos antes que apareçam.",
      heroImage: capaConquista2,
      purchaseLink: "https://pay.hotmart.com/H100552734W",
      detailsBackgroundColor:
        "bg-gradient-to-r from-[#8c2100] via-[#d14900] to-[#ff6c2e]",
      domination: {
        title: "Você vai Dominar:",
        items: [
          "Mapeamento da jornada da realidade atual ao destino desejado",
          "Planejamento reverso que garante chegada no prazo",
          "Sistemas de antecipação de obstáculos e contingência",
          "Acompanhamento de progresso que mantém você motivado",
        ],
      },
      inclusions: {
        title: "O que está incluso:",
        items: [
          "6 módulos estratégicos",
          "Todo o conteúdo em vídeo do Módulo 2",
          "Templates e ferramentas completas de planejamento",
        ],
        price: {
          original: "R$ 297,00",
          installments: "12x de R$ 20,37*",
          full: "R$ 197,00",
        },
      },
    },
  },

  {
    id: 9,
    categorySlug: "conquista",
    slug: "execucao-e-habitos",
    title: "Módulo 3",
    imageSrc: capaConquista3,
    imageText: "Execução e Hábitos",
    heading: "Execução e Hábitos",
    description: "Hábitos Diários para Vitória",
    priceInstallments: "12x de R$ 20,37*",
    priceFull: "R$ 197,00",
    isHighlighted: false,
    purchaseLink: "https://pay.hotmart.com/K100552838U",

    theme: {
      normal: {
        cardBg: "bg-white/10 backdrop-blur-md",
        borderColor: "border-white hover:border-[#ff6c2e]",
        titleColor: "text-[#8c2100]",
        textColor: "text-[#8c2100]",
        buttonBg: "bg-[#8c2100]",
        buttonText: "text-white",
        priceBg: "bg-red-500",
        learnMoreVariant: "dark",
      },
      highlighted: {
        cardBg: "bg-[#8c2100]",
        borderColor: "border-[#ff6c2e]",
        titleColor: "text-white",
        textColor: "text-white/80",
        buttonBg: "bg-white",
        buttonText: "text-[#8c2100]",
        priceBg: "bg-red-500",
        learnMoreVariant: "light",
      },
    },

    details: {
      pageTitle: "EXECUÇÃO E HÁBITOS",
      pageSubtitle: "Módulo 3",
      description: "O Sistema de 1% Diário que Cria Resultados Incríveis",
      longDescription:
        "Planos sem execução são só desejos. Domine a ciência de micro gerenciar e construir hábitos automáticos que fazem o sucesso ser inevitável.",
      heroImage: capaConquista3,
      purchaseLink: "https://pay.hotmart.com/K100552838U",
      detailsBackgroundColor:
        "bg-gradient-to-r from-[#8c2100] via-[#d14900] to-[#ff6c2e]",
      domination: {
        title: "Você vai Dominar:",
        items: [
          "A fórmula conjunta de 1% – Pequenas conquistas diárias criam grandes resultados",
          "A arquitetura de hábito para crescimento automático",
          "Um indicador pessoal que move ações diárias",
          "Rotinas matinais e noturnas para vencedores",
          "Superação de resistência por sistemas comprovados",
        ],
      },
      inclusions: {
        title: "O que está incluso:",
        items: [
          "6 Módulos Práticos",
          "Todo o conteúdo em vídeo do Módulo 3",
          "Templates e ferramentas para acompanhamento de hábitos",
          "Protocolos personalizados de execução",
        ],
        price: {
          original: "R$ 297,00",
          installments: "12x de R$ 20,37*",
          full: "R$ 197,00",
        },
      },
    },
  },

  {
    id: 10,
    categorySlug: "autoestima",
    slug: "autoestima-verdadeira",
    title: "Módulo 1",
    imageSrc: capaAutoestima1,
    imageText: "Autoestima Verdadeira",
    heading: "Autoestima Verdadeira",
    description: "Mostrando o valor autêntico que sempre esteve com você",
    priceInstallments: "12x de R$ 20,37*",
    priceFull: "R$ 197,00",
    isHighlighted: false,
    purchaseLink: "https://pay.hotmart.com/X100553890H",
    theme: {
      normal: {
        cardBg: "bg-white/10 backdrop-blur-md",
        borderColor: "border-white hover:border-[#c084fc]",
        titleColor: "text-[#4c007a]",
        textColor: "text-[#4c007a]",
        buttonBg: "bg-[#4c007a]",
        buttonText: "text-white",
        priceBg: "bg-red-500",
        learnMoreVariant: "dark",
      },
      highlighted: {
        cardBg: "bg-[#4c007a]",
        borderColor: "border-[#c084fc]",
        titleColor: "text-white",
        textColor: "text-white/80",
        buttonBg: "bg-white",
        buttonText: "text-[#4c007a]",
        priceBg: "bg-red-500",
        learnMoreVariant: "light",
      },
    },
    details: {
      pageTitle: "AUTOESTIMA VERDADEIRA",
      pageSubtitle: "Módulo 1",
      description: "Mostrando o valor autêntico que sempre esteve com você",
      longDescription:
        "Propõe um modelo estruturado de desenvolvimento da autoestima baseado em ciência comportamental, promovendo mudanças na forma como você se posiciona, decide e age – impactando diretamente seus resultados pessoais e profissionais.",
      heroImage: capaAutoestima1,
      purchaseLink: "https://pay.hotmart.com/X100553890H",
      // ✅ PADRONIZADO
      detailsBackgroundColor:
        "bg-gradient-to-r from-[#4c007a] via-[#7e22ce] to-[#c084fc]",
      domination: {
        title: "Você vai Descobrir:",
        items: [
          "A diferença fundamental entre confiança genuína e aparência superficial",
          "Como funciona a neurociência por trás da autoestima sólida",
          "Estratégias para sair do ciclo vicioso de buscar aprovação externa",
          "Métodos para quebrar padrões tóxicos de pensamento",
          "Como fortalecer seu autovalor mesmo em momentos difíceis",
        ],
      },
      inclusions: {
        title: "O que está incluso:",
        items: [
          "6 módulos transformadores",
          "Todo o conteúdo em vídeo do Módulo 1 em Vídeo",
          "Ferramentas completas de avaliação de autoestima",
          "Roteiro de transformação de 90 dias",
          "BÔNUS: E-book gratuito da nossa coleção especialmente selecionada + caderno de exercícios",
        ],
        price: {
          original: "R$ 297,00",
          installments: "12x de R$ 20,37*",
          full: "R$ 197,00",
        },
      },
    },
  },
  {
    id: 11,
    categorySlug: "autoestima",
    slug: "transformando-sua-historia-pessoal",
    title: "Módulo 2",
    imageSrc: capaAutoestima2,
    imageText: "Transformando Sua História Pessoal",
    heading: "Transformando Sua História Pessoal",
    description: "Rescreva Seu Passado para Empoderar Seu Futuro",
    priceInstallments: "12x de R$ 20,37*",
    priceFull: "R$ 197,00",
    isHighlighted: true, // DESTAQUE ADICIONADO PARA Módulo 2
    purchaseLink: "https://pay.hotmart.com/M100553936N",
    theme: {
      normal: {
        cardBg: "bg-white/10 backdrop-blur-md",
        borderColor: "border-white hover:border-[#c084fc]",
        titleColor: "text-[#4c007a]",
        textColor: "text-[#4c007a]",
        buttonBg: "bg-[#4c007a]",
        buttonText: "text-white",
        priceBg: "bg-red-500",
        learnMoreVariant: "dark",
      },
      highlighted: {
        cardBg: "bg-[#4c007a]",
        borderColor: "border-[#c084fc]",
        titleColor: "text-white",
        textColor: "text-white/80",
        buttonBg: "bg-white",
        buttonText: "text-[#4c007a]",
        priceBg: "bg-red-500",
        learnMoreVariant: "light",
      },
    },
    details: {
      pageTitle: "TRANSFORMANDO SUA HISTÓRIA PESSOAL",
      pageSubtitle: "Módulo 2",
      description: "Rescreva Seu Passado para Empoderar Seu Futuro",
      longDescription:
        "É um convite para olhar com coragem para sua trajetória, ressignificar dores do passado e construir, com consciência e leveza, uma nova versão de si mesmo – mais alinhada com quem você realmente é.",
      heroImage: capaAutoestima2,
      purchaseLink: "https://pay.hotmart.com/M100553936N",
      // ✅ PADRONIZADO
      detailsBackgroundColor:
        "bg-gradient-to-r from-[#4c007a] via-[#7e22ce] to-[#c084fc]",
      domination: {
        title: "Você vai Descobrir:",
        items: [
          "Técnicas para se libertar do peso emocional do passado",
          "Como transformar experiências dolorosas em fontes de força",
          "O processo do perdão verdadeiro (não superficial)",
          "Métodos para rescrever sua narrativa pessoal de forma empoderada",
          "Como valorizar sua jornada, incluindo os desafios",
        ],
      },
      inclusions: {
        title: "O que está incluso:",
        items: [
          "6 módulos poderosos",
          "Todo o conteúdo em vídeo do Módulo 2",
          "Templates de transformação de história",
          "Ferramentas de reconstrução de narrativa pessoal",
        ],
        price: {
          original: "R$ 297,00",
          installments: "12x de R$ 20,37*",
          full: "R$ 197,00",
        },
      },
    },
  },
  {
    id: 12,
    categorySlug: "autoestima",
    slug: "autoestima-na-pratica",
    title: "Módulo 3",
    imageSrc: capaAutoestima3,
    imageText: "Autoestima na Prática",
    heading: "Autoestima na Prática",
    description: "Como ter uma Confiança Inabalável",
    priceInstallments: "12x de R$ 20,37*",
    priceFull: "R$ 197,00",
    isHighlighted: false,
    purchaseLink: "https://pay.hotmart.com/Q100553998T",
    theme: {
      normal: {
        cardBg: "bg-white/10 backdrop-blur-md",
        borderColor: "border-white hover:border-[#c084fc]",
        titleColor: "text-[#4c007a]",
        textColor: "text-[#4c007a]",
        buttonBg: "bg-[#4c007a]",
        buttonText: "text-white",
        priceBg: "bg-red-500",
        learnMoreVariant: "dark",
      },
      highlighted: {
        cardBg: "bg-[#4c007a]",
        borderColor: "border-[#c084fc]",
        titleColor: "text-white",
        textColor: "text-white/80",
        buttonBg: "bg-white",
        buttonText: "text-[#4c007a]",
        priceBg: "bg-red-500",
        learnMoreVariant: "light",
      },
    },
    details: {
      pageTitle: "AUTOESTIMA NA PRÁTICA",
      pageSubtitle: "Módulo 3",
      description: "Como ter uma Confiança Inabalável",
      longDescription:
        "Teoria sem prática é apenas pensamento desejoso. Construa os hábitos diários, limites e habilidades de comunicação que tornam a autoestima sua forma automática de ser.",
      heroImage: capaAutoestima3,
      purchaseLink: "https://pay.hotmart.com/Q100553998T",
      // ✅ PADRONIZADO
      detailsBackgroundColor:
        "bg-gradient-to-r from-[#4c007a] via-[#7e22ce] to-[#c084fc]",
      domination: {
        title: "Você vai Descobrir:",
        items: [
          "Hábitos diários que fortalecem a autoestima",
          "Como estabelecer limites saudáveis",
          "Técnicas de comunicação que refletem seu autovalor",
          "Práticas de autocuidado eficazes",
          "Como viver de forma autêntica no dia a dia",
        ],
      },
      inclusions: {
        title: "O que está incluso:",
        items: [
          "6 módulos práticos",
          "Todo o conteúdo em vídeo do Módulo 3",
          "Templates de práticas diárias e ferramentas de acompanhamento",
          "Scripts de limites e guias de comunicação",
        ],
        price: {
          original: "R$ 297,00",
          installments: "12x de R$ 20,37*",
          full: "R$ 197,00",
        },
      },
    },
  },

  {
    id: 13,
    categorySlug: "relacionamento",
    slug: "revolucao-do-amor",
    title: "Módulo 1",
    imageSrc: capaRelacionamento1,
    imageText: "Revolução do Amor",
    heading: "Revolução do Amor",
    description: "Quebrando Ciclos, Construindo Fundações.",
    priceInstallments: "12x de R$ 20,37*",
    priceFull: "R$ 197,00",
    isHighlighted: false,
    purchaseLink: "https://pay.hotmart.com/T100554561A",
    theme: {
      normal: {
        cardBg: "bg-white/10 backdrop-blur-md",
        borderColor: "border-white hover:border-relacionamento-light",
        titleColor: "text-relacionamento-dark",
        textColor: "text-relacionamento-dark",
        buttonBg: "bg-relacionamento-dark",
        buttonText: "text-white",
        priceBg: "bg-red-500",
        learnMoreVariant: "dark",
      },
      highlighted: {
        cardBg: "bg-relacionamento-dark",
        borderColor: "border-relacionamento-light",
        titleColor: "text-white",
        textColor: "text-white/80",
        buttonBg: "bg-white",
        buttonText: "text-relacionamento-dark",
        priceBg: "bg-red-500",
        learnMoreVariant: "light",
      },
    },
    details: {
      pageTitle: "REVOLUÇÃO DO AMOR",
      pageSubtitle: "Módulo 1",
      description:
        "Quebrando Ciclos, Construindo Fundações para um Amor Consciente.",
      longDescription:
        "A base de todo relacionamento saudável começa com você. Este curso te guia para curar padrões passados, construir uma base sólida de amor-próprio e entender as dinâmicas que criam conexões verdadeiras e duradouras.",
      heroImage: capaRelacionamento1,
      purchaseLink: "https://pay.hotmart.com/T100554561A",
      detailsBackgroundColor:
        "bg-gradient-to-r from-[#7f1d1d] via-[#b91c1c] to-[#ef4444]",
      domination: {
        title: "Você vai Dominar:",
        items: [
          "Identificar e quebrar padrões de relacionamento tóxicos.",
          "Construir uma autoestima inabalável como base para o amor.",
          "As linguagens do amor e como aplicá-las.",
          "Estabelecer limites saudáveis desde o início.",
        ],
      },
      inclusions: {
        title: "O que está incluso:",
        items: [
          "6 módulos transformadores",
          "Todo o conteúdo do Módulo 1 em vídeo",
          "Ferramentas completas de mapeamento emocional",
          "Roteiro de quebra de padrões de 90 diasncontros Conscientes",
          "BÔNUS: E-book GRÁTIS da nossa coleção especialmente selecionada + Caderno de exercícios",
        ],
        price: {
          original: "R$ 297,00",
          installments: "12x de R$ 20,37*",
          full: "R$ 197,00",
        },
      },
    },
  },
  {
    id: 14,
    categorySlug: "relacionamento",
    slug: "comunicacao-e-intimidade",
    title: "Módulo 2",
    imageSrc: capaRelacionamento2,
    imageText: "Comunicação e Intimidade",
    heading: "Comunicação e Intimidade",
    description: "A Arte da Conexão Real.",
    priceInstallments: "12x de R$ 20,37*",
    priceFull: "R$ 197,00",
    isHighlighted: true,
    purchaseLink: "https://pay.hotmart.com/G100554613Y",
    theme: {
      normal: {
        cardBg: "bg-white/10 backdrop-blur-md",
        borderColor: "border-white hover:border-relacionamento-light",
        titleColor: "text-relacionamento-dark",
        textColor: "text-relacionamento-dark",
        buttonBg: "bg-relacionamento-dark",
        buttonText: "text-white",
        priceBg: "bg-red-500",
        learnMoreVariant: "dark",
      },
      highlighted: {
        cardBg: "bg-relacionamento-dark",
        borderColor: "border-relacionamento-light",
        titleColor: "text-white",
        textColor: "text-white/80",
        buttonBg: "bg-white",
        buttonText: "text-relacionamento-dark",
        priceBg: "bg-red-500",
        learnMoreVariant: "light",
      },
    },
    details: {
      pageTitle: "COMUNICAÇÃO E INTIMIDADE",
      pageSubtitle: "Módulo 2",
      description: "Aprenda a Arte da Conexão Emocional e Física Real.",
      longDescription:
        "Vá além das conversas superficiais. Este curso ensina as ferramentas para uma comunicação empática e vulnerável, criando um espaço seguro para que a intimidade emocional, mental e física floresça.",
      heroImage: capaRelacionamento2,
      purchaseLink: "https://pay.hotmart.com/G100554613Y",
      detailsBackgroundColor:
        "bg-gradient-to-r from-[#7f1d1d] via-[#b91c1c] to-[#ef4444]",
      domination: {
        title: "Você vai Dominar:",
        items: [
          "Comunicação Não-Violenta para resolver conflitos com amor.",
          "A arte de ouvir ativamente para criar conexão.",
          "Como expressar suas necessidades sem gerar brigas.",
          "Técnicas para aprofundar a intimidade e a paixão.",
        ],
      },
      inclusions: {
        title: "O que está incluso:",
        items: [
          "6 módulos poderosos",
          "Todo o conteúdo em vídeo do Módulo 2",
          "Scripts e templates completos de comunicação",
          "Exercícios de construção de intimidade",
        ],
        price: {
          original: "R$ 297,00",
          installments: "12x de R$ 20,37*",
          full: "R$ 197,00",
        },
      },
    },
  },
  {
    id: 15,
    categorySlug: "relacionamento",
    slug: "crescimento-e-evolucao",
    title: "Módulo 3",
    imageSrc: capaRelacionamento3,
    imageText: "Crescimento e Evolução",
    heading: "Crescimento e Evolução",
    description: "Relacionamentos Como Prática Espiritual.",
    priceInstallments: "12x de R$ 20,37*",
    priceFull: "R$ 197,00",
    isHighlighted: false,
    purchaseLink: "https://pay.hotmart.com/W100554663H",
    theme: {
      normal: {
        cardBg: "bg-white/10 backdrop-blur-md",
        borderColor: "border-white hover:border-relacionamento-light",
        titleColor: "text-relacionamento-dark",
        textColor: "text-relacionamento-dark",
        buttonBg: "bg-relacionamento-dark",
        buttonText: "text-white",
        priceBg: "bg-red-500",
        learnMoreVariant: "dark",
      },
      highlighted: {
        cardBg: "bg-relacionamento-dark",
        borderColor: "border-relacionamento-light",
        titleColor: "text-white",
        textColor: "text-white/80",
        buttonBg: "bg-white",
        buttonText: "text-relacionamento-dark",
        priceBg: "bg-red-500",
        learnMoreVariant: "light",
      },
    },
    details: {
      pageTitle: "CRESCIMENTO E EVOLUÇÃO",
      pageSubtitle: "Módulo 3",
      description:
        "Transforme Seu Relacionamento em uma Jornada de Crescimento Mútuo.",
      longDescription:
        "Relacionamentos estagnados morrem. Aprenda a usar seu relacionamento como um catalisador para o crescimento pessoal e espiritual, tanto individualmente quanto como casal, garantindo que a parceria evolua e prospere ao longo do tempo.",
      heroImage: capaRelacionamento3,
      purchaseLink: "https://pay.hotmart.com/W100554663H",
      detailsBackgroundColor:
        "bg-gradient-to-r from-[#7f1d1d] via-[#b91c1c] to-[#ef4444]",
      domination: {
        title: "Você vai Dominar:",
        items: [
          "Como criar uma visão de futuro compartilhada.",
          "Rituais e práticas para manter a conexão viva.",
          "Navegar pelas diferentes fases de um relacionamento.",
          "Usar os desafios como oportunidades para crescer juntos.",
        ],
      },
      inclusions: {
        title: "O que está incluso:",
        items: [
          "6 módulos práticos",
          "Todo o conteúdo em vídeo do Módulo 3",
          "Avaliações de evolução relacional",
          "Templates de acordos conscientes de casal",
        ],
        price: {
          original: "R$ 297,00",
          installments: "12x de R$ 20,37*",
          full: "R$ 197,00",
        },
      },
    },
  },

  // OBJETO DO COMBO ADICIONADO AQUI
  {
    id: 100,
    isCombo: true, // Flag para identificar que é o combo
    categorySlug: "saude-fisica",
    title: "Sistema Corrida Pra Vida",
    comboTitle:
      "Sistema Corrida Pra Vida: Do sedentário à performance de elite",
    heading: "Pacote Premium",
    imageSrc: comboPackageSaude,
    description:
      "Pacote Completo de Transformação da Saúde: receba todos os 3 módulos + Materiais Completos para máximos resultados.",
    priceInstallments: "12x de R$ 52,75*",
    priceFull: "R$ 510,00",
    purchaseLink: "https://pay.hotmart.com/A100523908T",
    theme: {
      titleColor: "text-saude-dark-blue",
      cardBg: "bg-white/10 backdrop-blur-md",
      cardBorder: "border-white",
      headingColor: "text-saude-dark-blue",
      textColor: "text-gray-700",
      buttonBg: "bg-saude-dark-blue",
      buttonText: "text-white",
      priceBg: "bg-red-500",
      learnMoreVariant: "dark",
    },
  },

  {
    id: 101, // ID do Combo Financeiro
    isCombo: true,
    categorySlug: "financeiro",
    title: "Sistema Escape",
    comboTitle: "Sistema Escape: Construa Renda Automática Começando Hoje",
    heading: "Pacote Premium",
    imageSrc: comboPackageFinanceiro, // ⚠️ Importe e use a variável da imagem do Combo Card
    description:
      "Domine todos os 3 módulos + Materiais para Liberdade Financeira Total.",
    priceInstallments: "12x de R$ 52,75*",
    priceFull: "R$ 510,00",
    purchaseLink: "https://pay.hotmart.com/M100510960L",
    theme: {
      titleColor: "text-financeiro-dark-green",
      cardBg: "bg-financeiro-dark-green/10 backdrop-blur-md",
      cardBorder: "border-white",
      headingColor: "text-financeiro-dark-green",
      textColor: "text-gray-800", // Um pouco mais escuro para contraste no fundo verde claro
      buttonBg: "bg-financeiro-dark-green",
      buttonText: "text-white",
      priceBg: "bg-red-500",
      learnMoreVariant: "dark",
    },
  },

  {
    id: 102,
    isCombo: true,
    categorySlug: "conquista",
    title: "Sistema Anti-Desistência",
    comboTitle:
      "Sistema Anti-Desistência: Transforme Seus Maiores Sonhos em Conquistas Inevitáveis",
    heading: "Pacote Premium",
    imageSrc: comboPackageConquista, // Importe corretamente essa imagem se ainda não tiver
    description:
      "Domine a Ciência de Transformar Sonhos em Realidade. Receba todos os 3 módulos + Materiais Completos.",
    priceInstallments: "12x de R$ 52,75*",
    priceFull: "R$ 510,00",
    purchaseLink: "https://pay.hotmart.com/P100552916T",

    theme: {
      titleColor: "text-[#8c2100]",
      cardBg: "bg-white/10 backdrop-blur-md",
      cardBorder: "border-white",
      headingColor: "text-[#8c2100]",
      textColor: "text-gray-800",
      buttonBg: "bg-[#8c2100]",
      buttonText: "text-white",
      priceBg: "bg-red-500",
      learnMoreVariant: "dark",
    },
  },

  {
    id: 103,
    isCombo: true,
    categorySlug: "autoestima",
    title: "Sistema Anti-Insegurança",
    comboTitle:
      "Sistema Anti-Insegurança: Transforme Suas Dúvidas em Confiança que Ninguém Derruba",
    heading: "Pacote Premium",
    imageSrc: comboPackageAutoestima,
    description:
      "Acesso completo aos 3 cursos para construir uma confiança inabalável e transformar seu autovalor.",
    priceInstallments: "12x de R$ 52,75*",
    priceFull: "R$ 510,00",
    purchaseLink: "https://pay.hotmart.com/H100554096D",
    theme: {
      titleColor: "text-[#4c007a]",
      cardBg: "bg-white/10 backdrop-blur-md",
      cardBorder: "border-white",
      headingColor: "text-[#4c007a]",
      textColor: "text-gray-800",
      buttonBg: "bg-[#4c007a]",
      buttonText: "text-white",
      priceBg: "bg-red-500",
      learnMoreVariant: "dark",
    },
  },

  {
    id: 104,
    isCombo: true,
    categorySlug: "relacionamento",
    title: "Sistema Intimidade Total",
    comboTitle:
      "Sistema Intimidade Total: Transforme Qualquer Relacionamento em Algo Extraordinário",
    heading: "Pacote Premium",
    imageSrc: comboPackageRelacionamento,
    description:
      "Pacote Completo de Transformação Relacional receba todos os 3 módulos + Materiais de Padrões Tóxicos para Amor Consciente Que Evolui",
    priceInstallments: "12x de R$ 52,75*",
    priceFull: "R$ 510,00",
    purchaseLink: "https://pay.hotmart.com/D100554896F",
    theme: {
      titleColor: "text-relacionamento-dark",
      cardBg: "bg-white/10 backdrop-blur-md",
      cardBorder: "border-white",
      headingColor: "text-relacionamento-dark",
      textColor: "text-gray-800",
      buttonBg: "bg-relacionamento-dark",
      buttonText: "text-white",
      priceBg: "bg-red-500",
      learnMoreVariant: "dark",
    },
  },
];
