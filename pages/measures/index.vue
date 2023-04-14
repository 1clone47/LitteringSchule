<template>
    <div id="website-container">
        <NavBar />
        <Measures />
        <FooterBar />
    </div>
    
</template>

<script setup>
import Measures from '@/components/templates/MeasuresTemplate.vue'

useSeoMeta({
    title: 'Maßnahmen | Littering'
})
</script>
