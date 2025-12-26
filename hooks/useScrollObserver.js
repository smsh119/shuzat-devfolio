"use client";

import { useEffect, useState } from "react";

function useScrollObserver(sectionIds, excludedIdsFromUrl = []) {
  const [activeId, setActiveId] = useState(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0,
      },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  useEffect(() => {
    if (activeId && !excludedIdsFromUrl.includes(activeId)) {
      history.replaceState(null, "", `#${activeId}`);
    } else {
      history.replaceState(null, "", location.pathname);
    }
  }, [activeId]);

  return activeId;
}

export default useScrollObserver;
