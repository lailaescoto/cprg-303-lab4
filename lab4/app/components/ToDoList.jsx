// ToDoList.jsx
import React from 'react';

function ToDoList({ tasks }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li
          key={index}
          style={styles.list}
        >
          {task}
        </li>
      ))}
    </ul>
  );
}

export default ToDoList;

const styles = ({
list: {
  textDecoration: 'none',
  color: 'black',
  listStyleType: 'circle',
  marginBottom: '10px'
  }
});