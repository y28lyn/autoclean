import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import validator from "validator";

const ContactForm = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      const userNameInput = form.current.user_name;
      const userEmailInput = form.current.user_email;
      const messageInput = form.current.message;

      if (!userNameInput.value.trim()) {
        setErrorMessage("Veuillez entrer votre nom et prénom.");
        return;
      }

      if (!validator.isEmail(userEmailInput.value)) {
        setErrorMessage("Veuillez entrer une adresse email valide.");
        return;
      }

      if (!messageInput.value.trim()) {
        setErrorMessage("Veuillez entrer votre message.");
        return;
      }

      try {
        const result = await emailjs.sendForm(
          "service_fpzfpxd",
          "template_unqnxgs",
          form.current,
          "Pp6n1YIzECCp0vtuB"
        );
        console.log(result.text);
        setIsSubmitted(true); // Affiche la boîte de dialogue de confirmation
        form.current.reset(); // Réinitialise le formulaire
        setErrorMessage(null); // Réinitialise le message d'erreur
      } catch (error) {
        console.error(error);
        setErrorMessage("Une erreur est survenue lors de l'envoi de l'e-mail.");
      }
    }
  };

  return (
    <>
      <section className="h-fit py-10 px-6 text-white sm:py-16 lg:py-24">
        <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:items-stretch md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-10">
            <div className="flex flex-col justify-between lg:py-5">
              <div>
                <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:leading-tight lg:text-5xl">
                  Il est temps de laver votre voiture ?
                </h2>
                <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-white">
                  Chez Autoclean, l'excellence est notre norme. Faites-nous
                  confiance pour redonner à votre voiture son éclat d'origine,
                  car chez Autoclean, la qualité prime toujours.
                </p>

                <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-white">
                  Pour réserver veuillez nous contacter par téléphone (07 56 84
                  73 46), par instagram/facebook (autoclean.lyon) ou par le
                  formulaire de contact !
                </p>

                <img
                  className="relative z-10 max-w-xs mx-auto -mb-16 md:hidden"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/contact/4/curve-line-mobile.svg"
                  alt=""
                />

                <img
                  className="hidden w-full translate-x-24 translate-y-8 md:block"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/contact/4/curve-line.svg"
                  alt=""
                />
              </div>
            </div>

            <div className="lg:pl-12">
              <div className="overflow-hidden bg-[#101314] rounded-md">
                <div className="p-6 sm:p-10">
                  <h3 className="text-3xl font-semibold text-white">
                    Contactez nous !
                  </h3>
                  <p className="mt-4 text-base text-gray-6200">
                    Nous sommes ravis de vous accueillir et sommes prêts à
                    répondre à toutes vos questions ou commentaires.
                  </p>

                  <form
                    action="#"
                    ref={form}
                    onSubmit={sendEmail}
                    method="POST"
                    className="mt-4"
                  >
                    <div className="space-y-6">
                      <div>
                        <label className="text-base font-medium text-gray-100">
                          Nom et prénom
                        </label>
                        <div className="mt-2.5 relative">
                          <input
                            type="text"
                            name="user_name"
                            id=""
                            placeholder="Entrez votre nom et prénom"
                            className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-autoclean_blue focus:border-autoclean_blue caret-autoclean_blue"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-base font-medium text-gray-100">
                          Email
                        </label>
                        <div className="mt-2.5 relative">
                          <input
                            type="text"
                            name="user_email"
                            id=""
                            placeholder="Entrez votre e-mail"
                            className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-autoclean_blue focus:border-autoclean_blue caret-autoclean_blue"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-base font-medium text-gray-100">
                          Message
                        </label>
                        <div className="mt-2.5 relative">
                          <textarea
                            name="message"
                            id=""
                            placeholder="Entrez votre message"
                            className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:ring-autoclean_blue focus:border-autoclean_blue caret-autoclean_blue"
                          ></textarea>
                        </div>
                      </div>

                      <div>
                        <button
                          type="submit"
                          className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-700 border border-transparent rounded-md focus:outline-none hover:bg-blue-600 focus:bg-blue-600"
                        >
                          Envoyez votre message
                        </button>
                      </div>
                    </div>
                  </form>
                  {isSubmitted && (
                    <div className="mt-4 text-green-500">
                      Votre e-mail a été envoyé avec succès !
                    </div>
                  )}
                  {errorMessage && (
                    <div className="mt-4 text-red-500">{errorMessage}</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
