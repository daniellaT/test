<template>
    <v-container>
        <v-card column>
            <v-card-title>
            <strong>Mes offres de cours</strong> 
            <v-spacer></v-spacer>
            </v-card-title>
            <v-data-table
            :headers="headers"
            :items="offers"
            >
            <template v-slot:item.action="{ item }">
                    
            <a href="#" @click.prevent="show(item.id)">voir</a>
            </template>
            </v-data-table>
        </v-card>
    </v-container>
  
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
  export default {
    data () {
      return {
        headers: [
          {
            text: "Nom de l'élève",
            align: 'left',
            sortable: false,
            value: 'student.name',
          },
          { text: 'Prénom élève', sortable: false,value: 'student.last_name'},
          { text: 'Classe',sortable: false, value: 'student.level.name' },
          { text: 'Matière',sortable: false, value: 'course.name' },
          { text: 'Ville', sortable: false,value: 'student.city' },
          { text: 'Actions',sortable: false,  value: 'action'}          
        ]
      }
    },

    computed : {

        ...mapGetters ({
            offers : 'offer/get_offers'
        })
    },

    methods : {
        ...mapActions({
            getoffers : 'offer/getOffers'
        }),

        show(id) {
            this.$router.push('/offers/'+ id)
         }
    },

    mounted(){
        this.getoffers()
    }
  }
</script>