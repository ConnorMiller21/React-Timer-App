### Running the app

1. Ensure you have `npm` installed.

Follow the instructions for your platform [here](https://github.com/npm/npm).

2. Install all dependencies:

````
npm install
````

3. Boot the HTTP server

````
npm run server
````

The server is now running at [localhost:3000](localhost:3000)

===============================================================

React App Development:
   1. Break App Into Components
   2. Build Static Version
   3. Determine What Should Be Stateful
   4. Determine Which Component Each Piece Of 'State' Should Live In
      - Is it passed in from parent via props? Id=f so, probably isn't state
      - Does it change over time? If so, probably isn't state
      - Can you compute it based on any other state or props in your component? If so, it    isn't state
   5. Hard-Code Initial States
   6. Add Inverse Data Flow
   7. Add Server Communication

Components Tree:

   TimersDashboard (PASSES: 'isOpen')
      |__ EditableTimerList (PASSES: 'title', 'project', 'elapsed', 'runningSince', 'editFormOpen')
         |__ EditableTimer (PASSES: 'title', 'project', 'elapsed', 'runningSince' - USES: 'editFormOpen')
            |__ Timer (USES: 'title', 'project', 'elapsed', 'runningSince')
            |__ TimerForm (USES: 'title', 'project')
      |__ ToggleableTimerForm (USES: 'isOpen')
         |__ TimerForm (USES: 'title', 'project')

State:
