import './Task.css'

function Task() {
  return (
    <section className="task-section" aria-labelledby="task-section-heading">
      <div className="task-section-header">
        <h1 id="task-section-heading">Tasks</h1>
      </div>
      <div className="task-card-grid">
        <div className="task-card" aria-hidden="true" />
        <div className="task-card" aria-hidden="true" />
        <div className="task-card" aria-hidden="true" />
        <div className="task-card" aria-hidden="true" />
      </div>
    </section>
  )
}

export default Task