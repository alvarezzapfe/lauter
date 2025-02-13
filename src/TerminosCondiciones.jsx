import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./assets/css/TerminosCondiciones.css";
import Navbar from "./components/Navbar";
import logo from "./assets/images/logo1.png";

const TerminosCondiciones = () => {
  return (
    <>
      <Navbar />
      <div className="container terminos-container">
        <h2>Términos y Condiciones</h2>
        <p className="text-justify">
          Los presentes términos y condiciones de uso de la plataforma (los
          “Términos y Condiciones”) establecen y regulan la relación entre
          <strong>
            {" "}
            Infraestructura en Finanzas AI, Sociedad Anónima Promotora de
            Inversión de Capital Variable
          </strong>{" "}
          (“Lauter”) y cualquier parte que acceda a la plataforma con dirección
          URL:{" "}
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.lauter.mx
          </a>{" "}
          (la “Plataforma”).
        </p>
        <p className="text-justify">
          Los presentes términos y condiciones de uso de la plataforma (los “
          Términos y Condiciones”) que establecen y regulan la relación
          entrePorCuanto S.A. de C.V., Institución de Financiamiento
          Colectivo(“Crowdlink” o “PorCuanto”) y cualquier parte que acceda a la
          Plataforma con dirección URL:www.crowdlink.mx (la “Plataforma”).
          Cualquier persona que acceda, consulte, y navegue en este sitio,
          acepta los presentes Términos y Condiciones. Cualquier persona que se
          registre o utilice la Plataforma (el “Usuario”), reconoce que al dar
          click en el apartado correspondiente a la aceptación de los presentes
          Términos y Condiciones, éste los acepta de manera expresa, y que
          entiende el alcance de sus obligaciones y derechos derivados de los
          mismos, asumiendo así las obligaciones a su cargo que derivan de su
          consentimiento, sin que exista error, dolo, mala fe, o cualquier otro
          vicio que pudiera afectar su consentimiento. Dicha aceptación tiene el
          mismo efecto jurídico que si hubiera plasmado su firma física y
          digital en un acuerdo de voluntades, y acepta que su consentimiento
          sea recabado de manera electrónica para todos los efectos que haya
          lugar. De igual forma, el Usuario acepta que la totalidad de sus datos
          recabados de forma electrónica podrán ser verificados para determinar
          su autenticidad. En todo caso, al momento en que cualquier Usuario se
          registre en la Plataforma, se deberá de aceptar de forma expresa los
          presentes Términos y Condiciones a través de una Firma Electrónica
          Avanzada, una Firma Autógrafa Digitalizada o cualquier otra forma de
          autenticación en términos del artículo 56 de la Ley para Regular las
          Instituciones de Tecnología Financiera. En caso de que el Usuario no
          acepte los presentes Términos y Condiciones, deberá de abstenerse de
          acceder o navegar en el presente sitio o acceder o utilizar de
          cualquier forma la Plataforma de Crowdlink. Definiciones Para los
          fines de los presentes Términos y Condiciones, los siguientes términos
          tendrán el significado que a continuación se les atribuye, en el
          entendido que dicho significado será igualmente aplicable al singular
          y al plural de las definiciones: Amazon Web Services:Significa el
          proveedor de servicio de gestión y protección de datos de Crowdlink.
          API: una sigla que corresponde a Application Programming Interface (en
          inglés) y que permiten que las aplicaciones y programas se
          intercomuniquen entre sí. Aviso de Privacidad:Significa el aviso de
          privacidad elaborado por Crowdlink de conformidad con la Ley Federal
          de Protección de Datos Personales en Posesión de Particulares y su
          reglamento, disponible para su consulta en la Plataforma, y cuyo
          objeto es informar a los Usuarios, entre otros, el tipo de datos
          personales que Crowdlink recaba, la forma en que son obtenidos, la
          finalidad con la que dicha información se recaba, si se trata de datos
          personales sensibles o no, así como el manejo y aprovechamiento de los
          mismos. CONDUSEF: Significa la Comisión Nacional para la Protección y
          Defensa de los Usuarios de Servicios Financieros. CNBV: Significa la
          Comisión Nacional Bancaria y de Valores. Disposiciones: Significa las
          Disposiciones de Carácter General Aplicables a las Instituciones de
          Tecnología Financiera. Disposiciones CONDUSEF: Significa las
          Disposiciones de carácter general de la CONDUSEF en materia de
          transparencia y sanas prácticas aplicables a las Instituciones de
          Tecnología Financiera. Empresas Promovidas: Significa las empresas
          Solicitantes. Firma Electrónica: Tiene el significado que se le asigna
          a dicho término en el inciso H de estos Términos y Condiciones.
          Inversionista: Significa persona física o moral que aporte recursos al
          Solicitante. KYC: Significa know your costumer, referente al proceso
          de vaildación de datos del cliente para perfilamiento. Ley Fintech:
          significa a la Ley para Regular las Instituciones de Tecnología
          Financiera, así como su regulación y disposiciones secundarias. Mati:
          se refiere al proveedor de tecnología Mati Technologies, S. de R.L. de
          C.V. que realiza la verificación de identidad de los usuarios
          registrados de la Plataforma. Operación: Se refiere a cualquier acción
          que el Usuario pueda realizar dentro de la Plataforma de Crowdlink al
          accesar con las claves de acceso correspondiente. PLD/FT: La actividad
          relacionada con la prevención de lavado de dinero y financiamiento al
          terrorismo requerida por las autoridades para organizar y operar un
          modelo de financiamiento colectivo de capital de conformidad con las
          Ley federal para la Prevención e Identificación de Operaciones con
          Recursos de procedencia ilícita. Plataforma:Tiene el significado que
          se le asigna a dicho término en el proemio de los presentes Términos y
          Condiciones. PorCuanto: Tiene el significado que se le asigna a dicho
          término en el proemio de los presentes Términos y Condiciones.
          Servicios: Tiene el significado que se le asigna a dicho término en la
          sección B siguiente. Solicitantes: Significa las personas físicas o
          morales que hubieren requerido tales recursos a través de Crowdlink.
          En virtud de lo anterior, los Solicitantes para efecto de las
          Operaciones a celebrarse mediante la Plataforma de Crowdlink significa
          las personas morales de nacionalidad mexicana que están interesadas,
          por así convenir a sus intereses, en obtener capital adicional para el
          crecimiento e impulso de su actividad social y que utilicen la
          Plataforma para proporcionar a los Usuarios cierta información
          relacionada con su actividad social. Quedará incluido dentro del
          término “Solicitante” a la persona moral, de propósito específico,
          cuya constitución sea provocada por el Solicitante para llevar a cabo
          una Oferta. Términos y Condiciones: Significan los presentes Términos
          y Condiciones y según los mismos sean modificados de tiempo en tiempo,
          junto con la documentación que se entiende incluida en los mismos por
          referencia, y según la misma sea modificada de tiempo en tiempo.
          Usuario o Cliente:persona que ingresa, navega y/o utiliza la
          Plataforma. A. Objeto. Los presentes Términos y Condiciones establecen
          los derechos y obligaciones los que se sujetarán Crowdlink y los
          Usuarios por el uso de la Plataforma, su contenido, secciones y
          funciones. Las partes convienen en que la prestación de los Servicios
          que solicitaren se regirá por contratos independientes que
          corresponden a cada uno de ellos. B. Funcionamiento de los Servicios.
          Los Términos y Condiciones de uso de la Plataforma están elaborados de
          conformidad con la regulación aplicable para las Instituciones de
          Tecnología Financiera que establece la Ley Fintech como las
          Disposiciones CONDUSEF y demás normatividad aplicable. El Usuario
          reconoce y acepta que el funcionamiento de los Servicios de Crowdlink
          en la Plataforma es el siguiente: Registro.El Cliente deberá estar
          registrado conforme a las políticas aplicables al tipo de cuenta que
          corresponda. Para poder registrarse como Cliente se debe tener al
          menos 18 años y contar con la capacidad legal necesaria para obligarse
          y aceptar los Términos y Condiciones. En el supuesto que los Usuarios
          sean menores de edad o incapaces, es necesario que un tutor legal o
          quien ejerza su patria potestad abra la cuenta en su nombre y
          representación. De manera íntegra y total, la responsabilidad en la
          determinación de los contenidos y Servicios a los que accede un menor
          de edad o incapaz corresponde enteramente a quienes ejerzan la patria
          potestad. Reglas de Registro. El registro, acceso y uso de los
          Servicios por cada Usuario deberá ser en todo momento personal, por lo
          que los derechos y obligaciones que tiene al amparo de los presentes
          Términos y Condiciones son personalísimos, únicos e intransferibles.
          El Usuario deberá mantener en secreto y abstenerse de revelar a
          terceros los datos asociados a su cuenta. El Usuario será responsable
          por todas las operaciones efectuadas en el acceso a la Plataforma, en
          la creación de una cuenta de Usuario y en el uso de la cuenta del
          Usuario, la cual es de conocimiento exclusivo del mismo. Crowdlink por
          ningún motivo estará obligado a identificar ni verificar la dirección
          IP desde la cual el Inversionista accede a la Plataforma Crowdlink y/o
          a su cuenta Crowdlink. Ingreso. El ingreso a la Plataforma se realiza
          mediante el acceso a la Plataforma que opera bajo el nombre de dominio
          de www.crowdlink.mx. El ingreso comprende la navegación libre y
          responsable del Usuario en la Plataforma. Servicios.El Usuario que se
          haya registrado en la Plataforma y haya verificado su identidad
          mediante documentos personales y haya recibido aprobación interna,
          podrá realizar inversiones en proyectos donde se mantengan campañas o
          rondas de financiamiento colectivo de capital activas de Solicitantes,
          navegar por su cuenta de Usuario y verificar información personal o
          acerca de los proyectos de Solicitantes donde ya haya realizado
          inversiones, actualizar su información personal, recuperar su
          contraseña de ingreso a la Plataforma mediante el doble factor de
          autenticación donde podrá recibir a su dirección de correo una liga
          url para reestablecer su contraseña, solicitar aclaraciones respecto
          de los proyectos donde haya invertido o que desee invertir. o
          Inversiones: el Usuario que haya realizado o desee realizar
          inversiones en la Plataforma podrá consultar información financiera de
          la empresa promovida solicitante cuando esta publique, que por
          disposición deberá ser por lo menos una vez al año. El Usuario, al
          momento de invertir, recibirá en su cuenta de correo electrónico la
          cuenta CLABE de depósito de la ronda de inversión que para cada
          proyecto se haya constituido a través de entidades financieras en
          México. El usuario deberá enviar el comprobante de depósito a
          contacto@crowdlink.mx para confirmar su depósito. o Retornos de las
          inversiones: el Usuario deberá dar de alta en su cuenta una CLABE para
          recibir los retornos de inversión, dicha cuenta deberá estar a su
          nombre. o Crowdlink dará a conocer a los Usuarios sobre los proyectos
          de Solicitantes activos y cerrados (rondas exitosas) en la Plataforma.
          Usos de la Plataforma. El Usuario acepta que será responsable de las
          operaciones que realice en la Plataforma, el Usuario podrá: o
          Consultar proyectos de Solicitantes (Empresas Promovidas) para
          financiamientos colectivo de capital. o Elegir proyectos para realizar
          inversiones. o Solicitar información de Solicitantes o Empresas
          Promovidas donde haya realizado previamente alguna inversión. o
          Solicitar correo para recibir cuentas de depósito de proyectos de
          solicitante que se encuentren activos. o Ver el avance de la ronda de
          financiamiento activa de los Solicitantes en la Plataforma. o Ver
          todos los proyectos que se hayan fondeado exitosamente en la
          Plataforma y en su caso, podrá consultar los retornos de aquellos
          proyectos que lo hayan hecho. o La Plataforma estará disponible las 24
          horas del día, los 365 días del año. o Los horarios de atención son de
          lunes a viernes de 9:00am a 18:00 horas. Los Usuarios no podrán o
          Difundir información falsa de la paltaforma ni de los proyectos. o
          Utilizar información publicada en la Plataforma para difundirla en
          otras plataformas. Incidencias.Si se llegase a presentar alguna
          eventualidad por la cual el sitio presente fallas, Crowdlink mostrará
          un mensaje en la Plataforma mediante el cual se le notificará al
          Usuario que los Servicios no estarán disponibles por el momento y se
          hará de su conocimiento que se está trabajando para restablecer su
          normal funcionamiento. Crowdlink hará del conocimiento de la CONDUSEF
          cuando se presenten fallas en la Plataforma, mediante correo
          electrónico remitido a la cuenta suptech@condusef.gob.mx, debiéndose
          generar un acuse de recibo electrónico, siempre que estas
          interrupciones presenten una duración de al menos veinticuatro horas.
          Datos Personales; Contraseña y otros. El Usuario no deberá escribir la
          contraseña de forma inteligible o accesible para un tercero. El
          Usuario acepta que será responsable del resguardo de la información de
          autenticación necesaria para tener acceso a su cuenta, incluyendo
          contraseñas, usuario, claves de acceso, firmas, datos para cualquier
          métodos de autentificación, códigos o cualquier otra. Crowdlink no
          será responsable en ningún caso por el uso, mal uso, resguardo,
          pérdida o robo de dicha información por parte del Usuario, o cualquier
          daño o pérdida que pueda sufrir el Usuario. En caso de robo, extravío
          u olvido de dicha información, el Usuario tendrá que ingresar a la
          Plataforma, dar clic en el apartado “iniciar sesión” una vez ahí, dar
          clic en “recuperar contraseña” y seguir las instrucciones que serán
          enviadas al correo electrónico con el que se registró el Usuario o
          comunicarse a nuestro servicio de atención y solicitar la liga para
          restablecer la contraseña. El Usuario se compromete a notificar a
          Crowdlik en forma inmediata y por medio fehaciente, cualquier uso no
          autorizado de su Cuenta, así como el ingreso por terceros no
          autorizados a la misma. Crowdlink no será responsable en ningún
          momento de las operaciones que el Usuario realice dentro de la
          Plataforma previas a la existencia de un reporte por parte del Usuario
          o al mal uso que le pueda dar este último a su cuenta. Crowdlink por
          ningún motivo estará obligado a identificar ni verificar la dirección
          IP desde la cual el Inversionista accede a la Plataforma Crowdlink y/o
          a su Cuenta Crowdlink. Otros. Cuando el Inversionista no esté de
          acuerdo con alguno de los movimientos que aparezcan reflejados en su
          estado de cuenta, podrá presentar una solicitud de aclaración,
          inconformidad o queja en un plazo de 10 (diez) días hábiles contados a
          partir de su fecha de corte, al número telefónico [__] y por correo
          electrónico:contacto@crowdlink.mx. C. Registro como nuevo cliente El
          Usuario deberá completar el formulario de forma obligatoria para poder
          tener una cuenta en la Plataforma y utilizar los Servicios que brinda
          la misma, el formulario deberá llenarse con información personal de
          manera exacta y precisa, así como los demás campos requeridos, el
          Usuario se obliga a actualizar los datos personales conforme resulte
          necesario. El Usuario, al registrarse y al aceptar los Términos y
          Condiciones, también acepta y se obliga a proporcionar sus datos
          verdaderos como se solicita, para que Crowdlink, a través de Mati
          (integrado a través de un API en nuestra Plataforma) realicé el
          proceso de KYC, de conformidad con nuestras políticas y procedimientos
          para la prevención de lavado de dinero y financiamiento al terrorismo,
          para que el Usuario pueda invertir en algún proyecto de la Plataforma.
          El Usuario señala, bajo protesta de decir verdad, que actúa bajo
          cuenta propia, que es mayor de edad y que cuenta con la capacidad
          jurídica para realizar las actividades que se contienen en la
          Plataforma, así como que toda la información y documentación que ha
          proporcionado y/o proporcione en relación con cualquier actividad que
          se promueva en el Plataforma, es verdadera, completa y correcta,
          quedando, por ende, obligada a indemnizar y sacar en paz y a salvo a
          Crowdlink de cualquier daño, perjuicio, demanda y/o acción que dicha
          omisión o falsedad le provoque. D. Obligaciones y restricciones de uso
          de la Plataforma El uso y acceso a la Plataforma y la realización de
          Operaciones no está permitido desde aquellas jurisdicciones en las
          cuales: (i) No esté permitida la realización de las Operaciones; y
          (ii) Crowdlink determine a su entera discreción que, el acceso de un
          Usuario a la Plataforma incumple con lo señalado en el inciso
          anterior, o bien, existe un posible riesgo o un riesgo determinado en
          la realización de las Operaciones. En cualquiera de estos supuestos
          Crowdlink podrá suspender el acceso a la Plataforma de forma
          unilateral y sin previo aviso al Usuario. En el uso de los Servicios,
          uso de la Plataforma y en su comportamiento y publicaciones en las
          redes sociales de Crowdlink, el Usuario acepta y reconoce que tendrá
          estrictamente prohibido: Difundir información falsa o engañosa o que
          induzca al error; Restringir o inhibir a cualquier otro usuario de
          usar y disfrutar los Servicios; Utilizar la información publicada en
          la Plataforma o en redes sociales de Crowdlink para realizar cualquier
          conducta que tienda a manipular a los demás Usuarios o interesados en
          participar en una campaña de financiamiento colectivo de capital; Ser
          fraudulento, ilegal, amenazante, abusivo, hostigante, calumnioso,
          difamatorio, obsceno, vulgar, ofensivo, pornográfico, profano,
          sexualmente explícito o indecente; Generar o alentar conductas que
          pudieran constituir una ofensa criminal, dar lugar a responsabilidad
          civil o de otro modo violar cualquier ley local, estatal, nacional o
          internacional; Violar, plagiar o infringir los derechos de terceros
          incluyendo, sin limitación, derechos de autor, marcas comerciales,
          secretos comerciales, confidencialidad, contratos, patentes, derechos
          de privacidad o publicidad o cualquier otro derecho de propiedad;
          Diseminar virus, elementos de espionaje u otro componente dañino;
          Emitir enlaces fijos, publicidad, cartas de cadenas o esquemas de
          pirámides de cualquier tipo; Retirar cualquier nota de derechos de
          autor, marca registrada u otra nota de propiedad de cualquier parte de
          la información publicada en la Plataforma o bien utilizarla o
          manipularla en su beneficio, o bien con la finalidad de perjudicar a
          Crowdlink, un Solicitante o en general a cualquier tercero;
          Reproducir, modificar, preparar obras derivadas sobre la información
          publicada en la Plataforma o en las redes sociales de Crowdlink,
          distribuir, licenciar, arrendar, revender, transferir, exhibir
          públicamente, presentar públicamente, transmitir, retransmitir o
          explotar de otra forma cualquier información, excepto como se permita
          expresamente por Crowdlink; Descompilar, realizar ingeniería inversa
          de la Plataforma, excepto como se permita por la ley aplicable;
          Enlazar, reflejar o enmarcar cualquier parte de la Plataforma; Causar
          o lanzar cualquier programa o script con el objeto de extraer,
          indexar, analizar o de otro modo realizar prospección de datos de
          cualquier parte de la Plataforma o sobrecargar o bloquear
          indebidamente la operación y/o funcionalidad de cualquier aspecto de
          la Plataforma; Intentar obtener un acceso no autorizado o dañar
          cualquier aspecto de la Plataforma, sus sistemas o redes relacionados;
          Permitir a un tercero acceder a la Plataforma con su contraseña, a
          efecto de consultar información, realizar Operaciones o para cualquier
          finalidad. Realizar Operaciones a nombre de un tercero, debiendo en
          todo momento, actuar por cuenta propia. De conformidad con el artículo
          95 de las Disposiciones, Crowdlink pondrá a disposición de los
          Inversionistas que hayan participado en alguna Operación, al menos,
          durante los dos años siguientes a que se concretó la Operación, los
          datos siguientes: I. La información anual de los administradores de la
          persona moral financiada. II. Los riesgos y retos que enfrenta la
          persona moral financiada. III. Los indicadores financieros al cierre
          del ejercicio anual reportado en comparación con el periodo anterior,
          incluyendo una breve descripción de la forma de cálculo y su
          interpretación de acuerdo con lo siguiente: a) Rentabilidad, que es el
          resultado de dividir las utilidades netas anuales entre el capital
          promedio para determinar el rendimiento sobre capital (“ROE”) o bien,
          el resultado de dividir las utilidades netas anuales entre el activo
          promedio para determinar el rendimiento sobre activos (“ROA”). b)
          Apalancamiento, que es el resultado de dividir el pasivo total entre
          el activo total. c) Liquidez, que es el resultado de dividir los
          activos líquidos entre el activo total. Los activos líquidos son la
          suma de caja y bancos. d) Eficiencia operativa, que es el resultado de
          dividir los gastos administrativos anuales entre los ingresos totales
          anuales. Crowdlink deberá informar a los Inversionistas de la
          publicación de esta información. Crowdlink podrá negar o limitar al
          Usuario su acceso a la Plataforma o limitar o restringir el uso de sus
          cuentas, en los casos siguientes: Que el Usuario incumpla con
          cualquiera de sus obligaciones al amparo de los presentes Términos y
          Condiciones o cualquier otro documento que medie y rija la relación
          entre las partes. Se incumpla cualquier disposición de prevención de
          lavado de dinero. Cualquier información proporcionada por el Usuario
          no sea verdadera o correcta. Por orden judicial. A juicio de
          Crowdlink, exista el riesgo de fraude o riesgo para las Operaciones de
          Crowdlink. E. Modelos de valuación internos Crowdlink ha elaborado
          metodologías y modelos de valuación financiera para determinar el
          valor real de las Empresas Promovidas donde busca invertir. Cada
          metodología o modelo utilizado podrá variar y será desglosado en el
          prospecto de inversión de cada proyecto de Empresa Promovida. F.
          Constancia Electrónica de Riesgos De conformidad con el artículo 43 de
          las Disposiciones, Crowdlink obtendrá de los Inversionistas una
          constancia electrónica en la que manifiesten conocer los riesgos a los
          que está sujeta su inversión, que no está respalda por el gobierno
          federal. La mencionada constancia electrónica se recabará a través de
          la Plataforma, por única ocasión, previo a la celebración del contrato
          que les permita realizar Operaciones, la cual deberá ser leída y
          comprendida previo a la celebración del contrato. G. Disponibilidad de
          la Plataforma Crowdlink mantendrá disponible la Plataforma las 24
          horas del día, los 365 días del año. Los horarios de atención son los
          siguientes: lunes a viernes de 9:00 a 18:00 horas En caso de existir
          alguna falla dentro de la Plataforma que no permita mantener la
          disponibilidad indicada, Crowdlink notificará vía correo electrónico
          al Usuario las opciones para continuar con la disponibilidad de los
          Servicios. H. Manifestación. El Usuario manifiesta que los recursos
          utilizados para la realización de operaciones con Crowdlink son
          propios y que actúa a nombre y por cuenta propia. En caso de actuar a
          nombre de un tercero proporcionará la información necesaria para su
          debida identificación. Asimismo, declara que la fuente de los recursos
          utilizados en las operaciones que se promuevan en la Plataforma son de
          procedencia lícita y serán utilizados para actividades lícitas. El
          Usuario, al registrarse para cualquier proyecto con el interés de
          participar, deberá firmar un contrato de inversión con Crowdlink,
          donde cada uno manifiesta lo siguiente: ● Actuar por cuenta propia; ●
          Los recursos destinados a invertir son de procedencia lícita y
          transparente; ● Conocen y han firmado la constancia de riesgo donde
          reconocen todos los riesgos relacionados a su inversión; ● Que no
          actúan en nombre de un tercero y reconocen todas las penas aplicables
          por esta acción; y ● Deberá solicitar un retiro previo de su inversión
          en caso de requerir y que esto puede resultar en pérdida parcial o
          total de su inversión. I. Retorno de inversión y riesgo Los proyectos
          y las oportunidades de inversión publicadas en Crowdlink son
          consideradas de alto riesgo e implican la posibilidad de pérdida de la
          inversión que se realice. Crowdlink no asegura el retorno o
          rendimiento sobre las inversiones ni garantiza el resultado o éxito de
          las mismas, por lo que los Usuarios tienen la obligación de revisar y
          validar la información proporcionada, previo a invertir en cualquiera
          de los proyectos publicados en la Plataforma. J. Propiedad
          Intelectual. La Plataforma es un desarrollo propio de Crowdlink e
          incluyen conexiones con otras aplicaciones para su completa
          funcionalidad de acuerdo con su modelo de negocio de financiamiento
          colectivo de capital. El diseño de la Plataforma, así como la marca
          “Crowdlink”, los colores, imágenes, dominios, signos distintivos,
          logotipos, gráficos, videos, audio, diseños, códigos, datos y
          cualquier otra información, salvo que se indique lo contrario, son
          propiedad única y exclusiva de Crowdlink. Los Usuarios no podrán hacer
          uso ni explotación de la Propiedad Intelectual por el simple hecho de
          utilizar la Plataforma. K. Alcance de Responsabilidades De conformidad
          con el artículo 11 de la Ley Fintech, Crowdlink hace del conocimiento
          de los Usuarios mediante los presentes Términos y Condiciones, lo
          siguiente: Crowdlink tomado medidas para evitar que se difunda
          información falsa o engañosa a través de los Servicios. Con el fin de
          promover la diversificación de inversiones, Crowdlink limita el monto
          que los Inversionistas podrán invertir en las Solicitudes de Inversión
          publicadas en la Plataforma de acuerdo con lo dispuesto en los
          artículos 49 y 50 de las Disposiciones. Al aceptar los presentes
          Términos y Condiciones el Usuario acepta que previo a la consumación
          de su primera operación, el Inversionista deberá firmar la Constancia
          Electrónica de Riesgos, que tiene por objeto que el Usuario reconozca
          los riesgos a los que está sujeta su inversión en Crowdlink, en los
          términos dispuestos por la Ley Fintech y normatividad aplicable. Ni el
          gobierno federal ni las entidades de la administración pública
          paraestatal podrán responsabilizarse o garantizar los recursos de los
          Clientes que sean utilizados en las Operaciones que celebren con
          Crowdlink o frente a otros, así como tampoco asumir alguna
          responsabilidad por las obligaciones contraídas por las Crowdlink o
          por algún Cliente frente a otro, en virtud de las Operaciones que
          celebren. L. Firma Electrónica. En los términos de lo establecido por
          el Título II del Código de Comercio, las claves de acceso que se
          establezcan para el uso de la Plataforma y la firma autógrafa digital
          sustituirán a la firma autógrafa de los Usuarios y/o Inversionistas
          teniendo ésta el carácter de firma electrónica (la “ Firma
          Electrónica”), por lo que las constancias documentales o técnicas
          derivadas del uso de esos medios en donde aparezca dicha Firma
          Electrónica producirán los mismos efectos que las leyes otorgan a los
          documentos suscritos por el Usuarios y/o Inversionistas y tendrán
          igual valor probatorio. M. Modificaciones. Los presentes Términos y
          Condiciones podrán ser modificados, actualizados o de cualquier otra
          forma cambiar el contenido periódicamente para cumplir con las
          disposiciones señaladas en la Ley Fintech y demás normatividad
          aplicable. En tales casos, Crowdlink le notificará a los Usuarios a
          través de la Plataforma y/o mediante correo electrónico a la dirección
          que el Usuario hubiere proporcionado, con treinta días de anticipación
          a su entrada en vigor, y debiendo poner a disposición del Usuario los
          nuevos Términos y Condiciones. N. Contacto. Crowdlink pone a
          disposición de los Usuarios y/o Inversionistas los siguientes datos de
          contacto: Correo electrónico: contacto@crowdlink.mx Teléfono: [______]
          O. Cookies El Usuario acepta y reconoce que Crowdlink podrá utilizar
          ‘Coockies’ para mejorar la experiencia del Usuario. Crowdlink declara
          que los ‘Coockies’ que utiliza se almacena por un periodo corto con el
          único fin que anteriormente se menciona. Toda la información de los
          Usuarios de la Plataforma está encriptada en servidores y respaldada
          en la nube. Crowdlink declara que el desarrollo de la Plataforma es
          propio y que utiliza herramientas de datos para mejorar la experiencia
          del Usuario y escoger productos que mejor se adapten a sus
          requerimientos. P. Legislación y Jurisdicción. Para la interpretación,
          cumplimiento y ejecución de los presentes Términos y Condiciones,
          serán aplicables las leyes federales de los Estados Unidos Mexicanos y
          serán competentes los tribunales con sede en la Ciudad de México,
          renunciado expresamente las partes a cualquier otro fuero o
          jurisdicción que pudiere corresponderles en razón de sus domicilios
          presentes o futuros o por cualquier otra causa.
        </p>
        {/* Aquí sigue el texto completo que proporcionaste */}
      </div>

      {/* Footer */}
      <footer className="footer-section text-dark">
        <div className="container">
          {/* Logotipo */}
          <div className="row justify-content-center mb-4">
            <div className="col-md-4 text-center">
              <img src={logo} alt="Logotipo" className="logo-small" />
            </div>
          </div>

          {/* Línea Separadora */}
          <div className="footer-bottom text-center mt-4">
            <hr className="footer-line" />
          </div>

          {/* Leyenda y Créditos */}
          <div className="row mt-4">
            <div className="col text-center">
              <p className="small">
                Infraestructura en Finanzas AI, Sociedad Anónima Promotora de
                Inversión de Capital Variable, ("Tuki"), para su constitución y
                operación con tal carácter, no requiere de autorización de la
                Secretaría de Hacienda y Crédito Público. Tuki ©. Todos los
                derechos reservados. Prohibida la reproducción total o parcial
                del contenido de este sitio. * Todo el análisis es generado con
                herramientas y desarrollo interno.
              </p>
            </div>
          </div>

          {/* Créditos Finales */}
        </div>
      </footer>
    </>
  );
};

export default TerminosCondiciones;
