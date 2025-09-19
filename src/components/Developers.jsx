import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Code, Book, Zap, Terminal, GitBranch, Rocket } from 'lucide-react'

const Developers = () => {
  const resources = [
    {
      icon: <Book className="h-6 w-6" />,
      title: "Documentation",
      description: "Comprehensive guides and API references for building on ZenChain.",
      link: "https://docs.zenchain.io",
      badge: "Essential"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Testnet Faucet",
      description: "Get free ZTC tokens for testing your applications on the testnet.",
      link: "https://faucet.zenchain.io",
      badge: "Free Tokens"
    },
    {
      icon: <Terminal className="h-6 w-6" />,
      title: "RPC Endpoints",
      description: "Connect your development tools to ZenChain's testnet infrastructure.",
      link: "https://zenchain-testnet.api.onfinality.io/public",
      badge: "Infrastructure"
    },
    {
      icon: <GitBranch className="h-6 w-6" />,
      title: "GitHub Repository",
      description: "Access the open-source codebase and contribute to ZenChain's development.",
      link: "https://github.com/zenchain-protocol",
      badge: "Open Source"
    }
  ]

  const features = [
    {
      title: "EVM Compatibility",
      description: "Use familiar tools like Remix, Hardhat, and Truffle to deploy smart contracts.",
      icon: <Code className="h-8 w-8" />
    },
    {
      title: "WebAssembly Support",
      description: "Build high-performance dApps with native Wasm support and precompile integration.",
      icon: <Rocket className="h-8 w-8" />
    },
    {
      title: "Cross-Chain Native",
      description: "Build applications that interact seamlessly with Bitcoin, Ethereum, and other chains.",
      icon: <GitBranch className="h-8 w-8" />
    }
  ]

  const quickStart = [
    {
      step: "1",
      title: "Connect to Testnet",
      description: "Add ZenChain testnet to your wallet using Chain ID 8408"
    },
    {
      step: "2",
      title: "Get Test Tokens",
      description: "Visit the faucet to receive free ZTC tokens for development"
    },
    {
      step: "3",
      title: "Deploy Contracts",
      description: "Use your favorite tools to deploy and interact with smart contracts"
    },
    {
      step: "4",
      title: "Build Cross-Chain",
      description: "Leverage CCIM and ZIP-20 for cross-chain functionality"
    }
  ]

  return (
    <section id="developers" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Developer Resources
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Build the future of cross-chain applications with ZenChain's comprehensive developer tools, 
            documentation, and infrastructure. Get started in minutes with familiar Ethereum tooling.
          </p>
        </motion.div>

        {/* Quick Start Guide */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Quick Start Guide</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickStart.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center border-border/50 hover:border-primary/20 transition-colors">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      {item.step}
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Developer Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Why Build on ZenChain?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center border-border/50 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary inline-flex mb-4">
                      {feature.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">{feature.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Resources Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Essential Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-border/50 hover:border-primary/20 group">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                          {resource.icon}
                        </div>
                        <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {resource.title}
                        </h4>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {resource.badge}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {resource.description}
                    </p>
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <a href={resource.link} target="_blank" rel="noopener noreferrer">
                        Access Resource
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Network Configuration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="border-border/50 bg-gradient-to-r from-primary/5 to-primary/10">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Network Configuration</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-foreground mb-4">Testnet Details</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Network Name</span>
                      <span className="font-mono text-foreground">ZenChain Testnet</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Chain ID</span>
                      <span className="font-mono text-foreground">8408</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Currency Symbol</span>
                      <span className="font-mono text-foreground">ZTC</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Decimals</span>
                      <span className="font-mono text-foreground">18</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-4">RPC Endpoints</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-muted-foreground block mb-1">HTTP RPC</span>
                      <code className="text-xs bg-muted p-2 rounded block break-all">
                        https://zenchain-testnet.api.onfinality.io/public
                      </code>
                    </div>
                    <div>
                      <span className="text-muted-foreground block mb-1">WebSocket RPC</span>
                      <code className="text-xs bg-muted p-2 rounded block break-all">
                        wss://zenchain-testnet.api.onfinality.io/public-ws
                      </code>
                    </div>
                  </div>
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
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Start Building?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the growing community of developers building the future of cross-chain applications on ZenChain.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="https://docs.zenchain.io" target="_blank" rel="noopener noreferrer">
                View Documentation
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://faucet.zenchain.io" target="_blank" rel="noopener noreferrer">
                Get Test Tokens
                <Zap className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Developers

