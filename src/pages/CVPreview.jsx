import { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import logo from '../../public/logo.png';

const CVPreview = () => {
  const [leftSectionBgColor, setLeftSectionBgColor] = useState('#1f2937');
  const [fontFamily, setFontFamily] = useState('sans-serif');
  const [titleColor, setTitleColor] = useState('#f97316');
  const [textColor, setTextColor] = useState('#4b5563');
  const [bulletStyle, setBulletStyle] = useState('•'); // Style de puce par défaut
  const cvRef = useRef();

  const downloadCV = () => {
    html2canvas(cvRef.current, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png', 1.0);
      const pdf = new jsPDF({
        unit: 'mm',
        format: 'a4',
        orientation: 'portrait',
      });
  
      const imgWidth = 190;
      const pageHeight = pdf.internal.pageSize.height;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
  
      // Définir les marges
      const topMargin = 20;
      const bottomMargin = 10;
      const pageContentHeight = pageHeight - topMargin - bottomMargin;
  
      // Ajuster la hauteur de l'image
      let scaledImgHeight = imgHeight;
      if (imgHeight > pageContentHeight) {
        const scaleFactor = pageContentHeight / imgHeight;
        scaledImgHeight = imgHeight * scaleFactor;
      }
  
      // Positionner l'image
      pdf.addImage(imgData, 'PNG', 10, topMargin, imgWidth, scaledImgHeight);
  
      // Calculer la position du logo
      const logoWidth = 30;
      const logoHeight = 10;
      const logoY = topMargin + scaledImgHeight + 5; // Ajuste l'espacement si nécessaire
  
      // Vérifier si le logo ne déborde pas en bas de page
      if (logoY + logoHeight > pageHeight - bottomMargin) {
        pdf.addPage(); // Ajouter une nouvelle page si nécessaire
      }
  
      // Ajouter le logo
      pdf.addImage(logo, 'PNG', pdf.internal.pageSize.width - logoWidth - 10, logoY, logoWidth, logoHeight);
      
      // Sauvegarder le PDF
      pdf.save('CV_Florian_Sapin.pdf');
    });
  };
  
  
  
  
  
  
  

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg my-10 p-6" style={{ fontFamily }}>
     <div className="flex flex-wrap justify-between mb-6">
  <div className="flex items-center">
    <label className="block text-sm font-bold mr-2">Couleur section gauche:</label>
    <input
      type="color"
      value={leftSectionBgColor}
      onChange={(e) => setLeftSectionBgColor(e.target.value)}
    />
  </div>

  <div className="flex items-center">
    <label className="block text-sm font-bold mr-2">Police globale:</label>
    <select
      value={fontFamily}
      onChange={(e) => setFontFamily(e.target.value)}
      className="border border-gray-300 rounded px-2 py-1"
    >
      {['sans-serif', 'serif', 'monospace', 'Arial', 'Georgia', 'Courier New', 'Tahoma', 'Verdana', 'Comic Sans MS', 'Impact'].map(font => (
        <option key={font} value={font}>{font}</option>
      ))}
    </select>
  </div>

  <div className="flex items-center">
    <label className="block text-sm font-bold mr-2">Couleur des titres:</label>
    <input
      type="color"
      value={titleColor}
      onChange={(e) => setTitleColor(e.target.value)}
    />
  </div>

  <div className="flex items-center">
    <label className="block text-sm font-bold mr-2">Couleur du texte:</label>
    <input
      type="color"
      value={textColor}
      onChange={(e) => setTextColor(e.target.value)}
    />
  </div>

  <div className="flex items-center">
    <label className="block text-sm font-bold mr-2">Style de puces:</label>
    <select
      value={bulletStyle}
      onChange={(e) => setBulletStyle(e.target.value)}
      className="border border-gray-300 rounded px-2 py-1"
    >
      <option value="•">Point</option>
      <option value="→">Flèche</option>
      <option value="■">Carré</option>
      <option value="★">Étoile</option>
    </select>
  </div>

  <button
    onClick={downloadCV}
    className="mt-6 bg-bgcustom-green text-white py-2 px-4 rounded"
  >
    Download CV
  </button>
</div>


      <div className="grid grid-cols-4 gap-6" ref={cvRef}>
        <div
          className="col-span-1 text-white p-6 rounded-lg"
          style={{ backgroundColor: leftSectionBgColor }}
        >
          <div className="mb-6">
            <img
              src="/public/prestataire3.png"
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
              {['Conception des leçons', 'Écoute active', 'Encadrement des travaux pratiques', 'Technologies de l’éducation'].map(skill => (
                <li key={skill}>{bulletStyle} {skill}</li>
              ))}
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
              {['Littérature', 'Cinéma', 'Sports d’équipe'].map(interest => (
                <li key={interest}>{bulletStyle} {interest}</li>
              ))}
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
                <ul className="text-sm ml-5" style={{ color: textColor }}>
                    <li>{bulletStyle} Évaluer les besoins de chaque élève.</li>
                    <li>{bulletStyle} Adapter les contenus pour maximiser l&apos;apprentissage.</li>
                    <li>{bulletStyle} Collaborer avec les enseignants sur les projets.</li>
                 </ul>

              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-bold" style={{ color: titleColor }}>Informatique</h3>
            <ul className="text-sm" style={{ color: textColor }}>
              <li>{bulletStyle} Microsoft Office 5/5</li>
              <li>{bulletStyle} Zoom 5/5</li>
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-bold" style={{ color: titleColor }}>Certificats</h3>
            <ul className="text-sm" style={{ color: textColor }}>
              <li>{bulletStyle} Certificat de secourisme obtenu en 2020</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVPreview;
