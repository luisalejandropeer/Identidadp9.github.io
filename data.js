/* ============================================================
   DATOS DEL SITIO — aquí se edita todo el contenido que cambia.
   Para agregar una propuesta, copia una línea y cambia el texto.
   turnos: "M" = Matutino (Brenda), "V" = Vespertino (Vela), "C" = Consejo Escuela
   ============================================================ */

const CATEGORIAS = {
  seguridad: "Seguridad",
  bienestar: "Bienestar",
  deporte: "Deportes",
  cultura: "Cultura y eventos",
  ciencia: "Ciencia y tecnología",
  igualdad: "Igualdad e inclusión",
  participacion: "Participación",
  apoyo: "Apoyo estudiantil",
};

const TURNOS = {
  M: "Turno matutino",
  V: "Turno vespertino",
  C: "Consejo Escuela",
};

const PROPUESTAS = [
  /* ---------- SEGURIDAD ---------- */
  { t: "Botón de pánico", c: "seguridad", turnos: ["M"],
    d: "Dispositivo de alerta inmediata que activa auxilios de emergencia y fuerzas de seguridad ante acoso o situaciones de riesgo en la parada del camión o afuera de la prepa." },
  { t: "No acoso en Prepa 9", c: "seguridad", turnos: ["M"],
    d: "Mecanismo de acompañamiento institucional con investigaciones confidenciales, sanción a agresores y protección a las víctimas." },
  { t: "Senderos seguros", c: "seguridad", turnos: ["M"],
    d: "Rutas urbanas intervenidas con iluminación, vigilancia y monitoreo comunitario para un tránsito libre de violencia." },
  { t: "Mejora de alumbrado", c: "seguridad", turnos: ["V"],
    d: "Rehabilitación de luminarias en accesos y puntos clave del plantel, dentro y fuera, para traslados seguros." },
  { t: "Policía escolar", c: "seguridad", turnos: ["V"],
    d: "Reunión de rendición de cuentas con la Policía Escolar para evaluar resultados y ajustar la estrategia de seguridad." },
  { t: "Primeros auxilios", c: "seguridad", turnos: ["V"],
    d: "Capacitación práctica con la TAE de Protección Civil para tener un plantel preparado ante emergencias." },
  { t: "Zona pulso de vida", c: "seguridad", turnos: ["C"],
    d: "Un espacio seguro en la parada del transporte público junto a la prepa para esperar con tranquilidad." },

  /* ---------- BIENESTAR ---------- */
  { t: "Atención psicológica gratuita", c: "bienestar", turnos: ["M", "V"],
    d: "Servicio accesible y confidencial con contención emocional, auxilio en crisis y herramientas de salud mental sin barreras económicas." },
  { t: "Enfermería extendida", c: "bienestar", turnos: ["C"],
    d: "Más atención médica en el plantel con prestadores de servicio social de la UdeG." },
  { t: "Campañas de reciclaje", c: "bienestar", turnos: ["M"],
    d: "Actividades de reciclaje en la prepa que fomentan el buen ambiente y premian al mayor esfuerzo." },
  { t: "Adopta un árbol", c: "bienestar", turnos: ["V"],
    d: "Brigada de adopción de árboles, gestionada con el ayuntamiento, para cuidar nuestras áreas verdes." },
  { t: "Programas ecológicos", c: "bienestar", turnos: ["C"],
    d: "Continuidad y ampliación del manejo de residuos, cuidado del agua y eficiencia energética en el plantel." },

  /* ---------- DEPORTES ---------- */
  { t: "Supernova Universitario", c: "deporte", turnos: ["M"],
    d: "Primera edición: una pelea por semestre (de primero a sexto) por libras y estatura, con ring de box y asesoramiento profesional." },
  { t: "Becas deportivas", c: "deporte", turnos: ["M"],
    d: "Apoyo académico y profesional para atletas: financiamiento, entrenamiento personalizado y guía técnica." },
  { t: "Carrera de botargas", c: "deporte", turnos: ["V"],
    d: "Primera carrera de botargas en la Unidad del Briseño con rally de obstáculos y reconocimiento para quien gane." },
  { t: "Torneos relámpago", c: "deporte", turnos: ["V"],
    d: "Torneos en todos los semestres: futbol, voleibol y basquetbol." },
  { t: "Ejercítate con Identidad", c: "deporte", turnos: ["C"],
    d: "Talleres grupales de activación física: yoga, box y artes marciales mixtas (MMA)." },
  { t: "Impulso deportivo", c: "deporte", turnos: ["C"],
    d: "Respaldo integral a los equipos representativos con gestión de uniformes y transporte para sus competencias." },

  /* ---------- CULTURA Y EVENTOS ---------- */
  { t: "Viernes temático", c: "cultura", turnos: ["M"],
    d: "El último viernes de cada mes, vestimenta a elección de la comunidad para integrarnos entre compañeros." },
  { t: "Excursión a lugares recreativos", c: "cultura", turnos: ["M"],
    d: "Visitas al Zoológico y a la Feria Internacional del Libro para convivir fuera del aula." },
  { t: "Mural sigue", c: "cultura", turnos: ["V"],
    d: "Continuidad al proyecto de murales del plantel para visibilizar causas sociales a través del arte." },
  { t: "Concurso de fotografía", c: "cultura", turnos: ["V"],
    d: "Convocatoria abierta a quien le guste la fotografía; el trabajo se expone en la página de Identidad y la comunidad elige al ganador." },
  { t: "Fiesta de Halloween", c: "cultura", turnos: ["V"],
    d: "La mejor fiesta de Halloween de toda Guadalajara, el 31 de octubre." },
  { t: "Kermesse de temporada", c: "cultura", turnos: ["V"],
    d: "Kermeses temáticas en fechas clave —15 de septiembre, Día de Muertos y Día del Estudiante— para fomentar tradiciones e integración." },
  { t: "Festival cultural", c: "cultura", turnos: ["C"],
    d: "Eventos temáticos de disfraces y expresiones culturales, junto con las TAEs de lenguas extranjeras, en fechas célebres." },

  /* ---------- CIENCIA Y TECNOLOGÍA ---------- */
  { t: "Comunidad de videojuegos", c: "ciencia", turnos: ["M"],
    d: "Servidores y actividades con premios para jugar Roblox, Minecraft, Fortnite, FIFA y más dentro de la Prepa 9." },
  { t: "Taller de programación", c: "ciencia", turnos: ["M"],
    d: "Espacio para desarrollar videojuegos, páginas web y proyectos de tecnologías de la información." },
  { t: "Rally al Museo de Paleontología", c: "ciencia", turnos: ["V"],
    d: "Visita para entender la evolución con evidencia física y descubrir qué criaturas habitaron nuestro territorio." },

  /* ---------- IGUALDAD E INCLUSIÓN ---------- */
  { t: "Dispensador de preservativos", c: "igualdad", turnos: ["M"],
    d: "Acceso rápido a protección, salud sexual responsable y prevención de infecciones y embarazos no planeados." },
  { t: "Pinta de carteles", c: "igualdad", turnos: ["M"],
    d: "Punto de entrega de pañuelos para la marcha del 8M: cuidado colectivo y apoyo emocional a través de la pintura." },
  { t: "Orgullo Pride", c: "igualdad", turnos: ["V"],
    d: "Conferencia de inclusión y transporte redondo con Colectivo Diverso UdeG para una marcha LGBT+ segura." },
  { t: "Picnic morado", c: "igualdad", turnos: ["V"],
    d: "Convivencia en marzo por el Día de la Mujer para compartir experiencias y crear lazos de apoyo entre compañeras." },
  { t: "Empodérate con Cristina", c: "igualdad", turnos: ["V"],
    d: "Conferencia en el auditorio con la regidora Cristina Carrasco sobre liderazgo y mujeres en la política." },

  /* ---------- PARTICIPACIÓN ---------- */
  { t: "Voz estudiantil", c: "participacion", turnos: ["C"],
    d: "Buzón directo para recibir, atender y dar seguimiento a comentarios sobre el funcionamiento de la escuela." },
  { t: "Concurso de debate", c: "participacion", turnos: ["M"],
    d: "Confrontación de ideas para defender posturas, cuestionar temas controvertidos y desarrollar pensamiento crítico." },
  { t: "Concurso de oratoria", c: "participacion", turnos: ["V"],
    d: "Un espacio de competencia para resaltar tus habilidades del habla." },
  { t: "Convivencia justa", c: "participacion", turnos: ["C"],
    d: "Reforma al Art. 31 para diferenciar los juegos de mesa recreativos y de convivencia de las apuestas prohibidas." },

  /* ---------- APOYO ESTUDIANTIL ---------- */
  { t: "Gestión de movilidad (Ruta T10 Rojo)", c: "apoyo", turnos: ["C"],
    d: "Gestión ante las autoridades de transporte para el regreso de la ruta T10 Roja al trayecto habitual de la prepa." },
  { t: "Repetidores Wi-Fi", c: "apoyo", turnos: ["C"],
    d: "Repetidores en puntos clave de la escuela para un acceso a internet estable y de calidad." },
  { t: "Identifica tu TAE", c: "apoyo", turnos: ["C"],
    d: "Talleres informativos sobre el contenido de las distintas TAEs para una elección orientada." },
  { t: "Orientación de becas y condonaciones", c: "apoyo", turnos: ["C"],
    d: "Apartado exclusivo en la página web con guías sobre facilidades y apoyos en la cuota semestral." },
  { t: "Banco de útiles", c: "apoyo", turnos: ["C"],
    d: "Material didáctico y escolar para estudiantes que lo necesiten para sus clases." },
];

/* Las 3 propuestas que se destacan en el inicio (deben existir arriba, mismo título) */
const DESTACADAS = [
  { t: "Atención psicológica gratuita", icono: "heart",  lema: "Tu salud mental importa" },
  { t: "Botón de pánico",               icono: "shield", lema: "Seguridad al salir de la prepa" },
  { t: "Voz estudiantil",               icono: "mic",    lema: "Tus ideas llegan directo" },
];

/* Candidatos del Consejo Escuela (planilla roja).
   Si quieres agregar una biografía, escribe en "bio". */
const CANDIDATOS = [
  { nombre: "Juan Pablo",     cargo: "Consejero titular",  foto: "img/juan-pablo.webp",
    bio: "Candidato titular al Consejo Escuela por la planilla roja de Identidad." },
  { nombre: "Ximena Corral",  cargo: "Consejera titular",  foto: "img/ximena-corral.webp",
    bio: "Candidata titular al Consejo Escuela por la planilla roja de Identidad." },
  { nombre: "Daniel Gonzáles", cargo: "Consejero titular", foto: "img/daniel-gonzales.webp",
    bio: "Candidato titular al Consejo Escuela por la planilla roja de Identidad." },
  { nombre: "Ilian Robledo",  cargo: "Consejero suplente", foto: "img/ilian-robledo.webp",
    bio: "Candidato suplente al Consejo Escuela por la planilla roja de Identidad." },
  { nombre: "Renata Delgado", cargo: "Consejera suplente", foto: "img/renata-delgado.webp",
    bio: "Candidata suplente al Consejo Escuela por la planilla roja de Identidad." },
  { nombre: "Gera Zamora",    cargo: "Consejero suplente", foto: "img/gera-zamora.webp",
    bio: "Candidato suplente al Consejo Escuela por la planilla roja de Identidad." },
];
