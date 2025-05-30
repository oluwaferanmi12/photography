/**
 * Determines if a color is light or dark
 * @param {string} color - The color in hex, rgb, or rgba format
 * @returns {boolean} - True if the color is light, false if dark
 */
function isLightColor(color) {
  // Convert the color to RGB values
  let r, g, b;
  
  // Handle hex format
  if (color.startsWith('#')) {
    const hex = color.substring(1);
    const bigint = parseInt(hex, 16);
    r = (bigint >> 16) & 255;
    g = (bigint >> 8) & 255;
    b = bigint & 255;
  } 
  // Handle rgb/rgba format
  else if (color.startsWith('rgb')) {
    const parts = color.match(/(\d+)/g);
    r = parseInt(parts[0]);
    g = parseInt(parts[1]);
    b = parseInt(parts[2]);
  } else {
    // Default to dark if color format is not recognized
    return false;
  }
  
  // Calculate luminance (perceived brightness)
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  
  // Return true for light colors, false for dark
  return luminance > 0.5;
}

/**
 * Detects the background color of an element and applies appropriate styling
 * @param {HTMLElement} element - The element to check
 * @param {HTMLElement} targetElement - The element to style based on background
 */
export function applyBackgroundAwareStyles(element, targetElement) {
  if (!element || !targetElement) return;
  
  // Get computed background color
  const bgColor = window.getComputedStyle(element).backgroundColor;
  
  // Check if background is light
  const isLightBg = isLightColor(bgColor);
  
  // Apply styles based on background
  if (isLightBg) {
    targetElement.style.backgroundColor = 'black';
    targetElement.style.color = 'black';
  } else {
    targetElement.style.backgroundColor = 'rgba(255, 255, 255, 0.12)';
    targetElement.style.color = 'white';
  }
}