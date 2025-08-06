// Global loading state that persists during navigation but resets on hard refresh
let hasShownLoadingScreen = false;

export const getLoadingState = () => {
  return hasShownLoadingScreen;
};

export const setLoadingShown = () => {
  hasShownLoadingScreen = true;
};

export const shouldShowLoading = () => {
  // Only show loading if we haven't shown it yet AND we're on homepage
  const isHomepage = window.location.pathname === '/';
  return !hasShownLoadingScreen && isHomepage;
};
