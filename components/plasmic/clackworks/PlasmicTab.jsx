// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ggKD3RisT9Ubzud33WNkiG
// Component: IaDjY5xN7v
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import TabLink from "../../TabLink"; // plasmic-import: 8uLYq857Fx/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_clackworks.module.css"; // plasmic-import: ggKD3RisT9Ubzud33WNkiG/projectcss
import sty from "./PlasmicTab.module.css"; // plasmic-import: IaDjY5xN7v/css

export const PlasmicTab__VariantProps = new Array();

export const PlasmicTab__ArgProps = new Array();

function PlasmicTab__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = args;
  return (
    <div
      data-plasmic-name={"tab"}
      data-plasmic-override={overrides.tab}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.tab
      )}
    >
      <TabLink className={classNames("__wab_instance", sty.tabLink__gaKWg)}>
        <p.Trans>{"Products"}</p.Trans>
      </TabLink>

      <TabLink className={classNames("__wab_instance", sty.tabLink__umf6H)}>
        <p.Trans>{"Services"}</p.Trans>
      </TabLink>
    </div>
  );
}

const PlasmicDescendants = {
  tab: ["tab"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicTab__ArgProps,
          internalVariantPropNames: PlasmicTab__VariantProps
        }),

      [props, nodeName]
    );

    return PlasmicTab__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "tab") {
    func.displayName = "PlasmicTab";
  } else {
    func.displayName = `PlasmicTab.${nodeName}`;
  }
  return func;
}

export const PlasmicTab = Object.assign(
  // Top-level PlasmicTab renders the root element
  makeNodeComponent("tab"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicTab
    internalVariantProps: PlasmicTab__VariantProps,
    internalArgProps: PlasmicTab__ArgProps
  }
);

export default PlasmicTab;
/* prettier-ignore-end */
