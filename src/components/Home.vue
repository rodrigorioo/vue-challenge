<template>
    <div class="container">
        <h1>{{ title }}</h1>

        <Map />
    </div>

</template>

<script>

import Map from "./Map/Map";

export default {
    name: "Home",

    components: {
        Map,
    },

    computed: {

        title () {
            return this.$store.getters['title'];
        },
    },
}
</script>

<style scoped>

</style>
