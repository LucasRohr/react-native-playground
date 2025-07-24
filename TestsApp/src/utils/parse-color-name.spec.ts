import { parseColorName } from "./parse-color-name"

test('Should parse color name to Midnight Blue if the color is midnightblue', () => {
    // Arrange
    const COLOR_NAME = 'midnightblue'
    const SEPARATOR = 'midnight'

    // Act
    const result = parseColorName(COLOR_NAME, SEPARATOR)

    // Assert
    expect(result).toBe('Midnight Blue')
})

test('Should parse color name to Medium Orchid if the color is mediumorchid', () => {
    // Arrange
    const COLOR_NAME = 'mediumorchid'
    const SEPARATOR = 'medium'

    // Act
    const result = parseColorName(COLOR_NAME, SEPARATOR)

    // Assert
    expect(result).toBe('Medium Orchid')
})
