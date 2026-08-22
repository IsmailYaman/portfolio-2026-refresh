import * as React from "react";

/**
 * Underline field — mono uppercase label over a hairline-bottom input. Also the textarea.
 * @startingPoint section="Forms" subtitle="Underline fields and textarea" viewport="700x300"
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  /** Render a <textarea> instead of an <input>. */
  multiline?: boolean;
  rows?: number;
  inverse?: boolean;
}
export function Input(props: InputProps): JSX.Element;
