// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ggKD3RisT9Ubzud33WNkiG
// Component: AHLMP-tgYM
import * as React from "react";
import Link from "next/link";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  classNames,
  createPlasmicElementProxy,
  useTrigger,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import { CmsRowImage } from "@plasmicpkgs/plasmic-cms"; // plasmic-import: dj_Vc2QmFA/codeComponent
import { CmsRowField } from "@plasmicpkgs/plasmic-cms"; // plasmic-import: w6HdOz-Pcn/codeComponent
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "../clackworks/plasmic_clackworks.module.css"; // plasmic-import: ggKD3RisT9Ubzud33WNkiG/projectcss
import sty from "./PlasmicArticleCard.module.css"; // plasmic-import: AHLMP-tgYM/css

export const PlasmicArticleCard__VariantProps = new Array();

export const PlasmicArticleCard__ArgProps = new Array("bgColor");

export const defaultArticleCard__Args = {};

function PlasmicArticleCard__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultArticleCard__Args, props.args);
  const $props = args;
  const $ctx = ph.useDataEnv?.() || {};
  const [isRootHover, triggerRootHoverProps] = useTrigger("useHover", {});
  const triggers = {
    hover_root: isRootHover
  };

  return (
    <p.PlasmicLink
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.a,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
      component={Link}
      platform={"nextjs"}
      data-plasmic-trigger-props={[triggerRootHoverProps]}
    >
      <article
        data-plasmic-name={"article"}
        data-plasmic-override={overrides.article}
        className={classNames(projectcss.all, sty.article)}
      >
        {true ? (
          <div
            data-plasmic-name={"productTop"}
            data-plasmic-override={overrides.productTop}
            className={classNames(projectcss.all, sty.productTop)}
          >
            <CmsRowImage
              data-plasmic-name={"cmsEntryImage"}
              data-plasmic-override={overrides.cmsEntryImage}
              className={classNames("__wab_instance", sty.cmsEntryImage)}
              field={"articleImage"}
              srcProp={"src"}
            >
              <p.PlasmicImg
                data-plasmic-name={"img"}
                data-plasmic-override={overrides.img}
                alt={""}
                className={classNames(sty.img)}
                displayHeight={"100%"}
                displayMaxHeight={"none"}
                displayMaxWidth={"none"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"100%"}
                loading={"lazy"}
                src={
                  "https://studio.plasmic.app/static/img/placeholder-full.png"
                }
              />
            </CmsRowImage>
          </div>
        ) : null}
        {true ? (
          <p.Stack
            as={"div"}
            data-plasmic-name={"productInfo"}
            data-plasmic-override={overrides.productInfo}
            hasGap={true}
            className={classNames(projectcss.all, sty.productInfo)}
          >
            {true ? (
              <p.Stack
                as={"div"}
                data-plasmic-name={"productInfoBottom"}
                data-plasmic-override={overrides.productInfoBottom}
                hasGap={true}
                className={classNames(projectcss.all, sty.productInfoBottom)}
              >
                <CmsRowField
                  className={classNames(
                    "__wab_instance",
                    sty.cmsEntryField__cXuGs
                  )}
                  field={"articleTag"}
                />

                {(triggers.hover_root ? true : true) ? (
                  <CmsRowField
                    className={classNames(
                      "__wab_instance",
                      sty.cmsEntryField__jIxXe
                    )}
                  />
                ) : null}
                {(triggers.hover_root ? true : false) ? (
                  <div
                    data-plasmic-name={"text"}
                    data-plasmic-override={overrides.text}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text
                    )}
                  >
                    <p.Trans>{"Read more →"}</p.Trans>
                  </div>
                ) : null}
              </p.Stack>
            ) : null}
          </p.Stack>
        ) : null}
      </article>
    </p.PlasmicLink>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "article",
    "productTop",
    "cmsEntryImage",
    "img",
    "productInfo",
    "productInfoBottom",
    "text"
  ],

  article: [
    "article",
    "productTop",
    "cmsEntryImage",
    "img",
    "productInfo",
    "productInfoBottom",
    "text"
  ],

  productTop: ["productTop", "cmsEntryImage", "img"],
  cmsEntryImage: ["cmsEntryImage", "img"],
  img: ["img"],
  productInfo: ["productInfo", "productInfoBottom", "text"],
  productInfoBottom: ["productInfoBottom", "text"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicArticleCard__ArgProps,
      internalVariantPropNames: PlasmicArticleCard__VariantProps
    });

    return PlasmicArticleCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicArticleCard";
  } else {
    func.displayName = `PlasmicArticleCard.${nodeName}`;
  }
  return func;
}

export const PlasmicArticleCard = Object.assign(
  // Top-level PlasmicArticleCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    article: makeNodeComponent("article"),
    productTop: makeNodeComponent("productTop"),
    cmsEntryImage: makeNodeComponent("cmsEntryImage"),
    img: makeNodeComponent("img"),
    productInfo: makeNodeComponent("productInfo"),
    productInfoBottom: makeNodeComponent("productInfoBottom"),
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicArticleCard
    internalVariantProps: PlasmicArticleCard__VariantProps,
    internalArgProps: PlasmicArticleCard__ArgProps
  }
);

export default PlasmicArticleCard;
/* prettier-ignore-end */