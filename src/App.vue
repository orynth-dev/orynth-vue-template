<script setup lang="ts">
import { createAppKit } from '@reown/appkit/vue'
import { solanaAdapter, networks, projectId } from './config/index'

createAppKit({
  adapters: [solanaAdapter],
  networks,
  projectId,
  metadata: {
    name: 'Orynth Website Builder',
    description: 'Orynth - Build websites with wallet integration',
    url: 'https://orynth.dev',
    icons: ['https://avatars.githubusercontent.com/u/179229932?s=200&v=4']
  }
})
</script>

<template>
  <div class="app">
    <header>
      <h1>Orynth</h1>
      <p>Website Builder with Wallet Integration</p>
    </header>
    
    <main>
      <div class="wallet-connect">
        <appkit-button />
      </div>
      
      <div class="content">
        <h2>Welcome to Orynth</h2>
        <p>Build beautiful websites with integrated wallet functionality.</p>
      </div>
    </main>
  </div>
</template>

<style scoped>
.app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

header h1 {
  font-size: 3rem;
  color: #646cff;
  margin-bottom: 0.5rem;
}

header p {
  color: #666;
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.wallet-connect {
  margin: 2rem 0;
}

.content {
  margin-top: 3rem;
}

.content h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.content p {
  font-size: 1.1rem;
  color: #666;
}
</style>
