/** Custom 404, shown for any unknown #hash. */
export default function NotFound() {
  return (
    <div className="nf wrap" id="nf" role="alert">
      <h1>404</h1>
      <h2>This page doesn’t exist.</h2>
      <p>The link may be broken or the page may have moved. Head back home and pick a page from the menu.</p>
      <a className="btn" href="#home">Back to home</a>
    </div>
  );
}
