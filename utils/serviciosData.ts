export interface Servicio {
  slug: string;
  title: string;
  subtitle: string;
  description: string[];
  beneficios: string[];
  images?: string[];
}

const servicios: Servicio[] = [
  {
    slug: 'revestimientos-epoxicos-industriales-y-poliuretano',
    title: 'Revestimientos Epóxicos Industriales y Poliuretano',
    subtitle: 'Revestimientos Epóxicos y Poliuretanos: Protección versátil y de alto desempeño',
    description: [
      'Los revestimientos epóxicos y los revestimientos de poliuretano son una de las soluciones más utilizadas en la protección de superficies industriales debido a su excelente adherencia, resistencia mecánica y comportamiento frente a agentes químicos. Este tipo de recubrimiento forma una barrera continua y de alta durabilidad sobre superficies como hormigón, metal o madera, proporcionando una protección efectiva en entornos de alta exigencia.',
    ],
    beneficios: [
      'Alta resistencia química y mecánica en ambientes exigentes y condiciones extremas.',
      'Excelente adherencia sobre diversos tipos de superficies.',
      'Fácil limpieza y mantenimiento, ideal para áreas sanitarias o productivas.',
      'Alta asepsia para las áreas que requieran un estricto control de limpieza y sanidad.',
      'Acabado estético uniforme con posibilidad de antideslizante, texturizado y señalización.',
    ],
    images: [
      '/assets/servicios/revestimiento1.jpg',
      '/assets/servicios/revestimiento2.jpg',
      '/assets/servicios/revestimiento3.jpg',
    ],
  },
  {
    slug: 'pulido-de-pisos-superfloor',
    title: 'Pulido de Pisos Superfloor',
    subtitle: 'Pulido de pisos Superfloor: estética y resistencia en una sola solución',
    description: [
      'El sistema de pulido de pisos Superfloor transforma superficies de hormigón en pisos lisos, brillantes y altamente duraderos, sin necesidad de aplicar recubrimientos adicionales. A través de un proceso mecánico de desbaste, afinado y sellado con endurecedores químicos, se logra un acabado estético, fácil de mantener y extremadamente resistente al tráfico y al desgaste.',
      'Este método también optimiza sus propiedades físicas, aumentando su resistencia a la abrasión y reduciendo la generación de polvo. Es ideal para industrias, centros logísticos, supermercados, talleres, y cualquier instalación que requiera un piso funcional, de bajo mantenimiento y con excelente presentación. Además, es una alternativa sustentable, ya que aprovecha el mismo sustrato existente sin generar residuos innecesarios ni requerir materiales adicionales.',
    ],
    beneficios: [
      'Aumenta la resistencia al desgaste y prolonga la vida útil del hormigón.',
      'Respetuoso con el medio ambiente.',
      'Mejora significativamente la apariencia del piso con un acabado brillante y uniforme.',
      'Reduce la generación de polvo y facilita la limpieza diaria.',
    ],
    images: [
      '/assets/servicios/puli1.jpg',
      '/assets/servicios/puli2.jpg',
      '/assets/servicios/puli3.png',
    ],
  },
  {
    slug: 'aplicacion-de-poliurea',
    title: 'Aplicación de Poliurea',
    subtitle: 'Aplicación de Poliurea: protección industrial de alto rendimiento',
    description: [
      'La aplicación de poliurea es una solución avanzada en revestimientos industriales, reconocida por su alta resistencia química, mecánica y su rápido tiempo de curado. Es ideal para superficies que requieren protección frente a la abrasión, humedad, impactos o cambios térmicos extremos.',
      'Contamos con el equipamiento adecuado para la proyección de poliurea, incluyendo bombas de alta presión y sistemas calefaccionados, así como personal capacitado en su uso según las fichas técnicas del fabricante. La correcta dosificación, temperatura y condiciones ambientales son aspectos críticos que controlamos rigurosamente durante la aplicación.',
      'Gracias a su capacidad de formar una membrana continua, impermeable y sin uniones, la poliurea es ideal para industrias exigentes, cámaras frigoríficas, áreas de producción alimentaria, piscinas, cubiertas, estanques, terrazas, techumbres y más.',
    ],
    beneficios: [
      'Alta resistencia química, térmica y mecánica.',
      'Secado ultra rápido en 5 segundos que permite habilitación en pocas horas.',
      'Membrana continua e impermeable, sin uniones ni filtraciones.',
      'Excelente adherencia sobre cualquier soporte correctamente preparado.',
    ],
    images: [
      '/assets/servicios/poli1.jpg',
      '/assets/servicios/poli2.jpg',
      '/assets/servicios/poli3.jpg',
    ],
  },
  {
    slug: 'reparacion-y-recuperacion-de-superficies',
    title: 'Reparación y Recuperación de Superficies',
    subtitle: 'Reparación y recuperación de superficies: restauración eficiente para maximizar la vida útil',
    description: [
      'La reparación y recuperación de superficies es fundamental para mantener la funcionalidad y seguridad de infraestructuras industriales y comerciales. A través de técnicas especializadas, reparamos daños causados por desgaste, impactos, corrosión, fisuras o deterioro ambiental, devolviendo las condiciones óptimas para su uso y prolongando la vida útil de las instalaciones.',
      'Cada intervención se planifica tras un diagnóstico técnico detallado que permite identificar las causas del daño y seleccionar los materiales y métodos más adecuados para su recuperación. Utilizamos productos de alta calidad y tecnología avanzada que garantizan adherencia, resistencia y compatibilidad con el sustrato original.',
      'Este enfoque permite minimizar interrupciones operativas y optimizar la inversión en mantenimiento, asegurando que las superficies recuperadas cumplan con las exigencias específicas de cada sector industrial.',
    ],
    beneficios: [
      'Restablece la integridad estructural y funcionalidad de las superficies dañadas.',
      'Reduce costos a largo plazo al evitar reemplazos completos o daños mayores.',
      'Mejora la seguridad al eliminar riesgos asociados a superficies deterioradas.',
      'Permite adaptar la reparación a condiciones específicas y requerimientos técnicos.',
    ],
    images: [
      '/assets/servicios/repa1.jpg',
      '/assets/servicios/repa2.jpg',
      '/assets/servicios/repa3.jpg',
    ],
  },
  {
    slug: 'impermeabilizacion-de-cubiertas',
    title: 'Impermeabilización de Cubiertas Transitables y No Transitables',
    subtitle: 'Impermeabilización de cubiertas: protección duradera frente a filtraciones y exposición climática',
    description: [
      'Es una medida esencial para proteger estructuras expuestas a la intemperie frente a la acción del agua, los cambios de temperatura, los rayos UV y otros agentes ambientales que, con el tiempo, deterioran los materiales, provocan filtraciones y comprometen la integridad de la edificación.',
      'Consiste en la aplicación de un sistema impermeabilizante continuo, elástico y resistente, diseñado para adaptarse a las dilataciones propias de la estructura sin agrietarse ni desprenderse.',
      'Este tipo de intervención no solo previene filtraciones, sino que también mejora la eficiencia térmica y energética de la infraestructura, reduce el deterioro de los elementos constructivos y evita intervenciones costosas a futuro.',
    ],
    beneficios: [
      'Evita filtraciones, goteras y acumulación de humedad en techos y estructuras.',
      'Protege la cubierta frente a rayos UV, lluvia, heladas y dilataciones térmicas.',
      'Aumenta la vida útil de la estructura y reduce los costos de mantenimiento.',
      'Mejora el confort interior al controlar la transmisión térmica y de humedad.',
    ],
    images: [
      '/assets/servicios/imper1.jpg',
      '/assets/servicios/imper2.jpg',
      '/assets/servicios/imper3.png',
    ],
  },
  {
    slug: 'revestimientos-metacrilatos',
    title: 'Revestimientos Metacrilatos',
    subtitle: 'Metacrilatos: velocidad de aplicación y máxima versatilidad en condiciones exigentes',
    description: [
      'Los metacrilatos (MMA) son sistemas de revestimiento de curado ultra rápido, ideales para proyectos donde los tiempos de detención deben ser mínimos. Gracias a su capacidad de endurecer completamente en pocos minutos, incluso a bajas temperaturas, son una excelente opción para sectores industriales que requieren una rápida puesta en servicio sin sacrificar resistencia ni durabilidad.',
      'Los metacrilatos son especialmente útiles en cámaras de frío, pasillos de tránsito continuo, plantas de proceso y zonas de alto tráfico donde no es posible detener operaciones por largos periodos. Su correcta instalación requiere experiencia técnica, debido a la sensibilidad del producto durante su aplicación.',
    ],
    beneficios: [
      'Curado rápido incluso en temperaturas bajo cero, ideal para zonas de operación continua.',
      'Alta resistencia química y mecánica, apto para entornos exigentes.',
      'Mínima interrupción operativa gracias a su rápida habilitación.',
      'Permite personalización de acabado: liso, texturado o antideslizante.',
    ],
    images: [
      '/assets/servicios/reves1.jpg',
      '/assets/servicios/reves2.jpg',
      '/assets/servicios/reves4.jpg',
    ],
  },
  {
    slug: 'pulido-de-pisos',
    title: 'Pulido de Pisos',
    subtitle: 'Pulido de pisos: preparación crítica para un resultado duradero',
    description: [
      'El pulido del sustrato es una etapa clave dentro del proceso de preparación de superficies, ya sea en hormigón nuevo o existente. Esta labor permite acondicionar el piso de forma adecuada para recibir sistemas de revestimiento o tratamiento superficial.',
      'Nuestro proceso de pulido se realiza utilizando maquinaria de alto rendimiento en conjunto con sistemas de aspiración industrial, lo que garantiza un entorno de trabajo más limpio y con bajos niveles de partículas en suspensión, incluyendo sílice.',
      'La preparación correcta de la superficie no es opcional: es el primer y más importante paso para asegurar la adherencia, durabilidad y desempeño del tratamiento aplicado. Ignorar esta etapa puede derivar en fallas como burbujas, descascaramiento o desprendimiento prematuro del recubrimiento. Trabajamos bajo estándares técnicos reconocidos para evaluar y preparar cada superficie de forma precisa, minimizando riesgos y asegurando resultados profesionales.',
    ],
    beneficios: [
      'Mayor duración de los esquemas aplicados.',
      'Permite identificar daños imperceptibles a primera vista.',
      'Proporciona rugosidad antes de la aplicación.',
      'Remueve esquemas no compatibles o antiguos.',
    ],
    images: [
      '/assets/servicios/pulidos1.jpg',
      '/assets/servicios/pulidos2.jpg',
      '/assets/servicios/pulidos3.jpg',
    ],
  },
  {
    slug: 'revestimiento-de-estructuras',
    title: 'Revestimiento de Estructuras',
    subtitle: 'Revestimiento de estructuras: protección anticorrosiva y durabilidad en condiciones exigentes',
    description: [
      'El revestimiento de estructuras metálicas o de hormigón es una acción preventiva y correctiva fundamental para extender la vida útil de elementos expuestos a condiciones ambientales agresivas, productos químicos, humedad constante o tránsito industrial. Este tipo de protección es clave en sectores como la industria alimentaria, minera, química, portuaria, pesquera y de infraestructura en general.',
      'Los revestimientos utilizados varían según la exposición y los requerimientos operativos: epóxicos, poliuretanos, poliureas, esmaltes industriales, pinturas intumescentes o sistemas multicapa pueden ser empleados para ofrecer protección mecánica, química, térmica o contra el fuego.',
      'Además de brindar protección, estos revestimientos también cumplen un rol estético y funcional, permitiendo señalización, identificación por color, limpieza más sencilla y cumplimiento de normativas específicas de seguridad industrial o sanidad.',
    ],
    beneficios: [
      'Protege estructuras metálicas y de hormigón frente a corrosión, abrasión y agentes químicos.',
      'Aumenta significativamente la vida útil de componentes estructurales expuestos.',
      'Mejora el cumplimiento de normativas sanitarias e industriales.',
      'Reduce costos de reparación y mantenimiento a largo plazo.',
    ],
    images: [
      '/assets/servicios/stru1.jpg',
      '/assets/servicios/stru2.jpg',
      '/assets/servicios/stru3.jpg',
    ],
  },
  {
    slug: 'pisos-comerciales-y-decorativos',
    title: 'Pisos Comerciales y Decorativos',
    subtitle: 'Pisos comerciales y decorativos: funcionalidad con diseño',
    description: [
      'Combinan estética, resistencia y facilidad de mantenimiento, siendo una excelente solución para espacios de alto tránsito que requieren una presentación visual cuidada, sin renunciar a la durabilidad y la funcionalidad.',
      'Este tipo de pisos se utiliza en tiendas, oficinas, centros comerciales, clínicas, restaurantes, hoteles y edificios corporativos, donde el diseño y la primera impresión son tan importantes como la resistencia al desgaste. Entre los sistemas más comunes se encuentran los microcentros, epóxicos decorativos, terrazos, cuarzos color, autonivelantes pigmentados y poliuretanos satinados o brillantes, entre otros.',
      'Según el uso del espacio, se pueden incorporar acabados antideslizantes, texturas personalizadas, colores corporativos, gráficos integrados o brillos especiales que aporten valor estético al entorno.',
    ],
    beneficios: [
      'Elevado nivel estético con acabados personalizables en color, textura y brillo.',
      'Alta resistencia al tránsito peatonal, desgaste y productos de limpieza.',
      'Superficie continua, sin juntas, fácil de limpiar y mantener.',
      'Adaptable a distintos rubros comerciales y estilos arquitectónicos.',
    ],
    images: [
      '/assets/servicios/comer1.jpg',
      '/assets/servicios/comer2.jpg',
      '/assets/servicios/comer3.jpg',
    ],
  },
  {
    slug: 'proteccion-termo-acustica',
    title: 'Protección Térmo-Acústica',
    subtitle: 'Protección termoacústica con espuma de poliuretano: eficiencia energética y confort en un solo sistema',
    description: [
      'La espuma de poliuretano proyectada es una solución altamente eficiente para mejorar el aislamiento térmico y acústico en espacios industriales, comerciales o residenciales. Su aplicación forma una capa continua, sin uniones ni filtraciones, que sella completamente las superficies, mejorando el rendimiento energético y reduciendo ruidos no deseados.',
      'Este sistema es ideal para cubiertas, muros, cámaras frigoríficas, galpones, contenedores, ductos de ventilación y bodegas, ya que reduce significativamente la transferencia de calor y mejora el confort térmico tanto en verano como en invierno. Además, actúa como barrera acústica frente a vibraciones y ruidos provenientes del exterior o de maquinaria interna.',
    ],
    beneficios: [
      'Mejora el aislamiento térmico, reduciendo el consumo energético en climatización.',
      'Aporta aislamiento acústico en entornos industriales o urbanos.',
      'Aplicación rápida y continua, sin uniones ni puentes térmicos.',
      'Compatible con múltiples superficies y estructuras.',
    ],
    images: [
      '/assets/servicios/termo1.jpg',
      '/assets/servicios/termo2.jpg',
      '/assets/servicios/termino3.jpg',
    ],
  },
];

export default servicios;
