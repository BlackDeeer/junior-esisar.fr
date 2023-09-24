import { TypeAnimation } from 'react-type-animation';

export const AboutSection = () => (
    <div className="flex flex-col items-center justify-center">
        <div className="text-center p-16 bg-white w-3/4">
            <h1 className="text-2xl font-bold mb-8">À propos de nous</h1>

            <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed once, initially
                    'Junior Esisar, la Junior-Entreprise technique pour des projets de développement web',
                    1000,
                    "Junior Esisar, la Junior-Entreprise technique pour des projets d'administration système",
                    1000,
                    "Junior Esisar, la Junior-Entreprise technique pour des projets de pentesting",
                    1000,
                    "Junior Esisar, la Junior-Entreprise technique pour des projets de développement mobile",
                    1000,
                ]}
                speed={80}
                deletionSpeed={80}
                className="text-xl"
                repeat={Infinity}
            />

            <p className="text-lg mb-4 mt-4">
            Depuis sa création en 1995, les étudiants ont bénéficié de l'expertise technique de l'école &nbsp;
                <span className="before:shadow-md before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-purple-esisar-500 relative inline-block z-1000">
                    <span className="relative text-white">Grenoble-INP ESISAR</span>
                </span>. 
            </p>
            <p className="text-lg">
            Nous nous améliorons sans cesse au fil des années afin de vous mettre en relation avec nos meilleurs étudiants pour réaliser vos projets. Nos 26 membres sont passionnés, engagés et votre satisfaction est le cœur de nos préoccupations.
            </p>
        </div>
    </div>
);
