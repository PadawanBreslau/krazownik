export function handlePageChange(page, props) {
  props.onPageChange(page, props.dispatch, props);
  window.scrollTo(0, 0);
}
