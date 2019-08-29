<template>
  <v-card>
    <v-card-title>
          <span class="headline"> <strong>Valider coupons</strong></span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs6>
                <v-form @submit.prevent = "validate"
                v-model="valid"
                lazy-validation
                    > <v-text-field
                        v-model="form.code_number"
                        label="Entre le code du coupon:"
                    ></v-text-field>

                    <v-btn
                        color="success"
                        class="mr-4"
                        type = 'submit'
                    >
                        Valider 
                    </v-btn>
                </v-form>
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
    data () {
        return {
            valid : true,
            form : {
                code_number:null,
                code: 3
            }
        }
    },

    methods : {
        ...mapActions ({
            validateCoupon : 'coupon/storeCoupon'
        }),
        
         text: item => item.name + ' ' + item.last_name,

         validate() {
             this.validateCoupon({payload:this.form}).then(() => {
                 this.form.code_number = null
             }).catch((error) => {
            this.$toast.error('coupon invalide ou déjà validé')
                 
             })
         }

    }
}
</script>