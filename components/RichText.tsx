import React, { useEffect } from "react";
import snarkdown from "snarkdown";
import { ISetValue } from "@interfaces/index";

interface ITypeRichTextProps extends ISetValue {
  html: string;
  doNotParse?: boolean;
}

const RichText = ({ html = "", doNotParse = false, setValue }: ITypeRichTextProps) => {
  useEffect(() => setValue((prevState) => [...prevState, "RichText"]), []);

  const richTextRef = React.useRef<HTMLDivElement>(null);
  const content = doNotParse ? html : snarkdown(html);

  useEffect(() => {
    if (richTextRef.current) {
      const links = richTextRef.current.getElementsByTagName("a");
      if (links && links.length) {
        Array.from(links).forEach((link) => {
          if (link.href.startsWith("http")) {
            link.setAttribute("target", "_blank");
          }
        });
      }
    }
  }, [richTextRef]);

  return (
    <div
      ref={richTextRef}
      dangerouslySetInnerHTML={{ __html: content }}
      style={{ textAlign: "left", margin: "30px auto", padding: "0 30px" }}
    />
  );
};

export default RichText;
