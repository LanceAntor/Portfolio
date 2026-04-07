type LoadingScreenProps = {
  isDiving: boolean
}

const LoadingScreen = ({ isDiving }: LoadingScreenProps) => {
  return (
    <div
      className={`loading-screen ${isDiving ? 'loading-screen-dive' : ''}`}
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
    >
      <h1 className="loading-brand">
        <span className="loading-brand-outline">LanXe</span>
        <span className="loading-brand-fill">LanXe</span>
      </h1>
    </div>
  )
}

export default LoadingScreen