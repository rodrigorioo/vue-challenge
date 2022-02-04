<template>
    <div class="row">

        <div class="col-12">
            <h4>Modificar título home</h4>
        </div>

        <div class="col-12 col-sm-6">
            <input type="text" class="form-control"
                v-model="title">
        </div>

        <div class="col-12 col-sm-6">
            <button type="button" class="btn btn-success"
                @click="modifyTitle">
                Modificar título
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeForm",

    data () {
        return {
            title: '',
        }
    },

    methods: {
        modifyTitle () {
            this.$store.commit('title', this.title);
            this.title = '';
        },
    },

}
</script>

<style scoped>

</style>
