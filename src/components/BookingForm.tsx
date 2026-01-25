import { useState, forwardRef } from "react";
import { Send, Check, Loader2 } from "lucide-react";

interface FormData {
  name: string;
  phone: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
}

const BookingForm = forwardRef<HTMLElement>((_, ref) => {
  const [formData, setFormData] = useState<FormData>({ name: "", phone: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    } else if (formData.name.trim().length > 100) {
      newErrors.name = "Name must be less than 100 characters";
    }
    
    const phoneRegex = /^\+?[\d\s\-()]{8,20}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number";
    } else if (!phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Replace with actual POST endpoint
      // await fetch('/api/leads', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     name: formData.name.trim(),
      //     phone: formData.phone.trim(),
      //     timestamp: new Date().toISOString()
      //   })
      // });
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSuccess(true);
      setFormData({ name: "", phone: "" });
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section ref={ref} id="booking-form" className="py-16 px-4">
        <div className="container mx-auto max-w-md">
          <div className="card-burgundy rounded-2xl p-8 text-center">
            <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-5">
              <Check className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-serif font-semibold mb-3">
              Thank You!
            </h3>
            <p className="text-muted-foreground">
              Evgenia will contact you via WhatsApp shortly.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} id="booking-form" className="py-16 px-4">
      <div className="container mx-auto max-w-md">
        <h2 className="text-2xl md:text-3xl font-serif font-semibold text-center mb-8">
          Book Your Consultation
        </h2>
        
        <form onSubmit={handleSubmit} className="card-burgundy rounded-2xl p-6 md:p-8 glow-gold">
          <div className="space-y-5">
            {/* Name field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="input-field"
                placeholder="Enter your name"
                maxLength={100}
              />
              {errors.name && (
                <p className="text-destructive text-sm mt-2">{errors.name}</p>
              )}
            </div>
            
            {/* Phone field */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="input-field"
                placeholder="+49 123 456 7890"
                maxLength={20}
              />
              {errors.phone && (
                <p className="text-destructive text-sm mt-2">{errors.phone}</p>
              )}
            </div>
            
            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Book a Consultation
                </>
              )}
            </button>
          </div>
          
          <p className="text-xs text-muted-foreground text-center mt-5">
            Evgenia will personally contact you via WhatsApp
          </p>
        </form>
      </div>
    </section>
  );
});

BookingForm.displayName = "BookingForm";

export default BookingForm;
