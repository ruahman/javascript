import { ref, watch } from 'vue';

export function useCount() {
  const count = ref(0);

  const increment = () => {
    count.value += 1;
  };

  watch(
    count,
    (newValue, oldValue) => {
      console.log(newValue, oldValue);
    },
    {
      immediate: true,
    }
  );

  return {
    count,
    increment,
  };
}
