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
  apiKey:            "REPLACE_WITH_YOUR_API_KEY",
  authDomain:        "REPLACE_WITH_YOUR_AUTH_DOMAIN",
  projectId:         "REPLACE_WITH_YOUR_PROJECT_ID",
  storageBucket:     "REPLACE_WITH_YOUR_STORAGE_BUCKET",
  messagingSenderId: "REPLACE_WITH_YOUR_MESSAGING_SENDER_ID",
  appId:             "REPLACE_WITH_YOUR_APP_ID"
};

// NOTE: Firebase web API keys are safe to expose — security comes from Firestore rules.

window.FIREBASE_READY = false;

if (!firebaseConfig.apiKey.includes('REPLACE_WITH')) {
  try {
    firebase.initializeApp(firebaseConfig);
    window.db   = firebase.firestore();
    window.auth = firebase.auth();
    window.FIREBASE_READY = true;
    console.log('%c✅ Firebase connected: ' + firebaseConfig.projectId, 'color:green;font-weight:bold');
  } catch (e) {
    console.warn('Firebase init failed:', e.message);
  }
} else {
  console.warn('%c⚠ Firebase not configured. Edit firebase-config.js to connect.', 'color:orange;font-weight:bold');
}
