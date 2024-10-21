const employees = [
    {
      "": [
        {
          "id": 1,
          "email": "employee1@example.com",
          "password": "123",
          "tasks": [
            {
              "title": "Task 1",
              "description": "Complete the project report",
              "date": "2024-10-18",
              "category": "Work",
              "active": true,
              "new_task": false,
              "completed": false,
              "failed": false
            },
            {
              "title": "Task 2",
              "description": "Prepare presentation slides",
              "date": "2024-10-20",
              "category": "Work",
              "active": true,
              "new_task": true,
              "completed": false,
              "failed": false
            },
            {
              "title": "Task 3",
              "description": "Attend team meeting",
              "date": "2024-10-21",
              "category": "Meeting",
              "active": false,
              "new_task": false,
              "completed": true,
              "failed": false
            }
          ]
        },
        {
          "id": 2,
          "email": "employee2@example.com",
          "password": "123",
          "tasks": [
            {
              "title": "Task 1",
              "description": "Fix bugs in the software",
              "date": "2024-10-17",
              "category": "Development",
              "active": false,
              "new_task": false,
              "completed": true,
              "failed": false
            },
            {
              "title": "Task 2",
              "description": "Write documentation",
              "date": "2024-10-22",
              "category": "Documentation",
              "active": true,
              "new_task": true,
              "completed": false,
              "failed": false
            },
            {
              "title": "Task 3",
              "description": "Code review for team",
              "date": "2024-10-19",
              "category": "Code Review",
              "active": true,
              "new_task": true,
              "completed": false,
              "failed": false
            }
          ]
        },
        {
          "id": 3,
          "email": "employee3@example.com",
          "password": "123",
          "tasks": [
            {
              "title": "Task 1",
              "description": "Schedule client meeting",
              "date": "2024-10-18",
              "category": "Client",
              "active": false,
              "new_task": false,
              "completed": true,
              "failed": false
            },
            {
              "title": "Task 2",
              "description": "Create marketing strategy",
              "date": "2024-10-25",
              "category": "Marketing",
              "active": true,
              "new_task": true,
              "completed": false,
              "failed": false
            },
            {
              "title": "Task 3",
              "description": "Update website content",
              "date": "2024-10-23",
              "category": "Web",
              "active": true,
              "new_task": false,
              "completed": false,
              "failed": false
            }
          ]
        },
        {
          "id": 4,
          "email": "employee4@example.com",
          "password": "123",
          "tasks": [
            {
              "title": "Task 1",
              "description": "Submit expense report",
              "date": "2024-10-16",
              "category": "Finance",
              "active": false,
              "new_task": false,
              "completed": true,
              "failed": false
            },
            {
              "title": "Task 2",
              "description": "Plan team outing",
              "date": "2024-10-30",
              "category": "Team",
              "active": true,
              "new_task": true,
              "completed": false,
              "failed": false
            }
          ]
        },
        {
          "id": 5,
          "email": "employee5@example.com",
          "password": "123",
          "tasks": [
            {
              "title": "Task 1",
              "description": "Conduct performance review",
              "date": "2024-10-28",
              "category": "HR",
              "active": true,
              "new_task": true,
              "completed": false,
              "failed": false
            },
            {
              "title": "Task 2",
              "description": "Prepare budget report",
              "date": "2024-10-27",
              "category": "Finance",
              "active": true,
              "new_task": true,
              "completed": false,
              "failed": false
            },
            {
              "title": "Task 3",
              "description": "Organize training session",
              "date": "2024-10-29",
              "category": "Training",
              "active": true,
              "new_task": false,
              "completed": false,
              "failed": false
            }
          ]
        }
      ]
    }
  ];
  
  const admin = [
    {
      "admin": {
        "id": 1,
        "email": "admin@example.com",
        "password": "123",
      
    }
}];

export const setLocalStorage=()=>{
   localStorage.setItem('employees',JSON.stringify(employees))
   localStorage.setItem('admin',JSON.stringify(admin))

}

export const getLocalStorager=()=>{
  const employees=JSON.parse(localStorage.getItem('employees'))
  const admin=JSON.parse(localStorage.getItem('admin'))

  console.log(admin)

}