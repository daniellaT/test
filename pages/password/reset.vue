<template>
    <v-layout>
        <v-flex xs8>
            <div class="mt-10 text-center">
                <reset/>
            </div>
            
        </v-flex>
    </v-layout>
</template>

<script>
import reset from "../../components/password/reset-password.vue"
export default {
    auth: 'guest',
    components: {
    reset,
    }
}
</script>

