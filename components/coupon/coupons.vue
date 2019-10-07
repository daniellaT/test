<template>
  <v-card column>
    <v-card-title>
     Mes Coupons
      <v-spacer></v-spacer>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="coupons"
    >
    </v-data-table>
  </v-card>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
  export default {
    data () {
      return {
        headers: [
          {
            text: 'Nom élève',
            align: 'left',
            sortable: true,
            value: 'code.student.name',
          },
          { text: 'Prénom élève', value: 'code.student.last_name' },
          { text: 'Numero coupon', value: 'code.code_number' },       
          { text: 'Date validé', value: 'date' },       
        ]
      }
    },

    computed : {

        ...mapGetters ({
            coupons : 'coupon/get_coupons'
        })
    },

    methods : {
        ...mapActions({
            getCoupons : 'coupon/getCoupons'
        })
    },

    mounted(){
        this.getCoupons()
    }
  }
</script>