export function LanguageFeatures() {
  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">Supported Languages & Features</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Ancient Greek</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Koine Greek (Biblical & Hellenistic)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Classical Greek (Attic)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Full grammatical analysis</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Declension & conjugation tables</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Historical context from primary sources</span>
            </li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Latin</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Classical Latin (Golden & Silver Age)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Ecclesiastical Latin</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Medieval Latin</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Morphological analysis</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Roman cultural & historical context</span>
            </li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Modern Greek</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Standard Modern Greek</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Katharevousa (puristic Greek)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Demotic Greek</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Contemporary idioms & expressions</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Pronunciation guides with audio</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}