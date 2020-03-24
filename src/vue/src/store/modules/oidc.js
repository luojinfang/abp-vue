import { vuexOidcCreateStoreModule } from 'vuex-oidc'
import setting from '@/settings.js'

const oidcStoreSetting = {
  namespaced: true,
  dispatchEventsOnWindow: false,
  publicRoutePaths: setting.publicRoutePaths
}

const oidcEventListeners = {
  userLoaded: user => {
    console.log('OIDC user is loaded:', user)
  },
  userUnloaded: () => console.log('OIDC user is unloaded'),
  accessTokenExpiring: () => console.log('Access token will expire'),
  accessTokenExpired: () => console.log('Access token did expire'),
  silentRenewError: () => console.log('OIDC user is unloaded'),
  userSignedOut: () => console.log('OIDC user is signed out'),
  oidcError: payload => console.log('OIDC error', payload)
}

export default vuexOidcCreateStoreModule(
  setting.oidcSettings,
  oidcStoreSetting,
  oidcEventListeners
)