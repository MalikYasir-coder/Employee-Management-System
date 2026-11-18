function TaskListnumber() {
  return (
    <section className="task-stats" aria-label="Task statistics">
      <div className="task-stat-card task-stat-new">
        <h2 className="task-stat-label">New Tasks</h2>
        <h1 className="task-stat-value">0</h1>
      </div>
      <div className="task-stat-card task-stat-completed">
        <h2 className="task-stat-label">Completed Tasks</h2>
        <h1 className="task-stat-value">0</h1>
      </div>
      <div className="task-stat-card task-stat-failed">
        <h2 className="task-stat-label">Failed Tasks</h2>
        <h1 className="task-stat-value">0</h1>
      </div>
      <div className="task-stat-card task-stat-accepted">
        <h2 className="task-stat-label">Accepted Tasks</h2>
        <h1 className="task-stat-value">0</h1>
      </div>
    </section>
  )
}

export default TaskListnumber