import { ExternalLink, Twitter, Github, MessageCircle, BookOpen } from 'lucide-react'
import zenChainLogo from '../assets/zenchain-logo.png'

const Footer = () => {
  const footerLinks = {
    product: [
      { name: 'Zenquest', href: 'https://zenquest.zenchain.io?referral=pv0CeBk3613_UDB6DssFgADojW6gxZmcaalsSKGbJz4' },
      { name: 'Status', href: 'https://status.zenchain.io/' },
      { name: 'Ecosystem', href: 'https://www.zenchain.io/ecosystem' },
      { name: 'Roadmap', href: 'https://www.zenchain.io/blog/zenchains-road-ahead' }
    ],
    developers: [
      { name: 'Documentation', href: 'https://docs.zenchain.io' },
      { name: 'Testnet Faucet', href: 'https://faucet.zenchain.io' },
      { name: 'Testnet Bridge', href: 'https://zenbridge.zenchain.io/' },
      { name: 'Github', href: 'https://github.com/zenchain-protocol' }
    ],
    community: [
      { name: 'Twitter', href: 'https://twitter.com/zen_chain' },
      { name: 'Discord', href: 'https://discord.gg/krysvGd9' },
      { name: 'Telegram', href: 'https://t.me/ZenchainAnnouncements' },
      { name: 'Blog', href: 'https://www.zenchain.io/blog' }
    ],
    resources: [
      { name: 'Litepaper', href: 'https://github.com/zenchain-protocol/litepaper' },
      { name: 'Blog', href: 'https://www.zenchain.io/' }
    ]
  }

  const socialLinks = [
    {
      name: 'Twitter',
      href: 'https://twitter.com/zen_chain',
      icon: <Twitter className="h-5 w-5" />
    },
    {
      name: 'GitHub',
      href: 'https://github.com/zenchain-protocol',
      icon: <Github className="h-5 w-5" />
    },
    {
      name: 'Discord',
      href: 'https://discord.gg/krysvGd9',
      icon: <MessageCircle className="h-5 w-5" />
    },
    {
      name: 'Documentation',
      href: 'https://docs.zenchain.io',
      icon: <BookOpen className="h-5 w-5" />
    }
  ]

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src={zenChainLogo} alt="ZenChain" className="h-8 w-8" />
              <span className="text-xl font-bold text-foreground">ZenChain</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              The first fully decentralized, EVM-compatible Bitcoin Layer 1, combining Bitcoin's 
              security with Ethereum's programmability for seamless cross-chain interactions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    {...(link.href.startsWith('http') && {
                      target: '_blank',
                      rel: 'noopener noreferrer'
                    })}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Developer Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Developers</h3>
            <ul className="space-y-3">
              {footerLinks.developers.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center"
                  >
                    {link.name}
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Community</h3>
            <ul className="space-y-3">
              {footerLinks.community.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center"
                    {...(link.href.startsWith('http') && {
                      target: '_blank',
                      rel: 'noopener noreferrer'
                    })}
                  >
                    {link.name}
                    {link.href.startsWith('http') && <ExternalLink className="ml-1 h-3 w-3" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center"
                    {...(link.href.startsWith('http') && {
                      target: '_blank',
                      rel: 'noopener noreferrer'
                    })}
                  >
                    {link.name}
                    {link.href.startsWith('http') && <ExternalLink className="ml-1 h-3 w-3" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2025 ZenChain. Made by R_lvl4x All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span>Chain ID: 8408</span>
              <span>Native Token: ZTC</span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

