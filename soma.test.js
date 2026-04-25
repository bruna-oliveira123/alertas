const soma = require('./soma');

test('1. Soma de dois números positivos', () => {
  expect(soma(1, 2)).toBe(3);
});

test('2. Soma de números negativos', () => {
  expect(soma(-1, -1)).toBe(-2);
});

test('3. Soma com zero', () => {
  expect(soma(5, 0)).toBe(5);
});

test('4. Resultado não deve ser nulo', () => {
  expect(soma(2, 2)).not.toBeNull();
});

test('5. Soma de números grandes', () => {
  expect(soma(100, 200)).toBe(300);
});
