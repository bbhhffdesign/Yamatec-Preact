
// let observer = null;

// export function setUpObservers(sectionsRefs, onSectionChange) {
//   if (observer) {
//     observer.disconnect();
//   }

//   observer = new IntersectionObserver(
//     (entries) => {
//       // Filtrar las entradas que están intersecando (visibles)
//       const visibleSections = entries.filter(entry => entry.isIntersecting);

//       if (visibleSections.length > 0) {
//         // Ordenamos por el % de visibilidad (para encontrar la más visible)
//         visibleSections.sort((a, b) => b.intersectionRatio - a.intersectionRatio);

//         // Obtenemos el dataset de la sección visible
//         const sectionId = visibleSections[0].target.getAttribute("data-section");
        
//         if (sectionId) {
//           onSectionChange(sectionId);
//         }
//       }
//     },
//     {
//       threshold: [0], // 50% de visibilidad
//     }
//   );

//   // Activamos el observer en todas las referencias
//   sectionsRefs.forEach((ref) => {
//     if (ref?.current) {
//       observer.observe(ref.current);
//     }
//   });
// }

// export function cleanObservers() {
//   if (observer) {
//     observer.disconnect();
//     observer = null;
//   }
// }