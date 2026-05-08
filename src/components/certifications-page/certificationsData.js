import certificate1 from '../../assets/images/certificates/certificate-1.jpg'
import certificate2 from '../../assets/images/certificates/certificate-2.jpg'
import certificate3 from '../../assets/images/certificates/certificate-3.jpg'

import cePdf from '../../assets/images/certificates/551118 - NIHAL HEALTHCARE - CERTIFICATE - englisch - 2025-04-07 - MDR2017Q.pdf'
import bisPdf from '../../assets/images/certificates/BIS LICENCE.pdf'
import iso13485Pdf from '../../assets/images/certificates/En ISO 13485 latestr.PDF'
import icmedPdf from '../../assets/images/certificates/icmed 13485  renewal.pdf'
import iso9001Pdf from '../../assets/images/certificates/ISO 9001-2015 RENUAL 2023 (1).PDF'
import drugPdf from '../../assets/images/certificates/NEW DRUG LICENCE.PDF'
import gstPdf from '../../assets/images/certificates/GST - Copy.PDF'

export const certificationsData = [

  {
    title: "CE Certification",
    desc: "European healthcare manufacturing compliance certification.",
    image: certificate1,
    file: cePdf,
  },

  {
    title: "ISO 9001 Certification",
    desc: "International quality management systems certification.",
    image: certificate2,
    file: iso9001Pdf,
  },

  {
    title: "GMP Certification",
    desc: "Good Manufacturing Practice certified operations.",
    image: certificate3,
    file: icmedPdf,
  },

  {
    title: "BIS Licence",
    desc: "Indian standards certification for syringe manufacturing.",
    image: certificate1,
    file: bisPdf,
  },

  {
    title: "EN ISO 13485",
    desc: "Medical devices quality management certification.",
    image: certificate2,
    file: iso13485Pdf,
  },

  {
    title: "Drug Licence",
    desc: "Certified healthcare manufacturing drug licence approval.",
    image: certificate3,
    file: drugPdf,
  },

  {
    title: "GST Registration",
    desc: "Official GST registration certification.",
    image: certificate1,
    file: gstPdf,
  },

]