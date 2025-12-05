import { MainLayout } from '../layouts/MainLayout';
import { Target, Heart, Lightbulb, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission Driven',
      description: 'We exist to make visual collaboration accessible to everyone, everywhere.'
    },
    {
      icon: Heart,
      title: 'User Focused',
      description: 'Every feature we build starts with understanding our users needs.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We constantly push boundaries to create better collaboration tools.'
    },
    {
      icon: Users,
      title: 'Community Powered',
      description: 'Our community shapes the future of GoDraw through feedback and contributions.'
    }
  ];

  const team = [
    { name: 'Alex Thompson', role: 'CEO & Founder', initial: 'AT' },
    { name: 'Jordan Lee', role: 'CTO', initial: 'JL' },
    { name: 'Sam Rivera', role: 'Head of Design', initial: 'SR' },
    { name: 'Casey Morgan', role: 'Head of Product', initial: 'CM' }
  ];

  return (
    <MainLayout>
      <section className="bg-primary py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About GoDraw
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Building the future of visual collaboration
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-theme">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-theme text-center mb-8">Our Story</h2>
          <div className="space-y-6 text-theme text-lg">
            <p>
              GoDraw was born from a simple observation: teams needed better tools to visualize
              and share their ideas. Traditional whiteboarding tools were either too complex or
              lacked the features teams needed for effective collaboration.
            </p>
            <p>
              Founded in 2024, we set out to create a drawing tool that combines simplicity with
              powerful collaboration features. Today, GoDraw is trusted by thousands of teams
              worldwide to bring their ideas to life.
            </p>
            <p>
              Our mission is to make visual thinking accessible to everyone. Whether you're
              brainstorming with your team, teaching a class, or planning your next big project,
              GoDraw provides the tools you need to succeed.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-surface">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-theme text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="card text-center hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-theme mb-3">{value.title}</h3>
                <p className="text-theme">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-theme">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-theme text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="card text-center hover:shadow-lg transition-all">
                <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  {member.initial}
                </div>
                <h3 className="text-xl font-bold text-theme mb-1">{member.name}</h3>
                <p className="text-theme">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join us on our journey
          </h2>
          <p className="text-xl text-white mb-8">
            Be part of the future of visual collaboration
          </p>
          <button className="bg-white text-primary px-8 py-3 rounded-lg font-bold text-lg hover:bg-accent transition-colors">
            Get Started Today
          </button>
        </div>
      </section>
    </MainLayout>
  );
};

export default About;
