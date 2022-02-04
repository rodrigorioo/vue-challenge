<template>
    <div>
        <nav>
            <ul>
                <li>
                    <router-link to="/">Home</router-link>
                    <router-link to="/form">Form</router-link>
                </li>
            </ul>
        </nav>

        <router-view></router-view>

    </div>
</template>

<script>
export default {
    name: "App",

    computed: {

    }
}
</script>

<style>

</style>
