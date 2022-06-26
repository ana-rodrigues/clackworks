// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ggKD3RisT9Ubzud33WNkiG
// Component: QQg6AVsQ0X
import * as React from "react";
import Head from "next/head";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Footer from "../../Footer"; // plasmic-import: RqtriAgyOg/component
import { CmsQueryRepeater } from "@plasmicpkgs/plasmic-cms"; // plasmic-import: 8N9-WfZSaq/codeComponent
import ArticleCard from "../../ArticleCard"; // plasmic-import: AHLMP-tgYM/component
import ProductCard from "../../ProductCard"; // plasmic-import: 1Fr4_fFN1w/component
import { useScreenVariants as useScreenVariantsfWbazDhpHIcD } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: fWbazDhpHIc_D/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "../clackworks/plasmic_clackworks.module.css"; // plasmic-import: ggKD3RisT9Ubzud33WNkiG/projectcss
import sty from "./PlasmicHome.module.css"; // plasmic-import: QQg6AVsQ0X/css

export const PlasmicHome__VariantProps = new Array();

export const PlasmicHome__ArgProps = new Array("imageSrc");

export const defaultHome__Args = {};

function PlasmicHome__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultHome__Args, props.args);
  const $props = args;
  const $ctx = ph.useDataEnv?.() || {};
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsfWbazDhpHIcD()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{"Home"}</title>
        <meta key="og:title" property="og:title" content={"Home"} />

        <link ref="canonical" href={"https://clackwrks.com"} />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      {true ? (
        <div
          data-plasmic-name={"body"}
          data-plasmic-override={overrides.body}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.body
          )}
        >
          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />

          <p.Stack
            as={"div"}
            data-plasmic-name={"layout"}
            data-plasmic-override={overrides.layout}
            hasGap={true}
            className={classNames(projectcss.all, sty.layout)}
          >
            {true ? (
              <div
                data-plasmic-name={"articles"}
                data-plasmic-override={overrides.articles}
                className={classNames(projectcss.all, sty.articles)}
              >
                {true ? (
                  <div
                    data-plasmic-name={"headingLeft"}
                    data-plasmic-override={overrides.headingLeft}
                    className={classNames(projectcss.all, sty.headingLeft)}
                  >
                    <h2
                      className={classNames(
                        projectcss.all,
                        projectcss.h2,
                        projectcss.__wab_text,
                        sty.h2___6Yu7X
                      )}
                    >
                      <p.Trans>{"All articles"}</p.Trans>
                    </h2>
                  </div>
                ) : null}

                <div
                  data-plasmic-name={"articleList"}
                  data-plasmic-override={overrides.articleList}
                  className={classNames(projectcss.all, sty.articleList)}
                >
                  <CmsQueryRepeater
                    className={classNames(
                      "__wab_instance",
                      sty.cmsDataLoader__br0U
                    )}
                    desc={false}
                    emptyMessage={
                      <ph.DataCtxReader>
                        {$ctx => (
                          <>
                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text__ooZnD
                              )}
                            >
                              <p.Trans>
                                {"No matching published entries found."}
                              </p.Trans>
                            </div>
                          </>
                        )}
                      </ph.DataCtxReader>
                    }
                    forceEmptyState={false}
                    forceLoadingState={false}
                    limit={25}
                    loadingMessage={
                      <ph.DataCtxReader>
                        {$ctx => (
                          <>
                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text__ptk2Y
                              )}
                            >
                              <p.Trans>{"Loading..."}</p.Trans>
                            </div>
                          </>
                        )}
                      </ph.DataCtxReader>
                    }
                    noLayout={false}
                    table={"article"}
                    useDraft={false}
                  >
                    <ph.DataCtxReader>
                      {$ctx => (
                        <>
                          <ArticleCard
                            data-plasmic-name={"articleCard"}
                            data-plasmic-override={overrides.articleCard}
                            className={classNames(
                              "__wab_instance",
                              sty.articleCard
                            )}
                          />
                        </>
                      )}
                    </ph.DataCtxReader>
                  </CmsQueryRepeater>
                </div>
              </div>
            ) : null}

            <div
              data-plasmic-name={"products"}
              data-plasmic-override={overrides.products}
              className={classNames(projectcss.all, sty.products)}
            >
              {true ? (
                <div
                  data-plasmic-name={"headingRight"}
                  data-plasmic-override={overrides.headingRight}
                  className={classNames(projectcss.all, sty.headingRight)}
                >
                  <h2
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2__bs4Ia
                    )}
                  >
                    <p.Trans>{"Keebs"}</p.Trans>
                  </h2>
                </div>
              ) : null}

              <p.Stack
                as={"div"}
                data-plasmic-name={"productsList"}
                data-plasmic-override={overrides.productsList}
                hasGap={true}
                className={classNames(projectcss.all, sty.productsList)}
              >
                <CmsQueryRepeater
                  className={classNames(
                    "__wab_instance",
                    sty.cmsDataLoader__q8Y5M
                  )}
                  desc={true}
                  emptyMessage={
                    <ph.DataCtxReader>
                      {$ctx => (
                        <>
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__wcFFw
                            )}
                          >
                            <p.Trans>
                              {"No matching published entries found."}
                            </p.Trans>
                          </div>
                        </>
                      )}
                    </ph.DataCtxReader>
                  }
                  filterValue={""}
                  forceEmptyState={false}
                  forceLoadingState={false}
                  limit={0}
                  loadingMessage={
                    <ph.DataCtxReader>
                      {$ctx => (
                        <>
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__uZoqt
                            )}
                          >
                            <p.Trans>{"Loading..."}</p.Trans>
                          </div>
                        </>
                      )}
                    </ph.DataCtxReader>
                  }
                  noLayout={false}
                  orderBy={"productName"}
                  table={"product"}
                  useDraft={false}
                >
                  <ph.DataCtxReader>
                    {$ctx => (
                      <>
                        <ProductCard
                          data-plasmic-name={"productCard"}
                          data-plasmic-override={overrides.productCard}
                          className={classNames(
                            "__wab_instance",
                            sty.productCard
                          )}
                        />
                      </>
                    )}
                  </ph.DataCtxReader>
                </CmsQueryRepeater>
              </p.Stack>
            </div>
          </p.Stack>
        </div>
      ) : null}
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  body: [
    "body",
    "footer",
    "layout",
    "articles",
    "headingLeft",
    "articleList",
    "articleCard",
    "products",
    "headingRight",
    "productsList",
    "productCard"
  ],

  footer: ["footer"],
  layout: [
    "layout",
    "articles",
    "headingLeft",
    "articleList",
    "articleCard",
    "products",
    "headingRight",
    "productsList",
    "productCard"
  ],

  articles: ["articles", "headingLeft", "articleList", "articleCard"],
  headingLeft: ["headingLeft"],
  articleList: ["articleList", "articleCard"],
  articleCard: ["articleCard"],
  products: ["products", "headingRight", "productsList", "productCard"],
  headingRight: ["headingRight"],
  productsList: ["productsList", "productCard"],
  productCard: ["productCard"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHome__ArgProps,
      internalVariantPropNames: PlasmicHome__VariantProps
    });

    return PlasmicHome__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "body") {
    func.displayName = "PlasmicHome";
  } else {
    func.displayName = `PlasmicHome.${nodeName}`;
  }
  return func;
}

export const PlasmicHome = Object.assign(
  // Top-level PlasmicHome renders the root element
  makeNodeComponent("body"),
  {
    // Helper components rendering sub-elements
    footer: makeNodeComponent("footer"),
    layout: makeNodeComponent("layout"),
    articles: makeNodeComponent("articles"),
    headingLeft: makeNodeComponent("headingLeft"),
    articleList: makeNodeComponent("articleList"),
    articleCard: makeNodeComponent("articleCard"),
    products: makeNodeComponent("products"),
    headingRight: makeNodeComponent("headingRight"),
    productsList: makeNodeComponent("productsList"),
    productCard: makeNodeComponent("productCard"),
    // Metadata about props expected for PlasmicHome
    internalVariantProps: PlasmicHome__VariantProps,
    internalArgProps: PlasmicHome__ArgProps
  }
);

export default PlasmicHome;
/* prettier-ignore-end */
