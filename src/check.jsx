import React, { useState } from 'react';
import { useCart } from './CartContext'; 
import SuggestProducts from './SuggestProducts'; 

const Check = () => {
  const { cartItems, cartTotal, clearCart, darkMode } = useCart(); 
  const [isOrdered, setIsOrdered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOrdered(true);
    clearCart(); 
  };

  const pageBg = darkMode ? '#0a0a0a' : '#f8f9fa';
  const mainTitleColor = darkMode ? '#CCFF00' : '#111111';
  const formBg = darkMode ? '#111111' : '#ffffff';
  const summaryBg = darkMode ? '#161616' : '#f9f9f9';
  const textColor = darkMode ? '#ffffff' : '#111111';
  const labelColor = darkMode ? '#ffffff' : '#444444';
  const inputBg = darkMode ? '#222222' : '#ffffff';
  const inputBorder = darkMode ? '1px solid #333333' : '1px solid #cccccc';
  const cardBorder = darkMode ? '1px solid #222222' : '1px solid #e0e0e0';
  
  // حل مشكلة بهتان اللون الأخضر الفاتح في عناوين الأقسام والإجمالي
  const sectionTitleColor = darkMode ? '#CCFF00' : '#000000'; 
  const totalColor = darkMode ? '#CCFF00' : '#E67E22'; // برتقالي رياضي فخم أو أسود للمضيء

  if (isOrdered) {
    return (
      <div style={{ ...styles.successContainer, backgroundColor: pageBg }}>
        <div style={{ ...styles.successCard, backgroundColor: formBg, border: cardBorder }}>
          <span style={styles.successIcon}>🎉</span>
          <h2 style={styles.successTitle}>تم استلام طلبك بنجاح!</h2>
          <p style={{ ...styles.successText, color: darkMode ? '#CCCCCC' : '#555555' }}>
            شكراً لثقتك في متجر **سبورت زون**. جاري تجهيز معداتك الرياضية وسيتم التواصل معك قريباً لتأكيد الشحن!
          </p>
          <div style={{ ...styles.rewardNotice, backgroundColor: darkMode ? '#1c1c1c' : '#eef9f1' }}>
            <p style={{ margin: 0, color: darkMode ? '#CCFF00' : '#27AE60', fontWeight: 'bold' }}>
              👑 مبروك مقدماً دخولك نادي المكافآت.. لقد أضفت 50 نقطة تمرين جديدة لحسابك!
            </p>
          </div>
          <div style={styles.successActionRow}>
            <a href="/tracking" style={styles.trackBtn}>📦 تتبع حالة شحنتك</a>
            <a href="/proudects" style={styles.backBtn}>العودة للمتجر</a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ ...styles.container, backgroundColor: pageBg, transition: '0.3s' }}>
      <h1 style={{ ...styles.mainTitle, color: mainTitleColor }}>إتمام وتأكيد الشراء 🛒</h1>
      
      <div style={styles.contentLayout}>
        <form onSubmit={handleSubmit} style={{ ...styles.formSection, backgroundColor: formBg, border: cardBorder, color: textColor }}>
          <h3 style={{ ...styles.sectionTitle, color: sectionTitleColor, borderBottom: darkMode ? '1px solid #222' : '1px solid #eee' }}>1. بيانات الشحن والتوصيل</h3>
          
          <div style={styles.inputGroup}>
            <label style={{ ...styles.label, color: labelColor }}>الاسم بالكامل *</label>
            <input type="text" required placeholder="محمد أحمد" style={{ ...styles.input, backgroundColor: inputBg, color: textColor, border: inputBorder }} />
          </div>

          <div style={styles.inputGroup}>
            <label style={{ ...styles.label, color: labelColor }}>رقم الهاتف *</label>
            <input type="tel" required placeholder="01xxxxxxxxx" style={{ ...styles.input, backgroundColor: inputBg, color: textColor, border: inputBorder }} />
          </div>

          <div style={styles.inputGroup}>
            <label style={{ ...styles.label, color: labelColor }}>المحافظة والمدينة *</label>
            <input type="text" required placeholder="القاهرة، مدينة نصر" style={{ ...styles.input, backgroundColor: inputBg, color: textColor, border: inputBorder }} />
          </div>

          <div style={styles.inputGroup}>
            <label style={{ ...styles.label, color: labelColor }}>العنوان بالتفصيل *</label>
            <input type="text" required placeholder="اسم الشارع / رقم العقار بالتفصيل" style={{ ...styles.input, backgroundColor: inputBg, color: textColor, border: inputBorder }} />
          </div>

          <h3 style={{ ...styles.sectionTitle, color: sectionTitleColor, borderBottom: darkMode ? '1px solid #222' : '1px solid #eee' }}>2. طريقة الدفع</h3>
          <div style={styles.radioGroup}>
            <label style={{ ...styles.radioLabel, color: textColor }}>
              <input type="radio" name="payment" defaultChecked style={styles.radio} />
              <span>الدفع عند الاستلام (كاش) 💵</span>
            </label>
            <label style={{ ...styles.radioLabel, color: textColor }}>
              <input type="radio" name="payment" style={styles.radio} />
              <span>فودافون كاش / محفظة إلكترونية 📱</span>
            </label>
          </div>

          <button 
            type="submit" 
            disabled={cartItems.length === 0} 
            style={{
              ...styles.confirmBtn, 
              backgroundColor: cartItems.length === 0 ? '#333333' : '#CCFF00', 
              color: cartItems.length === 0 ? '#777777' : '#000000', 
              cursor: cartItems.length === 0 ? 'not-allowed' : 'pointer'
            }}
          >
            {cartItems.length === 0 ? 'السلة فارغة حالياً ⚠️' : 'تأكيد الطلب الآن ✨'}
          </button>
        </form>

        <div style={{ ...styles.summarySection, backgroundColor: summaryBg, border: cardBorder }}>
          <h3 style={{ ...styles.sectionTitle, color: sectionTitleColor, borderBottom: darkMode ? '1px solid #222' : '1px solid #eee' }}>ملخص الحساب</h3>
          
          <div style={styles.itemsList}>
            {cartItems.length === 0 ? (
              <p style={{ textAlign: 'center', color: '#888', fontSize: '14px' }}>لم تضف أي منتجات بعد!</p>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} style={styles.itemRow}>
                  <span style={{ color: textColor }}>{item.name} <span style={{ color: darkMode ? '#CCFF00' : '#E67E22', fontWeight: 'bold' }}>({item.quantity}x)</span></span>
                  <span style={{ color: textColor }}>{item.price}</span>
                </div>
              ))
            )}
          </div>

          <hr style={{ ...styles.divider, borderTop: darkMode ? '1px solid #222222' : '1px solid #dddddd' }} />
          
          <div style={styles.summaryRow}>
            <span style={{ color: darkMode ? '#BBBBBB' : '#555555' }}>إجمالي المنتجات:</span>
            <strong style={{ color: textColor }}>{cartItems.length === 0 ? 0 : cartTotal} ج.م</strong>
          </div>
          <div style={styles.summaryRow}>
            <span style={{ color: darkMode ? '#BBBBBB' : '#555555' }}>تكلفة الشحن:</span>
            <span style={{ color: '#27AE60', fontWeight: 'bold' }}>مجاني بمناسبة الافتتاح 🎁</span>
          </div>
          
          <hr style={{ ...styles.divider, borderTop: darkMode ? '1px solid #222222' : '1px solid #dddddd' }} />
          
          <div style={{ ...styles.totalRow, color: totalColor }}>
            <span>الإجمالي النهائي:</span>
            <span>{cartItems.length === 0 ? 0 : cartTotal} ج.م</span>
          </div>
        </div>
      </div>

      <SuggestProducts />
    </div>
  );
};

const styles = {
  container: { padding: '40px 20px', maxWidth: '1100px', margin: '0 auto', direction: 'rtl', fontFamily: 'sans-serif', minHeight: '80vh' },
  mainTitle: { textAlign: 'center', marginBottom: '40px', fontWeight: '900', fontSize: '32px' },
  contentLayout: { display: 'flex', gap: '30px', flexWrap: 'wrap-reverse' },
  formSection: { flex: '2', minWidth: '300px', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' },
  summarySection: { flex: '1', minWidth: '280px', padding: '25px', borderRadius: '12px', height: 'fit-content', boxShadow: '0 4px 15px rgba(0,0,0,0.02)' },
  sectionTitle: { fontSize: '18px', marginBottom: '20px', paddingBottom: '8px', fontWeight: 'bold' },
  itemsList: { display: 'flex', flexDirection: 'column', gap: '12px', maxHeight: '180px', overflowY: 'auto' },
  itemRow: { display: 'flex', justifyContent: 'space-between', fontSize: '14px' },
  inputGroup: { marginBottom: '20px' },
  label: { display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 'bold' },
  input: { width: '100%', padding: '12px', borderRadius: '8px', fontSize: '15px', boxSizing: 'border-box', outline: 'none' },
  radioGroup: { display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '30px' },
  radioLabel: { display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontSize: '15px' },
  radio: { accentColor: '#CCFF00', scale: '1.2' },
  confirmBtn: { width: '100%', padding: '15px', borderRadius: '8px', fontSize: '18px', fontWeight: 'bold', border: 'none', transition: '0.3s' },
  summaryRow: { display: 'flex', justifyContent: 'space-between', marginBottom: '15px', fontSize: '15px' },
  divider: { border: 'none', margin: '15px 0' },
  totalRow: { display: 'flex', justifyContent: 'space-between', fontSize: '18px', fontWeight: 'bold', marginBottom: '15px' },
  successContainer: { display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '70vh', padding: '20px', direction: 'rtl' },
  successCard: { padding: '40px 30px', borderRadius: '16px', textAlign: 'center', maxWidth: '550px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' },
  successIcon: { fontSize: '55px', display: 'block', marginBottom: '15px' },
  successTitle: { color: '#27AE60', marginBottom: '15px', fontWeight: '900', fontSize: '26px' },
  successText: { fontSize: '15px', lineHeight: '1.7', marginBottom: '20px' },
  rewardNotice: { padding: '15px', borderRadius: '10px', marginBottom: '25px', border: '1px dashed #27AE60', fontSize: '14px' },
  successActionRow: { display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' },
  trackBtn: { display: 'inline-block', padding: '12px 24px', backgroundColor: 'transparent', color: '#27AE60', border: '2px solid #27AE60', textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold' },
  backBtn: { display: 'inline-block', padding: '12px 24px', backgroundColor: '#CCFF00', color: '#000000', textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold' }
};

export default Check;