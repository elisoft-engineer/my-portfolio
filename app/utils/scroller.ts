export const scrollToSection = (
  e: React.MouseEvent<HTMLAnchorElement>,
  targetId: string,
) => {
  e.preventDefault();
  const targetElement = document.querySelector(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};
