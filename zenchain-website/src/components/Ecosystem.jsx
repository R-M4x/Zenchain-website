import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Building2, Wallet, Shield, Zap, Code, Gamepad2 } from 'lucide-react'

const Ecosystem = () => {
  const partnerCategories = [
    {
      title: "Infrastructure",
      icon: <Building2 className="h-5 w-5" />,
      color: "bg-blue-500/10 text-blue-600 border-blue-500/20",
      partners: [
        {
          name: "SubQuery",
          description: "Advanced blockchain indexing tools for fast, intuitive access to on-chain data.",
          category: "Data Indexing"
        },
        {
          name: "OnFinality",
          description: "Scalable API endpoints and dedicated nodes powering ZenChain Station's validator deployment.",
          category: "Node Infrastructure"
        },
        {
          name: "Gas.zip",
          description: "Instant gas refuel bridging across 350+ chains for seamless cross-chain experiences.",
          category: "Cross-Chain Bridge"
        }
      ]
    },
    {
      title: "DeFi & Trading",
      icon: <Zap className="h-5 w-5" />,
      color: "bg-green-500/10 text-green-600 border-green-500/20",
      partners: [
        {
          name: "VirtuSwap",
          description: "AI-powered decentralized exchange delivering improved trading efficiency and liquidity depth.",
          category: "DEX"
        },
        {
          name: "ADEX",
          description: "First decentralized exchange on ZenChain, enabling seamless asset swaps across major blockchains.",
          category: "DEX"
        },
        {
          name: "Meson Finance",
          description: "Universal, low-cost, zero-slippage swaps with minute-fast execution and minimal fees.",
          category: "Cross-Chain Swaps"
        },
        {
          name: "Eonian Finance",
          description: "First insured decentralized savings account protocol with hack protection for wallets.",
          category: "DeFi Insurance"
        }
      ]
    },
    {
      title: "Wallets & UX",
      icon: <Wallet className="h-5 w-5" />,
      color: "bg-purple-500/10 text-purple-600 border-purple-500/20",
      partners: [
        {
          name: "Bitget Wallet",
          description: "Leading Web3 wallet supporting 130+ blockchains with comprehensive asset management.",
          category: "Multi-Chain Wallet"
        },
        {
          name: "Wigwam",
          description: "Multi-chain crypto wallet with ZenChain testnet support for streamlined interactions.",
          category: "Self-Custodial Wallet"
        },
        {
          name: "JOIN",
          description: "Crypto super app and smart wallet powered by MPC and Account Abstraction technologies.",
          category: "Smart Wallet"
        },
        {
          name: "Carbon Wallet",
          description: "Next-gen wallet integrated with Carbon Browser for seamless Web3 access.",
          category: "Browser Wallet"
        }
      ]
    },
    {
      title: "Security & Compliance",
      icon: <Shield className="h-5 w-5" />,
      color: "bg-red-500/10 text-red-600 border-red-500/20",
      partners: [
        {
          name: "Revoke.cash",
          description: "Security tool for inspecting and revoking token approvals with ZenChain testnet support.",
          category: "Security Tools"
        },
        {
          name: "Hooked Protocol",
          description: "Web3 education platform driving mass adoption through gamified learning experiences.",
          category: "Education & Security"
        }
      ]
    },
    {
      title: "Developer Tools",
      icon: <Code className="h-5 w-5" />,
      color: "bg-orange-500/10 text-orange-600 border-orange-500/20",
      partners: [
        {
          name: "Metana",
          description: "Career-focused coding bootcamp specializing in Web3, Solidity, and Rust development.",
          category: "Education"
        },
        {
          name: "Deploy Multiverse",
          description: "Comprehensive DeFi platform combining AI-powered tools with infrastructure.",
          category: "Development Platform"
        },
        {
          name: "ZNS Connect",
          description: "Decentralized naming service replacing complex addresses with user-friendly domain names.",
          category: "Domain Service"
        }
      ]
    },
    {
      title: "Gaming & NFTs",
      icon: <Gamepad2 className="h-5 w-5" />,
      color: "bg-pink-500/10 text-pink-600 border-pink-500/20",
      partners: [
        {
          name: "OmniHub",
          description: "Multichain NFT launchpad where users can create, collect, and trade NFTs on ZenChain.",
          category: "NFT Platform"
        },
        {
          name: "OnChainGM",
          description: "Multi-chain platform revolutionizing blockchain interactions through daily engagement protocols.",
          category: "Social Gaming"
        }
      ]
    }
  ]

  return (
    <section id="ecosystem" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ecosystem Partners
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            ZenChain's success is built upon a robust ecosystem of strategic partners who contribute unique 
            capabilities and services to enhance the network's functionality and reach across multiple categories.
          </p>
        </motion.div>

        <div className="space-y-12">
          {partnerCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-8">
                <div className={`p-2 rounded-lg ${category.color}`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.partners.map((partner, partnerIndex) => (
                  <motion.div
                    key={partnerIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: partnerIndex * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20 group">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                            {partner.name}
                          </h4>
                          <Badge variant="secondary" className="text-xs">
                            {partner.category}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {partner.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partnership Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <Card className="border-border/50 bg-gradient-to-r from-primary/5 to-primary/10">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-foreground mb-2">25+</div>
                  <div className="text-sm text-muted-foreground">Strategic Partners</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground mb-2">6</div>
                  <div className="text-sm text-muted-foreground">Partner Categories</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground mb-2">350+</div>
                  <div className="text-sm text-muted-foreground">Supported Chains</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Join the ZenChain Ecosystem
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Interested in partnering with ZenChain? We're always looking for innovative projects 
            and companies to join our growing ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.zenchain.io/ecosystem"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              View Full Ecosystem
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Ecosystem

