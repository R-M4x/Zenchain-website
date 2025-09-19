import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Shield, Network, Zap, Brain, Layers, Lock } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Bitcoin Security",
      description: "Leverages Bitcoin's proven Layer 1 security model with advanced cryptographic schemes including Schnorr signatures and Taproot multi-signature protocols."
    },
    {
      icon: <Network className="h-8 w-8" />,
      title: "Cross-Chain Interoperability",
      description: "Native cross-chain interactions through the Cross-Chain Interoperability Module (CCIM), enabling seamless asset transfers and smart contract interactions."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Lightning Fast",
      description: "6-second block times with hybrid consensus combining RAGE for block production and GUARDIAN for provable finality."
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI-Powered Security",
      description: "Integrated with Niō AI for real-time threat detection, using machine learning to identify and prevent malicious activities."
    },
    {
      icon: <Layers className="h-8 w-8" />,
      title: "EVM + Wasm Compatible",
      description: "Full Ethereum Virtual Machine compatibility plus native WebAssembly support for enhanced performance and flexibility."
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "ZIP-20 Standard",
      description: "Innovative token standard for representing and managing assets from external blockchains with trust-minimized interoperability."
    }
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            The Borderless Blockchain
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            ZenChain represents the next evolution in blockchain technology, seamlessly bridging the gap between 
            Bitcoin's unparalleled security and Ethereum's programmable flexibility. As the first fully decentralized, 
            EVM-compatible Bitcoin Layer 1, ZenChain is revolutionizing cross-chain interoperability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-border/50 hover:border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Technical Architecture Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <Card className="border-border/50">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    Advanced Architecture
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Cross-Liquidity Consensus Mechanism (CLCM)</h4>
                        <p className="text-muted-foreground text-sm">State-of-the-art consensus protocol ensuring security and crypto-economic integrity.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">BARK Framework</h4>
                        <p className="text-muted-foreground text-sm">Blockchain Architect Resource Kit providing flexible and interoperable foundation.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Forkless Upgrades</h4>
                        <p className="text-muted-foreground text-sm">Continuous network evolution while preserving user trust and stability.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">ZTC</div>
                    <div className="text-sm text-muted-foreground mb-6">Native Gas Token</div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="text-center">
                        <div className="font-semibold text-foreground">Chain ID</div>
                        <div className="text-muted-foreground">8408</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-foreground">Decimals</div>
                        <div className="text-muted-foreground">18</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default About

