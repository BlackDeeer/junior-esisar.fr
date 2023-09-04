
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";
import { useRef } from 'react';


export const Quote = () => {

    type FormData = {
        name: string;
        lastname: string;
        gender: string;
        email: string;
        phone: string;
        company: string;
        info: string;
        message: string;
    };

    const { register, handleSubmit, formState: { errors } } = useForm();

    const recaptchaRef = useRef<ReCAPTCHA>(null);

    const onSubmit = async (data: FormData) => {
        try {


            if (!recaptchaRef.current?.getValue()) {
                alert('Veuillez confirmer que vous n\'êtes pas un robot.');
                return;
            }


            const result = await emailjs.send(
                'service_m7z1dty', // Remplacez par votre ID de service EmailJS
                'template_7q2vc54', // Remplacez par votre ID de modèle EmailJS
                {
                    name: data.name,
                    lastname: data.lastname,
                    gender: data.gender,
                    email: data.email,
                    phone: data.phone,
                    company: data.company,
                    info: data.info,
                    message: data.message
                },
                'aT1AQajTpeTKRyMHD' // Remplacez par votre ID utilisateur EmailJS (si nécessaire)
            );
            
            if (result.text === 'OK') {
                alert('Devis envoyé !');
            } else {
                throw new Error('Erreur lors de l\'envoi du message');
            }
        } catch (error) {
            console.error('Erreur lors de l\'envoi du message:', error);
            alert('Erreur lors de l\'envoi du message. Veuillez réessayer.');
        }
    };

    return (
        <section className="bg-white py-12" id="signup">
            <script src="https://www.google.com/recaptcha/api.js" async defer></script>
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full md:w-5/6 lg:w-2/3 text-center">
                        {/* Replace with your icon */}
                        {/* <i className="far fa-paper-plane text-2xl mb-2 text-white"></i> */}
                        <h2 className="text-black font-semibold text-2xl mb-5">Envoyez-nous votre demande de &nbsp;
                            <span className="before:shadow-md before:block before:absolute before:-inset-1 before:-skew-y-6 before:bg-purple-esisar-500 relative inline-block z-1000">
                                <span className="relative text-white">devis</span>
                            </span>
                        </h2>
                        <form className="space-y-6" id="contactForm" onSubmit={handleSubmit(onSubmit as any)}>

                            <div className="flex">
                                <div className="w-full md:w-1/4">
                                    <select 
                                        id="gender" 
                                        className="form-select w-full p-2" 
                                        required 
                                        {...register("gender", { required: 'Le champ genre est requis' })}>
                                        <option value="M.">M.</option>
                                        <option value="Mme.">Mme.</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-2">
                                <div className="w-full md:w-1/2 px-2">
                                    <input 
                                        className="form-input w-full p-2" 
                                        id="name" 
                                        type="text" 
                                        placeholder="Nom*" 
                                        aria-label="Votre nom..." 
                                        required 
                                        {...register("name", { required: 'Le champ nom est requis' })}
                                    />
                                    {errors.name && <span>{(errors.name as any).message}</span>}
                                </div>
                                <div className="w-full md:w-1/2 px-2">
                                    <input 
                                        className="form-input w-full p-2" 
                                        id="lastname"  
                                        type="text" 
                                        placeholder="Prénom*" 
                                        aria-label="Votre prénom..." 
                                        required 
                                        {...register("lastname", { required: 'Le champ prénom est requis' })}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-2">
                                <div className="w-full md:w-1/2 px-2">
                                <input 
                                    className="form-input w-full p-2" 
                                    id="email" 
                                    type="email" 
                                    placeholder="Email*" 
                                    aria-label="Votre email..." 
                                    required 
                                    {...register("email", { required: 'Le champ email est requis' })}
                                />
                                </div>
                                <div className="w-full md:w-1/2 px-2">
                                    <input 
                                        className="form-input w-full p-2" 
                                        id="phone" 
                                        type="tel" 
                                        placeholder="Téléphone"
                                        aria-label="Votre numéro de téléphone..."  
                                        {...register("phone")}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-2">
                                <div className="w-full md:w-1/2 px-2">
                                    <input 
                                        className="form-input w-full p-2" 
                                        id="company" 
                                        type="text" 
                                        placeholder="Société*" 
                                        aria-label="Votre société..." 
                                        required 
                                        {...register("company", { required: 'Le champ société est requis' })}
                                    />
                                </div>
                                <div className="w-full md:w-1/2 px-2">
                                    <input 
                                        className="form-input w-full p-2" 
                                        id="info" 
                                        type="text" 
                                        placeholder="Comment nous avez-vous connu ?" 
                                        aria-label="Comment nous avez-vous connu ?" 
                                        {...register("info")}
                                    />
                                </div>
                            </div>
                            <div className="flex -mx-2">
                                <div className="w-full px-2">
                                    <textarea 
                                        className="form-textarea w-full p-2" 
                                        id="message" 
                                        placeholder="Votre message..." 
                                        required 
                                        {...register("message", { required: 'Le champ message est requis' })}
                                    ></textarea>
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-2">
                                {/* <div className="w-full md:w-1/2 px-2 flex items-center">
                                    <label htmlFor="fileUpload" className="text-sm w-full p-2 border rounded">
                                        Pièce jointe (25Mo max.)
                                    </label>
                                    <input id="fileUpload" type="file" name="fileUpload" className="hidden" />
                                </div> */}

                                <div className="w-full md:w-1/2 px-2">
                                    <ReCAPTCHA
                                        ref={recaptchaRef}
                                        sitekey="6LcUZxYnAAAAAA4X_RsCGTFn1-AowANmANc63KkA"
                                    />
                                </div>
                            </div>
                            <div className="text-center animate-pulse animate-infinite animate-ease-out">
                                <button className="bg-purple-esisar-600 text-white px-6 py-2 rounded hover:bg-purple-esisar-700 focus:outline-none focus:bg-purple-esisar-700" type="submit" data-te-ripple-init data-te-ripple-color="light" data-te-toggle="popconfirm" data-te-message="This is example">
                                Envoyer
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
