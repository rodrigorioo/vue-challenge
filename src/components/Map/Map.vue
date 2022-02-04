<template>
    <div class="row mt-5">
        <div class="map">
            <MglMap
                :accessToken="accessToken"
                :mapStyle.sync="mapStyle"
                :center="coordinates">

                <MglMarker

                    v-for="(user, iUser) in users"
                    :key="iUser"

                    :coordinates="[user.longitude, user.latitude]">
                    <MglPopup>
                        <ul>
                            <li>Coordenadas: {{ user.latitude }}, {{ user.longitude }}</li>
                            <li>Nombre: {{ user.name }}</li>
                            <li>ID: {{ user.id }}</li>
                        </ul>
                    </MglPopup>
                </MglMarker>
            </MglMap>
        </div>

    </div>
</template>

<script>

import { MglMap, MglMarker, MglPopup } from "vue-mapbox";
import config from '../../../config';

export default {
    name: "Map",

    components: {
        MglMap,
        MglMarker,
        MglPopup,
    },

    data() {
        return {
            accessToken: config.mapbox_gl_access_token,
            mapStyle: "mapbox://styles/mapbox/streets-v11",
            coordinates: [-34.6157437, -58.5733815]
        };
    },

    computed: {

        users () {
            return this.$store.getters['users'];
        },
    }
}
</script>

<style scoped>
.map {
    height: 500px;
}
</style>
