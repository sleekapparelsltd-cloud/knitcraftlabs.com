
import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="relative w-8 h-8">
                <Image
                  src="https://cdn.abacus.ai/images/3e316a67-fc5c-42f2-a59c-b33dbd15bbe3.png"
                  alt="KnitCraft Labs"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-xl">KnitCraft Labs</span>
            </Link>
            <p className="text-slate-300 mb-6 max-w-md">
              Custom apparel manufacturing for startups & small brands. Ethical production, low MOQs, and exceptional quality delivered worldwide.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm text-slate-300">
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>+880 1861 011367</span>
              </div>
              <a 
                href="https://wa.me/8801861011367"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-sm text-emerald-400 hover:text-emerald-300"
              >
                <span>WhatsApp</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Services', href: '/services' },
                { name: 'Products', href: '/products' },
                { name: 'Sample Development', href: '/sample-development' },
                { name: 'Uniforms', href: '/uniforms' },
                { name: 'Portfolio', href: '/portfolio' },
                { name: 'Blog', href: '/blog' },
                { name: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-emerald-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Updated as per PDF requirements */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <Mail className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div>hello@knitcraftlabs.com</div>
                  <div>quotes@knitcraftlabs.com</div>
                </div>
              </div>
              <div className="bg-emerald-900/20 p-2 rounded text-xs text-emerald-200">
                <strong>SLA:</strong> We reply within 1 business day
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Company Information */}
        <div className="border-t border-slate-700 mt-8 pt-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-emerald-400 mb-3">Bangladesh (Head Office & Manufacturing)</h4>
              <div className="text-sm text-slate-300 space-y-2">
                <div>
                  <div className="font-medium text-white mb-1">Sleek Apparels Limited</div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div><strong>Headquarters:</strong> 01, Rd 19A, Sector 04</div>
                      <div>Uttara East, Dhaka 1230</div>
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div><strong>Manufacturing Plant:</strong> 114/3 Khapara Rd</div>
                    <div>Tongi West, Gazipur-1712</div>
                  </div>
                </div>
                <div className="bg-slate-800 p-2 rounded text-xs">
                  <strong>Business Identification Number (BIN):</strong><br />
                  006626088-0102
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-emerald-400 mb-3">United States Office</h4>
              <div className="text-sm text-slate-300 space-y-2">
                <div>
                  <div className="font-medium text-white mb-1">Sleek Apparels LLC</div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div>271 W. Short St Ste 410 #2082</div>
                      <div>Lexington, Kentucky 40507, USA</div>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-800 p-2 rounded text-xs">
                  <div><strong>Registered in:</strong> State of Kentucky</div>
                  <div><strong>Business / Entity ID:</strong> 1476861</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-slate-400 text-sm">
              <strong>KnitCraft Labs</strong> is a brand of <strong>Sleek Apparels Limited</strong>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-700 mt-8 pt-6 text-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} KnitCraft Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
