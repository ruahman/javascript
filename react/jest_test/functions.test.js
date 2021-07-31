import {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  expect,
  test,
} from '@jest/globals';
import functions from './functions';

beforeEach(() => {
  // const msg = 'before each test...';
  // console.log(msg);
});

afterEach(() => {
  // const msg = 'after each test***';
  // console.log(msg);
});

describe('test suit', () => {
  beforeAll(() => {
    // console.log('befor all test suit');
  });
  afterAll(() => {
    // console.log('after all test suite');
  });

  test('this is just a test', () => {
    expect('foo').toEqual('foo');
  });
});

test('add 2 + 2 to equals 4', () => {
  expect(functions.add(2, 3)).toBe(5);
});

test('add 2 + 2 to not equals 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test('isNull returns null', () => {
  expect(functions.isNull()).toBeNull();
});

test('should be falsy', () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

test('check user', () => {
  expect(functions.createUser()).toEqual({
    firstname: 'diego',
    lastname: 'vila',
  });
});

test('should be less than 100', () => {
  expect(functions.add(11, 11)).toBeLessThan(100);
});

test('there is no I in team', () => {
  expect('team').not.toMatch(/i/);
});

test('arrays', () => {
  const arr = ['cat', 'dog', 'pig'];
  expect(arr).toContain('dog');
});

test('test axios', () => {
  // number of assertions we are expecting
  expect.assertions(1);

  // return promise
  return functions.fetchUser().then(data => {
    expect(data.name).toEqual('Leanne Graham');
  });
});

test('test axios async', async () => {
  // number of assertions we are expecting
  expect.assertions(1);

  const data = await functions.fetchUser();
  expect(data.name).toEqual('Leanne Graham');
});

const array1 = [1, 2, 3, 4, 5];

array1.forEach(x => {
  test(`test ${x}`, () => {
    expect(x).not.toBeNaN();
  });
});

test('mock', () => {
  const mock = jest.fn(() => 'I am mocking you');
  expect(mock('foo')).toEqual('I am mocking you');
  expect(mock).toHaveBeenCalledWith('foo');

  const mock2 = jest.fn();
  mock2.mockReturnValueOnce('foo').mockReturnValueOnce('bar');

  mock2();
  mock2();

  expect(mock2).toHaveBeenCalledTimes(2);

  mock2('foo', 'bar');

  expect(mock2).toHaveBeenCalledWith('foo', 'bar');

  mock2('steve');

  expect(mock2).toHaveBeenLastCalledWith('steve');
});

test('spy', () => {
  const pizza = {
    name: n => `Pizza ${n}`,
  };

  const spy = jest.spyOn(pizza, 'name');
  expect(pizza.name('test')).toBe('Pizza test');
  expect(spy).toHaveBeenLastCalledWith('test');
});
