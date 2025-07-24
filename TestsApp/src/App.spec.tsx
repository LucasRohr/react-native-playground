import App from "./App"
import { fireEvent, render, screen } from "@testing-library/react-native"

test('Should render the button correctly', () => {
    // Arrange
    render(<App />)

    const buttonText = screen.getByRole('text', { name: 'Change to Midnight Blue' })

    // Assert
    expect(buttonText).toBeOnTheScreen()
})

test('Should change the color of the button to midnightblue when the button is pressed', () => {
    // Arrange
    render(<App />)

    const buttonText = screen.getByRole('text', { name: 'Change to Midnight Blue' })
    const button = screen.getByTestId('button')

    // Act
    fireEvent.press(button)

    // Assert
    expect(button).toHaveStyle({ backgroundColor: 'midnightblue' })
    expect(buttonText.props.children.join('')).toBe('Change to Medium Orchid')
})

test('Should change the color of the button to mediumorchid when the button is pressed twice', () => {
    // Arrange
    render(<App />)

    const buttonText = screen.getByRole('text', { name: 'Change to Midnight Blue' })
    const button = screen.getByTestId('button')

    // Act
    fireEvent.press(button)
    fireEvent.press(button)

    // Assert
    expect(button).toHaveStyle({ backgroundColor: 'mediumorchid' })
    expect(buttonText.props.children.join('')).toBe('Change to Midnight Blue')
})

test('Should disable the button when the checkbox is checked', () => {
    // Arrange
    render(<App />)

    const checkbox = screen.getByRole('checkbox')
    const button = screen.getByTestId('button')

    // Act
    fireEvent(checkbox, 'onValueChange', true)

    // Assert
    expect(button).toBeDisabled()
    expect(button).toHaveStyle({ backgroundColor: 'gray' })
    expect(checkbox).toBeChecked()
})

test('Should enable the button when the checkbox is unchecked', () => {
    // Arrange
    render(<App />)

    const checkbox = screen.getByRole('checkbox')
    const button = screen.getByTestId('button')

    // Act
    fireEvent(checkbox, 'onValueChange', false)

    // Assert
    expect(button).toBeEnabled()
    expect(button).toHaveStyle({ backgroundColor: 'mediumorchid' })
    expect(checkbox).not.toBeChecked()
})