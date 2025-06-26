<script setup lang="ts">
const props = defineProps<{ msg?: string }>();
</script>

<template>
  <div class="p-4 rounded-lg bg-blue-600 text-white bg-black">
    <strong>SDK widget</strong><br />
    <slot>{{ props.msg }}</slot>
  </div>
</template>
