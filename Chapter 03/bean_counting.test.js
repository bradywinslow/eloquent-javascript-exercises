import { countChar, countBs } from './bean_counting';

describe('bean counting', () => {
    test('character count', () => {
        let str = 'kakkerlak';
        let char = 'k';
        expect(countChar(str, char)).toEqual(4);
    });

    test('count Bs', () => {
        let str = 'BOB';
        expect(countBs(str)).toEqual(2);
    });
});
