import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";
import { User } from "firebase/auth";

export interface UserData {
  uid: string;
  email: string;
  displayName: string | null;
  photoURL: string | null;
  emailVerified: boolean;
  createdAt: any;
  lastLogin: any;
  provider: string;
}

export async function createUserDocument(user: User, provider: string = "email") {
  if (!user || !user.email) return;

  // For email signups, only create document if email is verified or if it's Google signup
  if (provider === "email" && !user.emailVerified) {
    console.log("⏳ Email not verified yet, skipping Firestore document creation");
    return;
  }

  const userRef = doc(db, "users", user.uid);

  try {
    const userSnap = await getDoc(userRef);

    // Only create if user doesn't exist
    if (!userSnap.exists()) {
      const userData: UserData = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName || null,
        photoURL: user.photoURL || null,
        emailVerified: user.emailVerified,
        createdAt: serverTimestamp(),
        lastLogin: serverTimestamp(),
        provider: provider,
      };

      await setDoc(userRef, userData);
      console.log("✅ User document created successfully");
    } else {
      // Update last login time (merge to avoid overwriting)
      await setDoc(
        userRef,
        {
          lastLogin: serverTimestamp(),
          emailVerified: user.emailVerified,
          displayName: user.displayName || userSnap.data().displayName,
          photoURL: user.photoURL || userSnap.data().photoURL,
        },
        { merge: true }
      );
      console.log("✅ User last login updated");
    }
  } catch (error: any) {
    console.error("❌ Error with user document:", error);
    
    // More specific error handling
    if (error.code === "permission-denied") {
      console.error("⚠️ Firestore permissions denied. Please check your security rules.");
    } else if (error.code === "unavailable") {
      console.error("⚠️ Firestore is unavailable. Check your internet connection.");
    }
    
    throw error;  // Re-throw so the calling function can handle it
  }
}
