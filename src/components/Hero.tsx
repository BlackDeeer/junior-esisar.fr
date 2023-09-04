import { AiOutlineFilePdf } from 'react-icons/ai'

export const HeroSection = () => {
    return (
        <div className="z-50 relative overflow-hidden">
            <img src="/images/esisar.jpg" alt="Esisar background" style={{ height: '350px', width: '100%', objectFit: 'cover' }} />

            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden" style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}>
                <div className="flex h-full items-center justify-center">
                    <div className="px-6 text-center text-white md:px-12">
                        <h1 className="mb-6 text-5xl font-bold text-purple-esisar-400">Junior Esisar</h1>
                        <h3 className="mb-8 text-xl font-bold text-purple-esisar-300">Prenez de l’avance en réalisant vos projets d’aujourd’hui avec les ingénieurs de demain !</h3>
                        <button
                            type="button"
                            className="inline-flex items-center rounded px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-purple-esisar-300 hover:text-white focus:outline-none focus:ring-0 active:bg-purple-esisar"
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            <AiOutlineFilePdf size={24}/>  &nbsp; Plaquette commerciale
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}
