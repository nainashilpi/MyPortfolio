import { useEffect, useState } from "react";
import { BsDownload } from "react-icons/bs";
import { Document, Page, pdfjs } from "react-pdf";
import workerSrc from "pdfjs-dist/build/pdf.worker.min?url";

import pdf from "../Resume.pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

const Resume = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scale = width < 700 ? (width > 475 ? 0.75 : 0.55) : 1;

  return (
    <div className="ResumePage">
      <div className="ResumeCard">
        <Document file={pdf}>
          <Page pageNumber={1} scale={scale} />
        </Document>
      </div>

      <a href={pdf} download className="ResumeBtnWrapper">
        <button className="downloadCV">
          <BsDownload /> Download CV
        </button>
      </a>
    </div>
  );
};

export default Resume;