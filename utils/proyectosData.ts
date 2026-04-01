export interface Proyecto {
  slug: string;
  title: string;
  ubication: string;
  description: string;
  img: string;
  rotateRight?: boolean;
}

const proyectos: Proyecto[] = [
  {
    slug: 'central-hidroelectrica-cipreses',
    title: 'Central Hidroeléctrica Cipreses',
    ubication: 'Chile',
    description: 'Revestimiento autonivelante epóxico de alto desempeño, base 100% sólidos.',
    img: '/assets/pro/cipres1.jpg',
    rotateRight: true,
  },
  {
    slug: 'central-hidroelectrica-curillinque',
    title: 'Central Hidroeléctrica Curillinque',
    ubication: 'Chile',
    description: 'Solución compuesta por mortero estructural con refuerzo de fibra de vidrio y capa de terminación epóxica autonivelante, 100% sólidos.',
    img: '/assets/pro/curillinque.jpg',
    rotateRight: true,
  },
  {
    slug: 'ex-pesquera-spk',
    title: 'Ex Pesquera SPK',
    ubication: 'Chile',
    description: 'Sistema multicapa con primer epóxico y capa intermedia de masilla hidropóxica con árido de cuarzo incorporado, diseñado como base de anclaje para terminaciones en zonas húmedas.',
    img: '/assets/pro/pesquera-spk.png',
  },
  {
    slug: 'taller-prodiesel-concepcion',
    title: 'Taller Prodiesel Concepción',
    ubication: 'Concepción, Biobío',
    description: 'Proyecto de revestimiento industrial ejecutado bajo estrictos controles técnicos y norma NACE-SSPC para la preparación de superficies.',
    img: '/assets/pro/prodiesel.jpg',
  },
  {
    slug: 'sala-electrica',
    title: 'Sala Eléctrica',
    ubication: 'Chile',
    description: 'Aplicación de sistema de poliurea como revestimiento protector en sala eléctrica, considerando sus propiedades de aislamiento y resistencia a la humedad, no conductiva por naturaleza.',
    img: '/assets/pro/electrica.jpg',
  },
];

export default proyectos;
