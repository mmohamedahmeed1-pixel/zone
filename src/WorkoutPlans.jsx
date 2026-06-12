import React from 'react';
import { useCart } from './CartContext';

const WorkoutPlans = () => {
  const { darkMode } = useCart();
  
  const plans = [
    { title: "جدول Push / Pull / Legs 🏋️", desc: "الجدول الأقوى عالمياً لتقسيم التمارين واستهداف كافة العضلات مرتين أسبوعياً.", target: "ضخامة عضلية", level: "متوسط / متقدم" },
    { title: "خطة التمارين المنزلية بالدمبلز 🏠", desc: "تمرين جسمك بالكامل في المنزل بأدوات بسيطة وبأعلى كفاءة وضخ دموي.", target: "لياقة وتنشيف", level: "مبتدئ" },
    { title: "برنامج حرق الدهون القاسي (HIIT) 🔥", desc: "تمارين كارديو عالية الكثافة لحرق أقصى قدر من السعرات والدهون في نصف ساعة.", target: "خسارة وزن سريع", level: "جميع المستويات" }
  ];

  // ألوان ديناميكية ذكية تمنع البهتان
  const pageBg = darkMode ? '#0a0a0a' : '#f8f9fa';
  const cardBg = darkMode ? '#111111' : '#ffffff';
  const titleColor = darkMode ? '#CCFF00' : '#111111';
  const textColor = darkMode ? '#ffffff' : '#222222';
  const descColor = darkMode ? '#aaaaaa' : '#555555';
  const cardBorder = darkMode ? '1px solid #222' : '1px solid #e0e0e0';
  
  // تغيير لون أزرار التحكم والبادجات لتبدو واضحة في المضيء
  const primaryBrandColor = darkMode ? '#CCFF00' : '#111111'; 
  const btnTextColor = darkMode ? '#CCFF00' : '#111111';

  return (
    <div style={{ padding: '50px 20px', direction: 'rtl', minHeight: '85vh', background: pageBg, transition: '0.3s' }}>
      <h1 style={{ textAlign: 'center', color: titleColor, fontWeight: '900' }}>جداول تمرين كباتن سبورت زون 🏅</h1>
      <p style={{ textAlign: 'center', color: '#888', marginBottom: '40px' }}>جداول وخطط تدريبية مجهزة من خبراء اللياقة البدنية لتحقيق هدفك مجاناً</p>
      
      <div style={styles.grid}>
        {plans.map((plan, i) => (
          <div key={i} style={{ ...styles.card, background: cardBg, border: cardBorder }}>
            <h3 style={{ color: textColor }}>{plan.title}</h3>
            <p style={{ color: descColor, fontSize: '14px', lineHeight: '1.6' }}>{plan.desc}</p>
            <div style={styles.badgeRow}>
              <span style={{ ...styles.badge, background: primaryBrandColor, color: darkMode ? '#000' : '#fff' }}>🎯 {plan.target}</span>
              <span style={{ ...styles.badge, background: darkMode ? '#222' : '#eee', color: darkMode ? '#fff' : '#000' }}>⚡ {plan.level}</span>
            </div>
            <button 
              type="button"
              onClick={() => alert('جاري تجهيز رابط تحميل ملف الـ PDF كابتن! 💾')} 
              style={{ ...styles.downloadBtn, borderColor: primaryBrandColor, color: btnTextColor }}
            >
              تحميل الجدول مجاناً (PDF)
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  grid: { display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' },
  card: { width: '320px', padding: '25px', borderRadius: '12px', display: 'flex', flexDirection: 'column', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' },
  badgeRow: { display: 'flex', gap: '10px', margin: '15px 0' },
  badge: { fontSize: '12px', padding: '4px 10px', borderRadius: '20px', fontWeight: 'bold' },
  downloadBtn: { width: '100%', padding: '10px', background: 'transparent', border: '2px solid', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', marginTop: 'auto', outline: 'none' }
};

export default WorkoutPlans;