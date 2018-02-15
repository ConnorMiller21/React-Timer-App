import EditableTimer from './EditableTimer';

class EditableTimerList extends React.Component {
   render() {
      return (
         <div>
            <EditableTimer
               title='Learn React'
               project='Web Domination'
               elapsed='8986300'
               runningSince={ null }
               editFormOpen={ true }
            />
            <EditableTimer
               title='Timer'
               Project='React'
               elapsed='3890985'
               runningSince={ null }
               editFormOpen={ false }
            />
         </div>
      );
   }
}

export default EditableTimerList;
