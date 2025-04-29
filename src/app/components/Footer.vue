<template>
  <footer :class="$style.footer">
    <div class="container">
      <p>&copy; {{ currentYear }} My Awesome App. All rights reserved.</p>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Footer',
  setup() {
    // Получаем текущий год для отображения в футере
    const currentYear = new Date().getFullYear();
    return { currentYear };
  },
});
</script>

<!-- SCSS-модуль для Footer -->
<style module lang="scss">
.footer {
  background-color: #f1f1f1;
  color: #333;
  padding: 15px 20px;
  text-align: center;
  font-size: 0.9em;
}
</style>
