// =========== MATERI PROPS ================

import React from "react";
import propTypes from "prop-types";
import props from "props";

// ============== Cara 1 pakai props =================

// const Message = (props) => {
//   return (
//     <div>
//       <h1 style={{ color: props.color, fontSize: props.fontSize }}>
//         Hello, {props.name} anak kelas {props.kelas}
//       </h1>
//       {/* <h2>Hai, {</h2> */}
//     </div>
//   );
// };

// =========== Cara 2 pakai props ===========

function Message({ name, color, kelas, fontSize } = props) {
  return (
    <div>
      <h1 style={{ color: color, fontSize: fontSize }}>
        Hello, {name} anak kelas {kelas}
      </h1>
    </div>
  );
}

Message.propTypes = {
  name: propTypes.string.isRequired,
  color: propTypes.string.isRequired,
};

export default Message;
