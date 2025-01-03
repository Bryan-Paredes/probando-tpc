import { MisionIcon, PusrposeIcon, VisionIcon } from "@/components/icons";
import { subtitle, title } from "@/components/primitives";
import { Image } from "@nextui-org/image";

export default function AboutPage() {
  return (
    <section>
      <h1 className={title({ class: "font-semibold" })}>Quienes Somos?</h1>
      <div className="grid lg:grid-cols-3 items-center justify-center gap-10 my-7">
        <div className="flex flex-col gap-2 items-center justify-start p-3">
          <MisionIcon size={60} className="text-primary" />
          <h4
            className={subtitle({
              class: "font-semibold text-center",
            })}
          >
            Nuestra Misión
          </h4>
          <p className="text-justify max-w-xl">
            Nuestra misión es proporcionar servicios de mensajería excepcionales
            que conecten a personas y empresas de manera eficiente y segura. Nos
            comprometemos a ofrecer soluciones logísticas innovadoras y
            confiables que superen las expectativas de nuestros clientes,
            brindando un valor agregado a sus operaciones diarias.
          </p>
        </div>
        <div className="flex flex-col gap-3 items-center justify-start p-3">
          <VisionIcon size={60} className="text-primary" />
          <h4
            className={subtitle({
              class: "font-semibold text-center",
            })}
          >
            Nuestra Visión
          </h4>
          <p className="text-justify max-w-xl">
            En TPC EXPRESS, nos visualizamos como la primera elección en
            soluciones de mensajería, liderando la industria con un compromiso
            inquebrantable con la eficiencia, confiabilidad y servicio al
            cliente excepcional. Nos esforzamos por ser el socio logístico
            preferido para empresas y particulares
          </p>
        </div>
        <div className="flex flex-col gap-3 items-center justify-start p-3">
          <PusrposeIcon size={60} className="text-primary" />
          <h4
            className={subtitle({
              class: "font-semibold text-center",
            })}
          >
            Propósito
          </h4>
          <p className="text-justify max-w-xl">
            El propósito fundamental de TPC EXPRESS es facilitar la conexión y
            el progreso al proporcionar soluciones de mensajería que trascienden
            la simple entrega de paquetes. Nos esforzamos por ser el puente que
            acerca a las personas, las comunidades y los negocios, creando un
            impacto positivo en la vida cotidiana.
          </p>
        </div>
      </div>
      <div className="text-center">
        <h1 className={`${title({ class: "font-semibold text-center" })}`}>
          Nuestros Valores
        </h1>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-5 my-7">
          <div>
            <Image
              isBlurred
              loading="lazy"
              width={500}
              alt="Value Image"
              src="/siteImages/values.svg"
              className="drop-shadow-lg"
            />
          </div>
          <div className="flex flex-col items-center justify-center text-left">
            <div>
              <h3 className={subtitle({ class: "font-bold text-primary" })}>
                - PUNTUALIDAD
              </h3>
              <p className="text-justify font-semibold max-w-xl">
                Garantizamos la entrega de tus envíos con la máxima precisión y
                en el tiempo acordado.
              </p>
            </div>
            <div>
              <h3 className={subtitle({ class: "font-bold text-primary" })}>
                - TRANSPARENCIA
              </h3>
              <p className="text-justify font-semibold max-w-xl">
                Creemos en la apertura y honestidad en cada paso del proceso de
                entrega.
              </p>
            </div>
            <div>
              <h3 className={subtitle({ class: "font-bold text-primary" })}>
                - LEALTAD
              </h3>
              <p className="text-justify font-semibold max-w-xl">
                Valoramos la relación a largo plazo que construimos contigo y tu
                confianza en nuestros servicios.
              </p>
            </div>
            <div>
              <h3 className={subtitle({ class: "font-bold text-primary" })}>
                - EXCELENCIA
              </h3>
              <p className="text-justify font-semibold max-w-xl">
                Desde la atención al cliente hasta la manipulación cuidadosa de
                tus paquetes, cada aspecto de nuestro servicio se ejecuta con un
                estándar de calidad insuperable.
              </p>
            </div>
            <div>
              <h3 className={subtitle({ class: "font-bold text-primary" })}>
                - ESCUCHA
              </h3>
              <p className="text-justify font-semibold max-w-xl">
                No solo entregamos paquetes, sino que también conectamos con tus
                prioridades. Estamos aquí para escuchar lo que es más importante
                para ti en cada envío.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
