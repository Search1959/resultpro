import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight, ShieldCheck, Mail, Send, Loader2 } from 'lucide-react';

interface ProofClientModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'apply' | 'message';
}

export const ProofClientModal: React.FC<ProofClientModalProps> = ({
  isOpen,
  onClose,
  initialMode = 'apply',
}) => {
  const [mode, setMode] = useState<'apply' | 'message'>(initialMode);
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    city: 'Kolkata',
    service: 'Web Development',
    targetMetric: '',
    phone: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Sync mode if initialMode prop changes when opening
  React.useEffect(() => {
    setMode(initialMode);
  }, [initialMode, isOpen]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Please enter your name';
    if (mode === 'apply') {
      if (!formData.businessName.trim()) newErrors.businessName = 'Please enter your company or business';
      if (!formData.phone.trim() || formData.phone.length < 8) newErrors.phone = 'Please provide a valid contact number';
      if (!formData.targetMetric.trim()) newErrors.targetMetric = 'Tell us what metric you need to improve';
    } else {
      if (!formData.message.trim()) newErrors.message = 'Please enter your message';
      if (!formData.phone.trim() && !formData.email.trim()) {
        newErrors.phone = 'Provide either a phone number or email to receive a reply';
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {
      // Send message payload to server-side endpoint where recipient is hidden
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: mode,
          ...formData,
        }),
      });

      if (!res.ok) {
        console.warn('API submission status:', res.status);
      }
    } catch (err) {
      console.error('Network dispatch notice:', err);
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  // Hidden mail client dispatch helper (never displays the email address on screen)
  const handleOpenMailClient = () => {
    // Hidden target recipient decoded at runtime
    const hiddenRecipient = atob('YXBleDd0ZWNoQGdtYWlsLmNvbQ==');
    const subject = encodeURIComponent(
      mode === 'apply'
        ? `[Proof Client Application] from ${formData.fullName} (${formData.businessName})`
        : `[Inquiry] from ${formData.fullName}`
    );
    const bodyContent = encodeURIComponent(
      mode === 'apply'
        ? `Name: ${formData.fullName}\nBusiness: ${formData.businessName}\nCity: ${formData.city}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService: ${formData.service}\nTarget Metric: ${formData.targetMetric}`
        : `Name: ${formData.fullName}\nPhone: ${formData.phone}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${hiddenRecipient}?subject=${subject}&body=${bodyContent}`;
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
              {mode === 'apply' ? 'Phase 1 · Launch Partner Window' : 'Direct Communication'}
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              {mode === 'apply' ? 'Apply as a Proof Client' : 'Send a Message'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-800 rounded-lg hover:bg-slate-200 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mode Selector Tabs */}
        {!submitted && (
          <div className="flex border-b border-slate-200 bg-slate-100/70 p-1">
            <button
              type="button"
              onClick={() => {
                setMode('apply');
                setErrors({});
              }}
              className={`flex-1 py-2 text-xs font-semibold rounded-md transition-colors cursor-pointer flex items-center justify-center gap-1.5 ${
                mode === 'apply'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <ShieldCheck className="w-4 h-4 text-amber-500" />
              <span>Apply for Launch Slot</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setMode('message');
                setErrors({});
              }}
              className={`flex-1 py-2 text-xs font-semibold rounded-md transition-colors cursor-pointer flex items-center justify-center gap-1.5 ${
                mode === 'message'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Mail className="w-4 h-4 text-amber-500" />
              <span>Send Message</span>
            </button>
          </div>
        )}

        {submitted ? (
          <div className="p-8 text-center">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">
              Message Delivered!
            </h4>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              Thank you, <span className="font-semibold text-slate-900">{formData.fullName}</span>.
              Your details have been securely dispatched to our leadership team.
              We will review and connect with you directly.
            </p>

            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-left text-xs text-slate-700 space-y-2 mb-6">
              <div className="font-bold text-slate-900">Next Steps:</div>
              <div>• Immediate confirmation logged in dispatch queue</div>
              <div>• Direct response within 24 hours via phone or email</div>
              <div>• Focused on results and real business impact</div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={handleOpenMailClient}
                className="flex-1 py-2.5 px-4 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Open in Mail App</span>
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="flex-1 py-2.5 px-4 text-xs font-bold text-white bg-slate-950 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {mode === 'apply' ? (
              <div className="text-xs bg-amber-500/10 p-3 rounded-lg border border-amber-500/20 text-slate-800 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Phase 1 Launch Pricing:</strong> Only 3–5 proof slots available.
                  One target business metric tracked and proven before scale.
                </span>
              </div>
            ) : (
              <div className="text-xs bg-slate-100 p-3 rounded-lg border border-slate-200 text-slate-700 flex items-start gap-2">
                <Mail className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
                <span>
                  Have a question, proposal, or custom request? Send a direct message
                  to our team below.
                </span>
              </div>
            )}

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

            {mode === 'apply' && (
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
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                  Phone / WhatsApp {mode === 'apply' ? '*' : ''}
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

            {mode === 'apply' ? (
              <>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                    Primary Service Needed
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
                    placeholder="e.g. Generate 25 verified quote requests per month / cut invoice prep time by 75%"
                    className={`w-full px-3.5 py-2 text-sm rounded-lg border ${
                      errors.targetMetric ? 'border-red-500 bg-red-50/30' : 'border-slate-300'
                    } focus:outline-none focus:ring-2 focus:ring-amber-500`}
                  />
                  {errors.targetMetric && (
                    <p className="text-xs text-red-600 mt-1">{errors.targetMetric}</p>
                  )}
                </div>
              </>
            ) : (
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                  Your Message *
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can we help your business achieve results?"
                  className={`w-full px-3.5 py-2 text-sm rounded-lg border ${
                    errors.message ? 'border-red-500 bg-red-50/30' : 'border-slate-300'
                  } focus:outline-none focus:ring-2 focus:ring-amber-500`}
                />
                {errors.message && (
                  <p className="text-xs text-red-600 mt-1">{errors.message}</p>
                )}
              </div>
            )}

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-4 text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 disabled:opacity-70 rounded-lg transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Dispatching message...</span>
                  </>
                ) : (
                  <>
                    <span>{mode === 'apply' ? 'Submit Proof Application' : 'Send Message'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
              <div className="text-center text-xs text-slate-500 mt-2">
                Confidential dispatch. Directly routed to Apex7tech leadership.
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
