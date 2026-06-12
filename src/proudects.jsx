import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

const Proudects = () => {
  const { addToCart, darkMode } = useCart();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('الكل');

  // 🚀 الـ 50 منتج رياضي كاملين بروابط صور منتقاة ومطابقة بنسبة 100% لكل صنف
  const sportsProducts = [
    // === ملابس رياضية ===
    { id: 1, name: 'تيشيرت ضاغط للتمارين 👕', price: '٤٥٠ ج.م', description: 'تيشيرت رياضي بتقنية طرد العرق وقابلية تهوية ممتازة، مثالي لتمارين الجيم المقاومة.', type: 'ملابس رياضية', image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500' },
    { id: 2, name: 'بنطال رياضي (Jogger) مريح 👖', price: '٥٩٠ ج.م', description: 'خامات قطنية مرنة عالية الجودة مع جيوب بسحاب، مناسب للجري والتمارين اليومية.', type: 'ملابس رياضية', image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=500' },
    { id: 3, name: 'شورت جري سريع الجفاف 🩳', price: '٣٩٠ ج.م', description: 'خفيف الوزن ومزود ببطانة داخلية داعمة لمنع الاحتكاك أثناء الركض لمسافات طويلة.', type: 'ملابس رياضية', image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=500' },
    { id: 4, name: 'سترة رياضية مضادة للرياح 🧥', price: '٨٥٠ ج.م', description: 'جاكيت خفيف ومقاوم للماء والرياح، مثالي للتمارين الصباحية الخارجية في الأجواء الباردة.', type: 'ملابس رياضية', image: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?w=500' },
    { id: 5, name: 'حمالة صدر رياضية داعمة 🎽', price: '٤٢٠ ج.م', description: 'دعم عالي للأنشطة المكثفة كالكارديو والقفز، مرونة فائقة بدون خياطة مزعجة.', type: 'ملابس رياضية', image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=500' },
    { id: 6, name: 'بنطال ضيق (Leggings) لليوجا 🧘‍♀️', price: '٤٨٠ ج.م', description: 'خصر مرتفع ونسيج مطاطي يمنحك حرية الحركة الكاملة والتغطية المثالية.', type: 'ملابس رياضية', image: 'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=500' },
    { id: 7, name: 'جوارب رياضية مضغوطة (٣ أزواج) 🧦', price: '١٩٠ ج.م', description: 'توفر دعماً لقوس القدم ومبطنة عند الكعب وأصابع القدم لامتصاص الصدمات.', type: 'ملابس رياضية', image: 'https://images.unsplash.com/photo-1582966772680-860e372bb558?w=500' },
    { id: 8, name: 'هودي رياضي شتوي ثقيل 🧥', price: '٦٩٠ ج.م', description: 'مبطن بالفليس الناعم للحفاظ على حرارة الجسم قبل وبعد التمارين.', type: 'ملابس رياضية', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500' },
    { id: 9, name: 'تيشيرت كت كلاسيكي للجيم 🎽', price: '٢٨٠ ج.م', description: 'قصة مريحة تبرز عضلات الكتف وتسمح بتهوية كاملة تحت الإبط.', type: 'ملابس رياضية', image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500' },
    { id: 10, name: 'بدلة ساونا لإنقاص الوزن 🧥', price: '٥٥٠ ج.م', description: 'مصممة لحبس حرارة الجسم وزيادة التعرق أثناء تمارين الكارديو المكثفة.', type: 'ملابس رياضية', image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=500' },

    // === أحذية رياضية ===
    { id: 11, name: 'حذاء جري فائق المرونة 👟', price: '١٤٥٠ ج.م', description: 'نعل مبطن بتقنية الرغوة لامتصاص الصدمات وتقليل الضغط على الركبتين.', type: 'أحذية رياضية', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500' },
    { id: 12, name: 'حذاء تمرين ورفع أثقال 🏋️‍♂️', price: '١٦ درجة ج.م', description: 'نعل مسطح وصلب يوفر ثباتاً ممتازاً وقاعدة قوية أثناء تمارين السكوات والرفعة الميتة.', type: 'أحذية رياضية', image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500' },
    { id: 13, name: 'حذاء كرة قدم للملاعب العشبية ⚽', price: '١٣٥٠ ج.م', description: 'بروزات مدروسة لتوفير أقصى درجات الثبات والسرعة أثناء المناورة والتسديد.', type: 'أحذية رياضية', image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=500' },
    { id: 14, name: 'حذاء كرة سلة ذو رقبة مرتفعة 🏀', price: '١٧٥٠ ج.م', description: 'دعم ممتاز للكاحل لمنع الالتواءات أثناء القفز وتغيير الاتجاه السريع.', type: 'أحذية رياضية', image: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=500' },
    { id: 15, name: 'حذاء مشي خفيف يومي 👟', price: '٨٩٠ ج.م', description: 'جزء علوي شبكي نفاذ للهواء ونعل مرن مخصص للمشي لفترات طويلة بدون تعب.', type: 'أحذية رياضية', image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500' },
    { id: 16, name: 'حذاء تسلق جبلي مقاوم للماء 🥾', price: '١٩٠٠ ج.م', description: 'نعل خشن مضاد للانزلاق وهيكل متين يحمي القدم في الطرق الوعرة وغير الممهدة.', type: 'أحذية رياضية', image: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=500' },
    { id: 17, name: 'حذاء تنس أرضي جانبي الثبات 🎾', price: '١٢٥٠ ج.م', description: 'مصمم خصيصاً للحركات الجانبية السريعة على ملاعب التنس مع حماية لمقدمة القدم.', type: 'أحذية رياضية', image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500' },
    { id: 18, name: 'صندل استشفاء رياضي مريح 🩴', price: '٣٥٠ ج.م', description: 'نعل ناعم ومريح لراحة القدمين وتنشيط الدورة الدموية بعد التدريبات الشاقة.', type: 'أحذية رياضية', image: 'https://images.unsplash.com/photo-1603487396573-0934455dd2f0?w=500' },
    { id: 19, name: 'حذاء مسطح لتمارين الكاليستنكس 👟', price: '٧٥٠ ج.م', description: 'خفيف جداً ويمنحك شعور الاندماج مع الأرض، رائع للتمارين بوزن الجسم.', type: 'أحذية رياضية', image: 'https://images.unsplash.com/photo-1579298245158-33e8f5424613?w=500' },
    { id: 20, name: 'حذاء رياضي مضيء للأطفال 👟', price: '٦٢٠ ج.م', description: 'تصميم مريح للأقدام الصغيرة مع نعل يحتوي على إضاءة LED تفاعلية عند الحركة.', type: 'أحذية رياضية', image: 'https://images.unsplash.com/photo-1514989940723-e8e5163ccbe8?w=500' },

    // === معدات وأجهزة ===
    { id: 21, name: 'مجموعة دمبلز قابلة للتعديل ٢٠ كيلو 🏋️‍♂️', price: '١٨50 ج.م', description: 'حقيبة متكاملة من الطارات الحديدية مع مقابض مانعة للانزلاق لتمارين منزلية شاملة.', type: 'معدات وأجهزة', image: 'https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?w=500' },
    { id: 22, name: 'حبال المقاومة المطاطية (٥ مستويات) 🟨', price: '٣٢٠ ج.م', description: 'مجموعة حبال لاتكس لتمارين المقاومة وتشكيل العضلات مع مقابض وأحزمة كاحل.', type: 'معدات وأجهزة', image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=500' },
    { id: 23, name: 'سجادة يوجا وتمارين سميكة 🧘‍♂️', price: '٢٩٠ ج.م', description: 'سمك ١٠ ملم مضاد للانزلاق لحماية المفاصل والركبة أثناء تمارين الأرضية والبطن.', type: 'معدات وأجهزة', image: 'https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=500' },
    { id: 24, name: 'حبل قفز ذكي بمعدّد رقمي 🪢', price: '٢٢٠ ج.م', description: 'شاشة LCD مدمجة لحساب عدد القفزات والسعرات الحرارية المحروقة بدقة.', type: 'معدات وأجهزة', image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=500' },
    { id: 25, name: 'عقلة باب منزلية تلسكوبية 🚪', price: '٣٨٠ ج.م', description: 'تركيب سهل بدون مسامير في إطار الباب لتمارين العقلة وتقوية الظهر والذراعين.', type: 'معدات وأجهزة', image: 'https://images.unsplash.com/photo-1598971639058-aba3c7f09a7d?w=500' },
    { id: 26, name: 'عجلة تمارين البطن المزدوجة 🎡', price: '٢٤٠ ج.م', description: 'مزودة بنظام ارتداد ومقبض مريح لنحت وتقوية عضلات البطن والجذع بالكامل.', type: 'معدات وأجهزة', image: 'https://images.unsplash.com/photo-1600677396360-08013f49955d?w=500' },
    { id: 27, name: 'كرة توازن وثبات سويسرية 🔮', price: '٣١٠ ج.م', description: 'قطر ٦٥ سم مضادة للانفجار، ممتازة لتمارين العلاج الطبيعي وتقوية أسفل الظهر.', type: 'معدات وأجهزة', image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500' },
    { id: 28, name: 'بوش أب بار (مقابض ضغط) 🛑', price: '١٩٠ ج.م', description: 'تقلل الضغط والتحميل الزائد على معصم اليد وتزيد من مدى حركة تمرين الضغط.', type: 'معدات وأجهزة', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500' },
    { id: 29, name: 'جهاز الغزال الطائر للمنزل 🏃‍♂️', price: '٤٩٠٠ ج.م', description: 'تمرين حرق دهون وتخسيس للجسم كامل بدون إحداث أي تأثير سلبي على المفاصل.', type: 'معدات وأجهزة', image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=500' },
    { id: 30, name: 'مشاية كهربائية قابلة للطي 🏃‍♀️', price: '١٢٥٠٠ ج.م', description: 'محرك بقوة ٢.٥ حصان مع شاشة لقياس السرعة والمسافة والنبض، موفرة للمساحة.', type: 'معدات وأجهزة', image: 'https://images.unsplash.com/photo-1578762560072-44314e666045?w=500' },

    // === مكملات غذائية ===
    { id: 31, name: 'واي بروتين معزول (Whey Isolate) 🥛', price: '٢٤٥٠ ج.م', description: 'بروتين نقي سريع الامتصاص لبناء العضلات الخالية من الدهون (٢ كيلو).', type: 'مكملات غذائية', image: 'https://images.unsplash.com/photo-1579758629938-03607ccdbaba?w=500' },
    { id: 32, name: 'كرياتين مونوهايدريت نقي 🧪', price: '٨٩٠ ج.م', description: 'يزيد من القوة العضلية والانفجارية أثناء التمرين، غير منكه (٢٥٠ جرام).', type: 'مكملات غذائية', image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=500' },
    { id: 33, name: 'مكمل الطاقة (Pre-Workout) 🔥', price: '١١٥٠ ج.م', description: 'تركيبة غنية بالكافيين والبيتا-ألانين تمنحك تركيزاً خارقاً وضخ دم جبار.', type: 'مكملات غذائية', image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=500' },
    { id: 34, name: 'الأحماض الأمينية BCAA 🍇', price: '٩٨٠ ج.م', description: 'بنكهة التوت الأزرق، يساعد على الاستشفاء العضلي السريع ومنع الهدم أثناء التمرين.', type: 'مكملات غذائية', image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500' },
    { id: 35, name: 'أوميجا ٣ زيت سمك مكثف 🐟', price: '٤٥٠ ج.م', description: 'يدعم صحة المفاصل، القلب، والتركيز الذهني، تحتوي العلبة على ٩٠ كبسولة جيلاتينية.', type: 'مكملات غذائية', image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=500' },
    { id: 36, name: 'ملتي فيتامين رياضي متكامل 💊', price: '٥٢٠ ج.م', description: 'يغطي كافة الاحتياجات اليومية من الفيتامينات والمعادن لتعزيز المناعة والنشاط.', type: 'مكملات غذائية', image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=500' },
    { id: 37, name: 'بروتين بار قليل السعرات (كرتونة) 🍫', price: '٦٥٠ ج.م', description: '١٢ قطعة غنية بالبروتين والألياف ومغطاة بالشوكولاتة بدون سكر مضاف.', type: 'مكملات غذائية', image: 'https://images.unsplash.com/photo-1607349913338-fca6f7fc42d0?w=500' },
    { id: 38, name: 'مكمل الجلوتامين للاستشفاء 🧪', price: '٧٩٠ ج.م', description: 'يدعم صحة الأمعاء والجهاز المناعي ويسرع استشفاء الألياف العضلية الممزقة.', type: 'مكملات غذائية', image: 'https://images.unsplash.com/photo-1546483875-5f01450a876a?w=500' },
    { id: 39, name: 'حارق دهون طبيعي (L-Carnitine) 🧴', price: '٧٢٠ ج.م', description: 'مكمل سائل يساعد الجسم على تحويل الأحماض الدهنية إلى طاقة حركية.', type: 'مكملات غذائية', image: 'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?w=500' },
    { id: 40, name: 'بروتين الكازين بطيء الامتصاص 🥛', price: '٢٢٠٠ ج.م', description: 'يمد العضلات بالأحماض الأمينية طوال الليل أثناء النوم لمنع الهدم العضلي.', type: 'مكملات غذائية', image: 'https://images.unsplash.com/photo-1579758629938-03607ccdbaba?w=500' },

    // === إكسسوارات رياضية ===
    { id: 41, name: 'حقيبة ظهر رياضية مقاومة للماء 🎒', price: '٥80 ج.م', description: 'تحتوي على قسم منفصل للأحذية وجيوب مبطنة للمتعلقات الشخصية واللاب توب.', type: 'إكسسوارات رياضية', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500' },
    { id: 42, name: 'زجاجة ماء تحفيزية ٢ لتر 🍼', price: '١٨٠ ج.م', description: 'مقسمة بمؤشرات وقت لتذكيرك بشرب الماء طوال اليوم مع ماصة مريحة.', type: 'إكسسوارات رياضية', image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500' },
    { id: 43, name: 'قفازات رفع أثقال مبطنة جيل 🧤', price: '٢٤٠ ج.م', description: 'تحمي كف اليد من التقرنات والجروح وتوفر دعماً محكماً لمعصم اليد.', type: 'إكسسوارات رياضية', image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=500' },
    { id: 44, name: 'شيكر خلط البروتين ستانلس ستيل 🥛', price: '٣٥٠ ج.م', description: 'مزود بكرة شبكية داخلية لخلط المكملات بدون تكتل، عازل للحرارة.', type: 'إكسسوارات رياضية', image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=500' },
    { id: 45, name: 'أحزمة رفع الأثقال لرسغ اليد (Straps) 🪢', price: '١٥٠ ج.م', description: 'تساعدك على رفع أوزان أثقل في تمارين السحب عبر تخفيف الحمل عن سواعد اليد.', type: 'إكسسوارات رياضية', image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=500' },
    { id: 46, name: 'سماعات بلوتوث رياضية حول الرقبة 🎧', price: '650 ج.م', description: 'مقاومة للعرق وثابتة جداً في الأذن مع بطارية تدوم حتى ١٢ ساعة من الموسيقى الحماسية.', type: 'إكسسوارات رياضية', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500' },
    { id: 47, name: 'حزام ظهر جلدي لحماية القطنية 🪵', price: '٦٢٠ ج.م', description: 'مصنوع من الجلد الطبيعي لتوفير أقصى حماية لأسفل الظهر أثناء الأوزان الثقيلة.', type: 'إكسسوارات رياضية', image: 'https://images.unsplash.com/photo-1620052581237-5d36667be337?w=500' },
    { id: 48, name: 'ساعة رياضية ذكية للياقة البدنية ⌚', price: '١٢٥٠ ج.م', description: 'تتبع نبضات القلب، خطوات المشي، السعرات، وأنماط النوم مع قراءة الإشعارات.', type: 'إكسسوارات رياضية', image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500' },
    { id: 49, name: 'أشرطة رياضية لاصقة (Kinesiology Tape) 🩹', price: '١٩٠ ج.م', description: 'تدعم العضلات والمفاصل المصابة وتخفف الألم بفعالية دون تقييد حركتك.', type: 'إكسسوارات رياضية', image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=500' },
    { id: 50, name: 'مسدس مساج وتدليك العضلات 🔫', price: '١٦٥٠ ج.م', description: '٦ سرعات مختلفة ورؤوس متعددة لعمل مساج عميق وتخفيف التشنجات العضلية بعد التدريب.', type: 'إكسسوارات رياضية', image: 'https://images.unsplash.com/photo-1600881333168-2ef49b341f30?w=500' }
  ];

  const categories = ['الكل', 'ملابس رياضية', 'أحذية رياضية', 'معدات وأجهزة', 'مكملات غذائية', 'إكسسوارات رياضية'];

  const filteredProducts = sportsProducts.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'الكل' || product.type === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // الألوان الجديدة المتناسقة مع طابع المتجر الرياضي (Dark & Neon Neon)
  const pageBg = darkMode ? '#0A0A0A' : '#F8F9FA';
  const cardBg = darkMode ? '#161616' : '#FFFFFF';
  const textColor = darkMode ? '#FFFFFF' : '#111111';
  const subTextColor = darkMode ? '#AAAAAA' : '#666666';
  const borderStyle = darkMode ? '1px solid #222222' : '1px solid #E0E0E0';

  return (
    <div style={{...styles.container, backgroundColor: pageBg, transition: '0.3s'}}>
      <div style={styles.headerSection}>
        <h1 style={{...styles.mainTitle, color: darkMode ? '#CCFF00' : '#111111'}}>منتجاتنا الرياضية الاحترافية ✨</h1>
        <p style={{...styles.subtitle, color: subTextColor}}>تصفح الـ ٥٠ منتجاً المجهزة بالكامل لرفع مستوى أداءك البدني</p>
      </div>

      <div style={styles.filterSection}>
        <input 
          type="text" 
          placeholder="🔍 ابحث عن ملابس، أحذية، مكملات، أو أجهزة..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{...styles.searchInput, backgroundColor: cardBg, color: textColor, borderColor: darkMode ? '#CCFF00' : '#111111'}}
        />
        <div style={styles.categoryContainer}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                ...styles.categoryBtn,
                backgroundColor: selectedCategory === cat ? '#CCFF00' : cardBg,
                color: selectedCategory === cat ? '#000' : textColor,
                border: borderStyle
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <p style={{...styles.resultsCount, color: subTextColor}}>إجمالي المعروض حالياً: {filteredProducts.length} منتج رياضي</p>

      <div style={styles.grid}>
        {filteredProducts.length === 0 ? (
          <div style={{...styles.noResults, color: darkMode ? '#CCFF00' : '#111111'}}>عذراً، لم نجد أي منتج رياضي يطابق بحثك الحالي! ❌👟</div>
        ) : (
          filteredProducts.map((product) => (
            <div key={product.id} style={{...styles.card, backgroundColor: cardBg, border: borderStyle}}>
              
              <div style={styles.imageWrapper}>
                <img 
                  src={product.image} 
                  alt={product.name}
                  style={styles.productImage}
                  onError={(e) => { 
                    e.target.onerror = null; 
                    e.target.src = 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=500'; // صورة جيم بديلة لو الرابط تعطل
                  }} 
                />
              </div>

              <div style={{...styles.badge, backgroundColor: darkMode ? '#CCFF00' : '#111111', color: darkMode ? '#000' : '#FFF'}}>{product.type}</div>
              <h3 style={{...styles.productName, color: textColor}}>{product.name}</h3>
              <p style={{...styles.productDescription, color: subTextColor}}>{product.description}</p>
              <div style={{...styles.priceTag, color: darkMode ? '#CCFF00' : '#FF3333'}}>{product.price}</div>
              
              <div style={styles.buttonContainer}>
                <button onClick={() => addToCart(product)} style={{...styles.addToCartBtn, backgroundColor: darkMode ? '#222' : '#E0E0E0', color: textColor, border: darkMode ? '1px solid #444' : 'none'}}>إضافة للسلة 🛒</button>
                <Link to="/check/cart" onClick={() => addToCart(product)} style={{...styles.buyNowBtn, backgroundColor: '#CCFF00', color: '#000'}}>شراء الآن 👇</Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const styles = {
  container: { padding: '40px 20px', maxWidth: '1200px', margin: '0 auto', direction: 'rtl', fontFamily: 'sans-serif', minHeight: '80vh' },
  headerSection: { textAlign: 'center', marginBottom: '40px' },
  mainTitle: { fontSize: '36px', fontWeight: '900', marginBottom: '10px' },
  subtitle: { fontSize: '16px' },
  filterSection: { display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center', marginBottom: '30px' },
  searchInput: { width: '100%', maxWidth: '600px', padding: '14px 20px', borderRadius: '30px', border: '2px solid', fontSize: '16px', outline: 'none' },
  categoryContainer: { display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' },
  categoryBtn: { padding: '8px 16px', borderRadius: '20px', cursor: 'pointer', fontWeight: 'bold', fontSize: '14px', transition: '0.3s' },
  resultsCount: { fontSize: '14px', marginBottom: '20px', textAlign: 'right', width: '100%', maxWidth: '1150px', margin: '0 auto 20px auto' },
  grid: { display: 'flex', flexWrap: 'wrap', gap: '25px', justifyContent: 'center' },
  card: { borderRadius: '15px', padding: '20px', width: '280px', display: 'flex', flexDirection: 'column', position: 'relative', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' },
  imageWrapper: { width: '100%', height: '170px', borderRadius: '12px', overflow: 'hidden', marginBottom: '15px', backgroundColor: '#EEE' },
  productImage: { width: '100%', height: '100%', objectFit: 'cover', transition: '0.3s' },
  badge: { position: 'absolute', top: '25px', left: '25px', fontSize: '11px', padding: '4px 10px', borderRadius: '20px', fontWeight: 'bold', zIndex: 2 },
  productName: { fontSize: '18px', margin: '10px 0 5px 0', fontWeight: 'bold' },
  productDescription: { fontSize: '13px', lineHeight: '1.6', flexGrow: 1, marginBottom: '15px' },
  priceTag: { fontSize: '20px', fontWeight: 'black', marginBottom: '15px' },
  buttonContainer: { display: 'flex', gap: '8px' },
  addToCartBtn: { flex: 1, padding: '10px', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '13px', transition: '0.3s' },
  buyNowBtn: { flex: 1, padding: '10px', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '13px', textAlign: 'center', textDecoration: 'none', transition: '0.3s' },
  noResults: { padding: '40px', fontSize: '18px', fontWeight: 'bold', textAlign: 'center' }
};

export default Proudects;