<template>
    <v-layout  justify-center>
        <v-flex xs12 sm6 md6>
            <v-card class="elevation-12">
                <v-toolbar color="primary">
                <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-text>
                    <v-form @submit.prevent="submit">
                        <v-text-field 
                            prepend-icon="mdi-account" 
                            v-model="form.email" 
                            label="adresse email" 
                            type="text"
                        ></v-text-field>
                        <v-text-field 
                            id="password" 
                            prepend-icon="mdi-lock" 
                            v-model="form.password" 
                            label="mot de passe" 
                            type="password"
                        ></v-text-field>
                        <v-btn class="ma-2" rounded  outlined color="success" type = "submit">
                            se connecter
                        </v-btn>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                <v-spacer></v-spacer>
                
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>

</template>

<script>
  export default {
    auth: 'guest',

    data() {
    return {
      form: {
        email: null,

        password: null
      },

      validation: []
    };
  },
  
  methods: {    
    async submit() {
      try {
        this.$toast.success('Logging in...')
        await this.$auth
        .loginWith('local',{
          data: this.form
        })
      }
      catch (error) {
        this.$toast.error('Error while authenticating')
      }
    },
  }
  }
</script>