export function useHello() {
  const sayHello = () => {
    alert("Hello from composables!");
  };

  return {
    sayHello,
  };
}
