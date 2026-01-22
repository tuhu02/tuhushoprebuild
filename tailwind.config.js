import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                // Mengganti font sans default menjadi Oxanium
                sans: ['Oxanium', ...defaultTheme.fontFamily.sans],
            },
            backgroundImage: {
                // Pola garis diagonal 45 derajat yang rapat
                'diagonal-lines': 'linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)',
            },
            backgroundSize: {
                // Menentukan kerapatan garis (makin kecil pixel, makin rapat)
                'lines-sm': '10px 10px', 
            }
        },
    },

    plugins: [forms],
};