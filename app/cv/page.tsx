"use client"
import RootLayout from '../layout';
import Image from 'next/image';

export default function Cv() {

    function scrollCarousel(direction: number, carouselID: string) {
        const carousel = document.getElementById(carouselID);
        const scrollAmount = 328;  
        if (carousel) {
            carousel.scrollLeft += scrollAmount * direction;
        }
    }
    
    return (
        <main className="flex flex-col min-h-screen p-8 md:p-24 bg-gradient-to-t from-gray-900 to-black">
            <header className="flex items-center justify-evenly mb-12">
                <div className='mr-4'>
                    <h1 className="text-2xl md:text-3xl font-bold">Antoine CASTEL</h1>
                    <p className="text-base md:text-xl">Etudiant en quatrième année filière Signaux et Systèmes à l'IPSA</p>
                </div>
                <div style={{ width: '250px', height: '250px' }}>
                <img
                    className="rounded-full border-2 border-zinc-900"
                    src="/myhead.jpg"
                    alt="Antoine CASTEL"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }}
                />
            </div>
            </header>
            
            {/* Section À propos */}
            <section className="mb-12">
                <h2 className="text-2xl md:text3-xl font-semibold mb-2 md:mb-4">À propos de moi</h2>
                <div className='text-sm md:text-base'>
                    <p className='italic'>20 ans, sérieux, motivé et polyvalent.</p>
                    <p>Passionné d'informatique et de cybersécurité, je vise une carrière dans ce secteur.</p>
                    <p>Actuellement à la recherche d'un stage en Cybersécurité/Informatique d'une durée minimale de 10 semaines.</p>
                </div>
            </section>
            
            {/* Section Expérience */}
            <section className="mb-8 md:mb-12">
                <h2 className="text-2xl md:text3-xl font-semibold mb-5">Expérience</h2>
                <div className="flex flex-col lg:flex-row items-stretch space-y-8 lg:space-y-0 lg:space-x-8">
                    <div className="flex-1 bg-zinc-800/60 rounded-lg p-4 md:p-8 flex flex-col justify-center items-center hover:bg-zinc-800/80">
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
                    <div className="flex-1 bg-zinc-800/60 rounded-lg p-4 md:p-8 flex flex-col justify-center items-center hover:bg-zinc-800/80">
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
            </section>
            
            {/* Section Éducation */}
            <section className="mb-8 md:mb-12">
                <h2 className="text-2xl md:text3-xl font-semibold mb-4">Formation</h2>
                <div className='flex flex-col lg:flex-row items-stretch space-y-8 lg:space-y-0 lg:space-x-8'>
                    <div className="flex-1 bg-zinc-800/60 rounded-lg p-4 md:p-8 hover:bg-zinc-800/80 flex justify-center">
                        <div className="flex flex-col justify-center w-full">
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
                        <div className="flex flex-col justify-center w-full">
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
            </section>
            
            
            <section className="mb-8 md:mb-12">
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
            </section>

            {/* Section Langues-Centres-InfoPerso */}
            <section className="mb-12">
                <div className="flex flex-col lg:flex-row items-stretch space-y-8 lg:space-y-0 lg:space-x-8">
                    <div className="flex-1 bg-zinc-800/60 rounded-lg p-4 md:p-8 hover:bg-zinc-800/80 flex justify-center">
                        <div className='flex flex-col justify-center w-full'>
                            <h3 className="text-xl md:text-2xl font-bold mb-2">Langues</h3>
                            <div className='flex flex-col justify-center items-start bg-zinc-800/80 hover:bg-zinc-950/20 rounded-lg p-3 mb-2'>
                                <a className='font-bold mb-2'>Français :</a>
                                <p>Langue maternelle</p>
                            </div>
                            <div className='flex flex-col justify-center items-start bg-zinc-800/80 hover:bg-zinc-950/20 rounded-lg p-3 mb-2'>
                                <a className='font-bold mb-2'>Anglais :</a>
                                <p>Fluent - Toeic (945 points)</p>
                            </div>
                            <div className='flex flex-col justify-center items-start bg-zinc-800/80 hover:bg-zinc-950/20 rounded-lg p-3 mb-2'>
                                <a className='font-bold mb-2'>Espagnol :</a>
                                <p>Niveau B1</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 bg-zinc-800/60 rounded-lg p-4 md:p-8 hover:bg-zinc-800/80 flex justify-center">
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
                    <div className="flex-1 bg-zinc-800/60 rounded-lg p-4 md:p-8 hover:bg-zinc-800/80 flex justify-center">
                        <div className='flex flex-col justify-center w-full'>
                            <h3 className="text-xl md:text-2xl font-bold mb-2">Informations Personnelles</h3>
                            <div className='flex flex-col justify-center items-start bg-zinc-800/80 hover:bg-zinc-950/20 rounded-lg p-3 mb-2'>
                                <a className='font-bold mb-2'>Adresse :</a>
                                <p>16 Rue Georges Bizet, 91230, Montgeron</p>
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
            </section>

            
            
            {/* Pied de page - Informations de contact */}
            <footer>
                <h2 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-16">Contactez-moi :</h2>
                <div className='flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-8'>
                    <div className="flex-1 flex justify-center items-center -mb-1 lg:mb-0">
                            <img className="mr-2" src="mail.svg" alt="Email" width="36" height="36"/>
                            <p> antoine.castel@ipsa.fr</p>
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
    )
}
