import React from 'react';
import PlanCard from '../components/subscription/PlanCard';
import { subscriptionPlans } from '../data/subscriptions';

const SubscriptionPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Upgrade Your Experience</h1>
        <p className="text-lg text-gray-600">
          Unlock premium templates and features with one of our subscription plans
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {subscriptionPlans.map((plan) => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </div>
      
      <div className="max-w-3xl mx-auto mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          {[
            {
              question: 'Can I cancel my subscription at any time?',
              answer: 'Yes, you can cancel your subscription at any time. Your benefits will continue until the end of your billing period.'
            },
            {
              question: 'How do I access premium templates?',
              answer: 'After subscribing to a premium plan, all premium templates will be automatically unlocked for you to use.'
            },
            {
              question: 'Can I change my plan later?',
              answer: 'Absolutely! You can upgrade or downgrade your plan at any time through your account settings.'
            },
            {
              question: 'Do you offer refunds?',
              answer: 'We offer a 7-day money-back guarantee if you\'re not satisfied with your subscription.'
            }
          ].map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;