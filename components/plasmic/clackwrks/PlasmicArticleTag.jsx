// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ggKD3RisT9Ubzud33WNkiG
// Component: kPmElHXrXA
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "../clackworks/plasmic_clackworks.module.css"; // plasmic-import: ggKD3RisT9Ubzud33WNkiG/projectcss
import sty from "./PlasmicArticleTag.module.css"; // plasmic-import: kPmElHXrXA/css

export const PlasmicArticleTag__VariantProps = new Array();

export const PlasmicArticleTag__ArgProps = new Array("children");

export const defaultArticleTag__Args = {};

function PlasmicArticleTag__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultArticleTag__Args, props.args);
  const $props = args;
  const $ctx = ph.useDataEnv?.() || {};
  return (
    <div
      data-plasmic-name={"tag"}
      data-plasmic-override={overrides.tag}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.tag
      )}
    >
      {p.renderPlasmicSlot({
        defaultContents: "LABEL",
        value: args.children,
        className: classNames(sty.slotTargetChildren)
      })}
    </div>
  );
}

const PlasmicDescendants = {
  tag: ["tag"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicArticleTag__ArgProps,
      internalVariantPropNames: PlasmicArticleTag__VariantProps
    });

    return PlasmicArticleTag__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "tag") {
    func.displayName = "PlasmicArticleTag";
  } else {
    func.displayName = `PlasmicArticleTag.${nodeName}`;
  }
  return func;
}

export const PlasmicArticleTag = Object.assign(
  // Top-level PlasmicArticleTag renders the root element
  makeNodeComponent("tag"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicArticleTag
    internalVariantProps: PlasmicArticleTag__VariantProps,
    internalArgProps: PlasmicArticleTag__ArgProps
  }
);

export default PlasmicArticleTag;
/* prettier-ignore-end */
