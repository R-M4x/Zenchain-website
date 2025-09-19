import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, MessageCircle, Users, Twitter, Github, BookOpen, Zap } from 'lucide-react'

const Community = () => {
  const socialLinks = [
    {
      name: "Twitter",
      icon: <Twitter className="h-6 w-6" />,
      description: "Follow @zen_chain for the latest updates, announcements, and ecosystem news.",
      link: "https://twitter.com/zen_chain",
      members: "50K+ Followers",
      color: "bg-blue-500/10 text-blue-600 border-blue-500/20"
    },
    {
      name: "Discord",
      icon: <MessageCircle className="h-6 w-6" />,
      description: "Join our Discord community for real-time discussions, technical support, and collaboration.",
      link: "#",
      members: "15K+ Members",
      color: "bg-purple-500/10 text-purple-600 border-purple-500/20"
    },
    {
      name: "GitHub",
      icon: <Github className="h-6 w-6" />,
      description: "Contribute to ZenChain's open-source development and review the codebase.",
      link: "https://github.com/zenchain-protocol",
      members: "Open Source",
      color: "bg-gray-500/10 text-gray-600 border-gray-500/20"
    },
    {
      name: "Documentation",
      icon: <BookOpen className="h-6 w-6" />,
      description: "Access comprehensive guides, tutorials, and API references for developers.",
      link: "https://docs.zenchain.io",
      members: "Developer Hub",
      color: "bg-green-500/10 text-green-600 border-green-500/20"
    }
  ]

  const governanceFeatures = [
    {
      title: "Validator Participation",
      description: "Run validator nodes to secure the network and earn staking rewards through ZenChain Station.",
      icon: <Zap className="h-6 w-6" />
    },
    {
      title: "Nomination System",
      description: "Support trusted validators by nominating them with your ZTC tokens and earn proportional rewards.",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Governance Voting",
      description: "Participate in key network decisions including protocol upgrades and ZIP-20 facilitator approvals.",
      icon: <MessageCircle className="h-6 w-6" />
    }
  ]

  const stats = [
    { label: "Participants", value: "1M+" },
    { label: "XP-Earned", value: "276M+" },
    { label: "Twitter followers", value: "70K+" },
    { label: "Discord members", value: "100k+" }
  ]

  return (
    <section id="community" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Join the ZenChain Community
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Be part of a vibrant community of developers, validators, and enthusiasts building the future 
            of cross-chain interoperability. Connect, collaborate, and contribute to the ZenChain ecosystem.
          </p>
        </motion.div>

        {/* Community Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center border-border/50">
                  <CardContent className="p-6">
                    <div className="text-2xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Connect With Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {socialLinks.map((social, index) => (
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
                        <div className={`p-2 rounded-lg ${social.color}`}>
                          {social.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                            {social.name}
                          </h4>
                          <Badge variant="secondary" className="text-xs mt-1">
                            {social.members}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {social.description}
                    </p>
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <a href={social.link} target="_blank" rel="noopener noreferrer">
                        Join {social.name}
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Governance & Participation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Governance & Participation</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {governanceFeatures.map((feature, index) => (
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

        {/* Educational Resources */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="border-border/50 bg-gradient-to-r from-primary/5 to-primary/10">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Educational Initiatives</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    ZenChain prioritizes education and knowledge sharing through partnerships with leading 
                    educational platforms and regular community events.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary" className="text-xs">Hooked Protocol</Badge>
                      <span className="text-sm text-muted-foreground">Gamified Web3 learning</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary" className="text-xs">Metana Bootcamp</Badge>
                      <span className="text-sm text-muted-foreground">Professional development</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary" className="text-xs">AMAs & Events</Badge>
                      <span className="text-sm text-muted-foreground">Regular community sessions</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">10M+</div>
                  <div className="text-sm text-muted-foreground mb-4">Users Educated</div>
                  <p className="text-xs text-muted-foreground">
                    Through our educational partnerships and community initiatives
                  </p>
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
            Ready to Join the Movement?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're a developer, validator, or blockchain enthusiast, there's a place for you 
            in the ZenChain community. Start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="https://twitter.com/zen_chain" target="_blank" rel="noopener noreferrer">
                Follow on Twitter
                <Twitter className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://docs.zenchain.io" target="_blank" rel="noopener noreferrer">
                Start Building
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Community

