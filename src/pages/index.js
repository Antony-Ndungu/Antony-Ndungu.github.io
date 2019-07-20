import React, { lazy, Suspense } from "react";
import ErrorBoundary from "../components/ErrorBoundary";
import Layout from "../components/layout";
import Loader from "../components/Loader";
const SocialMediaButtons = lazy(() => import("../components/socialMediaButtons"));
const Me = lazy(() => import("../components/Me"));

const renderLoader = () => <Loader/>;

export default () => (
    <ErrorBoundary>
        <Layout>
            <div className="w3-padding-32 w3-container w3-center w3-animate-zoom" style={{ textShadow: "1px 1px 0 #444", }}>
                <Suspense fallback={renderLoader()}>
                    <Me />
                    <SocialMediaButtons />
                </Suspense>
            </div>
            <div style={{ clear: "both" }}></div>
        </Layout>
    </ErrorBoundary>
);
