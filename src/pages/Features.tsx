import { MainLayout } from '../layouts/MainLayout';
import {
  Palette,
  Users,
  MessageSquare,
  Download,
  History,
  Layers,
  Zap,
  Shield,
  Globe,
  Smartphone,
  Cloud,
  Lock
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Palette,
      title: 'Rich Drawing Tools',
      description: 'Access a comprehensive set of drawing tools including shapes, arrows, text, and freehand drawing.'
    },
    {
      icon: Users,
      title: 'Real-time Collaboration',
      description: 'Work together with your team in real-time. See live cursors and changes as they happen.'
    },
    {
      icon: MessageSquare,
      title: 'Comments & Mentions',
      description: 'Add context with threaded comments and mention team members to get their input.'
    },
    {
      icon: Download,
      title: 'Export Options',
      description: 'Export your drawings as PNG, SVG, or PDF with just one click.'
    },
    {
      icon: History,
      title: 'Version History',
      description: 'Never lose work with automatic version history. Restore previous versions anytime.'
    },
    {
      icon: Layers,
      title: 'Layers & Groups',
      description: 'Organize complex drawings with layers and group elements together.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance ensures smooth drawing even with complex diagrams.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and security features to protect your data.'
    },
    {
      icon: Globe,
      title: 'Share Anywhere',
      description: 'Generate shareable links with custom permissions and access controls.'
    },
    {
      icon: Smartphone,
      title: 'Mobile Ready',
      description: 'Access your drawings from any device with our responsive web app.'
    },
    {
      icon: Cloud,
      title: 'Cloud Storage',
      description: 'All your drawings are automatically saved and synced across devices.'
    },
    {
      icon: Lock,
      title: 'Private & Secure',
      description: 'Your data is encrypted and private. We never access your content.'
    }
  ];

  return (
    <MainLayout>
      <section className="bg-primary py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Powerful Features
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Everything you need to create, collaborate, and share your ideas
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-theme">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="card hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-theme mb-3">{feature.title}</h3>
                <p className="text-theme">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-surface">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-theme mb-6">
            Ready to experience these features?
          </h2>
          <p className="text-xl text-theme mb-8">
            Start using GoDraw today and see the difference
          </p>
          <button className="btn-primary px-8 py-3 text-lg">
            Get Started Free
          </button>
        </div>
      </section>
    </MainLayout>
  );
};

export default Features;
