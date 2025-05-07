"use client"

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import React from "react";

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
        <Image
            key={index}
            src={imageSources[Math.floor(Math.random() * imageSources.length)]}
            alt={`Tech background icon ${index + 1}`}
            className="absolute opacity-10 transform-gpu"
            width={50}
            height={50}
            style={{
                width: '5%',
                top: `${top}%`,
                left: `${left}%`,
                transform: `rotate(${Math.random() * 360}deg)`
            }}
            priority={index < 5} // Prioritize loading first few images
            loading={index >= 5 ? "lazy" : "eager"}
        />
    );
});

type Language = 'en' | 'fr';

type Translations = {
    [key: string]: string | string[];
};

const translations: Record<Language, Translations> = {
    en: {
        welcome: "- Welcome",
        help: "- Type 'help' to see available commands.",
        scroll: "- ... or scroll to see more.",
        commands: "- Commands: help, clear, about, whois, experience, formation, competence, project, contact",
        unknownCommand: "- Unknown command, type 'help' to see available commands.",
        about: "- Welcome to Antoine CASTEL's website, here you will find the equivalent of an online CV regrouping Antoine's professional information (Experiences, Education, Skills, Projects, and Contact).",
        
        student: "Fifth-year student, double degree in Architecture of Information Systems at CentraleSupélec | IPSA.",
        experience: "Experience",
        education: "Education",
        skills: "Skills",
        languages: "Languages",
        interests: "Interests",
        personalInfo: "Personal Information",
        address: "Address",
        transportation: "Transportation",
        license: "Driver's License",
        car: "Personal Car",
        boatLicense: "Boat License",
        contactMe: "Contact Me",
        
        eyTitle: "Cybersecurity Intern Consultant - Ernst & Young Advisory",
        eyDuration: "13 Weeks | June 2024 - September 2024 | Tower First, Paris La Défense, France",
        eyDescription: "Participation in missions of EY Advisory's Cybersecurity branch.",
        eyDetails: [
            "- Participation in an Information Security Maturity Audit under EY's CPA framework for a CAC40 company (Collection and formatting of the 510 CPA questions, Questionnaire by framework branch, Introduction of a new section of questions related to AI and Zero Trust, Preparation of Reports and Flash Reports).",
            "- Achievement of EY's Bronze Cybersecurity Badge (Risk Management for Cybersecurity and IT, Social Engineering, Phishing, ISO27001 Auditor, Forensics, ...).",
            "- Development and deployment of an automation tool for generating the company's weekly Cyber Threat Bulletin."
        ],
        
        docaposteTitle: "CSSI Support Intern - Docaposte",
        docaposteDuration: "6 Weeks | June 2023 - July 2023 | Sofia Antipolis, France",
        docaposteDescription: "Support for the CSSI (Information Systems Security Correspondent) of the Digital Platform BU for 6 weeks.",
        docaposteDetails: [
            "- Discovery of Docaposte's secure IT structures.",
            "- Familiarization with various standards, certifications, and methods (HDS, ISO27001, EBIOS).",
            "- Use of vulnerability analysis tools (Qualys, SonarQube, SSLLabs, Mozilla Observatory, Dependency-Check, Nessus).",
            "- Presentations on risks related to APIs and CI/CD processes.",
            "- Understanding of development tools and methods (Lifecycle of an application version, Gitlab, Gitflow, CI/CD, automated tests, integration tests, merge request)."
        ],
        
        mpeTitle: "Worker Intern - MPE (Essential Raw Materials)",
        mpeDuration: "8 Weeks | June 2022 - August 2022 | Grasses, France",
        mpeDescription: "Discovery of the various sectors of a perfumery factory.",
        mpeDetails: [
            "- Product logistics management within the company's various activity sectors.",
            "- Manufacturing of sample cases for various perfumer clients in the raw materials laboratory.",
            "- Preparation and packaging of products subject to European dangerous goods transport laws."
        ],
        
        csTitle: "CentraleSupélec - Information Systems Architecture Specialization",
        csDuration: "September 2024 - April 2025 | Paris, France",
        csDescription: "Preparation of a double degree in Information Systems Architecture, Digital and IT Major",
        csSubjects: "Subjects studied:",
        csSubjectsList: "Advanced Algorithms, Operating Systems, Risk and Attack Modeling, IT Economics and Management, Business and Technical Case Studies, Application Architectures, Modern Infrastructures, Hardware Architectures, Concurrent and Distributed Systems, Programming and Development Tools, Ethics and Privacy Law",
        
        csulbTitle: "California State University Long Beach - Computer Science",
        csulbDuration: "August 2023 - December 2023 | Long Beach, CA, USA",
        csulbDescription: "International study semester as part of my IPSA curriculum.",
        csulbSubjects: "Subjects studied:",
        csulbSubjectsList: "Computer Security, Computer Forensics, Network and Distributed Computing, Machine Learning",
        csulbProjects: "Projects:",
        csulbProjectsList: "Development of a Fileless Ransomware, Forensic Case Study, Presentation on Data Integration, Design of a Machine Learning Model",
        
        ipsaTitle: "IPSA - School of Aeronautics and Sustainable Mobility Engineering",
        ipsaDuration: "2020 - 2025 | Paris, France",
        ipsaDescription: "Preparation for an engineering degree in aeronautics, Signals and Systems Major, Embedded Systems and Telecommunications Specialization",
        ipsaSubjects: "Subjects studied:",
        ipsaSubjectsList: "Embedded Networks, Operating Systems, Signal Processing, Databases, Machine Learning, FPGA, Telecommunications, Distributed Intelligent Systems, Real-Time Information Systems, Standards - Lean, Economics, Labor Law...",
        ipsaProjects: "Projects:",
        ipsaProjectsList: "Various IT, electronics, and mathematics projects",

        advanced: "Advanced",
        intermediate: "Intermediate",
        beginner: "Beginner",
        virtualization: "Virtualization",
        office: "Office",

        french: "French",
        english: "English",
        spanish: "Spanish",
        frlevel: "Native Language",
        enlevel: "Fluent - TOEIC 980/990",
        splevel: "B1 Level",

        ctf: "CTF (Capture The Flag)",
        drone: "FPV Drone (First Person View)",
        rowing: "Sport: 6 years of Rowing (national level)",
        sailing: "Sailing",
        carRenovation: "Car renovation, 2CV",

        portfolio: "Portfolio",
        personalProjects: "Personal Projects",
        associativeProjects: "Associative Projects",
        sharips: "Sharips",
        sharipsDescription: "Collaborative cloud platform designed specifically for students, facilitating storage, sharing, and real-time collaboration on courses and school materials.",
        gestiopass: "Gestiopass",
        gestiopassDescription: "Encrypted password storage software designed to work locally. Data is stored locally on the user's device rather than on a remote server, allowing users to retain full control over their passwords and avoid entrusting their sensitive information to third parties.",
        autosplit: "AutoSplit",
        autosplitDescription: "Design of a vertical video generator in 'Split-Screen' format suitable for content such as 'reels' on social networks. This solution, accessible via a Discord bot, allows converting YouTube videos from a simple URL. It also integrates an automatic subtitling feature powered by OpenAI's Whisper.",
        accessGithub: "Access my Github",
        ipsaRacingTeam: "IPSA Racing Team",
        ipsaRacingTeamDescription: "Student association designing an electric single-seater for the Formula Student university championship.",
        systemLead: "System Lead",
        systemLeadDetails: [
            "- Complete conceptualization of the motor control system",
            "- Creation of the pilot/machine interface",
            "- Motor selection and needs analysis",
            "- Battery pack sizing"
        ],
        ipl: "Innovative Propulsion Laboratory - IPL",
        iplDescription: "Student association designing rocket engines.",
        engineBayMember: "Engine Bay Member",
        engineBayDetails: [
            "- Responsible for data acquisition",
            "- Positioning of various sensors",
            "- Needs analysis",
            "- Sensor selection"
        ],
    },
    fr: {
        welcome: "- Bienvenue",
        help: "- Entrez 'help' pour voir les commandes disponibles.",
        scroll: "- ... ou faites défiler pour en voir plus.",
        commands: "- Commandes: help, clear, about, whois, experience, formation, competence, project, contact",
        unknownCommand: "- Commande inconnue, tapez 'help' pour voir les commandes disponibles.",
        about: "- Bienvenue sur le site d'Antoine CASTEL, vous trouverez ici l'équivalent d'un CV en ligne regroupant les informations professionnelles d'Antoine (Expériences, Formations, Compétences, Projets et Contact).",
        
        student: "Etudiant en cinquième année, double diplôme Architecture des Systèmes Informatiques à CentraleSupélec | IPSA.",
        experience: "Expérience",
        education: "Formation",
        skills: "Compétences",
        languages: "Langues",
        interests: "Centres d'intérêt",
        personalInfo: "Informations Personnelles",
        address: "Adresse",
        transportation: "Locomotion",
        license: "Permis B",
        car: "Voiture Personelle",
        boatLicense: "Permis Bateau",
        contactMe: "Contactez-moi",
        
        eyTitle: "Consultant Stagiaire Cybersécurité - Ernst & Young Advisory",
        eyDuration: "13 Semaines | Juin 2024 - Septembre 2024 | Tour First, Paris La Défense, France",
        eyDescription: "Participation aux missions de la branche Cybersécurité d'EY Advisory.",
        eyDetails: [
            "- Participation à un Audit de maturité SSI sous le framework CPA d'EY pour une entreprise du CAC40 (Récupération et mise en forme des 510 questions du CPA, Questionnaire par branche du framework, Introduction d'une nouvelle partie de question liée à l'IA et au Zéro Trust, Préparation des Compte rendu et Flash Reports).",
            "- Obtention du badge Cybersécurité Bronze d'EY (Risk Management for Cybersecurity and IT, Social Engineering, Phishing, ISO27001 Auditor, Forensics, ...).",
            "- Développement et mise en production d'un outil d'automatisation de la génération du Cyber Threat Bulletin hebdomadaire de l'entreprise."
        ],
        
        docaposteTitle: "Stage d'accompagnement CSSI - Docaposte",
        docaposteDuration: "6 Semaines | Juin 2023 - Juil 2023 | Sofia Antipolis, France",
        docaposteDescription: "Accompagnement des CSSI (Correspondant Sécurité des Systèmes informatiques) de la BU Digital Platform pendant 6 semaines.",
        docaposteDetails: [
            "- Découverte des structures informatiques sécurisées de Docaposte.",
            "- Familiarisation avec différentes normes, certifications et méthodes (HDS, ISO27001, EBIOS).",
            "- Utilisation d'outils d'analyse de vulnérabilités (Qualys, SonarQube, SSLLabs, Mozilla Observatory, Dependency-Check, Nessus).",
            "- Présentations sur les risques liés aux API et aux processus de CI/CD.",
            "- Compréhension des outils et méthodes de développement (Cycle de vie d'une version applicative, Gitlab, Gitflow, CI/CD, tests automatisés, tests d'intégration, merge request)."
        ],
        
        mpeTitle: "Stage Ouvrier - MPE (Matières Premières Essentiels)",
        mpeDuration: "8 Semaines | Juin 2022 - Août 2022 | Grasses, France",
        mpeDescription: "Découverte des différents secteurs d'une usine de parfumerie.",
        mpeDetails: [
            "- Gestion de la logistique produit au sein des divers secteurs d’activité de l’entreprise.",
            "- Fabrication de valises d’échantillons pour différents clients parfumeurs au laboratoire de matières premières.",
            "- Préparation et emballage de produits soumis aux lois européennes du transport de marchandises dangereuses."
        ],
        
        csTitle: "CentraleSupélec - Mention Architecture des Systèmes Informatique",
        csDuration: "Septembre 2024 - Avril 2025 | Paris, France",
        csDescription: "Préparation d'un double diplome de spécialisation, Mention Architecture des Systèmes Informatique, Dominante Informatique et Numérique",
        csSubjects: "Matières étudiées :",
        csSubjectsList: "Algorithmie avancée, Systèmes d'exploitation, Modélisation des risques et des attaques, Economie et pilotage de l'IT, Etude de cas business et technique, Architectures applicatives, Infrastructures modernes, Architecture matérielles, Systèmes concurrents et répartis, Programmatrion et outils de développement, Droit éthique et vie privée",
        
        csulbTitle: "California State University Long Beach - Computer Science",
        csulbDuration: "Août 2023 - Déc 2023 | Long Beach, CA, USA",
        csulbDescription: "Semestre d’étude à l’international dans le cadre de mon cursus à l’IPSA.",
        csulbSubjects: "Matières étudiées :",
        csulbSubjectsList: "Computer Security, Computer Forensics, Network and Distributed Computing, Machine Learning",
        csulbProjects: "Projets :",
        csulbProjectsList: "Développement d'un Fileless Ransomware, Cas d'étude Forensic, Présentation sur la data integration, Conception d'un modèle de machine learning",
        
        ipsaTitle: "IPSA - Ecole d'ingénieurs de l'air et de l'espace et de la mobilité durable",
        ipsaDuration: "2020 - 2025 | Paris, France",
        ipsaDescription: "Préparation d'un diplome d'ingénieurs en aéronautique, Filière Signaux et Systèmes, Majeur Systèmes Embarquées et Télécommunications",
        ipsaSubjects: "Matières étudiées :",
        ipsaSubjectsList: "Réseaux embarquées, Systèmes d'exploitation, Traitement du signal, Base de données, Machine learning, FPGA, Télécommunication, Systèmes intelligents distribués, Systèmes d'informations temps réel, Normes - Lean, Economie, Droit du travail...",
        ipsaProjects: "Projets :",
        ipsaProjectsList: "Différents projets informatiques, électroniques, mathématiques",
        
        advanced: "Avancé",
        intermediate: "Intermédiaire",
        beginner: "Débutant",
        virtualization: "Virtualisation",
        office: "Pack Office",

        french: "Français",
        english: "Anglais",
        spanish: "Espagnol",
        frlevel: "Langue maternelle",
        enlevel: "Courant - TOEIC 980/990",
        splevel: "Niveau B1",
       
        ctf: "CTF (Capture The Flag)",
        drone: "Drone FPV (First Person View)",
        rowing: "Sport : 6 ans d'Aviron (niveau national)",
        sailing: "Bateau à Voile",
        carRenovation: "Automobile, rénovation d'une 2cv",
        
        portfolio: "Portfolio",
        personalProjects: "Projets Personnels",
        associativeProjects: "Projets Associatifs",
        sharips: "Sharips",
        sharipsDescription: "Plateforme web collaborative de type cloud, conçue spécifiquement pour les étudiants, facilitant le stockage, le partage et la collaboration en temps réel sur des cours et du matériel scolaire.",
        gestiopass: "Gestiopass",
        gestiopassDescription: "Logiciel de stockage de mots de passe chiffré conçu pour fonctionner en local. Les données sont stockées localement sur l'appareil de l'utilisateur plutôt que sur un serveur distant. Cela permet de conserver le contrôle total sur leurs mots de passe et d'éviter de confier leurs informations sensibles à des tiers.",
        autosplit: "AutoSplit",
        autosplitDescription: "Conception d'un générateur de vidéos verticales en format 'Split-Screen' adapté aux contenus tels que les 'réels' sur les réseaux sociaux. Cette solution, accessible via un bot Discord, permet de convertir des vidéos YouTube à partir d'une simple URL. Elle intègre également une fonctionnalité de sous-titrage automatique, propulsée par Whisper d'OpenAI.",
        accessGithub: "Accédez à mon Github",
        ipsaRacingTeam: "IPSA Racing Team",
        ipsaRacingTeamDescription: "Association étudiante de conception d'une monoplace à propulsion électrique pour le championnat universitaire Formula Student.",
        systemLead: "Chef du pôle Système",
        systemLeadDetails: [
            "- Conceptualisation complète du système de contrôle moteur",
            "- Création de l'interface pilote/machine",
            "- Choix moteur et analyse des besoins",
            "- Dimensionnement du pack batterie"
        ],
        ipl: "Innovative Propulsion Laboratory - IPL",
        iplDescription: "Association étudiante de conception de moteur fusée.",
        engineBayMember: "Membre du pôle Baie moteur",
        engineBayDetails: [
            "- Responsable de la partie acquisition de données",
            "- Positionnement des différents capteurs",
            "- Analyse des besoins",
            "- Choix des capteurs"
        ],
    }
};

export default function Home() {
    const [inputValue, setInputValue] = useState("");
    const [terminalOutput, setTerminalOutput] = useState<string[]>([
        translations.en.welcome as string,
        translations.en.help as string,
        translations.en.scroll as string,
    ]);

    const [language, setLanguage] = useState<Language>("en");
    const inputRef = useRef<HTMLInputElement>(null);
    const [activeSectionIndex, setActiveSectionIndex] = useState(0);
    const sectionRefs = useRef<Array<HTMLElement | null>>([]);
    const mainRef = useRef<HTMLElement>(null);

    // Liste des sections pour la navigation
    const sections = [
        "home", 
        "whois", 
        "experience", 
        "formation", 
        "competence", 
        "project", 
        "associative", 
        "contact"
    ];

    // Observer pour le scroll snapping et l'indicateur de navigation active
    useEffect(() => {
        const observers: IntersectionObserver[] = [];
        const sectionElements = sections.map(id => document.getElementById(id));
        sectionRefs.current = sectionElements;

        // Détection du mode mobile
        const isMobile = window.innerWidth <= 768;
        
        sectionElements.forEach((section, index) => {
            if (!section) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveSectionIndex(index);
                    }
                },
                { 
                    // Threshold plus bas sur mobile pour une meilleure détection
                    threshold: isMobile ? 0.2 : 0.5,
                    // Marge d'intersection plus grande sur mobile
                    rootMargin: isMobile ? "-10% 0px" : "0px"
                }
            );

            observer.observe(section);
            observers.push(observer);
        });

        // Clean up
        return () => {
            observers.forEach((observer, index) => {
                if (sectionElements[index]) {
                    observer.unobserve(sectionElements[index]!);
                }
            });
        };
    }, []);

    // Fonction pour défiler vers une section spécifique
    const scrollToSection = (index: number) => {
        const section = sectionRefs.current[index];
        if (section) {
            // Utiliser la méthode scrollIntoView avec options pour une meilleure compatibilité mobile
            section.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            });
            
            // Sur mobile, ajouter un léger décalage pour compenser d'éventuels problèmes
            const isMobile = window.innerWidth <= 768;
            if (isMobile) {
                setTimeout(() => {
                    window.scrollTo({
                        top: section.offsetTop,
                        behavior: 'smooth'
                    });
                }, 100);
            }
        }
    };

    // Fonction pour défiler vers la section suivante
    const scrollToNextSection = () => {
        if (activeSectionIndex < sections.length - 1) {
            scrollToSection(activeSectionIndex + 1);
        }
    };

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
                output.push(translations[language].commands as string);
                break;
            case "clear":
                output = [
                    translations[language].welcome as string,
                    translations[language].help as string,
                    translations[language].scroll as string,
                ];
                break;
            case "about":
                output.push(translations[language].about as string);
                break;
            case "whois":
                scrollToSection(1); // Index de la section 'whois'
                break;
            case "experience":
                scrollToSection(2); // Index de la section 'experience'
                break;
            case "formation":
                scrollToSection(3); // Index de la section 'formation'
                break;
            case "competence":
                scrollToSection(4); // Index de la section 'competence'
                break;
            case "project":
                scrollToSection(5); // Index de la section 'project'
                break;
            case "contact":
                scrollToSection(7); // Index de la section 'contact'
                break;
            default:
                output.push(translations[language].unknownCommand as string);
        }

        setTerminalOutput(output);
        setInputValue("");
    };

    const toggleLanguage = () => {
        const newLanguage = language === "fr" ? "en" : "fr";
        setLanguage(newLanguage);
        setTerminalOutput([
            translations[newLanguage].welcome as string,
            translations[newLanguage].help as string,
            translations[newLanguage].scroll as string,
        ]);
    };

    useEffect(() => {
        // Add language detection logic
        const userLanguage = navigator.language.toLowerCase().startsWith('fr') ? 'fr' : 'en';
        if (language !== userLanguage) {
            setLanguage(userLanguage as Language);
            setTerminalOutput([
                translations[userLanguage as Language].welcome as string,
                translations[userLanguage as Language].help as string,
                translations[userLanguage as Language].scroll as string,
            ]);
        }
    }, []);

    function scrollCarousel(direction: number, carouselID: string) {
        const carousel = document.getElementById(carouselID);
        const scrollAmount = 328;  
        if (carousel) {
            carousel.scrollLeft += scrollAmount * direction;
        }
    }
    
    // Détection du swipe sur mobile
    useEffect(() => {
        let touchStartY = 0;
        let touchEndY = 0;
        
        const handleTouchStart = (e: TouchEvent) => {
            touchStartY = e.touches[0].clientY;
        };
        
        const handleTouchEnd = (e: TouchEvent) => {
            touchEndY = e.changedTouches[0].clientY;
            handleSwipe();
        };
        
        const handleSwipe = () => {
            // Seuil de distance pour considérer un swipe
            const minSwipeDistance = 100;
            
            // Calculer la distance du swipe
            const swipeDistance = touchStartY - touchEndY;
            
            // Si la distance du swipe est suffisante
            if (Math.abs(swipeDistance) > minSwipeDistance) {
                // Swipe vers le bas
                if (swipeDistance < 0 && activeSectionIndex > 0) {
                    scrollToSection(activeSectionIndex - 1);
                }
                // Swipe vers le haut
                else if (swipeDistance > 0 && activeSectionIndex < sections.length - 1) {
                    scrollToSection(activeSectionIndex + 1);
                }
            }
        };
        
        // Ajouter les écouteurs d'événements
        if (typeof window !== 'undefined') {
            const main = mainRef.current || document.querySelector('main');
            if (main) {
                main.addEventListener('touchstart', handleTouchStart);
                main.addEventListener('touchend', handleTouchEnd);
                
                return () => {
                    main.removeEventListener('touchstart', handleTouchStart);
                    main.removeEventListener('touchend', handleTouchEnd);
                };
            }
        }
    }, [activeSectionIndex]);

    return (
        <main ref={mainRef} className="h-screen overflow-y-scroll overflow-x-hidden w-full">
            {/* Navigation par points - maintenant visible sur mobile aussi */}
            <nav className="nav-dots">
                {sections.map((section, index) => (
                    <button 
                        key={section} 
                        className={`nav-dot ${activeSectionIndex === index ? 'active' : ''}`}
                        onClick={() => scrollToSection(index)}
                        aria-label={`Navigate to ${section} section`}
                    />
                ))}
            </nav>

            {/* Terminal Section */}
            <section id="home" className="h-screen snap-section flex flex-col justify-center px-4 sm:px-8 md:px-16 lg:px-24 max-w-7xl mx-auto pb-16 md:pb-32 relative" onClick={() => inputRef.current?.focus()}>
                {backgroundImages.map(img => React.cloneElement(img, {
                    className: `${img.props.className} tech-icon`
                }))}
                
                <div className="snap-start w-full terminal-container">
                    <div className="terminal-header">
                        <div className="terminal-dot bg-red-500"></div>
                        <div className="terminal-dot bg-yellow-500"></div>
                        <div className="terminal-dot bg-green-500"></div>
                        <span className="text-xs text-gray-400 ml-2">antoine@castel:~</span>
                    </div>
                    <div className="flex-1 overflow-y-auto font-mono p-6 relative">
                        {terminalOutput.map((line, index) => (
                            <div key={index} className="mb-1 text-gray-200">{line}</div>
                        ))}
                        <div className="flex items-center mt-1">
                            <span className="mr-2 text-gray-200">{'>'}</span>
                            <input
                                className="flex-1 bg-transparent focus:outline-none text-white"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleCommand()}
                                placeholder={language === "fr" ? "Entrez une commande..." : "Type a command..."}
                                ref={inputRef}
                                aria-label="Terminal command input"
                            />
                        </div>
                    </div>
                </div>
                
                <div className="fixed top-4 right-4 z-10">
                    <button
                        onClick={toggleLanguage}
                        className="btn group flex items-center justify-center"
                        aria-label={language === "fr" ? "Switch to English" : "Passer au français"}
                    >
                        {language === "fr" ? (
                            <>
                                <span role="img" aria-label="English Flag" className="sm:mr-2 transform transition-transform group-hover:scale-110">🇬🇧</span>
                                <span className="hidden sm:inline">English</span>
                            </>
                        ) : (
                            <>
                                <span role="img" aria-label="French Flag" className="sm:mr-2 transform transition-transform group-hover:scale-110">🇫🇷</span>
                                <span className="hidden sm:inline">Français</span>
                            </>
                        )}
                    </button>
                </div>

                {/* Scroll down indicator - uniquement sur la première section */}
                <div className="scroll-down-indicator" onClick={scrollToNextSection}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </section>

            {/* Profile Section */}
            <section id="whois" className="min-h-screen snap-section px-4 sm:px-8 md:px-16 lg:px-24 max-w-7xl mx-auto pb-16 md:pb-32 animate-fadeIn flex flex-col justify-center">
                {/* Profile Header */}
                <header className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 py-16 md:py-24">
                    <div className="relative">
                        <div className="absolute inset-0 bg-indigo-500/20 rounded-full blur-xl"></div>
                        <div className="w-36 h-36 md:w-48 md:h-48 lg:w-56 lg:h-56 relative">
                            <Image
                                className="rounded-full border-2 border-indigo-500/30 object-cover"
                                src="/Photo_Pro.jpg"
                                alt="Antoine CASTEL professional portrait"
                                width={256}
                                height={256}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                }}
                                priority
                            />
                        </div>
                    </div>
                    <div className="text-center md:text-left">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text">Antoine CASTEL</h1>
                        <p className="text-lg md:text-xl mt-2 text-gray-300">{translations[language].student}</p>
                    </div>
                </header>
            </section>
                
            {/* Experience Section */}
            <section id="experience" className="min-h-screen snap-section px-4 sm:px-8 md:px-16 lg:px-24 max-w-7xl mx-auto pb-16 md:pb-32 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-10 section-heading">{translations[language].experience}</h2>
                <div className="space-y-8">
                    <div className="card p-6 md:p-8">
                        <h3 className="text-xl md:text-2xl font-bold mb-3 gradient-text">{translations[language].eyTitle}</h3>
                        <p className="text-xs md:text-sm mb-4 font-bold text-gray-400">{translations[language].eyDuration}</p>
                        <p className="text-sm md:text-base mb-6 text-gray-300">{translations[language].eyDescription}</p>
                        <div className="card-inner space-y-2">
                            {(translations[language].eyDetails as string[]).map((detail, index) => (
                                <p key={index} className="text-sm md:text-base text-gray-200">{detail}</p>
                            ))}
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                        <div className="card p-6 md:p-8 h-full">
                            <h3 className="text-xl md:text-2xl font-bold mb-3 gradient-text">{translations[language].docaposteTitle}</h3>
                            <p className="text-xs md:text-sm mb-4 font-bold text-gray-400">{translations[language].docaposteDuration}</p>
                            <p className="text-sm md:text-base mb-6 text-gray-300">{translations[language].docaposteDescription}</p>
                            <div className="card-inner space-y-2">
                                {(translations[language].docaposteDetails as string[]).map((detail, index) => (
                                    <p key={index} className="text-sm md:text-base text-gray-200">{detail}</p>
                                ))}
                            </div>
                        </div>
                        
                        <div className="card p-6 md:p-8 h-full">
                            <h3 className="text-xl md:text-2xl font-bold mb-3 gradient-text">{translations[language].mpeTitle}</h3>
                            <p className="text-xs md:text-sm mb-4 font-bold text-gray-400">{translations[language].mpeDuration}</p>
                            <p className="text-sm md:text-base mb-6 text-gray-300">{translations[language].mpeDescription}</p>
                            <div className="card-inner space-y-2">
                                {(translations[language].mpeDetails as string[]).map((detail, index) => (
                                    <p key={index} className="text-sm md:text-base text-gray-200">{detail}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                
            {/* Education Section */}
            <section id="formation" className="min-h-screen snap-section px-4 sm:px-8 md:px-16 lg:px-24 max-w-7xl mx-auto pb-16 md:pb-32 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-10 section-heading">{translations[language].education}</h2>
                <div className="space-y-8">
                    <div className="card p-6 md:p-8">
                        <h3 className="text-xl md:text-2xl font-bold mb-3 gradient-text">{translations[language].csTitle}</h3>
                        <p className="text-xs md:text-sm mb-4 font-bold text-gray-400">{translations[language].csDuration}</p>
                        <p className="text-sm md:text-base mb-6 text-gray-300 font-medium">{translations[language].csDescription}</p>
                        <div className="card-inner">
                            <p className="font-bold mb-2 text-gray-200">{translations[language].csSubjects}</p>
                            <p className="text-sm md:text-base text-gray-300">{translations[language].csSubjectsList}</p>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                        <div className="card p-6 md:p-8 h-full">
                            <h3 className="text-xl md:text-2xl font-bold mb-3 gradient-text">{translations[language].csulbTitle}</h3>
                            <p className="text-xs md:text-sm mb-4 font-bold text-gray-400">{translations[language].csulbDuration}</p>
                            <p className="text-sm md:text-base mb-6 text-gray-300 font-medium">{translations[language].csulbDescription}</p>
                            <div className="space-y-4">
                                <div className="card-inner">
                                    <p className="font-bold mb-2 text-gray-200">{translations[language].csulbSubjects}</p>
                                    <p className="text-sm md:text-base text-gray-300">{translations[language].csulbSubjectsList}</p>
                                </div>
                                <div className="card-inner">
                                    <p className="font-bold mb-2 text-gray-200">{translations[language].csulbProjects}</p>
                                    <p className="text-sm md:text-base text-gray-300">{translations[language].csulbProjectsList}</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="card p-6 md:p-8 h-full">
                            <h3 className="text-xl md:text-2xl font-bold mb-3 gradient-text">{translations[language].ipsaTitle}</h3>
                            <p className="text-xs md:text-sm mb-4 font-bold text-gray-400">{translations[language].ipsaDuration}</p>
                            <p className="text-sm md:text-base mb-6 text-gray-300 font-medium">{translations[language].ipsaDescription}</p>
                            <div className="space-y-4">
                                <div className="card-inner">
                                    <p className="font-bold mb-2 text-gray-200">{translations[language].ipsaSubjects}</p>
                                    <p className="text-sm md:text-base text-gray-300">{translations[language].ipsaSubjectsList}</p>
                                </div>
                                <div className="card-inner">
                                    <p className="font-bold mb-2 text-gray-200">{translations[language].ipsaProjects}</p>
                                    <p className="text-sm md:text-base text-gray-300">{translations[language].ipsaProjectsList}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                
            {/* Skills Section */}
            <section id="competence" className="min-h-screen snap-section px-4 sm:px-8 md:px-16 lg:px-24 max-w-7xl mx-auto pb-16 md:pb-32 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-10 section-heading">{translations[language].skills}</h2>
                <div className="relative">
                    <button className="-mx-8 absolute left-0 top-11 md:top-16 transform -translate-y-1/2" onClick={() => scrollCarousel(-1, 'programming-carousel')}>
                        <svg width="30" height="30" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                        <polygon points="25,0 0,25 25,50 25,46 4,25 25,4" fill="white"/>
                        </svg>
                    </button>
                        <div className="flex overflow-x-auto hide-scroll-bar" id="programming-carousel">
                            <div className="min-w-[170px] md:min-w-[300px] max-h-[90px] md:max-h-[150px] flex-1 mr-4 md:mr-8 mb-8 bg-zinc-800/80 rounded-lg p-4 md:p-8 flex flex-col justify-center items-center hover:bg-zinc-800/90">
                                <h3 className="text-base md:text-xl font-bold mb-2">Python</h3>
                                <p className="text-sm mb-2 font-bold ">{translations[language].advanced}</p>
                            </div>
                            <div className="min-w-[170px] md:min-w-[300px] max-h-[90px] md:max-h-[150px] flex-1 mr-4 md:mr-8 mb-8 bg-zinc-800/80 rounded-lg p-4 md:p-8 flex flex-col justify-center items-center hover:bg-zinc-800/90">
                                <h3 className="text-base md:text-xl font-bold mb-2 ">C/C++</h3>
                                <p className="text-sm mb-2 font-bold">{translations[language].advanced}</p>
                            </div>
                            <div className="min-w-[170px] md:min-w-[300px] max-h-[90px] md:max-h-[150px] flex-1 mr-4 md:mr-8 mb-8 bg-zinc-800/80 rounded-lg p-4 md:p-8 flex flex-col justify-center items-center hover:bg-zinc-800/90">
                                <h3 className="text-base md:text-xl font-bold mb-2 ">Matlab</h3>
                                <p className="text-sm mb-2 font-bold">{translations[language].intermediate}</p>
                            </div>
                            <div className="min-w-[170px] md:min-w-[300px] max-h-[90px] md:max-h-[150px] flex-1 mr-4 md:mr-8 mb-8 bg-zinc-800/80 rounded-lg p-4 md:p-8 flex flex-col justify-center items-center hover:bg-zinc-800/90">
                                <h3 className="text-base md:text-xl font-bold mb-2 ">FPGA - VHDL</h3>
                                <p className="text-sm mb-2 font-bold">{translations[language].intermediate}</p>
                            </div>
                            <div className="min-w-[170px] md:min-w-[300px] max-h-[90px] md:max-h-[150px] flex-1 mr-4 md:mr-8 mb-8 bg-zinc-800/80 rounded-lg p-4 md:p-8 flex flex-col justify-center items-center hover:bg-zinc-800/90">
                                <h3 className="text-base md:text-xl font-bold mb-2 ">React - Javascript</h3>
                                <p className="text-sm mb-2 font-bold">{translations[language].intermediate}</p>
                            </div>
                            <div className="min-w-[170px] md:min-w-[300px] max-h-[90px] md:max-h-[150px] flex-1 mr-4 md:mr-8 mb-8 bg-zinc-800/80 rounded-lg p-4 md:p-8 flex flex-col justify-center items-center hover:bg-zinc-800/90">
                                <h3 className="text-base md:text-xl font-bold mb-2 ">HTML</h3>
                                <p className="text-sm mb-2 font-bold">{translations[language].intermediate}</p>
                            </div>
                            <div className="min-w-[170px] md:min-w-[300px] max-h-[90px] md:max-h-[150px] flex-1 mr-4 md:mr-8 mb-8 bg-zinc-800/80 rounded-lg p-4 md:p-8 flex flex-col justify-center items-center hover:bg-zinc-800/90">
                                <h3 className="text-base md:text-xl font-bold mb-2 ">R</h3>
                                <p className="text-sm mb-2 font-bold">{translations[language].intermediate}</p>
                            </div>
                        </div>
                    <button className="-mr-8 absolute right-0 top-11 md:top-16 transform -translate-y-1/2" onClick={() => scrollCarousel(1, 'programming-carousel')}>
                        <svg width="30" height="30" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                        <polygon points="25,0 50,25 25,50 25,46 46,25 25,4" fill="white"/>
                        </svg>
                    </button>
                </div>
                <div className="relative">
                    <button className="-mx-8 absolute left-0 top-11 md:top-16 transform -translate-y-1/2" onClick={() => scrollCarousel(-1, 'skills-carousel')}>
                        <svg width="30" height="30" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                        <polygon points="25,0 0,25 25,50 25,46 4,25 25,4" fill="white"/>
                        </svg>
                    </button>
                        <div className="flex overflow-x-auto hide-scroll-bar" id="skills-carousel">
                            <div className="min-w-[170px] md:min-w-[300px] max-h-[90px] md:max-h-[150px] flex-1 mr-4 md:mr-8 mb-8 bg-zinc-800/80 rounded-lg p-4 md:p-8 flex flex-col justify-center items-center hover:bg-zinc-800/90">
                                <h3 className="text-base md:text-xl font-bold mb-2 ">{translations[language].virtualization}</h3>
                                <p className="text-sm mb-2 font-bold">{translations[language].intermediate}</p>
                            </div>
                            <div className="min-w-[170px] md:min-w-[300px] max-h-[90px] md:max-h-[150px] flex-1 mr-4 md:mr-8 mb-8 bg-zinc-800/80 rounded-lg p-4 md:p-8 flex flex-col justify-center items-center hover:bg-zinc-800/90">
                                <h3 className="text-base md:text-xl font-bold mb-2 ">Linux (Kali,Ubuntu)</h3>
                                <p className="text-sm mb-2 font-bold">{translations[language].intermediate}</p>
                            </div>
                            <div className="min-w-[170px] md:min-w-[300px] max-h-[90px] md:max-h-[150px] flex-1 mr-4 md:mr-8 mb-8 bg-zinc-800/80 rounded-lg p-4 md:p-8 flex flex-col justify-center items-center hover:bg-zinc-800/90">
                                <h3 className="text-base md:text-xl font-bold mb-2 ">Windows 10/11</h3>
                                <p className="text-sm mb-2 font-bold">{translations[language].intermediate}</p>
                            </div>
                            <div className="min-w-[170px] md:min-w-[300px] max-h-[90px] md:max-h-[150px] flex-1 mr-4 md:mr-8 mb-8 bg-zinc-800/80 rounded-lg p-4 md:p-8 flex flex-col justify-center items-center hover:bg-zinc-800/90">
                                <h3 className="text-base md:text-xl font-bold mb-2 ">Google Cloud Platform</h3>
                                <p className="text-sm mb-2 font-bold">{translations[language].intermediate}</p>
                            </div>
                            <div className="min-w-[170px] md:min-w-[300px] max-h-[90px] md:max-h-[150px] flex-1 mr-4 md:mr-8 mb-8 bg-zinc-800/80 rounded-lg p-4 md:p-8 flex flex-col justify-center items-center hover:bg-zinc-800/90">
                                <h3 className="text-base md:text-xl font-bold mb-2 ">Powershell</h3>
                                <p className="text-sm mb-2 font-bold">{translations[language].intermediate}</p>
                            </div>
                            <div className="min-w-[170px] md:min-w-[300px] max-h-[90px] md:max-h-[150px] flex-1 mr-4 md:mr-8 mb-8 bg-zinc-800/80 rounded-lg p-4 md:p-8 flex flex-col justify-center items-center hover:bg-zinc-800/90">
                                <h3 className="text-base md:text-xl font-bold mb-2 ">GNS3</h3>
                                <p className="text-sm mb-2 font-bold">{translations[language].beginner}</p>
                            </div>
                            <div className="min-w-[170px] md:min-w-[300px] max-h-[90px] md:max-h-[150px] flex-1 mr-4 md:mr-8 mb-8 bg-zinc-800/80 rounded-lg p-4 md:p-8 flex flex-col justify-center items-center hover:bg-zinc-800/90">
                                <h3 className="text-base md:text-xl font-bold mb-2">{translations[language].office}</h3>
                                <p className="text-sm mb-2 font-bold ">{translations[language].advanced}</p>
                            </div>
                        </div>
                    <button className="-mr-8 absolute right-0 top-11 md:top-16 transform -translate-y-1/2" onClick={() => scrollCarousel(1, 'skills-carousel')}>
                        <svg width="30" height="30" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                        <polygon points="25,0 50,25 25,50 25,46 46,25 25,4" fill="white"/>
                        </svg>
                    </button>
                </div>

                {/* Languages, Interests, and Personal Info Section */}
                <div className="py-16 md:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="card p-6 md:p-8">
                            <h3 className="text-xl md:text-2xl font-bold mb-3 gradient-text">{translations[language].languages}</h3>
                            <div className="space-y-4">
                                <div className="card-inner">
                                    <p className="font-bold mb-2 text-gray-200">{translations[language].french}</p>
                                    <p className="text-sm md:text-base text-gray-300">{translations[language].frlevel}</p>
                                </div>
                                <div className="card-inner">
                                    <p className="font-bold mb-2 text-gray-200">{translations[language].english}</p>
                                    <p className="text-sm md:text-base text-gray-300">{translations[language].enlevel}</p>
                                </div>
                                <div className="card-inner">
                                    <p className="font-bold mb-2 text-gray-200">{translations[language].spanish}</p>
                                    <p className="text-sm md:text-base text-gray-300">{translations[language].splevel}</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="card p-6 md:p-8">
                            <h3 className="text-xl md:text-2xl font-bold mb-3 gradient-text">{translations[language].interests}</h3>
                            <div className="space-y-4">
                                <div className="card-inner">
                                    <p className="text-sm md:text-base text-gray-300">{translations[language].ctf}</p>
                                </div>
                                <div className="card-inner">
                                    <p className="text-sm md:text-base text-gray-300">{translations[language].drone}</p>
                                </div>
                                <div className="card-inner">
                                    <p className="text-sm md:text-base text-gray-300">{translations[language].rowing}</p>
                                </div>
                                <div className="card-inner">
                                    <p className="text-sm md:text-base text-gray-300">{translations[language].sailing}</p>
                                </div>
                                <div className="card-inner">
                                    <p className="text-sm md:text-base text-gray-300">{translations[language].carRenovation}</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="card p-6 md:p-8">
                            <h3 className="text-xl md:text-2xl font-bold mb-3 gradient-text">{translations[language].personalInfo}</h3>
                            <div className="space-y-4">
                                <div className="card-inner">
                                    <p className="font-bold mb-2 text-gray-200">{translations[language].address}:</p>
                                    <p className="text-sm md:text-base text-gray-300">Paris 14ème</p>
                                </div>
                                <div className="card-inner">
                                    <p className="font-bold mb-2 text-gray-200">{translations[language].transportation}:</p>
                                    <p className="text-sm md:text-base text-gray-300">- {translations[language].license}</p>
                                    <p className="text-sm md:text-base text-gray-300">- {translations[language].car}</p>
                                    <p className="text-sm md:text-base text-gray-300">- {translations[language].boatLicense}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Projects Section */}
            <section id="project" className="min-h-screen snap-section px-4 sm:px-8 md:px-16 lg:px-24 max-w-7xl mx-auto pb-16 md:pb-32 animate-fadeIn flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-10 section-heading">{translations[language].personalProjects}</h2>
                <div className="space-y-8">
                    <a href="https://github.com/antoinecstl/Sharips-Deploy-Next13" target="_blank" rel="noopener noreferrer" className="block">
                        <div className="card p-6 md:p-8 relative hover:scale-95 transition-transform">
                            <h3 className="text-xl md:text-2xl font-bold mb-3 gradient-text">{translations[language].sharips}</h3>
                            <img className="absolute top-0 right-0 m-4" src="git.svg" alt="Github" width="25" height="25" />
                            <p className="text-sm md:text-base text-gray-300">{translations[language].sharipsDescription}</p>
                        </div>
                    </a>
                    
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                        <a href="https://github.com/antoinecstl/Gestiopass" target="_blank" rel="noopener noreferrer" className="block h-full">
                            <div className="card p-6 md:p-8 relative hover:scale-95 transition-transform h-full">
                                <h3 className="text-xl md:text-2xl font-bold mb-3 gradient-text">{translations[language].gestiopass}</h3>
                                <img className="absolute top-0 right-0 m-4" src="git.svg" alt="Github" width="25" height="25" />
                                <p className="text-sm md:text-base text-gray-300">{translations[language].gestiopassDescription}</p>
                            </div>
                        </a>
                        
                        <a href="https://github.com/antoinecstl/AutoSplit" target="_blank" rel="noopener noreferrer" className="block h-full">
                            <div className="card p-6 md:p-8 relative hover:scale-95 transition-transform h-full">
                                <h3 className="text-xl md:text-2xl font-bold mb-3 gradient-text">{translations[language].autosplit}</h3>
                                <img className="absolute top-0 right-0 m-4" src="git.svg" alt="Github" width="25" height="25" />
                                <p className="text-sm md:text-base text-gray-300">{translations[language].autosplitDescription}</p>
                            </div>
                        </a>
                    </div>
                    
                    <a href="https://github.com/antoinecstl" target="_blank" rel="noopener noreferrer" className="block text-center mt-10">
                        <div className="flex items-center justify-center hover:scale-105 transition-transform">
                            <h2 className="text-xl md:text-2xl font-semibold mr-4 gradient-text">{translations[language].accessGithub}</h2>
                            <img src="git.svg" alt="Github" width="36" height="36" />
                        </div>
                    </a>
                </div>
            </section>

            {/* Associative Projects Section */}
            <section id="associative" className="min-h-screen snap-section px-4 sm:px-8 md:px-16 lg:px-24 max-w-7xl mx-auto pb-16 md:pb-32 animate-fadeIn flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-10 section-heading">{translations[language].associativeProjects}</h2>
                <div className="space-y-8">
                    <a href="https://www.linkedin.com/company/ipsa-racing-team/" target="_blank" rel="noopener noreferrer" className="block">
                        <div className="card p-6 md:p-8 relative hover:scale-95 transition-transform">
                            <h3 className="text-xl md:text-2xl font-bold mb-3 gradient-text">{translations[language].ipsaRacingTeam}</h3>
                            <img className="absolute top-0 right-0 m-4" src="linkedin.svg" alt="LinkedIn" width="30" height="30" />
                            <p className="text-xs md:text-sm mb-4 font-bold text-gray-400">Septembre 2022 - Aujourd'hui</p>
                            <p className="text-sm md:text-base mb-6 text-gray-300">{translations[language].ipsaRacingTeamDescription}</p>
                            <p className="text-sm md:text-base font-semibold text-gray-200">{translations[language].systemLead}</p>
                            <div className="card-inner space-y-2">
                                {(translations[language].systemLeadDetails as string[]).map((detail, index) => (
                                    <p key={index} className="text-sm md:text-base text-gray-200">{detail}</p>
                                ))}
                            </div>
                        </div>
                    </a>
                    
                    <a href="https://www.linkedin.com/company/innovative-propulsion-laboratory/" target="_blank" rel="noopener noreferrer" className="block">
                        <div className="card p-6 md:p-8 relative hover:scale-95 transition-transform">
                            <h3 className="text-xl md:text-2xl font-bold mb-3 gradient-text">{translations[language].ipl}</h3>
                            <img className="absolute top-0 right-0 m-4" src="linkedin.svg" alt="LinkedIn" width="30" height="30" />
                            <p className="text-xs md:text-sm mb-4 font-bold text-gray-400">Septembre 2022 - Aujourd'hui</p>
                            <p className="text-sm md:text-base mb-6 text-gray-300">{translations[language].iplDescription}</p>
                            <p className="text-sm md:text-base font-semibold text-gray-200">{translations[language].engineBayMember}</p>
                            <div className="card-inner space-y-2">
                                {(translations[language].engineBayDetails as string[]).map((detail, index) => (
                                    <p key={index} className="text-sm md:text-base text-gray-200">{detail}</p>
                                ))}
                            </div>
                        </div>
                    </a>
                </div>
            </section>

            {/* Contact Section */}
            <footer id="contact" className="min-h-screen snap-section px-4 sm:px-8 md:px-16 lg:px-24 max-w-7xl mx-auto pb-16 md:pb-32 animate-fadeIn flex flex-col justify-center relative">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-10 section-heading">{translations[language].contactMe}</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="flex items-center justify-center space-x-4">
                        <a href="mailto:antoine.castel@ipsa.fr" className="hover:scale-95 transition-transform">
                            <img src="mail.svg" alt="Email" width="36" height="36" />
                        </a>
                        <a href="mailto:antoine.castel@student-cs.fr" className="text-sm md:text-base text-gray-300">antoine.castel@student-cs.fr</a>
                    </div>
                    <div className="flex items-center justify-center space-x-4">
                        <img src="phone.svg" alt="Phone" width="32" height="32" />
                        <p className="text-sm md:text-base text-gray-300">+33 6 89 91 58 00</p>
                    </div>
                    <div className="flex items-center justify-center space-x-4">
                        <a href="https://www.linkedin.com/in/antoinecastel/" target="_blank" rel="noopener noreferrer" className="hover:scale-95 transition-transform">
                            <img src="linkedin.svg" alt="LinkedIn" width="35" height="35" />
                        </a>
                        <a href="https://www.linkedin.com/in/antoinecastel/" target="_blank" rel="noopener noreferrer" className="text-sm md:text-base text-gray-300">LinkedIn</a>
                    </div>
                </div>
                
                {/* Scroll to top button - now absolutely positioned */}
                <div className="absolute bottom-16 left-0 right-0 flex justify-center">
                    <button 
                        onClick={() => scrollToSection(0)}
                        className="btn inline-flex items-center justify-center px-6 py-3 bg-zinc-800/90 hover:bg-zinc-700/90 rounded-full shadow-lg transition-transform hover:scale-105"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                            <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {language === "fr" ? "Retour en haut" : "Back to top"}
                    </button>
                </div>
            </footer>
        </main>
    );
}
