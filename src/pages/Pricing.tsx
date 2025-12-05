import { MainLayout } from '../layouts/MainLayout';
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: [
        'Up to 3 boards',
        'Basic drawing tools',
        'Export as PNG',
        'Community support',
        '2 collaborators per board'
      ],
      highlighted: false
    },
    {
      name: 'Pro',
      price: '$12',
      period: 'per user/month',
      features: [
        'Unlimited boards',
        'Advanced drawing tools',
        'Export as PNG, SVG, PDF',
        'Priority support',
        'Unlimited collaborators',
        'Version history',
        'Comments & mentions',
        'Custom templates'
      ],
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact us',
      features: [
        'Everything in Pro',
        'SSO & SAML',
        'Advanced security',
        'Dedicated support',
        'Custom integrations',
        'SLA guarantee',
        'Training & onboarding',
        'Volume discounts'
      ],
      highlighted: false
    }
  ];

  return (
    <MainLayout>
      <section className="bg-primary py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Choose the plan that works best for you and your team
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-theme">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`card ${
                  plan.highlighted
                    ? 'border-2 border-primary shadow-2xl scale-105'
                    : ''
                } hover:shadow-lg transition-all`}
              >
                {plan.highlighted && (
                  <div className="badge mb-4">MOST POPULAR</div>
                )}
                <h3 className="text-2xl font-bold text-theme mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-theme ml-2">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-start gap-3">
                      <Check className="text-primary flex-shrink-0 mt-1" size={20} />
                      <span className="text-theme">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={
                    plan.highlighted
                      ? 'btn-primary w-full py-3'
                      : 'btn-ghost w-full py-3'
                  }
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-theme text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                question: 'Can I change my plan later?',
                answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.'
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards, PayPal, and bank transfers for enterprise plans.'
              },
              {
                question: 'Is there a free trial?',
                answer: 'Yes! Our Free plan is available forever. You can also try Pro features with a 14-day free trial.'
              },
              {
                question: 'Can I cancel anytime?',
                answer: 'Absolutely. No long-term contracts or cancellation fees. Cancel anytime from your account settings.'
              }
            ].map((faq, idx) => (
              <div key={idx} className="card">
                <h3 className="text-xl font-bold text-theme mb-2">{faq.question}</h3>
                <p className="text-theme">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Pricing;
