/** @type {import('tailwindcss').Config} */
import { nextui } from '@nextui-org/react'

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                'regal-blue': '#243c5a',
                'dark-blue' : '#1D283A',
                'relax' : '#1D283A'
            }
        },
        fontFamily: {
            'title_login' : ['Sansation Light', 'Sansation', 'Secular One' ,'Scope One' ,'Sarala', 'Sawarabi Gothic', 'Scada']
        }
    },
    
    plugins: [nextui()],
}