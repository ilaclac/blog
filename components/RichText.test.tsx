import React from "react";
import { render } from "@testing-library/react";

import RichText from "./RichText";

describe("RichText", () => {
  // eslint-disable-next-line jest/expect-expect
  it("should render content", () => {
    const content = "lorem ipsum";
    const setValue = () => "SomeComponentName";
    render(<RichText html={`<p>${content}</p>`} setValue={setValue} />);
  });
});
