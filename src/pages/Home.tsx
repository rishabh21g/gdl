import { MainLayout } from '../layouts/MainLayout';
import {
  Presentation,
  Users,
  MessageSquare,
  Palette,
  Sparkles,
  Zap,
  Globe,
  Shield
} from 'lucide-react';

const Home = () => {
  return (
    <MainLayout>
      <section className="bg-theme py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-theme mb-6">
            Step up your <span className="text-primary italic" style={{ fontFamily: 'Square Peg, cursive', fontSize: '1.2em' }}>Excalidraw</span> game
          </h1>
          <p className="text-xl text-theme mb-8 max-w-2xl mx-auto">
            Start drawing with GoDraw's powerful collaboration tools and bring your ideas to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="btn-primary px-8 py-3 text-lg">
              Try GoDraw
            </button>
            <span className="text-theme text-sm">or watch a demo video</span>
          </div>

          <div className="bg-surface rounded-lg shadow-2xl p-8 max-w-4xl mx-auto">
            <div className="aspect-video bg-accent/20 rounded-lg flex items-center justify-center border-2 border-primary/20">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto bg-primary rounded-full flex items-center justify-center mb-4">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-theme font-semibold">Demo Video</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-surface">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <p className="text-primary font-semibold mb-2">TRUSTED WORLDWIDE</p>
          <h2 className="text-3xl md:text-4xl font-bold text-theme">
            Trusted by the people in largest companies in the world
          </h2>
        </div>
      </section>

      <section className="py-20 px-4 bg-theme">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-theme mb-4">
              Try <span className="text-primary">GoDraw</span>
            </h2>
            <p className="text-xl text-theme">Start creating amazing diagrams today</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Presentation className="text-white" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-theme">Presentations</h2>
              </div>
              <p className="text-theme text-lg mb-6">
                Create stunning presentations with our intuitive drawing tools and collaborative features.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-theme">Interactive whiteboard experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-theme">Real-time collaboration</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-theme">Export to multiple formats</span>
                </li>
              </ul>
            </div>
            <div className="bg-accent/20 rounded-lg p-8 aspect-square flex items-center justify-center border-2 border-primary/20">
              <Presentation className="text-primary" size={120} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-theme">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-accent/20 rounded-lg p-8 aspect-square flex items-center justify-center border-2 border-primary/20">
              <Users className="text-primary" size={120} />
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Users className="text-white" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-theme">Collaborative workspace</h2>
              </div>
              <p className="text-theme text-lg mb-6">
                Work together in real-time with your team, no matter where they are.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="card">
                  <h3 className="font-bold text-theme mb-2">Shared boards</h3>
                  <p className="text-theme text-sm">Multiple users can work simultaneously</p>
                </div>
                <div className="card">
                  <h3 className="font-bold text-theme mb-2">Live cursors</h3>
                  <p className="text-theme text-sm">See where team members are working</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <MessageSquare className="text-white" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-theme">Comments</h2>
              </div>
              <p className="text-theme text-lg mb-6">
                Add context to your drawings with powerful commenting tools.
              </p>
              <div className="space-y-4">
                <div className="card border-l-4 border-primary">
                  <p className="text-theme text-sm font-semibold mb-1">Threaded discussions</p>
                  <p className="text-theme text-sm">Keep conversations organized</p>
                </div>
                <div className="card border-l-4 border-secondary">
                  <p className="text-theme text-sm font-semibold mb-1">@mentions</p>
                  <p className="text-theme text-sm">Tag team members for input</p>
                </div>
                <div className="card border-l-4 border-accent">
                  <p className="text-theme text-sm font-semibold mb-1">Resolve & Archive</p>
                  <p className="text-theme text-sm">Mark conversations as complete</p>
                </div>
              </div>
            </div>
            <div className="bg-accent/20 rounded-lg p-8 aspect-square flex items-center justify-center border-2 border-primary/20">
              <MessageSquare className="text-primary" size={120} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-theme">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-theme mb-4">
            And <span className="text-primary italic" style={{ fontFamily: 'Square Peg, cursive', fontSize: '1.2em' }}>much more...</span>
          </h2>
          <p className="text-xl text-theme mb-12">
            Everything you need to bring your ideas to life
          </p>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="card hover:shadow-lg transition-shadow">
              <Palette className="text-primary mx-auto mb-4" size={40} />
              <h3 className="font-bold text-theme mb-2">Rich Drawing Tools</h3>
              <p className="text-theme text-sm">Shapes, arrows, text and more</p>
            </div>
            <div className="card hover:shadow-lg transition-shadow">
              <Sparkles className="text-primary mx-auto mb-4" size={40} />
              <h3 className="font-bold text-theme mb-2">Templates</h3>
              <p className="text-theme text-sm">Start with pre-built designs</p>
            </div>
            <div className="card hover:shadow-lg transition-shadow">
              <Zap className="text-primary mx-auto mb-4" size={40} />
              <h3 className="font-bold text-theme mb-2">Fast & Responsive</h3>
              <p className="text-theme text-sm">Smooth performance guaranteed</p>
            </div>
            <div className="card hover:shadow-lg transition-shadow">
              <Shield className="text-primary mx-auto mb-4" size={40} />
              <h3 className="font-bold text-theme mb-2">Secure & Private</h3>
              <p className="text-theme text-sm">Your data is protected</p>
            </div>
          </div>

          <button className="btn-primary px-8 py-3 text-lg">
            Start Drawing Now
          </button>
        </div>
      </section>

      <section className="py-20 px-4 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-theme mb-4">Feature comparison</h2>
            <p className="text-xl text-theme">See what makes GoDraw special</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-primary">
                  <th className="text-left py-4 px-4 text-theme font-bold">Feature</th>
                  <th className="text-center py-4 px-4">
                    <div className="font-bold text-primary text-lg">GoDraw</div>
                  </th>
                  <th className="text-center py-4 px-4 text-theme">Others</th>
                </tr>
              </thead>
              <tbody>
                {[
                  'Real-time collaboration',
                  'Unlimited boards',
                  'Comments & mentions',
                  'Version history',
                  'Export options',
                  'Template library',
                  'Mobile apps',
                  'Priority support'
                ].map((feature, idx) => (
                  <tr key={idx} className="border-b border-theme">
                    <td className="py-4 px-4 text-theme">{feature}</td>
                    <td className="text-center py-4 px-4">
                      <span className="text-primary text-2xl">✓</span>
                    </td>
                    <td className="text-center py-4 px-4">
                      <span className="text-gray-400 text-2xl">{idx < 4 ? '✓' : '−'}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-theme">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-theme mb-4">
              Loved by <span className="text-primary">individuals</span>
            </h2>
            <p className="text-xl text-theme">See what our users have to say</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Product Designer',
                content: 'GoDraw has transformed how our team collaborates. The real-time features are incredible!'
              },
              {
                name: 'Michael Chen',
                role: 'Engineering Manager',
                content: 'Best whiteboarding tool we have used. Simple, powerful, and fast.'
              },
              {
                name: 'Emily Rodriguez',
                role: 'UX Researcher',
                content: 'The intuitive interface makes it easy for anyone to jump in and start creating.'
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="card hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-bold text-theme">{testimonial.name}</div>
                    <div className="text-theme text-sm">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-theme">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-white mb-8">
            Join thousands of teams already using GoDraw
          </p>
          <button className="bg-white text-primary px-8 py-3 rounded-lg font-bold text-lg hover:bg-accent transition-colors">
            Start Drawing Free
          </button>
        </div>
      </section>
    </MainLayout>
  );
};

export default Home;
