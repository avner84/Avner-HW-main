import { PropTypes } from 'prop-types';

function ComponentPropTypes(props) {
   return (
      <div>
         <p>Name: {props.name}</p>
         <p>Age: {props.age}</p>
      </div>
   );
};

ComponentPropTypes.propTypes = {
   name: PropTypes.string.isRequired,
   age: PropTypes.number,
   array: PropTypes.array,
   arrayNumbers: PropTypes.arrayOf(PropTypes.number),
   customProp: function (props, propName, componentName) {
      if (props.arrayNumbers.length < 100) {
         return new Error(
            "We did not accept short array under 100 items " + componentName
         );
      }
   }
};

export default ComponentPropTypes;