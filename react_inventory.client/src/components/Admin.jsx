import React from 'react';
import { useForm } from 'react-hook-form';
import { getImageURLs, getImageUrlByTitle } from './Shared/Images';
import { createInventoryItem } from '../helpers/InventoryItemApi';
        
export default function Admin() {
    const { register, watch, reset, handleSubmit, formState: { errors } } = useForm();
    const images = getImageURLs();

    const onSubmit = (data) => {
        data.imageURL = getImageUrlByTitle(data.category);
        data.id = Math.random().toString(16).slice(4);
        createInventoryItem(data);
        reset();
    };

    return (
        <section className="bg-gray-100 dark:bg-gray-900 min-h-[calc(100vh-64px)]">
            <div className="py-2 flex flex-col items-center justify-center px-6 mx-auto min-h-[calc(100vh-64px)] lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"> Crea un Item</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6 text-center" action="#">
                            <div className='text-left'>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome</label>
                                <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" autoComplete="off" placeholder="Taccuino"  {...register("name", {
                                        required: true
                                    })}/>
                            </div>
                            <div className='text-left'>
                                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descrizione</label>
                                <input type="text" name="description" id="description" autoComplete="off" placeholder="Contiene appunti..." className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  {...register("description", {
                                        required: true
                                    })}/>
                            </div>
                            <div className="grid gap-6 mb-6 md:grid-cols-2">
                                <div>
                                    <label htmlFor="quantity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantità:</label>
                                    <input type="number" id="quantity" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" autoComplete='off' {...register("quantity", {
                                        required: true
                                    })} />
                                </div>
                                <div>
                                    <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</span>
                                    <label className="mt-2 inline-flex items-center cursor-pointer">
                                        <input type="checkbox" className="sr-only peer" {...register("status")}/>
                                        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    </label>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Categoria</label>
                                <div className="flex items-center justify-center space-x-2">
                                    {images.map((image, index) => (
                                        <label key={index} className="cursor-pointer">
                                            <input type="radio" name="image" value={image.title} className="sr-only" {...register('category', { required: true })} />
                                            <div className="flex flex-col items-center">
                                                <img width="50" height="50" src={image.href} alt={image.title} className={"w-12 h-12 rounded-full hover:scale-110 " + (watch("category") == image.title ? "border-2 border-gray-800 scale-110" : "")} />
                                                <span className="text-xs font-medium text-gray-900 dark:text-white">{image.title}</span>
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </div>
                            <button type="submit" className="group inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75">
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