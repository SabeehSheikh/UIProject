module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", ],
    theme: {
        extend: {
            backgroundImage: {
                //'hero-pattern': "url('/img/hero-pattern.svg')",
                'bglogo': "url('../assets/bglogo.png')",
              }
        },
    },
    plugins: [],
}

