import { Link } from "react-router-dom";
import { firebaseAuth, signInWithGoogle } from "../helpers/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Home() {
    const [user] = useAuthState(firebaseAuth);

    return (
        <>
        <section className="bg-white dark:bg-gray-900">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:pt-16 lg:pb-4 lg:px-6">
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h1 className="mb-4 py-2 text-4xl font-medium leading-tight title-font text-gray-900 dark:text-white">Primo sito con ASP.NET e React</h1>
                    <p className="mb-4">
                        Benvenuto! Questo è il mio primo progetto con ASP.NET, un framework che mi
                        permette di utilizzare C# per creare un API per rendere una app React interattiva.<br/>
                        Con questa app, voglio mettere in pratica le mie conoscenze e sperimentare le potenzialità di ASP.NET
                    </p>
                    <p>
                        L'app che ho creato ha lo scopo di gestire un inventario in modo semplice. Potrai
                        aggiungere, modificare ed eliminare elementi, tenere traccia delle quantità.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                    <img className="w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
                        alt="office content 1"/>
                    <img className="mt-4 w-full lg:mt-10 rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
                        alt="office content 2"/>
                </div>
            </div>
        </section>
        <section className="flex bg-white dark:bg-gray-900 text-center">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:pt-4 sm:pb-8 lg:px-6">
                { !user ? (
                <div className="max-w-screen-md">
                    <h1 className="py-2 text-3xl font-medium leading-tight title-font">Non sei ancora loggato.</h1>
                    <p className="mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400">
                        Affinché l'applicazione possa funzionare correttamente è necessario loggarsi tramite account Google che scelgo di usare per semplicità avendoci già avuto a che fare.
                    </p>
                    <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                        <button onClick={signInWithGoogle} className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                            <svg className="mr-2 w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z" clipRule="evenodd"/>
                            </svg>
                            Inizia Subito
                        </button>
                        <Link to="/info" className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                            <svg className="mr-2 w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                            </svg>
                            Maggiori Dettagli
                        </Link>
                    </div>
                </div>
                ) : (
                    <div className="max-w-screen-lg">
                        <div className="py-6 dark:bg-gray-900 dark:text-white">
                            <div className="container mx-auto flex flex-col justify-around p-4 text-center md:p-10 lg:flex-row">
                                <div className="flex flex-col justify-center lg:text-left">
                                    <p className="mb-1 text-sm font-medium tracking-widest uppercase dark:text-violet-600">Bentornato {user.displayName.split(" ")[0]}</p>
                                    <h1 className="py-2 text-3xl font-medium leading-tight title-font">Ora risulti correttamente loggato</h1>
                                    <p className="mb-6 text-lg font-light leading-relaxed text-gray-500 dark:text-gray-400">Puoi iniziare ad utilizzare l'applicazione navigando ai link che trovi di seguito.</p>
                                </div>
                                <div className="flex flex-col items-center justify-center flex-shrink-0 mt-6 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:ml-4 lg:mt-0 lg:justify-end">
                                    <Link to="/inventory"  className="inline-flex items-center px-6 py-3 rounded-lg dark:bg-violet-600 dark:text-gray-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-current w-7 h-7 dark:text-gray-50">
                                            <path d="M 5.4160156 2.328125 L 12.935547 10.158203 C 13.132547 10.363203 13.45925 10.363203 13.65625 10.158203 L 15.179688 8.5742188 C 15.405688 8.3392188 15.354312 7.956875 15.070312 7.796875 C 11.137313 5.571875 6.2620156 2.811125 5.4160156 2.328125 z M 3.140625 2.8476562 C 3.055625 3.0456562 3 3.2629063 3 3.5039062 L 3 20.591797 C 3 20.788797 3.044375 20.970625 3.109375 21.140625 L 11.576172 12.324219 C 11.762172 12.131219 11.762172 11.826813 11.576172 11.632812 L 3.140625 2.8476562 z M 17.443359 9.2578125 C 17.335484 9.2729375 17.233297 9.32375 17.154297 9.40625 L 15.015625 11.632812 C 14.829625 11.825812 14.829625 12.130219 15.015625 12.324219 L 17.134766 14.529297 C 17.292766 14.694297 17.546141 14.729188 17.744141 14.617188 C 19.227141 13.777188 20.226563 13.212891 20.226562 13.212891 C 20.725562 12.909891 21.007 12.443547 21 11.935547 C 20.992 11.439547 20.702609 10.981938 20.224609 10.710938 C 20.163609 10.676937 19.187672 10.124359 17.763672 9.3183594 C 17.664172 9.2623594 17.551234 9.2426875 17.443359 9.2578125 z M 13.296875 13.644531 C 13.165875 13.644531 13.034047 13.696328 12.935547 13.798828 L 5.4746094 21.566406 C 6.7566094 20.837406 11.328781 18.249578 15.050781 16.142578 C 15.334781 15.981578 15.386156 15.599281 15.160156 15.363281 L 13.65625 13.798828 C 13.55775 13.696328 13.427875 13.644531 13.296875 13.644531 z"></path>
                                        </svg>
                                        <span className="flex flex-col items-start ml-4 leading-none">
                                            <span className="font-semibold title-font">Inventory</span>
                                        </span>
                                    </Link>
                                    <Link to="/admin" className="inline-flex items-center px-5 py-3 rounded-lg dark:bg-violet-600 dark:text-gray-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="fill-current w-7 h-7 dark:text-gray-50">
                                            <path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"></path>
                                        </svg>
                                        <span className="flex flex-col items-start ml-4 leading-none">
                                            <span className="font-semibold title-font">Admin</span>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    </>
    )
}
