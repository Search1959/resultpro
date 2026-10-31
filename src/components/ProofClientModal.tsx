import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';

interface ProofClientModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProofClientModal: React.FC<ProofClientModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    city: 'Kolkata',
    service: 'Web Development',
    targetMetric: '',
    phone: '',
    email: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Please enter your name';
    if (!formData.businessName.trim()) newErrors.businessName = 'Please enter your company or business';
    if (!formData.phone.trim() || formData.phone.length < 8) newErrors.phone = 'Please provide a valid contact number';
    if (!formData.targetMetric.trim()) newErrors.targetMetric = 'Tell us what metric you need to improve';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-amber-600">
              Phase 1 · 0–3 Months Window
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Apply as a Proof Client
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-800 rounded-lg hover:bg-slate-200 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">
              Application Received!
            </h4>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              Thank you, <span className="font-semibold text-slate-900">{formData.fullName}</span> from{' '}
              <span className="font-semibold text-slate-900">{formData.businessName}</span>.
              We are reviewing your target metric:{' '}
              <span className="italic font-medium text-amber-700">“{formData.targetMetric}”</span>.
            </p>

            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-left text-xs text-slate-700 space-y-2 mb-6">
              <div className="font-bold text-slate-900">The Proof Client Commitment:</div>
              <div>• 1-on-1 discovery to define launch pricing</div>
              <div>• We focus 100% on moving your designated metric</div>
              <div>• In return, we produce a 1-page case study + video review after success</div>
            </div>

            <button
              onClick={handleReset}
              className="w-full py-3 px-4 text-sm font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="text-xs text-slate-500 bg-amber-500/10 p-3 rounded-lg border border-amber-500/20 text-slate-700 flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span>
                <strong>Launch Pricing:</strong> Only 3–5 proof client slots available.
                We guarantee focused attention on your target number.
              </span>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="e.g. Rahul Sen"
                className={`w-full px-3.5 py-2 text-sm rounded-lg border ${
                  errors.fullName ? 'border-red-500 bg-red-50/30' : 'border-slate-300'
                } focus:outline-none focus:ring-2 focus:ring-amber-500`}
              />
              {errors.fullName && (
                <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                  Business / Company *
                </label>
                <input
                  type="text"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  placeholder="e.g. Bengal Logistics"
                  className={`w-full px-3.5 py-2 text-sm rounded-lg border ${
                    errors.businessName ? 'border-red-500 bg-red-50/30' : 'border-slate-300'
                  } focus:outline-none focus:ring-2 focus:ring-amber-500`}
                />
                {errors.businessName && (
                  <p className="text-xs text-red-600 mt-1">{errors.businessName}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                  City
                </label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98300 XXXXX"
                  className={`w-full px-3.5 py-2 text-sm rounded-lg border ${
                    errors.phone ? 'border-red-500 bg-red-50/30' : 'border-slate-300'
                  } focus:outline-none focus:ring-2 focus:ring-amber-500`}
                />
                {errors.phone && (
                  <p className="text-xs text-red-600 mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@company.com"
                  className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                Primary Product / Service Needed
              </label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
              >
                <option value="Web Development">Web Development (High Conversion Landing Page)</option>
                <option value="Custom App">Custom App (Workflow, CRM, or Client Portal)</option>
                <option value="Digital Marketing">Digital Marketing & Local Search Domination</option>
                <option value="Full Growth Stack">Full Growth Stack (Web + App + Marketing)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                What one real number do you want to move? *
              </label>
              <textarea
                rows={2}
                value={formData.targetMetric}
                onChange={(e) => setFormData({ ...formData, targetMetric: e.target.value })}
                placeholder="e.g. Generate 25 verified quote requests per month / cut manual invoice prep time from 4 hours to 10 mins"
                className={`w-full px-3.5 py-2 text-sm rounded-lg border ${
                  errors.targetMetric ? 'border-red-500 bg-red-50/30' : 'border-slate-300'
                } focus:outline-none focus:ring-2 focus:ring-amber-500`}
              />
              {errors.targetMetric && (
                <p className="text-xs text-red-600 mt-1">{errors.targetMetric}</p>
              )}
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 px-4 text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-lg transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Submit Proof Client Application</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="text-center text-xs text-slate-400 mt-2">
                No upfront commitment. We review fit within 24 hours.
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
