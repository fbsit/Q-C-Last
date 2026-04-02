import Link from "next/link";
import Image from "next/image";

const DescriptionQC = () => {

    const boxes = [
        {
            image: '/assets/tecnicos-en-terreno.jpg',
            title: 'Técnicos de terreno',
            description: 'Cada cliente presenta necesidades únicas y por ello es fundamental realizar una visita a terreno para darte la mejor solución a tu problema. Nuestro equipo técnico se encarga de evaluar las condiciones específicas del área de trabajo, permitiendo así recomendar la mejor alternativa, no solo en cuanto a producto o acabado, sino también en términos de costo-beneficio, durabilidad y facilidad de mantenimiento.'
        },
        {
            image: '/assets/porque-qc-2.jpg',
            title: 'Equipos y tecnología',
            description: 'Disponemos de una amplia variedad de maquinarias especializadas para garantizar un trabajo óptimo y conforme a los estándares técnicos que se adaptan a los distintos tipos de sustratos. Esto nos permite no solo realizar una correcta preparación de superficie, sino también reducir los tiempos de trabajo, evitar la sobrecarga física del personal y garantizar una aplicación eficiente y duradera.'
        },
        {
            image: '/assets/porque-qc-3.jpg',
            title: 'Compromiso con la seguridad',
            description: 'La seguridad y salud en el trabajo son una prioridad fundamental. Estamos plenamente comprometidos con el manejo seguro y responsable de nuestras maquinarias, equipos y procedimientos en cada uno de los servicios que brindamos. Nuestra Política de Seguridad y Salud Ocupacional se enfoca en la protección de nuestros colaboradores y de cualquier tercero que pueda verse involucrado en nuestros procesos y forma parte esencial de nuestra cultura operativa. Nuestro compromiso se traduce en prácticas seguras, capacitaciones permanentes y un enfoque preventivo en cada proyecto que desarrollamos.'
        },
        {
            image: '/assets/porque-qc-4.jpg',
            title: 'Autocontrol y estándares de calidad',
            description: 'Nuestro trabajo se desarrolla en etapas claramente definidas dentro del proceso de revestimiento, y cada una de ellas requiere un cuidado riguroso y atención especializada para asegurar resultados duraderos y de alta calidad. Aplicamos estándares internacionales de control de calidad, trabajando bajo la norma NACE-SSPC (Steel Structures Painting Council, USA) para la correcta preparación de superficies. En cuanto a la aplicación de productos, seguimos las recomendaciones técnicas del proveedor, asegurando así un desempeño óptimo en cada proyecto. Además, nuestro equipo se capacita constantemente con distintos fabricantes y participa activamente en charlas y entrenamientos técnicos, lo que nos permite mantenernos actualizados y garantizar un servicio profesional, respaldado por el conocimiento y la experiencia.'
        }
    ]

    return (
        <section>
            <div className="container descriptionQC">
              <div className="pleft">
                <span>Por qué elegir {'Q&C'}</span>
                <div className="row mb-4">
                    <div className="col-12 col-lg-6">
                        <h2>
                           Somos especialistas en pisos industriales y mantención de superficies.
                        </h2>
                    </div>
                    <div className="col-12 col-lg-6 d-none d-md-block d-lg-block">
                        <p>
                           Con una sólida trayectoria en el mercado chileno, nos especializamos en ofrecer soluciones integrales y de alto estándar en revestimientos de pisos y reparación de superficies. Nuestro equipo técnico, altamente calificado, trabaja con enfoque en la calidad, la seguridad y la eficiencia, adaptando cada proyecto a las necesidades específicas de nuestros clientes. Nos distingue el compromiso, la excelencia en cada etapa del proceso y una atención personalizada que garantiza resultados duraderos y funcionales. En Q&C, transformamos superficies en soluciones.
                        </p>
                    </div>
                </div>
              </div>
              <div className="containerBoxes">
                <div className="row">
                  { boxes.map( (box, index) => {
                      return (
                        <div key={box.title} className={`col-12 col-sm-6 col-md-6 col-lg-6 descriptionBox ${index === 2 ? 'focus-top' : ''}`}>
                            <Image src={box.image} alt={box.title} width={980} height={660} />
                            <div className="orangeBox">
                                <h3>{box.title}</h3>
                                <p>{box.description}</p>
                            </div>
                        </div>
                      )
                  })}
                </div>
              </div>
              <div className="text-center" style={{ clear: 'both', margin: '0 auto'}}>
                <Link className="btn-gris" href="/empresa">Te invitamos a conocernos</Link>
              </div>
            </div>
        </section>
    )
}

export default DescriptionQC;
