<template>
    <div id="website-container">
        <NavBar />
        <Causes />
        <FooterBar />
    </div>
</template>

<script setup>
import Causes from '@/components/templates/CauseTemplate.vue'

useSeoMeta({
    title: 'Ursachen | Littering'
})
</script>
