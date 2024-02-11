export function amIclicked(
  e: MouseEvent,
  element: HTMLElement
): boolean {
  const target = e.target as HTMLElement;

  return (
    target instanceof HTMLElement &&
    target.id === element.id
  );
}
