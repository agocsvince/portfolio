export const scrollintoViewHandler = (target: string) => {
  const element = document.getElementById(target);
  element!.scrollIntoView({ behavior: 'smooth', block: 'start' });
};