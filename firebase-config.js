// ─── RISE AND SHINE ACADEMY — FIREBASE CONFIG ─────────────────────────────────
//
// SETUP STEPS:
//  1. Go to https://console.firebase.google.com
//  2. Click "Add project" → give it a name (e.g. rise-and-shine-academy)
//  3. In the project, click "Web" icon (</>) → Register app → copy config below
//  4. Enable Firestore: Build → Firestore Database → Create database → Start in test mode
//  5. Enable Auth: Build → Authentication → Get started → Email/Password → Enable
//  6. Create your admin account: Authentication → Users → Add user (your email + password)
//  7. Paste your config values below (replace every REPLACE_WITH_* value)
//  8. Deploy Firestore rules: copy firestore.rules into the Firestore rules tab

const firebaseConfig = {
  apiKey:            "AIzaSyCUPFmgfKHceno0s9GWsygjmKt-AgdpPS4",
  authDomain:        "rise-and-shine-academy-17325.firebaseapp.com",
  projectId:         "rise-and-shine-academy-17325",
  storageBucket:     "rise-and-shine-academy-17325.firebasestorage.app",
  messagingSenderId: "180386743518",
  appId:             "1:180386743518:web:f9f66c5a64927616d06e4f"
};

// NOTE: Firebase web API keys are safe to expose — security comes from Firestore rules.

window.FIREBASE_READY = false;

if (!firebaseConfig.apiKey.includes('REPLACE_WITH')) {
  try {
    firebase.initializeApp(firebaseConfig);
    window.db = firebase.firestore();
    // Auth SDK is only loaded on admin.html — guard against missing SDK on other pages
    if (typeof firebase.auth === 'function') {
      window.auth = firebase.auth();
    }
    window.FIREBASE_READY = true;
    console.log('%c✅ Firebase connected: ' + firebaseConfig.projectId, 'color:green;font-weight:bold');
  } catch (e) {
    console.warn('Firebase init failed:', e.message);
  }
} else {
  console.warn('%c⚠ Firebase not configured. Edit firebase-config.js to connect.', 'color:orange;font-weight:bold');
}
