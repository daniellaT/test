<template>
<div>
    <v-breadcrumbs :items="items">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
    <v-card>
    <v-app-bar dark color="indigo">
      <v-toolbar-title>Détails de l'offre</v-toolbar-title>
      <div class="flex-grow-1"></div>
    </v-app-bar>

    <v-container
      class="pa-2"
      fluid
    >
      <v-row>
        <v-col>
          <v-card
            
          >
            <v-card-text class="black--text">
              <p v-if="offer.course"><strong>Matière:</strong> <span class="ml-10">{{offer.course.name}}</span></p>
              <v-divider></v-divider>
              <p v-if="offer.student"><strong>Classe:</strong>   <span class="ml-10">{{offer.student.level.name}}</span></p>
              <v-divider></v-divider>
              <p v-if="offer.course"><strong>Quartier:</strong>  <span class="ml-10">{{offer.student.area}}</span></p>
              <v-divider></v-divider>
              <p v-if="offer.course"><strong>Ville:</strong>  <span class="ml-10">{{offer.student.city}}</span></p>
              <v-divider></v-divider>
              <p ><strong>Durée:</strong>  <span class="ml-10">{{offer.course_time}}h</span></p>
              <v-divider></v-divider>
              <p ><strong>Fréquence par semaine:</strong>  <span class="ml-10">{{offer.frequency}}</span></p>
              <v-divider></v-divider>
              <p ><strong>Début des cours:</strong>  <span class="ml-10">{{offer.starting_date}}</span></p>
              <v-divider></v-divider>
              <p ><strong>Salaire horaire:</strong>  <span class="ml-10">{{offer.hourly_pay}}/h</span></p>
              <v-divider></v-divider>
              <p><strong>Disponibilités de l'élève:</strong>  <span class="ml-10">{{offer.availability}}</span></p>
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
              text: 'liste des offres',
              disabled: false,
              href: '/offers',
            },
            {
              text: 'Détails',
              disabled: true
            },
          ],

        offer : {}
        }
    },
    computed : {
        ...mapGetters({
            get_offer : 'offer/get_offer'
        })
    },    
    methods : {
        ...mapActions({
            getoffer : 'offer/getOffer',
        }),

        getOffer(){
            this.getoffer({id:this.$route.params.id}).then(()=>{
              this.offer = this.get_offer
            })
        },
    },      

    
     mounted() {
           this.getOffer()              
        }    
}
</script>