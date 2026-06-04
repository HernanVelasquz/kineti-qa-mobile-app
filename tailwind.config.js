/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all of your component files.
    content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            fontFamily: {
                outfit: ["Outfit_400Regular", "sans-serif"],
                "outfit-bold": ["Outfit_700Bold", "sans-serif"],
                "outfit-medium": ["Outfit_500Medium", "sans-serif"],
            }
        },
    },
    plugins: [],
}
