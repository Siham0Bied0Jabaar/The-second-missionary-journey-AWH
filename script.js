// AHW Ministry i18n & Interactive Logic

document.addEventListener('DOMContentLoaded', () => {
  // Configurable Google Form URL (User can update this URL anytime!)
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeM0IjN1c3UA9LRUQuloCLFCI7jzfLJwHwnN5Za8N7HBZcE7w/viewform?usp=publish-editor";

  // Translation Dictionaries
  const translations = {
    en: {
      langBtnText: "العربية",
      ministryTitle: "AHW - Ministry",
      ministryTagline: "Connecting Hearts through Faith, Fellowship & Prayer",
      welcomeBadge: "Welcome to Our Official Social Hub",
      socialHeading: "Our Official Channels",
      socialSubtext: "Follow, subscribe, and stay updated with our latest spiritual content and announcements.",
      
      fbDesc: "Join our Facebook community for daily posts & live streams.",
      fbBtn: "Follow Page",
      
      ytDesc: "Watch sermons, teachings, music, and uplifting messages.",
      ytBtn: "Subscribe Now",
      
      igDesc: "View photo highlights, verse graphics, and daily inspirations.",
      igBtn: "Follow Us",
      
      waDesc: "Connect with our ministry directly or join our update group.",
      waBtn: "Message Us",

      prayerTitle: "Prayer Requests",
      prayerSubtext: "Do you need prayer? Share your requests with us so we can stand together with you in faith.",
      prayerFormBtnText: "Submit Prayer Request (Google Form)",

      footerBlessing: "May the Lord bless you and keep you.",
      footerCopy: "AHW - Ministry. All rights reserved."
    },
    ar: {
      langBtnText: "English",
      ministryTitle: "خدمة AHW - Ministry",
      ministryTagline: "نربط القلوب من خلال الإيمان والشركة والصلاة",
      welcomeBadge: "مرحباً بكم في المنصة الرسمية لخدمتنا",
      socialHeading: "قنواتنا الرسمية",
      socialSubtext: "تابعنا واشترك لتصلك أحدث التجميعات التعبدية، التأملات، والإعلانات.",

      fbDesc: "انضم إلى مجتمعنا على فيسبوك للمنشورات اليومية والبث المباشر.",
      fbBtn: "تابع الصفحة",

      ytDesc: "شاهد العظات، التعاليم، الترنيم، والرسائل المشجعة.",
      ytBtn: "اشترك الآن",

      igDesc: "استمتع بالصور التوضيحية، الآيات الكتابية، والتأملات اليومية.",
      igBtn: "تابعنا",

      waDesc: "تواصل مع الخدمة مباشرةً أو انضم إلى مجموعة التحديثات.",
      waBtn: "تواصل معنا",

      prayerTitle: "طلبات الصلاة",
      prayerSubtext: "هل تحتاج إلى صلاة؟ شاركنا طلباتك لنقف معك في الإيمان والشفاعة.",
      prayerFormBtnText: "أرسل طلب صلاة (نموذج جوجل)",

      footerBlessing: "يباركك الرب ويحفظك.",
      footerCopy: "خدمة AHW - Ministry. جميع الحقوق محفوظة."
    }
  };

  // Current Language State (Default 'en', or retrieve from localStorage)
  let currentLang = localStorage.getItem('ahw_lang') || 'en';

  // DOM Elements
  const langToggleBtn = document.getElementById('langToggleBtn');
  const langBtnText = document.getElementById('langBtnText');
  const ministryTitle = document.getElementById('ministryTitle');
  const ministryTagline = document.getElementById('ministryTagline');
  const welcomeBadge = document.getElementById('welcomeBadge');
  const socialHeading = document.getElementById('socialHeading');
  const socialSubtext = document.getElementById('socialSubtext');

  const fbDesc = document.getElementById('fbDesc');
  const fbBtn = document.getElementById('fbBtn');
  const ytDesc = document.getElementById('ytDesc');
  const ytBtn = document.getElementById('ytBtn');
  const igDesc = document.getElementById('igDesc');
  const igBtn = document.getElementById('igBtn');
  const waDesc = document.getElementById('waDesc');
  const waBtn = document.getElementById('waBtn');

  const prayerTitle = document.getElementById('prayerTitle');
  const prayerSubtext = document.getElementById('prayerSubtext');
  const prayerFormBtnText = document.getElementById('prayerFormBtnText');
  const footerBlessing = document.getElementById('footerBlessing');

  const prayerFormLink = document.getElementById('prayerFormLink');

  // Set Google Form Link
  if (prayerFormLink) {
    prayerFormLink.href = GOOGLE_FORM_URL;
  }

  // Update Language Function
  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('ahw_lang', lang);
    const t = translations[lang];

    // Document Attribute for RTL/LTR
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    // UI Updates
    if (langBtnText) langBtnText.textContent = t.langBtnText;
    if (ministryTitle) ministryTitle.textContent = t.ministryTitle;
    if (ministryTagline) ministryTagline.textContent = t.ministryTagline;
    if (welcomeBadge) welcomeBadge.textContent = t.welcomeBadge;
    
    if (socialHeading) {
      const icon = socialHeading.querySelector('i');
      socialHeading.innerHTML = '';
      if (icon) socialHeading.appendChild(icon);
      const span = document.createElement('span');
      span.textContent = t.socialHeading;
      socialHeading.appendChild(span);
    }
    if (socialSubtext) socialSubtext.textContent = t.socialSubtext;

    if (fbDesc) fbDesc.textContent = t.fbDesc;
    if (fbBtn) fbBtn.textContent = t.fbBtn;
    if (ytDesc) ytDesc.textContent = t.ytDesc;
    if (ytBtn) ytBtn.textContent = t.ytBtn;
    if (igDesc) igDesc.textContent = t.igDesc;
    if (igBtn) igBtn.textContent = t.igBtn;
    if (waDesc) waDesc.textContent = t.waDesc;
    if (waBtn) waBtn.textContent = t.waBtn;

    if (prayerTitle) prayerTitle.textContent = t.prayerTitle;
    if (prayerSubtext) prayerSubtext.textContent = t.prayerSubtext;
    if (prayerFormBtnText) prayerFormBtnText.textContent = t.prayerFormBtnText;
    if (footerBlessing) footerBlessing.textContent = t.footerBlessing;
  }

  // Toggle Language Handler
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const newLang = currentLang === 'en' ? 'ar' : 'en';
      applyLanguage(newLang);
    });
  }

  // Dynamic Year
  const yearSpan = document.getElementById('yearSpan');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Initialize Language
  applyLanguage(currentLang);
});
