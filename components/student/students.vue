<template>
  <v-container>
    <v-card column>
    <v-card-title>
      <strong>Mes élèves</strong> 
      <v-spacer></v-spacer>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="tutorings"
    >
    <template v-slot:item.action="{ item }">
            
      <v-icon        
        class="mr-2"
        color = 'green'
        medium 
        @click.prevent = 'show(item.id)'       
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
          { text: 'Actions',sortable: false,  value: 'action'}          
        ]
      }
    },

    computed : {

        ...mapGetters ({
            tutorings : 'tutoring/get_tutorings'
        })
    },

    methods : {
        ...mapActions({
            gettutorings : 'tutoring/getTutorings'
        }),
         show(id) {
            this.$router.push('/students/'+ id)
         }
    },

    mounted(){
        this.gettutorings()
    }
  }
</script>