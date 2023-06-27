export function randomize(elements: any[]): any[] {
    // Configurações para randomizar as 40 questões
    return elements
        .map(value => ({value, random: Math.random()}))
        .sort((obj1, obj2) => obj1.random - obj2.random)
        .map(obj => obj.value).slice(0, 15) // Pegar apenas as 15 primeiras que serão randomizadas
}