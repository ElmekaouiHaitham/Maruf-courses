import React from "react";

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Python" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Flutter" },
  { skill: "Dart" },
  { skill: "c++" },
  { skill: "Arduino" },
  { skill: "Flask" },
  { skill: "Machine learning" },
  { skill: "SQL" },
  { skill: "Firebase" },
  { skill: "System design " },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="flex justify-center items-center flex-col w-screen px-7 md:px-28">
        <div>
          <h1 className="text-4xl font-bold">À propos de moi</h1>
        </div>
        <hr className="w-6 h-1 mx-auto my-4 mb-5 bg-teal-500 border-0 rounded"></hr>
        <div className="flex flex-col md:flex-row gap-11 mt-4">
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-3">Faisons connaissance !</h1>
            <p>
              Salut, je m&apos;appelle Haitham et je suis un développeur{" "}
              <span className="font-bold">extrêmement ambitieux</span>,
              <span className="font-bold"> motivé</span> et{" "}
              <span className="font-bold">passionné</span>, spécialisé dans
              Flutter pour la magie multiplateforme, Next.js pour des
              performances web optimisées et Flask pour des API backend
              flexibles.
            </p>
            <br />
            <p>
              J&apos;ai travaillé sur différents projets, tant de manière
              indépendante que dans le cadre de collaborations sur des
              initiatives open-source. J&apos;aime relever des défis complexes avec
              des idées innovantes, en m&apos;efforçant de créer des logiciels ayant
              un impact positif sur les entreprises et la vie des gens.
            </p>
            <br />
            <p>
              Ma fascination pour l&apos;aspect scientifique de la programmation
              m&apos;incite à explorer les mathématiques, la physique et à développer
              des simulations pour des scénarios du monde réel, améliorant ainsi
              mes capacités de résolution de problèmes.
            </p>
            <br />
            <p>
              En plus du développement d&apos;applications et de sites web, je suis
              également passionné par l&apos;apprentissage automatique (machine
              learning). Mes solides bases dans ce domaine me permettent
              d&apos;intégrer des fonctionnalités basées sur l&apos;intelligence
              artificielle dans mes projets et d&apos;explorer des solutions
              innovantes.
            </p>
            <br />
            <p>
              Je crois qu&apos;il ne faut{" "}
              <span className="font-bold text-teal-500">
                jamais cesser de grandir
              </span>
              , et c&apos;est ce à quoi je m&apos;efforce de faire. J&apos;ai une passion pour
              la technologie et le désir de repousser constamment les limites de
              ce qui est possible. Je suis enthousiaste à l&apos;idée de voir où ma
              carrière me mènera et suis toujours ouvert aux nouvelles
              opportunités. 🙂
            </p>
          </div>

          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-6">Mes compétences</h1>
            <div className="flex flex-wrap">
              {skills.map((item, index) => {
                return (
                  <p
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                    key={index}
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
