import { SolanaAdapter } from '@reown/appkit-adapter-solana'
import { solana, solanaTestnet, solanaDevnet, type AppKitNetwork } from '@reown/appkit/networks'

export const projectId = "162f061fcc08eee3ed1840ff1717d8ef"
export const networks: [AppKitNetwork, ...AppKitNetwork[]] = [solana, solanaTestnet, solanaDevnet]
export const solanaAdapter = new SolanaAdapter()