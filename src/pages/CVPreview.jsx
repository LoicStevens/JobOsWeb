import { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import logo from '../../public/logo.png';

const CVPreview = () => {
  const [leftSectionBgColor, setLeftSectionBgColor] = useState('#1f2937');
  const [fontFamily, setFontFamily] = useState('sans-serif');
  const [titleColor, setTitleColor] = useState('#f97316');
  const [textColor, setTextColor] = useState('#4b5563');
  
  const cvRef = useRef(); // Référence à l'élément CV

  const downloadCV = () => {
    html2canvas(cvRef.current).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgWidth = 190;
      const pageHeight = pdf.internal.pageSize.height;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
  
      let position = 0;
  
      // Ajoutez l'image du CV
      pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
  
      // Ajoutez des pages supplémentaires si nécessaire
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
  
      // Ajoutez le logo en bas à droite
      const logoWidth = 30; // Ajustez la largeur du logo
      const logoHeight = 10; // Ajustez la hauteur du logo
      pdf.addImage(logo, 'PNG', pdf.internal.pageSize.width - logoWidth - 10, pdf.internal.pageSize.height - logoHeight - 10, logoWidth, logoHeight);
      
      pdf.save('CV_Florian_Sapin.pdf');
    });
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg my-10 p-6" style={{ fontFamily }}>
      {/* Sélecteurs de personnalisation */}
      <div className="flex justify-between mb-6">
        <div>
          <label className="block text-sm font-bold mb-1">Couleur de la section gauche:</label>
          <input
            type="color"
            value={leftSectionBgColor}
            onChange={(e) => setLeftSectionBgColor(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-bold mb-1">Police globale:</label>
          <select
            value={fontFamily}
            onChange={(e) => setFontFamily(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1"
          >
            <option value="sans-serif">Sans-serif</option>
            <option value="serif">Serif</option>
            <option value="monospace">Monospace</option>
            <option value="Arial">Arial</option>
            <option value="Georgia">Georgia</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-bold mb-1">Couleur des titres:</label>
          <input
            type="color"
            value={titleColor}
            onChange={(e) => setTitleColor(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-bold mb-1">Couleur du texte:</label>
          <input
            type="color"
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
          />
        </div>
      </div>

      {/* CV à capturer */}
      <div className="grid grid-cols-4 gap-6" ref={cvRef}>
        <div
          className="col-span-1 text-white p-6 rounded-lg"
          style={{ backgroundColor: leftSectionBgColor }}
        >
          <div className="mb-6">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="rounded-full w-32 h-32 mx-auto"
            />
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-bold uppercase border-b border-gray-700 pb-1 mb-3" style={{ color: titleColor }}>
              Formation
            </h3>
            <p className="text-sm">2020</p>
            <p className="text-sm">Master MEEF</p>
            <p className="text-sm">INSPÉ de l&apos;académie de Paris | Paris</p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-bold uppercase border-b border-gray-700 pb-1 mb-3" style={{ color: titleColor }}>
              Compétences
            </h3>
            <ul className="text-sm space-y-1">
              <li>• Conception des leçons</li>
              <li>• Écoute active</li>
              <li>• Encadrement des travaux pratiques</li>
              <li>• Technologies de l&apos;éducation</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-bold uppercase border-b border-gray-700 pb-1 mb-3" style={{ color: titleColor }}>
              Langues
            </h3>
            <p className="text-sm">Anglais - B2</p>
            <p className="text-sm">Espagnol - B2</p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-bold uppercase border-b border-gray-700 pb-1 mb-3" style={{ color: titleColor }}>
              Centres d&apos;intérêt
            </h3>
            <ul className="text-sm space-y-1">
              <li>• Littérature</li>
              <li>• Cinéma</li>
              <li>• Sports d&apos;équipe</li>
            </ul>
          </div>
        </div>

        <div className="col-span-3 bg-gray-50 p-6 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold" style={{ color: titleColor }}>Florian Sapin</h1>
              <p className="text-sm" style={{ color: textColor }}>Paris, 75092</p>
              <p className="text-sm" style={{ color: textColor }}>06 23 94 16</p>
              <p className="text-sm" style={{ color: textColor }}>florian.sapin@gmail.com</p>
            </div>
            <div>
              <img
                src="https://via.placeholder.com/80"
                alt="Profile"
                className="rounded-full"
              />
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-bold" style={{ color: titleColor }}>Profil Professionnel</h3>
            <p className="text-sm" style={{ color: textColor }}>
              Dévouement envers la promotion de l&apos;apprentissage des élèves à travers des approches différenciées de la pédagogie et de la gestion de classe.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-bold" style={{ color: titleColor }}>Parcours Professionnel</h3>
            <div className="space-y-3">
              <div>
                <p className="font-semibold" style={{ color: textColor }}>Septembre 2020 - Actuel</p>
                <p className="text-sm" style={{ color: textColor }}>École primaire Marie Curie | Chambéry</p>
                <p className="text-sm" style={{ color: textColor }}>Professeur de mathématiques</p>
                <ul className="text-sm list-disc ml-5" style={{ color: textColor }}>
                  <li>Évaluer les besoins de chaque élève.</li>
                  <li>Adapter les contenus pour maximiser l&apos;apprentissage.</li>
                  <li>Collaborer avec les enseignants sur les projets.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-bold" style={{ color: titleColor }}>Informatique</h3>
            <ul className="text-sm" style={{ color: textColor }}>
              <li>• Microsoft Office 5/5</li>
              <li>• Zoom 5/5</li>
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-bold" style={{ color: titleColor }}>Certificats</h3>
            <ul className="text-sm" style={{ color: textColor }}>
              <li>• Certificat de secourisme obtenu en 2020</li>
            </ul>
          </div>
        </div>
      </div>

      <button
        onClick={downloadCV}
        className="mt-6 bg-blue-500 text-white py-2 px-4 rounded"
      >
        Télécharger le CV
      </button>
    </div>
  );
};

export default CVPreview;
