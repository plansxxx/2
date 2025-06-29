import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import SectionHeading from '../components/common/SectionHeading';
import InteractiveBodyMap from '../components/symptoms/InteractiveBodyMap';

const SymptomsPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{`${t('nav.symptoms')} | ${t('meta.title')}`}</title>
      </Helmet>
      
      {/* Page Header */}
      <div className="pt-24 pb-12 bg-primary-600 text-white">
        <div className="container">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{t('symptoms.title')}</h1>
          <p className="text-xl text-primary-100">{t('symptoms.subtitle')}</p>
        </div>
      </div>
      
      {/* Interactive Body Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <SectionHeading 
            title={t('symptoms.bodyMap.title')}
            subtitle={t('symptoms.description')}
            centered={true}
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-center text-gray-600 mb-8">
                {t('symptoms.bodyMap.instruction')}
              </p>
              
              <InteractiveBodyMap />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SymptomsPage;