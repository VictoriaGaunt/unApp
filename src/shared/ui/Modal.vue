<template>
  <!-- Универсальный модальный диалог с заголовком, содержимым и кнопкой закрытия -->
  <div :class="[$style.overlay, isVisible ? $style.active : '']" @click.self="close">
    <div :class="$style.modal">
      <header class="modal-header">
        <h3>{{ title }}</h3>
        <button @click="close">×</button>
      </header>
      <section class="modal-body">
        <slot />
      </section>
      <footer class="modal-footer">
        <slot name="footer" />
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'Modal',
  props: {
    title: {
      type: String,
      default: 'Modal Title',
    },
    isVisible: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['close'],
  setup(props, { emit }) {
    const close = () => {
      emit('close');
    };
    return { close };
  },
});
</script>

<style module lang="scss">
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  &.active {
    visibility: visible;
    opacity: 1;
  }
}
.modal {
  background: #fff;
  width: 400px;
  max-width: 90%;
  margin: 100px auto;
  border-radius: 8px;
  overflow: hidden;
}
.modal-header {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background: var(--primary-color, #0d6efd);
  color: #fff;
}
.modal-body {
  padding: 20px;
}
.modal-footer {
  padding: 10px;
  text-align: right;
}
</style>
