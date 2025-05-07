
import functions from '../code-to-unit-test/unit-test-me.js';   

test('valid phone numbers', () => {
  expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
  expect(functions.isPhoneNumber('(858) 555-1212')).toBe(true);
});
test('invalid phone numbers', () => {
  expect(functions.isPhoneNumber('123456789')).toBe(false);
  expect(functions.isPhoneNumber('phone')).toBe(false);
});

test('valid emails', () => {
  expect(functions.isEmail('john@example.com')).toBe(true);
  expect(functions.isEmail('j.smith99@ucsd.edu')).toBe(true);
});
test('invalid emails', () => {
  expect(functions.isEmail('invalid@com')).toBe(false);
  expect(functions.isEmail('@nope.com')).toBe(false);
});

test('strong passwords', () => {
  expect(functions.isStrongPassword('Abc_1234')).toBe(true);
  expect(functions.isStrongPassword('GoodPass99')).toBe(true);
});
test('weak passwords', () => {
  expect(functions.isStrongPassword('12')).toBe(false);
  expect(functions.isStrongPassword('this-is-way-too-long-of-a-password')).toBe(false);
});

test('valid dates', () => {
  expect(functions.isDate('05/05/2025')).toBe(true);
  expect(functions.isDate('1/1/2024')).toBe(true);
});
test('invalid dates', () => {
  expect(functions.isDate('2025/05/05')).toBe(false);
  expect(functions.isDate('13/40/9999')).toBe(false);
});

test('valid hex colors', () => {
  expect(functions.isHexColor('#ABC')).toBe(true);
  expect(functions.isHexColor('#00ff7f')).toBe(true);
});
test('invalid hex colors', () => {
  expect(functions.isHexColor('GGG')).toBe(false);
  expect(functions.isHexColor('#12345')).toBe(false);
});
