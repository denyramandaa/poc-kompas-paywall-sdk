<script setup lang="ts">
import { ref, onMounted } from "vue";

const show = () => window?.KompasPaywall?.openPopup({ msg: "Popup demo" });

const banner = ref<HTMLElement | null>(null);
onMounted(() => {
  window?.KompasPaywall?.mountInline({
    target: banner.value!,
    props: { msg: "Inline demo" }
  });
});
</script>

<template>
  <h1 class="text-xl mb-4">Kompas Paywall SDK Preview</h1>

  <div ref="banner" class="border p-3 mb-6" />

  <button class="bg-blue-600 text-white px-4 py-2 rounded" @click="show">
    Open popup
  </button>
</template>
