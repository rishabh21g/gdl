import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-surface border-t border-theme">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
                GD
              </div>
              <span className="text-2xl font-bold text-primary">GoDraw</span>
            </div>
            <p className="text-theme text-sm mb-4">
              Step up your creative game with GoDraw. The collaborative drawing platform
              trusted by teams worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-theme hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-theme hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-theme hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-theme hover:text-primary transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-theme mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#/features" className="text-theme text-sm hover:text-primary">Features</a></li>
              <li><a href="#/pricing" className="text-theme text-sm hover:text-primary">Pricing</a></li>
              <li><a href="#" className="text-theme text-sm hover:text-primary">Templates</a></li>
              <li><a href="#" className="text-theme text-sm hover:text-primary">Updates</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-theme mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#/about" className="text-theme text-sm hover:text-primary">About</a></li>
              <li><a href="#/contact" className="text-theme text-sm hover:text-primary">Contact</a></li>
              <li><a href="#" className="text-theme text-sm hover:text-primary">Blog</a></li>
              <li><a href="#" className="text-theme text-sm hover:text-primary">Careers</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-theme text-center">
          <p className="text-theme text-sm">
            2024 GoDraw. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
