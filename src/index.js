/**
 * Build styles
 */
import './index.css';

import { IconHorizontalLine } from './line.js';

/**
 * Thematic Block for the Editor.js.
 *
 * @author CodeX (team@ifmo.su)
 * @copyright CodeX 2018
 * @license The MIT License (MIT)
 * @version 2.0.0
 */

/**
 * @typedef {Object} ThematicData
 * @description Tool's input and output data format
 */
export default class ThematicBreak {

  /**
   * Notify core that read-only mode is supported
   * @return {boolean}
   */
  static get isReadOnlySupported() {
    return true;
  }

  /**
   * Allow Tool to have no content
   * @return {boolean}
   */
  static get contentless() {
    return true;
  }

  /**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {{data: ThematicData, config: object, api: object}}
   *   data — previously saved data
   *   config - user config for Tool
   *   api - Editor.js API
   */
  constructor({data, config, api}) {
    this.api = api;

    this._CSS = {
      block: this.api.styles.block,
      wrapper: 'ce-thematic'
    };

    this._data = {};
    this._element = this.drawView();

    this.data = data;
  }

  /**
   * Create Tool's view
   * @return {HTMLElement}
   * @private
   */
  drawView() {
    const div = document.createElement('DIV');
    const hr = document.createElement('HR');
    div.appendChild(hr);

    div.classList.add(this._CSS.wrapper, this._CSS.block);

    return div;
  }

  /**
   * Return Tool's view
   * @returns {HTMLDivElement}
   * @public
   */
  render() {
    return this._element;
  }

  /**
   * Extract Tool's data from the view
   * @param {HTMLDivElement} toolsContent - Paragraph tools rendered view
   * @returns {ThematicData} - saved data
   * @public
   */
  save(toolsContent) {
    return {};
  }

  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @return {{icon: string, title: string}}
   */
  static get toolbox() {
    return {
      icon: IconHorizontalLine,
      title: 'Thematic Break'
    };
  }
}

