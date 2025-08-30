import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'ubc430je',
    dataset: 'production'
  },
  autoUpdates: true,
})
