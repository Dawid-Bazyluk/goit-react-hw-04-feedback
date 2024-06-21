import React from "react";
import PropTypes from "prop-types";

const Section = ({ title, children }) => (
  <section>
    <h2>{title}</h2>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object,
};

export default Section;

// export default class Section extends Component {
//   static propTypes = {
//     title: PropTypes.string,
//     children: PropTypes.object,
//   };
//   render() {
//     const { title, children } = this.props;
//     return (
//       <section>
//         <h2>{title}</h2>
//         {children}
//       </section>
//     );
//   }
// }
