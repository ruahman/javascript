import { reactive, watch, watchEffect } from 'vue';

export function useNumbers() {
  const numbers: { [key: string]: number } = reactive({
    a: 0,
    b: 0,
  });

  watch(numbers, newValue => {
    console.log(newValue);
  });

  watchEffect(() => {
    console.log(`watch only prop: ${numbers.a}`);
  });

  const increase = (x: string) => {
    numbers[x] += 1;
  };

  return {
    numbers,
    increase,
  };
}
