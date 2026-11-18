import '../components/Dashboard/AdminDashboard.css'

function CreateTask() {
  return (
   <main className="admin-page">
      <div className="admin-content">
        <header className="admin-page-header">
          <span className="admin-eyebrow">EMPLOYEE MANAGEMENT</span>
          <h1>Admin Panel</h1>
          <p>Create and organize tasks for your team.</p>
        </header>

        <div className="admin-layout">
          <section className="admin-task-card" aria-labelledby="create-task-heading">
            <div className="admin-card-header">
              <span className="admin-card-icon" aria-hidden="true">+</span>
              <div>
                <h2 id="create-task-heading">Create a task</h2>
                <p>Give your team a clear next step.</p>
              </div>
            </div>

            <form className="admin-task-form">
              <label className="admin-field">
                <span>Task title</span>
                <input type="text" placeholder="e.g. Review monthly report" />
              </label>

              <label className="admin-field">
                <span>Description</span>
                <textarea rows="4" placeholder="Add a short description of the task" />
              </label>

              <div className="admin-form-row">
                <label className="admin-field">
                  <span>Due date</span>
                  <input type="date" />
                </label>

                <label className="admin-field">
                  <span>Priority</span>
                  <select defaultValue="Medium">
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                  </select>
                </label>
              </div>

              <label className="admin-field">
                <span>Assign to</span>
                <select defaultValue="">
                  <option value="" disabled>Select an employee</option>
                  <option>Employee 1</option>
                  <option>Employee 2</option>
                  <option>Employee 3</option>
                </select>
              </label>

              <label className="admin-field">
                <span>Category</span>
                <select defaultValue="">
                  <option value="" disabled>Select a category</option>
                  <option>Human Resources</option>
                  <option>Development</option>
                  <option>Operations</option>
                </select>
              </label>

              <button className="admin-create-button" type="button">
                Create Task
              </button>
            </form>
          </section>

          <aside className="admin-guidance-card" aria-labelledby="task-tips-heading">
            <span className="admin-guidance-kicker">QUICK GUIDE</span>
            <h2 id="task-tips-heading">Make every task clear</h2>
            <p className="admin-guidance-intro">
              A little detail helps your team understand what to do and when it is due.
            </p>

            <div className="admin-guidance-list">
              <div className="admin-guidance-item">
                <span>01</span>
                <p><strong>Set a clear goal</strong>Use a short, specific title.</p>
              </div>
              <div className="admin-guidance-item">
                <span>02</span>
                <p><strong>Add useful context</strong>Explain what a good result looks like.</p>
              </div>
              <div className="admin-guidance-item">
                <span>03</span>
                <p><strong>Choose a deadline</strong>Set a realistic due date and priority.</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}

export default CreateTask