import { capitalize } from "./capitalize"

export const parseColorName = (colorName: string, separator: string): string => {
    const splitString = colorName.split(separator)

    const capitalizedWords = splitString.map(capitalize)
    const capitalizedSeparator = capitalize(separator)

    return `${capitalizedSeparator} ${capitalizedWords.join('')}`
}
