import './Alltask.css'

function Alltask() {
  return (
    <section className="admin-tasks" aria-labelledby="admin-tasks-heading">
      <header className="admin-tasks-header">
        <div>
          <span className="admin-tasks-eyebrow">TEAM WORKSPACE</span>
          <h2 id="admin-tasks-heading">All tasks</h2>
        </div>
        <span className="admin-tasks-count">6 tasks</span>
      </header>

      <div className="admin-tasks-grid">
        <article className="admin-task-item admin-task-item-blue">
          <div className="admin-task-item-top">
            <span className="admin-task-priority">High priority</span>
            <span className="admin-task-status">In progress</span>
          </div>
          <h3>Prepare attendance report</h3>
          <p>Review this month's attendance and share the summary with management.</p>
          <div className="admin-task-item-footer">
            <span>Assigned to <strong>Yasir</strong></span>
            <time dateTime="2026-11-24">Due Nov 24</time>
          </div>
        </article>

        <article className="admin-task-item admin-task-item-teal">
          <div className="admin-task-item-top">
            <span className="admin-task-priority">Medium priority</span>
            <span className="admin-task-status">New</span>
          </div>
          <h3>Update employee profiles</h3>
          <p>Check team records and complete any missing contact information.</p>
          <div className="admin-task-item-footer">
            <span>Assigned to <strong>Abdullah</strong></span>
            <time dateTime="2026-11-26">Due Nov 26</time>
          </div>
        </article>

        <article className="admin-task-item admin-task-item-violet">
          <div className="admin-task-item-top">
            <span className="admin-task-priority">Low priority</span>
            <span className="admin-task-status">New</span>
          </div>
          <h3>Review leave requests</h3>
          <p>Review pending leave requests and prepare recommendations.</p>
          <div className="admin-task-item-footer">
            <span>Assigned to <strong>Muneeb</strong></span>
            <time dateTime="2026-11-27">Due Nov 27</time>
          </div>
        </article>

        <article className="admin-task-item admin-task-item-amber">
          <div className="admin-task-item-top">
            <span className="admin-task-priority">High priority</span>
            <span className="admin-task-status">In progress</span>
          </div>
          <h3>Complete onboarding checklist</h3>
          <p>Prepare the required documents and setup for the new team member.</p>
          <div className="admin-task-item-footer">
            <span>Assigned to <strong>Yasir</strong></span>
            <time dateTime="2026-11-28">Due Nov 28</time>
          </div>
        </article>

        <article className="admin-task-item admin-task-item-rose">
          <div className="admin-task-item-top">
            <span className="admin-task-priority">Medium priority</span>
            <span className="admin-task-status">Completed</span>
          </div>
          <h3>Organize team documents</h3>
          <p>Sort shared HR files and make sure documents are easy to find.</p>
          <div className="admin-task-item-footer">
            <span>Assigned to <strong>Abdullah</strong></span>
            <time dateTime="2026-11-29">Due Nov 29</time>
          </div>
        </article>

        <article className="admin-task-item admin-task-item-cyan">
          <div className="admin-task-item-top">
            <span className="admin-task-priority">Low priority</span>
            <span className="admin-task-status">New</span>
          </div>
          <h3>Prepare weekly team update</h3>
          <p>Collect project updates and share a brief summary with the team.</p>
          <div className="admin-task-item-footer">
            <span>Assigned to <strong>Muneeb</strong></span>
            <time dateTime="2026-11-30">Due Nov 30</time>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Alltask