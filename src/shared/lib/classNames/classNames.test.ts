import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('with only main class', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('with additional classes', () => {
        const expected = 'someClass firstClass secondClass';
        expect(classNames('someClass', {}, ['firstClass', 'secondClass'])).toBe(expected);
    });
    test('with mods classes', () => {
        const expected = 'someClass hovered focused';
        expect(classNames('someClass', { hovered: true, focused: true })).toBe(expected);
    });
    test('with mods false', () => {
        const expected = 'someClass focused';
        expect(classNames('someClass', { hovered: false, focused: true })).toBe(expected);
    });
    test('with mods undefined', () => {
        const expected = 'someClass focused';
        expect(classNames('someClass', { hovered: undefined, focused: true })).toBe(expected);
    });
});
