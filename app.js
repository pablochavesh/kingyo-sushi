/**
 * KINGYO SUSHI & FUSIÓN — MAIN APPLICATION ENGINE
 * High-performance, luxury interactions, Web Audio Zen ambiance, 3D tilt,
 * Sakura petals canvas, bilingual support, and WhatsApp order generator.
 */

/* ==========================================================================
   1. MENU DATABASE (Verified items + Dark Luxury Uramaki Grid)
   ========================================================================== */
const menuData = [
  {
    id: "torre",
    code: "ESP-01",
    portions: "Para compartir",
    category: ["specialties", "fresh"],
    name: { es: "Torre Kingyo", en: "Kingyo Tower" },
    jp: "金魚タワー",
    description: {
      es: "Suculenta torre de arroz de sushi, ensalada de kanimi, atún fresco, salmón fresco y aguacate. Calamares tempura y camarones tempura. Cubierta con salsas de la casa.",
      en: "Succulent sushi rice tower, kanimi salad, fresh tuna, fresh salmon and avocado. Tempura squid and tempura shrimp, draped with house sauces."
    },
    prices: { takeout: 6500, service: 7150 },
    image: "assets/torre-kingyo-menu.jpg",
    tags: { es: ["Plato Insignia", "Fusión"], en: ["Signature", "Fusion"] }
  },
  {
    id: "neptuno",
    code: "ESP-02",
    portions: "Plato individual / entrada",
    category: ["specialties", "fresh"],
    name: { es: "Ensalada Neptuno", en: "Neptune Salad" },
    jp: "海王サラダ",
    description: {
      es: "Delicioso mix de wakame y kanikama. Cubierto de trocitos de salmón, trocitos de atún y trocitos de aguacate. Cubierta de salsa de anguila.",
      en: "Delightful blend of wakame and kanikama topped with diced salmon, tuna, avocado and finished with savory eel tare glaze."
    },
    prices: { takeout: 6500, service: 7150 },
    image: "assets/ensalada-neptuno-menu.jpg",
    tags: { es: ["Fresco", "Marino"], en: ["Fresh", "Ocean"] }
  },
  {
    id: "burger",
    code: "ESP-03",
    portions: "Individual",
    category: ["specialties"],
    name: { es: "Sushi Burger", en: "Sushi Burger" },
    jp: "寿司バーガー",
    description: {
      es: "Fusión asiática americana servida en forma de hamburguesa con arroz crocante. Disponible con pollo, camarón, atún y salmón.",
      en: "Asian-American fusion burger with crispy sesame rice buns. Available with chicken, shrimp, fresh tuna or salmon."
    },
    prices: { takeout: 5000, service: 5500 },
    image: "assets/sushi-burger-menu.jpg",
    tags: { es: ["Fusión", "4 Proteínas"], en: ["Fusion", "4 Proteins"] }
  },
  {
    id: "black-gold",
    code: "U29",
    portions: "8 piezas",
    category: ["uramaki", "specialties"],
    name: { es: "Uramaki Black Gold", en: "Black Gold Uramaki" },
    jp: "黒金ロール",
    description: {
      es: "Arroz negro imperial, salmón fresco seleccionado, aguacate cremoso, huevas de ikura y destellos de oro comestible de 24k.",
      en: "Imperial black forbidden rice, fresh salmon, ripe avocado, ikura caviar and real 24k edible gold flakes."
    },
    prices: { takeout: 7500, service: 8250 },
    image: "assets/uramaki-black-gold.jpg",
    tags: { es: ["Oro 24k", "Imperial"], en: ["24k Gold", "Imperial"] }
  },
  {
    id: "dragon",
    code: "U18",
    portions: "8 piezas",
    category: ["uramaki"],
    name: { es: "Dragon Roll Imperial", en: "Imperial Dragon Roll" },
    jp: "竜巻ロール",
    description: {
      es: "Anguila unagi glaseada al fuego, langostino en tempura crocante, láminas de aguacate maduro y reducción de tare dulce.",
      en: "Torched caramelized unagi eel, crispy tempura prawns, avocado scales and rich sweet eel tare glaze."
    },
    prices: { takeout: 6900, service: 7590 },
    image: "assets/dragon-roll-luxury.jpg",
    tags: { es: ["Anguila Unagi", "Tempura"], en: ["Unagi Eel", "Tempura"] }
  },
  {
    id: "ebi-flambe",
    code: "U25",
    portions: "8 piezas",
    category: ["flambe", "uramaki"],
    name: { es: "Uramaki Ebi Flambé", en: "Ebi Flambé Uramaki" },
    jp: "炎海老ロール",
    description: {
      es: "Camarón tempura crocante, cubierto de salmón fresco sellado a la llama con soplete, mayonesa trufada flambeada y cebollino.",
      en: "Crispy tiger prawn tempura, covered with flame-torched salmon, melted truffle aioli and fresh chives."
    },
    prices: { takeout: 6500, service: 7150 },
    image: "assets/ebi-flambe-roll.jpg",
    tags: { es: ["Sellado al Fuego", "Trufa"], en: ["Flame-Seared", "Truffle"] }
  },
  {
    id: "spicy-tuna",
    code: "U12",
    portions: "8 piezas",
    category: ["uramaki", "fresh"],
    name: { es: "Spicy Tuna Tartare", en: "Spicy Tuna Tartare" },
    jp: "辛口鮪",
    description: {
      es: "Atún rojo fresco en cubos marinado en shichimi togarashi, aceite de sésamo tostado, aguacate y micro-brotes frescos.",
      en: "Fresh ahi tuna tartare marinated with Japanese togarashi, toasted sesame oil, avocado and garden micro-herbs."
    },
    prices: { takeout: 6200, service: 6820 },
    image: "assets/kingyo-sushi-craft.png",
    tags: { es: ["Atún Rojo", "Picante Suave"], en: ["Ahi Tuna", "Mild Spicy"] }
  },
  {
    id: "barco-kingyo",
    code: "BARCO",
    portions: "Para 3 a 4 personas",
    category: ["specialties"],
    name: { es: "Barco Imperial Kingyo", en: "Imperial Kingyo Boat" },
    jp: "金魚の大船",
    description: {
      es: "La experiencia insignia: espectacular navío de madera con surtido selecto de 32 piezas (nigiris de autor, sashimis frescos y uramakis premium).",
      en: "The ultimate centerpiece: magnificent wooden boat laden with 32 chef-selected pieces of nigiri, fresh sashimi and signature rolls."
    },
    prices: { takeout: 22000, service: 24200 },
    image: "assets/sushi-boat-luxury.jpg",
    tags: { es: ["32 Piezas", "Celebración"], en: ["32 Pieces", "Celebration"] }
  },
  {
    id: "bacon-roll",
    code: "U24",
    portions: "8 piezas",
    category: ["flambe"],
    name: { es: "Bacon Roll Flambé", en: "Bacon Flambé Roll" },
    jp: "ベーコン巻",
    description: {
      es: "Salmón fresco, queso crema Philadelphia y aguacate, envuelto en panceta ahumada crujiente flameada y glaseada en teriyaki.",
      en: "Fresh salmon, Philadelphia cream cheese and avocado wrapped in crisp flame-kissed smoky bacon with teriyaki."
    },
    prices: { takeout: 5800, service: 6380 },
    image: "assets/kingyo-sushi-hero.png",
    tags: { es: ["Panceta Flambé", "Teriyaki"], en: ["Bacon Flambé", "Teriyaki"] }
  },
  {
    id: "ebi-tartufo",
    code: "U26",
    portions: "8 piezas",
    category: ["flambe", "uramaki"],
    name: { es: "Uramaki Ebi Tartufo", en: "Ebi Truffle Uramaki" },
    jp: "トリュフ海老",
    description: {
      es: "Camarón frito tempura, tartar de atún flameado, emulsión artesanal de trufa negra de verano y crocante de puerro.",
      en: "Crispy shrimp tempura, torched tuna tartare, summer black truffle sauce and leek crisps."
    },
    prices: { takeout: 6500, service: 7150 },
    image: "assets/ebi-flambe-roll.jpg",
    tags: { es: ["Trufa Negra", "Gourmet"], en: ["Black Truffle", "Gourmet"] }
  },
  {
    id: "black-phila",
    code: "U30",
    portions: "8 piezas",
    category: ["uramaki"],
    name: { es: "Uramaki Black Phila", en: "Black Phila Uramaki" },
    jp: "黒フィラ",
    description: {
      es: "Arroz negro, salmón fresco noruego, suave queso Philadelphia, aguacate y crocante de pistacho tostado.",
      en: "Black forbidden rice, fresh Norwegian salmon, smooth Philadelphia cream cheese, avocado and crushed roasted pistachios."
    },
    prices: { takeout: 6200, service: 6820 },
    image: "assets/uramaki-black-gold.jpg",
    tags: { es: ["Pistacho", "Arroz Negro"], en: ["Pistachio", "Black Rice"] }
  },
  {
    id: "vege-roll",
    code: "U34",
    portions: "8 piezas",
    category: ["fresh"],
    name: { es: "Uramaki Verde Zen", en: "Green Zen Uramaki" },
    jp: "禅ベジロール",
    description: {
      es: "Fino manto de aguacate maduro, espárragos salteados, pepino japonés kyuri, zanahoria crocante y aderezo de sésamo.",
      en: "Delicate fan of sliced avocado, tender asparagus, Japanese kyuri cucumber, sweet carrots and roasted sesame dressing."
    },
    prices: { takeout: 5200, service: 5720 },
    image: "assets/kingyo-sushi-craft.png",
    tags: { es: ["Vegetariano", "Zen"], en: ["Vegetarian", "Zen"] }
  }
];

/* ==========================================================================
   2. BILINGUAL TRANSLATION DICTIONARY
   ========================================================================== */
const i18nDict = {
  es: {
    skip: "Saltar al contenido",
    announcement: "Abierto Hoy en Pérez Zeledón · Salón, Para Llevar y Express · WhatsApp: +506 8332-6370",
    navHome: "Inicio",
    navSpecialties: "Especialidades",
    navMenu: "Menú Digital",
    navHours: "Horarios",
    navLocations: "Sedes",
    hoursPre: "PLANIFICA TU VISITA",
    hoursTitle: "HORARIOS DE ATENCIÓN",
    hoursDesc: "Te esperamos en nuestras dos sedes para deleitar tus sentidos con la más alta gastronomía japonesa y cocina fusión.",
    bijaguaHoursNote: "Atención y pedidos según servicio de la sede Bijagua. Consulta por WhatsApp el horario específico y disponibilidad de hoy.",
    openBijaguaMaps: "Ver Sede Bijagua en Google Maps",
    reserveTable: "Reservar Mesa",
    orderShort: "Pedir",
    orderCta: "Pedir",
    heroReviews: "870+ Reseñas en Google · Pérez Zeledón",
    heroTitle: "El Arte del Sushi <br /><span class=\"hero-highlight\">& la Fusión Imperial.</span>",
    heroSubtitle: "Calidad, sabor y tradición en cada pieza. La más refinada experiencia de gastronomía japonesa y cocina fusión en Pérez Zeledón y Bijagua.",
    exploreMenu: "Ver Especialidades",
    bookVip: "Reservar Mesa VIP",
    pillar1Title: "Pesca Fresca Diaria",
    pillar1Desc: "Atún rojo, salmón y cortes grado sashimi",
    pillar2Title: "Técnica de Autor",
    pillar2Desc: "Recetas originales y salsas artesanales",
    pillar3Title: "2 Sedes en Costa Rica",
    pillar3Desc: "Pérez Zeledón & Bijagua",
    chefSelection: "Selección del Chef",
    showcaseShortDesc: "Arroz negro imperial, salmón, ikura y destellos de oro comestible",
    priceFrom: "Desde",
    addToCart: "+ Agregar a Selección",
    scrollCue: "Descubrir",
    ribbon1: "SASHIMI FRESCO",
    ribbon2: "TRADICIÓN MILENARIA",
    ribbon3: "FUSIÓN CONTEMPORÁNEA",
    ribbon4: "CALIDAD · SABOR · TRADICIÓN",
    menuSpecialtiesTitle: "ESPECIALIDADES",
    menuSpecialtiesDesc: "Nuestras creaciones insignia extraídas directamente de la carta oficial de Kingyo.",
    modeTakeaway: "Para Llevar / Express",
    modeDineIn: "Consumo en Mesa (+10% servicio)",
    cardBadgeSignature: "Plato Insignia",
    cardBadgeFresh: "Frescura Marina",
    cardBadgeFusion: "Fusión de Autor",
    torreDesc: "Suculenta torre de arroz de sushi, ensalada de kanimi, atún fresco, salmón fresco y aguacate. Calamares tempura y camarones tempura. Cubierta con salsas de la casa.",
    neptunoDesc: "Delicioso mix de wakame y kanikama. Cubierto de trocitos de salmón, trocitos de atún y trocitos de aguacate. Cubierta de salsa de anguila.",
    burgerDesc: "Fusión asiática americana servida en forma de hamburguesa. Disponible con las siguientes proteínas: pollo, camarón, atún y salmón.",
    pillTakeout: "Para llevar",
    pillService: "Con 10% servicio",
    addToOrder: "+ Agregar al Pedido",
    kaizenTagline: "EXPERIENCIA OMAKASE & AUTOR",
    chooseRollTitle: "ELIGE TU ROLL",
    chooseRollSubtitle: "Cuatro estados de ánimo. Una elección perfecta.",
    mood1: "OPULENCIA & MISTERIO",
    roll1Ingredients: "Arroz negro prohibido, salmón fresco, ikura y oro comestible",
    mood2: "INTENSIDAD & FUEGO",
    roll2Ingredients: "Anguila unagi glaseada, langostino tempura, aguacate y salsa tare",
    mood3: "AHUMADO & CREMOSO",
    roll3Ingredients: "Camarón crocante, salmón sellado al soplete y mayonesa trufada",
    mood4: "FRESCURA & PICANTE",
    roll4Ingredients: "Atún rojo fresco en cubos, togarashi japonés, aguacate y cebollino",
    craftPretitle: "EL RITUAL DEL SUSHI",
    craftTitle: "Tradición Japonesa, Alma de Pérez Zeledón.",
    craftText1: "En Kingyo no solo servimos sushi; honramos un arte que exige disciplina en cada corte de pescado, equilibrio en la acidez del arroz y respeto absoluto por los ingredientes más nobles.",
    craftText2: "Nuestra carta fusiona la pureza técnica del Edo-mae japonés con la generosidad y el paladar vibrante de Costa Rica, creando momentos memorables en cada mesa.",
    point1Title: "Corte de Precisión",
    point1Desc: "Cortes milimétricos que respetan la fibra del salmón y el atún.",
    point2Title: "Arroz Sazonado Secreto",
    point2Desc: "Preparado diariamente con vinagre de arroz selecto a temperatura óptima.",
    point3Title: "Para Compartir en Familia",
    point3Desc: "Nuestros emblemáticos barcos de sushi son la cúspide de la celebración.",
    boatDesc: "Selección magistral de nigiris, uramakis de autor y sashimis para compartir.",
    addBoat: "Pedir Barco Imperial",
    menuDigitalPre: "EXPLORACIÓN GASTRONÓMICA",
    menuDigitalTitle: "CARTA COMPLETA DIGITAL",
    menuDigitalIntro: "Buscá por ingrediente, roll favorito o categoría. Podés armar tu pedido y enviarlo directo por WhatsApp.",
    showingPricesFor: "Mostrando precios para:",
    takeaway: "Para Llevar",
    atTable: "En Mesa (+10%)",
    searchPlaceholder: "Buscar por salmón, atún, trufa, tempura, etc…",
    catAll: "Todos",
    catSpecialties: "Especialidades",
    catFlambe: "Rolls Flambé",
    catUramaki: "Uramaki & Autor",
    catFresh: "Ensaladas & Frescos",
    menuDisclaimer: "* Precios expresados en Colones costarricenses (₡). Los precios de consumo en mesa incluyen el 10% por servicio de ley. Disponibilidad sujeta al stock fresco del día.",
    statGoogle: "Calificación de excelencia en Google",
    statReviews: "Opiniones de comensales satisfechos",
    statBranches: "Pérez Zeledón y Bijagua",
    statCraft: "Ingredientes frescos y de primera calidad",
    locationsPre: "NUESTRAS CASAS",
    locationsTitle: "VISÍTANOS EN COSTA RICA",
    locationsDesc: "Disfruta de la atmósfera Kingyo en nuestras dos ubicaciones o solicita express directo a tu puerta.",
    locOpenNow: "● Abierto Hoy",
    pzAddressText: "150 metros este del Estadio Municipal, diagonal al puente Los Reyes.",
    daysMonThu: "Lunes a Jueves:",
    daysFriSun: "Viernes a Domingo:",
    phoneLabel: "Teléfono Fijo",
    openGoogleMaps: "Abrir en Google Maps",
    openWaze: "Abrir en Waze",
    locBranchBijagua: "● Segunda Sede Oficial",
    bijaguaAddressText: "Ubicados en Bijagua. Consulta directamente por WhatsApp para horarios de hoy, disponibilidad y pedidos a domicilio.",
    consultBijagua: "Consultar por WhatsApp",
    reserveTitle: "Reservación de Mesa VIP",
    reserveDesc: "Coordina tu experiencia gastronómica o celebración en Kingyo directamente con nuestro equipo.",
    formName: "Nombre Completo",
    formBranch: "Sede",
    formDate: "Fecha",
    formTime: "Hora Aproximada",
    formPeople: "Número de Personas",
    formOccasion: "Ocasión",
    formNotes: "Peticiones Especiales (opcional)",
    confirmReserveWhatsapp: "Continuar en WhatsApp",
    cartTitleShort: "Mi Pedido",
    cartPretitle: "SELECCIÓN KINGYO",
    cartHeading: "Pedido por WhatsApp",
    orderServiceMode: "Tipo de consumo:",
    emptyCart: "Aún no has seleccionado ningún plato.",
    exploreMenuBtn: "Explorar el Menú",
    subtotal: "Subtotal",
    serviceCharge: "Servicio de ley (10%)",
    totalEstimated: "Total Estimado",
    cartNotesPrompt: "Notas para cocina / entrega (opcional):",
    sendToWhatsApp: "Enviar Pedido a WhatsApp",
    cartDisclaimerText: "Se abrirá un chat directo con Kingyo para confirmar disponibilidad, dirección y hora de entrega.",
    footerDesc: "El punto de encuentro culinario donde la precisión japonesa y la generosidad costarricense se transforman en una experiencia inolvidable.",
    footerNavTitle: "Explorar",
    footerContactTitle: "Contacto & Sedes",
    footerConnectTitle: "Conectar",
    backToTop: "Volver Arriba"
  },
  en: {
    skip: "Skip to content",
    announcement: "Open Today in Pérez Zeledón · Dine-in, Takeout & Express · WhatsApp: +506 8332-6370",
    navHome: "Home",
    navSpecialties: "Specialties",
    navMenu: "Digital Menu",
    navHours: "Opening Hours",
    navLocations: "Locations",
    hoursPre: "PLAN YOUR VISIT",
    hoursTitle: "OPENING HOURS",
    hoursDesc: "We look forward to welcoming you in our two locations for an authentic luxury Japanese culinary experience.",
    bijaguaHoursNote: "Service and orders according to Bijagua schedule. Inquire directly on WhatsApp for today's opening hours.",
    openBijaguaMaps: "Open Bijagua on Google Maps",
    reserveTable: "Book a Table",
    orderShort: "Order",
    orderCta: "Order",
    heroReviews: "870+ Google Reviews · Pérez Zeledón",
    heroTitle: "The Art of Sushi <br /><span class=\"hero-highlight\">& Imperial Fusion.</span>",
    heroSubtitle: "Quality, flavor and tradition in every single piece. The most refined Japanese dining and fusion cuisine experience in Pérez Zeledón and Bijagua.",
    exploreMenu: "View Specialties",
    bookVip: "Book VIP Table",
    pillar1Title: "Daily Fresh Catch",
    pillar1Desc: "Ahi tuna, salmon and sashimi grade cuts",
    pillar2Title: "Master Technique",
    pillar2Desc: "Original recipes and artisanal tare sauces",
    pillar3Title: "2 Costa Rica Locations",
    pillar3Desc: "Pérez Zeledón & Bijagua",
    chefSelection: "Chef's Choice",
    showcaseShortDesc: "Imperial black rice, fresh salmon, ikura roe and 24k edible gold flakes",
    priceFrom: "From",
    addToCart: "+ Add to Selection",
    scrollCue: "Discover",
    ribbon1: "FRESH SASHIMI",
    ribbon2: "MILLENARY TRADITION",
    ribbon3: "CONTEMPORARY FUSION",
    ribbon4: "QUALITY · FLAVOR · TRADITION",
    menuSpecialtiesTitle: "SPECIALTIES",
    menuSpecialtiesDesc: "Our signature creations taken directly from Kingyo's official menu.",
    modeTakeaway: "Takeaway / Express",
    modeDineIn: "Dine-in (+10% service)",
    cardBadgeSignature: "Masterpiece",
    cardBadgeFresh: "Ocean Fresh",
    cardBadgeFusion: "Signature Fusion",
    torreDesc: "Succulent sushi rice tower, kanimi salad, fresh tuna, fresh salmon and avocado. Tempura squid and tempura shrimp, draped with house sauces.",
    neptunoDesc: "Delightful blend of wakame and kanikama topped with diced salmon, tuna, avocado and finished with savory eel tare glaze.",
    burgerDesc: "Asian-American fusion burger with crispy sesame rice buns. Available with chicken, shrimp, fresh tuna or salmon.",
    pillTakeout: "Takeout",
    pillService: "Dine-in (+10%)",
    addToOrder: "+ Add to Order",
    kaizenTagline: "OMAKASE & SIGNATURE CRAFT",
    chooseRollTitle: "CHOOSE YOUR ROLL",
    chooseRollSubtitle: "Four different moods. One perfect choice.",
    mood1: "OPULENCE & MYSTERY",
    roll1Ingredients: "Imperial black rice, fresh salmon, ikura caviar and 24k gold",
    mood2: "INTENSITY & FIRE",
    roll2Ingredients: "Caramelized unagi eel, prawn tempura, avocado and tare glaze",
    mood3: "SMOKY & CREAMY",
    roll3Ingredients: "Crispy prawn, torch-seared salmon and melted truffle aioli",
    mood4: "FRESH & SPICY",
    roll4Ingredients: "Fresh ahi tuna cubes, Japanese togarashi, avocado and chives",
    craftPretitle: "THE SUSHI RITUAL",
    craftTitle: "Japanese Tradition, Soul of Pérez Zeledón.",
    craftText1: "At Kingyo, we do not merely serve sushi; we honor a craft that demands precision in every fish cut, equilibrium in the sushi rice acidity and respect for nature's finest ingredients.",
    craftText2: "Our culinary craft blends the Edo-mae Japanese discipline with the tropical vibrancy of Costa Rica, delivering an extraordinary journey to your table.",
    point1Title: "Precision Knife Work",
    point1Desc: "Millimetric cuts respecting the muscle fibers of fresh salmon and tuna.",
    point2Title: "Secret Seasoned Rice",
    point2Desc: "Prepared daily with select Japanese rice vinegar at optimal temperature.",
    point3Title: "To Share with Family",
    point3Desc: "Our iconic sushi boats are the pinnacle of celebration and joy.",
    boatDesc: "Magnificent presentation of nigiris, signature uramakis and fresh sashimis to share.",
    addBoat: "Order Imperial Boat",
    menuDigitalPre: "CULINARY EXPLORATION",
    menuDigitalTitle: "DIGITAL FULL MENU",
    menuDigitalIntro: "Search by ingredient, favorite roll or category. Build your selection and order straight to WhatsApp.",
    showingPricesFor: "Showing prices for:",
    takeaway: "Takeaway",
    atTable: "Dine-in (+10%)",
    searchPlaceholder: "Search for salmon, tuna, truffle, tempura, etc…",
    catAll: "All",
    catSpecialties: "Specialties",
    catFlambe: "Flambé Rolls",
    catUramaki: "Uramaki & Signature",
    catFresh: "Salads & Fresh",
    menuDisclaimer: "* Prices in Costa Rican Colones (₡). Dine-in orders include the mandatory 10% legal service charge. Stock subject to fresh daily arrivals.",
    statGoogle: "Excellence rating on Google",
    statReviews: "Verified happy diner reviews",
    statBranches: "Pérez Zeledón and Bijagua",
    statCraft: "100% top tier fresh ingredients",
    locationsPre: "OUR HOUSES",
    locationsTitle: "VISIT US IN COSTA RICA",
    locationsDesc: "Experience the Kingyo ambiance in our two destinations or request express delivery right to your door.",
    locOpenNow: "● Open Today",
    pzAddressText: "150 meters east of the Municipal Stadium, diagonally across from Los Reyes bridge.",
    daysMonThu: "Monday to Thursday:",
    daysFriSun: "Friday to Sunday:",
    phoneLabel: "Landline Phone",
    openGoogleMaps: "Open in Google Maps",
    openWaze: "Open in Waze",
    locBranchBijagua: "● Second Official Branch",
    bijaguaAddressText: "Located in Bijagua. Inquire directly on WhatsApp for today's hours, availability and home delivery.",
    consultBijagua: "Chat on WhatsApp",
    reserveTitle: "VIP Table Reservation",
    reserveDesc: "Arrange your gastronomic experience or celebration at Kingyo directly with our hosting team.",
    formName: "Full Name",
    formBranch: "Location",
    formDate: "Date",
    formTime: "Estimated Time",
    formPeople: "Number of Guests",
    formOccasion: "Occasion",
    formNotes: "Special Notes (optional)",
    confirmReserveWhatsapp: "Confirm on WhatsApp",
    cartTitleShort: "My Order",
    cartPretitle: "KINGYO SELECTION",
    cartHeading: "WhatsApp Order",
    orderServiceMode: "Service Mode:",
    emptyCart: "Your selection is currently empty.",
    exploreMenuBtn: "Explore the Menu",
    subtotal: "Subtotal",
    serviceCharge: "Legal Service Fee (10%)",
    totalEstimated: "Estimated Total",
    cartNotesPrompt: "Kitchen / Delivery notes (optional):",
    sendToWhatsApp: "Send Order to WhatsApp",
    cartDisclaimerText: "A direct WhatsApp chat with Kingyo will open to verify availability, address and preparation time.",
    footerDesc: "The culinary meeting point where Japanese precision and Costa Rican generosity transform into an unforgettable dining experience.",
    footerNavTitle: "Explore",
    footerContactTitle: "Contact & Branches",
    footerConnectTitle: "Connect",
    backToTop: "Back to Top"
  }
};

/* ==========================================================================
   3. GLOBAL STATE
   ========================================================================== */
let currentLang = "es";
let currentPriceMode = "takeout"; // 'takeout' | 'service'
let currentCategory = "all";
let searchQuery = "";
const cartMap = new Map(); // id -> quantity

const formatColon = val => `₡${new Intl.NumberFormat("es-CR").format(Math.round(val))}`;

/* ==========================================================================
   4. RENDER COMPLETE DIGITAL MENU GRID
   ========================================================================== */
function renderDigitalMenu() {
  const grid = document.querySelector("#menu-items-grid");
  if (!grid) return;

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filtered = menuData.filter(item => {
    const matchCategory = currentCategory === "all" || item.category.includes(currentCategory);
    const haystack = `${item.name[currentLang]} ${item.description[currentLang]} ${item.code} ${item.tags[currentLang].join(" ")}`.toLowerCase();
    const matchSearch = haystack.includes(normalizedQuery);
    return matchCategory && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-faint);">
        <p style="font-size: 1.1rem; margin-bottom: 8px;">🍣 No encontramos platos que coincidan con tu búsqueda.</p>
        <button class="btn btn-glass btn-sm" id="reset-search-btn" style="margin-top: 12px;">Ver todos los platos</button>
      </div>
    `;
    const resetBtn = document.querySelector("#reset-search-btn");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        searchQuery = "";
        const input = document.querySelector("#menu-search-input");
        if (input) input.value = "";
        document.querySelector("#clear-search-btn").style.display = "none";
        renderDigitalMenu();
      });
    }
    return;
  }

  grid.innerHTML = filtered.map(item => {
    const price = item.prices[currentPriceMode];
    return `
      <article class="dark-menu-card" data-id="${item.id}" data-tilt>
        <div class="card-top-row">
          <span class="card-num-badge">${item.code}</span>
          <span class="card-portions">${item.portions}</span>
        </div>
        <div class="card-thumb-reflective">
          <img src="${item.image}" alt="${item.name[currentLang]}" loading="lazy" />
          <div class="reflective-bottom"></div>
        </div>
        <h3 class="dark-card-title">${item.name[currentLang]}</h3>
        <p class="dark-card-ingredients">${item.description[currentLang]}</p>
        <div class="dark-card-footer">
          <strong class="dark-card-price">${formatColon(price)}</strong>
          <button class="btn-quick-add" type="button" data-add="${item.id}">
            + ${i18nDict[currentLang].orderShort}
          </button>
        </div>
      </article>
    `;
  }).join("");

  attachTiltEffect();
}

/* Update prices in all static elements (Hero, Specialties, Kaizen Pedestals) */
function updatePagePrices() {
  // 1. Update Specialty Cards Active Pills
  document.querySelectorAll(".specialty-card").forEach(card => {
    const itemId = card.dataset.item;
    const item = menuData.find(d => d.id === itemId);
    if (!item) return;

    const takeoutPill = card.querySelector(".price-pill:not(.service-pill)");
    const servicePill = card.querySelector(".service-pill");

    if (currentPriceMode === "takeout") {
      takeoutPill?.classList.add("active-pill");
      servicePill?.classList.remove("active-pill");
    } else {
      takeoutPill?.classList.remove("active-pill");
      servicePill?.classList.add("active-pill");
    }
  });

  // 2. Update Pedestal Prices (Kaizen)
  document.querySelectorAll(".pedestal-card").forEach(card => {
    const itemId = card.dataset.item;
    const item = menuData.find(d => d.id === itemId);
    if (!item) return;
    const priceEl = card.querySelector(".pedestal-price");
    if (priceEl) {
      priceEl.textContent = formatColon(item.prices[currentPriceMode]);
    }
  });

  // 3. Update Current Mode Indicator Label
  const modeLabel = document.querySelector("#current-mode-label");
  if (modeLabel) {
    modeLabel.textContent = currentPriceMode === "takeout" ? i18nDict[currentLang].takeaway : i18nDict[currentLang].atTable;
  }

  // 4. Update Digital Menu Grid
  renderDigitalMenu();
  renderCartDrawer();
}

/* ==========================================================================
   5. INTERACTIVE CART & WHATSAPP CHECKOUT ENGINE
   ========================================================================== */
function addToCart(itemId, qty = 1) {
  const currentQty = cartMap.get(itemId) || 0;
  cartMap.set(itemId, currentQty + qty);
  renderCartDrawer();
  triggerCartBounce();
  playZenNote(660); // subtle pleasant audio feedback
}

function updateCartQty(itemId, delta) {
  const current = cartMap.get(itemId) || 0;
  const next = current + delta;
  if (next <= 0) {
    cartMap.delete(itemId);
  } else {
    cartMap.set(itemId, next);
  }
  renderCartDrawer();
}

function triggerCartBounce() {
  const cartBtn = document.querySelector("#open-cart-btn");
  if (cartBtn) {
    cartBtn.style.transform = "scale(1.15)";
    setTimeout(() => { cartBtn.style.transform = ""; }, 250);
  }
}

function calculateCartTotals() {
  let subtotal = 0;
  let itemCount = 0;

  for (const [id, qty] of cartMap.entries()) {
    const item = menuData.find(d => d.id === id);
    if (item && qty > 0) {
      itemCount += qty;
      const unitPrice = item.prices.takeout; // baseline takeout price
      subtotal += unitPrice * qty;
    }
  }

  const isService = currentPriceMode === "service";
  const serviceCharge = isService ? subtotal * 0.10 : 0;
  const total = subtotal + serviceCharge;

  return { subtotal, serviceCharge, total, itemCount };
}

function renderCartDrawer() {
  const container = document.querySelector("#cart-items-container");
  const emptyBox = document.querySelector("#cart-empty-message");
  const checkoutBtn = document.querySelector("#send-whatsapp-order-btn");
  const subtotalEl = document.querySelector("#cart-subtotal-val");
  const serviceRow = document.querySelector("#cart-service-row");
  const serviceVal = document.querySelector("#cart-service-val");
  const totalEl = document.querySelector("#cart-total-val");
  const counterEl = document.querySelector("#cart-counter");
  const quickTotal = document.querySelector("#cart-quick-total");

  const { subtotal, serviceCharge, total, itemCount } = calculateCartTotals();

  // Floating trigger updates
  if (counterEl) counterEl.textContent = itemCount;
  if (quickTotal) quickTotal.textContent = formatColon(total);

  if (itemCount === 0) {
    if (container) container.innerHTML = "";
    if (emptyBox) emptyBox.style.display = "flex";
    if (checkoutBtn) checkoutBtn.disabled = true;
    if (subtotalEl) subtotalEl.textContent = "₡0";
    if (serviceRow) serviceRow.style.display = "none";
    if (totalEl) totalEl.textContent = "₡0";
    return;
  }

  if (emptyBox) emptyBox.style.display = "none";
  if (checkoutBtn) checkoutBtn.disabled = false;

  // Breakdown lines
  if (subtotalEl) subtotalEl.textContent = formatColon(subtotal);
  if (serviceRow) {
    if (currentPriceMode === "service") {
      serviceRow.style.display = "flex";
      if (serviceVal) serviceVal.textContent = formatColon(serviceCharge);
    } else {
      serviceRow.style.display = "none";
    }
  }
  if (totalEl) totalEl.textContent = formatColon(total);

  // Render Item List
  if (container) {
    const lines = [];
    for (const [id, qty] of cartMap.entries()) {
      const item = menuData.find(d => d.id === id);
      if (!item) continue;
      const unitPrice = item.prices[currentPriceMode];
      const itemTotal = unitPrice * qty;

      lines.push(`
        <div class="cart-item-row" data-id="${item.id}">
          <img class="cart-item-img" src="${item.image}" alt="" />
          <div class="cart-item-info">
            <h4>${item.name[currentLang]}</h4>
            <span class="cart-item-price">${formatColon(itemTotal)}</span>
          </div>
          <div class="cart-qty-ctrl">
            <button class="cart-qty-btn" type="button" data-delta="-1" data-id="${item.id}">−</button>
            <span class="cart-qty-val">${qty}</span>
            <button class="cart-qty-btn" type="button" data-delta="1" data-id="${item.id}">+</button>
          </div>
        </div>
      `);
    }
    container.innerHTML = lines.join("");
  }
}

function openCartDrawer() {
  document.querySelector("#cart-drawer")?.classList.add("open");
  document.querySelector("#cart-overlay")?.classList.add("active");
  document.querySelector("#cart-drawer")?.setAttribute("aria-hidden", "false");
}

function closeCartDrawer() {
  document.querySelector("#cart-drawer")?.classList.remove("open");
  document.querySelector("#cart-overlay")?.classList.remove("active");
  document.querySelector("#cart-drawer")?.setAttribute("aria-hidden", "true");
}

function sendWhatsAppOrder() {
  const { total, itemCount } = calculateCartTotals();
  if (itemCount === 0) return;

  const modeText = currentPriceMode === "takeout" ? "Para Llevar / Express" : "Consumo en Mesa (+10% servicio)";
  const notes = document.querySelector("#cart-notes-input")?.value.trim();

  let message = `¡Hola Kingyo Sushi & Fusión! 🍣✨\nQuisiera realizar el siguiente pedido:\n\n`;
  message += `📍 *Modalidad:* ${modeText}\n`;
  message += `------------------------------\n`;

  for (const [id, qty] of cartMap.entries()) {
    const item = menuData.find(d => d.id === id);
    if (!item) continue;
    const itemTotal = item.prices[currentPriceMode] * qty;
    message += `• *${qty}x* ${item.name[currentLang]} (${formatColon(itemTotal)})\n`;
  }

  message += `------------------------------\n`;
  message += `💰 *Total Estimado:* ${formatColon(total)}\n`;
  if (notes) {
    message += `📝 *Notas:* ${notes}\n`;
  }
  message += `\n¿Me confirman disponibilidad y tiempo de entrega? Muchas gracias.`;

  const phone = "50683326370";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener");
}

/* ==========================================================================
   6. VIP RESERVATION MODAL LOGIC
   ========================================================================== */
function setupReservationModal() {
  const modal = document.querySelector("#reserve-modal");
  const openBtnHeader = document.querySelector("#open-reserve-btn");
  const openBtnHero = document.querySelector("#hero-reserve-btn");
  const closeBtn = document.querySelector("#close-reserve-btn");
  const form = document.querySelector("#reserve-form");

  const openBtnMobile = document.querySelector("#mobile-open-reserve");
  const openModal = () => {
    if (modal) modal.showModal();
    // Default date to today
    const dateInput = document.querySelector("#reserve-date");
    if (dateInput && !dateInput.value) {
      dateInput.value = new Date().toISOString().split("T")[0];
    }
  };

  const closeModal = () => modal?.close();

  openBtnHeader?.addEventListener("click", openModal);
  openBtnHero?.addEventListener("click", openModal);
  openBtnMobile?.addEventListener("click", openModal);
  closeBtn?.addEventListener("click", closeModal);

  modal?.addEventListener("click", e => {
    if (e.target === modal) closeModal();
  });

  form?.addEventListener("submit", e => {
    e.preventDefault();
    const name = document.querySelector("#reserve-name")?.value.trim();
    const branch = document.querySelector("#reserve-branch")?.value;
    const date = document.querySelector("#reserve-date")?.value;
    const time = document.querySelector("#reserve-time")?.value;
    const people = document.querySelector("#reserve-people")?.value;
    const occasion = document.querySelector("#reserve-occasion")?.value;
    const notes = document.querySelector("#reserve-notes")?.value.trim();

    let msg = `¡Hola Kingyo Sushi & Fusión! 🎌✨\nQuisiera solicitar una *Reservación de Mesa VIP*:\n\n`;
    msg += `👤 *Nombre:* ${name}\n`;
    msg += `📍 *Sede:* ${branch}\n`;
    msg += `📅 *Fecha:* ${date}\n`;
    msg += `⏰ *Hora:* ${time}\n`;
    msg += `👥 *Personas:* ${people}\n`;
    msg += `🥂 *Ocasión:* ${occasion}\n`;
    if (notes) msg += `📝 *Detalles especiales:* ${notes}\n`;
    msg += `\n¿Tienen disponibilidad para confirmarla? Muchas gracias.`;

    const phone = "50683326370";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
    closeModal();
  });
}

/* ==========================================================================
   7. MOBILE NAVIGATION DRAWER
   ========================================================================== */
function setupMobileMenu() {
  const toggleBtn = document.querySelector("#mobile-menu-toggle");
  const drawer = document.querySelector("#mobile-nav-drawer");
  if (!toggleBtn || !drawer) return;

  function toggleMenu(forceClose = false) {
    const isOpen = forceClose ? false : !drawer.classList.contains("open");
    drawer.classList.toggle("open", isOpen);
    toggleBtn.classList.toggle("active", isOpen);
    toggleBtn.setAttribute("aria-expanded", String(isOpen));
    drawer.setAttribute("aria-hidden", String(!isOpen));
  }

  toggleBtn.addEventListener("click", e => {
    e.stopPropagation();
    toggleMenu();
  });

  // Auto-close when clicking any link inside drawer
  drawer.querySelectorAll(".mobile-nav-link, .mobile-social-btn, .mobile-reserve-btn").forEach(link => {
    link.addEventListener("click", () => {
      toggleMenu(true);
    });
  });

  // Close on outside click
  document.addEventListener("click", e => {
    if (drawer.classList.contains("open") && !drawer.contains(e.target) && !toggleBtn.contains(e.target)) {
      toggleMenu(true);
    }
  });

  // Close on Escape key
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && drawer.classList.contains("open")) {
      toggleMenu(true);
    }
  });
}

/* ==========================================================================
   8. AMBIENT GOLD EMBER DUST CANVAS (Subtle luxury glow, no petals/hearts)
   ========================================================================== */
function setupAmbientGoldCanvas() {
  const canvas = document.querySelector("#ambient-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const count = Math.min(36, Math.floor(width / 38));
  const embers = [];

  class GoldEmber {
    constructor() {
      this.reset(true);
    }
    reset(initial = false) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : height + 10;
      this.radius = 0.8 + Math.random() * 1.8;
      this.speedY = 0.25 + Math.random() * 0.45;
      this.speedX = (Math.random() - 0.5) * 0.3;
      this.opacity = 0.2 + Math.random() * 0.45;
      this.pulseSpeed = 0.015 + Math.random() * 0.02;
      this.pulse = Math.random() * Math.PI * 2;
      this.color = Math.random() > 0.3 ? "214, 173, 88" : "245, 220, 154";
    }
    update() {
      this.y -= this.speedY;
      this.x += this.speedX + Math.sin(this.pulse) * 0.2;
      this.pulse += this.pulseSpeed;

      if (this.y < -15 || this.x < -15 || this.x > width + 15) {
        this.reset();
      }
    }
    draw() {
      const currentOpacity = Math.max(0.08, this.opacity * (0.7 + 0.3 * Math.sin(this.pulse)));
      ctx.save();
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color}, ${currentOpacity})`;
      ctx.shadowColor = `rgba(${this.color}, 0.5)`;
      ctx.shadowBlur = this.radius * 3;
      ctx.fill();
      ctx.restore();
    }
  }

  for (let i = 0; i < count; i++) {
    embers.push(new GoldEmber());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    for (const ember of embers) {
      ember.update();
      ember.draw();
    }
    requestAnimationFrame(animate);
  }

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    animate();
  }
}

/* ==========================================================================
   9. INTERACTIVE 3D TILT ON HOVER
   ========================================================================== */
function attachTiltEffect() {
  const tiltElements = document.querySelectorAll("[data-tilt]");
  tiltElements.forEach(el => {
    if (el._hasTilt) return;
    el._hasTilt = true;

    el.addEventListener("mousemove", e => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    el.addEventListener("mouseleave", () => {
      el.style.transform = "";
    });
  });
}

/* ==========================================================================
   10. BILINGUAL LANGUAGE SWITCHER
   ========================================================================== */
function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = currentLang;

  const dict = i18nDict[currentLang];
  if (!dict) return;

  // Update text nodes
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // Update placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (dict[key]) {
      el.placeholder = dict[key];
    }
  });

  // Update toggle button state
  const langToggle = document.querySelector("#language-toggle");
  if (langToggle) {
    langToggle.innerHTML = currentLang === "es"
      ? '<span class="language-active">ES</span><span aria-hidden="true">/</span><span>EN</span>'
      : '<span>ES</span><span aria-hidden="true">/</span><span class="language-active">EN</span>';
    langToggle.setAttribute("aria-pressed", String(currentLang === "en"));
  }

  // Re-render dynamic elements
  updatePagePrices();
}

/* ==========================================================================
   11. INITIALIZATION & EVENT LISTENERS
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer
  const yearEl = document.querySelector("#current-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Initialize Golden Ember Particles
  setupAmbientGoldCanvas();

  // Initialize Mobile Hamburger Navigation
  setupMobileMenu();

  // Initialize Tilt
  attachTiltEffect();

  // Initialize VIP Reservation Modal
  setupReservationModal();

  // Render initial menu
  renderDigitalMenu();
  renderCartDrawer();

  // Header Scroll Effect
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".site-header");
    if (header) {
      if (window.scrollY > 40) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
    }
  });

  // Back to Top Button
  document.querySelector("#back-to-top")?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Language Switch Toggle
  document.querySelector("#language-toggle")?.addEventListener("click", () => {
    setLanguage(currentLang === "es" ? "en" : "es");
  });

  // Price Mode Switcher (Specialties Section)
  const modeTakeout = document.querySelector("#mode-takeout");
  const modeService = document.querySelector("#mode-service");

  modeTakeout?.addEventListener("click", () => {
    modeTakeout.classList.add("active");
    modeService?.classList.remove("active");
    currentPriceMode = "takeout";
    syncCartModeButtons();
    updatePagePrices();
  });

  modeService?.addEventListener("click", () => {
    modeService.classList.add("active");
    modeTakeout?.classList.remove("active");
    currentPriceMode = "service";
    syncCartModeButtons();
    updatePagePrices();
  });

  // Price Mode Switcher (Inside Cart Drawer)
  const cartModeTakeout = document.querySelector("#cart-mode-takeout");
  const cartModeService = document.querySelector("#cart-mode-service");

  function syncCartModeButtons() {
    if (currentPriceMode === "takeout") {
      cartModeTakeout?.classList.add("active");
      cartModeService?.classList.remove("active");
    } else {
      cartModeService?.classList.add("active");
      cartModeTakeout?.classList.remove("active");
    }
  }

  cartModeTakeout?.addEventListener("click", () => {
    currentPriceMode = "takeout";
    modeTakeout?.classList.add("active");
    modeService?.classList.remove("active");
    syncCartModeButtons();
    updatePagePrices();
  });

  cartModeService?.addEventListener("click", () => {
    currentPriceMode = "service";
    modeService?.classList.add("active");
    modeTakeout?.classList.remove("active");
    syncCartModeButtons();
    updatePagePrices();
  });

  // Category Filter Pills
  document.querySelectorAll(".cat-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      document.querySelectorAll(".cat-pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      currentCategory = pill.dataset.category || "all";
      renderDigitalMenu();
    });
  });

  // Search Input
  const searchInput = document.querySelector("#menu-search-input");
  const clearSearchBtn = document.querySelector("#clear-search-btn");

  searchInput?.addEventListener("input", e => {
    searchQuery = e.target.value;
    if (clearSearchBtn) {
      clearSearchBtn.style.display = searchQuery.length > 0 ? "block" : "none";
    }
    renderDigitalMenu();
  });

  clearSearchBtn?.addEventListener("click", () => {
    if (searchInput) searchInput.value = "";
    searchQuery = "";
    clearSearchBtn.style.display = "none";
    renderDigitalMenu();
  });

  // Locations Tabs (PZ vs Bijagua)
  const tabPz = document.querySelector("#tab-btn-pz");
  const tabBijagua = document.querySelector("#tab-btn-bijagua");
  const panelPz = document.querySelector("#panel-pz");
  const panelBijagua = document.querySelector("#panel-bijagua");

  tabPz?.addEventListener("click", () => {
    tabPz.classList.add("active");
    tabBijagua?.classList.remove("active");
    tabPz.setAttribute("aria-selected", "true");
    tabBijagua?.setAttribute("aria-selected", "false");
    if (panelPz) panelPz.style.display = "grid";
    if (panelBijagua) panelBijagua.style.display = "none";
  });

  tabBijagua?.addEventListener("click", () => {
    tabBijagua.classList.add("active");
    tabPz?.classList.remove("active");
    tabBijagua.setAttribute("aria-selected", "true");
    tabPz?.setAttribute("aria-selected", "false");
    if (panelBijagua) panelBijagua.style.display = "grid";
    if (panelPz) panelPz.style.display = "none";
  });

  // Global Click Delegations (Add to Cart, Open Cart, Close Cart, Adjust Qty)
  document.addEventListener("click", e => {
    // Add to cart buttons
    const addBtn = e.target.closest("[data-add]");
    if (addBtn) {
      const itemId = addBtn.dataset.add;
      addToCart(itemId, 1);
      return;
    }

    // Cart Drawer open
    if (e.target.closest("#open-cart-btn")) {
      openCartDrawer();
      return;
    }

    // Cart Drawer close
    if (e.target.closest("#close-cart-btn") || e.target.closest("#cart-overlay") || e.target.closest("#empty-see-menu")) {
      closeCartDrawer();
      return;
    }

    // Cart Qty Modifiers
    const qtyBtn = e.target.closest(".cart-qty-btn");
    if (qtyBtn) {
      const id = qtyBtn.dataset.id;
      const delta = parseInt(qtyBtn.dataset.delta, 10);
      updateCartQty(id, delta);
      return;
    }
  });

  // WhatsApp Checkout Trigger
  document.querySelector("#send-whatsapp-order-btn")?.addEventListener("click", sendWhatsAppOrder);

  // Initialize Lenis Smooth Scroll if available
  if (typeof Lenis !== "undefined") {
    const lenis = new Lenis({
      duration: 1.2,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }

  // GSAP ScrollTrigger Animations if available
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".reveal").forEach(elem => {
      gsap.fromTo(
        elem,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: "power2.out",
          scrollTrigger: {
            trigger: elem,
            start: "top 88%",
            toggleActions: "play none none none"
          }
        }
      );
    });
  }
});
