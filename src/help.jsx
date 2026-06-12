import React, { useState } from 'react';
import { useCart } from './CartContext';

const Help = () => {
  const { darkMode } = useCart();
  // State للاحتفاظ برقم السؤال المفتوح حالياً
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    if (activeQuestion === index) {
      setActiveQuestion(null); // قفل السؤال لو ضغط عليه تاني
    } else {
      setActiveQuestion(index); // فتح السؤال الجديد
    }
  };

  // أسئلة مخصصة لمتجر سبورت زون الرياضي
  const faqs = [
    {
      question: 'كم يستغرق توصيل الأجهزة الرياضية الثقيلة؟ 🚚',
      answer: 'المعدات الرياضية الخفيفة والملابس تستغرق من 2 إلى 4 أيام عمل. أما الأجهزة الثقيلة (مثل المشايات الكهربائية وبنشات التمرين) يتم التنسيق لشحنها عبر سيارات المتجر الخاصة وتصلك خلال 48 ساعة مع خدمة التركيب المجاني داخل القاهرة والجيزة.'
    },
    {
      question: 'هل يمكنني استبدال مقاسات الملابس أو الأحذية الرياضية؟ 👟',
      answer: 'بالتأكيد! نوفر لك ميزة قياس المنتج عند الاستلام مع المندوب. وإذا غادر المندوب، يمكنك طلب استبدال المقاس خلال 14 يوماً من تاريخ الاستلام بشرط أن يكون المنتج بحالته الأصلية وفي غلافه ولم يتم استخدامه في التمرين.'
    },
    {
      question: 'ما هي سياسة استرجاع المكملات الغذائية والفيتامينات؟ 💊',
      answer: 'سلامتكم هي أولويتنا؛ لذا لا يمكن استرجاع أو استبدال المكملات الغذائية (مثل الواي بروتين، الكرياتين، والأحماض الأمينية) بعد فتح غلاف الأمان البلاستيكي الخاص بالعبوة مطلقاً لضمان جودة وتخزين المنتج.'
    },
    {
      question: 'كيف أضمن أن المنتجات والمكملات أصلية 100%؟ 🛡️',
      answer: 'جميع منتجات "سبورت زون" من أجهزة، ملابس، ومكملات مشحونة مباشرة من الوكلاء الرسميين للعلامات التجارية العالمية، والمكملات مسجلة ومطابقة للمواصفات القياسية ووزارة الصحة.'
    },
    {
      question: 'ما هي طرق الدفع المتاحة في سبورت زون؟ 💵',
      answer: 'يمكنك الدفع نقداً عند الاستلام (كاش)، أو استخدام بطاقات الدفع الإلكتروني (فيزا / ماستر كارد)، وكذلك نتميز بدعم التحويل الفوري عبر المحافظ الإلكترونية (فودافون كاش، وغيرها) وسندعم قريباً أنظمة التقسيط.'
    }
  ];

  // إعداد الألوان والستايل ديناميكياً حسب الوضع الداكن والفاتح لقسم المساعدة
  const pageBg = darkMode ? '#111111' : '#F5F5F5';
  const cardBg = darkMode ? '#161616' : '#FFFFFF';
  const textColor = darkMode ? '#EEEEEE' : '#222222';
  const subtitleColor = darkMode ? '#BBBBBB' : '#555555';
  const titleColor = darkMode ? '#CCFF00' : '#111111';
  const itemBorder = darkMode ? '1px solid #222222' : '1px solid #E0E0E0';
  const btnBg = darkMode ? '#222222' : '#EAEAEA';

  return (
    <div style={{ ...styles.container, backgroundColor: pageBg, transition: '0.3s' }}>
      <div style={styles.headerSection}>
        <h1 style={{ ...styles.mainTitle, color: titleColor }}>مركز المساعدة والدعم الرياضي 🛠️</h1>
        <p style={{ ...styles.subtitle, color: subtitleColor }}>أهلاً بك في صفحة دعم سبورت زون، نحن هنا لمساعدتك على تحقيق أهدافك البدنية بدون عقبات</p>
      </div>

      <div style={{ ...styles.faqWrapper, backgroundColor: cardBg, border: itemBorder }}>
        <h3 style={{ ...styles.sectionTitle, color: darkMode ? '#FFF' : '#111', borderBottom: darkMode ? '2px solid #222' : '2px solid #F5F5F5' }}>الأسئلة الشائعة للعملاء 🤔</h3>
        
        <div style={styles.accordion}>
          {faqs.map((faq, index) => (
            <div key={index} style={{ ...styles.faqItem, border: itemBorder }}>
              {/* زر السؤال */}
              <button onClick={() => toggleQuestion(index)} style={{ ...styles.questionBtn, backgroundColor: btnBg }}>
                <span style={{ ...styles.questionText, color: darkMode ? '#FFF' : '#111' }}>{faq.question}</span>
                <span style={{ ...styles.arrowIcon, color: darkMode ? '#CCFF00' : '#333' }}>{activeQuestion === index ? '▲' : '▼'}</span>
              </button>
              
              {/* الإجابة تظهر وتختفي ديناميكياً */}
              {activeQuestion === index && (
                <div style={{ ...styles.answerBox, backgroundColor: cardBg, borderTop: itemBorder }}>
                  <p style={{ ...styles.answerText, color: textColor }}>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* كارت تواصل إضافي بالهوية الرياضية القوية */}
      <div style={styles.contactCard}>
        <h4 style={{ margin: '0 0 10px 0', fontSize: '18px' }}>لم تجد إجابة وافية لاستفسارك؟ 🧐</h4>
        <p style={{ margin: '0 0 20px 0', fontSize: '14px', opacity: 0.9 }}>فريق خدمة عملاء سبورت زون كابتن متواجد وجاهز لمساعدتك 24 ساعة على مدار الأسبوع</p>
        <button onClick={() => alert('جاري توجيهك للمحادثة المباشرة مع الكابتن... 💬')} style={styles.contactBtn}>
          تحدث مع الدعم الفني الآن مباشر 💬
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '50px 20px',
    minHeight: '85vh',
    direction: 'rtl',
    fontFamily: 'sans-serif',
  },
  headerSection: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  mainTitle: {
    fontSize: '32px',
    fontWeight: '900',
    marginBottom: '12px',
  },
  subtitle: {
    fontSize: '15px',
    maxWidth: '650px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
  faqWrapper: {
    padding: '30px',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
    maxWidth: '800px',
    margin: '0 auto 40px auto',
  },
  sectionTitle: {
    fontSize: '19px',
    fontWeight: 'bold',
    marginBottom: '20px',
    paddingBottom: '12px',
  },
  accordion: {
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
  },
  faqItem: {
    borderRadius: '10px',
    overflow: 'hidden',
  },
  questionBtn: {
    width: '100%',
    padding: '18px 20px',
    border: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
    textAlign: 'right',
    outline: 'none',
    transition: '0.2s',
  },
  questionText: {
    fontSize: '15px',
    fontWeight: 'bold',
  },
  arrowIcon: {
    fontSize: '11px',
  },
  answerBox: {
    padding: '18px 20px',
  },
  answerText: {
    margin: 0,
    fontSize: '14px',
    lineHeight: '1.8',
  },
  contactCard: {
    textAlign: 'center',
    backgroundColor: '#111111',
    color: '#FFFFFF',
    padding: '35px 20px',
    borderRadius: '16px',
    border: '2px solid #CCFF00',
    maxWidth: '800px',
    margin: '0 auto',
    boxShadow: '0 4px 15px rgba(204, 255, 0, 0.1)',
  },
  contactBtn: {
    padding: '12px 30px',
    backgroundColor: '#CCFF00',
    color: '#111111',
    border: 'none',
    borderRadius: '25px',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '14px',
    transition: '0.2s',
  }
};

export default Help;