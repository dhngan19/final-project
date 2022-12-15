import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";

export { };

declare global {
    interface LayoutProps {
        children: ReactNode;
    }

    type NextPageWithLayout = NextPage & {
        Layout?: (props: LayoutProps) => ReactElement;
    }

    type AppPropsWithLayout = AppProps & {
        Component: NextPageWithLayout,
        emotionCache?: EmotionCache
    }

    interface ServerResponseError {
        detail: string;
    }


}