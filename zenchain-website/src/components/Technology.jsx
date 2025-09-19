import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Network, Shield, Zap, Brain, Layers, ArrowRight } from 'lucide-react'

const Technology = () => {
  const techFeatures = [
    {
      icon: <Network className="h-6 w-6" />,
      title: "Cross-Chain Interoperability Module (CCIM)",
      description: "Native cross-chain interactions enabling seamless asset transfers and smart contract execution across Bitcoin, Ethereum, and other networks.",
      details: [
        "Trust-minimized bridge operations",
        "Bidirectional asset transfers",
        "Smart contract interoperability",
        "Multi-signature security with Schnorr signatures"
      ]
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Cross-Liquidity Consensus Mechanism (CLCM)",
      description: "State-of-the-art consensus protocol combining validators and nominators to ensure security and crypto-economic integrity.",
      details: [
        "Validator and nominator roles",
        "Stake-weighted governance",
        "Slashing protection mechanisms",
        "Democratic validation process"
      ]
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Hybrid Consensus: RAGE + GUARDIAN",
      description: "RAGE handles block production through randomized selection while GUARDIAN provides provable finality.",
      details: [
        "6-second block times",
        "Probabilistic block production",
        "Provable finality guarantee",
        "Continuous block generation"
      ]
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Niō AI Security Integration",
      description: "Machine learning-powered security monitoring system providing real-time threat detection and mitigation.",
      details: [
        "Real-time threat analysis",
        "Sybil attack prevention",
        "Financial scam detection",
        "Adaptive learning algorithms"
      ]
    }
  ]

  const comparisonData = [
    {
      feature: "Block Time",
      zenchain: "6 seconds",
      ethereum: "12 seconds",
      bitcoin: "10 minutes"
    },
    {
      feature: "Smart Contracts",
      zenchain: "EVM + Wasm",
      ethereum: "EVM",
      bitcoin: "Limited"
    },
    {
      feature: "Cross-Chain Native",
      zenchain: "✓ Built-in",
      ethereum: "✗ Requires bridges",
      bitcoin: "✗ No support"
    },
    {
      feature: "AI Security",
      zenchain: "✓ Niō Integration",
      ethereum: "✗ None",
      bitcoin: "✗ None"
    },
    {
      feature: "Forkless Upgrades",
      zenchain: "✓ Supported",
      ethereum: "✗ Hard forks",
      bitcoin: "✗ Hard forks"
    },
    {
      feature: "Consensus",
      zenchain: "CLCM (Hybrid)",
      ethereum: "Proof of Stake",
      bitcoin: "Proof of Work"
    }
  ]

  return (
    <section id="technology" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Advanced Technology Stack
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            ZenChain's architecture represents a sophisticated blend of proven blockchain technologies 
            and innovative consensus mechanisms, designed for the next generation of Web3 applications.
          </p>
        </motion.div>

        <Tabs defaultValue="features" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-12">
            <TabsTrigger value="features">Core Features</TabsTrigger>
            <TabsTrigger value="comparison">Network Comparison</TabsTrigger>
          </TabsList>

          <TabsContent value="features" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {techFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-border/50 hover:border-primary/20">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                          {feature.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-foreground">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {feature.description}
                      </p>
                      <ul className="space-y-2">
                        {feature.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center space-x-2 text-sm">
                            <ArrowRight className="h-3 w-3 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* ZIP-20 Token Standard */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <Card className="border-border/50 bg-gradient-to-r from-primary/5 to-primary/10">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="p-2 rounded-lg bg-primary/20 text-primary">
                          <Layers className="h-6 w-6" />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground">ZIP-20 Token Standard</h3>
                      </div>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        The ZIP-20 standard provides a versatile framework for representing and managing 
                        assets from external blockchains within the ZenChain ecosystem, enabling secure 
                        and efficient cross-chain asset transfers.
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <Badge variant="secondary" className="text-xs">Bridge Facilitators</Badge>
                          <span className="text-sm text-muted-foreground">Direct asset transfers</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant="secondary" className="text-xs">Custom Facilitators</Badge>
                          <span className="text-sm text-muted-foreground">Over-collateralization methods</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant="secondary" className="text-xs">Governance Approval</Badge>
                          <span className="text-sm text-muted-foreground">Community-validated security</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-card rounded-lg p-6 border border-border/50">
                      <h4 className="font-semibold text-foreground mb-4">Technical Specifications</h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Standard</span>
                          <span className="font-mono text-foreground">ZIP-20</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Compatibility</span>
                          <span className="font-mono text-foreground">Multi-chain</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Security Model</span>
                          <span className="font-mono text-foreground">Trust-minimized</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Governance</span>
                          <span className="font-mono text-foreground">Community-driven</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="comparison">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="border-border/50">
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left p-6 font-semibold text-foreground">Feature</th>
                          <th className="text-center p-6 font-semibold text-primary">ZenChain</th>
                          <th className="text-center p-6 font-semibold text-muted-foreground">Ethereum</th>
                          <th className="text-center p-6 font-semibold text-muted-foreground">Bitcoin</th>
                        </tr>
                      </thead>
                      <tbody>
                        {comparisonData.map((row, index) => (
                          <tr key={index} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                            <td className="p-6 font-medium text-foreground">{row.feature}</td>
                            <td className="p-6 text-center">
                              <Badge variant="default" className="bg-primary/10 text-primary border-primary/20">
                                {row.zenchain}
                              </Badge>
                            </td>
                            <td className="p-6 text-center text-muted-foreground font-mono text-sm">
                              {row.ethereum}
                            </td>
                            <td className="p-6 text-center text-muted-foreground font-mono text-sm">
                              {row.bitcoin}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>

        {/* Network Parameters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Network Parameters</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Chain ID", value: "8408" },
              { label: "Native Token", value: "ZTC" },
              { label: "Block Time", value: "6 seconds" },
              { label: "VM Support", value: "EVM + Wasm" }
            ].map((param, index) => (
              <Card key={index} className="text-center border-border/50">
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-primary mb-2">{param.value}</div>
                  <div className="text-sm text-muted-foreground">{param.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Technology

