import { readFileSync, writeFileSync } from "fs";

const pushFile = (file) => {
  const { titulo, descripcion, tecnologias, imagenLink } = file;
  const fileReaded = JSON.parse(readFileSync("./projects.json"));

  const nuevoProyecto = {
    titulo: titulo,
    descripcion: descripcion,
    tecnologias: tecnologias,
    imagenLink: imagenLink,
  };

  fileReaded.push(nuevoProyecto);

  const data = JSON.stringify(fileReaded, null, 2);

  writeFileSync("./projects.json", data);

  console.log("Proyecto agregado correctamente.");
};

const file = {
  titulo: "GreatTravel",
  descripcion: `Fui responsable del desarrollo de funciones clave y del diseño de la interfaz de usuario, además de trabajar en la integración de servicios de localización para una experiencia de usuario optimizada. Mi colaboración con un equipo multidisciplinario me permitió mejorar significativamente mis habilidades de comunicación y trabajar en la resolución de desafíos técnicos en tiempo real, lo que enriqueció mi bagaje profesional y mi capacidad para enfrentar situaciones complejas. Esta experiencia me enseñó la importancia de la colaboración y la comunicación efectiva en el mundo del desarrollo de software.`,
  tecnologias: [
    "React",
    "NodeJS",
    "Express",
    "PostgreSQL",
    "Bootstrap",
    "Sass",
  ],
  imagenLink:
    "https://res.cloudinary.com/dkdounmsa/image/upload/v1698351129/ey2whjxmghbiipkwfdni.png",
};

pushFile(file);
