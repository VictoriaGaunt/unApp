<template>
  <div :class="[$style.overlay, { [$style.active]: isActive }]" @click.self="onOverlayClick">
    <div :class="$style.modalContent">
      <header>
        <h3>{{ title }}</h3>
        <button @click="closeModal">×</button>
      </header>
      <section>
        <slot />
      </section>
      <footer>
        <button v-if="showCancel" @click="onCancel">Cancel</button>
        <button v-if="showSubmit" @click="onSubmit">Submit</button>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { ModalWidgetProps } from './ModalWidget.types';

export default defineComponent({
  name: 'ModalWidget',
  props: {
    title: {
      type: String,
      default: 'Modal Title',
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    showCancel: {
      type: Boolean,
      default: true,
    },
    showSubmit: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['close', 'cancel', 'submit'],
  setup(props: ModalWidgetProps, { emit }) {
    const closeModal = () => {
      emit('close');
    };

    const onCancel = () => {
      emit('cancel');
    };

    const onSubmit = () => {
      emit('submit');
    };

    const onOverlayClick = () => {
      emit('close');
    };

    return { closeModal, onCancel, onSubmit, onOverlayClick };
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
.modalContent {
  position: relative;
  background-color: #fff;
  width: 400px;
  max-width: 90%;
  margin: 100px auto;
  border-radius: 8px;
  padding: 20px;
  header {
    display: flex;
    justify-content: space-between;
    button {
      background: transparent;
      border: none;
      font-size: 1.2em;
      cursor: pointer;
    }
  }
  footer {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    button {
      padding: 5px 10px;
      cursor: pointer;
    }
  }
}
</style>
