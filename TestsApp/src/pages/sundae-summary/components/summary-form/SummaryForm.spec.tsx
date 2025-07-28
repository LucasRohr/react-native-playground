import { render, screen, userEvent } from "@testing-library/react-native"
import { SummaryForm } from './SummaryForm'


describe('Summary Form Component', () => {
    const user = userEvent.setup()

    test('Should render the initial form with the checkbox unchecked and the button disabled', () => {
        // Arrange
        render(<SummaryForm />)

        const checkbox = screen.getByTestId('terms-checkbox')
        const button = screen.getByTestId('send-button')

        // Assert
        expect(checkbox).not.toBeChecked()
        expect(button).toBeDisabled()
    })

    test('Should enable the send button when the terms checkbox is checked', async () => {
        // Arrange
        render(<SummaryForm />)

        const checkbox = screen.getByTestId('terms-checkbox')
        const button = screen.getByTestId('send-button')

        // Act
        await user.press(checkbox)

        // Assert
        expect(checkbox).toBeChecked()
        expect(button).toBeEnabled()
    })

    test('Should disable the send button when the terms checkbox is unchecked', async () => {
        // Arrange
        render(<SummaryForm />)

        const checkbox = screen.getByTestId('terms-checkbox')
        const button = screen.getByTestId('send-button')

        // Act
        await user.press(checkbox)
        await user.press(checkbox)

        // Assert
        expect(checkbox).not.toBeChecked()
        expect(button).toBeDisabled()
    })
})