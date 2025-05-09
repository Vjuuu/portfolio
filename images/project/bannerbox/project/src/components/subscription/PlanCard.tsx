import React from 'react';
import { Check } from 'lucide-react';
import Card, { CardHeader, CardContent, CardFooter } from '../ui/Card';
import Button from '../ui/Button';
import { SubscriptionPlan } from '../../types';

interface PlanCardProps {
  plan: SubscriptionPlan;
}

const PlanCard: React.FC<PlanCardProps> = ({ plan }) => {
  return (
    <Card className={`${plan.isPopular ? 'border-2 border-blue-500 scale-105' : 'border border-gray-200'} transition-all duration-300 hover:shadow-lg`}>
      {plan.isPopular && (
        <div className="bg-blue-500 text-white text-center py-1 text-sm font-medium">
          Most Popular
        </div>
      )}
      
      <CardHeader className="text-center">
        <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
        <div className="mt-2">
          <span className="text-3xl font-extrabold">${plan.price}</span>
          <span className="text-gray-500">/{plan.period}</span>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <ul className="space-y-3">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="flex-shrink-0">
                <Check className="h-5 w-5 text-green-500" />
              </div>
              <p className="ml-3 text-sm text-gray-700">{feature}</p>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter className="flex justify-center">
        <Button 
          variant={plan.isPopular ? 'primary' : 'outline'} 
          fullWidth
        >
          {plan.price === 0 ? 'Current Plan' : 'Upgrade Now'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PlanCard;