<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4">
        <ServerConnector @joinroom="joinRoom($event)" />
      </v-col>
      <v-col  cols="12" md="4">
        <HostOptions />
      </v-col>
      <v-col cols="12" md="4">
        <ServerDisplayer />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6" order-md="1">
        <Tutorial />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { BackendModel } from '@/models/BackendModel'
import ClientSocketEvents from '@/models/ClientSocketEvents'
import ServerConnector from '@/components/ServerConnector.vue'
import ServerDisplayer from '@/components/ServerDisplayer.vue'
import Tutorial from '@/components/Tutorial.vue'
import DiscordServer from '@/components/DiscordServer.vue'
import GithubStar from '@/components/GithubStar.vue'
import HostOptions from '@/components/HostOptions.vue'
import consts from '@/consts'

@Component({
  components: {
    GithubStar,
    DiscordServer,
    Tutorial,
    ServerConnector,
    ServerDisplayer,
    HostOptions
  }
})
export default class Home extends Vue {
  discordUrl = consts.DISCORD_INVITE_URL
  githubUrl = consts.GITHUB_URL

  joinRoom (event: { name: string; backendModel: BackendModel }) {
    const payload = {
      name: event.name,
      backendModel: event.backendModel
    }
    this.$store.commit('setJoinedRoom', true)
    this.$store.commit('setNameAndBackendModel', payload)
    this.$socket.client.emit(ClientSocketEvents.JoinRoom, payload)
  }
}
</script>
