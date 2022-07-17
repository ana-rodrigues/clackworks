// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ggKD3RisT9Ubzud33WNkiG
// Component: jbimC5mwcH
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import ButtonPrimary from "../../ButtonPrimary"; // plasmic-import: lgaro2SfB7/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "../clackworks/plasmic_clackworks.module.css"; // plasmic-import: ggKD3RisT9Ubzud33WNkiG/projectcss
import sty from "./PlasmicProductInformation.module.css"; // plasmic-import: jbimC5mwcH/css

export const PlasmicProductInformation__VariantProps = new Array();

export const PlasmicProductInformation__ArgProps = new Array("children");

function PlasmicProductInformation__RenderFunc(props) {
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
      {p.renderPlasmicSlot({
        defaultContents: (
          <React.Fragment>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__d9Nh
              )}
            >
              <p.Trans>
                {
                  "An affordable 60% keyboard with a tactile feel, built for everyday writers."
                }
              </p.Trans>
            </div>

            <div className={classNames(projectcss.all, sty.freeBox__j1M8Z)}>
              {true ? (
                <div className={classNames(projectcss.all, sty.freeBox__iBLgf)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___6OwLg
                    )}
                  >
                    <p.Trans>{"Mocha 60% build"}</p.Trans>
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__agEsI
                    )}
                  >
                    <p.Trans>{"From €129"}</p.Trans>
                  </div>
                </div>
              ) : null}

              <ButtonPrimary
                className={classNames(
                  "__wab_instance",
                  sty.buttonPrimary__pCtgp
                )}
              />
            </div>
          </React.Fragment>
        ),

        value: args.children
      })}
    </p.Stack>
  ) : null;
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicProductInformation__ArgProps,
          internalVariantPropNames: PlasmicProductInformation__VariantProps
        }),

      [props, nodeName]
    );

    return PlasmicProductInformation__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProductInformation";
  } else {
    func.displayName = `PlasmicProductInformation.${nodeName}`;
  }
  return func;
}

export const PlasmicProductInformation = Object.assign(
  // Top-level PlasmicProductInformation renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicProductInformation
    internalVariantProps: PlasmicProductInformation__VariantProps,
    internalArgProps: PlasmicProductInformation__ArgProps
  }
);

export default PlasmicProductInformation;
/* prettier-ignore-end */
