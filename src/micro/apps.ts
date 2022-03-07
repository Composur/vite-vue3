// const apps: RegistrableApp<IAppProps>[] = [
// const { VUE_APP_EMD_APP_URL, VUE_APP_ET_APP_URL } = import.meta.env
const apps = [
  {
    name: 'VueMicroApp',
    entry: '//localhost:10200',
    container: '#frame',
    // activeRule: (location: any) => location.pathname.startsWith('/micro')
    activeRule: '/vue'
  },
  {
    name: 'static',
    entry: '//localhost:10201',
    container: '#frame',
    activeRule: '/static'
  }
]

export default apps
