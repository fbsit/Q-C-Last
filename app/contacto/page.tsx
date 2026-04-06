"use client";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import BannerImg from "@/components/BannerImg";
import OwnClients from "@/components/OwnClients";
import YupValidationResolver from "@/utils/YupValidationResolver";

const validationSchema = yup.object({
  first_name: yup
    .string()
    .min(3, "No cumple con los caracteres mínimos (3)")
    .required("Este campo es requerido"),
  last_name: yup
    .string()
    .min(3, "No cumple con los caracteres mínimos (3)")
    .required("Este campo es requerido"),
  email: yup
    .string()
    .email("Formato de email incorrecto")
    .required("Este campo es requerido"),
  phone: yup
    .string()
    .min(8, "No cumple con los caracteres mínimos (8)")
    .required("Este campo es requerido"),
  mcuadrados: yup.string().required("Este campo es requerido"),
  region: yup.string().required("Este campo es requerido"),
  asunto: yup.string().required("Este campo es requerido"),
  comentario: yup.string().required("Este campo es requerido"),
});

type ContactForm = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  mcuadrados: string;
  region: string;
  asunto: string;
  comentario: string;
};

export default function ContactoPage() {
  const resolver = YupValidationResolver(validationSchema);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactForm>({ resolver });

  const onSubmit = (data: ContactForm) => {
    console.log("Contacto", data);
  };

  return (
    <>
      <BannerImg
        urlImage="/assets/contacto/head.jpg"
        title="Contacto"
        className="contacto-banner"
      />
      <section>
        <div className="container contact_first contact-page">
          <div className="row mb-4 containerBoxes">
            <div className="col-lg-6 no-padding">
              <span>Contáctanos</span>
              <h3>
                Y descubre la calidad y durabilidad de los revestimientos Q&C.
              </h3>
              <article>
                <p>
                  Contáctanos y danos la oportunidad de apoyarte con tu próximo
                  proyecto. Envíanos tus datos y un representante te contactará
                  para entregarte la mejor asesoría adaptada a tu necesidad.
                </p>
              </article>
              <div className="boxDatos">
                <span>Datos de contacto</span>
                <div className="row">
                  <div className="col-4 col-lg-4 text-center">
                    <span>Dirección</span>
                    <p>Janequeo N° 1650, Concepción, Biobío, Chile</p>
                  </div>
                  <div className="col-4 col-lg-4 text-center">
                    <span>Teléfono</span>
                    <p>
                      +569 67691262
                      <br />
                      +569 40121800
                    </p>
                  </div>
                  <div className="col-4 col-lg-4 text-center">
                    <span>Correo electrónico</span>
                    <p>
                      epincheira@qyc.cl
                      <br />
                      npincheira@qyc.cl
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 form-bg">
              <form className="formContacto" onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <span className="col-lg-12">Contáctenos:</span>
                </div>
                <div className="row">
                  <div className="form-group col-sm-12 col-md-6">
                    <label>Nombres</label>
                    <input
                      className="form-control"
                      {...register("first_name")}
                      type="text"
                      placeholder="Ej: Rodrigo Alejandro"
                    />
                    {errors.first_name && <span className="field-error">{errors.first_name.message}</span>}
                  </div>
                  <div className="form-group col-sm-12 col-md-6">
                    <label>Apellidos</label>
                    <input
                      className="form-control"
                      {...register("last_name")}
                      type="text"
                      placeholder="Ej: Hernández González"
                    />
                    {errors.last_name && <span className="field-error">{errors.last_name.message}</span>}
                  </div>
                  <div className="form-group col-sm-12 col-md-6">
                    <label>Correo electrónico</label>
                    <input
                      className="form-control"
                      {...register("email")}
                      type="text"
                      placeholder="Ej: nombre@correo.cl"
                    />
                    {errors.email && <span className="field-error">{errors.email.message}</span>}
                  </div>
                  <div className="form-group col-sm-12 col-md-6">
                    <label>Teléfono</label>
                    <input
                      className="form-control"
                      {...register("phone")}
                      type="text"
                      placeholder="Ej: 987654321"
                    />
                    {errors.phone && <span className="field-error">{errors.phone.message}</span>}
                  </div>
                  <div className="form-group col-sm-12 col-md-6">
                    <label>Metros cuadrados</label>
                    <select className="form-control" {...register("mcuadrados")}>
                      <option value="">--</option>
                      <option>Menos de 5.000 M2</option>
                      <option>Entre 5.000 M2 a 15.000 M2</option>
                      <option>Mayor de 15.001 M2</option>
                    </select>
                    {errors.mcuadrados && <span className="field-error">{errors.mcuadrados.message}</span>}
                  </div>
                  <div className="form-group col-sm-12 col-md-6">
                    <label>Región</label>
                    <select className="form-control" {...register("region")}>
                      <option value="">--</option>
                      <option value="Región Metropolitana de Santiago">
                        Región Metropolitana de Santiago
                      </option>
                      <option value="VIII Región del Biobío">VIII Región del Biobío</option>
                      <option value="XVI Región de Ñuble">XVI Región de Ñuble</option>
                    </select>
                    {errors.region && <span className="field-error">{errors.region.message}</span>}
                  </div>
                  <div className="form-group">
                    <label>Asunto</label>
                    <select className="form-control" {...register("asunto")}>
                      <option value="">--</option>
                      <option value="Mantención y Reparación">
                        Mantención y Reparación
                      </option>
                      <option value="Mediciones">Mediciones</option>
                      <option value="Pisos y pavimentos comerciales / decorativos">
                        Pisos y pavimentos comerciales / decorativos
                      </option>
                      <option value="Pisos y pavimentos industriales">
                        Pisos y pavimentos industriales
                      </option>
                      <option value="Revestimientos / tratamientos superficiales">
                        Revestimientos / tratamientos superficiales
                      </option>
                    </select>
                    {errors.asunto && <span className="field-error">{errors.asunto.message}</span>}
                  </div>
                  <div className="form-group">
                    <label>Comentario</label>
                    <textarea
                      style={{ height: "200px" }}
                      className="form-control"
                      {...register("comentario")}
                      placeholder="Comentario"
                    />
                    {errors.comentario && <span className="field-error">{errors.comentario.message}</span>}
                  </div>
                  <div className="text-centrado">
                    <button type="submit" className="btn-gris">
                      Enviar
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-12 mt-5">
              <h3>Nuestra ubicación</h3>
              <iframe
                width="100%"
                height="340"
                src="https://www.google.com/maps?q=Janequeo+1650,+Concepcion,+Biobio,+Chile&z=15&output=embed"
                frameBorder={0}
                allowFullScreen={false}
                style={{ border: "0px", borderImage: "none", pointerEvents: "none" }}
              />
            </div>
          </div>
        </div>
      </section>
      <OwnClients />
    </>
  );
}
