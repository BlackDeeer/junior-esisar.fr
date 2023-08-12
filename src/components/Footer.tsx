export const Footer = () => {
    return(
        <footer className="bg-gray-100 py-3">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2">
                        <img src="images/logo_junior.png" alt="Logo" className="w-20" />
                        <p className="mt-4">
                            Grenoble INP - Esisar<br/>50 rue Barthélémy de Laffemas CS 10054<br/>26902 Valence Cedex 09 - France
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 text-right mt-4 md:mt-0">
                        <a href="mailto:contact@yourmail.fr" target="_blank" rel="noreferrer">
                            <img src="images/mail_icon.svg" alt="Mail" className="w-10 inline-block mx-1" />
                        </a>
                        <a href="https://www.linkedin.com/company/your-company/" target="_blank" rel="noreferrer">
                            <img src="images/linkedin_icon.svg" alt="LinkedIn" className="w-7 inline-block mx-1" />
                        </a>
                        <a href="https://www.facebook.com/your-facebook-page/" target="_blank" rel="noreferrer">
                            <img src="images/facebook_icon.svg" alt="Facebook" className="w-7 inline-block mx-1" />
                        </a>
                        <a href="https://twitter.com/your-twitter-handle" target="_blank" rel="noreferrer">
                            <img src="images/twitter_icon.svg" alt="Twitter" className="w-7 inline-block mx-1" />
                        </a>
                        <div className="mt-10 space-x-2">
                            <a href="your-commercial-brochure.pdf" className="text-gray-600 hover:underline">Plaquette commerciale</a> |
                            <a href="/mentions-legales" className="font-bold text-gray-600 hover:underline">Mentions légales</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
