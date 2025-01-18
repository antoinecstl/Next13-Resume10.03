"use client"

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

const imageSources = [
    "key.svg",
    "git.svg",
    "lock.svg",
    "python.svg",
    "cyber.svg",
    "cpt.svg",
    "database.svg",
    "C++.svg",
    "tsx.svg",
    "js.svg",
];

const usedCoordinates: { top: number; left: number; }[] = [];

const getRandomCoordinates = () => {
    let top: number, left: number;

    do {
        top = Math.random() * 88;
        left = Math.random() * 90;
    } while (
        usedCoordinates.some(
            coord => Math.abs(coord.top - top) < 10 && Math.abs(coord.left - left) < 10
        )
    );

    usedCoordinates.push({ top, left });

    return { top, left };
};

const backgroundImages = Array(25).fill(null).map((_, index) => {
    const { top, left } = getRandomCoordinates();
    return (
        <img
            key={index}
            src={imageSources[Math.floor(Math.random() * imageSources.length)]}
            alt="Background Image"
            className="absolute opacity-10 transform-gpu"
            style={{
                width: '5%',
                top: `${top}%`,
                left: `${left}%`,
                transform: `rotate(${Math.random() * 360}deg)`
            }}
        />
    );
});

export default function Home() {
    const router = useRouter();
    const [inputValue, setInputValue] = useState("");
    const [terminalOutput, setTerminalOutput] = useState<string[]>([
        "> Bienvenue sur le site d'Antoine CASTEL.",
        "> Type 'help' to see available commands.",
        "> ... or scroll to see more.",
    ]);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleCommand = () => {
        const command = inputValue.trim().toLowerCase();
        let output = [...terminalOutput];
        if (!command) {
            setInputValue("");
            return;
        }
        output.push("> " + command);

        switch (command) {
            case "help":
                output.push("- Commands: help, about, experience, education, skills, contact, clear");
                break;
            case "clear":
                output = [
                    "> Bienvenue sur le site d'Antoine CASTEL.",
                    "> Type 'help' to see available commands.",
                    "> ... or scroll to see more.",
                ];
                break;
            default:
                output.push("- Unknown command, type 'help' to see available commands.");
        }

        setTerminalOutput(output);
        setInputValue("");
    };

    function scrollCarousel(direction: number, carouselID: string) {
        const carousel = document.getElementById(carouselID);
        const scrollAmount = 328;  
        if (carousel) {
            carousel.scrollLeft += scrollAmount * direction;
        }
    }
    

    return (
        <main className="snap-y snap-mandatory h-screen overflow-y-scroll bg-gradient-to-t from-slate-950 to-gray-950 animate-fadeIn text-white space-y-64 px-4 sm:px-8" >
            {/* Terminal Section */}
            <section className=" min-h-screen flex flex-col justify-center container  pb-64" onClick={() => inputRef.current?.focus()} >
                {backgroundImages}
                <div className="snap-start w-full rounded-lg shadow-lg animate-slideIn flex flex-col pt-16">
                    <div className="flex-1 overflow-y-auto font-mono mb-2">
                        {terminalOutput.map((line, index) => (
                            <div key={index}>{line}</div>
                        ))}
                        <div className="flex">
                            <span className="mr-2">{'>'}</span>
                            <input
                                className="flex-1 bg-transparent focus:outline-none"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleCommand()}
                                placeholder="Type a command..."
                                ref={inputRef}
                            />
                        </div>
                    
                        
                    </div>
                </div>
            </section>

            <section className="flex flex-col min-h-screen container animate-fadeIn py-64">
                {/* First Main Section (CV) */}
                <main className="flex flex-col min-h-screen container animate-slideIn">
                    <header className="snap-center flex flex-col items-center justify-center min-h-screen "> 
                        <div className="w-48 h-48 md:w-64 md:h-64 mb-4 md:mb-8">
                            <img
                                className="rounded-full border-2 border-zinc-900 opacity-90"
                                src="/Photo_Pro.jpg"
                                alt="Antoine CASTEL"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }}
                            />
                        </div>
                        <div className='mr-4'>
                            <h1 className="text-2xl md:text-3xl font-bold">Antoine CASTEL</h1>
                            <p className="text-base md:text-xl">Etudiant en cinquième année, double diplôme Architecture des Systèmes Informatiques à CentraleSupélec | IPSA.</p>
                        </div>
                    </header>
                    
                    {/* Section Expérience */}
                    <section className="flex flex-col justify-center min-h-screen mb-8 md:mb-12 py-72">
                        <div className="sm:snap-center">
                            <h2 className="snap-start sm:snap-align-none pt-8 text-2xl md:text3-xl font-semibold mb-5">Expérience</h2>
                            <div className="mb-8 w-full">
                                <div className=" bg-zinc-800/60 rounded-lg p-8 hover:bg-zinc-800/80 h-full">
                                    <h3 className="text-xl md:text-2xl font-bold mb-2">Consultant Stagiaire Cybersécurité - Ernst & Young Advisory</h3>
                                    <p className="text-xs md:text-sm mb-4 font-bold ">13 Semaines | Juin 2024 - Septembre 2023 | Tour First, Paris La Défense, France </p>
                                    <p className='text-sm md:text-base mb-4'>Participation aux missions de la branche Cybersécurité d'EY Advisory.</p>
                                    <div className='text-sm md:text-base flex-1 mb-8 bg-zinc-800/80 rounded-lg p-3 md:p-5'>
                                        <p>- Participation à un Audit SSI sous le framework CPA d'EY pour une entreprise du CAC40 (Récupération et mise en forme des 510 questions du CPA, Questionnaire par branche du framework, Introduction d'une nouvelle partie de question liée à l'IA et au Zéro Trust, Préparation des Compte rendu et Flash Reports).</p>
                                        <p>- Formation au badge Cybersécurité Bronze d'EY (Risk Management for Cybersecurity and IT, Social Engineering, Phishing, ISO27001 Auditor, Forensics, ...).</p>
                                        <p>- Développement et mise en production d'un outil d'automatisation de la génération du Cyber Threat Bulletin hebdomadaire de l'entreprise.</p>
                                    </div>   
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row items-stretch space-y-8 lg:space-y-0 lg:space-x-8">
                                <div className="snap-center sm:snap-align-none flex-1 bg-zinc-800/60 rounded-lg p-4 md:p-8 flex flex-col justify-center items-center hover:bg-zinc-800/80">
                                    <div className="flex flex-col justify-center items-center w-full">
                                        <h3 className="text-xl md:text-2xl font-bold mb-2">Stage d'accompagnement CSSI - Docaposte</h3>
                                        <p className="text-xs md:text-sm mb-4 font-bold ">6 Semaines | Juin 2023 - Juil 2023 | Sofia Antipolis, France </p>
                                        <p className='text-sm md:text-base mb-4'>Accompagnement des CSSI (Correspondant Sécurité des Systèmes informatiques) de la BU Digital Platform pendant 6 semaines.</p>
                                        <div className='text-sm md:text-base flex-1 mb-8 bg-zinc-800/80 rounded-lg p-3 md:p-5'>
                                            <p>- Découverte des structures informatiques sécurisées de Docaposte.</p>
                                            <p>- Familiarisation avec différentes normes, certifications et méthodes (HDS, ISO27001, EBIOS).</p>
                                            <p>- Utilisation d'outils d'analyse de vulnérabilités (Qualys, SonarQube, SSLLabs, Mozilla Observatory, Dependency-Check, Nessus).</p>
                                            <p>- Présentations sur les risques liés aux API et aux processus de CI/CD.</p>
                                            <p>- Compréhension des outils et méthodes de développement (Cycle de vie d'une version applicative, Gitlab, Gitflow, CI/CD, tests automatisés, tests d'intégration, merge request).</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="snap-center sm:snap-align-none flex-1 bg-zinc-800/60 rounded-lg p-4 md:p-8 flex flex-col justify-center items-center hover:bg-zinc-800/80">
                                    <div className="flex flex-col justify-center items-center w-full">
                                        <h3 className="text-xl md:text-2xl font-bold mb-2">Stage Ouvrier - MPE (Matières Premières Essentiels) </h3>
                                        <p className="text-xs md:text-sm mb-4 font-bold ">8 Semaines | Juin 2022 - Août 2022 | Grasses, France</p>
                                        <p className='text-sm md:text-base mb-4'>Découverte des différents secteurs d'une usine de parfumerie.</p>
                                        <div className=' text-sm md:text-base flex-1 mb-8 bg-zinc-800/80 rounded-lg p-3 md:p-5'>
                                            <p>- Gestion de la logistique produit au sein des divers secteurs d’activité de l’entreprise.</p>
                                            <p>- Fabrication de valises d’échantillons pour différents clients parfumeurs au laboratoire de matières premières</p>
                                            <p>- Préparation et emballage de produits soumis aux lois européennes du transport de marchandises dangereuses.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    {/* Section Éducation */}
                    <section className="flex flex-col justify-center min-h-screen mb-8 md:mb-12 py-72">
                        <div className="sm:snap-center">
                            <h2 className="snap-start sm:snap-align-none pt-8 text-2xl md:text3-xl font-semibold mb-4">Formation</h2>
                            <div className="mb-8 w-full">
                                <div className="bg-zinc-800/60 rounded-lg p-8 hover:bg-zinc-800/80 h-full">
                                    <h3 className="text-xl md:text-2xl font-bold mb-2">CentraleSupélec - Mention Architecture des Systèmes Informatique</h3>
                                    <p className="text-xs md:text-sm mb-4 font-bold "> Septembre 2024 - Avril 2025 | Paris, France </p>
                                    <p className='mb-4 mt-4 text-sm md:text-base font-semibold'>Préparation d'un double diplome de spécialisation, Mention Architecture des Systèmes Informatique, Dominante Informatique et Numérique </p>
                                    <div className='text-sm md:text-base flex-1 mb-8 bg-zinc-800/80 rounded-lg p-3 md:p-5 hover:bg-zinc-950/20'>
                                        <a className='font-bold mb-2'>Matières étudiées :</a> 
                                        <p>Algorithmie avancée, Systèmes d'exploitation, Modélisation des risques et des attaques, Economie et pilotage de l'IT, Etude de cas business et technique, Architectures applicatives, Infrastructures modernes, Architecture matérielles, Systèmes concurrents et répartis, Programmatrion et outils de développement, Droit éthique et vie privée</p>
                                    </div>   
                                </div>
                            </div>
                            <div className='flex flex-col lg:flex-row items-stretch space-y-8 lg:space-y-0 lg:space-x-8'>
                                <div className="flex-1 bg-zinc-800/60 rounded-lg p-4 md:p-8 hover:bg-zinc-800/80 flex justify-center">
                                    <div className="snap-center sm:snap-align-none flex flex-col justify-center w-full">
                                        <h3 className="text-xl md:text-2xl font-bold mb-2">California State University Long Beach - Computer Science</h3>
                                        <p className="text-xs md:text-sm mb-2 font-bold">Août 2023 - Déc 2023 | Long Beach, CA, USA</p>
                                        <p className='mb-4 md:mb-8 mt-3 md:mt-7 text-sm md:text-base font-semibold'>Semestre d’étude à l’international dans le cadre de mon cursus à l’IPSA.</p>
                                        <div className='text-sm md:text-base flex flex-col justify-center items-start bg-zinc-800/80 hover:bg-zinc-950/20 rounded-lg p-3 mb-2'>
                                            <a className='font-bold mb-2'>Matières étudiées :</a> 
                                            <p>Computer Security, Computer Forensics, Network and Distributed Computing, Machine Learning</p>
                                        </div>
                                        <div className='text-sm md:text-base flex flex-col justify-center items-start bg-zinc-800/80 hover:bg-zinc-950/20 rounded-lg p-3 mb-2'>
                                            <a className='font-bold mb-2'>Projets :</a> 
                                            <p>Développement d'un Fileless Ransomware, Cas d'étude Forensic, Présentation sur la data integration, Conception d'un modèle de machine learning.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 bg-zinc-800/60 rounded-lg p-4 md:p-8 hover:bg-zinc-800/80 flex justify-center">
                                    <div className="snap-center sm:snap-align-none flex flex-col justify-center w-full">
                                        <h3 className="text-xl md:text-2xl font-bold mb-2">IPSA - Ecole d'ingénieurs de l'air et de l'espace et de la mobilité durable</h3>
                                        <p className="text-xs md:text-sm mb-2 font-bold">2020 - 2025 | Paris, France</p>
                                        <p className='mb-4 mt-4 text-sm md:text-base font-semibold'>Préparation d'un diplome d'ingénieurs en aéronautique, Filière Signaux et Systèmes, Majeur Systèmes Embarquées et Télécommunications</p>
                                        <div className='text-sm md:text-base flex flex-col justify-center items-start bg-zinc-800/80 hover:bg-zinc-950/20 rounded-lg p-3 mb-2'>
                                            <a className='font-bold mb-2'>Matières étudiées :</a> 
                                            <p>Réseaux embarquées, Systèmes d'exploitation, Traitement du signal, Base de données, Machine learning, FPGA, Télécommunication, Systèmes intelligents distribués, Systèmes d'informations temps réel, Normes - Lean, Economie, Droit du travail...</p>
                                        </div>
                                        <div className='text-sm md:text-base flex flex-col justify-center items-start bg-zinc-800/80 hover:bg-zinc-950/20 rounded-lg p-3 mb-2'>
                                            <a className='font-bold mb-2'>Projets :</a> 
                                            <p>Différents projets informatiques, électroniques, mathématiques</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    {/* Section Compétence + Langues-Centres-InfoPerso */}
                    <section className="flex flex-col justify-center min-h-screen mb-8 md:mb-12 py-72">
                        <div className="sm:snap-center">
                            <div className="snap-start sm:snap-align-none pt-8">
                                <h2 className="text-2xl md:text3-xl font-semibold mb-2 md:mb-4">Compétences</h2>
                                <h3 className="text-base md:text-lg font-semibold mb-4">Programmation :</h3>
                                <div className="relative">
                                    <button className="-mx-8 absolute left-0 top-11 md:top-16 transform -translate-y-1/2" onClick={() => scrollCarousel(-1, 'programming-carousel')}>
                                        <svg width="30" height="30" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                                        <polygon points="25,0 0,25 25,50 25,46 4,25 25,4" fill="white"/>
                                        </svg>
                                    </button>
                                        <div className="flex overflow-x-auto hide-scroll-bar" id="programming-carousel">
                                            <div className="min-w-[170px] md:min-w-[300px] max-h-[90px] md:max-h-[150px] flex-1 mr-4 md:mr-8 mb-8 bg-zinc-800/60 rounded-lg p-8 flex flex-col justify-center items-center hover:bg-zinc-800/80">
                                                <h3 className="text-base md:text-xl font-bold mb-2">Python</h3>
                                                <p className="text-sm mb-2 font-bold ">Avancé </p>
                                            </div>
                                            <div className="min-w-[170px] md:min-w-[300px] max-h-[90px] md:max-h-[150px] flex-1 mr-4 md:mr-8 mb-8 bg-zinc-800/60 rounded-lg p-8 flex flex-col justify-center items-center hover:bg-zinc-800/80">
                                                <h3 className="text-base md:text-xl font-bold mb-2 ">C/C++</h3>
                                                <p className="text-sm mb-2 font-bold">Avancé</p>
                                            </div>
                                            <div className="min-w-[170px] md:min-w-[300px] max-h-[90px] md:max-h-[150px] flex-1 mr-4 md:mr-8 mb-8 bg-zinc-800/60 rounded-lg p-8 flex flex-col justify-center items-center hover:bg-zinc-800/80">
                                                <h3 className="text-base md:text-xl font-bold mb-2 ">Matlab</h3>
                                                <p className="text-sm mb-2 font-bold">Intermédiaire</p>
                                            </div>
                                            <div className="min-w-[170px] md:min-w-[300px] max-h-[90px] md:max-h-[150px] flex-1 mr-4 md:mr-8 mb-8 bg-zinc-800/60 rounded-lg p-8 flex flex-col justify-center items-center hover:bg-zinc-800/80">
                                                <h3 className="text-base md:text-xl font-bold mb-2 ">FPGA - VHDL</h3>
                                                <p className="text-sm mb-2 font-bold">Intermédiaire</p>
                                            </div>
                                            <div className="min-w-[170px] md:min-w-[300px] max-h-[90px] md:max-h-[150px] flex-1 mr-4 md:mr-8 mb-8 bg-zinc-800/60 rounded-lg p-8 flex flex-col justify-center items-center hover:bg-zinc-800/80">
                                                <h3 className="text-base md:text-xl font-bold mb-2 ">React - Javascript</h3>
                                                <p className="text-sm mb-2 font-bold">Intermédiaire</p>
                                            </div>
                                            <div className="min-w-[170px] md:min-w-[300px] max-h-[90px] md:max-h-[150px] flex-1 mr-4 md:mr-8 mb-8 bg-zinc-800/60 rounded-lg p-8 flex flex-col justify-center items-center hover:bg-zinc-800/80">
                                                <h3 className="text-base md:text-xl font-bold mb-2 ">HTML</h3>
                                                <p className="text-sm mb-2 font-bold">Intermédiaire</p>
                                            </div>
                                            <div className="min-w-[170px] md:min-w-[300px] max-h-[90px] md:max-h-[150px] flex-1 mr-4 md:mr-8 mb-8 bg-zinc-800/60 rounded-lg p-8 flex flex-col justify-center items-center hover:bg-zinc-800/80">
                                                <h3 className="text-base md:text-xl font-bold mb-2 ">R</h3>
                                                <p className="text-sm mb-2 font-bold">Intermédiaire</p>
                                            </div>
                                        </div>
                                    <button className="-mr-8 absolute right-0 top-11 md:top-16 transform -translate-y-1/2" onClick={() => scrollCarousel(1, 'programming-carousel')}>
                                        <svg width="30" height="30" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                                        <polygon points="25,0 50,25 25,50 25,46 46,25 25,4" fill="white"/>
                                        </svg>
                                    </button>
                                </div>
                                <h3 className="text-base md:text-lg font-semibold mb-4">Skill :</h3>
                                <div className="relative">
                                    <button className="-mx-8 absolute left-0 top-11 md:top-16 transform -translate-y-1/2" onClick={() => scrollCarousel(-1, 'skills-carousel')}>
                                        <svg width="30" height="30" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                                        <polygon points="25,0 0,25 25,50 25,46 4,25 25,4" fill="white"/>
                                        </svg>
                                    </button>
                                        <div className="flex overflow-x-auto hide-scroll-bar" id="skills-carousel">
                                            <div className="min-w-[170px] md:min-w-[300px] max-h-[90px] md:max-h-[150px] flex-1 mr-4 md:mr-8 mb-8 bg-zinc-800/60 rounded-lg p-8 flex flex-col justify-center items-center hover:bg-zinc-800/80">
                                                <h3 className="text-base md:text-xl font-bold mb-2 ">Virtualisation</h3>
                                                <p className="text-sm mb-2 font-bold">Intermédiaire</p>
                                            </div>
                                            <div className="min-w-[170px] md:min-w-[300px] max-h-[90px] md:max-h-[150px] flex-1 mr-4 md:mr-8 mb-8 bg-zinc-800/60 rounded-lg p-8 flex flex-col justify-center items-center hover:bg-zinc-800/80">
                                                <h3 className="text-base md:text-xl font-bold mb-2 ">Linux (Kali,Ubuntu)</h3>
                                                <p className="text-sm mb-2 font-bold">Intermédiaire</p>
                                            </div>
                                            <div className="min-w-[170px] md:min-w-[300px] max-h-[90px] md:max-h-[150px] flex-1 mr-4 md:mr-8 mb-8 bg-zinc-800/60 rounded-lg p-8 flex flex-col justify-center items-center hover:bg-zinc-800/80">
                                                <h3 className="text-base md:text-xl font-bold mb-2 ">Windows 10/11</h3>
                                                <p className="text-sm mb-2 font-bold">Intermédiaire</p>
                                            </div>
                                            <div className="min-w-[170px] md:min-w-[300px] max-h-[90px] md:max-h-[150px] flex-1 mr-4 md:mr-8 mb-8 bg-zinc-800/60 rounded-lg p-8 flex flex-col justify-center items-center hover:bg-zinc-800/80">
                                                <h3 className="text-base md:text-xl font-bold mb-2 ">Google Cloud Platform</h3>
                                                <p className="text-sm mb-2 font-bold">Intermédiaire</p>
                                            </div>
                                            <div className="min-w-[170px] md:min-w-[300px] max-h-[90px] md:max-h-[150px] flex-1 mr-4 md:mr-8 mb-8 bg-zinc-800/60 rounded-lg p-8 flex flex-col justify-center items-center hover:bg-zinc-800/80">
                                                <h3 className="text-base md:text-xl font-bold mb-2 ">Powershell</h3>
                                                <p className="text-sm mb-2 font-bold">Intermédiaire</p>
                                            </div>
                                            <div className="min-w-[170px] md:min-w-[300px] max-h-[90px] md:max-h-[150px] flex-1 mr-4 md:mr-8 mb-8 bg-zinc-800/60 rounded-lg p-8 flex flex-col justify-center items-center hover:bg-zinc-800/80">
                                                <h3 className="text-base md:text-xl font-bold mb-2 ">GNS3</h3>
                                                <p className="text-sm mb-2 font-bold">Débutant</p>
                                            </div>
                                            <div className="min-w-[170px] md:min-w-[300px] max-h-[90px] md:max-h-[150px] flex-1 mr-4 md:mr-8 mb-8 bg-zinc-800/60 rounded-lg p-8 flex flex-col justify-center items-center hover:bg-zinc-800/80">
                                                <h3 className="text-base md:text-xl font-bold mb-2">Pack Office</h3>
                                                <p className="text-sm mb-2 font-bold ">Avancé </p>
                                            </div>
                                        </div>
                                    <button className="-mr-8 absolute right-0 top-11 md:top-16 transform -translate-y-1/2" onClick={() => scrollCarousel(1, 'skills-carousel')}>
                                        <svg width="30" height="30" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                                        <polygon points="25,0 50,25 25,50 25,46 46,25 25,4" fill="white"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="mt-8 mb-12">
                                <div className="flex flex-col lg:flex-row items-stretch space-y-8 lg:space-y-0 lg:space-x-8">
                                    <div className="snap-center sm:snap-align-none flex-1 bg-zinc-800/60 rounded-lg p-4 md:p-8 hover:bg-zinc-800/80 flex justify-center">
                                        <div className='flex flex-col justify-center w-full'>
                                            <h3 className="text-xl md:text-2xl font-bold mb-2">Langues</h3>
                                            <div className='flex flex-col justify-center items-start bg-zinc-800/80 hover:bg-zinc-950/20 rounded-lg p-3 mb-2'>
                                                <a className='font-bold mb-2'>Français :</a>
                                                <p>Langue maternelle</p>
                                            </div>
                                            <div className='flex flex-col justify-center items-start bg-zinc-800/80 hover:bg-zinc-950/20 rounded-lg p-3 mb-2'>
                                                <a className='font-bold mb-2'>Anglais :</a>
                                                <p>Fluent - Toeic (980 points)</p>
                                            </div>
                                            <div className='flex flex-col justify-center items-start bg-zinc-800/80 hover:bg-zinc-950/20 rounded-lg p-3 mb-2'>
                                                <a className='font-bold mb-2'>Espagnol :</a>
                                                <p>Niveau B1</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="snap-center sm:snap-align-none flex-1 bg-zinc-800/60 rounded-lg p-4 md:p-8 hover:bg-zinc-800/80 flex justify-center">
                                        <div className='flex flex-col justify-center w-full'>
                                            <h3 className="text-xl md:text-2xl font-bold mb-2">Centres d'intérêt</h3>
                                            <div className='flex flex-col justify-center items-start bg-zinc-800/80 hover:bg-zinc-950/20 rounded-lg p-3 mb-2'>
                                                <p>CTF (Capture The Flag)</p>
                                            </div>
                                            <div className='flex flex-col justify-center items-start bg-zinc-800/80 hover:bg-zinc-950/20 rounded-lg p-3 mb-2'>
                                                <p>Drone FPV (First Person View)</p>
                                            </div>
                                            <div className='flex flex-col justify-center items-start bg-zinc-800/80 hover:bg-zinc-950/20 rounded-lg p-3 mb-2'>
                                                <p>Sport : 6 ans d'Aviron (niveau national)</p>
                                            </div>
                                            <div className='flex flex-col justify-center items-start bg-zinc-800/80 hover:bg-zinc-950/20 rounded-lg p-3 mb-2'>
                                                <p>Bateau à Voile</p>
                                            </div>
                                            <div className='flex flex-col justify-center items-start bg-zinc-800/80 hover:bg-zinc-950/20 rounded-lg p-3 mb-2'>
                                                <p>Automobile, rénovation d'une 2cv</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="snap-center sm:snap-align-none flex-1 bg-zinc-800/60 rounded-lg p-4 md:p-8 hover:bg-zinc-800/80 flex justify-center">
                                        <div className='flex flex-col justify-center w-full'>
                                            <h3 className="text-xl md:text-2xl font-bold mb-2">Informations Personnelles</h3>
                                            <div className='flex flex-col justify-center items-start bg-zinc-800/80 hover:bg-zinc-950/20 rounded-lg p-3 mb-2'>
                                                <a className='font-bold mb-2'>Adresse :</a>
                                                <p>Paris 14ème</p>
                                            </div>
                                            <div className='flex flex-col justify-center items-start bg-zinc-800/80 hover:bg-zinc-950/20 rounded-lg p-3 mb-2'>
                                                <a className='font-bold mb-2'>Locomotion :</a>
                                                <p>- Permis B</p>
                                                <p>- Voiture Personelle</p>
                                                <p>- Permis Bateau</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </section>

            <section className=" flex flex-col min-h-screen container animate-fadeIn animate-slideIn py-32">
                {/* Second Main Section (Portfolio) */}
                <main className="flex flex-col min-h-screen container">
                    {/*Portfolio*/}
                    <main className="flex flex-col min-h-screen container">  
                    {/* Section Projets Personnels */}
                        <section className="mb-16 pt-8">
                                <h2 className="snap-start sm:snap-align-none pt-8 text-3xl font-semibold mb-4">Projets Personnels</h2>
                                <div className="mb-8 ">
                                    <a href="https://github.com/antoinecstl/Sharips-Deploy-Next13" target="_blank" rel="noopener noreferrer" className="w-full lg:w-1/2">
                                        <div className="bg-zinc-800/60 rounded-lg p-8 hover:bg-zinc-800/80 relative hover:scale-95 transition-transform hover:border h-full">
                                            <h3 className="text-2xl font-bold mb-2">Sharips</h3>
                                            <img className="absolute top-0 right-0 m-4" src="git.svg" alt="Github" width="25" height="25" />
                                            <p>Plateforme web collaborative de type cloud, conçue spécifiquement pour les étudiants, facilitant le stockage, le partage et la collaboration en temps réel sur des cours et du matériel scolaire. </p>
                                        </div>
                                    </a>
                                </div>
                                <div className='mb-2 flex flex-col space-y-8 lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8 items-stretch'>
                                    <a href="https://github.com/antoinecstl/Gestiopass" target="_blank" rel="noopener noreferrer" className="w-full lg:w-1/2">
                                        <div className=" bg-zinc-800/60 rounded-lg p-8 hover:bg-zinc-800/80 relative hover:scale-95 transition-transform hover:border h-full">
                                            <h3 className="text-2xl font-bold mb-2">Gestiopass</h3>
                                            <img className="absolute top-0 right-0 m-4" src="git.svg" alt="Github" width="25" height="25" />
                                            <p>Logiciel de stockage de mots de passe chiffré conçu pour fonctionner en local. Les données sont stockées localement sur l'appareil de l'utilisateur plutôt que sur un serveur distant. Cela permet de conserver le contrôle total sur leurs mots de passe et d'éviter de confier leurs informations sensibles à des tiers. </p>
                                        </div>
                                    </a>
                                    <a href="https://github.com/antoinecstl/AutoSplit" target="_blank" rel="noopener noreferrer" className="w-full lg:w-1/2">
                                        <div className="snap-center bg-zinc-800/60 rounded-lg p-8 hover:bg-zinc-800/80 relative hover:scale-95 transition-transform hover:border h-full">
                                            <h3 className="text-2xl font-bold mb-2">AutoSplit</h3>
                                            <img className="absolute top-0 right-0 m-4" src="git.svg" alt="Github" width="25" height="25" />
                                            <p>Conception d'un générateur de vidéos verticales en format "Split-Screen" adapté aux contenus tels que les "réels" sur les réseaux sociaux. Cette solution, accessible via un bot Discord, permet de convertir des vidéos YouTube à partir d'une simple URL. Elle intègre également une fonctionnalité de sous-titrage automatique, propulsée par Whisper d'OpenAI.</p>
                                        </div>
                                    </a>
                                </div>
                                <a href="https://github.com/antoinecstl" target="_blank" rel="noopener noreferrer">
                                        <div className='flex justify-evenly items-center mt-10'>
                                            <div className="flex items-center hover:scale-105 transition-transform">
                                                <h2 className="text-xl md:text-2xl font-semibold mr-4">Accédez à mon Github</h2>
                                                <img src="git.svg" alt="Email" width="36" height="36"/>
                                            </div>
                                        </div>
                                </a>
                        </section>

                        {/* Section Projets Associatifs */}
                        <section className="snap-align-none sm:snap-center mb-12">
                            <h2 className="text-3xl font-semibold mb-4">Projets Associatifs</h2>
                            <div className='flex flex-col space-y-8'>
                                <a href="https://www.linkedin.com/company/ipsa-racing-team/" target="_blank" rel="noopener noreferrer">
                                <div className="snap-center sm:snap-align-none focus:outline-none bg-zinc-800/60 rounded-lg p-8 relative hover:bg-zinc-800/80 hover:scale-95 transition-transform hover:border">
                                    <h3 className="text-2xl font-bold mb-2">IPSA Racing Team</h3>
                                    <img className="absolute top-0 right-0 m-4" src="linkedin.svg" alt="Github" width="30" height="30" />
                                    <p className="text-sm mb-4 font-bold ">Septembre 2022 - Aujourd'hui</p>
                                    <p className="mb-2">Association étudiante de conception d'une monoplace à propulsion électrique pour le championnat universitaire Formula Student.</p>
                                    <p className="font-semibold">Chef du pôle Système</p>
                                    <p>- Conceptualisation complète du système de contrôle moteur</p>
                                    <p>- Création de l'interface pilote/machine</p>
                                    <p>- Choix moteur et analyse des besoins</p>
                                    <p>- Dimensionnement du pack batterie</p>
                                </div>
                                </a>
                                <a href="https://www.linkedin.com/company/innovative-propulsion-laboratory/" target="_blank" rel="noopener noreferrer">
                                <div className="snap-center sm:snap-align-none focus:outline-none bg-zinc-800/60 rounded-lg p-8 relative hover:bg-zinc-800/80 hover:scale-95 transition-transform hover:border">
                                    <h3 className="text-2xl font-bold mb-2">Innovative Propulsion Laboratory - IPL </h3>
                                    <img className="absolute top-0 right-0 m-4" src="linkedin.svg" alt="Github" width="30" height="30" />
                                    <p className="text-sm mb-4 font-bold ">Septembre 2022 - Aujourd'hui</p>
                                    <p className="mb-2">Association étudiante de conception de moteur fusée.</p>
                                    <p className="font-semibold">Membre du pôle Baie moteur</p>
                                    <p>- Responsable de la partie acquisition de données</p>
                                    <p>- Positionnement des différents capteurs</p>
                                    <p>- Analyse des besoins</p>
                                    <p>- Choix des capteurs</p>
                                </div>
                                </a>
                            </div>
                        </section>
                    </main>
                </main>
            </section>
                                {/* Pied de page - Informations de contact */}
            <footer className="snap-center flex flex-col justify-center min-h-screen mb-8 md:mb-12 container animate-fadeIn animate-slideIn">
                <h2 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-16">Contactez-moi :</h2>
                <div className='flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-8'>
                    <div className="flex-1 flex justify-center items-center -mb-1 lg:mb-0 hover:scale-95">
                        <a href="mailto:antoine.castel@ipsa.fr">
                            <img className="mr-2" src="mail.svg" alt="Email" width="36" height="36"/>
                        </a>
                        <a href="mailto:antoine.castel@student-cs.fr">
                            <p> antoine.castel@student-cs.fr</p>
                        </a>
                    </div>
                    <div className="flex-1 flex justify-center items-center lg:mb-0">
                        <img className="mr-2" src="phone.svg" alt="Phone" width="32" height="32"/>
                        <p> +33 6 89 91 58 00</p>
                    </div>
                    <div className="flex-1 flex justify-center items-center lg:mb-0 hover:scale-95">
                        <a href="https://www.linkedin.com/in/antoinecastel/" target="_blank" rel="noopener noreferrer">
                            <img className="mr-2" src="linkedin.svg" alt="LinkedIn" width="35" height="35" />
                        </a>
                        <p><a href="https://www.linkedin.com/in/antoinecastel/" target="_blank" rel="noopener noreferrer">Mon profil LinkedIn</a></p>
                    </div>
                </div>
            </footer>
        </main>
    );
}
