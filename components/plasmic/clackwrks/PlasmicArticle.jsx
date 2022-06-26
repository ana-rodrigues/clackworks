// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ggKD3RisT9Ubzud33WNkiG
// Component: R372J40yRp
import * as React from "react";
import Link from "next/link";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Footer from "../../Footer"; // plasmic-import: RqtriAgyOg/component
import { CmsQueryRepeater } from "@plasmicpkgs/plasmic-cms"; // plasmic-import: 8N9-WfZSaq/codeComponent
import { CmsRowImage } from "@plasmicpkgs/plasmic-cms"; // plasmic-import: dj_Vc2QmFA/codeComponent
import { CmsRowField } from "@plasmicpkgs/plasmic-cms"; // plasmic-import: w6HdOz-Pcn/codeComponent
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "../clackworks/plasmic_clackworks.module.css"; // plasmic-import: ggKD3RisT9Ubzud33WNkiG/projectcss
import sty from "./PlasmicArticle.module.css"; // plasmic-import: R372J40yRp/css

export const PlasmicArticle__VariantProps = new Array();

export const PlasmicArticle__ArgProps = new Array();

export const defaultArticle__Args = {};

function PlasmicArticle__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultArticle__Args, props.args);
  const $props = args;
  const $ctx = ph.useDataEnv?.() || {};
  return (
    <React.Fragment>
      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"layout"}
          data-plasmic-override={overrides.layout}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.layout
          )}
        >
          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />

          {true ? (
            <p.Stack
              as={"article"}
              data-plasmic-name={"article"}
              data-plasmic-override={overrides.article}
              hasGap={true}
              className={classNames(projectcss.all, sty.article)}
            >
              <p.PlasmicLink
                data-plasmic-name={"link"}
                data-plasmic-override={overrides.link}
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link
                )}
                component={Link}
                href={"/"}
                platform={"nextjs"}
              >
                <p.Trans>{"← Back to Home"}</p.Trans>
              </p.PlasmicLink>

              <CmsQueryRepeater
                data-plasmic-name={"cmsDataLoader"}
                data-plasmic-override={overrides.cmsDataLoader}
                className={classNames("__wab_instance", sty.cmsDataLoader)}
                desc={false}
                emptyMessage={
                  <ph.DataCtxReader>
                    {$ctx => (
                      <>
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__tkRH
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
                filterField={"productName"}
                filterValue={""}
                forceEmptyState={false}
                forceLoadingState={false}
                limit={1}
                loadingMessage={
                  <ph.DataCtxReader>
                    {$ctx => (
                      <>
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__iw0Gu
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
                      <p.Stack
                        as={"article"}
                        data-plasmic-name={"articleHero"}
                        data-plasmic-override={overrides.articleHero}
                        hasGap={true}
                        className={classNames(projectcss.all, sty.articleHero)}
                      >
                        <CmsRowImage
                          data-plasmic-name={"cmsEntryImage"}
                          data-plasmic-override={overrides.cmsEntryImage}
                          className={classNames(
                            "__wab_instance",
                            sty.cmsEntryImage
                          )}
                          srcProp={"src"}
                        >
                          <p.PlasmicImg
                            data-plasmic-name={"img"}
                            data-plasmic-override={overrides.img}
                            alt={""}
                            className={classNames(sty.img)}
                            displayHeight={"auto"}
                            displayMaxHeight={"none"}
                            displayMaxWidth={"none"}
                            displayMinHeight={"0"}
                            displayMinWidth={"0"}
                            displayWidth={"40%"}
                            src={
                              "https://studio.plasmic.app/static/img/placeholder-full.png"
                            }
                          />
                        </CmsRowImage>

                        {true ? (
                          <div
                            data-plasmic-name={"info"}
                            data-plasmic-override={overrides.info}
                            className={classNames(projectcss.all, sty.info)}
                          >
                            <CmsRowField
                              className={classNames(
                                "__wab_instance",
                                sty.cmsEntryField__xF3Z3
                              )}
                              field={"articleTag"}
                              table={"article"}
                            />

                            <CmsRowField
                              className={classNames(
                                "__wab_instance",
                                sty.cmsEntryField__nmy0D
                              )}
                              field={"articleTitle"}
                              table={"article"}
                            />

                            <CmsRowField
                              className={classNames(
                                "__wab_instance",
                                sty.cmsEntryField__xjoJh
                              )}
                              dateFormat={"MMMM D, YYYY"}
                              field={"articleDate"}
                            />
                          </div>
                        ) : null}
                      </p.Stack>

                      <CmsRowField
                        className={classNames(
                          "__wab_instance",
                          sty.cmsEntryField__jqYAr
                        )}
                        field={"articleBody"}
                        table={"article"}
                      />
                    </>
                  )}
                </ph.DataCtxReader>
              </CmsQueryRepeater>
            </p.Stack>
          ) : null}
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  layout: [
    "layout",
    "footer",
    "article",
    "link",
    "cmsDataLoader",
    "articleHero",
    "cmsEntryImage",
    "img",
    "info"
  ],

  footer: ["footer"],
  article: [
    "article",
    "link",
    "cmsDataLoader",
    "articleHero",
    "cmsEntryImage",
    "img",
    "info"
  ],

  link: ["link"],
  cmsDataLoader: [
    "cmsDataLoader",
    "articleHero",
    "cmsEntryImage",
    "img",
    "info"
  ],

  articleHero: ["articleHero", "cmsEntryImage", "img", "info"],
  cmsEntryImage: ["cmsEntryImage", "img"],
  img: ["img"],
  info: ["info"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicArticle__ArgProps,
      internalVariantPropNames: PlasmicArticle__VariantProps
    });

    return PlasmicArticle__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "layout") {
    func.displayName = "PlasmicArticle";
  } else {
    func.displayName = `PlasmicArticle.${nodeName}`;
  }
  return func;
}

export const PlasmicArticle = Object.assign(
  // Top-level PlasmicArticle renders the root element
  makeNodeComponent("layout"),
  {
    // Helper components rendering sub-elements
    footer: makeNodeComponent("footer"),
    article: makeNodeComponent("article"),
    link: makeNodeComponent("link"),
    cmsDataLoader: makeNodeComponent("cmsDataLoader"),
    articleHero: makeNodeComponent("articleHero"),
    cmsEntryImage: makeNodeComponent("cmsEntryImage"),
    img: makeNodeComponent("img"),
    info: makeNodeComponent("info"),
    // Metadata about props expected for PlasmicArticle
    internalVariantProps: PlasmicArticle__VariantProps,
    internalArgProps: PlasmicArticle__ArgProps
  }
);

export default PlasmicArticle;
/* prettier-ignore-end */
