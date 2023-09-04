import { BiLogoLinkedin } from 'react-icons/bi';
import { Fade } from "react-awesome-reveal";

export const Team = () => {

    const team = [
        {
            avatar: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
            name: "Martiana dialan",
            title: "Product designer",
            linkedin: "javascript:void(0)",
        },
        {
            avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
            name: "Micheal colorand",
            title: "Software engineer",
            linkedin: "javascript:void(0)",
        },
        {
            avatar: "https://randomuser.me/api/portraits/women/79.jpg",
            name: "Brown Luis",
            title: "Full stack engineer",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
            linkedin: "javascript:void(0)",
            twitter: "javascript:void(0)",
        },
        {
            avatar: "https://randomuser.me/api/portraits/women/63.jpg",
            name: "Lysa sandiago",
            title: "Head of designers",
            linkedin: "javascript:void(0)",
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/86.jpg",
            name: "Daniel martin",
            title: "Product designer",
            linkedin: "javascript:void(0)",
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/46.jpg",
            name: "Vicky tanson",
            title: "Product manager",
            linkedin: "javascript:void(0)",
        },
    ]

    return (
        <section className="py-14">
            <div className="mx-auto px-4 md:px-8">

                {/* Photo de l'équipe */}
                <div className="w-full">
                    <img src="images/equipe.jpg" alt="Équipe" style={{ width: '100%' }} />
                </div>

                {/* La présidence */}
                <Fade>
                    <div className="max-w-4xl mx-auto mt-12 flex flex-col md:flex-row">

                        <div className="flex-1 mt-6 md:mt-0 md:mr-2">
                            <img src={team[0].avatar} alt={team[0].name} className="w-48 h-48" />
                            <h4 className="mt-2">{team[0].name}</h4>
                            <p className="text-sm">{team[0].title}</p>
                            <a href={team[0].linkedin}><BiLogoLinkedin size={24} /></a>
                        </div>
                        <div className="flex-1 mt-6 md:mt-0 md:mr-2">
                            <img src={team[1].avatar} alt={team[1].name} className="w-48 h-48" />
                            <h4 className="mt-2">{team[1].name}</h4>
                            <p className="text-sm">{team[1].title}</p>
                            <a href={team[1].linkedin}><BiLogoLinkedin size={24} /></a>
                        </div>
                        <div className="flex-1 mt-6 md:mt-0 md:ml-2">
                            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">La présidence</h3>
                            <p><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </Fade>


                {/* La trésorerie */}
                <Fade>
                    <div className="max-w-4xl mx-auto mt-12 flex flex-col md:flex-row">
                        <div className="flex-1 mt-6 mr-20 md:mt-0 md:ml-2">
                            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">La trésorerie</h3>
                            <p><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Elit duis tristique sollicitudin nibh. Justo eget magna fermentum iaculis eu. Condimentum id venenatis a condimentum vitae. Lobortis elementum nibh tellus molestie nunc non blandit massa enim.</p>
                        </div>
                        <div className="flex-1 mt-6 md:mt-0 md:mr-2">
                            <img src={team[2].avatar} alt={team[2].name} className="w-48 h-48" />
                            <h4 className="mt-2">{team[2].name}</h4>
                            <p className="text-sm">{team[2].title}</p>
                            <a href={team[2].linkedin}><BiLogoLinkedin size={24} /></a>
                        </div>
                        <div className="flex-1 mt-6 md:mt-0 md:mr-2">
                            <img src={team[3].avatar} alt={team[3].name} className="w-48 h-48" />
                            <h4 className="mt-2">{team[3].name}</h4>
                            <p className="text-sm">{team[3].title}</p>
                            <a href={team[3].linkedin}><BiLogoLinkedin size={24} /></a>
                        </div>
                    </div>
                </Fade>
                {/* Le pole commercial */}
                <Fade>
                    <div className="max-w-4xl mx-auto mt-12 flex flex-col md:flex-row">
                        <div className="flex-1 mt-6 md:mt-0">
                            <img src={team[4].avatar} alt={team[4].name} className="w-48 h-48" />
                            <h4 className="mt-2">{team[4].name}</h4>
                            <p className="text-sm">{team[4].title}</p>
                            <a href={team[4].linkedin}><BiLogoLinkedin size={24} /></a>
                        </div>
                        <div className="flex-1 md:ml-6">
                            <img src={team[5].avatar} alt={team[5].name} className="w-48 h-48" />
                            <h4 className="mt-2">{team[5].name}</h4>
                            <p className="text-sm">{team[5].title}</p>
                            <a href={team[5].linkedin}><BiLogoLinkedin size={24} /></a>
                        </div>
                        <div className="flex-1 mt-6 md:mt-0 md:ml-2">
                            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">Le pole commercial</h3>
                            <p><br/>Turpis nunc eget lorem dolor sed viverra ipsum nunc. Consequat interdum varius sit amet. Ipsum a arcu cursus vitae congue mauris rhoncus. Mi eget mauris pharetra et ultrices. Sit amet risus nullam eget felis eget nunc. Integer vitae justo eget magna fermentum iaculis eu non diam. Ultrices neque ornare aenean euismod elementum nisi. Etiam tempor orci eu lobortis elementum nibh.</p>
                        </div>
                    </div>
                </Fade>
            </div>
        </section>
    )
}