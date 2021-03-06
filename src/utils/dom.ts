/**
 * Walk up the DOM hierarchy returning the first ancestor that passes the
 * matcher function.
 *
 * @param element The DOM node to start with
 * @param matcher A function that returns `true` if the passed node matches the
 *    desired criteria
 * @param includeNode If `true`, the node itself is included in the search
 * @param maxSearchSteps Maximum number of levels to search up the DOM
 *
 * @return DOM node that matches the matcher or `undefined` if nothing matched.
 */

function getAncestor(element: Element, matcher: (el: Element) => boolean, includeNode?: boolean, maxSearchSteps?: number) {
  if (element && !includeNode) {
    element = element.parentNode as Element;
  }

  let steps = 0;
  while (element && (maxSearchSteps === undefined || steps <= maxSearchSteps)) {
    if (matcher(element)) {
      return element;
    }

    element = element.parentNode as Element;
    steps++;
  }

  // Reached the root of the DOM without a match
  return undefined;
}

/**
 * Walks up the DOM hierarcy returning the first ancestor that has the passed
 * class name.  If the passed element matches the class name, it is returned.
 *
 * @param element The DOM node to start with
 * @param cName The class name to match
 * @param maxSearchSteps Maximum number of levels to search up the DOM
 *
 * @return The first ancestor that matches the specified class name or
 *   `undefined` if nothing matches.
 */
export function getAncestorByClass(element: Element, cName: string, maxSearchSteps?: number) {
  return getAncestor(element, node =>
      // tslint:disable-next-line: strict-type-predicates
      node.className !== undefined && typeof node.className.split === 'function' &&
      node.className.split(/\s+/).indexOf(cName) >= 0,
    true, maxSearchSteps);
}
