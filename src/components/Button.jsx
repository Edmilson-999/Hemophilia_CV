import '../styles/Button.css';

export default function Button({ 
  children, 
  type = 'button', 
  variant = 'primary', 
  size = 'md', // Valores: sm, md, lg
  onClick, 
  disabled = false,
  loading = false
}) {
  return (
    <button 
      type={type}
      className={`btn btn-${variant} btn-${size} ${loading ? 'btn-loading' : ''}`}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? (
        <span className="btn-loading-text">{children}</span>
      ) : (
        children
      )}
    </button>
  );
}