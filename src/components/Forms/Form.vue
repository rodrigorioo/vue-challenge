<template>
    <div class="container">

        <div class="row">
            <div class="col-12">
                <HomeForm />
            </div>

            <div class="col-12">
                <UserForm />
            </div>
        </div>
    </div>
</template>

<script>

import HomeForm from "./HomeForm";
import UserForm from "./UserForm";

export default {
    name: "Form",

    components: {
        HomeForm,
        UserForm,
    }
}
</script>

<style scoped>

</style>
