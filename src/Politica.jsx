import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar";
import logo from "./assets/images/logo1.png";

import "./assets/css/Politica.css";

const Politica = () => {
  return (
    <>
      <Navbar />
      <div className="container politica-container">
        <h2>Política de Privacidad</h2>
        <p className="text-justify">
          PorCuanto S.A. de C.V., Institución de Financiamiento
          Colectivo(“PorCuanto” o “Crowdlink”) a través del presente aviso de
          privacidad tiene como objetivo hacer del conocimiento de los usuarios
          de la plataforma las políticas de seguridad de los datos que estos
          proporcionan en cumplimiento con la Ley Federal de Protección de Datos
          Personales en Posesión de los Particulares (la “Ley”), el Reglamento
          de la Ley Federal de Protección de Datos Personales en Posesión de los
          Particulares (“Reglamento”) y demás normatividad aplicable. PorCuanto
          es una sociedad mercantil, debidamente constituida bajo las leyes de
          la República Mexicana en vigor, tal y como se desprende de la
          Escritura Pública No. 52,457 (cincuenta y dos mil cuatrocientos
          cincuenta y siete) de fecha quince de abril de dos mil veinte,
          otorgada ante la fe del Licenciado José Antonio Manzanero Escutia,
          Notario Público No. 158 (Ciento treinta y ocho) de la Ciudad de
          México, cuyo primer testimonio quedó inscrito en el Registro Público
          de la Propiedad y del Comercio de la Ciudad de México. El presente
          Aviso de Privacidad tiene como fin informarle quién es el responsable
          de la protección de sus datos personales; el tipo de datos personales
          que recabamos de usted y las formas por las que los obtenemos; el uso,
          manejo y aprovechamiento que le damos a los mismos. El usuario (el
          “Usuario”) que está leyendo este documento al ingresar a la plataforma
          de PorCuanto declara que está entendiendo y aceptando todas las
          cláusulas contenidas en este Aviso de Privacidad (el “ Aviso de
          Privacidad”), y declara y otorga expresamente su aceptación y
          consentimiento, utilizando para tal efecto medios electrónicos, en
          términos de lo dispuesto por el artículo 1803 del Código Civil
          Federal. En caso de que el Usuario no esté de acuerdo con lo
          establecido en el presente Aviso de Privacidad, deberá abstenerse de
          proporcionar información personal a través de la plataforma. En
          términos de lo previsto en la Ley, la aportación que hagas de tus
          datos Personales a PorCuanto constituye la aceptación de los
          siguientes Términos y Condiciones. Términos y Condiciones Los
          siguientes términos y condiciones del presente Aviso de Privacidad de
          PorCuanto a través de su plataforma se establecen de conformidad con
          lo establecido en los artículos 15, 16 y demás aplicables por la Ley,
          los cuales estarán en todo momento disponibles en la página de
          internet de PorCuanto en la dirección URL:www.crowdlink.mx (la
          “Plataforma”). I. Identidad y domicilio. PorCuanto es una institución
          de financiamiento colectivo, constituida y organizada conforme a las
          leyes mexicanas. Conforme al artículo 16 de la Ley, la identidad y
          domicilio del responsable que recaba la información es PorCuanto, con
          domicilio para oír y recibir notificaciones en: Domicilio: Teléfono:
          Correo Electrónico: contacto@crowdlink.mx o a través de la Plataforma,
          siendo PorCuanto el responsable del tratamiento de sus datos
          personales, del uso, manejo y aprovechamiento de los mismos así como
          de su protección. II. Datos personales que se recaban. Como Usuario o
          visitante de la Plataforma, podemos solicitar o recabar de usted,
          según sea el caso, información personal relativa a: (i) datos de
          contacto; (ii) datos de identificación; (iii) datos de localización;
          (iv) datos laborales; y (v) datos patrimoniales y/o financieros.
          Enunciativamente se mencionan entre otros los siguientes: Nombre(s) y
          apellido(s), lugar y fecha de nacimiento, estado civil, domicilio
          completo de usted o de su empresa o negocio, ocupación, RFC, CURP,
          correo electrónico, fotografías, imágenes, logotipos u otros signos
          distintivos, dirección de correo electrónico, dirección de internet de
          página web propia o de su empresa o negocio, en su caso, números de
          teléfono fijo, de casa, oficina, y móvil, dirección IP y país de
          acceso; Datos patrimoniales, financieros y fiscales como, por ejemplo,
          domicilio fiscal, declaraciones fiscales, datos y estados de cuenta
          bancarios, datos de pago, direcciones de pago y envío, datos de
          tarjetas de débito o crédito, cuentas bancarias, créditos, bienes
          muebles e inmuebles de su propiedad, titularidad de derechos de
          propiedad intelectual, literaria o artística, activos y pasivos, entre
          otros; Información sobre su cónyuge, padres, hijos, herederos,
          legatarios y otros beneficiarios, y representantes legales de su
          empresa o negocio; En su caso, toda clase de información relacionada
          con las negociaciones mercantiles o empresas o negocios de las que es
          titular, así como de sociedades en las que tenga una participación;
          PorCuanto también podrá recabar la dirección de IP de los Usuarios
          para administrar la Plataforma. De la información personal referida,
          adicionalmente, podremos requerir de usted soportes documentales,
          públicos o privados, que comprueben la veracidad de los datos
          personales que nos proporciona. El Usuario se compromete a mantener
          los datos proporcionados a PorCuanto debidamente actualizados. El
          Usuario será responsable de los daños y perjuicios que PorCuanto o
          terceros pudieran sufrir como consecuencia de la falta de veracidad,
          inexactitud, falta de vigencia y autenticidad de los datos
          facilitados. PorCuanto no recaba datos personales sensibles (tal como
          datos de origen racial o étnico, estado de salud presente o futuro,
          información genética, creencias religiosas, filosóficas, morales,
          afiliación sindical, opiniones políticas, preferencia sexual (tal como
          están definidos en la fracción VI del artículo 3° de la Ley), en el
          entendido, sin embargo, que si por cualquier acción, hecho o
          circunstancia se llegara a obtener datos personales sensibles,
          PorCuanto se compromete a que dichos datos sean tratados bajo los
          estándares y medidas más estrictas de seguridad que garanticen su
          confidencialidad. III. Medios por los que se obtienen los datos
          personales. Directamente, aquellos datos personales que usted nos
          proporcione, de forma oral o escrita, incluso por medios telemáticos o
          tecnologías análogas; A través de la Plataforma o por correo
          electrónico; y Por otros medios siempre que no estén prohibidos o
          restringidos por la legislación vigente que resulte aplicable. IV.
          Finalidades del tratamiento de datos del Usuario. Conforme a la
          fracción segunda del artículo 16 de la Ley, el Usuario autoriza
          expresamente a PorCuanto a utilizar sus datos personales para análisis
          estadísticos internos o para cualquier otra función de investigación
          que PorCuanto pudiese llevar a cabo con el fin de seguir mejorando sus
          productos, servicios y la Plataforma, así como obtener información
          acerca de la relación que el Usuario tenga con actividades delictivas,
          listas bloqueadas nacionales e internacionales. Para efectos de lo
          anterior, con la utilización de sus datos personales se pretende
          poder, entre otros: a) El uso interno de datos para utilizar
          herramientas de análisis cuantitativo y cualitativo para entender
          mejor las necesidades de los clientes y poder ofrecer mejores
          productos a través de diseño y estrategia. b) Crear resguardo de
          información encriptada de los usuarios para fines de establecido en la
          Ley para Regular a Instituciones de Tecnología Financiera (“Ley
          Fintech”) como así lo solicita esa H. Comisión Nacional Bancaria y de
          Valores (la “Comisión”). c) Contactar al Usuario para notificarle
          acerca de alguna inversión vigente o que haya concluido. d) Contactar
          al Usuario en caso de que por alguna circunstancia su usuario haya
          sido inhabilitado en la plataforma. e) Notificarle en los medios que
          haya proporcionado acerca del desempeño de alguna inversión que el
          Usuario haya realizado. V. Limitar el uso o divulgación de los datos
          La Plataforma de PorCuanto permite la encriptación de los datos y
          resguardo en los servidores para evitar cualquier robo de información
          y proteger los datos personales de todos los Usuarios. Tales
          servidores se encuentran con accesos restringidos únicamente al
          personal de PorCuanto. En caso de alguna vulnerabilidad en los
          servidores, se le notificará los Usuarios de los cuales exista
          sospecha de algún robo de información. PorCuanto realizará un análisis
          y un escaneo ante la sospecha de alguna vulnerabilidad a fin de
          preservar la confidencialidad de los datos de los Usuarios. VI. Medios
          para ejercer los derechos de acceso, rectificación, cancelación u
          oposición En caso de que algún Usuario solicité cambiar su contraseña,
          rectificarla o cancelar su cuenta, podrá hacerlo a través de la
          siguiente dirección de correo:contacto@crowdlink.mx Y en los teléfonos
          de atención a cliente: 55 - **** - **** Se le pedirá al Usuario
          información para validar su identidad. VII. Transferencias de datos
          Conforme a la fracción quinta del artículo 16 de la Ley, le informamos
          que sus datos personales podrán ser compartidos, a nivel nacional e
          internacional, en los siguientes casos: Cuando la transferencia sea
          efectuada a sociedades controladoras, subsidiarias o afiliadas bajo el
          control común de una persona, o a una sociedad matriz o a cualquier
          sociedad del mismo grupo empresarial que opere bajo los mismos
          procesos y políticas internas; Cuando la transferencia sea necesaria
          por virtud de un contrato celebrado entre usted y otros Usuarios de la
          Plataforma y PorCuanto; Cuando la transferencia sea necesaria o
          legalmente requerida por alguna autoridad gubernamental, judicial o
          administrativa, en cumplimiento a cualquier ley, reglamento,
          disposición legal aplicable; Cuando la transferencia sea necesaria
          para el reconocimiento, ejercicio o defensa de un derecho cualquier
          proceso judicial, administrativo y de cualquier otra índole; Cuando la
          transferencia sea precisa para el mantenimiento o cumplimiento de las
          relaciones jurídicas entre los Usuarios de la Plataforma; y
          Transferencias a sociedades de información crediticia. No será
          necesario tener el consentimiento del Usuario para llevar a cabo
          aquellas transferencias que se encuentren dentro de los supuestos
          establecidos en el artículo 37 de la Ley. VIII. Modificaciones o
          actualizaciones al Aviso de Privacidad El presente Aviso de Privacidad
          podrá sufrir modificaciones, cambios o actualizaciones, ya sea como
          consecuencia de reformas legislativas, políticas internas, nuevos
          requerimientos para la prestación u ofrecimiento de nuestros servicios
          y/o productos, prácticas del mercado u otros. En caso de que existan
          cambios en el presente Aviso de Privacidad, los Usuarios serán
          notificados a través de: a) La Plataforma b) Correo Electrónico Dichas
          modificaciones se tendrán por aceptadas en caso de que el Usuario no
          exprese su inconformidad con las mismas dentro de un plazo de 3 (tres)
          días contados a partir de que las mismas se hayan efectuado. Las
          modificaciones o actualizaciones serán incorporadas al presente Aviso
          de Privacidad y estarán disponibles en la Plataforma. IX. Uso de
          “Cookies” Nuestra Plataforma utiliza cookies y otras tecnologías a
          través de las cuales es posible monitorear su comportamiento como
          Usuario de internet, brindarle un mejor servicio y experiencia de
          Usuario al navegar en la Plataforma, así como ofrecerle nuevos
          productos y servicios basados en sus preferencias. Mediante los
          “cookies” se obtiene automáticamente la siguiente información: La
          fecha y hora de acceso a nuestro sitio web; El número de visitantes
          diarios de cada sección; La fecha y la hora de la última vez que el
          usuario visitó nuestro sitio web; y El diseño de contenido que el
          Usuario escogió en su primera visita a nuestro sitio web. La URL que
          utilizó el Usuario para acceder a nuestro sitio y que nos ayuda a
          determinar el origen del mismo, ya sea a través de una dirección
          provista por algún marketing, o de forma orgánica. Dicho origen nos
          ayuda a determinar si el usuario aplica para alguna sección limitada
          en específico o también para cuestiones estadísticas. X. De la
          protección de derechos y denuncias por el tratamiento indebido. Si el
          Usuario considera que el derecho a la protección de sus datos
          personales se ha visto menoscabado, lesionado o violado por algún
          miembro, empleado o funcionario de PorCuanto o que se incumple con
          alguno de los requisitos legales en el tratamiento de sus datos
          personales, podrá interponer la queja o denuncia correspondiente ante
          el Instituto Federal de Acceso a la Información y Protección de Datos,
          para mayor información visite www.ifai.org.mx. De conformidad con lo
          previsto en la Ley Federal de Protección de Datos Personales en
          Posesión de los Particulares (a) reconozco que he leído y entiendo los
          alcances del Aviso de Privacidad de PorCuanto y (b) autorizo de forma
          expresa a PorCuanto a recabar, tratar y transferir mis datos
          personales para los fines establecidos en y de conformidad con lo
          previsto.
        </p>
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

export default Politica;
