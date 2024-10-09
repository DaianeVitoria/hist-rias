const getcss = (variavel) => {
    const bodyStyles = getComputedStyle(document.body)
    return bodyStyles.getPropertyValue(variavel)
}

const tickConfig = {
    family: getcss('--font'),
    size:16,
    color: getcss('--primary-color')
}

export {getcss, tickConfig}
