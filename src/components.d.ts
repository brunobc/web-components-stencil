/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface UcSideDrawer {
    'open': () => void;
    'opened': boolean;
    'title': string;
  }
  interface UcSideDrawerAttributes extends StencilHTMLAttributes {
    'opened'?: boolean;
    'title'?: string;
  }

  interface UcStockFinder {}
  interface UcStockFinderAttributes extends StencilHTMLAttributes {}

  interface UcStockPrice {
    'stockSymbol': string;
  }
  interface UcStockPriceAttributes extends StencilHTMLAttributes {
    'stockSymbol'?: string;
  }

  interface UcTooltip {
    'text': string;
  }
  interface UcTooltipAttributes extends StencilHTMLAttributes {
    'text'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'UcSideDrawer': Components.UcSideDrawer;
    'UcStockFinder': Components.UcStockFinder;
    'UcStockPrice': Components.UcStockPrice;
    'UcTooltip': Components.UcTooltip;
  }

  interface StencilIntrinsicElements {
    'uc-side-drawer': Components.UcSideDrawerAttributes;
    'uc-stock-finder': Components.UcStockFinderAttributes;
    'uc-stock-price': Components.UcStockPriceAttributes;
    'uc-tooltip': Components.UcTooltipAttributes;
  }


  interface HTMLUcSideDrawerElement extends Components.UcSideDrawer, HTMLStencilElement {}
  var HTMLUcSideDrawerElement: {
    prototype: HTMLUcSideDrawerElement;
    new (): HTMLUcSideDrawerElement;
  };

  interface HTMLUcStockFinderElement extends Components.UcStockFinder, HTMLStencilElement {}
  var HTMLUcStockFinderElement: {
    prototype: HTMLUcStockFinderElement;
    new (): HTMLUcStockFinderElement;
  };

  interface HTMLUcStockPriceElement extends Components.UcStockPrice, HTMLStencilElement {}
  var HTMLUcStockPriceElement: {
    prototype: HTMLUcStockPriceElement;
    new (): HTMLUcStockPriceElement;
  };

  interface HTMLUcTooltipElement extends Components.UcTooltip, HTMLStencilElement {}
  var HTMLUcTooltipElement: {
    prototype: HTMLUcTooltipElement;
    new (): HTMLUcTooltipElement;
  };

  interface HTMLElementTagNameMap {
    'uc-side-drawer': HTMLUcSideDrawerElement
    'uc-stock-finder': HTMLUcStockFinderElement
    'uc-stock-price': HTMLUcStockPriceElement
    'uc-tooltip': HTMLUcTooltipElement
  }

  interface ElementTagNameMap {
    'uc-side-drawer': HTMLUcSideDrawerElement;
    'uc-stock-finder': HTMLUcStockFinderElement;
    'uc-stock-price': HTMLUcStockPriceElement;
    'uc-tooltip': HTMLUcTooltipElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
