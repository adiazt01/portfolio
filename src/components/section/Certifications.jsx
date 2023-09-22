import { CardCertification } from "../cards/CardCertification";

export const Certifications = () => {

    const CertificationsLinks = [
        {
            name: '🏆 FreeCodeCamp - Data Visualization',
            description: 'In the Data Visualization Certification, I created charts, graphs, and maps to present different types of data with the D3.js library.',
            URL: 'https://www.freecodecamp.org/certification/fccc117c7bb-b7ee-4660-8ae3-663357be41a0/data-visualization',
            date: "Sept 2023"
        
        },
        {
            name: '🏆 FreeCodeCamp - Front End Development Libraries',
            description: `In the Front End Development Libraries Certification, I learned how to design my sites quickly with Bootstrap. Plus how to add logic to my CSS styles and extend them with Sass.
            Later, create a shopping cart and other applications to learn how to create powerful single page applications (SPAs) with React and Redux.`,
            URL: 'https://www.freecodecamp.org/certification/fccc117c7bb-b7ee-4660-8ae3-663357be41a0/front-end-development-libraries',
            date: "Jul 2023"
        
        },
        {
            name: '🏆 FreeCodeCamp - JavaScript Algorithms and Data Structures',
            description: `In this certification I learned the basic, medium and advanced fundamentals of javascript, as well as how to apply it using data structures.`,
            URL: 'https://www.freecodecamp.org/certification/fccc117c7bb-b7ee-4660-8ae3-663357be41a0/javascript-algorithms-and-data-structures',
            date: "Jul 2023"
        
        },
        {
            name: '🏆 FreeCodeCamp - Responsive Web Design',
            description: `In this Responsive Web Design Certification, I learned the languages ​​that developers use to create web pages: HTML (hypertext markup language) for content and CSS (cascading style sheets) for design.`,
            URL: 'https://www.freecodecamp.org/certification/fccc117c7bb-b7ee-4660-8ae3-663357be41a0/responsive-web-design',
            date: "May 2023"
        
        }
    ]

  return (
    <section
      className="flex h-auto flex-col items-center lg:items-start p-8"
      id="Certifications"
    >
      <h2 className="text-gray-300 text-4xl lg:text-6xl text-left underline underline-offset-8 decoration-green-400">
        Certifications
      </h2>
      <div className="grid mt-28 mb-44">
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
         {CertificationsLinks.map((certification,i) => <CardCertification key={i} {...certification}/>)}
        </ol>
      </div>
    </section>
  );
};
