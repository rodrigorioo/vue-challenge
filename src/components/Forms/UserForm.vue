<template>
    <div class="row mt-5">

        <div class="col-12">
            <h4>Agregar usuario</h4>
        </div>

        <div class="col-12 col-sm-3">
            <input type="text" class="form-control" placeholder="Id"
                   v-model="id">
        </div>

        <div class="col-12 col-sm-3">
            <input type="text" class="form-control" placeholder="Name"
                   v-model="name">
        </div>

        <div class="col-12 col-sm-3">
            <input type="text" class="form-control" placeholder="Latitude"
                   v-model="latitude">
        </div>

        <div class="col-12 col-sm-3">
            <input type="text" class="form-control" placeholder="Longitude"
                   v-model="longitude">
        </div>

        <div class="col-12 mt-3">
            <button type="button" class="btn btn-success"
                    @click="addUser">
                Agregar usuario
            </button>
        </div>
    </div>

</template>

<script>
export default {
    name: "UserForm",

    data () {
        return {
            id: '',
            name: '',
            latitude: '',
            longitude: '',
        }
    },

    methods: {

        addUser () {

            this.$store.commit('addUser', {
                id: this.id,
                name: this.name,
                latitude: this.latitude,
                longitude: this.longitude,
            });

            this.id = '';
            this.name = '';
            this.latitude = '';
            this.longitude = '';
        },
    }
}
</script>

<style scoped>

</style>
