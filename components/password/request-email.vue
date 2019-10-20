<template>
          <v-container grid-list-md>
            <v-layout  justify-center>
        <v-flex xs12 sm6 md6>
            <v-card class="elevation-12">
                <v-toolbar color="primary">
                <v-spacer></v-spacer>
                </v-toolbar>
                    <v-form @submit.prevent="onSubmit">
                        <v-text-field 
                            prepend-icon="mdi-account" 
                            v-model="form.email" 
                            label="adresse email" 
                            type="text"
                        ></v-text-field>
                        <v-btn class="ma-2" rounded  outlined color="success" type = "submit">
                            envoyer l'email
                        </v-btn>
                    </v-form>
                <v-card-actions>
                <v-spacer></v-spacer>
                
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
          </v-container>
</template>

<script>
import {mapActions} from 'vuex'
export default {

    data () {
        return {
            form : {
                email : null
            }
        }
    },

    methods : {

        ...mapActions ({
            reset : 'settings/requestPasswordReset'
        }),

        onSubmit() {
            this.reset({
                payload : this.form
            })
        }
    }
}
</script>