// const apps: RegistrableApp<IAppProps>[] = [
// const { VUE_APP_EMD_APP_URL, VUE_APP_ET_APP_URL } = import.meta.env
const apps = [
  {
    name: 'app1',
    entry: '//localhost:9020',
    container: '#frame',
    // activeRule: (location: any) => location.pathname.startsWith('/micro')
    activeRule: '/micro/app1'
  }
]

export default apps
