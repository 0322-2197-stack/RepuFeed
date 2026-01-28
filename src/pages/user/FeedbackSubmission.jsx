import { MessageSquarePlus } from 'lucide-react';
import FeedbackForm from '../../components/common/FeedbackForm';

const FeedbackSubmission = () => {
  // Handler for API integration - to be connected to Laravel backend
  const handleFeedbackSubmit = async (data) => {
    // TODO: Replace with actual API call
    // Example:
    // const response = await axios.post('/api/feedback', data);
    // return response.data;
    
    console.log('Submitting feedback to API:', data);
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
  };

  return (
    <div className="min-h-screen bg-neutral-offWhite py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-orange/10 rounded-full mb-6">
            <MessageSquarePlus className="w-8 h-8 text-primary-orange" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
            Share Your Feedback
          </h1>
          <p className="text-neutral-slate text-lg max-w-2xl mx-auto">
            We value your opinion! Your feedback helps us improve and helps others 
            make informed decisions. All reviews are moderated before being published.
          </p>
        </div>

        {/* Feedback Form */}
        <FeedbackForm onSubmit={handleFeedbackSubmit} />

        {/* Info Section */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="bg-white rounded-xl p-6 border border-neutral-lightGray">
            <h3 className="font-semibold text-primary-dark mb-3">Review Guidelines</h3>
            <ul className="space-y-2 text-neutral-slate text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primary-orange font-bold">•</span>
                Be honest and constructive in your feedback
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-orange font-bold">•</span>
                Focus on your actual experience
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-orange font-bold">•</span>
                Avoid using offensive or inappropriate language
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-orange font-bold">•</span>
                Reviews are moderated and may take up to 24 hours to appear
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackSubmission;
