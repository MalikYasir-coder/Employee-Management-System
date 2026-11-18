import './Task.css'

function Task() {
  return (
    <section className="task-section" aria-labelledby="task-section-heading">
      <div className="task-section-header">
        <h1 id="task-section-heading">Tasks</h1>
      </div>
      <div className="task-card-track" aria-label="Task cards" tabIndex={0}>
        <article className="task-card task-card-blue">
          <div className="task-card-meta">
            <span className="task-priority">High</span>
            <time className="task-due-date" dateTime="2026-11-24">24 Nov 2026</time>
          </div>
          <h2 className="task-card-title">Prepare attendance report</h2>
          <p className="task-card-description">
            Review employee attendance and submit the monthly summary.
          </p>
        </article>

        <article className="task-card task-card-teal">
          <div className="task-card-meta">
            <span className="task-priority">Medium</span>
            <time className="task-due-date" dateTime="2026-11-26">26 Nov 2026</time>
          </div>
          <h2 className="task-card-title">Update employee profiles</h2>
          <p className="task-card-description">
            Check the team directory and update missing employee details.
          </p>
        </article>

        <article className="task-card task-card-violet">
          <div className="task-card-meta">
            <span className="task-priority">Low</span>
            <time className="task-due-date" dateTime="2026-11-28">28 Nov 2026</time>
          </div>
          <h2 className="task-card-title">Review leave requests</h2>
          <p className="task-card-description">
            Review pending requests and share your recommendations.
          </p>
        </article>

        <article className="task-card task-card-amber">
          <div className="task-card-meta">
            <span className="task-priority">High</span>
            <time className="task-due-date" dateTime="2026-11-30">30 Nov 2026</time>
          </div>
          <h2 className="task-card-title">Complete onboarding checklist</h2>
          <p className="task-card-description">
            Confirm the documents and setup steps for the new team member.
          </p>
        </article>
      </div>
    </section>
  )
}

export default Task