<template>
  <v-card>
    <v-card-title>
          <span class="headline"> <strong>Modifier votre mot de passe</strong></span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs6>
                <form 
                    @submit.prevent="update">
                    <v-text-field
                    v-model="form.old_password"
                    label="Ancient mot de passe"
                    type = 'password'               
                    ></v-text-field>

                    <v-text-field
                    v-model="form.new_password"
                    label="Nouveau mot de passe"
                    type = 'password'                 
                    ></v-text-field>

                    <v-text-field
                    v-model="confirm"
                    label="Confirmer mot de passe"
                    type = 'password'
                    ></v-text-field>
                    <v-btn 
                        type = "submit"
                        color = "primary"
                    >Modifier
                    </v-btn>
                </form>
              </v-flex>              
            </v-layout>
          </v-container>
        </v-card-text>
<v-layout column ma-10>
      
  </v-layout>
  </v-card>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
    
    data() {

        return {
            validations: [],

            form : {
                old_password : null,
                new_password : null
            },

            confirm : null
        }
    },

    methods : {

        ...mapActions({
            update_password : 'settings/updatePassword'
        }),

        update () {

            this.update_password({payload:this.form})
            .then(() => {
                this.form.old_password = null,
                this.form.new_password = null,
                this.confirm = null
            })
            .catch((e) => {
                this.$toast.error('Error while modifying password')
            })
        }
    }
    
}
</script>