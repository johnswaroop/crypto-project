const lightModeStyles: object = {
    '--bg-gradient': 'linear-gradient(180deg, rgba(0, 178, 255, 0.19) 0%, rgba(36, 255, 178, 0.13) 99.98%)',
    '--bg-panel': 'white',
    '--highlight-text-color': '#008162',
    '--text-color': 'rgb(161, 161, 161)',
    '--border-color': '#9cfaeb',
    '--border-color-hover': '#79c7ba',
    '--bg-nav': '#f1fbff',
    '--bg-wallet': '#afafaf',
    '--input-shadow': '0px 0px 25px 3px rgba(0, 0, 0, 0.125);'
}

const darkModeStyles: object = {
    '--bg-gradient': 'linear-gradient(180deg, #002924 0%, #007A7A 99.98%)',
    '--bg-panel': 'black',
    '--highlight-text-color': '#9CFAEB',
    '--text-color': 'white',
    '--border-color': '#00977e',
    '--border-color-hover': '#5bffe4',
    '--bg-nav': 'black',
    '--bg-wallet': '#e4fffb',
    '--input-shadow': '0px 0px 15px rgba(0, 209, 199, 0.61)'
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