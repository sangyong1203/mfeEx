<template>
  <button @click="count++">Remote Button Count: {{ count }}</button>
</template>

<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>