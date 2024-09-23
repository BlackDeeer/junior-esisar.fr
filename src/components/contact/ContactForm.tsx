'use client';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import { IoSend } from 'react-icons/io5';

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

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const recaptchaRef = useRef<ReCAPTCHA>(null);

  async function onSubmit(data: FormData) {
    try {
      // if (!recaptchaRef.current?.getValue()) {
      //   alert("Veuillez confirmer que vous n'êtes pas un robot.");
      //   return;
      // }

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
          message: data.message,
        },
        'aT1AQajTpeTKRyMHD' // Remplacez par votre ID utilisateur EmailJS (si nécessaire)
      );

      if (result.text === 'OK') {
        alert('Devis envoyé !'); // remplacer alert par popup fait-maison
      } else {
        throw new Error("Erreur lors de l'envoi du message");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du message:", error);
      alert("Erreur lors de l'envoi du message. Veuillez réessayer.");
    }
  }

  return (
    <section className='py-12' id='signup'>
      {/* <script
        src='https://www.google.com/recaptcha/api.js'
        async
        defer
      ></script> */}
      <div className='container mx-auto px-4 text-xl'>
        <div className='flex justify-center'>
          <div className='w-full text-center md:w-5/6 lg:w-2/3'>
            <form
              className='grid gap-x-4 gap-y-6 md:grid-cols-2'
              id='contactForm'
              onSubmit={handleSubmit(onSubmit as any)}
            >
              <select
                id='gender'
                className='form-select w-full grid-cols-2 border border-black bg-transparent p-2 md:col-span-2 md:w-[calc(50%-0.5rem)]'
                required
                {...register('gender', {
                  required: 'Le champ genre est requis',
                })}
              >
                <option value='M.'>M</option>
                <option value='Mme.'>Mme</option>
                <option value='Autre'>Autre</option>
              </select>
              <div>
                <input
                  className='form-input w-full border border-black bg-transparent p-2 focus:outline-2 focus:outline-offset-0 focus:outline-primary'
                  id='name'
                  type='text'
                  placeholder='Nom*'
                  aria-label='Votre nom...'
                  required
                  {...register('name', {
                    required: 'Le champ nom est requis',
                  })}
                />
                {errors.name && <span>{(errors.name as any).message}</span>}
              </div>
              <div>
                <input
                  className='form-input w-full border border-black bg-transparent p-2 focus:outline-primary'
                  id='lastname'
                  type='text'
                  placeholder='Prénom*'
                  aria-label='Votre prénom...'
                  required
                  {...register('lastname', {
                    required: 'Le champ prénom est requis',
                  })}
                />
              </div>
              <div>
                <input
                  className='form-input w-full border border-black bg-transparent p-2 focus:outline-primary'
                  id='email'
                  type='email'
                  placeholder='Email*'
                  aria-label='Votre email...'
                  required
                  {...register('email', {
                    required: 'Le champ email est requis',
                  })}
                />
              </div>
              <div>
                <input
                  className='form-input w-full border border-black bg-transparent p-2 focus:outline-primary'
                  id='phone'
                  type='tel'
                  placeholder='Téléphone'
                  aria-label='Votre numéro de téléphone...'
                  {...register('phone')}
                />
              </div>
              <div>
                <input
                  className='form-input w-full border border-black bg-transparent p-2 focus:outline-primary'
                  id='company'
                  type='text'
                  placeholder='Société*'
                  aria-label='Votre société...'
                  required
                  {...register('company', {
                    required: 'Le champ société est requis',
                  })}
                />
              </div>
              <div>
                <input
                  className='form-input w-full border border-black bg-transparent p-2 focus:outline-primary'
                  id='info'
                  type='text'
                  placeholder='Comment nous avez-vous connu ?'
                  aria-label='Comment nous avez-vous connu ?'
                  {...register('info')}
                />
              </div>
              <div className='flex flex-col md:col-span-2'>
                <textarea
                  className='form-textarea h-40 w-full border border-black bg-transparent p-2 focus:outline-primary'
                  id='message'
                  placeholder='Décrivez-nous votre projet...*'
                  required
                  {...register('message', {
                    required: 'Le champ message est requis',
                  })}
                ></textarea>
                <span className='self-end pr-2 text-gray-400'>
                  *champs obligatoires
                </span>
              </div>
              {/* <div className='w-full px-2 md:w-1/2'>
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey='6LcUZxYnAAAAAA4X_RsCGTFn1-AowANmANc63KkA'
                />
              </div> */}
              <button
                className='flex h-fit w-fit items-center gap-3 self-end justify-self-end rounded-full bg-primary px-5 py-2 text-white transition-colors duration-200 hover:bg-secondary'
                type='submit'
                data-te-ripple-init
                data-te-ripple-color='light'
                data-te-toggle='popconfirm'
                data-te-message='This is example'
              >
                <span className='pb-0.5 text-xl font-bold tracking-wide'>
                  Envoyer
                </span>
                <IoSend size={24} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
