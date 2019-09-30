<template>
    <v-container>
        <v-card column>
            <v-card-title>
            <strong>Mes offres de cours</strong> 
            <v-spacer></v-spacer>
            <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
            ></v-text-field>
            </v-card-title>
            <v-data-table
            :headers="headers"
            :items="offers"
            :search="search"
            >
            <template v-slot:item.action="{ item }">
                    
            <v-icon        
                class="mr-2"
                color = 'green'
                medium 
                @click.prevent = ''       
            >
                mdi-information
            </v-icon>
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
        search: '',
        headers: [
          {
            text: "Nom de l'élève",
            align: 'left',
            sortable: true,
            value: 'student.name',
          },
          { text: 'Prénom élève', value: 'student.last_name'},
          { text: 'Classe', value: 'student.level.name' },
          { text: 'Matière', value: 'course.name' },
          { text: 'Ville', value: 'student.city' },
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
        })
    },

    mounted(){
        this.getoffers()
    }
  }
</script>