import ConstructionIcon from "@mui/icons-material/Construction";
import TaskIcon from "@mui/icons-material/Task";
import Exercicio1Imagem1CSWA from "../../Images/CursoCSWA/Exercicio-1-Imagem-1-CSWA.png";
import Exercicio1Imagem2CSWA from "../../Images/CursoCSWA/Exercicio-1-Imagem-2-CSWA.png";
import Exercicio1Imagem3CSWA from "../../Images/CursoCSWA/Exercicio-1-Imagem-3-CSWA.png";
import Exercicio2Imagem1CSWA from "../../Images/CursoCSWA/Exercicio-2-Imagem-1-CSWA.png";
import Exercicio2Imagem2CSWA from "../../Images/CursoCSWA/Exercicio-2-Imagem-2-CSWA.png";
import Exercicio2Imagem3CSWA from "../../Images/CursoCSWA/Exercicio-2-Imagem-3-CSWA.png";
import Exercicio3Imagem1CSWA from "../../Images/CursoCSWA/Exercicio-3-Imagem-1-CSWA.png";
import Exercicio3Imagem2CSWA from "../../Images/CursoCSWA/Exercicio-3-Imagem-2-CSWA.png";
import Exercicio3Imagem3CSWA from "../../Images/CursoCSWA/Exercicio-3-Imagem-3-CSWA.png";
import Exercicio4Imagem1CSWA from "../../Images/CursoCSWA/Exercicio-4-Imagem-1-CSWA.png";
import Exercicio4Imagem2CSWA from "../../Images/CursoCSWA/Exercicio-4-Imagem-2-CSWA.png";
import Exercicio4Imagem3CSWA from "../../Images/CursoCSWA/Exercicio-4-Imagem-3-CSWA.png";
import Exercicio5Imagem1CSWA from "../../Images/CursoCSWA/Exercicio-5-Imagem-1-CSWA.png";
import Exercicio5Imagem2CSWA from "../../Images/CursoCSWA/Exercicio-5-Imagem-2-CSWA.png";
import Exercicio5Imagem3CSWA from "../../Images/CursoCSWA/Exercicio-5-Imagem-3-CSWA.png";

import CertificadoCSWA from "../../Certificados/CursoCSWA/CertificadoCSWA.pdf";

export const ListaDeCategorias = [
  {
    categoria: "Solidworks",
    icon: (
      <ConstructionIcon
        sx={{ color: (theme) => theme.palette.dark.main, fontSize: "3.2rem" }}
      />
    ),
    cursos: [
      {
        name: "Curso Projetistas Academy",
        instituicao: "Youtube",
        certificado: false,
        certificacao: null,
        horas: "10",
        opiniao: [
          {
            paragrafo: "AAAAAAAAAAAAAAAAAAAAASSSSSSSSDASD",
          },
          {
            paragrafo:
              "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
          },
        ],
        imagensdownload: false,
      },

      {
        name: "Become a Certified Associate Today (CSWA)",
        instituicao: "Udemy",
        certificado: true,
        certificacao: {
          title: "Certificado-HeitorMontenegro-CursoCSWA-Udemy",
          link: CertificadoCSWA,
        },
        horas: "4.5",
        opiniao: [
          {
            paragrafo:
              "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
          },
          {
            paragrafo:
              "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
          },
        ],
        imagens: [
          { img: Exercicio1Imagem1CSWA, title: "Exercicio-1-Imagem-1-CSWA" },
          { img: Exercicio1Imagem2CSWA, title: "Exercicio-1-Imagem-2-CSWA" },
          { img: Exercicio1Imagem3CSWA, title: "Exercicio-1-Imagem-3-CSWA" },

          { img: Exercicio2Imagem1CSWA, title: "Exercicio-2-Imagem-1-CSWA" },
          { img: Exercicio2Imagem2CSWA, title: "Exercicio-2-Imagem-2-CSWA" },
          { img: Exercicio2Imagem3CSWA, title: "Exercicio-2-Imagem-3-CSWA" },

          { img: Exercicio3Imagem1CSWA, title: "Exercicio-3-Imagem-1-CSWA" },
          { img: Exercicio3Imagem2CSWA, title: "Exercicio-3-Imagem-2-CSWA" },
          { img: Exercicio3Imagem3CSWA, title: "Exercicio-3-Imagem-3-CSWA" },

          { img: Exercicio4Imagem1CSWA, title: "Exercicio-4-Imagem-1-CSWA" },
          { img: Exercicio4Imagem2CSWA, title: "Exercicio-4-Imagem-2-CSWA" },
          { img: Exercicio4Imagem3CSWA, title: "Exercicio-4-Imagem-3-CSWA" },

          { img: Exercicio5Imagem1CSWA, title: "Exercicio-5-Imagem-1-CSWA" },
          { img: Exercicio5Imagem2CSWA, title: "Exercicio-5-Imagem-2-CSWA" },
          { img: Exercicio5Imagem3CSWA, title: "Exercicio-5-Imagem-3-CSWA" },
        ],
      },
    ],
  },

  {
    categoria: "Excel",
    icon: (
      <TaskIcon
        sx={{ color: (theme) => theme.palette.dark.main, fontSize: "3.2rem" }}
      />
    ),
    cursos: [
      {
        name: "Excel do básico ao avançado, macro e VBA + Power BI",
        instituicao: "Udemy",
        certificado: false,
        certificacao: null,
        horas: "155",
      },
    ],
  },
];
