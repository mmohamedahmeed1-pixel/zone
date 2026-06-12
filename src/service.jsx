import React from 'react';
import { useCart } from './CartContext';

const Service = () => {
  const { darkMode } = useCart(); // مواكبة الوضع الداكن للموقع

  // خدمات رياضية مخصصة لـ سبورت زون
  const services = [
    { icon: '👟', title: 'تخصيص وقياس المعدات مجاناً', desc: 'نوفر لك خدمة استشارية لمساعدتك في اختيار مقاسات الملابس والأوزان والمعدات المناسبة لطولك ووزنك ونوع رياضتك المفضلة مجاناً.' },
    { icon: '📦', title: 'الاشتراكات الشهرية لـ بوكس اللياقة', desc: 'اشترك معنا ليصلك بوكس دوري منوع يحتوي على المكملات الغذائية، السناكات الصحية، والإكسسوارات الرياضية أول كل شهر بخصومات تصل لـ 20%.' },
    { icon: '🏋️‍♂️', title: 'تجهيز الصالات الرياضية والنوادي', desc: 'نقدم باقات خاصة لتجهيز الصالات الرياضية المنزلية والمؤسسات تشمل توريد أفضل الأجهزة، الحديد، والأرضيات المطاطية بأسعار جملة منافسة.' },
    { icon: '📋', title: 'برامج تدريبية واستشارات مجانية', desc: 'عند شرائك أي من معداتنا، ستحصل على جدول تمارين مخصص وجلسة استشارية سريعة مع مدربين معتمدين لضمان استخدامك للأدوات بشكل آمن واحترافي.' }
  ];

  // إعداد الألوان الرياضية بناءً على وضع الشاشة (فاتح / داكن)
  const pageBg = darkMode ? '#111111' : '#F5F5F5';
  const cardBg = darkMode ? '#161616' : '#FFFFFF';
  const textColor = darkMode ? '#EEEEEE' : '#222222';
  const subtitleColor = darkMode ? '#BBBBBB' : '#555555';
  const titleColor = darkMode ? '#CCFF00' : '#111111'; // اللون الفسفوري الرياضي في الوضع الداكن والأسود في الفاتح
  const borderStyle = darkMode ? '1px solid #222222' : '1px solid #E0E0E0';

  return (
    <div style={{...styles.container, backgroundColor: pageBg, transition: '0.3s'}}>
      <div style={styles.headerSection}>
        <h1 style={{...styles.mainTitle, color: titleColor}}>خدماتنا المميزة ✨</h1>
        <p style={{...styles.subtitle, color: subtitleColor}}>أكثر من مجرد متجر.. نحن شريكك المتكامل في رحلتك الرياضية وبناء لياقتك</p>
      </div>

      <div style={styles.grid}>
        {services.map((ser, index) => (
          <div key={index} style={{...styles.card, backgroundColor: cardBg, border: borderStyle}}>
            <span style={styles.iconSpan}>{ser.icon}</span>
            <h3 style={{...styles.cardTitle, color: darkMode ? '#CCFF00' : '#111111'}}>{ser.title}</h3>
            <p style={{...styles.cardDesc, color: textColor}}>{ser.desc}</p>
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
  grid: { display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center', maxWidth: '1100px', margin: '0 auto' },
  card: { padding: '30px', borderRadius: '16px', width: '280px', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center', transition: '0.3s' },
  iconSpan: { fontSize: '45px', marginBottom: '15px', display: 'block' },
  cardTitle: { fontSize: '18px', fontWeight: 'bold', marginBottom: '12px' },
  cardDesc: { fontSize: '14px', lineHeight: '1.7', margin: 0 }
};

export default Service;