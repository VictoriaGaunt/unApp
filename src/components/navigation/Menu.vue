<template>
  <div :class="$style.menu">
    <button @click="toggleMenu" :class="$style.menuButton">Menu</button>
    <ul v-if="isOpen" :class="$style.menuList">
      <li v-for="item in items" :key="item.id">
        <router-link :to="item.link">{{ item.label }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

interface MenuItem {
  id: number;
  label: string;
  link: string;
}

export default defineComponent({
  name: 'Menu',
  props: {
    items: {
      type: Array as () => MenuItem[],
      default: () => [],
    },
  },
  setup() {
    const isOpen = ref(false);
    const toggleMenu = () => {
      isOpen.value = !isOpen.value;
    };
    return { isOpen, toggleMenu };
  },
});
</script>

<style module lang="scss">
.menu {
  position: relative;
  .menuButton {
    padding: 8px 12px;
    background-color: var(--primary-color, #0d6efd);
    border: none;
    color: #fff;
    cursor: pointer;
  }
  .menuList {
    position: absolute;
    top: 100%;
    left: 0;
    background: #fff;
    border: 1px solid #ccc;
    list-style: none;
    margin: 0;
    padding: 10px;
    li {
      margin-bottom: 5px;
      &:last-child {
        margin-bottom: 0;
      }
      a {
        color: #32063f;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
