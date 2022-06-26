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
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { CmsRowImage } from "@plasmicpkgs/plasmic-cms"; // plasmic-import: dj_Vc2QmFA/codeComponent
import { CmsRowField } from "@plasmicpkgs/plasmic-cms"; // plasmic-import: w6HdOz-Pcn/codeComponent
import { useScreenVariants as useScreenVariantsfWbazDhpHIcD } from "../clackworks/PlasmicGlobalVariant__Screen"; // plasmic-import: fWbazDhpHIc_D/globalVariant
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
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsfWbazDhpHIcD()
  });

  return (
    <article
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
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
              displayHeight={
                hasVariant(globalVariants, "screen", "mobileOnly")
                  ? "auto"
                  : "100%"
              }
              displayMaxHeight={"none"}
              displayMaxWidth={"none"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={
                hasVariant(globalVariants, "screen", "mobileOnly")
                  ? "100%"
                  : "100%"
              }
              loading={"lazy"}
              src={"https://studio.plasmic.app/static/img/placeholder-full.png"}
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
                data-plasmic-name={"cmsEntryField"}
                data-plasmic-override={overrides.cmsEntryField}
                className={classNames("__wab_instance", sty.cmsEntryField)}
              />

              <p.PlasmicLink
                data-plasmic-name={"link"}
                data-plasmic-override={overrides.link}
                className={classNames(projectcss.all, projectcss.a, sty.link)}
                component={Link}
                platform={"nextjs"}
              >
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
              </p.PlasmicLink>
            </p.Stack>
          ) : null}
        </p.Stack>
      ) : null}
    </article>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "productTop",
    "cmsEntryImage",
    "img",
    "productInfo",
    "productInfoBottom",
    "cmsEntryField",
    "link",
    "text"
  ],

  productTop: ["productTop", "cmsEntryImage", "img"],
  cmsEntryImage: ["cmsEntryImage", "img"],
  img: ["img"],
  productInfo: [
    "productInfo",
    "productInfoBottom",
    "cmsEntryField",
    "link",
    "text"
  ],

  productInfoBottom: ["productInfoBottom", "cmsEntryField", "link", "text"],
  cmsEntryField: ["cmsEntryField"],
  link: ["link", "text"],
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
    productTop: makeNodeComponent("productTop"),
    cmsEntryImage: makeNodeComponent("cmsEntryImage"),
    img: makeNodeComponent("img"),
    productInfo: makeNodeComponent("productInfo"),
    productInfoBottom: makeNodeComponent("productInfoBottom"),
    cmsEntryField: makeNodeComponent("cmsEntryField"),
    link: makeNodeComponent("link"),
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicArticleCard
    internalVariantProps: PlasmicArticleCard__VariantProps,
    internalArgProps: PlasmicArticleCard__ArgProps
  }
);

export default PlasmicArticleCard;
/* prettier-ignore-end */
