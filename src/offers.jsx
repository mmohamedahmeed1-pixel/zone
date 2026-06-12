import React, { useState } from 'react';
import { useCart } from './CartContext';

const Offers = () => {
  const { darkMode } = useCart();
  const [copiedIndex, setCopiedIndex] = useState(null);

  // قائمة تحتوي على 30 عرضاً رياضياً مميزاً
  const offersList = [
    { id: 1, title: "عرض بطل الأثقال 🏋️‍♂️", desc: "اشترِ طقم دمبلز 20 كجم واحصل على طارة 5 كجم إضافية هدية!", code: "PUMP5", badge: "الأكثر مبيعاً" },
    { id: 2, title: "طقم الأناقة الرياضية 👕", desc: "اشترِ تيشيرت جيم + بنطال رياضي واحصل على شورت مجاناً.", code: "STYLE3", badge: "عرض محدود" },
    { id: 3, title: "باقة الطاقة المتكاملة ⚡", desc: "اشترِ عبوة واي بروتين (Whey) الكبيرة واحصل على شيكر ذكي هدية.", code: "SHAKEIT", badge: "مكملات" },
    { id: 4, title: "خطوتك أسرع 👟", desc: "اشترِ حذاء جري احترافي واحصل على 3 جوارب رياضية قطنية مجاناً.", code: "RUNFREE", badge: "أحذية" },
    { id: 5, title: "باقة الجيم المنزلي 🏠", desc: "اشترِ بنش تمارين قابل للتعديل واحصل على حبل مقاومة هدية.", code: "HOMEFIT", badge: "وفر أكثر" },
    { id: 6, title: "تحدي اللياقة البدنية 🤸‍♀️", desc: "اشترِ سجادة يوغا (Yoga Mat) واحصل على حزام التمدد مجاناً.", code: "FLEX", badge: "جديد" },
    { id: 7, title: "باقة الملاكمة القوية 🥊", desc: "اشترِ قفازات ملاكمة جلدية واحصل على رباط اليد (Hand Wraps) هدية.", code: "KNOCKOUT", badge: "فنون قتالية" },
    { id: 8, title: "عرض الـ الكارديو السريع 🏃‍♂️", desc: "اشترِ حبل قفز ذكي بعداد ديجيتال واحصل على منشفة مايكروفايبر هدية.", code: "SPEED", badge: "كارديو" },
    { id: 9, title: "باقة الانتعاش والأداء 🔋", desc: "اشترِ المكمل الغذائي BCAA واحصل على عبوة كرياتين صغيرة مجاناً.", code: "RECOVER", badge: "مكملات" },
    { id: 10, title: "حماية قصوى للمفاصل 💪", desc: "اشترِ مشد ركبة رياضي واحصل على مشد معصم لليدين هدية.", code: "SAFETY", badge: "حماية" },
    { id: 11, title: "ثنائي الضخ العضلي 🪵", desc: "اشتري قطعتين مكمل Pre-Workout واحصل على الثالثة مجاناً بالكامل.", code: "ENERGY3", badge: "1+2 مجاناً" },
    { id: 12, title: "باقة الدراجين المحترفين 🚴‍♂️", desc: "اشترِ خوذة دراجة هوائية واحصل على قفازات قيادة مبطنة هدية.", code: "CYCLING", badge: "اكسسوارات" },
    { id: 13, title: "عرض الشتاء الرياضي ❄️", desc: "اشترِ هودي ثقيل للجيم واحصل على آيس كاب رياضي مجاناً.", code: "WINTER", badge: "ملابس" },
    { id: 14, title: "تجهيز الكابتن ⚽", desc: "اشترِ كرة قدم احترافية معتمدة واحصل على منفاخ يدوي هدية.", code: "GOAL", badge: "ألعاب جماعية" },
    { id: 15, title: "مجموعة تمارين الساعد 🦾", desc: "اشترِ مقبض تقوية اليدين واحصل على حلقة السيليكون للتمارين مجاناً.", code: "GRIP", badge: "وفر 100%" },
    { id: 16, title: "إطلالة الجري النسائية 🏃‍♀️", desc: "اشترِ ليقنز رياضي ضاغط واحصل على توب رياضي مريح هدية.", code: "FITQUEEN", badge: "ملابس نسائية" },
    { id: 17, title: "باقة السباح البطل 🤿", desc: "اشترِ نظارة سباحة ضد الضباب واحصل على غطاء رأس سيليكون مجاناً.", code: "SWIM", badge: "مائي" },
    { id: 18, title: "تحدي الـ عقلة المنزلية 🚪", desc: "اشترِ عقلة الباب لتمارين الظهر واحصل على بودرة مغنيسيوم (تباشير) هدية.", code: "CHINUP", badge: "تمارين منزلية" },
    { id: 19, title: "الترطيب الذكي 💧", desc: "اشترِ زجاجة مياه رياضية حافظة للبرودة واحصل على حامل للموبايل أثناء الجري هدية.", code: "HYDRO", badge: "اكسسوارات" },
    { id: 20, title: "باقة عضلات البطن 🍫", desc: "اشترِ عجلة تمارين البطن (AB Roller) واحصل على وسادة حماية الركبة مجاناً.", code: "CORE", badge: "تمارين بطن" },
    { id: 21, title: "عرض الـ 3 تيشيرتات 👕", desc: "اختر أي 3 تيشيرتات تمارين قطنية وادفع قيمة قطعتين فقط!", code: "TEE3", badge: "1+2 مجاناً" },
    { id: 22, title: "المشي الصحي 🚶‍♂️", desc: "اشترِ حذاء مشي طبي مريح واحصل على بودرة حماية القدمين هدية.", code: "WALK", badge: "أحذية" },
    { id: 23, title: "باقة الـ كروس فت الحارقة 🔥", desc: "اشترِ حبل مقاومة خماسي المستويات واحصل على كرات مساج التيتان هدية.", code: "CROSS", badge: "لياقة" },
    { id: 24, title: "باقة كمال الأجسام الضخمة 🦖", desc: "اشترِ حزام رفع الأثقال جلدي واحصل على أحزمة المعصم (Straps) مجاناً.", code: "BEAST", badge: "أوزان ثقيلة" },
    { id: 25, title: "التغذية والنظام الصحي 🥗", desc: "اشترِ ميزان طعام ديجيتال دقيق واحصل على علبة حفظ الوجبات الرياضية هدية.", code: "DIET", badge: "أدوات صحية" },
    { id: 26, title: "باقة المشاية الكهربائية 🏃", desc: "اشترِ مشاية كهربائية منزلية واحصل على جهاز مساج الظهر المحمول هدية.", code: "TREAD", badge: "عرض ضخم" },
    { id: 27, title: "أناقة ملاعب التنس 🎾", desc: "اشترِ مضرب تنس احترافي واحصل على علبة كرات ثلاثية مجاناً.", code: "TENNIS", badge: "ألعاب مضرب" },
    { id: 28, title: "باقة زيادة الوزن والكتلة 🦍", desc: "اشترِ مكمل الجينر (Mass Gainer) الضخم واحصل على علبة فيتامينات متعددة مجاناً.", code: "MASS", badge: "مكملات" },
    { id: 29, title: "شنطة الجيم المتكاملة 🎒", desc: "اشترِ حقيبة ظهر رياضية مقاومة للماء واحصل على محفظة بطاقات رياضية هدية.", code: "BAG", badge: "اكسسوارات" },
    { id: 30, title: "العرض الذهبي الشامل 👑", desc: "تسوق بقيمة 2500 ج.م واحصل على كاب سبورت زون الأصلي + شحن مجاني تماماً.", code: "GOLDEN", badge: "العرض الأقوى" }
  ];

  const handleCopy = (code, index) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  // الألوان الديناميكية بناءً على الوضع الداكن والفاتح لـ سبورت زون
  const pageBg = darkMode ? '#111111' : '#F5F5F5';
  const cardBg = darkMode ? '#161616' : '#FFFFFF';
  const textColor = darkMode ? '#EEEEEE' : '#222222';
  const subtitleColor = darkMode ? '#BBBBBB' : '#555555';
  const titleColor = darkMode ? '#CCFF00' : '#111111';
  const borderStyle = darkMode ? '1px solid #222222' : '1px solid #E0E0E0';

  return (
    <div style={{ ...styles.container, backgroundColor: pageBg, transition: '0.3s' }}>
      <div style={styles.headerSection}>
        <h1 style={{ ...styles.mainTitle, color: titleColor }}>عروض وباقات سبورت زون 🔥</h1>
        <p style={{ ...styles.subtitle, color: subtitleColor }}>وفر أكثر مع أقوى العروض الرياضية المتاحة حالياً.. اشتري قطعة واحصل على الهدايا فوراً!</p>
      </div>

      <div style={styles.grid}>
        {offersList.map((offer, index) => (
          <div key={offer.id} style={{ ...styles.card, backgroundColor: cardBg, border: borderStyle }}>
            <span style={styles.badge}>{offer.badge}</span>
            <h3 style={{ ...styles.cardTitle, color: darkMode ? '#FFFFFF' : '#111111' }}>{offer.title}</h3>
            <p style={{ ...styles.cardDesc, color: textColor }}>{offer.desc}</p>
            
            <div style={styles.codeContainer}>
              <span style={{...styles.codeText, color: darkMode ? '#CCFF00' : '#000000'}}>{offer.code}</span>
              <button 
                onClick={() => handleCopy(offer.code, index)} 
                style={{
                  ...styles.copyBtn, 
                  backgroundColor: copiedIndex === index ? '#27AE60' : (darkMode ? '#222222' : '#E0E0E0'),
                  color: copiedIndex === index ? '#FFF' : (darkMode ? '#FFF' : '#000')
                }}
              >
                {copiedIndex === index ? 'تم النسخ! ✓' : 'نسخ الكود'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: { padding: '50px 20px', direction: 'rtl', fontFamily: 'sans-serif', minHeight: '80vh' },
  headerSection: { textAlign: 'center', marginBottom: '50px' },
  mainTitle: { fontSize: '34px', fontWeight: '900', marginBottom: '12px' },
  subtitle: { fontSize: '16px', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' },
  grid: { display: 'flex', flexWrap: 'wrap', gap: '25px', justifyContent: 'center', maxWidth: '1200px', margin: '0 auto' },
  card: { padding: '25px', borderRadius: '16px', width: '280px', position: 'relative', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', transition: '0.3s' },
  badge: { position: 'absolute', top: '15px', left: '15px', backgroundColor: '#FF3333', color: '#FFF', fontSize: '11px', padding: '4px 10px', borderRadius: '20px', fontWeight: 'bold' },
  cardTitle: { fontSize: '18px', fontWeight: 'bold', marginBottom: '12px', marginTop: '15px' },
  cardDesc: { fontSize: '14px', lineHeight: '1.6', marginBottom: '20px', flexGrow: 1 },
  codeContainer: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.15)', padding: '8px 12px', borderRadius: '8px', border: '1px dashed #CCFF00' },
  codeText: { fontSize: '15px', fontWeight: 'bold', letterSpacing: '1px' },
  copyBtn: { border: 'none', padding: '6px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer', transition: '0.2s' }
};

export default Offers;