<template>
 <v-card>
   <div class="text-center py-5">
     <h2>Tutorial</h2>
   </div>
   <div class="pa-4">
     <ul>
       <li v-for="(item, i) in items" :key="i">{{ item }}</li>
     </ul>
   </div>
   <div class="pa-3 text-center">
     <p>Wichtig: Diese Software läuft nicht immer perfekt, bei Fragen an Peasplayer wenden.
     </p>
   </div>
 </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class Tutorial extends Vue {
  items = [
    'Gebe deinen genauen Namen und Code aus Among Us ein',
    'Wählr den Server Typ.',
    'Wenn du auf den offiziellen Servern spielst, wähle die Region ansonsten gebe eine IP ein',
    'Drücke auf "Join" um dich einzuloggen.',
    'Erlaube den Zugriff auf dein Mikrofon.',
    'Wenn es nicht funktioniert, überprüfe deine Eingaben und lade ggf. die Seite neu oder verwende einen anderen Browser wie Firefox oder Chrome'
  ]
}
</script>
<style scoped lang="stylus">
.highlight
  font-weight bold
  font-size large
</style>
