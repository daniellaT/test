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
              <p v-if="offerDetail.course"><strong>Matière:</strong> <span class="ml-10">{{offerDetail.course.name}}</span></p>
              <v-divider></v-divider>
              <p v-if="offerDetail.student"><strong>Classe:</strong>   <span class="ml-10">{{offerDetail.student.level.name}}</span></p>
              <v-divider></v-divider>
              <p v-if="offerDetail.course"><strong>Quartier:</strong>  <span class="ml-10">{{offerDetail.student.area}}</span></p>
              <v-divider></v-divider>
              <p v-if="offerDetail.course"><strong>Ville:</strong>  <span class="ml-10">{{offerDetail.student.city}}</span></p>
              <v-divider></v-divider>
              <p ><strong>Durée:</strong>  <span class="ml-10">{{offerDetail.course_time}}h</span></p>
              <v-divider></v-divider>
              <p ><strong>Fréquence par semaine:</strong>  <span class="ml-10">{{offerDetail.frequency}}</span></p>
              <v-divider></v-divider>
              <p ><strong>Début des cours:</strong>  <span class="ml-10">{{offerDetail.starting_date}}</span></p>
              <v-divider></v-divider>
              <p ><strong>Salaire horaire:</strong>  <span class="ml-10">{{offerDetail.hourly_pay}}/h</span></p>
              <v-divider></v-divider>
              <p><strong>Disponibilités de l'élève:</strong>  <span class="ml-10">{{offerDetail.availability}}</span></p>
            </v-card-text>
          </v-card>
        </v-col>
        
      </v-row>
      <v-form>

            <v-checkbox
              v-model="checkbox"
              label="Postuler"
            ></v-checkbox>

            <v-btn
              v-if="checkbox"
              color="success"
              class="mr-4"
              @click="postulate"
            >
              Postuler
            </v-btn>
    </v-form>
    </v-container>
  </v-card>
</div>
    
  
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  
    data (){
        return {
          application : {
            tutor : this.$store.state.auth.user.id,
            offer : this.$route.params.id
          },
          checkbox : false,
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

        offerDetail : {}
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

            apply : 'offer/postulate'
        }),

        getOffer(){
            this.getoffer({id:this.$route.params.id}).then(()=>{
              this.offerDetail = this.get_offer
            })
        },

        postulate(){
          this.apply({payload : this.application})
        }
    },      

    
     mounted() {
           this.getOffer()              
        }    
}
</script>