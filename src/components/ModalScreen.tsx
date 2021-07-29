import React from 'react';

const ModalScreen = ({ navigation, route }) => {
  const { text, component } = route.params;
  return (
    <>
      {component}
    </>
  );
}

export default ModalScreen