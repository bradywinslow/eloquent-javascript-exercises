import { countChar, countBs } from './bean_counting';

describe('bean counting', () => {
    test('character count', () => {
        // Arrange
        let str = 'kakkerlak';
        let char = 'k';

        // Act
        const charCount = countChar(str, char);

        // Assert
        expect(charCount).toEqual(4);
    });

    test('character count if no char', () => {
        // Arrange
        let str = 'string';
        let char = '';

        // Act
        const noChar = countChar(str, char);

        // Assert
        expect(noChar).toEqual(0);
    });

    test('count Bs', () => {
        // Arrange
        let str = 'BOB';

        // Act
        const numBs = countBs(str);

        // Assert
        expect(numBs).toEqual(2);
    });
});
