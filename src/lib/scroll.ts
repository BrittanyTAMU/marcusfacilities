const HEADER_OFFSET = 80;

/**
 * Smoothly scroll to an element by selector (e.g. "#contact", "#services").
 * Use in onClick with e.preventDefault() for in-page anchor links.
 */
export function scrollToSection(href: string): void {
  const element = document.querySelector(href);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - HEADER_OFFSET;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}
