import React from "react";

export default function Input({
  className,
  placeholder,
  type,
  value,
  onChange,
  error,
  onBlur,
}) {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <input
        className={className}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        style={{
          width: "310px",
          borderColor: error?.required ? "#EB5757" : "rgba(0, 0, 0, 0.4)",
          background: error?.successValue,
        }}
      />
      <div
        style={{
          position: "absolute",
          fontSize: "15px",
          background: "#EB5757",
          color: "white",
          borderRadius: "50%",
          right: "10px",
          zIndex: 1,
          bottom: "30px",
          width: "23px",
          height: "23px",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "bolder",
          display: error?.required ? "flex" : "none",
        }}
      >
        !
      </div>
    </div>
  );
}
