import React from 'react';
import { useForm } from 'react-hook-form';
        
export default function Admin() {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        reset();
    };

    return (
        <section class="bg-gray-300 dark:bg-gray-900 min-h-[calc(100vh-64px)]">
            <div class="flex flex-col items-center justify-center px-6 mx-auto min-h-[calc(100vh-64px)] lg:py-0">
                <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"> Crea un Item</h1>
                        <form class="space-y-4 md:space-y-6 text-center" action="#">
                            <div className='text-left'>
                                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome</label>
                                <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Taccuino" required=""/>
                            </div>
                            <div className='text-left'>
                                <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descrizione</label>
                                <input type="text" name="description" id="description" placeholder="Contiene appunti..." class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                            </div>
                            <button type="submit" class="group inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75">
                                <span className="block rounded-full bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent">
                                    Crea Item
                                </span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
  );
}