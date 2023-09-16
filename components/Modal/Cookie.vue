
import { NuxtLink } from '.nuxt/components';
<template>
    <div class="flex justify-center z-50">
        <div 
            class="w-[90%] m-auto bg-white shadow-xl p-6 
            fixed bottom-6 rounded-md border border-gray-200"
        >
            <h2 class="flex gap-4 items-center mb-2">
                <span class="text-gray-900 font-semibold text-xl">Votre vie privée</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 text-indigo-500 h-6">
                    <path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clip-rule="evenodd" />
                </svg>
            </h2>
            <p class="text-sm">
                Nous utilisons des cookies et d'autres technologies similaires afin de personnaliser notre contenu, mesurer l'efficacité de nos publicités et améliorer leur pertinence, ainsi que proposer une meilleure expérience. En cliquant sur OK ou en activant une option dans Préférences de cookies, vous acceptez les conditions énoncées dans notre 
                <NuxtLink to="/" class="underline font-semibold">Politique en matière de cookies</NuxtLink>. Pour modifier vos préférences ou retirer votre consentement, vous devez mettre à jour vos Préférences de cookies.
            </p>
            <div class="flex my-6 gap-3 font-semibold">
                <button class="py-3 px-5 text-gray-900  border border-gray-400 rounded-lg">Préferences de cookies</button>
                <button class="py-3 border border-black bg-black text-white px-12 rounded-lg">OK</button>
            </div>
            <NuxtLink to="/" class="underline font-semibold">Continuer sans accepeter</NuxtLink>
        </div>
    </div>
</template>