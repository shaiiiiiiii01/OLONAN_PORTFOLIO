// Small four-point sparkle used as a decoration and in the logo.
export default function Sparkle({ size = 20, className = "" }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 1 C12.8 7.5 16.5 11.2 23 12 C16.5 12.8 12.8 16.5 12 23 C11.2 16.5 7.5 12.8 1 12 C7.5 11.2 11.2 7.5 12 1Z" fill="currentColor" />
    </svg>
  );
}
