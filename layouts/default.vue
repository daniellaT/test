<template>
  <v-app id="inspire">
    <template v-if = 'loggedIn'>

      <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
        <v-subheader class="mt-4 grey--text text--darken-1">MAIN</v-subheader>
        <v-list-item
          v-for="item in items"
          :key="item.text"
          @click=""
          :to = "item.link"
        >
          <v-list-item-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-subheader class="mt-4 grey--text text--darken-1">EXTRA</v-subheader>
        <v-list>
          <v-list-item
            v-for="item in items2"
            :key="item.text"
            @click=""
          >
          <v-list-item-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-action>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item>
        </v-list>
          
        </v-list-item>
        
      </v-list>
    </v-navigation-drawer>

    </template> 
    

    <v-app-bar
      app
      clipped-left
      color="blue-grey lighten-4"
      dense
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="mr-12 align-center">
        <span class="title"><nuxt-link to="/"><img src="https://www.newera-tutoring.cm/style/img/tutor_logo.png" alt="tutor logo"></nuxt-link></span>
      </v-toolbar-title>
      <div class="flex-grow-1"></div>
      <v-row
        align="center"
        style="max-width: 650px"
      >
      <v-spacer></v-spacer>
      <template v-if="loggedIn">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn
              color="success"              
              v-on="on"
            >
              {{user.last_name}}<v-icon>mdi-account-circle</v-icon>
            </v-btn>
          </template>
          <v-list>
            <nuxt-link to = "/settings/change-password/">
              <v-list-item>
                <v-list-item-title><v-icon>mdi-settings-transfer-outline</v-icon> Mon compte</v-list-item-title>
              </v-list-item>
            </nuxt-link>
            <a @click="logout">
              <v-list-item>
              <v-list-item-title><v-icon>mdi-power</v-icon> se déconnecter</v-list-item-title>
            </v-list-item>
            </a>
            
          </v-list>
        </v-menu>
      </template>
        
      </v-row>
    </v-app-bar>

    <v-content>
      <v-container class="fill-height">
            <nuxt/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
      items: [
        { icon: 'mdi-home', text: 'Accueil', link: '/' },
        { icon: 'mdi-school', text: 'Mes élèves', link: '/students/' },
        { icon: 'mdi-barcode', text: 'Rémunération', link: '/coupons/validate-coupon/' },
        { icon: 'mdi-account-convert', text: 'Offres de cours',link: '/offers/'},
      ],
      items2: [
        // { icon: 'mdi-contact-mail', text: 'Contacter newera' },
        // { icon: 'mdi-book', text: 'Documents pédagogiques' },
        // { icon: 'mdi-bank', text: 'Récapitulatif de paie' }
      ],
    }),
     methods : {
      logout() {
      this.$auth.logout();
      }
    },
    computed : {
      loggedIn(){
        return this.$store.state.auth.loggedIn
      },

      user(){
        return this.$store.state.auth.user
      }
    }
  }
</script>