import React, { useState } from 'react';
import { useCart } from './CartContext';

const FitnessCalculator = () => {
  const { darkMode } = useCart();
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [goal, setGoal] = useState('lose');
  const [result, setResult] = useState(null);

  const calculateCalories = (e) => {
    e.preventDefault();
    if (!weight || !height || !age) return;

    // معادلة تقريبية لحساب السعرات الأساسية (Mifflin-St Jeor)
    const bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    let tdee = bmr * 1.375; // نشاط متوسط

    if (goal === 'gain') tdee += 400;
    else if (goal === 'lose') tdee -= 400;

    setResult({
      calories: Math.round(tdee),
      protein: Math.round(weight * 2),
      carbs: Math.round((tdee * 0.45) / 4)
    });
  };

  const cardBg = darkMode ? '#111' : '#fff';
  const textColor = darkMode ? '#fff' : '#111';

  return (
    <div style={{ ...styles.container, background: darkMode ? '#0a0a0a' : '#f5f5f5' }}>
      <div style={{ ...styles.card, background: cardBg, color: textColor, border: darkMode ? '1px solid #222' : '1px solid #eee' }}>
        <h2 style={{ color: darkMode ? '#CCFF00' : '#111' }}>حاسبة السعرات والماكروز الذكية ⚡</h2>
        <form onSubmit={calculateCalories} style={styles.form}>
          <input type="number" placeholder="الوزن (كجم)" value={weight} onChange={e => setWeight(e.target.value)} style={styles.input} />
          <input type="number" placeholder="الطول (سم)" value={height} onChange={e => setHeight(e.target.value)} style={styles.input} />
          <input type="number" placeholder="العمر" value={age} onChange={e => setAge(e.target.value)} style={styles.input} />
          <select value={goal} onChange={e => setGoal(e.target.value)} style={styles.select}>
            <option value="lose">تنشيف / خسارة وزن</option>
            <option value="maintain">المحافظة على الوزن</option>
            <option value="gain">تضخيم / زيادة عضلات</option>
          </select>
          <button type="submit" style={styles.btn}>احسب الآن</button>
        </form>

        {result && (
          <div style={styles.resultBox}>
            <h3>احتياجك اليومي التقريبي:</h3>
            <p>🔥 السعرات: <span style={{ color: '#CCFF00', fontWeight: 'bold' }}>{result.calories} سعرة</span></p>
            <p>💪 البروتين: <span>{result.protein} جرام</span></p>
            <p>🍚 الكربوهيدرات: <span>{result.carbs} جرام</span></p>
            <div style={styles.recommendation}>
              <p>💡 **نصيحة كابتن سبورت زون:** هدفك يتطلب مكملات بجودة عالية. نقترح تصفح قسم الواي بروتين في متجرنا لدعم بنائك العضلي!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: { minHeight: '85vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', direction: 'rtl' },
  card: { width: '100%', maxWidth: '550px', padding: '35px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.2)' },
  form: { display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' },
  input: { padding: '12px', borderRadius: '8px', border: '1px solid #444', background: 'transparent', color: 'inherit' },
  select: { padding: '12px', borderRadius: '8px', border: '1px solid #444', background: '#222', color: '#fff' },
  btn: { padding: '14px', background: '#CCFF00', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', color: '#000' },
  resultBox: { marginTop: '25px', padding: '20px', background: '#1c1c1c', borderRadius: '10px', textAlign: 'right' },
  recommendation: { marginTop: '15px', paddingTop: '15px', borderTop: '1px dashed #444', fontSize: '13px', color: '#aaa' }
};

export default FitnessCalculator;