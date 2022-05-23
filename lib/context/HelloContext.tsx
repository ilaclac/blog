/* eslint-disable react/display-name */
import React, { createContext, useState, useContext, ReactNode } from "react";
import { NextPageContext } from "next";

interface IHelloContext {
  value: Array<string>;
  setValue: React.Dispatch<React.SetStateAction<Array<string>>>;
}

const HelloContext = createContext<IHelloContext>({} as IHelloContext);

export const HelloProvider = (props: { children: ReactNode }) => {
  const [value, setValue] = useState(["Context"]);
  const helloContext = { value, setValue };

  if (typeof window === undefined) console.log("Hello from", value);

  return <HelloContext.Provider value={helloContext}>{props.children}</HelloContext.Provider>;
};

const useSample =
  (
    WrappedComponent:
      | (React.ComponentClass<any> & { getInitialProps?(context: NextPageContext): any })
      | (React.FunctionComponent<any> & { getInitialProps?(context: NextPageContext): any })
  ) =>
  (props: any) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const helloContext = useContext(HelloContext);
    return <WrappedComponent {...props} value={helloContext.value} setValue={helloContext.setValue} />;
  };

export { useSample };
