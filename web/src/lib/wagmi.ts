import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { mainnet, base, optimism, arbitrum } from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "buidl.lol",
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "demo",
  chains: [mainnet, base, optimism, arbitrum],
  ssr: true,
});
