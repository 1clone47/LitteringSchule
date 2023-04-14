<template>
    <div id="website-container">
        <NavBar />
        <Consequences />
        <FooterBar />
    </div>
</template>

<script setup>
import Consequences from '@/components/templates/ConsequencesTemplate.vue'

useSeoMeta({
    title: 'Folgen | Littering'
})
</script>
