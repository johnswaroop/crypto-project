const lightModeStyles: object = {
    '--bg-gradient': 'linear-gradient(180deg, rgba(0, 178, 255, 0.19) 0%, rgba(36, 255, 178, 0.13) 99.98%)',
    '--bg-panel': 'white',
    '--highlight-text-color': '#008162',
    '--text-color': 'rgb(161, 161, 161)',
    '--border-color': '#9cfaeb',
    '--border-color-hover': '#79c7ba',
    '--bg-nav': '#f1fbff',
    '--bg-wallet': '#c7fff6'
}

const darkModeStyles: object = {
    '--bg-gradient': 'linear-gradient(180deg, #002924 0%, #007A7A 99.98%)',
    '--bg-panel': 'black',
    '--highlight-text-color': '#9CFAEB',
    '--text-color': 'white',
    '--border-color': '#9CFAEB',
    '--border-color-hover': 'white',
    '--bg-nav': 'black',
    '--bg-wallet': '#008871'
}


const darkModeUtility = ((currentMode: boolean) => {
    let root = document.documentElement
    if (!currentMode) {
        Object.keys(darkModeStyles).forEach((property, index) => {
            root.style.setProperty(property, Object.values(darkModeStyles)[index]);
        })
    }
    else {
        Object.keys(lightModeStyles).forEach((property, index) => {
            root.style.setProperty(property, Object.values(lightModeStyles)[index]);
        })
    }
})



export default darkModeUtility;