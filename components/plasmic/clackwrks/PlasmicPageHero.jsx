// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ggKD3RisT9Ubzud33WNkiG
// Component: JYReltgUmo
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
import sty from "./PlasmicPageHero.module.css"; // plasmic-import: JYReltgUmo/css

export const PlasmicPageHero__VariantProps = new Array();

export const PlasmicPageHero__ArgProps = new Array();

function PlasmicPageHero__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = args;
  return true ? (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <p.Stack
        as={"hgroup"}
        data-plasmic-name={"heroHeading"}
        data-plasmic-override={overrides.heroHeading}
        hasGap={true}
        className={classNames(projectcss.all, sty.heroHeading)}
      >
        <h1
          data-plasmic-name={"h1"}
          data-plasmic-override={overrides.h1}
          className={classNames(
            projectcss.all,
            projectcss.h1,
            projectcss.__wab_text,
            sty.h1
          )}
        >
          <p.Trans>{"Ready, steady, clack"}</p.Trans>
        </h1>
      </p.Stack>

      <p.PlasmicImg
        data-plasmic-name={"img"}
        data-plasmic-override={overrides.img}
        alt={""}
        className={classNames(sty.img)}
        displayHeight={"auto"}
        displayMaxHeight={"none"}
        displayMaxWidth={"50%"}
        displayMinHeight={"0"}
        displayMinWidth={"0"}
        displayWidth={"auto"}
        loading={"lazy"}
        src={{
          src: "/plasmic/clackwrks/images/illustrationpng.png",
          fullWidth: 1176,
          fullHeight: 1298,
          aspectRatio: undefined
        }}
      />
    </p.Stack>
  ) : null;
}

const PlasmicDescendants = {
  root: ["root", "heroHeading", "h1", "img"],
  heroHeading: ["heroHeading", "h1"],
  h1: ["h1"],
  img: ["img"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicPageHero__ArgProps,
          internalVariantPropNames: PlasmicPageHero__VariantProps
        }),

      [props, nodeName]
    );

    return PlasmicPageHero__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPageHero";
  } else {
    func.displayName = `PlasmicPageHero.${nodeName}`;
  }
  return func;
}

export const PlasmicPageHero = Object.assign(
  // Top-level PlasmicPageHero renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    heroHeading: makeNodeComponent("heroHeading"),
    h1: makeNodeComponent("h1"),
    img: makeNodeComponent("img"),
    // Metadata about props expected for PlasmicPageHero
    internalVariantProps: PlasmicPageHero__VariantProps,
    internalArgProps: PlasmicPageHero__ArgProps
  }
);

export default PlasmicPageHero;
/* prettier-ignore-end */
