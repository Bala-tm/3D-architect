import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";
export const ContactModal = ({ isOpen, onClose }) => {
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		interest: "residence-01",
		dates: "",
		message: ""
	});
	const [submitted, setSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);
	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			setSubmitted(true);
			confetti({
				particleCount: 75,
				spread: 60,
				origin: { y: .6 },
				colors: [
					"#24231F",
					"#F4F1EA",
					"#3FA85B",
					"#A69B8B"
				]
			});
		}, 700);
	};
	const handleReset = () => {
		setSubmitted(false);
		setFormData({
			fullName: "",
			email: "",
			interest: "residence-01",
			dates: "",
			message: ""
		});
		onClose();
	};
	return <AnimatePresence>
      {isOpen && <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-6 md:p-10 select-none">
          {/* Backdrop */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 bg-[#1A1916]/75 backdrop-blur-sm" />

          {/* Modal Container */}
          <motion.div initial={{
		opacity: 0,
		y: 30,
		scale: .98
	}} animate={{
		opacity: 1,
		y: 0,
		scale: 1
	}} exit={{
		opacity: 0,
		y: 30,
		scale: .98
	}} transition={{
		duration: .4,
		ease: [
			.22,
			1,
			.36,
			1
		]
	}} className="relative w-full max-w-2xl bg-[#F6F4EE] text-[#1F1E1B] p-6 sm:p-8 md:p-10 shadow-2xl border border-[#1F1E1B]/15 max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button onClick={onClose} className="absolute top-6 right-6 p-2 rounded-full border border-[#1F1E1B]/20 hover:bg-[#1F1E1B] hover:text-[#F6F4EE] transition-colors cursor-pointer" aria-label="Close modal">
              <X className="w-4 h-4" />
            </button>

            {!submitted ? <div>
                <div className="mb-8">
                  <div className="text-[11px] uppercase tracking-[0.25em] text-[#9E8C76] mb-2 font-semibold">
                    The Kamakura Pavilion &middot; Residence 02 Kyoto &middot; Commissions
                  </div>
                  <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight text-[#1F1E1B]">
                    Begin the conversation.
                  </h3>
                  <p className="mt-3 text-sm text-[#4A433A] leading-relaxed font-light">
                    Direct access to private viewings of The Kamakura Pavilion, seasonal residency reservations for Residence 02 Kyoto, or custom atelier architectural commissions.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#9E8C76] mb-2 font-medium">
                        Your Name *
                      </label>
                      <input type="text" required value={formData.fullName} onChange={(e) => setFormData({
		...formData,
		fullName: e.target.value
	})} placeholder="Elena Vance" className="w-full bg-[#ECE7DE] border-b border-[#1F1E1B]/30 focus:border-[#1F1E1B] px-4 py-3 text-sm focus:outline-none transition-colors placeholder:text-[#9E8C76] text-[#1F1E1B]" />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#9E8C76] mb-2 font-medium">
                        Email Address *
                      </label>
                      <input type="email" required value={formData.email} onChange={(e) => setFormData({
		...formData,
		email: e.target.value
	})} placeholder="elena@example.com" className="w-full bg-[#ECE7DE] border-b border-[#1F1E1B]/30 focus:border-[#1F1E1B] px-4 py-3 text-sm focus:outline-none transition-colors placeholder:text-[#9E8C76] text-[#1F1E1B]" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#9E8C76] mb-2 font-medium">
                        Primary Interest
                      </label>
                      <select value={formData.interest} onChange={(e) => setFormData({
		...formData,
		interest: e.target.value
	})} className="w-full bg-[#ECE7DE] border-b border-[#1F1E1B]/30 focus:border-[#1F1E1B] px-4 py-3 text-sm focus:outline-none transition-colors cursor-pointer text-[#1F1E1B]">
                        <option value="kamakura">The Kamakura Pavilion &mdash; Private Acquisition &amp; Viewing</option>
                        <option value="kyoto">Residence 02 Kyoto &mdash; Seasonal Residency</option>
                        <option value="commission">Bespoke Architectural Commission</option>
                        <option value="press">Press &amp; Monograph Inquiries</option>
                        <option value="consultation">Studio Consultation</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#9E8C76] mb-2 font-medium">
                        Target Window / Dates
                      </label>
                      <input type="text" value={formData.dates} onChange={(e) => setFormData({
		...formData,
		dates: e.target.value
	})} placeholder="e.g. Autumn 2026 or Weekend of Nov 14" className="w-full bg-[#ECE7DE] border-b border-[#1F1E1B]/30 focus:border-[#1F1E1B] px-4 py-3 text-sm focus:outline-none transition-colors placeholder:text-[#9E8C76] text-[#1F1E1B]" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#9E8C76] mb-2 font-medium">
                      Project Notes / Requirements
                    </label>
                    <textarea rows={3} value={formData.message} onChange={(e) => setFormData({
		...formData,
		message: e.target.value
	})} placeholder="Share details regarding your schedule, guests, or questions regarding the architecture..." className="w-full bg-[#ECE7DE] border-b border-[#1F1E1B]/30 focus:border-[#1F1E1B] px-4 py-3 text-sm focus:outline-none transition-colors resize-none placeholder:text-[#9E8C76] text-[#1F1E1B]" />
                  </div>

                  <div className="pt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <span className="text-[11px] text-[#9E8C76]">
                      Response delivered within 24 business hours.
                    </span>
                    <button type="submit" disabled={loading} className="flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#1F1E1B] text-[#F6F4EE] hover:bg-[#4A433A] font-medium text-xs uppercase tracking-[0.2em] transition-all disabled:opacity-50 cursor-pointer shadow-md">
                      <span>{loading ? "Submitting..." : "Send Inquiry"}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              </div> : <div className="py-12 text-center flex flex-col items-center">
                <CheckCircle2 className="w-16 h-16 text-[#3FA85B] mb-5 stroke-[1.5]" />
                <h3 className="font-serif text-3xl sm:text-4xl mb-3 text-[#1F1E1B]">
                  Inquiry Dispatched
                </h3>
                <p className="max-w-md text-sm text-[#4A433A] leading-relaxed mb-8 font-light">
                  Thank you, <strong className="font-semibold text-[#1F1E1B]">{formData.fullName}</strong>. Your inquiry has been routed to our architectural atelier. We will contact you shortly.
                </p>
                <button type="button" onClick={handleReset} className="px-8 py-3 rounded-full border border-[#1F1E1B] hover:bg-[#1F1E1B] hover:text-[#F6F4EE] text-xs uppercase tracking-[0.2em] transition-colors cursor-pointer text-[#1F1E1B]">
                  Return to Website
                </button>
              </div>}
          </motion.div>
        </div>}
    </AnimatePresence>;
};
