import React from 'react';
import { useCart } from './CartContext';

const RewardPoints = () => {
  const { darkMode } = useCart();

  return (
    <div style={{ padding: '60px 20px', direction: 'rtl', minHeight: '85vh', background: darkMode ? '#0a0a0a' : '#fff', textAlign: 'center' }}>
      <div style={{ ...styles.rewardCard, background: darkMode ? '#111' : '#f9f9f9', border: darkMode ? '2px solid #CCFF00' : '1px solid #eee' }}>
        <span style={{ fontSize: '50px' }}>👑</span>
        <h2 style={{ color: darkMode ? '#fff' : '#111', margin: '10px 0' }}>نادي أبطال سبورت زون للمكافآت</h2>
        <p style={{ color: '#888', maxWidth: '500px', margin: '0 auto 30px auto' }}>كل تمرينة وكل شروة ليها قيمتها! اجمع نقاط التمرين واستبدلها بكوبونات خصم حقيقية على المكملات والأدوات الرياضية.</p>

        <div style={styles.pointsDashboard}>
          <p style={{ color: '#aaa', margin: 0 }}>نقاطك الحالية</p>
          <h1 style={{ fontSize: '48px', color: '#CCFF00', margin: '5px 0', fontWeight: '900' }}>150 <span style={{ fontSize: '18px' }}>نقطة تمرين</span></h1>
        </div>

        <h4 style={{ color: darkMode ? '#fff' : '#111', textAlign: 'right', marginTop: '30px' }}>المكافآت المتاحة لك:</h4>
        <div style={styles.giftRow}>
          <div style={styles.giftBox}>
            <p style={{ fontWeight: 'bold', margin: '0 0 5px 0' }}>خصم 100 ج.م على السلة</p>
            <button style={styles.lockBtn}>🔒 يحتاج 300 نقطة</button>
          </div>
          <div style={styles.giftBox}>
            <p style={{ fontWeight: 'bold', margin: '0 0 5px 0' }}>شحن مجاني لأي مكان بمصر</p>
            <button style={styles.activeBtn} onClick={() => alert('تم تفعيل الخصم! كود الشحن المجاني الخاص بك هو: SZ-FREE')}>🔓 استبدل الآن (100 نقطة)</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  rewardCard: { maxWidth: '650px', margin: '0 auto', padding: '40px 20px', borderRadius: '16px' },
  pointsDashboard: { background: '#161616', padding: '20px', borderRadius: '12px', border: '1px solid #222' },
  giftRow: { display: 'flex', gap: '15px', flexWrap: 'wrap', marginTop: '15px' },
  giftBox: { flex: 1, minWidth: '240px', padding: '20px', background: '#1c1c1c', borderRadius: '10px', textAlign: 'right', border: '1px solid #333', color: '#fff' },
  lockBtn: { width: '100%', padding: '8px', background: '#333', color: '#aaa', border: 'none', borderRadius: '6px', marginTop: '10px' },
  activeBtn: { width: '100%', padding: '8px', background: '#CCFF00', color: '#000', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' }
};

export default RewardPoints;