import React from 'react';

const editGradeContext = React.createContext({
  grade: {
    id: 0,
    name: '',
    course: '',
    grade: 0
  },
  loadToForm: () => {}
});

export default editGradeContext;
