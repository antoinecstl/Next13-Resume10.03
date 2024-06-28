 export default function Cv() {
    return (
        <main className="flex flex-col min-h-screen p-8 md:p-24 bg-gradient-to-t from-gray-900 to-black">  
       
            {/* Section Projets Personnels */}
            <section className="mb-16">
                <h2 className="text-3xl font-semibold mb-4">Projets Personnels</h2>
                <div className="mb-8">
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
                        <div className="bg-zinc-800/60 rounded-lg p-8 hover:bg-zinc-800/80 relative hover:scale-95 transition-transform hover:border h-full">
                            <h3 className="text-2xl font-bold mb-2">Gestiopass</h3>
                            <img className="absolute top-0 right-0 m-4" src="git.svg" alt="Github" width="25" height="25" />
                            <p>Logiciel de stockage de mots de passe chiffré conçu pour fonctionner en local. Les données sont stockées localement sur l'appareil de l'utilisateur plutôt que sur un serveur distant. Cela permet de conserver le contrôle total sur leurs mots de passe et d'éviter de confier leurs informations sensibles à des tiers. </p>
                        </div>
                    </a>
                    <a href="https://github.com/antoinecstl/AutoSplit" target="_blank" rel="noopener noreferrer" className="w-full lg:w-1/2">
                        <div className="bg-zinc-800/60 rounded-lg p-8 hover:bg-zinc-800/80 relative hover:scale-95 transition-transform hover:border h-full">
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
            <section className="mb-12">
                <h2 className="text-3xl font-semibold mb-4">Projets Associatifs</h2>
                <div className='flex flex-col space-y-8'>
                    <a href="https://www.linkedin.com/company/ipsa-racing-team/" target="_blank" rel="noopener noreferrer">
                    <div className="focus:outline-none bg-zinc-800/60 rounded-lg p-8 relative hover:bg-zinc-800/80 hover:scale-95 transition-transform hover:border">
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
                    <div className="focus:outline-none bg-zinc-800/60 rounded-lg p-8 relative hover:bg-zinc-800/80 hover:scale-95 transition-transform hover:border">
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
    )
}
