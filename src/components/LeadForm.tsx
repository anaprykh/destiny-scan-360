import { useState, forwardRef } from "react";
import { Send, Check, Loader2 } from "lucide-react";
const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwxKJQ2y5OMevZlmWmmJnNGQ3NhEEQGRyGlflcqSKgQYgq6aQ-Ooo1wWbtWMWDoE995tQ/exec";

interface FormData {
  name: string;
  phone: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
}

const LeadForm = forwardRef<HTMLElement>((_, ref) => {
  const [formData, setFormData] = useState<FormData>({ name: "", phone: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Ваше имя";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Имя должно содержать не менее 2 символов";
    } else if (formData.name.trim().length > 100) {
      newErrors.name = "Имя должно содержать не больше 100 символов";
    }
    
    const phoneRegex = /^\+?[\d\s\-()]{8,20}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Номер телефона";
    } else if (!phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = "Введите действительный номер телефона";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
//отправка формы в Google Sheets 
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!validateForm()) return;

  setIsSubmitting(true);

  try {
    const body = new URLSearchParams({
      name: formData.name.trim(),
      phone: formData.phone.trim(),
    });

    await fetch(SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
      body,
    });

    // если запрос ушёл — считаем успехом (Apps Script часто не даёт нормально читать ответ из браузера)
    setIsSuccess(true);
    setFormData({ name: "", phone: "" });
  } catch (error) {
    console.error("Form submission error:", error);
  } finally {
    setIsSubmitting(false);
  }
};


//конец кода формы
  if (isSuccess) {
    return (
      <section ref={ref} id="booking-form" className="py-24 px-4">
        <div className="container mx-auto">
          <div className="max-w-lg mx-auto">
            <div className="card-cosmic rounded-2xl p-10 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-4">
                Спасибо!
              </h3>
              <p className="text-muted-foreground mb-4">
                Ваш запрос получен. Евгения свяжется с вами через WhatsApp в ближайшее время.
              </p>
              <p className="text-sm text-gold">
                Пожалуйста, проверьте свои сообщения в WhatsApp
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} id="booking-form" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-10">
            <span className="text-gold text-sm font-medium tracking-widest uppercase mb-4 block">
              Начнем
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
             Забронировать Консультацию
            </h2>
            <p className="text-muted-foreground">
              Оставьте свои данные, и Евгения лично свяжется с вами через WhatsApp
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="card-cosmic rounded-2xl p-8">
            <div className="space-y-6">
              {/* Name field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                 Ваше имя
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="input-cosmic"
                  placeholder="Ваше имя"
                  maxLength={100}
                />
                {errors.name && (
                  <p className="text-destructive text-sm mt-2">{errors.name}</p>
                )}
              </div>
              
              {/* Phone field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Номер телефона
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="input-cosmic"
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
                    Отправка...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Забронировать Консультацию
                  </>
                )}
              </button>
            </div>
            
            {/* Privacy note */}
            <p className="text-xs text-muted-foreground text-center mt-6">
              После отправки Евгения лично свяжется с вами через WhatsApp
            </p>
          </form>
          
          {/* Price reminder */}
          <div className="text-center mt-8">
            <p className="text-muted-foreground">
              30-минутная консультация только за{" "}
              <span className="text-gold font-semibold">€15</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

LeadForm.displayName = "LeadForm";

export default LeadForm;
