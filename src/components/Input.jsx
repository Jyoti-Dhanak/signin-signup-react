import "./Input.css";
import React from "react";
import { useField } from "formik";

export default function Input(props) {
  const [field, meta] = useField(props.name);
  return (
    <div className="inp">
      <label htmlFor={props.for}>{props.label}</label>
      <input
        {...field}
        type={props.type}
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        className={meta.touched && meta.error ? "error" : ""}
      />
      {meta.touched && meta.error ? (
        <div className="registervalidation">{meta.error}</div>
      ) : null}
    </div>
  );
}
