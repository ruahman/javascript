<script setup>
defineProps({
  show: Boolean,
});

// let emit = defineEmits(["close"]);
const emit = defineEmits(["close"]);

function emitClose() {
  console.log("i am emitting close from modal....");
  emit("close");
}
</script>

<template>
  <!-- append to the body -->
  <Teleport to="body">
    <!-- there is also a css approach  -->
    <Transition
      enter-active-class="transition"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="show" class="modal-mask">
        <div class="modal-container">
          <header>
            <slot name="header">default header</slot>
          </header>
          <p>
            <slot>default content</slot>
          </p>
          <footer>
            <slot name="footer">
              <button @click="emitClose">close</button>
            </slot>
          </footer>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-mask {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: grid;
  place-items: center;
}
.modal-container {
  background: white;
  padding: 1rem;
  color: black;
  width: 80vw;
  max-width: 500px;
  border-radius: 7px;
}
.opacity-0 {
  opacity: 0;
}
.opacity-100 {
  opacity: 1;
}
.transition {
  transition: opacity 1s ease-in-out;
}
</style>
