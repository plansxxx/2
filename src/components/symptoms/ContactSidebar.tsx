import React, { useState, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactSidebar = memo(() => {
  const { t } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>();

  const onSubmit = useCallback(async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', data);
    setIsSubmitted(true);
    setIsSubmitting(false);
    reset();
    
    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  }, [reset]);

  return (
    <div className="space-y-6 sticky top-24">
      {/* Contact Form */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">
          {t('contact.title')}
        </h3>

        {isSubmitted ? (
          <div className="text-center py-8">
            <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
            <h4 className="text-lg font-semibold text-green-700 mb-2">
              {t('contact.form.success.title')}
            </h4>
            <p className="text-green-600 mb-4">
              {t('contact.form.success.message')}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="form-label">
                {t('contact.form.name')}
              </label>
              <input
                type="text"
                className={`form-input ${errors.name ? 'border-red-500' : ''}`}
                {...register('name', { 
                  required: t('contact.form.validation.nameRequired') 
                })}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="form-label">
                {t('contact.form.email')}
              </label>
              <input
                type="email"
                className={`form-input ${errors.email ? 'border-red-500' : ''}`}
                {...register('email', { 
                  required: t('contact.form.validation.emailRequired'),
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: t('contact.form.validation.emailInvalid')
                  }
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="form-label">
                {t('contact.form.phone')}
              </label>
              <input
                type="tel"
                className="form-input"
                {...register('phone')}
              />
            </div>

            <div>
              <label className="form-label">
                {t('contact.form.message')}
              </label>
              <textarea
                rows={4}
                className={`form-input ${errors.message ? 'border-red-500' : ''}`}
                {...register('message', { 
                  required: t('contact.form.validation.messageRequired') 
                })}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  <span>{t('contact.form.sending')}</span>
                </>
              ) : (
                <>
                  <Send size={16} />
                  <span>{t('contact.form.submit')}</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>

      {/* Contact Information */}
      <div className="bg-primary-50 rounded-lg p-6">
        <h4 className="text-lg font-semibold text-primary-900 mb-4">
          {t('contact.info.title')}
        </h4>
        
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <MapPin size={20} className="text-primary-600 mt-1 flex-shrink-0" />
            <div>
              <p className="font-medium text-primary-900">{t('contact.info.address')}</p>
              <p className="text-primary-700">Medera Hospital, Baku, Azerbaijan</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Phone size={20} className="text-primary-600 flex-shrink-0" />
            <div>
              <p className="font-medium text-primary-900">{t('contact.info.phone')}</p>
              <a 
                href="tel:+994553977874" 
                className="text-primary-700 hover:text-primary-800 transition-colors"
              >
                +994 55 397 78 74
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Clock size={20} className="text-primary-600 flex-shrink-0" />
            <div>
              <p className="font-medium text-primary-900">{t('contact.info.workingHours')}</p>
              <p className="text-primary-700">Mon-Fri: 9:00 - 18:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

ContactSidebar.displayName = 'ContactSidebar';

export default ContactSidebar;