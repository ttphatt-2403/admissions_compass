import { useEffect } from "react";
import { logEvent } from "firebase/analytics";
import { doc, setDoc, increment, serverTimestamp } from "firebase/firestore";
import { analytics, db } from "../lib/firebase";

export function usePageAnalytics(schoolId: string, schoolName: string) {
  useEffect(() => {
    const startTime = Date.now();
    const now = new Date();
    const today = now.toISOString().split("T")[0];
    const hour = now.getHours().toString().padStart(2, "0"); // "09", "14"...
    const weekDay = now.getDay(); // 0=Sun, 6=Sat

    // GA4 events
    logEvent(analytics, "page_view", {
      page_title: schoolName,
      page_location: window.location.href,
      school_id: schoolId,
    });
    logEvent(analytics, "school_landing_view", {
      school_id: schoolId,
      school_name: schoolName,
    });

    // Firestore refs
    const statsRef = doc(db, "pageStats", schoolId);
    const dailyRef = doc(db, "pageStats", schoolId, "daily", today);
    const hourlyRef = doc(db, "pageStats", schoolId, "hourly", hour);
    const weekdayRef = doc(db, "pageStats", schoolId, "weekday", String(weekDay));

    // Ghi lượt xem
    setDoc(statsRef, {
      schoolName,
      totalViews: increment(1),
      lastVisited: serverTimestamp(),
    }, { merge: true }).catch(console.error);

    setDoc(dailyRef, { views: increment(1) }, { merge: true }).catch(console.error);
    setDoc(hourlyRef, { views: increment(1) }, { merge: true }).catch(console.error);
    setDoc(weekdayRef, { views: increment(1) }, { merge: true }).catch(console.error);

    // Ghi thời gian khi rời trang
    return () => {
      const timeSpentSeconds = Math.round((Date.now() - startTime) / 1000);
      if (timeSpentSeconds < 2) return;

      logEvent(analytics, "school_landing_engagement", {
        school_id: schoolId,
        school_name: schoolName,
        time_spent_seconds: timeSpentSeconds,
      });

      setDoc(dailyRef, {
        totalTimeSeconds: increment(timeSpentSeconds),
        sessions: increment(1),
      }, { merge: true }).catch(console.error);

      setDoc(statsRef, {
        totalTimeSeconds: increment(timeSpentSeconds),
        totalSessions: increment(1),
      }, { merge: true }).catch(console.error);
    };
  }, [schoolId, schoolName]);
}
