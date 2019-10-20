<template>
    <v-layout>
        <v-flex xs12>
            <recover/>
        </v-flex>
    </v-layout>
</template>

<script>
import recover from "../../components/password/request-email.vue"
export default {
    auth: 'guest',
    components: {
    recover,
    }
}
</script>

