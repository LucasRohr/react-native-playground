import App from "./App"
import { fireEvent, render, screen } from "@testing-library/react-native"

test('Should render the button correctly', () => {
    // Arrange
    render(<App/>)

    const buttonText = screen.getByRole('text', { name: 'Change to blue' })

    // Assert
    expect(buttonText).toBeOnTheScreen()
})

test('Should change the color of the button to blue when the button is pressed', () => {
    // Arrange
    render(<App/>)

    const buttonText = screen.getByRole('text', { name: 'Change to blue' })
    const button = screen.getByTestId('button')

    // Act
    fireEvent.press(button)

    // Assert
    expect(button).toHaveStyle({ backgroundColor: 'blue' })
    expect(buttonText.props.children.join('')).toBe('Change to red')
})

test('Should change the color of the button to red when the button is pressed twice', () => {
    // Arrange
    render(<App/>)

    const buttonText = screen.getByRole('text', { name: 'Change to blue' })
    const button = screen.getByTestId('button')

    // Act
    fireEvent.press(button)
    fireEvent.press(button)

    // Assert
    expect(button).toHaveStyle({ backgroundColor: 'red' })
    expect(buttonText.props.children.join('')).toBe('Change to blue')
})

test('Should disable the button when the checkbox is unchecked', () => {
    // Arrange
    render(<App/>)

    const checkbox = screen.getByRole('checkbox')
    const button = screen.getByTestId('button')

    // Act
    fireEvent(checkbox, 'onValueChange', false)

    // Assert
    expect(button.props.accessibilityState.disabled).toBe(true)
    expect(checkbox).not.toBeChecked()
})

test('Should enable the button when the checkbox is checked', () => {
    // Arrange
    render(<App/>)  

    const checkbox = screen.getByRole('checkbox')
    const button = screen.getByTestId('button')

    // Act
    fireEvent(checkbox, 'onValueChange', true)

    // Assert
    expect(button).toBeEnabled()
    expect(checkbox).toBeChecked()
})