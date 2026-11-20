const employees = [
  {
    id: 1,
    name: 'Yasir',
    email: 'employee1@example.com',
    password: '123',
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: 'Prepare attendance report',
        taskDescription: 'Review employee attendance and prepare the monthly summary.',
        taskDate: '2026-11-24',
        category: 'Reporting',
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: 'Update employee profiles',
        taskDescription: 'Check the team directory and update missing contact details.',
        taskDate: '2026-11-26',
        category: 'Human Resources',
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: 'Organize team documents',
        taskDescription: 'Sort shared HR files and make documents easy to find.',
        taskDate: '2026-11-19',
        category: 'Administration',
      },
    ],
  },
  {
    id: 2,
    name: 'Abdullah',
    email: 'employee2@example.com',
    password: '123',
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: 'Review leave requests',
        taskDescription: 'Review pending leave requests and prepare recommendations.',
        taskDate: '2026-11-27',
        category: 'Human Resources',
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: 'Complete onboarding checklist',
        taskDescription: 'Prepare documents and setup steps for the new team member.',
        taskDate: '2026-11-28',
        category: 'Onboarding',
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: 'Submit weekly status update',
        taskDescription: 'Share progress and blockers from this week with the manager.',
        taskDate: '2026-11-18',
        category: 'Reporting',
      },
    ],
  },
  {
    id: 3,
    name: 'Muneeb',
    email: 'employee3@example.com',
    password: '123',
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: 'Prepare weekly team update',
        taskDescription: 'Collect project updates and share a summary with the team.',
        taskDate: '2026-11-25',
        category: 'Communication',
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: 'Audit office equipment',
        taskDescription: 'Check the equipment inventory and report items that need service.',
        taskDate: '2026-11-29',
        category: 'Operations',
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: 'Archive previous records',
        taskDescription: 'Move completed team records into the shared archive.',
        taskDate: '2026-11-20',
        category: 'Administration',
      },
    ],
  },
  {
    id: 4,
    name: 'Ihsan',
    email: 'employee4@example.com',
    password: '123',
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: 'Review department objectives',
        taskDescription: 'Check the department objectives and note any required updates.',
        taskDate: '2026-11-27',
        category: 'Planning',
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: 'Update project documentation',
        taskDescription: 'Bring the project notes and process documentation up to date.',
        taskDate: '2026-11-30',
        category: 'Documentation',
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: 'Schedule team check-in',
        taskDescription: 'Arrange the regular team check-in and share the agenda.',
        taskDate: '2026-11-20',
        category: 'Communication',
      },
    ],
  },
  {
    id: 5,
    name: 'Hassan',
    email: 'employee5@example.com',
    password: '123',
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: 'Process submitted forms',
        taskDescription: 'Check submitted forms for completeness and process them.',
        taskDate: '2026-11-25',
        category: 'Operations',
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: 'Prepare training materials',
        taskDescription: 'Gather the materials needed for the upcoming team training.',
        taskDate: '2026-11-28',
        category: 'Training',
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: 'Confirm meeting room setup',
        taskDescription: 'Make sure the meeting room and presentation equipment are ready.',
        taskDate: '2026-11-19',
        category: 'Administration',
      },
    ],
  },
]

const admin = [
  {
    id: 1,
    email: 'admin@example.com',
    password: '123',
  },
]

function setLocalStorage() {
  if (localStorage.getItem('employees') === null) {
    localStorage.setItem('employees', JSON.stringify(employees))
  }

  if (localStorage.getItem('admin') === null) {
    localStorage.setItem('admin', JSON.stringify(admin))
  }
}

export default setLocalStorage