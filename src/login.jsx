import React from 'react';

const Login = () => {
  return (
    <div style={styles.pageContainer}>
      <div style={styles.loginCard}>
        <h2 style={styles.title}>تسجيل الدخول ⚡</h2>
        <p style={styles.subtitle}>مرحباً بك مجدداً في عائلة سبورت زون</p>
        
        <form style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>البريد الإلكتروني</label>
            <input type="email" placeholder="email@example.com" style={styles.input} />
          </div>
          
          <div style={styles.inputGroup}>
            <label style={styles.label}>كلمة المرور</label>
            <input type="password" placeholder="••••••••" style={styles.input} />
          </div>
          
          <button type="submit" style={styles.loginBtn}>دخول</button>
        </form>
        
        <div style={styles.divider}>أو عبر</div>
        
        <div style={styles.socialIcons}>
          <button style={styles.socialBtn}>Google</button>
          <button style={styles.socialBtn}>Apple</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: { minHeight: '85vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0a0a0a', direction: 'rtl' },
  loginCard: { width: '400px', padding: '40px', background: '#161616', borderRadius: '20px', border: '1px solid #222', textAlign: 'center' },
  title: { color: '#CCFF00', fontSize: '28px', marginBottom: '10px' },
  subtitle: { color: '#888', marginBottom: '30px' },
  inputGroup: { textAlign: 'right', marginBottom: '20px' },
  label: { display: 'block', color: '#FFF', marginBottom: '8px', fontSize: '14px' },
  input: { width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #333', background: '#222', color: '#FFF', outline: 'none' },
  loginBtn: { width: '100%', padding: '12px', background: '#CCFF00', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' },
  divider: { margin: '20px 0', color: '#444', fontSize: '14px' },
  socialIcons: { display: 'flex', gap: '10px' },
  socialBtn: { flex: 1, padding: '10px', background: '#222', border: '1px solid #333', color: '#FFF', borderRadius: '8px', cursor: 'pointer' }
};

export default Login;