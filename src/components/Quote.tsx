export const Quote = () => {
    return (
        <section className="bg-gray-100 py-12" id="signup">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full md:w-5/6 lg:w-2/3 text-center">
                        {/* Replace with your icon */}
                        {/* <i className="far fa-paper-plane text-2xl mb-2 text-white"></i> */}
                        <h2 className="text-black font-semibold text-2xl mb-5">Envoyez-nous votre demande de &nbsp;
                            <span className="before:shadow-md before:block before:absolute before:-inset-1 before:-skew-y-6 before:bg-purple-500 relative inline-block">
                                <span className="relative text-white">devis</span>
                            </span>
                        </h2>
                        <form className="space-y-6" id="contactForm" method="POST" action="/scripts/process-form.php">
                            <div className="flex">
                                <div className="w-full md:w-1/4">
                                    <select id="gender" name="gender" className="form-select w-full p-2" required>
                                        <option value="M.">M.</option>
                                        <option value="Mme.">Mme.</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-2">
                                <div className="w-full md:w-1/2 px-2">
                                    <input className="form-input w-full p-2" id="name" name="name" type="text" placeholder="Nom*" aria-label="Votre nom..." required />
                                </div>
                                <div className="w-full md:w-1/2 px-2">
                                    <input className="form-input w-full p-2" type="text" id="lastname" name="lastname" placeholder="Prénom*" required />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-2">
                                <div className="w-full md:w-1/2 px-2">
                                    <input className="form-input w-full p-2" id="email" name="email" type="email" placeholder="Email*" aria-label="Votre email..." required />
                                </div>
                                <div className="w-full md:w-1/2 px-2">
                                    <input type="tel" className="form-input w-full p-2" id="phone" name="phone" placeholder="Téléphone" />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-2">
                                <div className="w-full md:w-1/2 px-2">
                                    <input type="text" className="form-input w-full p-2" id="company" name="company" placeholder="Société*" />
                                </div>
                                <div className="w-full md:w-1/2 px-2">
                                    <input type="text" className="form-input w-full p-2" id="info" name="info" placeholder="Comment nous avez-vous connu ?" />
                                </div>
                            </div>
                            <div className="flex -mx-2">
                                <div className="w-full px-2">
                                    <textarea className="form-textarea w-full p-2" id="message" name="message" placeholder="Votre message..." required></textarea>
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-2">
                                <div className="w-full md:w-1/2 px-2 flex items-center">
                                    <label htmlFor="fileUpload" className="text-sm w-full p-2 border rounded">
                                        Pièce jointe (25Mo max.)
                                    </label>
                                    <input id="fileUpload" type="file" name="fileUpload" className="hidden" />
                                </div>
                                {/* Pour le script Google Recaptcha, vous devrez le charger différemment.
                                <div className="w-full md:w-1/2 px-2">
                                    <div className="g-recaptcha" data-sitekey="6LcUZxYnAAAAAA4X_RsCGTFn1-AowANmANc63KkA"></div>
                                </div> */}
                            </div>
                            <div className="text-center animate-pulse animate-infinite animate-ease-out">
                                <button className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 focus:outline-none focus:bg-blue-700" type="submit">Envoyer</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
