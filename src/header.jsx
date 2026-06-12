import React from 'react';

const Header = () => {
  return (
    <div style={styles.heroContainer}>
      {/* القسم الرئيسي (Hero Section) */}
      <div style={styles.overlay}>
        <h1 style={styles.title}>تحدّى قدراتك وفجّر طاقتك الرياضية ⚡</h1>
        <p style={styles.subtitle}>
          نوفر لك أفضل الملابس والمعدات الرياضية والمكملات الغذائية من أشهر الماركات العالمية لتصل إلى قمة أدائك البدني.
        </p>
        
        {/* قسم العرض الخاص المتوفر في المتجر */}
        <div style={styles.offerBox}>
          <span style={styles.offerBadge}>عرض الإطلاق الحصري! 🔥</span>
          <p style={styles.offerText}>احصل على خصم **25%** على أول طلب لك + شحن مجاني للمشتريات بأكثر من 500 جنيه!</p>
        </div>

        <div style={styles.buttonContainer}>
          <a href="/proudects" style={styles.primaryButton}>تسوق الآن</a>
          <a href="/offers" style={styles.secondaryButton}>اكتشف العروض</a>
        </div>
      </div>
    </div>
  );
};

const styles = {
  heroContainer: {
    // خلفية متدرجة بألوان رياضية داكنة وقوية (تمنح طابع الجيم والنشاط)
    background: 'linear-gradient(135deg, #0a0a0a 0%, #1c1c1c 100%)',
    minHeight: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '40px 20px',
    direction: 'rtl',
  },
  overlay: {
    maxWidth: '800px',
    color: '#FFF',
  },
  title: {
    fontSize: '42px',
    fontWeight: '900', // جعل الخط عريضاً وقوياً ليناسب الرياضة
    marginBottom: '20px',
    color: '#FFFFFF',
    lineHeight: '1.4',
  },
  subtitle: {
    fontSize: '18px',
    color: '#B5B5B5', // لون رمادي فاتح مريح للعين
    marginBottom: '35px',
    lineHeight: '1.8',
  },
  offerBox: {
    backgroundColor: 'rgba(204, 255, 0, 0.05)', // خلفية خفيفة جداً من اللون الفسفوري
    border: '1px dashed #CCFF00', // إطار منقط باللون الفسفوري
    borderRadius: '12px',
    padding: '20px',
    marginBottom: '35px',
    display: 'inline-block',
  },
  offerBadge: {
    display: 'inline-block',
    backgroundColor: '#FF3333', // لون أحمر رياضي حاد لجذب الانتباه بسرعة
    color: '#FFF',
    padding: '5px 12px',
    borderRadius: '5px',
    fontSize: '14px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  offerText: {
    margin: 0,
    fontSize: '16px',
    color: '#FFF',
  },
  buttonContainer: {
    display: 'flex',
    gap: '15px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  primaryButton: {
    display: 'inline-block',
    backgroundColor: '#CCFF00', // اللون الفسفوري النيون الرياضي الأساسي لزر الأكشن
    color: '#000000', // نص أسود داكن ليكون واضحاً جداً فوق الفسفوري
    padding: '12px 35px',
    borderRadius: '25px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '16px',
    transition: '0.3s ease',
    boxShadow: '0 4px 20px rgba(204, 255, 0, 0.4)', // توهج فسفوري مميز للزر
  },
  secondaryButton: {
    display: 'inline-block',
    backgroundColor: 'transparent',
    color: '#FFF',
    border: '2px solid #CCFF00', // إطار فسفوري ليتماشى مع الهوية البصرية
    padding: '10px 33px',
    borderRadius: '25px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '16px',
    transition: '0.3s ease',
  },
};

export default Header;