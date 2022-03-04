<script lang="ts">
import { useRouter, useRoute } from 'vue-router'

export default {
  created() {
    const router: any = useRouter()
    const { params, query } = useRoute()
    const { path } = params
    router.replace({ path: `/${path}`, query })
  },
  render(h: any) {
    return h() // avoid warning message
  }
}
</script>
