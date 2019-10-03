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
            color="#385F73"
            dark
          >
            <v-card-text class="white--text">
              <p v-if="offer.course">Matière: <span class="ml-10">{{offer.course.name}}</span></p>
              <v-divider></v-divider>
              <p v-if="offer.student">Classe:  <span class="ml-10">{{offer.student.level.name}}</span></p>
              <v-divider></v-divider>
              <p v-if="offer.course">Adresse:  <span class="ml-10">{{offer.student.area}}</span></p>
              <v-divider></v-divider>
              <p >Durée :  <span class="ml-10">{{offer.course_time}}h</span></p>
              <v-divider></v-divider>
              <p >Fréquence :  <span class="ml-10">{{offer.frequency}}</span></p>
              <v-divider></v-divider>
              <p >Début des cours:  <span class="ml-10">{{offer.starting_date}}</span></p>
              <v-divider></v-divider>
              <p >Salaire horaire net:  <span class="ml-10">{{offer.hourly_pay}}/h</span></p>
              <v-divider></v-divider>
              <p>Disponibilités de l'élève:  <span class="ml-10">{{offer.availability}}</span></p>
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
          text: 'Offres',
          disabled: false,
          to: '/offers',
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