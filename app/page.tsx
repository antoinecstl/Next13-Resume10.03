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
        top = Math.random() * 100;
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
    return (
        <div className="bg-gradient-to-t from-gray-900 to-black flex flex-col items-center justify-center min-h-screen text-white p-4">
            {backgroundImages}
            <div className="text-center mx-auto px-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">Bienvenue sur le site d'Antoine CASTEL.</h1>
                <p className="text-lg sm:text-xl md:text-2xl mb-4">
                    Étudiant en architecture des systèmes informatiques à Centrale Supélec.
                </p>
            </div>
        </div>
    );
}
