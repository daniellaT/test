<template>
<div>
    <v-breadcrumbs :items="items">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
    <v-card
  >

    <v-app-bar dark color="primary">

      <v-toolbar-title>Détails du cours</v-toolbar-title>

      <div class="flex-grow-1"></div>
    </v-app-bar>

    <v-container
      class="pa-2"
      fluid
    >
      <v-row>
        <v-col>
          <v-card
            color="#385F73"
            dark
          >
            <v-card-text class="white--text">
              <div class="headline mb-2">Details sur l'élève</div>
              <p v-if="tutoring.student"><strong>Nom:</strong> {{tutoring.student.name}} </p>
              <p v-if="tutoring.student"><strong>Prénom:</strong> {{tutoring.student.last_name}} </p>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col>
          <v-card
            color="#385F73"
            dark
          >
            <v-card-text class="white--text">
              <div class="headline mb-2">Adresse de la famille</div>
              <p v-if="tutoring.student"><strong>Ville:</strong> {{tutoring.student.city}} </p>
              <p v-if="tutoring.student"><strong>Quartier:</strong> {{tutoring.student.area}} </p>
              <p v-if="tutoring.student"><strong>No Père:</strong> {{tutoring.student.father_number}} </p>
              <p v-if="tutoring.student"><strong>No Mère:</strong> {{tutoring.student.mother_number}} </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
          <v-col>
              <v-card
              color="#385F73"
                dark>
                  <v-card-text class="white--text">
                <div class="headline mb-2">Détails du cours</div>
                <p v-if="tutoring.course"><strong >Matère:</strong> {{tutoring.course.name}}</p>
                <p ><strong>Nombre heures/ mois:</strong> {{tutoring.number_of_hours}} </p>
                <p><strong>Rémunération :</strong> {{tutoring.tutor_price}} FCFA / h</p>
            </v-card-text>
              </v-card>
              
          </v-col>
      </v-row>
    </v-container>
  </v-card>
</div>
    
  
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  
    data (){
        return {
        items: [
        {
          text: 'Accueil',
          disabled: false,
          to: '/',
        },
        {
          text: 'Mes élèves',
          disabled: false,
          href: '/students/',
        },
        {
          text: 'Détails',
          disabled: true
        },
      ],

        tutoring : {}
        }
    },
    computed : {
        ...mapGetters({
            get_tutoring : 'tutoring/get_tutoring'
        })
    },    
    methods : {
        ...mapActions({
            gettutoring : 'tutoring/getTutoring',
        }),

        getTutoring(){
            this.gettutoring({id:this.$route.params.id}).then(()=>{
              this.tutoring = this.get_tutoring
            })
        },
    },      

    
     mounted() {
           this.getTutoring()              
        }    
}
</script>