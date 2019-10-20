<template>
  <v-card>
    <v-card-title>
          <span class="headline"> <strong>Nouveau mot de passe</strong></span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs6>
                <form 
                    @submit.prevent="update">

                    <v-text-field
                    v-model="form.email"
                    label="votre email"             
                    ></v-text-field>

                    <v-text-field
                    v-model="form.password"
                    label="Nouveau mot de passe"
                    type = 'password'                 
                    ></v-text-field>

                    <v-btn 
                        type = "submit"
                        color = "default"
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
                email : null,
                password : null
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