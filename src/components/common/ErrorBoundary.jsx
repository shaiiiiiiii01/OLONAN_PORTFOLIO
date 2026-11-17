import { Component } from 'react';

/** Last line of defence: shows a friendly message instead of a blank page if something crashes. */
export default class ErrorBoundary extends Component {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error, info) {
    console.error('Portfolio crashed:', error, info);
  }

  render() {
    if (!this.state.failed) return this.props.children;
    return (
      <div className="nf wrap" style={{ display: 'block' }} role="alert">
        <h2>Something went wrong.</h2>
        <p>The page couldn’t load properly. Reload to try again.</p>
        <button className="btn" type="button" onClick={() => window.location.reload()}>
          Reload page
        </button>
      </div>
    );
  }
}
