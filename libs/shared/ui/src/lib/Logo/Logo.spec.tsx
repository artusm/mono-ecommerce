import '@testing-library/jest-dom';
import { RenderResult, render, screen } from '@testing-library/react';
import { create } from 'react-test-renderer';

import { Logo } from './Logo';

describe('Logo', () => {
    let renderResult: RenderResult;

    beforeEach(() => {
        renderResult = render(<Logo />);
    });

    it('should render successfully', () => {
        const { baseElement } = renderResult;

        const tree = create(<Logo />).toJSON();
        expect(tree).toMatchSnapshot();

        expect(baseElement).toBeTruthy();
    });

    it('contain all chars in two words', () => {
        const [firstWord, secondWord] = 'cat shop'.split(' ');

        const firsWordContainerElement = screen.getByTestId('first-word');

        firstWord.split('').forEach((char) => {
            const charElement = screen.getByText(char);
            expect(charElement).toBeInTheDocument();
            expect(charElement.parentElement).toBe(firsWordContainerElement);
        });

        const secondWordContainerElement = screen.getByTestId('second-word');
        secondWord.split('').forEach((char) => {
            const charElement = screen.getByText(char);
            expect(charElement).toBeInTheDocument();
            expect(charElement.parentElement).toBe(secondWordContainerElement);
        });
    });
});
