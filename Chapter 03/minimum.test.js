import { min, min2 } from './minimum';

describe('minimum', () => {
    test('find min with Math object', () => {
        // Arrange
        const num1 = 2;
        const num2 = 4;

        // Act
        const minVal1 = min(num1, num2);

        // Assert
        expect(minVal1).toEqual(num1);
    });

    test('find min by comparison', () => {
        // Arrange
        const a = 1;
        const b = 25;

        // Act
        const minVal2 = min2(a, b);

        // Assert
        expect(minVal2).toEqual(a);
    });
});
