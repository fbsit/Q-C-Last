import Image from "next/image";

const areas = [
  {
    image: 'https://www.katemu.com/wp-content/uploads/2020/01/Pisos-y-Pavimentos-Industriales-1.svg',
    title: 'Pavimentos Industriales',
    description:
      'Soluciones de alto rendimiento para espacios sometidos a cargas pesadas y tráfico constante.',
  },
  {
    image: 'https://www.katemu.com/wp-content/uploads/2020/01/Pisos-y-Pavimentos-comerciales-decorativos.svg',
    title: 'Pisos Comerciales y Decorativos',
    description:
      'Acabados estéticos y funcionales para entornos comerciales, oficinas y espacios públicos.',
  },
  {
    image: 'https://www.katemu.com/wp-content/uploads/2020/01/Revestimientos-tratamientos-superficiales.svg',
    title: 'Revestimientos para pisos',
    description: 'Protección duradera frente a agentes químicos, humedad y desgaste mecánico.',
  },
  {
    image: 'https://www.katemu.com/wp-content/uploads/2020/01/Agroindustria.svg',
    title: 'Mantención y reparación de superficies',
    description:
      'Intervenciones técnicas para prolongar la vida útil de los pavimentos y restaurar áreas dañadas.',
  },
];

const AreaExpert = () => {
  return (
    <section className="area-expert">
      <div className="container contenido-boxes">
        <div className="text-center section-heading">
          <span>Nuestra especialidad</span>
          <h2>Áreas donde somos expertos</h2>
        </div>
        <div className="row g-4 area-expert-grid">
          {areas.map((expert) => (
            <article key={expert.title} className="col-12 col-md-6 col-xl-3 expert-card boxOrange">
              <Image className="expert-card__icon" src={expert.image} alt={expert.title} width={54} height={54} />
              <p>{expert.title}</p>
              <span>{expert.description}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreaExpert;
