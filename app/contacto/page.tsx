"use client";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import BannerImg from "@/components/BannerImg";
import OwnClients from "@/components/OwnClients";
import YupValidationResolver from "@/utils/YupValidationResolver";

const validationSchema = yup.object({
  first_name: yup
    .string()
    .min(3, "No cumple con los caracteres minimos (3)")
    .required("Este campo es requerido"),
  last_name: yup
    .string()
    .min(3, "No cumple con los caracteres minimos (3)")
    .required("Este campo es requerido"),
  email: yup
    .string()
    .email("Formato de email incorrecto")
    .required("Este campo es requerido"),
  phone: yup
    .string()
    .min(8, "No cumple con los caracteres minimos (8)")
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
        <div className="container contact_first">
          <div className="row mb-4 containerBoxes">
            <div className="col-lg-6 no-padding">
              <span>Contactanos</span>
              <h3>
                Y descubre la calidad y durabilidad de los revestimientos Q&C.
              </h3>
              <article>
                <p>
                  Contactanos y danos la oportunidad de apoyarte con tu proximo
                  proyecto. Envianos tus datos y un representante te contactara
                  para entregarte la mejor asesoria adaptada a tu necesidad.
                </p>
              </article>
              <div className="boxDatos">
                <span>Datos de contacto</span>
                <div className="row">
                  <div className="col-4 col-lg-4 text-center">
                    <span>Direccion</span>
                    <p>Janequeo N1650, Concepcion, Biobio, Chile</p>
                  </div>
                  <div className="col-4 col-lg-4 text-center">
                    <span>Telefono</span>
                    <p>
                      +569 67691262
                      <br />
                      +569 40121800
                    </p>
                  </div>
                  <div className="col-4 col-lg-4 text-center">
                    <span>Correo electronico</span>
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
                  <span className="col-lg-12">Contactenos:</span>
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
                    {errors.first_name && <span>{errors.first_name.message}</span>}
                  </div>
                  <div className="form-group col-sm-12 col-md-6">
                    <label>Apellidos</label>
                    <input
                      className="form-control"
                      {...register("last_name")}
                      type="text"
                      placeholder="Ej: Hernandez Gonzales"
                    />
                    {errors.last_name && <span>{errors.last_name.message}</span>}
                  </div>
                  <div className="form-group col-sm-12 col-md-6">
                    <label>Correo electronico</label>
                    <input
                      className="form-control"
                      {...register("email")}
                      type="text"
                      placeholder="Ej: nombre@correo.cl"
                    />
                    {errors.email && <span>{errors.email.message}</span>}
                  </div>
                  <div className="form-group col-sm-12 col-md-6">
                    <label>Telefono</label>
                    <input
                      className="form-control"
                      {...register("phone")}
                      type="text"
                      placeholder="Ej: 987654321"
                    />
                    {errors.phone && <span>{errors.phone.message}</span>}
                  </div>
                  <div className="form-group col-sm-12 col-md-6">
                    <label>Metros cuadrados</label>
                    <select className="form-control" {...register("mcuadrados")}>
                      <option value="">--</option>
                      <option>Menos de 5.000 M2</option>
                      <option>Entre 5.000 M2 a 15.000 M2</option>
                      <option>Mayor de 15.001 M2</option>
                    </select>
                    {errors.mcuadrados && <span>{errors.mcuadrados.message}</span>}
                  </div>
                  <div className="form-group col-sm-12 col-md-6">
                    <label>Region</label>
                    <select className="form-control" {...register("region")}>
                      <option value="">--</option>
                      <option value="Region Metropolitana de Santiago">
                        Region Metropolitana de Santiago
                      </option>
                      <option value="VIII Region del Biobio">VIII Region del Biobio</option>
                      <option value="XVI Region de Nuble">XVI Region de Nuble</option>
                    </select>
                    {errors.region && <span>{errors.region.message}</span>}
                  </div>
                  <div className="form-group">
                    <label>Asunto</label>
                    <select className="form-control" {...register("asunto")}>
                      <option value="">--</option>
                      <option value="Mantencion y Reparacion">
                        Mantencion y Reparacion
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
                    {errors.asunto && <span>{errors.asunto.message}</span>}
                  </div>
                  <div className="form-group">
                    <label>Comentario</label>
                    <textarea
                      style={{ height: "200px" }}
                      className="form-control"
                      {...register("comentario")}
                      placeholder="Comentario"
                    />
                    {errors.comentario && <span>{errors.comentario.message}</span>}
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
              <h3>Nuestra ubicacion</h3>
              <iframe
                width="100%"
                height="340"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1593.0823837337054!2d-73.15955713501306!3d-37.0058653965143!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9669c6b876995773%3A0x4807f1885e229a59!2sQyC+Quimicos+y+Complementos.!5e0!3m2!1ses-419!2scl!4v1520200792272"
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
