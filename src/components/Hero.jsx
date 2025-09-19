import { Button } from '@/components/ui/button'
import { ArrowRight, ExternalLink, Zap, Shield, Network } from 'lucide-react'
import { motion } from 'framer-motion'
import zenChainHero from '../assets/zenchain-hero.jpg'

const Hero = () => {
  const features = [
    {
      icon: <Shield className="h-5 w-5" />,
      text: "Bitcoin Security"
    },
    {
      icon: <Network className="h-5 w-5" />,
      text: "Ethereum Compatibility"
    },
    {
      icon: <Zap className="h-5 w-5" />,
      text: "6-Second Blocks"
    }
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={zenChainHero} 
          alt="ZenChain Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/80 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8"
          >
            <Zap className="h-4 w-4 mr-2" />
            The First Decentralized Bitcoin L1
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
          >
            Where Bitcoin Meets{' '}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Ethereum
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            ZenChain combines Bitcoin's unparalleled security with Ethereum-compatible programmability, 
            creating the first fully decentralized, EVM-compatible Bitcoin Layer 1 for seamless cross-chain interactions.
          </motion.p>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 px-4 py-2 rounded-full bg-card border border-border text-sm"
              >
                {feature.icon}
                <span>{feature.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button size="lg" className="group" asChild>
              <a href="https://zenquest.zenchain.io?referral=pv0CeBk3613_UDB6DssFgADojW6gxZmcaalsSKGbJz4" target="_blank" rel="noopener noreferrer">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://docs.zenchain.io" target="_blank" rel="noopener noreferrer">
                Read Documentation
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 pt-16 border-t border-border"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-2">6s</div>
              <div className="text-sm text-muted-foreground">Block Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-2">EVM+</div>
              <div className="text-sm text-muted-foreground">Compatible</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-2">L1</div>
              <div className="text-sm text-muted-foreground">Bitcoin Security</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero

