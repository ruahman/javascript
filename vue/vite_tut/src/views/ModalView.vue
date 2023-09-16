<script setup>
import { ref } from "vue";
import Modal from "@/components/Modal.vue";

let showModal = ref(false);
function open() {
  showModal.value = true;
}
function closeModal() {
  console.log("close modal from view....");
  showModal.value = false;
}
</script>

<template>
  <div>
    <p>show Modal</p>
    <Modal :show="showModal" @close="closeModal">
      <template #header>
        <h1>Custom Header</h1>
      </template>
      I am overwriting the default content
    </Modal>

    <button @click="open">Open Modal</button>
  </div>
</template>
